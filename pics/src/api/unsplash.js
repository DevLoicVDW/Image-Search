import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b054db2ae73a7d749382448453c65b1caaf22514a4730899d88d1d95431ac76d'
    }
});