import axios from "axios";

axios.defaults.baseURL = 'https://64648838043c103502bbd6b1.mockapi.io/tweet'

export const fetchTweets = async () => {
    try {
        const response = await axios.get('/users');
        return response.data;
    } catch (error) {
        console.error('Произошла ошибка при обновлении followers', error);
        throw error;
    }
}

export const updateFollowers = async (id, followers) => {
  const strId = id.toString();
  try {
    const response = await axios.put(`/users/${strId}`, { followers });
    return response.data;
  } catch (error) {
    console.error('Произошла ошибка при обновлении followers', error);
    throw error;
  }
};

