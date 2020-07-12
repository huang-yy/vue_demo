import { get, post, postJson } from '@/api/ajax'

const baseUrl = "http://e52.lhhc.cn/"

// const baseUrl = "http://localhost:7052/"

export const getEmployee = (sid) => get(baseUrl + "member/employeeTestAction_get.do", { sid });

export const findEmployee = (params) => get(baseUrl + "member/employeeTestAction_list.do", params);

export const addEmployee = (params) => post(baseUrl + "member/employeeTestAction_add.do", params);

export const updateEmployee = (params) => post(baseUrl + "member/employeeTestAction_update.do", params);

export const deleteEmployee = (employeeUuid) => post(baseUrl + "member/employeeTestAction_delete.do", { sid: employeeUuid });


export const addEmployee2 = (data) => postJson(baseUrl + "member/employeeTestAction_addEmployee.do", data);

