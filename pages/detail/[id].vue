<script setup lang="ts">
import type { ArticleDetail } from '~/types/article'

const route = useRoute()
// 文章详情
const article = ref<ArticleDetail>({
  avatar: '',
  collectFlag: 0,
  content: '',
  createdAt: '',
  creator: '',
  likeCount: 0,
  likeFlag: 0,
  stem: '',
  views: 0,
})
// 获取文章详情
// const getDetail = async () => {
  const res = await useRequest<ArticleDetail>('/interview/show', {
    params: { id: route.params.id },
  })
  article.value = res

  // seo搜索引擎优化
  useSeoMeta({
    title: `${article.value.stem}_小白面经`,
  })
// }
// getDetail()
</script>

<template>
  <div class="detail-page">
    <van-nav-bar
      left-text="返回"
      fixed
      title="面经详细"
      @click-left="$router.back()"
    />
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>
        {{ article.createdAt }} | {{ article.views }} 浏览量 |
        {{ article.likeCount }} 点赞数
      </p>
      <p>
        <!-- <img :src="article.avatar" alt="" /> -->
        <!-- <van-image
          :src="article.avatar"
        /> -->
        <span>{{ article.creator }}</span>
      </p>
    </header>
    <main class="body" v-html="article.content"></main>
    <div class="opt">
      <van-icon :class="{ active: article.likeFlag }" name="like-o" />
      <van-icon :class="{ active: article.collectFlag }" name="star-o" />
    </div>
  </div>
</template>

<style scoped lang="less">
.detail-page {
  margin-top: 44px;
  overflow: hidden;
  padding: 0 15px;
  .header {
    h1 {
      font-size: 24px;
    }
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .opt {
    position: fixed;
    bottom: 100px;
    right: 0;
    > .van-icon {
      margin-right: 20px;
      background: #fff;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 2px 2px 10px #ccc;
      font-size: 18px;
      &.active {
        background: #fec635;
        color: #fff;
      }
    }
  }
}
</style>
