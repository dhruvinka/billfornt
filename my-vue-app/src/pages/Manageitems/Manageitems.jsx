import React from 'react'
import { Link } from 'react-router-dom'
import './Manageitems.css';
import ItemForm from '../../component/ItemForm/ItemForm';
import ItemList from '../../component/ItemList/ItemList';

function ManageItems() {
  return (
      <div className='items-container text-light' >
      <div className="left-column" style={{ height: '100%', overflowY: 'auto' }}>
       <ItemForm/> 

      </div>
      <div className="right-column">
       <ItemList/>
      </div>
    </div>
  )
}

export default ManageItems