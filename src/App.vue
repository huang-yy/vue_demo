<template>
  <div id="app">
    <el-row class="tac">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2" @click="linkRouter(2)">
            <i class="el-icon-menu"></i>
            <span slot="title">人员列表</span>
          </el-menu-item>
          <el-menu-item index="3" @click="linkRouter(3)">
            <i class="el-icon-menu"></i>
            <span slot="title">人员列表2</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="5" @click="linkRouter(4)">
            <i class="el-icon-setting"></i>
            <span slot="title">部门列表</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="13">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    linkRouter(index) {
      if (index == 2) {
        this.$router.push({
          path: "/employeeIndex"
        });
      } else if (index == 3) {
        this.$router.push({
          path: "/employeeIndex2"
        });
      } else if (index == 4) {
        this.$router.push({
          path: "/departmentIndex"
        });
      }
    }
  }
};
</script>

<style>
</style>