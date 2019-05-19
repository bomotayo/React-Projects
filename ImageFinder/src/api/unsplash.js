import axios from 'axios';


export default axios.create({
    baseURL: "https://api.unsplash.com",

    headers: {
        Authorization: 'Client-ID dd67a1621b2aee3c440e6f0082a97a29c01285e16cefe9530cfa109211ae9d99'
    }
});
