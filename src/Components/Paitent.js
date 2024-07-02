import React, { useContext, useEffect, useState } from 'react';
import ApiContext from '../context/ApiContext';

const Paitent = () => {
  const context = useContext(ApiContext);
  const { paitents, getPaitent, addPaitent, editPaitent, deletePaitent } = context;
  const [name, setname] = useState('');
  const [age, setage] = useState('');
  const [gender, setgender] = useState('');
  const [selectedPaitent, setSelectedPaitent] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    getPaitent();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditMode) {
      editPaitent(selectedPaitent._id, name, age, gender).then(() => {
        getPaitent();
      });
    } else {
      addPaitent(name, age, gender).then(() => {
        getPaitent();
      });
    }
    setname('');
    setage('');
    setgender('');
    setSelectedPaitent(null);
    setIsEditMode(false);
  };

  const handleEditClick = (paitent) => {
    setname(paitent.name);
    setage(paitent.age);
    setgender(paitent.gender);
    setSelectedPaitent(paitent);
    setIsEditMode(true);
  };

  const handleDeleteClick = (paitentId) => {
    deletePaitent(paitentId).then(() => {
      getPaitent();
    });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
      <div className='p-4'>
        <h1>{isEditMode ? 'Edit Paitent' : 'Add Paitent'}</h1>
        <form onSubmit={handleSubmit} className="container my-4">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Paitent Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              placeholder="Enter Paitent Age"
              value={age}
              onChange={(e) => setage(e.target.value)}
              style={{ width: '300px' }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
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
          <h1 className="col-12">Your Paitents</h1>
          <div style={{ maxHeight: '400px', overflowY: 'auto', marginTop: '0px', display: 'flex', flexWrap: 'wrap' }}>
            {paitents.length === 0 && 'No paitents to display'}
            {Array.isArray(paitents) && paitents.map((paitent) => (
              <div className="col-md-6 col-lg-4 col-xl-4 small" key={paitent._id}>
                <div className="card my-3">
                  <div className="card-body">
                    <p>Name: {paitent.name}</p>
                    <p>Age: {paitent.age}</p>
                    <p>Gender: {paitent.gender}</p>
                  </div>
                  <div className="d-flex justify-content-between card-footer">
                    <span className="fa-solid fa-trash" style={{ cursor: 'pointer' }} onClick={() => handleDeleteClick(paitent._id)}></span>
                    <span className="fa-regular fa-pen-to-square" style={{ cursor: 'pointer' }} onClick={() => handleEditClick(paitent)}></span>
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

export default Paitent;
