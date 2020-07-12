/*
包含n个用于直接更新状态的方法的对象模块
 */
import { OPEN_INFO } from '../mutation-types'

export default {
  [OPEN_INFO](state, { addOrUpdate }) {  
    console.log("table-----------mutation")
    state.addOrUpdate = addOrUpdate;
  },

}