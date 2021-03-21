import React from 'react';

const table = ({ data, removeItem }) => {
    const Handlelist=(id)=>{
       if(window.confirm("delete it")){
           removeItem(id);
       }
    }
  return (
    <div className="table-responsive">
      <table className="table table-dark table-striped table-hover ">
        <thead>
          <tr>
            <th scope="col">Sno.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">experience</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const { id, name, email, doj, dol } = item;
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{doj}</td>
                <td>{dol}</td>
                <td>
                  <button
                    onClick={() => {
                      Handlelist(id);
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default table;
