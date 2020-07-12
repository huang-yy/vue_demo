import state from './other/state'
import mutations from './other/mutations'
import actions from './other/actions'
import getters from './other/getters'

export default {
    state,
    actions,
    mutations,
    getters,
    namespaced:true,//模块数据私有化
}