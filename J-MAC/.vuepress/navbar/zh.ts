import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/zh/",
  // "/zh/home",

  {
    text: "编程笔记", 
    icon: "code", 
    children: [
      {
        text: "Python",
        icon: "python",
        children: [
          { text: "基础语法", icon: "python", link: "/zh/column/pythonbasic/"}
        ]
      }
    ]
  },

  {
    text: "阿柴烹饪", 
    icon: "hot", 
    children: [
      {
        text: "面食",
        icon: "hot",
        children: [
          { text: "酸辣麻酱面", icon: "hot", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  },

  {
    text: "英国生活", 
    icon: "creative", 
    children: [
      {
        text: "伦敦",
        icon: "creative",
        children: [
          { text: "餐厅推荐", icon: "creative", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  },

  {text: "关于阿柴", icon: "people", link: "https://comment.imjmac.com"},

  {
    text: "阿柴专属领域",
    icon: "lock",
    children: [
      {
        text: "管理",
        icon: "play",
        children: [
          { text: "评论管理", icon: "edit", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  }
]);
