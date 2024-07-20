<script lang="ts" setup>
import type { ArticleItem, listData } from '~/types/article'
// 总条数
const total = ref(0)
// 请求参数
const pageParams = reactive({
  current: 1,
  sorter: 'weight_desc',
  pageSize: 10,
})
// 数据列表
const list = ref<ArticleItem[]>([])
// 获取面经列表
const getList = async () => {
  // 获取数据
  // useFetch使用时,如果查询参数是响应式数据,那么当这些响应式数据只要发生变化,就会自动请求(哪怕你没有滚动至下一页)
  // 可以将 watch 字段设置为 false 取消这一效果
  const res = await useRequest('/interview/query', {
    params: pageParams,
    watch: false,
  })
  // 列表追加
  list.value.push(...res.rows)
  // 页码累加
  pageParams.current++
  // 加载状态结束
  loading.value = false
  // 如果当前页码大于总页数，说明没有更多数据了
  if (pageParams.current > res.pageTotal) {
    finished.value = true
  }
}

getList()

// 数据是否结束
const finished = ref(false)
// 是否展示loading效果
const loading = ref(false)

</script>

<template>
  <NuxtLayout name="tabbar">
    <div class="article-page">
      <nav class="my-nav van-hairline--bottom">
        <a href="javascript:;">推荐</a>
        <a href="javascript:;">最新</a>
      </nav>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getList"
      >
        <Article v-for="item in list" :key="item.id" :item="item" />
      </van-list>
    </div>
  </NuxtLayout>
</template>

<style lang="less" scoped>
.article-page {
  margin-bottom: 50px;
  margin-top: 44px;
  .my-nav {
    height: 44px;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 999;
    background: #fff;
    display: flex;
    align-items: center;
    > a {
      color: #999;
      font-size: 14px;
      line-height: 44px;
      margin-left: 20px;
      position: relative;
      transition: all 0.3s;
      &::after {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        width: 0;
        height: 2px;
        background: #222;
        transition: all 0.3s;
      }
      &.active {
        color: #222;
        &::after {
          width: 14px;
        }
      }
    }
    .logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      > img {
        width: 64px;
        height: 28px;
        display: block;
        margin-right: 10px;
      }
    }
  }
}
.article-item {
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 10px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          width: 280px;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>
