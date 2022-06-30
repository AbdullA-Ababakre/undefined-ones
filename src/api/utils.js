import axios from "axios";

const instance = axios.create({
  baseURL:'xxxx',
  timeout:5000
})

instance.interceptors.request.use(function(config){
  // 发送请求前做些什么

  return config;
},function(error){
  return Promise.reject(error)
})

instance.interceptors.response.use(function(response){
  return response.data;

},function(error){
  return Promise.reject(error)
})