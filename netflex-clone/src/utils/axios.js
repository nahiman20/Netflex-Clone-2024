import axios from "axios";

const instance = axios.create({
    baseURl: "http://api.themoviedb.org/3",
});

export default instance;