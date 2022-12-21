import axios from "axios";
import NotFound from "../views/error/NotFound";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

// INTERCEPTORS
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try {
            const { response } = error;
            if (response.status === 401) {
                localStorage.removeItem("ACCESS_TOKEN");
            } else if (response.status === 400) {
                return <NotFound />;
            }
            // else if (response.status === 403) {
            //     // Forbidden page
            // }
        } catch (e) {
            console.log(e);
        }

        throw error;
    }
);

export default axiosClient;
