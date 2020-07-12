import Vue from 'vue'
import Vuex from 'vuex'
import employee from '../pages/employee/store'
import table from '../pages/table/store'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        employee,
        table
    }
})