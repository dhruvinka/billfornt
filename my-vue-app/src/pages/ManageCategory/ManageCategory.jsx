import React from 'react'
import { Link } from 'react-router-dom'
import './ManageCategory.css'
import CategoryForm from '../../component/categoryForm/CategoryForm'
import CategoryList from '../../component/categoryList/CategoryList'


function ManageCategory() {
  return (
    <div className='category-container text-light'>
      {/* Left Column */}
      <div className="left-column">
        <CategoryForm/>

      </div>
      <div className="right-column" >
        <CategoryList />
      </div>
    </div>
  )
}

export default ManageCategory