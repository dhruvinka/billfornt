import React from 'react'
import { Link } from 'react-router-dom'
import './ManageUser.css'
import Userform from '../../component/UserForm/UserForm'
import UserList from '../../component/UserList/UserList'


function Manageusers() {
  return (
    <div className='users-container text-light'>
      <div className="left-column">
        <Userform/>
      </div>
      <div className="right-column">
        <UserList/>
      </div>
    </div>
  )
}

export default Manageusers