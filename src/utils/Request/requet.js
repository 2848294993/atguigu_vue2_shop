import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';

const request = axios.create({
  baseURL: "/api",
  timeout: 5000
})

//请求拦截器
request.interceptors.request.use(config => {
  NProgress.start();
  return config;
})

request.interceptors.response.use(res => {
  NProgress.done();
  return res;
}, err => {
  return Promise.reject(err);
})

export default request;