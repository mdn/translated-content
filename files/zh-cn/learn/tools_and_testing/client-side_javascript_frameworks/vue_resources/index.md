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

## In this module

- [客户端框架介绍](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
- [Framework main features](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Main_features)
- React

  - [开始使用 React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
  - [开始我们的 React todo list](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_todo_list_beginning)
  - [组件化我们的 React app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components)
  - [React interactivity: Events and state](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_events_state)
  - [React interactivity: Editing, filtering, conditional rendering](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_interactivity_filtering_conditional_rendering)
  - [Accessibility in React](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_accessibility)
  - [React 资源](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_resources)

- Ember

  - [开始使用 Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_getting_started)
  - [Ember app structure and componentization](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_structure_componentization)
  - [Ember interactivity: Events, classes and state](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_interactivity_events_state)
  - [Ember Interactivity: Footer functionality, conditional rendering](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_conditional_footer)
  - [Routing in Ember](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_routing)
  - [Ember resources and troubleshooting](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Ember_resources)

- Vue

  - [开始使用 Vue](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
  - [构建我们的第一个 Vue 组件](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_first_component)
  - [Rendering a list of Vue components](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_rendering_lists)
  - [Adding a new todo form: Vue events, methods, and models](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_methods_events_models)
  - [使用 CSS 装饰 Vue 组件](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_styling)
  - [使用 Vue 计算属性](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_computed_properties)
  - [Vue conditional rendering: editing existing todos](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_conditional_rendering)
  - [Focus management with Vue refs](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_refs_focus_management)
  - [Vue 资源](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_resources)

- Svelte

  - [开始使用 Svelte](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_getting_started)
  - [Starting our Svelte Todo list app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_Todo_list_beginning)
  - [Dynamic behavior in Svelte: working with variables and props](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_variables_props)
  - [Componentizing our Svelte app](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_components)
  - [Advanced Svelte: Reactivity, lifecycle, accessibility](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_reactivity_lifecycle_accessibility)
  - [Working with Svelte stores](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_stores)
  - [Svelte 中的 TypeScript 支持](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript)
  - [Deployment and next steps](/zh-CN/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_deployment_next)
