import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/kstong/Desktop/Python_Dev./Coder/GithubPages/ImJ-MAC/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("/Users/kstong/Desktop/Python_Dev./Coder/GithubPages/ImJ-MAC/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("/Users/kstong/Desktop/Python_Dev./Coder/GithubPages/ImJ-MAC/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("/Users/kstong/Desktop/Python_Dev./Coder/GithubPages/ImJ-MAC/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
