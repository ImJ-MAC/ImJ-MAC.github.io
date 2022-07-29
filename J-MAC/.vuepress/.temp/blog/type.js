export const typeMap = {"article":{"/":{"path":"/article/","keys":[]},"/zh/":{"path":"/zh/article/","keys":["v-04de2589"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]},"/zh/":{"path":"/zh/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]},"/zh/":{"path":"/zh/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":[]},"/zh/":{"path":"/zh/timeline/","keys":["v-04de2589"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
