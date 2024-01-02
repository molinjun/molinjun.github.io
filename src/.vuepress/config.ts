import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // 默认中文
    "/": {
      lang: "zh-CN",
      title: "莫林笔记",
      description: "莫林的学习笔记",
    },
  },

  theme,

  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 插件
  plugins: [

    // 搜索插件
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      locales: {
        "/": {
          cancel: "取消",
          placeholder: "搜索",
          search: "搜索",
          searching: "搜索中",
          select: "选择",
          navigate: "切换",
          exit: "关闭",
          // history: "搜索历史",
          emptyHistory: "无搜索历史",
          emptyResult: "没有找到结果",
          loading: "正在加载搜索索引...",
        },
      },
    }),
  ],

});
