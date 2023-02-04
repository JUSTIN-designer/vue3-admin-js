<template>
  <el-radio-group v-model="security">
    <el-radio label="admin">Admin</el-radio>
    <el-radio label="manager">Manager</el-radio>
    <el-radio label="test">Test</el-radio>
  </el-radio-group>
</template>
<script lang="ts" setup>
	import {ref} from 'vue';
	import {ElRadioGroup, ElRadio} from 'element-plus';
	
	const security = ref('admin')
</script>