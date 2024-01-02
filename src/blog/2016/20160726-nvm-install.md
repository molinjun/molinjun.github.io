---
date: 2016-07-26 20:11:16
category: [Node.js]
tag: npm travis 
---

# node多版本管理
node的安装方式有很多种。但是，现在node版本更新过于迅速，而且有时候不同项目使用的node版本不同，需要经常切换版本。对于原来的node安装方式来说，切换一次版本绝对是不好的体验。
[nvm](https://github.com/creationix/nvm)可以快速的安装node，而且可以快速无痛的切换版本。
下面就简单介绍nvm的安装以及常用的一些指令。

## 安装
到[nvm官网](https://github.com/creationix/nvm)下载nvm的安装脚本。
**cURL**
```
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```
**Wget**
```
$ wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```
脚本执行后，会将nvm的repository下载到~/.nvm目录下。另外，会在用户的profile文件(~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc)中加入以下脚本：
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
脚本就是用来设置环境变量。nvm.sh是用来加载nvm，为不要每次登陆运行脚本，就加到profile中。
由于没重启并不会马上执行shell脚本，所以需要运行脚本，加载nvm。
```
source ~/.bashrc
```
## 常用的指令
**安装指定版本node**
```
**安装稳定版本**
$ nvm install stable
**安装7.0.0**
$ nvm install 7.0.0
```
**切换版本**
```
# 切换到7.0.0版本
$ nvm use 7.0.0
```
**查看已经安装的版本**
```
$ nvm ls
```
**查看当前使用版本**
```
$ nvm current
```
**查看可以下载版本**
```
$ nvm ls-remote
```
**指定默认版本**
```
$nvm alias default 0.12.7 #设置默认 node 版本为 0.12.7
```
**以指定版本运行文件**
```
# 用7.0.0运行demo.js
$ nvm run 7.0.0 demo.js
```
**删除某个版本**
```
$ nvm uninstall 7.0.0
```
**卸载nvm**
```
rm -rf ~/.nvm
```

## 使用.nvmrc文件
如果需要为某个项目制定node版本，可以在项目根目录下创建.nvmrc文件，在文件中指定node版本。
```
cd <项目根目录>  #进入项目根目录
echo 4 > .nvmrc #添加 .nvmrc 文件
nvm use #无需指定版本号，会自动使用 .nvmrc 文件中配置的版本
node -v #查看 node 是否切换为对应版本
```

## 其他
使用npm全局安装的依赖包在**~/.nvm/versions/node/<版本>/lib/<包名>**下。
```
$ npm install -g ava
# 安装在~/.nvm/versions/node/v7.0.0/lib/ava
```
## 参考
[1] [nvm github](https://github.com/creationix/nvm)  
[2] [Node版本管理工具](https://segmentfault.com/a/1190000007229411)    
[3] [使用 nvm 管理不同版本的 node 与 npm](http://www.cnblogs.com/kaiye/p/4937191.html)  
