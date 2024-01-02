---

date:  2017-07-26 14:55:41
category:
  - Node.js
  - 前端 
---
# 发布 node 模块到 npm

NPM(Node Package Manager) 是 Node.js 的包管理工具。npm 社区有很多好用的模块。在开发过程中，我们也会在项目中提炼出一些有用的功能模块。这个时候可以发布到npm并开源到github，方便别人使用同时又进一步根据issue完善和健壮模块的功能。  
下面我就根据自己的一个模块[koa2-validation](https://github.com/gedennis/koa2-validation)来简单介绍发布 npm 模块的方法步骤以及一些注意点。

## 创建项目
通常我们的项目要放到github上开源，便于别的同学提issue。所以可以创建一个github项目（这里默认大家清楚如何使用github，不明请google）。另外，默认本机已经安装node和npm（不清楚请参考使用[nvm安装node](http://blog.gezhiqiang.com/2016/11/26/nvm-md/)）。
### 项目结构
github创建项目的时候，勾选默认的 .gitignore、License 和 README 文件。本地通过npm init 来创建 package.json 文件，需要数据一些模块的信息，如名称、版本、描述、作者、license等。
```sh
$ npm init
```
另外，需要一些 eslint 文件等，具体的目录结构如下：
```sh
.
├── .eslintrc.json   // eslint 文件
├── .git
├── .gitignore      // .gitignore
├── .npmignore      // .npmignore 不需要publish的文件
├── .travis.yml     // travis CI
├── LICENSE
├── README.md
├── index.js       // 入口文件
├── lib            // 主要逻辑代码
├── node_modules
├── package-lock.json
├── package.json
└── test          //测试用例
```
主要的逻辑代码放在lib目录下。不清楚的同学可以参考[koa2-validation](https://github.com/gedennis/koa2-validation)的目录结构。

### 测试
项目通常需要加入必要的单元测试。而且因为可能别的同学会用到，这一点尤为重要。
关于node的测试，大家根据自己的习惯会使用mocha、jest等。我个人偏向于使用ava来进行单元测试。不清楚如何使用ava测试的，可以[参考这篇](http://blog.gezhiqiang.com/2016/11/22/ava-md/)。  关于更多测试结构，参考[这里](https://github.com/gedennis/koa2-validation/tree/master/test)。  
关于持续集成，在github上通常使用 [travis](https://travis-ci.org/) 比较多。travis使用起来也很简单方便。首先需要将你的github 账号和travis关联，travis就会同步你的github repository。然后，你需要打开对应项目的CI 开关。最后在项目中定义对应的.travis.yml即可在项目push的时候自动运行测试脚本。  
更多关于travis的使用可以参考[这篇](https://github.com/nukc/how-to-use-travis-ci)和[官方文档](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/).以下是我的.travis.yml 文件。
```yaml
#指定运行环境
language: node_js
#指定nodejs版本，可以指定多个
node_js:
  - "7.6.0"

before_script:
  - npm install

#运行的脚本命令
script:
  - npm run test

#指定分支，只有指定的分支提交时才会运行脚本
branches:
  only:
    - master
```
### 增加徽章
完成功能开发之后，最好在 README 中详细地介绍模块的使用说明。  
另外，我们经常看到 github 项目有很多漂亮的badge, 例如下载量和 测试状况等。那如何添加这些徽章呢。可以参考 [shields](https://github.com/badges/shields) 和 [这篇文章](https://zyj1022.github.io/posts/frontend/2017/github-badge.html)。

## 发布项目
项目完成之后，我们需要将模块发布到npmjs。通常我们需要先查找一下是否自己的模块已经被注册，并确定自己的模块名称。  
首先，我们需要到[npm官网](www.npmjs.org) 注册一个账号。然后添加到本地配置。
```
$ npm adduser	
Username: dennis.ge
Password: ****
Email: gedennis@163.com
```
然后验证自己的配置。
```
npm whoami
```
最后，在package.json 定义好版本，通过 npm publish 发布模块即可。
```
npm publish
```
npm publish的时候经常会遇到发布不成功的状况。
```
npm WARN adduser Incorrect username or password
npm WARN adduser You can reset your account by visiting:
npm WARN adduser 
npm WARN adduser     http://admin.npmjs.org/reset
```
这个时候通常可能是nvm安装的npm，或者你的 npm registry 不是npmjs，通过nrm修改npm源即可。

> 这里只是介绍了一些简单的发布步骤，关于更多版本定义以及升级，请[参考这篇](https://segmentfault.com/a/1190000004221514)。

至此，我们就成功发布了一个 npm 模块。

## 总结
这篇文章简单介绍了一下如何发布 npm 模块。包括如何创建项目，项目结构，测试，持续集成以及如何添加badge等一些内容。
关于发布npm 模块，需要进一步了解版本的定义，以及版本的升级等更深入的内容。

## 参考
- [深入 Node 模块的安装和发布](https://segmentfault.com/a/1190000004221514)
- [如何简单入门持续集成( Travis-CI ) ](https://github.com/nukc/how-to-use-travis-ci)