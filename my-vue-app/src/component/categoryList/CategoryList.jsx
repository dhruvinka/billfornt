import React, { useContext, useState } from 'react';
import './CategoryList.css';
import { AppContext } from '../../Context/Appcontext.jsx';
import toast from 'react-hot-toast';
import { deleteCategory } from '../../Service/category.js';

function CategoryList() {
  const { categories, setCategories } = useContext(AppContext);
  const [searchKeyword, setSearchKeyword] = useState('');

  const filteredCategories = (categories || []).filter(category =>
    category.name.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  const deleteCategoryById = async (id) => {
    try {
      const res = await deleteCategory(id);
      if (res.status === 200) {
        const updatedCategories = categories.filter(cat => cat.categoryId !== id);
        setCategories(updatedCategories);
        toast.success("Category deleted successfully");
      } else {
        toast.error("Failed to delete category");
      }
    } catch (error) {
      toast.error("Error deleting category");
      console.error(error);
    }
  };

  return (
    <div className="category-list-container" style={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>
      <div className="row pe-2">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by keyword..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <span className="input-group-text bg-warning">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>

      <div className="row g-3 pe-2">
        {filteredCategories.map((category) => (
          <div className="col-12" key={category.categoryId}>
            <div className="card p-3" style={{ backgroundColor: category.bgcolor }}>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <img src={category.imageurl} alt={category.name} className="category-image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1 text-light">{category.name}</h5>
                  <p className="mb-0 text-white">{category.description}</p>
                </div>
                <button
                  className="btn btn-danger btn-sm"
                  style={{ width: '100px' }}
                  onClick={() => deleteCategoryById(category.categoryId)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
        {filteredCategories.length === 0 && (
          <p className="text-light text-center">No categories found.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryList;
