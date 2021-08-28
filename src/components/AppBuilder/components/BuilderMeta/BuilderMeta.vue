<script setup lang="ts">
import { ref } from 'vue'
import model from './model'

const formRef = ref(null)
const formValue = ref(model)
</script>

<template>
  <n-space vertical>
    <n-form ref="formRef" :model="formValue">
      <n-form-item label="id" path="id">
        <n-input v-model:value="formValue.id" placeholder="" />
      </n-form-item>
      <n-form-item label="title" path="title">
        <n-input v-model:value="formValue.title" placeholder="" />
      </n-form-item>
      <n-form-item label="desc" path="desc">
        <n-input v-model:value="formValue.desc" placeholder="" />
      </n-form-item>
    </n-form>
    <n-button type="primary">저장</n-button>
  </n-space>
</template>