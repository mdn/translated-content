---
title: Vue resources
slug: Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}

Now we'll round off our study of Vue by giving you a list of resources that you can use to go further in your learning, plus some other useful tips.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Prerequisites:</th>
      <td>
        <p>
          Familiarity with the core <a href="/zh-CN/docs/Learn/HTML">HTML</a>,
          <a href="/zh-CN/docs/Learn/CSS">CSS</a>, and
          <a href="/zh-CN/docs/Learn/JavaScript">JavaScript</a> languages,
          knowledge of the
          <a
            href="/zh-CN/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line"
            >terminal/command line</a
          >.
        </p>
        <p>
          Vue components are written as a combination of JavaScript objects that
          manage the app's data and an HTML-based template syntax that maps to
          the underlying DOM structure. For installation, and to use some of the
          more advanced features of Vue (like Single File Components or render
          functions), you'll need a terminal with node + npm installed.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objective:</th>
      <td>
        To learn where to go to find further information on Vue, to continue
        your learning.
      </td>
    </tr>
  </tbody>
</table>

## Further resources

这里可以学到更多 Vue 知识：

- [Vue Docs](https://vuejs.org/) — The main Vue site. Contains comprehensive documentation, including examples, cookbooks, and reference material. This is the best place to start learning Vue in depth.
- [Vue Github Repo](https://github.com/vuejs/vue) — The Vue code itself. This is where you can report issues and/or contribute directly to the Vue codebase. Studying the Vue source code can help you better understand how the framework works, and write better code.
- [Vue Forum](https://forum.vuejs.org/) — 获取帮助的 Vue 官方论坛。
- [Vue CLI Docs](https://cli.vuejs.org/) — Documentation for the Vue CLI. This contains information on customizing and extending the output you are generating via the CLI.
- [NuxtJS](https://nuxtjs.org/) — NuxtJS is a Server-Side Vue Framework, with some architectural opinions that can be useful to creating maintainable applications, even if you don’t use any of the Server Side Rendering features it provides. This site provides detailed documentation on using NuxtJS.
- [Vue Mastery](https://www.vuemastery.com/courses/) — 一个 Vue 学习平台，也包含一些免费课程。
- [Vue School](https://vueschool.io/) — 有一个 Vue 付费学习平台。

## 构建并发布你的 Vue app

Vue CLI 也提供给我们的 app 准备发布到网络上的工具 .你可以这样做：

- 如果你的本地服务仍然正在运行，在控制台按下 <kbd>Ctrl</kbd>+<kbd>C</kbd> 停止它。

- 之后，在控制台运行 `npm run build` (或者 `yarn build`) .

这将创建一个新的`dist` 文件夹来包含你的准备生产的所有文件内容 .为了发布你的网站到网上 , 复制这个文件夹的所有内容到你的主机环境。

> **备注：** The Vue CLI 文档也包含一个[特别的指导来发布你的 app](https://cli.vuejs.org/guide/deployment.html#platform-guides) 到许多的公共主机平台 .

## Vue 3

Vue 3 is a major release of the framework with a lot of major changes. It went into active beta in April, 2020. The biggest change is a new Composition API that works as an alternative to the current property-based API. In this new API, a single `setup()` function is used on the component. Only what you return from this function is available in your `<template>`s. You are required to be explicit about "reactive" properties when using this API. Vue handles this for you using the Options API. This makes the new API typically considered a more advanced use case.

There are also a handful of other changes, including a change in how Apps are initialized in Vue. To read more about the changes involved with Vue 3, refer to [this article by Vue School which goes over most of the major changes in Vue 3](https://vueschool.io/articles/vuejs-tutorials/exciting-new-features-in-vue-3/).

{{PreviousMenuNext("Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering","Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started", "Learn/Tools_and_testing/Client-side_JavaScript_frameworks")}}
