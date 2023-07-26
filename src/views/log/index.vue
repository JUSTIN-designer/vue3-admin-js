<template>
  <div class="container">
    <img src="@/assets/vue.svg" class="icon"/>
    <span class="title">Sign in to System</span>
  <div class="form-container">
  <el-form
    style="width: 260px"
		label-position="top"
  >
    <el-form-item>
      <el-input v-model="formData.account" placeholder="Account"/>
    </el-form-item>
    <el-form-item>
      <el-input 
        show-password
        type="show-password"
        v-model="formData.password"
        placeholder="Password"
      />
    </el-form-item>
    <el-form-item>
      <el-button style="width: 100%" type="success">Log In</el-button>
    </el-form-item>
  </el-form>
  </div>
	</div>
	<div>
    <button @click="handleClick">Insert/Remove</button>
    <div v-if="show" ref="content">I am an element</div>
  </div>
</template>
<script setup>
import { ref, nextTick } from "vue";
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
//import 'element-plus/es/components/button/style/css'
	const formData = ref({
		account: '',
		password: '',
	})
const show = ref(true)
const content = ref()
const handleClick = () => {
  show.value = !show.value
  nextTick(() => {
    console.log(show.value, content.value)
  })
}
</script>
<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 200px;
  margin: 50px auto;
}
.form-container{
  padding-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 200px;
  border-radius: 6px;
  background-color: #f6f8fa;
  border:1px solid hsla(210,18%,87%,1);
} 
.icon {
  width: 48px;
  margin-bottom: 24px;
}
.title{
  font-size: 24px;
  margin-bottom: 16px;
}
</style>