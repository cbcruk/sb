<script setup lang="ts">
import { ref } from 'vue'
import { COMPONENT_TYPES } from './constants'
import useSection from './useSection'
import useComponent from './useComponent'

const showModal = ref(false)
const { section, sections, addSection } = useSection()
const { addComponent, removeComponent } = useComponent({
  section,
  sections,
  showModal,
})
</script>

<template>
  <n-tabs
    type="card"
    v-model:value="section"
    :addable="true"
    :closable="false"
    @add="addSection"
  >
    <n-tab-pane
      v-for="(section, index) in sections"
      :name="index + 1"
      :key="index + 1"
    >
      <n-form v-if="section">
        <n-form-item label="id">
          <n-input v-model:value="section.id" placeholder="" />
        </n-form-item>
        <n-form-item label="name">
          <n-input v-model:value="section.name" placeholder="" />
        </n-form-item>
        <n-form-item label="children">
          <n-space>
            <n-tooltip
              v-for="(child, index) in section.children"
              :key="index"
              placement="right"
              trigger="click"
            >
              <template #trigger>
                <n-tag closable @close="removeComponent(index)">
                  {{ child.type }}
                </n-tag>
              </template>
              <n-form>
                <n-form-item label="type">
                  <n-input v-model:value="child.type" />
                </n-form-item>
                <n-form-item label="text">
                  <n-input v-model:value="child.text" />
                </n-form-item>
                <n-form-item label="coupon">
                  <n-input v-model:value="child.class" />
                </n-form-item>
              </n-form>
            </n-tooltip>
            <n-button dashed size="small" @click="showModal = true"
              >추가</n-button
            >
          </n-space>
        </n-form-item>
      </n-form>
    </n-tab-pane>
  </n-tabs>

  <n-button type="primary">저장</n-button>

  <n-modal v-model:show="showModal">
    <n-card title="Component" :bordered="false" size="medium" class="w-md">
      <n-form @submit.prevent="addComponent(section)">
        <n-form-item label="type">
          <n-select :options="COMPONENT_TYPES" />
        </n-form-item>
        <n-form-item label="text">
          <n-input />
        </n-form-item>
        <n-form-item label="class">
          <n-input />
        </n-form-item>
        <n-button attr-type="submit" size="small" type="primary">
          추가
        </n-button>
      </n-form>
    </n-card>
  </n-modal>
</template>
