import request from "../utils/request";

export function getRoleList(params) {
    return request({
        url: "/set/role/list",
        method: "get",
        params: params,
    })
}

export function setRoleUpdateAdmin(data) {
    return request({
        url: "/set/role/update/admin",
        method: "put",
        data
    })
}