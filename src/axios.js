import axios from "axios";

const axiosInstanse = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        'Content-Type': 'application/json'
    }
});

export default axiosInstanse;