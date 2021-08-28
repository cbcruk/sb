<script setup lang="ts">
import BuilderMeta from './components/BuilderMeta'
import BuilderPage from './components/BuilderPage'
import BuilderComponent from './components/BuilderComponent'
</script>

<template>
  <n-card title="프로모션">
    <n-tabs type="line">
      <n-tab-pane name="meta" tab="메타">
        <builder-meta />
      </n-tab-pane>
      <n-tab-pane name="page" tab="페이지"><builder-page /></n-tab-pane>
      <n-tab-pane name="component" tab="컴포넌트">
        <builder-component />
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
