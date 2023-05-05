---
title: 跨浏览器测试
slug: Learn/Tools_and_testing/Cross_browser_testing
---

{{LearnSidebar}}

本模块的重点是在不同的浏览器上测试 web 项目。我们研究确定你的目标受众（例如，你最需要担心哪些用户、浏览器和设备），如何去做测试，不同类型的代码中会面临的主要问题以及如何缓解这些问题，哪些工具在帮助你测试和解决问题方面最有用，以及如何使用自动化来加速测试。

> **标注：**
>
> #### 想成为一名前端网页开发者？
>
> 我们整理了一个课程，其中包含实现目标所需的所有基本内容。
>
> [**开始使用**](/zh-CN/docs/Learn/Front-end_web_developer)

## 先决条件

在你尝试使用这里详细介绍的工具时，你需要已经学习核心 [HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 语言。

## 指南

- [跨浏览器测试简介](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : 本文通过提供跨浏览器测试主题的概述，回答诸如“什么是跨浏览器测试？”、“将遇到的最常见类型的问题是什么？”和“什么是测试，识别和解决问题的主要方法？”等问题。
- [测试策略](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : 接下来，我们深入了解测试，寻找目标受众（例如：你需要确定测试的浏览器，设备和其他部分），低成本测试策略（必要时对各种设备和一些虚拟机进行 adhoc 测试），更高科技策略（自动化，使用专用测试 app）和用户组测试。
- [处理常见的 HTML 和 CSS 问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : 现在，我们着重考虑你在 HTML 和 CSS 代码中可能遇到的一些常见的跨浏览器问题，以及哪些工具可以用来防止问题发生和解决问题。这包括代码检查，处理 CSS 前缀，使用浏览器开发工具找出问题，使用 polyfill 添加浏览器支持，解决响应式问题等。
- [处理常见的 JavaScript 问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : 现在我们来看看常见的跨浏览器 JavaScript 问题，以及怎么解决它们。这会包括使用浏览器开发工具跟踪和解决问题的信息，使用 polyfill 和库来解决问题，让现代的 JavaScript 特性在老浏览器中工作等等。
- [处理常见的无障碍问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : 然后，我们把注意力转向无障碍上，提供常见问题的信息，怎么做简单的测试，和怎么使用审计/自动化工具找到无障碍问题。
- [实现特性检查](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : 特性检查包括确定浏览器是否支持确定的代码块，据此运行不同的代码，让浏览器能一直正常工作，而不是在一些浏览器上崩溃/报错。本文详细介绍了如何编写简单的特性检查代码，怎么使用库来加速实现，利用一些像 `@supports` 的原生特性来进行特性检查。
- [自动测试简介](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : 每天多次在几个浏览器和设备上手动运行可能会枯燥，浪费时间。有效处理这个问题，你需要熟悉自动化工具。在本文中，我们介绍可用的方法，怎么使用任务运行程序，以及学习如何使用商业浏览器自动化测试工具（如 Sauce Labs 和 Browser Stack）。
- [建立你自己的自动化测试环境](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : 在本文中，我们会教你怎么安装你自己的自动化环境，并使用 Selenium / WebDriver 和测试库（如 selenium-webdriver for Node）运行自己的测试。我们还将介绍如何将本地测试环境与商业应用程序集成在一起，正如上一篇文章所讨论的。
