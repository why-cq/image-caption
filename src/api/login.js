import request from './request'

export function getUserList() {
    return request({
        url: '/api/user/',
        method: 'get',
    })
}
//
// export function getInfo(token) {
//     return request({
//         url: '/user/info',
//         method: 'get',
//         params: { token }
//     })
// }
//
// export function logout() {
//     return request({
//         url: '/user/logout',
//         method: 'post'
//     })
// }
