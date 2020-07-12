<template>
  <div>
    <el-dialog title="新建员工" width="80%" :visible.sync="dialogFormVisible" @close="closeDialog()">
      <el-form :model="employee">
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="employee.employeeName" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="部门" :label-width="formLabelWidth">
          <el-select v-model="employee.deptName" placeholder="请选择部门">
            <el-option label="销售部" value="销售部"></el-option>
            <el-option label="研发部" value="研发部"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出生日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="employee.birthday"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="薪资" :label-width="formLabelWidth">
          <el-input v-model="employee.salary" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button @click="saveEmployee()" type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  getEmployee,
  addEmployee,
  addEmployee2,
  updateEmployee
} from "./api.js";

export default {
  props: {
    sid: String,
    dialogVisible: Boolean,
    addOrUpdate: Number
  },
  data() {
    return {
      employee: {},
      dialogFormVisible: false,
      formLabelWidth: "120px"
    };
  },
  mounted() {},
  filters: {},
  computed: {},
  methods: {
    async getEmployee() {
      const result = await getEmployee(this.sid);
      this.employee = result.data;

      this.employee.birthday = this.$moment(result.data.birthday).format(
        "YYYY-MM-DD"
      );
    },

    async saveEmployee() {
      var params = {};
      // params.t = this.employee;
      for (const key in this.employee) {
        params["t." + key] = this.employee[key];
      }

      var result;

      if (this.addOrUpdate == 1) {
        result = await addEmployee(params);
      } else if (this.addOrUpdate == 2) {
        params.sid = this.employee.employeeUuid;
        result = await updateEmployee(params);
      }

      if (result.state == "success") {
        this.closeDialog();
      }
    },

    closeDialog() {
      this.$emit("closeDialog");
    }
  },
  watch: {
    dialogVisible(val) {
      this.dialogFormVisible = val;
    },
    sid(val) {
      if (val) {
        this.getEmployee(val);
      } else {
        this.employee = {};
      }
    }
  }
};
</script>

<style scoped>
</style>