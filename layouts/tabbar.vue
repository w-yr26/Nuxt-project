<template>
  <div class="layout-page">
    <!-- 插槽 -->
    <slot />
    <!-- tabbar -->
    <van-tabbar route>
      <van-tabbar-item to="/articles" icon="notes-o">面经</van-tabbar-item>
      <van-tabbar-item to="/collect" icon="star-o">收藏</van-tabbar-item>
      <van-tabbar-item to="/like" icon="like-o">喜欢</van-tabbar-item>
      <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
