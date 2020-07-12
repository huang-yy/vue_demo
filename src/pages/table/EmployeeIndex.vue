<template>
  <div>
    <el-row>
      <el-button type="primary" size="small" @click="openEmployeeInfo(1)">新建</el-button>

      <el-button type="primary" size="small" @click="refresh()">刷新</el-button>
    </el-row>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="employeeName" label="名称" width="180"></el-table-column>
      <el-table-column prop="deptName" label="部门" width="180"></el-table-column>
      <el-table-column prop="birthday" label="出生日期" width="180">
        <template slot-scope="scope">{{scope.row.birthday|formatDate($moment)}}</template>
      </el-table-column>
      <el-table-column prop="salary" label="薪资"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="deleteEmployee(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="openEmployeeInfo(2,scope.row.employeeUuid)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex; justify-content: center;margin-top: 10px;">
      <el-pagination
        ref="elPage"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="refresh"
        @current-change="refresh"
        :page-size="10"
      />
    </div>
    <EmployeeInfo
      :sid="sid"
      :addOrUpdate="addOrUpdate"
      :dialogVisible.sync="dialogVisible"
      @closeDialog="closeDialog"
    />
  </div>
</template>

<script>
import EmployeeInfo from "./EmployeeInfo.vue";
import { findEmployee, deleteEmployee } from "./api.js";

export default {
  components: {
    EmployeeInfo
  },
  async mounted() {
    this.refresh();
  },
  filters: {
    formatDate(value, moment) {
      return moment(value).format("YYYY-MM-DD");
    }
  },
  data() {
    return {
      dialogVisible: false,
      sid: null,
      addOrUpdate: 1,
      tableData: [],
      total: null
    };
  },
  methods: {
    /** 获取查询参数 */
    getParams() {
      return {
        pageNum: this.$refs.elPage.internalCurrentPage,
        pageSize: this.$refs.elPage.internalPageSize
      };
    },

    /** 列表刷新 */
    async refresh() {
      // 1、获取参数
      let params = this.getParams();

      // 2、业务操作
      // 2.1、请求查询接口
      const result = await findEmployee(params);

      // 2.2、处理数据
      this.total = result.page.totalCount;
      this.tableData = result.data;

      if (result.page.totalPageCount < this.$refs.elPage.internalCurrentPage) {
        this.$refs.elPage.internalCurrentPage = result.page.totalPageCount;
        this.refresh();
      }
    },

    /** 打开人员新建页面 */
    openEmployeeInfo(addOrUpdate, sid) {
      this.sid = sid;
      this.dialogVisible = true;
      this.addOrUpdate = addOrUpdate;
    },

    /** 删除人员 */
    async deleteEmployee(row) {
      var result = await deleteEmployee(row.employeeUuid);

      if (result.state == "success") {
        this.refresh();
        //   this.$notify({
        //     title: "保存成功",
        //     type: "success"
        //   });
      }
    },

    /** 关闭弹框 */
    closeDialog() {
      this.sid = null;
      this.dialogVisible = false;
      this.refresh();
    }
  }
};
</script>

<style >
</style>