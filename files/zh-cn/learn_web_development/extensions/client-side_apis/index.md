---
title: 客户端 Web API
slug: Learn_web_development/Extensions/Client-side_APIs
original_slug: Learn/JavaScript/Client-side_web_APIs
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

当你给网页或者应用编写客户端的 JavaScript 时，你很快会碰上**应用程序接口**（**API**）。API 是一些用于操控网站所基于的浏览器与操作系统的不同方面，或是操控由其他网站或服务端传来的数据的编程特性。在这个单元里，我们将一同探索什么是 API，以及如何使用一些在你开发中将经常遇见的 API。

## 预备知识

若想深入理解这个单元的内容，你必须能够以自己的能力较好地学完之前的几个章节（[JavaScript 第一步](/zh-CN/docs/Learn_web_development/Core/Scripting)、[创建 JavaScript 代码块](/zh-CN/docs/Learn_web_development/Core/Scripting) 和 [JavaScript 对象介绍](/zh-CN/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)）。这几部分涉及到了许多简单的 API 的使用，如果没有它们我们将很难做一些实际的事情。在这个教程中，我们默认你已经掌握了 JavaScript 的核心知识，然后我们将更深入地探索常见的 Web API。

了解 [HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content) 和 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 的基本知识，也会对理解这个单元的内容大有裨益。

> [!NOTE]
> 如果你正在使用一台无法创建你自己的文件的电脑、平板或其他设备，你可以尝试使用一些在线网页编辑器如 [JSBin](https://jsbin.com/) 或者 [Glitch](https://glitch.com/) 来尝试编辑一些代码示例。

## 指南

- [Web API 简介](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction)
  - : 首先，我们将从一个更高的角度来看这些 API：它们是什么，它们怎么起作用的，你该怎么在自己的代码中使用它们以及他们是怎么构成的？我们也会看看不同的主要 API 类别是什么，以及它们有什么样的用途。
- [操作文档](/zh-CN/docs/Learn_web_development/Core/Scripting/DOM_scripting)
  - : 当你编写网页和应用时，你最常见的任务之一就是以某种方式操作网页中的文档。这通常是通过使用文档对象模型（DOM）来完成的——DOM 是一组用于控制 HTML 和样式信息的 API，其使用了大量的 {{domxref("Document")}} 对象。在这篇文章中，我们将详细讨论如何使用 DOM 以及一些其他有趣的 API。它们可以以有趣的方式改变你的环境。
- [从服务器获取数据](/zh-CN/docs/Learn_web_development/Core/Scripting/Network_requests)
  - : 在现代网页及其 APP 中另外一个很常见的任务就是与服务器进行数据交互时不再刷新整个页面，这看起来微不足道，但却对一个网页的展现和交互上起到了很大的作用，在这篇文章里，我们将阐述这个概念，然后来了解实现这个功能的技术，例如 {{domxref("XMLHttpRequest")}} 和 [Fetch API](/zh-CN/docs/Web/API/Fetch_API)。
- [第三方 API](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs)
  - : 到目前为止我们所涉及的 API 都是浏览器内置的，但并不代表所有。许多大网站如 Google Maps、Facebook、PayPal 等，都提供它们的 API 给开发者们去使用他们的数据（比如在你的博客里展示你分享的推特内容）或者服务（如在你的网页里展示定制的谷歌地图或接入 Facebook 登录功能）。这篇文章介绍了浏览器 API 和第三方 API 的差别以及一些最新的典型应用。
- [绘制图形](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
  - : 浏览器包含多种强大的图形编程工具，从可缩放矢量图形语言 [SVG](/zh-CN/docs/Web/SVG)，到 HTML 绘制元素 {{htmlelement("canvas")}} 元素（[Canvas API](/zh-CN/docs/Web/API/Canvas_API) 以及 [WebGL](/zh-CN/docs/Web/API/WebGL_API)）。这篇文章提供了部分 Canvas 的简介，以及让你更深入学习的资源。
- [视频和音频 API](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Video_and_audio_APIs)
  - : HTML5 能够通过元素标签嵌入富媒体：{{htmlelement("video")}}、{{htmlelement("audio")}}。这些元素同时带来了它们的一些 API 用于控制回放，搜索等功能。本文向你展示了如何创建自定义播放控制等常见的任务。
- [客户端存储](/zh-CN/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage)
  - : 现代 Web 浏览器拥有很多不同的技术，能够让你存储与网站相关的数据，并在需要时调用它们，能够让你长期保存数据、保存离线网站及其他实现其他功能。本文解释了这些功能的基本原理。
