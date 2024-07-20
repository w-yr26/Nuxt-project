import type { UseFetchOptions } from "#app"

export const useRequest = async<T = any> (url: string, options?: UseFetchOptions<any> | undefined) => {
  // data 返回的response(ref对象)
  // error 返回的错误对象(ref对象)
  const { data, error } = await useFetch<any>(url, {
    baseURL: 'http://interview-api-t.itheima.net/h5',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    ...options,
  })

  if (error.value) {
    return Promise.reject(error)
  } else {
    // data.value.data就相当于axios中的response.data
    return data.value.data as T
  }
}
