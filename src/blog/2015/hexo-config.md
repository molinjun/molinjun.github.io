---
date: 2016-10-28 22:53:32
category: Hexo
tag: Hexo
---
# hexo配置文件介绍-hexo搭建博客2
hexo项目可以通过配置文件，快速地个性化自己的网站内容。项目根目录下的\_config.yml为配置文件。
配置文件的条目比较多，以下对于一些配置项，做一个简单的介绍。
<!-- more -->
详细的文件解释参考[官网](https://hexo.io/zh-cn/docs/configuration.html)。

### site网站
```
title: 网站标题
subtitle  网站副标题
description 网站描述
author      您的名字
language  网站使用的语言
timezone  网站时区。Hexo 默认使用您电脑的时区。时区列表。比如说：America/New_York, Japan, 和 UTC 。
```
### url网址
```
url 网址
root  网站根目录
permalink 文章的永久链接格式 :year/:month/:day/:title/
permalink_default 永久链接中各部分的默认值
```
### directory 目录
```
source_dir  资源文件夹，这个文件夹用来存放内容。  source
public_dir  公共文件夹，这个文件夹用于存放生成的站点文件。  public
tag_dir 标签文件夹  tags
archive_dir 归档文件夹  archives
category_dir  分类文件夹  categories
code_dir  Include code 文件夹 downloads/code
i18n_dir  国际化（i18n）文件夹  :lang
skip_render 跳过指定文件的渲染，您可使用 glob 表达式来匹配路径。
```
### writing 文章相关
```
new_post_name 新文章的文件名称  :title.md
default_layout  预设布局  post
auto_spacing  在中文和英文之间加入空格  false
titlecase 把标题转换为 title case false
external_link 在新标签中打开链接  true
filename_case 把文件名称转换为 (1) 小写或 (2) 大写  0
render_drafts 显示草稿  false
post_asset_folder 启动 Asset 文件夹 false
relative_link 把链接改为与根目录的相对位址  false
future  显示未来的文章  true
highlight 代码块的设置
```
### category&tag 分类和标签
```
default_category  默认分类  uncategorized
category_map  分类别名
tag_map 标签别名
```
### pagination分页
```
参数        描述              默认值
per_page  每页显示的文章量 (0 = 关闭分页功能) 10
pagination_dir  分页目录  page
```
### extension扩展
```
theme: 主题。默认为landscape。
```
### 部署
```
部署到github
deploy:
  type: git
```
