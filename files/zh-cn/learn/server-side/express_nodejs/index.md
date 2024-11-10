---
title: Express Web 框架（Node.js/JavaScript）
slug: Learn/Server-side/Express_Nodejs
---

{{LearnSidebar}}

Express 是一款受欢迎的开源 web 框架，构建语言是 JavaScript，可以在 node.js 环境运行。本系列文章介绍了该框架的优点，如何搭建开发环境以及部署 web 开发环境并进行开发任务。

## 前提

在开始这个模块之前你需要知道什么是服务端网页编程和 web 框架，建议你先阅读 [服务端网页编程](/zh-CN/docs/Learn/Server-side) 模块。强烈推荐了解编程概念和 [JavaScript](/zh-CN/docs/Web/JavaScript) ，但这对理解核心概念不是必需的。

> [!NOTE]
> 这个网站有很多有用的资源用来学习 JavaScript 做客户端开发： [JavaScript](/zh-CN/docs/Web/JavaScript), [JavaScript Guide](/zh-CN/docs/Web/JavaScript/Guide), [JavaScript Basics](/zh-CN/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [JavaScript](/zh-CN/docs/Learn/JavaScript) (learning). 核心的 JavaScript 语言和概念用 Nodejs 服务端开发是相同的，也是相关的。Node.js 提供 [额外的 API](https://nodejs.org/dist/latest-v6.x/docs/api/) 用于支持在无浏览器环境中有用的功能，例如，创建 HTTP 服务器并访问文件系统，但不支持 JavaScript API 以使用浏览器和 DOM。
>
> 这篇指南将会提供一些 Node.js 和 Express 的信息，并且有很多优秀的网络资源和书籍。一些链接 比如[How do I get started with Node.js](http://stackoverflow.com/a/5511507/894359) (StackOverflow) 和 [What are the best resources for learning Node.js?](https://www.quora.com/What-are-the-best-resources-for-learning-Node-js?) (Quora).

## 指南

- [Express/Node 介绍](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Introduction)
  - : 在这篇文章中，我们回答了“什么是 Node？”和“什么是 Express？”并为你概述了 Express web 框架的特殊之处。我们将介绍主要功能，并向你展示 Express 应用程序的一些主要构建模块（尽管此时你还没有可用于测试它的开发环境）。
- [搭建 Node(Express) 开发环境](/zh-CN/docs/Learn/Server-side/Express_Nodejs/development_environment)
  - : 介绍了 Express 的所用之处后，我们将向你展示如何在不同操作系统下建立并验证 Node/Express 开发环境。无论你使用任何操作系统，这篇文章都可以完全指导如何开始构建 Express 应用。
- [Express 教程——第一部分：本地图书馆](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website)
  - : 该实用教程系列中的第一篇文章，介绍了即将学习的内容，并概述了在后续文章中不断迭代的“本地图书馆”例子。
- [Express 教程——第二部分：建立网站的骨架](/zh-CN/docs/Learn/Server-side/Express_Nodejs/skeleton_website)
  - : 这篇文章将介绍如何建立一个网站项目的“骨架”，然后你可以继续添加自己的路由、模板/视图和数据库。
- [Express 教程——第三部分：使用数据库（Mongoose）](/zh-CN/docs/Learn/Server-side/Express_Nodejs/mongoose)
  - : 这篇文章简单介绍了在 Node/Express 中如何使用数据库。本文中我们将会使用 Mongoose 为该项目（本地图书馆）提供数据访问，同时解释了如何定义对象模式、模型和基础和验证。本文也简单介绍了访问模型数据的一些主流方式。
- [Express 教程——第四部分：路由和控制器](/zh-CN/docs/Learn/Server-side/Express_Nodejs/routes)
  - : 我们在本教程中会设置路由来编写一些本地图书馆所需的伪造端点（endpoints）。在接下来的文章中，路由会有一个模块结构，可用来拓展 real handler functions。最终，我们会对用 Express 创建模块化路由有很好的理解。
- [Express 教程——第五部分：在 HTML 上展示图书数据](/zh-CN/docs/Learn/Server-side/Express_Nodejs/Displaying_data)
  - : 我们现在已经准备好为展示本地图书馆图书和其他数据添加页面，包括展示每个 model 有多少记录的主页，以及 list 和 detail 页面。我们会积累从 database 获取记录以及使用模版的实战经验。
- [Express 教程——第六部分：如何使用表单](/zh-CN/docs/Learn/Server-side/Express_Nodejs/forms)
  - : 本教程我们会教你如何在 Express 使用 HTML 表单，Pug，以及从数据库中创建，更新，删除文件。
- [Express 教程——第七部分：如何部署到生产环境](/zh-CN/docs/Learn/Server-side/Express_Nodejs/deployment)
  - : 现在你已经创建了一个很棒的本地图书馆网站，你可以把本地环境迁移到公共网络服务器上，别人也可以使用网站。本章提供了如何找服务器，部署网站到生产环境的概览。

## 添加更多教程

上面列出了所有现有的教程，如果你有兴趣，可以进一步扩展教程，一些其他有趣的主题包括：

- 使用 session
- 用户认证
- 用户授权与许可
- 测试 Express web 应用
- Express web 应用的安全

当然，如果做一个评估任务会更好！
