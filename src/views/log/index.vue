<template>
  <el-form
    :model="formLabelAlign"
    style="max-width: 460px"
		label-position="top"
  >
    <el-form-item>
      <el-input v-model="formData.account" placeholder="Account"/>
    </el-form-item>
    <el-form-item>
      <el-input v-model="formData.password" placeholder="Password"/>
    </el-form-item>
  </el-form>
	<el-button>click</el-button>
</template>
<script setup>
import { ref } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
//import 'element-plus/es/components/button/style/css'
	const formData = ref({
		account: '',
		password: '',
	})

</script>