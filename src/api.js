import axios from "axios";

const API_URL = 'https://api.spoonacular.com';
const API_KEY = '';

export const getCuisines = (cuisineName) => {
    const url = API_URL + '/recipes/complexSearch?apiKey=' + API_KEY + '&query=' + cuisineName
    return axios.get(url)

}