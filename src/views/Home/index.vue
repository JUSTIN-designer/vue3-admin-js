<template>
	<el-container>
      <el-aside width="200px"><Aside/></el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import {ElContainer, ElAside, ElHeader, ElMain} from 'element-plus'
import Aside from './Aside.vue';

</script>
<style scoped>
.el-aside{
	min-height: 100vh;
}
</style>