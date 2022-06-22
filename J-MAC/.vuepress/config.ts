import { defineUserConfig } from "vuepress";
import theme from "./theme";

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

  theme,
});
