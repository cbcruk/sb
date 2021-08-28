<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import AppBuilder from './components/AppBuilder'
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <n-message-provider>
      <app-builder />
    </n-message-provider>
  </n-config-provider>
</template>