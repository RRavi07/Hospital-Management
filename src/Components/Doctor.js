import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../context/ApiContext';

const Doctor = () => {
  const context = useContext(ApiContext);
  const { doctors, getDoctor, addDoctor, editDoctor, deleteDoctor } = context;
  const [name, setname] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getDoctor();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      editDoctor(selectedDoctor._id, name, speciality).then(() => {
        getDoctor();
      });
    } else {
      addDoctor(name, speciality).then(() => {
        getDoctor();
      });
    }
    setname('');
    setSpeciality('');
    setSelectedDoctor(null);
    setIsEditMode(false);
  };

  const handleEditClick = (Doctor) => {
    setname(Doctor.name);
    setSpeciality(Doctor.speciality);
    setSelectedDoctor(Doctor);
    setIsEditMode(true);
  };

  const handleDeleteClick = (DoctorId) => {
    deleteDoctor(DoctorId).then(() => {
      getDoctor();
    });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
      <div className='p-4'>
        <h1>{isEditMode ? 'Edit Doctor' : 'Add Doctor'}</h1>
        <form onSubmit={handleSubmit} className="container my-4">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Doctor Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Speciality</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Doctor Speciality"
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            {isEditMode ? 'Update' : 'Add'}
          </button>
        </form>
      </div>
      <div className='p-4'>
        <div className="row">
          <h1 className="col-12">Your doctors</h1>
          <div style={{ maxHeight: '400px', overflowY: 'auto', marginTop: '0px', display: 'flex', flexWrap: 'wrap' }}>
            {doctors.length === 0 && 'No doctors to display'}
            {Array.isArray(doctors) && doctors.map((Doctor) => (
              <div className="col-md-6 col-lg-4 col-xl-4 small" key={Doctor._id}>
                <div className="card my-3">
                  <div className="card-body">
                    <p>Name: {Doctor.name}</p>
                    <p>Age: {Doctor.speciality}</p>

                  </div>
                  <div className="d-flex justify-content-between card-footer">
                    <span className="fa-solid fa-trash" style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(Doctor._id)}></span>
                    <span className="fa-regular fa-pen-to-square" style={{ cursor: 'pointer' }} onClick={() => handleEditClick(Doctor)}></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
