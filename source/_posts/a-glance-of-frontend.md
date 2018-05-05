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

## web

最初，js被设计用于网页表单验证，随着互联网的发展，跑在浏览器上的页面承载了越来越多的功能，js也变得越来越完善。

### html5

现代浏览器支持许多先进的新特性，如：
1. 用于本地存储数据的 localStorage,sessionStorage
2. 用于开启辅助线程的 Web Worker
3. 用于消息推送的 notification
4. 用于绘制图像的 canvas,WebGl


### nodejs

对于nodejs，本文有广义和狭义两种不同的理解。广义：一个基于V8引擎，事件驱动，非阻塞I/O的运行环境；狭义：一种基于js语法的服务端语言。

作为运行环境，nodejs将js剥离浏览器，是js从前端向全端发展的基石，使得 **任何其他高级语言能做的，js都能做的更好**。目前，前端代码的构建过程已经离不开nodejs环境了。

作为服务端语言，nodejs能够轻松实现一个http服务，目前已经广泛应用于web应用的接入层。


## mobile

随着移动互联网的蓬勃发展，移动应用的市场份额越来越大，而近年来js在此领域也是大有可为的。

### hybird

混合应用是基于webview的，不管是在ios系统下还是在android系统下的开发包都内置了webview控件，将网页内嵌到原生应用中。

优点：跨平台、多种设备兼容、升级快速和维护方便。

缺点：交互体验和性能都会比native app差一点。

与native app之间的通讯：JSBridge,JSPatch

### native

一份代码，同时编译成android安装包和ios安装包，然后提交到对应的应用市场，供用户下载，安装和使用。

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