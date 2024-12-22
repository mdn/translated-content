---
title: Vue 资源
slug: Learn_web_development/Core/Frameworks_libraries/Vue_resources
original_slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources
---

{{LearnSidebar}}{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}

现在，我们将为我们的 Vue 学习画上句号，这里将给你一个资源清单，你可以用它来进一步学习，还有一些其他有用的提示。

<table>
  <tbody>
    <tr>
      <th scope="row">预备条件：</th>
      <td>
        <p>
          熟悉核心 <a href="/zh-CN/docs/Learn_web_development/Core/Structuring_content">HTML</a>、<a href="/zh-CN/docs/Learn_web_development/Core/Styling_basics">CSS</a> 和 <a href="/zh-CN/docs/Learn_web_development/Core/Scripting">JavaScript</a>
          语言，了解<a
            href="/zh-CN/docs/Learn_web_development/Getting_started/Environment_setup/Command_line"
            >终端/命令行</a
          >知识。
        </p>
        <p>
           Vue 组件是由管理应用程序数据的 JavaScript 对象和映射到基础 DOM 结构的基于 HTML 的模板语法组成的。为了进行安装并使用 Vue 的一些更高级的功能（例如“单文件组件（SFC）”或渲染功能），你将需要一个装有 node + npm 的终端。
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">目标：</th>
      <td>
        要了解去哪里寻找关于 Vue 的进一步信息，以继续学习。
      </td>
    </tr>
  </tbody>
</table>

## 更多资源

这里可以学到更多 Vue 知识：

- [Vue 文档](https://cn.vuejs.org/)——Vue 网站主页，包含全面的文档，包括示例、指导手册和参考资料。这是开始深入学习 Vue 的最好地方。
- [Vue Github 仓库](https://github.com/vuejs/vue)——Vue 源码仓库。在这里你可以报告问题和/或直接对 Vue 代码库做出贡献。研究 Vue 的源代码可以帮助你更好地理解该框架的工作原理，并写出更好的代码。
- [Vue 论坛](https://forum.vuejs.org/)——获取帮助的 Vue 官方论坛。
- [Vue CLI 文档](https://cli.vuejs.org/)——Vue CLI 文档。这包含了关于定制和扩展你通过 CLI 生成的输出的信息。
- [NuxtJS](https://nuxtjs.org/)——NuxtJS 是服务器端 Vue 框架，它的一些架构意见对创建可维护的应用程序很有用，即使你不使用它提供的任何服务器端渲染功能。这个网站提供了关于使用 NuxtJS 的详细文档。
- [Vue Mastery](https://www.vuemastery.com/courses/)——一个 Vue 付费学习平台，也包含一些免费课程。
- [Vue School](https://vueschool.io/)——也是一个 Vue 付费学习平台。

## 构建并发布你的 Vue app

Vue CLI 还为我们提供了准备向网络发布应用程序的工具。你可以像这样做：

- 如果你的本地服务仍然正在运行，在控制台按下 <kbd>Ctrl</kbd> \+ <kbd>C</kbd> 停止它。

- 之后，在控制台运行 `npm run build`（或者 `yarn build`）。

这将创建一个新的 `dist` 目录，包含所有准备好的生产文件。要把你的网站发布到网上，请把这个文件夹的内容复制到你的主机环境中。

> [!NOTE]
> Vue CLI 文档也包含一个[专门的指导手册](https://cli.vuejs.org/guide/deployment.html#platform-guides)，可以帮助你将应用发布到很多常见的托管平台。

## Vue 2

Vue 2 的支持将于 2023 年 12 月 31 日结束，所有 CLI 工具的默认 Vue 版本为 3 及以上版本。[组合式 API](https://cn.vuejs.org/guide/extras/composition-api-faq.html)作为基于属性的 API 的替代，`setup()` 函数将作用于组件上。只有你从这个函数返回的东西在你的 `<template>` 中可用。在使用这个 API 时，你需要对“响应式”的属性进行明确说明。Vue 使用[选项式 API](https://cn.vuejs.org/guide/extras/composition-api-faq.html#trade-offs)为你处理这个问题。这使得新的 API 通常被认为是一个更高级的用例。

如果要从 Vue 2 升级，建议看一下 [Vue 3 迁移指南](https://v3-migration.vuejs.org/zh/)。

{{PreviousMenu("Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management", "Learn_web_development/Core/Frameworks_libraries")}}
