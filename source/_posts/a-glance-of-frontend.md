---
title: 漫谈大前端
categories:
  - frontend
tags:
  - JS
top_img:
date: 2018-05-05 16:00:00
---

分享往往从历史开始。
1995年，javascript诞生
1998年左右，ajax得到应用
2006年，jQuery第一个版本面世
2009年，nodejs & angular.js
再后来，HTML5,CSS3...

<!--more-->

本文是一篇分享记录，虽以大前端为题，内容并不局限于前端的范畴，确切的说，算是对当前js能力的概括。

![](/blog/images/a-glance-of-frontend/1.png)

## web

最初，js被设计用于网页表单验证，随着互联网的发展，跑在浏览器上的页面承载了越来越多的功能，js也变得越来越完善。

### html5

现代浏览器支持许多先进的新特性，如：
1. 用于本地存储数据的 localStorage,sessionStorage
2. 用于开启辅助线程的 Web Worker
3. 用于消息推送的 notification
4. 用于绘制图像的 canvas,WebGl


### nodejs

nodejs是一种javascript的运行环境，能够使得javascript脱离浏览器运行。

特点：基于V8引擎，事件驱动，非阻塞I/O

优点：高并发，适合I/O密集型应用

缺点：不适合CPU密集型应用

应用：Web应用接入层，RESTful API


## mobile

随着智能手机的普及，移动端应用几乎成为每个互联网产品的标配。移动应用可以分为如下三种类型：原生应用(native app)， 网页应用(web app)，混合应用(hybrid app)。

### hybird

混合应用是基于webview的，native的webview控件将native外壳与web内容组合起来,形成了混合模式的移动应用。此类应用平衡了native与web之间的优缺点，目前比较流行。

优点：跨平台、多种设备兼容、升级快速和维护方便。

缺点：交互体验和性能都会比native app差一点。

与native app之间的通讯：JSBridge,JSPatch

具体可参看[浅谈 Hybrid App](https://zhuanlan.zhihu.com/p/21387961)

### native

一份代码，同时编译成不同安装包(android,ios)，然后提交到对应的应用市场，供用户下载，安装和使用。

相关技术：NativeScript, React Native, Weex

### pwa

作为下一代web应用模型，pwa旨在突破 web 平台本身对 web 应用固有的桎梏：客户端软件（即网页）需要下载所带来的网络延迟，与 Web 应用依赖浏览器作为入口所带来的体验问题。

相关技术背景：Web App Manifest, Service Worker, Push Notification。可参看[下一代 Web 应用模型 — Progressive Web App](https://zhuanlan.zhihu.com/p/25167289)

## desktop & os

在桌面端，js的能力已经可以纵深到桌面应用甚至是桌面系统。

### electron

Electron 是一个使用 JavaScript, HTML 和 CSS 构建跨平台的桌面应用的框架

目前 Electron 官网上已经列出了将近500个左右的应用，详细可查看[Electron官网应用](https://electronjs.org/apps)

### chrome os

Chrome OS是一款Google开发的基于PC的操作系统。

[Chrome OS演示](https://www.bilibili.com/video/av279438/)

## js

那么，js还能做些什么呢？？？
游戏：Unity5, cocos
插件：sketch, photoshop, greasemonkey
硬件：cylon
或许更多...

**EOF**