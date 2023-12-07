import axios from "axios";

const token:string = import.meta.env.VITE_GIT_HUB_TOKEN;

const githubApi = axios.create({
    baseURL:'https://api.github.com/repos/facebook/react',
    headers:{
        Authorization: `Bearer ${token}` 
    }
})


export default githubApi