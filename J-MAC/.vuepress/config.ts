import { defineUserConfig } from "vuepress";
import theme from "./theme";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { searchPlugin } from "@vuepress/plugin-search";


export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "J-MAC",
      description: "Record of study and life",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "酒墨阿柴",
      description: "学习和生活的随笔",
    },
  },
  plugins: [
    // commentPlugin({
    //   pageSize: 10,
    //   copyright: false,
    // }),

    pwaPlugin({
      // cacheHTML: true,
      // update: "available",
      // update: "force",
      update: "hint",
      // maxSize: 6,
      favicon: "/logo2.png",
      // search logo setting,
    }),
    
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  theme,
})