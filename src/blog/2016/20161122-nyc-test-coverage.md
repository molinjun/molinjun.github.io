---
date: 2016-11-22 00:00:39
category: [Node.js]
tag: [测试 nyc ava]
---
# nyc 代码覆盖率检查

因为AVA重新处理了测试文件，所以你不能使用 istanbul 来做代码覆盖率，但你可以使用 nyc来完成，它是支持子进程的istanbul。
<!-- more -->
#### 安装
```bash
npm install nyc --save-dev
```
因为nyc运行之后会生成测试覆盖率的结果，会在项目目录下生成.nyc_output和coverage文件夹。
这两个文件夹不需要版本管理，所以加到.gitignore文件中.
#### 使用
使用nyc来测试覆盖率很方便，只需要在测试命令前加上nyc即可。所以和ava配合使用的package.json的配置如下：
```json
{
  "scripts": {
    "test": "nyc ava -v"
  }
}
```

#### 测试报告
NYC 在.nyc_ouput文件夹中为每个进程创建一个json的覆盖率文件。
把这些文件组合成一个可阅读的 HTML报告，可以通过下面的方法来做：
```bash
$ ./node_modules/.bin/nyc report --reporter=html
```
或者，使用 npm 脚本来代替打印命令行：
```json
{
  "scripts": {
    "report": "nyc report --reporter=html"
  }
}
```
这样会在coverage文件夹中输出一个 HTML 文件。

#### 使用小结
nyc ava只会在输出窗口输出覆盖率结果，如下：
```bash
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
add.js   |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
```
要生成html的覆盖率结果，需要使用nyc report命令来生成html的结果。
```bash
nyc reprot --reporter=html
```
这样就会在coverage下生成html的覆盖率就结果。用浏览器打开即可看到各个文件的覆盖率。

所以常用的package.json中的配置如下：
```json
"scripts": {
  "test": "ava -v",
  "cov": "nyc report --report",
  "test:nyc": "nyc ava -v",
  "test:cov": "nyc ava -v && npm run cov"
}
```
常用于以下的集中场景：
```
- npm run test
用于直接运行测试，但不跑覆盖率检查。

- npm run test file
来对具体的文件测试。

- npm run test:cov
全部文件的测试及覆盖率检查

- 某个文件的测试及覆盖率检查
npm run test:nyc  file   测试文件并生成覆盖率数据
npm run  cov    将数据文件输出html文件
```

