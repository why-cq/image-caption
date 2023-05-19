import axios from 'axios'



// 创建axios实例对象
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 3000,
    // headers: {
    //   post: {
    //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //   }
    // }
})


// 请求拦截
// 在请求发送前进行必要操作处理，例如添加统一cookie、请求体加验证、设置请求头等，相当于是对每个接口里相同操作的一个封装
axiosInstance.interceptors.request.use(config => {
    // 自定义header，可添加项目token
    // if (store.state.app.token) {
    //   config.headers.token = store.state.app.token;
    //   config.headers.timestamp = new Date().getTime();
    // }
    return config;
}, error => {
    return Promise.reject(error);
})

// 响应拦截
// 同理，响应拦截器也是如此功能，只是在请求得到响应之后，对响应体的一些处理，通常是数据统一处理等，也常来判断登录失效等
axiosInstance.interceptors.response.use(response => {
    // const resCode = response.status;
    // if (resCode === 200) {
    //   return Promise.resolve(response);
    // } else {
    //   return Promise.reject(response);
    // }
    return response;
}, error => {
    // const resCode = error.response.status;
    // switch (resCode) {
    //   case 401:
    //     vm.$Message.error(error.response.data.message);
    //     store.commit('logout', this);
    //     store.commit('clearOpenedSubmenu');
    //     // console.log('token-0', store.state.app.token);
    //     router.replace({
    //       name: 'login'
    //     });
    //     break;
    //   case 404:
    //     vm.$Message.error('网络请求不存在');
    //     break;
    //   case 500:
    //     vm.$Message.error('服务器连接错误');
    //     break;
    //   // 其他状态码错误提示
    //   default:
    //     vm.$Message.error(error.response.data.message);
    // }
    // 该返回的数据则是axios.catch(err)中接收的数据
    return Promise.reject(error);
})

//
// export function Get(url, params) {
//     return new Promise((resolve, reject) => {
//         axiosInstance.get(url, params).then((res) => {
//             resolve(res.data);
//         }).catch((error) => {
//             reject(error.data);
//         })
//     })
// }
//
//
// /**
//  *封装post方法
//  *@param{String} url 请求地址
//  *@param{Object} params 请求参数
//  */
// export function Post(url, params) {
//     return new Promise((resolve, reject) => {
//         axiosInstance.post(url, params).then((res) => {
//             resolve(res.data);
//         }).catch((error) => {
//             reject(error.data);
//         })
//     })
// }
//
// /**
//  *封装put方法
//  *@param{String} url 请求地址
//  *@param{Object} params 请求参数
//  */
// export function Put(url, params) {
//     return new Promise((resolve, reject) => {
//         axiosInstance.put(url, params).then((res) => {
//             resolve(res.data);
//         }).catch((error) => {
//             reject(error.data);
//         })
//     })
// }
//
// /**
//  *封装patch方法
//  *@param{String} url 请求地址
//  *@param{Object} params 请求参数
//  */
// export function Patch(url, params) {
//     return new Promise((resolve, reject) => {
//         axiosInstance.put(url, params).then((res) => {
//             resolve(res.data);
//         }).catch((error) => {
//             reject(error.data);
//         })
//     })
// }
//
// /**
//  *封装delete方法
//  *@param{String} url [请求地址]
//  *@param{Object} params [请求参数]
//  */
// export function Delete(url, params) {
//     return new Promise((resolve, reject) => {
//         axiosInstance.delete(url, {
//             params: params
//         }).then((res) => {
//             resolve(res.data);
//         }).catch((error) => {
//             reject(error.data);
//         })
//     })
// }


export default axiosInstance
