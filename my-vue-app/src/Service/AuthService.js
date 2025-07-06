
import axios from "axios";

export const login = async (data) => {
    try {
        const response = await axios.post('http://localhost:8080/login', data);
        return response;
    } catch (error) {
        throw error;
    }
};

export const register = async (data) => {
    try {
        const response = await axios.post('http://localhost:8080/register', data);
        return response;
    } catch (error) {
        throw error;
    }
};