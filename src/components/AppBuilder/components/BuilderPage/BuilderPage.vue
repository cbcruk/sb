<script setup lang="ts">
import { ref } from 'vue'
import { PAGE_TYPE, PAGE_GAME, PAGE_THEME } from './constants'
import model from './model'

const formRef = ref(null)
const formValue = ref(model)
</script>

<template>
  <n-space vertical>
    <n-form ref="formRef" :model="formValue">
      <n-form-item label="el" path="el">
        <n-input
          v-model:value="formValue.el"
          placeholder="페이지 컨테이너 셀렉터"
        />
      </n-form-item>

      <n-form-item label="type" path="type">
        <n-select v-model:value="formValue.type" :options="PAGE_TYPE" />
      </n-form-item>

      <n-form-item label="parallax" path="parallax">
        <n-switch v-model:value="formValue.parallax" />
      </n-form-item>

      <n-form-item label="game" path="game">
        <n-select v-model:value="formValue.game" :options="PAGE_GAME" />
      </n-form-item>

      <n-form-item label="cnb" path="cnb">
        <n-switch v-model:value="formValue.cnb" />
      </n-form-item>

      <n-form-item label="caution">
        <n-space>
          <n-tooltip placement="right" trigger="click">
            <template #trigger>
              <n-button v-if="formValue.caution" type="info" size="small"
                >수정</n-button
              >
              <n-button
                v-else
                type="info"
                size="small"
                @click="
                  formValue.caution = {
                    el: '',
                    template: '',
                    noRule: false,
                  }
                "
                >추가</n-button
              >
            </template>
            <n-form v-if="formValue.caution">
              <n-form-item label="el">
                <n-input v-model:value="formValue.caution.el" />
              </n-form-item>
              <n-form-item label="template">
                <n-input
                  type="textarea"
                  v-model:value="formValue.caution.template"
                />
              </n-form-item>
              <n-form-item label="noRule">
                <n-switch v-model:value="formValue.caution.noRule" />
              </n-form-item>
            </n-form>
          </n-tooltip>
          <n-button type="error" size="small" @click="formValue.caution = null"
            >삭제</n-button
          >
        </n-space>
      </n-form-item>

      <n-form-item label="footer">
        <n-tooltip placement="right" trigger="click">
          <template #trigger>
            <n-button type="info" size="small">수정</n-button>
          </template>
          <n-space vertical>
            <n-form-item label="고정" path="footer.fixed">
              <n-switch v-model:value="formValue.footer.fixed" />
            </n-form-item>
            <n-form-item label="테마" path="footer.small" size="small">
              <n-select
                v-model:value="formValue.footer.theme"
                :options="PAGE_THEME"
              />
            </n-form-item>
          </n-space>
        </n-tooltip>
      </n-form-item>

      <n-form-item label="headerButton">
        <n-tooltip placement="right" trigger="click">
          <template #trigger>
            <n-button type="info" size="small">수정</n-button>
          </template>
          <n-space vertical>
            <n-form-item label="cookie">
              <n-tooltip placement="right" trigger="click">
                <template #trigger>
                  <n-button type="info" size="tiny">수정</n-button>
                </template>
                <n-space>
                  <n-form-item label="type">
                    <n-input
                      v-model:value="formValue.headerButton.cookie.type"
                    />
                  </n-form-item>
                  <n-form-item label="key">
                    <n-input
                      v-model:value="formValue.headerButton.cookie.key"
                    />
                  </n-form-item>
                  <n-form-item label="value">
                    <n-switch
                      v-model:value="formValue.headerButton.cookie.value"
                    />
                  </n-form-item>
                </n-space>
              </n-tooltip>
            </n-form-item>
            <n-form-item label="home">
              <n-switch v-model:value="formValue.headerButton.home" />
            </n-form-item>
            <n-form-item label="event">
              <n-switch v-model:value="formValue.headerButton.event" />
            </n-form-item>
            <n-form-item label="update">
              <n-switch v-model:value="formValue.headerButton.update" />
            </n-form-item>
            <n-form-item label="sns">
              <n-switch v-model:value="formValue.headerButton.sns" />
            </n-form-item>
            <n-form-item label="테마" path="footer.small" size="small">
              <n-select
                v-model:value="formValue.footer.theme"
                :options="PAGE_THEME"
              />
            </n-form-item>
          </n-space>
        </n-tooltip>
      </n-form-item>

      <n-form-item label="hashChange">
        <n-switch v-model:value="formValue.hashChange" />
      </n-form-item>

      <n-form-item label="menu">
        <n-switch v-model:value="formValue.menu" />
      </n-form-item>

      <n-form-item label="preventInitToPage">
        <n-switch v-model:value="formValue.preventInitToPage" />
      </n-form-item>

      <n-form-item label="preventMouseWheel">
        <n-switch v-model:value="formValue.preventMouseWheel" />
      </n-form-item>

      <n-form-item label="topButton">
        <n-switch v-model:value="formValue.topButton" />
      </n-form-item>

      <n-form-item label="remote">
        <n-space>
          <n-tooltip placement="right" trigger="click">
            <template #trigger>
              <n-button v-if="formValue.remote" type="info" size="small"
                >수정</n-button
              >
              <n-button
                v-else
                type="info"
                size="small"
                @click="
                  formValue.remote = {
                    title: '',
                    home: false,
                    coupon: false,
                    nshop: false,
                    active: false,
                    template: '',
                  }
                "
                >추가</n-button
              >
            </template>
            <n-form v-if="formValue.remote">
              <n-form-item label="title">
                <n-input v-model:value="formValue.remote.title" />
              </n-form-item>
              <n-form-item label="home">
                <n-switch v-model:value="formValue.remote.home" />
              </n-form-item>
              <n-form-item label="coupon">
                <n-switch v-model:value="formValue.remote.coupon" />
              </n-form-item>
              <n-form-item label="nshop">
                <n-switch v-model:value="formValue.remote.nshop" />
              </n-form-item>
              <n-form-item label="active">
                <n-switch v-model:value="formValue.remote.active" />
              </n-form-item>
            </n-form>
          </n-tooltip>
          <n-button type="error" size="small" @click="formValue.remote = null"
            >삭제</n-button
          >
        </n-space>
      </n-form-item>
    </n-form>

    <n-button type="primary">저장</n-button>
  </n-space>
</template>
