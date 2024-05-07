import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://molinjun.tech",

  author: {
    name: "莫林",
    url: "https://molinjun.tech",
  },

  // 图标
  iconAssets: "iconfont",
  // 导航栏的 logo
  logo: "/logo.png",
  favicon: "/favicon.ico",

  // 链接的 Github 仓库
  repo: "molinjun/molin-note",
  // 文档的目录
  docsDir: "src",

  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: '备案号：<a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备20027343</a>',
      navbarLayout: {
        start: ["Brand"],
        center: ["Links"],
        end: ["Repo", "Search"]
      },
      displayFooter: true,
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  // 博客配置
  blog: {
    // 头像
    avatar: "/me.png",
    // 名称
    name: "莫林",
    // 是否是圆形头像
    roundAvatar: true,
    // 个人描述
    description: "点滴积累，厚积薄发...",
    // 社交媒体
    medias: {
      Github: "https://github.com/molinjun",
      Twitter: "https://twitter.com/molinjun_tech"
    },
    // 博客的侧边栏设置
    sidebarDisplay: "mobile",
    // 每页展示的文章数量
    articlePerPage: 7,
    timeline: "见证自己的成长线...",
  },

  plugins: {
    blog: {
      // article: "/blog/",
      filter: ({ filePathRelative }) => {
        // 舍弃那些不是从 Markdown 文件生成的页面
        if (!filePathRelative) return false;
        // 舍弃不包含`blog` 文件夹的页面
        if (!filePathRelative.includes("blog/")) return false;
        return true;
      },
    },
    // You should generate and use your own comment service
    comment: {
      provider: "Waline",
      serverURL: "https://sq5m906e.api.lncldglobal.com", // your server url
    },

    // All features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },

  // 开发模式下是否启动热更新，显示所有更改并重新渲染
  hotReload: true,
});
