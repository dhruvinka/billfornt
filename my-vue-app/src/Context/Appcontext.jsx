import { createContext, useEffect, useState } from "react";
import { getAllCategories } from "../Service/category.js";

export const AppContext = createContext(null);

export const AppcontextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [auth, setAuth] = useState({
    token: localStorage.getItem("token") || null,
    role: localStorage.getItem("role") || null
  });

  const setAuthdata = (token, role) => {
    setAuth({ token, role });
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories(auth.token); // pass token if required
        setCategories(response.data); // Assumes response.data is an array
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    // 🛑 Only fetch if token exists
    if (auth.token) {
      fetchCategories();
    }
  }, [auth.token]);

  const contextValue = {
    categories,
    setCategories,
    auth,
    setAuthdata,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
