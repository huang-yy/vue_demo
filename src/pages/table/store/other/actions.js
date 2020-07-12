import {OPEN_INFO} from '../mutation-types'

export default {

  openInfo ({commit}, addOrUpdate) {

    console.log("table------------action")
    // 提交一个comutation请求
    commit(OPEN_INFO, {addOrUpdate}) // 传递给mutation的是一个包含数据的对象
  }
}