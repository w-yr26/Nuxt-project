// 白名单列表，记录无需权限访问的所有页面
const whiteList = ['/login', '/register']

// 全局路由中间件
export default defineNuxtRouteMiddleware((to, from) => {
  // 如果访问的路由是 / ，则重定向到/articles
  if (to.path === '/') {
    return navigateTo('/articles')
  }

  const token = getToken()

  // 如果不在白名单内且没有token，则跳转到 /login
  if (!whiteList.includes(to.path) && !token) {
    return navigateTo('/login')
  }
})

// 一般来说，为了seo搜索引擎的优化，首页的数据的接口应该也是无需token也能获取的。因为搜索引擎没有token，此时如果首页数据想要token，搜索引擎就抓取不到