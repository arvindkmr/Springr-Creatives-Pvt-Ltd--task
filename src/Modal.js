import React, { useState, useRef } from 'react';

import { Button } from 'reactstrap';
const Modal = ({setData, data}) => {
  const [isModalOpen, setIsModelOpen] = useState(false);
  const refName = useRef(null);
  const refEmail = useRef(null);
  const refDOJ = useRef(null);
  const refDOL = useRef(null);

  const updateList = (e) => {
      e.preventDefault();
    let obj = {
        id: new Date().getTime().toString(),
      name: refName.current.value,
      email: refEmail.current.value,
      doj: refDOJ.current.value,
      dol: refDOL.current.value,
    };
    setData([...data,obj]);
    refName.current.value = '';
    refEmail.current.value = '';
    refDOJ.current.value = '';
    refDOL.current.value = '';
};
  return (
      <div>
      <Button
        variant="secondary"
        style={{ float: 'right', margin: '20px' }}
        onClick={() => setIsModelOpen(true)}
      >
        Add a User
      </Button>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div className="modal-container">
          <h3 className="mt-5">Add a New Record</h3>
          <form className="m-1">
            <div className="col">
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Name"
                ref={refName}
              />
            </div>
            <div className="col">
              <input
                type="Email"
                className="form-control"
                placeholder="Email Address"
                id="email"
                ref={refEmail}
              />
            </div>
            <div className="col form-inline">
              <label htmlFor="example-date-input">Date of Joining</label>

              <input
                className="form-control m-1"
                type="date"
                id="date of joining"
                ref={refDOJ}
              />
            </div>
            <div className="col form-inline">
              <label htmlFor="example-date-input ">Date of Leaving</label>

              <input
                className="form-control m-1"
                type="date"
                id="date of leaving"
                ref={refDOL}
              />
              <label className="m-2">
                <input type="checkbox" className="form-check-input " />
                Still Working
              </label>
            </div>
            <div className="col">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary m-3"
              onClick={updateList}
            >
              Submit
            </button>
            <button
              type="submit"
              className="btn btn-danger m-3"
              onClick={() => setIsModelOpen(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
