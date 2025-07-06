import React, { useContext } from 'react'
import './Explore.css';
import { AppContext } from '../../Context/Appcontext.jsx';

function Explore() {

  const { categories } = useContext(AppContext);
  console.log(categories);

  return (
    <div className="explore-container text-light">
      <div className="left-column" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
        <div className="first-row">
          category
        </div>
        <hr className="horizontal-line" />

        <div className="second-row" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
          category form
        </div>
      </div>

      <div className="right-column d-flex flex-column " style={{ overflowY: 'auto' }}>
        <div className="customer-form-container" style={{ height: '15%', overflowY: 'auto' }}>
          customer form 
        </div>
        
      
      <hr className="my-3 text-light" />
      <div className="cart-items-container" style={{ height: '55%', overflowY: 'auto' }}>
        cart items
      </div>
      <div className="cart-summary-container" style={{ height: '30%', overflowY: 'auto' }}>
        cart summary
      </div>
      </div>
    </div>
  )
}

export default Explore