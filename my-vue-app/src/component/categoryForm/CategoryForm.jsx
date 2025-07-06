import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AppContext } from '../../Context/Appcontext.jsx';
import { addCategories } from '../../Service/category.js';

function CategoryForm() {
    const { setCategories, categories } = useContext(AppContext);
    const [loading, setLoading] = React.useState(false);
    const [image, setImage] = React.useState(false);
    const [data, setData] = React.useState({
        name: '',
        des: '',
        bgcolor: '#ffffff',
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!image) {
            toast.error("Please select an image");
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append("category", JSON.stringify(data));
        formData.append("image", image);

        try {
            const res = await addCategories(formData);
            console.log("Server response:", res);

            // ✅ Ensure categories is an array and res.data exists
            const newCategory = res?.data;
            if (!newCategory) throw new Error("No category returned from server");

            setCategories([...(categories || []), newCategory]);
            toast.success("Category added successfully!");

            setData({
                name: '',
                des: '',
                bgcolor: '#ffffff',
            });
            setImage(false);
        } catch (error) {
            console.error("Error adding category:", error);
            toast.error("Error adding category");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-conatainer">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image) : "https://placehold.co/48x48"} alt="" width={48} height={100} />
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    name="image"
                                    hidden
                                    accept="image/*"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" className="form-control" id="name" placeholder="Category name"
                                    onChange={onChangeHandler}
                                    value={data.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="des" className="form-label">Description</label>
                                <textarea rows="5" name="des" className="form-control" id="des" placeholder="Category description"
                                    onChange={onChangeHandler} value={data.des} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="bgcolor" className='form-label'>Background Color</label>
                                <br /><input type="color" name="bgcolor" id="bgcolor"
                                    onChange={onChangeHandler}
                                    value={data.bgcolor}
                                />
                            </div>
                            <div className="mb-3">
                                <button type="submit"
                                    disabled={loading}
                                    className="btn btn-warning">
                                    {loading ? 'Loading...' : 'Submit'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryForm;
