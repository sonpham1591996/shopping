import axios from "axios"

axios.defaults.baseURL = 'http://localhost:8080';

export const getProducts = async () => {
    const res = await axios.get('/products');
    return res.data;
}