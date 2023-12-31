---
date: 2016-11-25 10:11:45
category: 环境搭建
tag: aws 环境搭建
---

# AWS申请免费EC2主机

由于平时开发学习，需要用到vps的主机。有以下几种推荐的：
- 阿里云 之前考虑阿里的毕竟是国内的，不需要翻墙什么的，质量和服务也是有保障。但是最便宜的套餐都要68元一个月，而且配置相当低。所以就打算换一款。
- linode
同事推荐。属于高大上的配置，也属于比较稳定可靠的。本打算黑五的时候入手，不过，刚好看到aws的免费套餐，就选择了aws。
- aws aws为新用户提供12个月的免费试用期。刚开始因为aws需要绑卡的行为，心里有点小彷徨。不过还是申请了。使用之后，感觉feel很棒。

下面就大体介绍一下aws主机申请和搭建的大体步骤：
<!--more-->
### 注册aws
和普通的网站注册区别不大，但是有几点需要注意的地方。
- 注册信息
进入官网，输入邮箱、密码等信息。
- 输入信用卡信息
这一点刚开始是抗拒的。但还是彷徨的做了，相信aws不会坑你的。
- 手机验证
输入手机号，会接受到电话，按提示输入PIN码。
- 支持方案
我选择的是免费的。
接下来顺利的完成注册。

新注册的用户就可以享受免费套餐了。接下来，就可以申请使用免费EC2主机了。
### EC2主机搭建
- 进入aws主页，选择EC2。
- 网页右上角，选择地区，我选的是东京。
- 启动实例。
- 选择免费的套餐。我选ubuntu的。
- 实例类型。选免费的。
- 启动。
- 生成秘钥对。
因为aws是通过ssh连接服务器的，所以需要秘钥对。
选择【创建秘钥对】,然后输入一个pem文件的名称。点击下载pem文件。
将pem文件放到你主目录的.ssh文件夹下，并修改其权限。
```
chmod ~/.ssh/**.pem
```
- 查看实例
这一步，实例已经启动了。可以在控制台停止、开启、重启实例以及完成相应的配置。

### 连接服务器
可以使用各种ssh终端连接服务器。
我是在mac的shell下连接。
```
ssh -i ~/.ssh/**.pem ubuntu@ip
```
> 因为我的是ubuntu系统，所以主机名是ubuntu。你可能需要按照你的系统，到官网看查看。

### 注意点
- 端口
主机的端口可能是受限的。需要到实例配置页面。点击【安全组】-【操作】-【编辑入站规则】-自定义tcp规则，开放你需要的端口，来源为0.0.0.0/0或者你自己指定。
- 账单提醒
aws有每个月上下行15G的流量，基本是足够用的。不过，绑定了信用卡多少是有点不放心的，你可以设置订单预警。
到控制台的【首选项】勾选【接受账单警报】。
点击左上角的【服务】，左边栏的【账单】，点击【设置一个账单警报】。可以选择高于0元，警报，然后输入你的邮箱，并到邮箱验证即可。

### 参考
[科学上网之EC2搭建shadowsocks](https://segmentfault.com/a/1190000003101075)
