import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

const api = axios.create({
  baseURL: "https://api.brasil.io/v1/dataset/covid19/caso_full/",
  headers : {
    Authorization: 'Token aae88491cc4a0ac12b468fdad9d82dd306a917c5'
  }
});

export default api;

