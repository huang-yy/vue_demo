import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import EmployeeIndex from '@/pages/table/EmployeeIndex.vue'
import EmployeeIndex2 from '@/pages/employee/EmployeeIndex.vue'
import DepartmentIndex from '@/pages/tree/DepartmentIndex.vue'

export default new VueRouter({
    routes: [{
        path: '/employeeIndex', //path最左侧的/永远代表根路由
        component: EmployeeIndex
    },
    {
        path: '/employeeIndex2',
        component: EmployeeIndex2
    },
    {
        path: '/departmentIndex',
        component: DepartmentIndex
    },
    {
        path: '/',
        redirect: '/employeeIndex'
    }]
})