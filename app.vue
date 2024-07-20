<template>
  <!-- <div>
  </div> -->
  <!-- 相当于一级路由出口 -->
  <NuxtLayout>
    <NuxtPage :keepalive="{ max: 10 }" />
  </NuxtLayout>
</template>

<script lang="ts" setup>
// 设置seo
useSeoMeta({
  title: '小白面经_找工作神器',
  description: '求职之前,先用小白面经',
  keywords: '实习|小白',
})
</script>
