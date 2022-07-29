export const categoryMap = {"category":{"/":{"path":"/category/","map":{}},"/zh/":{"path":"/zh/category/","map":{"编程笔记":{"path":"/zh/category/%E7%BC%96%E7%A8%8B%E7%AC%94%E8%AE%B0/","keys":["v-04de2589"]}}}},"tag":{"/":{"path":"/tag/","map":{}},"/zh/":{"path":"/zh/tag/","map":{"Python":{"path":"/zh/tag/python/","keys":["v-04de2589"]},"编程笔记":{"path":"/zh/tag/%E7%BC%96%E7%A8%8B%E7%AC%94%E8%AE%B0/","keys":["v-04de2589"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
