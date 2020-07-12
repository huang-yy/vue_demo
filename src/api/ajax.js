/*
ajax请求函数模块
返回值: promise对象(异步返回的数据是: response.data)
 */
import axios from 'axios'
import qs from 'qs'


export function get(url, params) {

  params.companyUuid = sessionStorage.getItem("companyUuid");
  params.tokenid = sessionStorage.getItem("Admin-Token");
  params.cuEmpUuid = sessionStorage.getItem("employeeUuid");
  params.resultType = "json";

  return new Promise((resolve, reject) => {

    let promise = axios.get(url, {
      params: params
    })

    promise.then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })

  });
}


export function post(url, params = {}) {

  params.companyUuid = sessionStorage.getItem("companyUuid");
  params.tokenid = sessionStorage.getItem("Admin-Token");
  params.cuEmpUuid = sessionStorage.getItem("employeeUuid");
  params.resultType = "json";


  return new Promise((resolve, reject) => {

    let promise = axios.post(url, qs.stringify(params))

    promise.then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}


/** 参数以Json流形式请求接口 */
export function postJson(url, data, params = {}) {

  params.companyUuid = sessionStorage.getItem("companyUuid");
  params.tokenid = sessionStorage.getItem("Admin-Token");
  params.cuEmpUuid = sessionStorage.getItem("employeeUuid");
  params.resultType = "json";


  return new Promise((resolve, reject) => {

    let promise = axios({
      url: url,
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      params: params,
      data: data
    })

    promise.then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data)
    })
  });
}


function remainMsg(state) {

  let type = "success";
  let title = "操作成功";

  if (state == "failure") {
    type = "warning";
    title = "操作失败";
  }

  this.$notify({
    title: title,
    type: type
  });

}

