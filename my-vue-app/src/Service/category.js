import axios from "axios";


export const addCategories = async (formData) => {
  const res = await axios.post("http://localhost:8080/admin/category", formData, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('role')}`
    }
  });

  return res.data;
};

export const deleteCategory = async (id) => {

    try {
          return await axios.delete(`http://localhost:8080//admin/category/${id}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('role')}`
            }
          } );
    } catch (error) {
        console.error("Error fetching categories id:", error);
    throw error;

    }
}

export const getAllCategories = async () => {
  try {
    const res = await axios.get("http://localhost:8080/category", {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('role')}`
      }
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};