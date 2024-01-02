import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: "首页",
    icon: "home",
    link: "/"
  },
  {
    text: "博客",
    icon: "note",
    link: "/blog/"
  },
  {
    text: "Go 开发小册",
    link: "/books/golang/"
  },
  {
    text: "云原生笔记",
    children: [
      {
        text: "Docker 容器",
        link: "/books/docker/",
      },
      {
        text: "Kubernetes",
        link: "/books/kubernetes/",
      },
    ],
  },
  {
    text: "算法小册",
    children: [
      {
        text: "数据结构与算法",
        link: "/books/algorithm/",
      },
      {
        text: "Leetcode 刷题",
        link: "/books/leetcode/",
      },
    ],
  },
  {
    text: "关于作者",
    children: [
      {
        text: "作者介绍",
        link: "/about/author",
      },
      {
        text: "网站简介",
        link: "/about/site",
      },
    ],
  },
]);