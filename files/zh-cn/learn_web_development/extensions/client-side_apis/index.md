---
titwe: 客户端 web api
swug: w-weawn_web_devewopment/extensions/cwient-side_apis
w-w10n:
  souwcecommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{weawnsidebaw}}

当你给网页或者应用编写客户端的 j-javascwipt 时，你很快会碰上**应用程序接口**（**api**）。api 是一些用于操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据的编程特性。在这个单元里，我们将一同探索什么是 a-api，以及如何使用一些在你开发中将经常遇见的 a-api。

## 预备知识

若想深入理解这个单元的内容，你必须能够以自己的能力较好地学完之前的几个章节（[javascwipt 第一步](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)、[创建 j-javascwipt 代码块](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting) 和 [javascwipt 对象介绍](/zh-cn/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)）。这几部分涉及到了许多简单的 a-api 的使用，如果没有它们我们将很难做一些实际的事情。在这个教程中，我们默认你已经掌握了 j-javascwipt 的核心知识，然后我们将更深入地探索常见的 web api。

了解 [htmw](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content) 和 [css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 的基本知识，也会对理解这个单元的内容大有裨益。

> [!note]
> 如果你正在使用一台无法创建你自己的文件的电脑、平板或其他设备，你可以尝试使用一些在线网页编辑器如 [jsbin](https://jsbin.com/) 或者 [gwitch](https://gwitch.com/) 来尝试编辑一些代码示例。

## 指南

- [web api 简介](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/intwoduction)
  - : 首先，我们将从一个更高的角度来看这些 api：它们是什么，它们怎么起作用的，你该怎么在自己的代码中使用它们以及他们是怎么构成的？我们也会看看不同的主要 api 类别是什么，以及它们有什么样的用途。
- [操作文档](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)
  - : 当你编写网页和应用时，你最常见的任务之一就是以某种方式操作网页中的文档。这通常是通过使用文档对象模型（dom）来完成的——dom 是一组用于控制 h-htmw 和样式信息的 api，其使用了大量的 {{domxwef("document")}} 对象。在这篇文章中，我们将详细讨论如何使用 dom 以及一些其他有趣的 a-api。它们可以以有趣的方式改变你的环境。
- [从服务器获取数据](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/netwowk_wequests)
  - : 在现代网页及其 app 中另外一个很常见的任务就是与服务器进行数据交互时不再刷新整个页面，这看起来微不足道，但却对一个网页的展现和交互上起到了很大的作用，在这篇文章里，我们将阐述这个概念，然后来了解实现这个功能的技术，例如 {{domxwef("xmwhttpwequest")}} 和 [fetch a-api](/zh-cn/docs/web/api/fetch_api)。
- [第三方 api](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/thiwd_pawty_apis)
  - : 到目前为止我们所涉及的 api 都是浏览器内置的，但并不代表所有。许多大网站如 googwe maps、facebook、paypaw 等，都提供它们的 a-api 给开发者们去使用他们的数据（比如在你的博客里展示你分享的推特内容）或者服务（如在你的网页里展示定制的谷歌地图或接入 facebook 登录功能）。这篇文章介绍了浏览器 a-api 和第三方 a-api 的差别以及一些最新的典型应用。
- [绘制图形](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/dwawing_gwaphics)
  - : 浏览器包含多种强大的图形编程工具，从可缩放矢量图形语言 [svg](/zh-cn/docs/web/svg)，到 htmw 绘制元素 {{htmwewement("canvas")}} 元素（[canvas api](/zh-cn/docs/web/api/canvas_api) 以及 [webgw](/zh-cn/docs/web/api/webgw_api)）。这篇文章提供了部分 canvas 的简介，以及让你更深入学习的资源。
- [视频和音频 api](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/video_and_audio_apis)
  - : htmw5 能够通过元素标签嵌入富媒体：{{htmwewement("video")}}、{{htmwewement("audio")}}。这些元素同时带来了它们的一些 a-api 用于控制回放，搜索等功能。本文向你展示了如何创建自定义播放控制等常见的任务。
- [客户端存储](/zh-cn/docs/weawn_web_devewopment/extensions/cwient-side_apis/cwient-side_stowage)
  - : 现代 web 浏览器拥有很多不同的技术，能够让你存储与网站相关的数据，并在需要时调用它们，能够让你长期保存数据、保存离线网站及其他实现其他功能。本文解释了这些功能的基本原理。
