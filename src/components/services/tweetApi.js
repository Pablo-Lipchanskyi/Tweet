import axios from "axios";

axios.defaults.baseURL = 'https://64648838043c103502bbd6b1.mockapi.io'

export const fetchTweets = async () => {
    const response = await axios.get('/tweet');
    return response.data
}