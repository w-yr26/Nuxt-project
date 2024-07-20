/** 面经列表项 */
export type ArticleItem = {
  /** 主键id */
  id: string
  /** 头像 */
  avatar: string
  /** 面经内容 */
  content: string
  /** 创建时间 */
  createdAt: string
  /** 创建人 */
  creator: string
  /** 点赞量 */
  likeCount: number
  /** 面经标题 */
  stem: string
  /** 浏览量 */
  views: number
}

/** 面经列表返回数据 */
export type listData = {
  /** 返参code */
  code?: number
  /** 返参信息 */
  message?: string
  /** 面经列表数据 */
  data: {
    list: ArticleItem[]
    pageTotal: number
    pageSize: number
    current: number
    total: number
    rows: ArticleItem[]
  }
}

/**文章详情 */
export type ArticleDetail = {
  /** 头像 */
  avatar?: string
  /** 浏览量 */
  collectFlag?: number
  /** 面经内容 */
  content?: string
  /** 创建时间 */
  createdAt?: string
  /** 创建人 */
  creator?: string
  /** 主键id */
  id?: string
  /** 点赞量 */
  likeCount?: number
  /** 浏览量 */
  likeFlag?: number
  /** 面经标题 */
  stem?: string
  /** 浏览量 */
  views?: number
}
