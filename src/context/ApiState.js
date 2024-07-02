import React, { useState } from 'react'
import ApiContext from './ApiContext'
const ApiState = (props) => {
    const host = "http://localhost:5000"
    const appointmentInitial = []
    const paitentInitial = []
    const doctorInitial = []
    const [appointments, setAppointments] = useState(appointmentInitial)
    const [paitents, setPaitents] = useState(paitentInitial)
    const [doctors, setDoctors] = useState(doctorInitial)

    //APPOINTMENT
    const getAppointment = async () => {

        try {
            const response = await fetch(`${host}/api/appointment/`, {
                method: "GET",
            });
            const json = await response.json()
            setAppointments(json);
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by showing an error message to the user
        }
    }
    const addAppointment = async (patientName, doctorName, date) => {
        try {
            const response = await fetch(`${host}/api/appointment/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ patientName, doctorName, date })
            });
            const newAppointment = await response.json();
            setAppointments(prevAppointments => [...prevAppointments, newAppointment]);

        } catch (error) {
            console.error(error);
        }
    };
    const deleteAppointment = async (id) => {
        try {
            await fetch(`${host}/api/appointment/delete/${id}`, {
                method: "DELETE",
            });
            setAppointments(prevAppointments => prevAppointments.filter(appointment => appointment._id !== id));
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by showing an error message to the user
        }
    };
    const editAppointment = async (id, patientName, doctorName, date) => {
        try {
            const response = await fetch(`${host}/api/appointment/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ patientName, doctorName, date })
            });
            const updatedAppointment = await response.json();
            setAppointments(prevAppointments => prevAppointments.map(
                appointment => appointment._id === id ? updatedAppointment : appointment
            ));
        } catch (error) {
            console.error(error);
        }
    };


    //PAITENT
    const getPaitent = async () => {

        try {
            const response = await fetch(`${host}/api/paitent/`, {
                method: "GET",
            });
            const json = await response.json()
            setPaitents(json);
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by showing an error message to the user
        }
    }

    const addPaitent = async (name, age, gender) => {
        try {
            const response = await fetch(`${host}/api/paitent/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, age, gender })
            });
            const newPaitent = await response.json();
            setPaitents(prevPaitent => [...prevPaitent, newPaitent]);

        } catch (error) {
            console.error(error);
        }
    };
    const deletePaitent = async (id) => {
        try {
            await fetch(`${host}/api/paitent/delete/${id}`, {
                method: "DELETE",
            });
            setPaitents(prevPaitent => prevPaitent.filter(paitent => paitent._id !== id));
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by showing an error message to the user
        }
    };
    const editPaitent = async (id, name, age, gender) => {
        try {
            const response = await fetch(`${host}/api/paitent/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, age, gender })
            });
            const updatedPaitent = await response.json();
            setAppointments(prevPaitent => prevPaitent.map(
                paitent => paitent._id === id ? updatedPaitent : paitent
            ));
        } catch (error) {
            console.error(error);
        }
    };


//Doctor
    const getDoctor = async () => {

        try {
            const response = await fetch(`${host}/api/doctor/`, {
                method: "GET",
            });
            const json = await response.json()
            setDoctors(json);
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by showing an error message to the user
        }
    }

    const addDoctor = async (name, speciality) => {
        try {
            const response = await fetch(`${host}/api/doctor/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, speciality })
            });
            const newDoctor = await response.json();
            setDoctors(prevDoctor => [...prevDoctor, newDoctor]);

        } catch (error) {
            console.error(error);
        }
    };
    const deleteDoctor = async (id) => {
        try {
            await fetch(`${host}/api/doctor/delete/${id}`, {
                method: "DELETE",
            });
            setPaitents(prevDoctor => prevDoctor.filter(doctor => doctor._id !== id));
        } catch (error) {
            console.error(error);
            // Handle the error here, e.g. by showing an error message to the user
        }
    };
    const editDoctor = async (id, name, speciality) => {
        try {
            const response = await fetch(`${host}/api/doctor/update/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name,speciality })
            });
            const updatedDoctor = await response.json();
            setDoctors(prevDoctor => prevDoctor.map(
                doctor => doctor._id === id ? updatedDoctor : doctor
            ));
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <ApiContext.Provider value={{ appointments, paitents,doctors, getAppointment, addAppointment, deleteAppointment, editAppointment, getPaitent, addPaitent, editPaitent,deletePaitent,getDoctor,addDoctor,deleteDoctor,editDoctor }}>
            {props.children}
        </ApiContext.Provider>
    )


}

export default ApiState
