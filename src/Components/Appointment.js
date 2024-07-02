import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../context/ApiContext';

const Appointment = () => {
    const context = useContext(ApiContext);
    const { appointments, getAppointment, addAppointment, deleteAppointment, editAppointment } = context;
    const [patientName, setPatientName] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [date, setDate] = useState('');
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);

    useEffect(() => {
        getAppointment();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditMode) {
            editAppointment(selectedAppointment._id, patientName, doctorName, date);
        }
        else {
            addAppointment(patientName, doctorName, date);
        }
        console.log(patientName, doctorName, date)
        setPatientName('');
        setDoctorName('');
        setDate('');
        setSelectedAppointment(null);
        setIsEditMode(false);
    };
    const handleEditClick = (appointment) => {
        setPatientName(appointment.patientName);
        setDoctorName(appointment.doctorName);
        setDate(appointment.date);
        setSelectedAppointment(appointment);
        setIsEditMode(true);
    };

    return (
        <>
            <div style={{
                display: "grid",
                gridTemplateColumns: "auto auto auto",

            }}>
                <div className='p-4 '>
                    <h1>{isEditMode ? 'Edit Appointment' : 'Add Appointment'}</h1>
                    <form onSubmit={handleSubmit} className="container my-4">
                        <div className="form-group">
                            <label htmlFor="patientName">Patient Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="patientName"
                                placeholder="Enter Patient Name"
                                value={patientName}
                                onChange={(e) => setPatientName(e.target.value)}
                                style={{ width: "300px" }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="doctorName">Doctor Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="doctorName"
                                placeholder="Enter Doctor Name"
                                value={doctorName}
                                onChange={(e) => setDoctorName(e.target.value)}
                                style={{ width: "300px" }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                className="form-control "
                                id="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                style={{ width: "300px" }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">{isEditMode?"Update":"Add"}</button>


                    </form>
                </div>
                <div className='p-4'>
                    <div className="row">
                        <h1 className="col-12">Your Appointments</h1>
                        <div style={{
                            maxHeight: "400px", overflowY: "auto",
                            marginTop: "0px",
                            display: "flex",
                            flexWrap: "wrap"

                        }}>
                            {appointments.length === 0 && "No appointments to display"}
                            {Array.isArray(appointments) && appointments.map((appointment) => (
                                <div className="col-md-6 col-lg-4 col-xl-4 small " key={appointment._id} >
                                    <div className="card my-3">
                                        <div className="card-body">
                                            <p>Patient Name: {appointment.patientName}</p>
                                            <p>Doctor Name: {appointment.doctorName}</p>
                                            <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
                                        </div>
                                        <div className="d-flex justify-content-between card-footer">
                                            <span className="fa-solid fa-trash" style={{ cursor: 'pointer' }} onClick={() => { deleteAppointment(appointment._id) }}></span>
                                            <span className="fa-regular fa-pen-to-square" style={{ cursor: 'pointer' }} onClick={() => handleEditClick(appointment)}></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div >
        </>
    );
};

export default Appointment;
