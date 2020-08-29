import axios from 'axios';

const unsplash_access_key = process.env.REACT_APP_PICS_UNSPLASH_CLIENT_ID;

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${unsplash_access_key}`
    }
});