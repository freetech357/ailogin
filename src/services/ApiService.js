import axios from "axios";

/**
 * A service that provides a function to make API requests using Axios.
 * The provided URL is appended to the base URL defined in the service.
 * 
 * @returns {Object} An object containing the useApi function and the baseUrl.
 *
 * */
const ApiService = () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    
    /**
     * Makes an API request using Axios with the provided URL appended to the baseUrl.
     * 
     * @param {string} url - The endpoint URL to be appended to the base URL for the API request.
     * @returns {Promise} A promise that resolves to the Axios response object.
     */

    const useApi = async () => {
        const response = await axios.create({
            baseURL: baseUrl, 
        });
        return response;
    };

    return {useApi, baseUrl};
}    

export  default ApiService;