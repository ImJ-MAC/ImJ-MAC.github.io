import { navbar } from "vuepress-theme-hope";

export const en = navbar([
  "/",
  // "/home",
  {
    text: "Programming Notes", 
    icon: "code", 
    children: [
      {
        text: "Python",
        icon: "python",
        children: [
          { text: "Data types", icon: "python", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  },

  {
    text: "J-MAC Recipes", 
    icon: "hot", 
    children: [
      {
        text: "Noodles",
        icon: "hot",
        children: [
          { text: "Noodles in Hot and Sour Sesame Sauce", icon: "hot", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  },

  {
    text: "Living in the UK", 
    icon: "creative", 
    children: [
      {
        text: "London",
        icon: "creative",
        children: [
          { text: "Restaurant recommendations", icon: "creative", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  },

  {text: "About J-MAC", icon: "people", link: "https://comment.imjmac.com"},

  {
    text: "J-MAC exclusive area",
    icon: "lock",
    children: [
      {
        text: "Management",
        icon: "play",
        children: [
          { text: "Comment Management", icon: "edit", link: "https://comment.imjmac.com"}
        ]
      }
    ]
  }
]);
