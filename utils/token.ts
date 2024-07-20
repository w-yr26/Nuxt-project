const KEY = 'xbmj-token'

// 获取
export const getToken = () => {
  // 获取到的是一个ref对象
  return useCookie('xbmj-token').value
}

// 设置
export const setToken = (newToken: string) => {
  // 通过第二个参数可以设置超时时间，如果不设置，默认就是会话cookie
  useCookie(KEY, { maxAge: 60 * 60 * 24 * 2 }).value = newToken
}

// 删除
export const delToken = () => {
  useCookie(KEY).value = ''
}