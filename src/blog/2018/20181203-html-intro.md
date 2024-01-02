
超文本标记语言(Hyper Text Markup Language, HTML)，描述并定义了网页的内容和基本布局。HTML不是一种编程语言，而是一种标记语言，通过一系列的元素组成，来

## 基础语法
### 标签与元素
HTML是一种标记语言，用一套标签(tag)来描述网页。  标签是由`尖括号`包括的关键字。标签一般是成对的，由`开始标签`和`结束标签`组成。如下所示：
```
<h1>标题<h1>
<p>段落</p>
```
有部分标签是自闭合标签，无需结束标签。
```
<img src="图片链接" />
```
`元素`(element),是由开始标签、元素内容和结束标签组成的。以下就是一个完整的元素。
```
<a href="http://blog.gezhiqinag.com">跳转页</a>
```
有些元素没有内容，称为`空元素`，如换行`<br/>`。空元素在开始标签中关闭。

`属性`，为HTML元素提供更多信息。属性，以键值对`name="value"`的方式，放在开始标签中。如上图的a标签的href就是属性。常见的属性id、class等，可以用来以后进行css选择元素。
### 注释
合理的注释，可以更清楚的了解代码的结构。HTML的注释语法：
```
<!-- 在此处写注释 -->
```
HTML还有一种条件注释，只用在IE中。
```
<!--[if IE 8]>
    .... some HTML here ....
<![endif]-->
```
- 标签及元素
- 注释
- 约定
### 语法约定
虽然HTML的语法宽松，但维持一个整洁一致的语法约定是个好习惯。

- 使用小写元素名  
HTML对大小写不敏感，但建议统一使用小写字母。大小混合阅读性太差，纯大写又不便于书写。
- 自闭标签

## 基础结构  
doctype
html
head
title
meta
body
### 基本结构
HTML文档的基本结构如下：
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p>hello dennis</p> 
</body>
</html>
```
- `DOCTYPE`
文档声明，告知浏览器HTML的版本类型，以更准确的渲染页面。老版本有多种文档声明类型，且稍显冗杂。自HTML5之后，就只用`<!DOCTYPE html>`声明即可，非常简洁。  
- `html`元素 
用来定义整个html页面。html元素由`head`和`body`两个元素组成。head元素用来定义文档的标题、字体、元数据等信息，而body元素，则包括展示在浏览器中的内容。        
body中的内容，会在后面主要介绍。
- `head`  head标签中定义的内容，不会展示，但却很重要。  
常见的有：  
`title`定义页面的标题。  
`link` 定义链接的css脚本。
```
<link rel="stylesheet" href="float.css">
```
`script`定义链接的javascript脚本。
```
<script src="demo.js"></script>
```
`meta`元素也很重要。meta元素用来定义一些元数据，如页面描述、关键字、文档作者和字体等信息。这些数据不会显示在页面，但是可以被搜索引擎使用。
```
<meta name="description" content="Blog of dennis" />
<meta name="keywords" content="Nodejs,Docker" />
```

## 常用标签
- h1 标题
- 段落 p
strong em 
- 图片
- 表格
- 超链接
- 列表
- 表单
文本
文本域
单选框
多选框
下拉菜单
按钮

## 结构性标签
- hr
- br

- span 和 div
块标签和行标签

## 字符实体


## 语义性标签
- header
- nav
- footer
- aside
- article
- code

## 总结

## 参考与资源
- [1] [https://internetingishard.com/](https://internetingishard.com/)
- [2] [MDN HTML超文本标记语言
](https://developer.mozilla.org/zh-CN/docs/Web/HTML)
- [3] [tutorialpoint HTML Tutorial](https://www.tutorialspoint.com/html/index.htm)
- [4] [Learn to Code HTML & CSS
](https://learn.shayhowe.com)
- [5] [Google developers WEB开发基础](http://wf.uisdc.com/cn/#)
