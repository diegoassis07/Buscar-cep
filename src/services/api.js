import axios from "axios";

// baseURL: https://viacep.com.br

const api = axios.create({
  baseURL: "https://viacep.com.br",
});

export default api;
