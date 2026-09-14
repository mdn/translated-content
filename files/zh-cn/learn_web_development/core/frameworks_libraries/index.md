---
title: JavaScript 客户端和函数库
slug: Learn_web_development/Core/Frameworks_libraries
---

JavaScript 框架是现代前端 web 开发的重要部分，开发者可以借助这个经过实践检验的工具，构建可扩展、可交互的 web 应用。如今的许多公司将框架作为其开发工具的一部分，多数前端开发职位也因此需要框架使用经验。在本系列文章中，我们旨在为你提供一个舒适的起点，帮助你开始学习框架。

作为一个有抱负的前端开发者，学习框架可能难以下手——可供选择的框架太多，新的框架还层出不穷，它们大多效果类似但一些工作的机制有所差异。同时，使用框架时还应注意一些特定事项。

本系列文章中，我们旨在以一个轻松的开始，助你学习框架。我们并非意在详尽地教授你关于 React/ReactDOM，或者 Vue，或者其他一些特定框架的所有知识；框架团队自己的文档已经完成了这项工作。相反，我们想退一步，首先回答更基本的问题，如：

- 为什么要使用框架？他们能为我解决什么问题？
- 选择框架时，我应该考虑什么问题？甚至说，我需要使用框架吗？
- 框架有什么特性？它们一般是如何工作的？框架对这些特性的实现有何不同？
- 它们与原生 JavaScript 或 HTML 有什么关系？

此后，我们将通过一些涵盖 React（一款热门框架）基本知识的教程，为你提供充分的背景知识和熟悉度，以便你能够更深入地学习。我们希望你以务实的态度学习框架，同时不要忘记如无障碍等 web 平台的基本最佳实践。

我们还提供了一些教程，涵盖了其他框架选项的基础内容，供那些希望选择除 React 之外框架的用户参考。

## 前提

学习客户端框架之前，首先你应扎实掌握核心 web 语言的基础知识——[HTML](/zh-CN/docs/Learn_web_development/Core/Structuring_content)、[CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics)，尤其是 [JavaScript](/zh-CN/docs/Learn_web_development/Core/Scripting)。

如果你能理解框架底层所采用的基础 web 平台的特性，你的代码将更专业且富有深度，在遇到问题时也能更有信心地进行排查。

## 入门指导

- [客户端框架介绍](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Introduction)
  - : 我们的学习从对框架的总览开始：JavaScript 与框架的历史、框架为啥被需要、框架能带来什么、怎样着手选择一个框架开始学习，以及框架之外有何替代方案。
- [框架的主要特性](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Main_features)
  - : 每种主流 JavaScript 框架都在更新 DOM、处理浏览器事件和提供良好开发体验上采用了不同的方法，这篇文章将探索“三大框架”的主要特性，解析框架怎样完成高层级工作，以及它们有何区别。

## React 教程

> [!NOTE]
> React 教程最后测试于 2023 年 1 月，基于 React/ReactDOM 18.2.0 和 create-react-app 5.0.1。
>
> 如果需要确认你的代码与我们的版本的区别，你可以在我们的 [todo-react 仓库](https://github.com/mdn/todo-react)找到示例 React 应用的完整代码。想要查看实时运行的版本，可访问 <https://mdn.github.io/todo-react/>。

- [开始使用 React](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started)
  - : 此章节我们将向 React 打招呼。我们将简要探索其相关背景和使用场景的一些细节，在自己的计算机上设置基本的 React 工具链，并通过创建和运行简单入门的应用，学习 React 在此过程中的工作原理。
- [开始我们的 React 待办清单](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_todo_list_beginning)
  - : 假设我们计划创建一个验证 React 概念的应用（proof-of-concept），用户能够添加、编辑和删除工作任务，能将任务标记为“已完成”还不删除它。此章节将带你完成基本的 `App` 组件结构和样式，为后续单个组件的定义和交互做好准备。
- [组件化 React 应用](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_components)
  - : 此刻，我们的应用还是一个整体。在干些别的之前，我们需要将它拆分成易于管理的专门性组件。React 对于组件没有任何硬性规定——这完全取决于你！在此章节，我们将展示一个将应用合理地拆分成组件的方法。
- [React 交互：事件和状态](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_events_state)
  - : 在制定好组件计划之后，现在是时候将我们的应用从一个完全静态的界面，升级为一个真正可以交互和修改内容的应用了。本文将带你实现这一过程，并深入探讨事件和状态的相关内容。
- [React 交互：编辑、过滤和条件渲染](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_interactivity_filtering_conditional_rendering)
  - : 接近 React 学习旅程的尾声（至少目前是这样），我们将向代办清单应用的主要功能区添加最后的更改——编辑已有任务，按“全部/已完成/未完成”过滤列表中的任务，同时研究条件渲染。
- [React 中的无障碍](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_accessibility)
  - : 在最后的教程章节，我们将重点介绍无障碍，其中的焦点管理既能提高应用的可用性，又能减少纯键盘用户和屏幕阅读器用户的困扰。
- [React 资源](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/React_resources)
  - : 在最后一章，我们给你提供了一系列 React 学习资源，助你更进一步的探索。

## 我应该选择哪个框架？

我们选取了 React/ReactDOM、Ember 和 Vue 这三个框架进行教学，原因如下：

- 它们在今后一段时间内将仍是主流选择。类似于别的工具型软件，选一个仍在活跃开发并且不太可能随时停更、还会为你的求职增加竞争力的框架，显然更加稳妥。
- 它们拥有强大的社区和完善的文档。学习复杂的内容时，从外界得到帮助至关重要，尤其对于初学者而言。
- 我们无法涵盖*所有*框架。如前文所说，新的框架层出不穷，及时更新这些框架列表的难度过大。
- 身为初学者，在巨量的选项中难以做出选择是个真实的痛点，因此把列表做短点儿反而是有益的。

另外我们想说，我们选择这些框架，**并非**因为我们主观觉得它们最好或想要无端吹捧，也不是因为我们以任何方式推荐它们。我们只是认为它们十分契合这些标准。
