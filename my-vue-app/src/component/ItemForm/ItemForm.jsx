import React from 'react'

function ItemForm() {
  return (
           <div className="item-form-cointainer">
             <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-conatainer" style={{height: '100vh', overflowY: 'auto',overflowX: 'hidden'}}>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src="https://placehold.co/48x48" alt="" width={48} height={100} />
                                </label>
                                <input type="file" className="form-control" id="image" name="image" hidden />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Item name" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className='form-label'>Category</label>
                                <select name="category" id="category" className="form-control">
                                    <option value="">Select category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" name="price" className="form-control" id="price" placeholder="Item price" min="0" />
                            </div>
                             <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea rows="5" name="description" className="form-control" id="description" placeholder="Item description" />
                            </div>

                            <div className="mb-3">
                                <button type="submit" className="btn btn-warning">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
           </div>
  )
}

export default ItemForm