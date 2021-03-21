import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from './table';
import Modal from './Modal';
const getLocalStorage = () => {
  let list = localStorage.getItem('lists');
  
  if (list) {
    return (list = JSON.parse(localStorage.getItem('lists')));
  } else {
    return [];
  }
};
function App() {
const [data,setData]=useState(getLocalStorage());
const removeItem=(id)=>{
const arr= data.filter((item)=>item.id!==id)
setData(arr);
}
useEffect(()=>{
 localStorage.setItem("lists", JSON.stringify(data));
},[data])
 
  return (
    <div className="Container">
      <Container style={{ marginTop: '100px' }}>
        <h2>User Records</h2>
        <Modal setData={setData} data={data}/>
        <Table data={data} removeItem={removeItem} />

      </Container>
    </div>
  );
}

export default App;
