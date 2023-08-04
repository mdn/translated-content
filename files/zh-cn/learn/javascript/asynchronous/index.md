---
title: 异步 JavaScript
slug: Learn/JavaScript/Asynchronous
---

{{LearnSidebar}}

在这个模块，我们将查看{{Glossary("asynchronous", "异步")}} {{Glossary("JavaScript")}}，异步为什么很重要，以及怎样使用异步来有效处理潜在的阻塞操作，比如从服务器上获取资源。

> **标注：**
>
> #### 想成为一名前端工程师？
>
> 我们汇总了一门课程，其中包含你实现目标所需要的所有基本信息。
>
> [**点击开始**](/zh-CN/docs/Learn/Front-end_web_developer)

## 预备知识

异步 JavaScript 是一个相当高级的话题，建议你先完成 [JavaScript 第一步](/zh-CN/docs/Learn/JavaScript/First_steps)和[创建 JavaScript 代码块](/zh-CN/docs/Learn/JavaScript/Building_blocks) 两个模块的学习后再来学习。

> **备注：** 如果你工作在一个无权创建自己文件的电脑/平板/其他设备上，你需要在一个在线编程工具上试验（大多数）代码示例，如 [JSBin](https://jsbin.com/) 或者 [Glitch](https://glitch.com).

## 指南

- [异步 JavaScript 简介](/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing)
  - : 在这篇文章中我们将介绍 **同步编程** 和 **异步编程** 是什么，为什么我们总是需要异步编程技术，异步函数过去是怎样在 JavaScript 上实现的，以及这些方式的问题有哪些。
- [如何使用 Promise](/zh-CN/docs/Learn/JavaScript/Asynchronous/Promises)
  - : 我们将在这里介绍 Promise 并向你展示如何使用基于 Promise 的 API。我们也会介绍 `async` 和 `await` 关键字。
- [应用一个基于 Promise 的 API](/zh-CN/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
  - : 本文概述了如何实现一个我们自己的基于 Promise 的 API。
- [Worker 简介](/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
  - : Worker 使你能够在独立的线程中运行任务来保持你的主要代码的可响应性。在这篇文章中我们将把一个长时间运行的同步函数重写为使用 Worker 的示例。

## 测验

- [序列动画](/zh-CN/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)
  - : 这个测验要求您使用 Promise 来播放一组特定序列的动画。

## 参见

- 由 Marijn Haverbeke 编写的电子书籍 [Eloquent JavaScript](https://eloquentjavascript.net/) 中的 [异步编程](https://eloquentjavascript.net/11_async.html)。
