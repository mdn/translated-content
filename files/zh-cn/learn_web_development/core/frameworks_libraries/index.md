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

## 其他框架选择

### Ember 教程

> [!NOTE]
> Ember 教程最后测试于 2020 年 5 月，基于 Ember/Ember CLI version 3.18.0。
>
> 如果需要确认你的代码与我们的版本的区别，你可以在 [ember-todomvc-tutorial 仓库](https://github.com/NullVoxPopuli/ember-todomvc-tutorial/tree/master/steps/00-finished-todomvc/todomvc)找到示例 Ember 应用的完整代码。想要查看实时运行的版本，可访问 <https://nullvoxpopuli.github.io/ember-todomvc-tutorial/>（该示例包含本教程未覆盖到的一些额外的特性）。

- [开始使用 Ember](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Ember_getting_started)
  - : 首先我们将了解 Ember 的原理及用途，在本地安装 Ember 工具链，创建示例应用，进行初始配置，做好开发前的准备。
- [Ember 应用结构和组件化](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Ember_structure_componentization)
  - : 在此章节，我们将着手规划 Ember 应用的结构，为其添加 HTML，并将其拆分成易于维护的组件。
- [Ember 交互：事件、类和状态](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Ember_interactivity_events_state)
  - : 现在，我们将向应用添加一些交互功能，使其能够添加和显示新的待办事项。在此过程中，我们将研究如何在 Ember 中使用事件，创建包含了用于控制交互功能的 JavaScript 的组件类，并设置服务来跟踪应用的数据状态。
- [Ember 交互：页脚功能和条件渲染](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Ember_conditional_footer)
  - : 本章中我们将完善页脚的功能，更新待办事项计数器以显示未完成事项数，并将样式正确地应用到已完成事项上（即对应复选框被选中的项）。我们还将实装“清除已完成事项”按钮，并学习如何在模板中使用条件渲染。
- [Ember 路由](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Ember_routing)
  - : 在此章节我们将学习 Ember 路由，有时也称为基于 URL 的过滤。我们将使用它来为三个待办应用中的视图——“全部”“进行中”“已完成”，提供各自全局唯一的 URL。
- [Ember 资源和疑难解答](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Ember_resources)
  - : 在最后一章，我们给你提供了一系列 Ember 学习资源，助你更进一步的探索。此外还有一些有用的排障指南和其他事项。

### Vue 教程

> [!NOTE]
> Vue 教程最后测试于 2023 年 1 月，基于 Vue 3.2.45。
>
> 如果需要确认你的代码与我们的版本的区别，你可以在我们的 [todo-vue 仓库](https://github.com/mdn/todo-vue)找到示例 Vue 应用的完整代码。想要查看实时运行的版本，可访问 <https://mdn.github.io/todo-vue/>。

- [开始使用 Vue](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started)
  - : 现在我们要介绍第三个框架——Vue。在此章节我们将简单了解 Vue 的背景，学习如何安装 Vue 并创建新项目，学习项目的整体的架构以及独立的组件，了解如何本地运行项目，并为示例应用的开发做好准备。
- [创建第一个 Vue 组件](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_first_component)
  - : 现在我们将深入 Vue，创建自己的组件——我们将从创建用来展示待办事项列表中单个项目的组件开始。在这个过程中，我们将学习在组件中调用其它组件、使用 `props` 传递数据给其它组件、保存数据状态等重要概念。
- [Vue 组件的列表渲染](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_rendering_lists)
  - : 组件至此已经完全可用，我们可开始添加多个 `ToDoItem` 组件到应用中了。在此章节我们将了解如何添加一组待办项数据到 `App.vue` 组件，并使用 `v-for` 指令将这组数据循环渲染到 `ToDoItem` 组件中。
- [新增待办表：Vue 事件、方法和双向绑定](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_methods_events_models)
  - : 现在我们的应用已经有了示例数据，和能将每条数据渲染到 `ToDoItem` 组件的循环。下一步我们要让用户能自己在应用中输入待办事项。为此，本章我们需要设置一个输入文本的 `<input>`，提交数据时触发的事件，用于接收数据、添加数据、渲染列表的方法和用于控制数据的双向绑定模型。
- [使用 CSS 美化 Vue 组件](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_styling)
  - : 该装饰装饰我们的应用了！在此章节我们将探索用 CSS 美化 Vue 组件的不同方法。
- [使用 Vue 计算属性](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_computed_properties)
  - : 本章节我们将利用 Vue 的计算属性，添加一个显示“已完成”事项数量的计数器。计算属性与方法相似，但它只在它的依赖内容变更时才会再次计算。
- [Vue 条件渲染：编辑既有待办项](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_conditional_rendering)
  - : 现在来开发一个仍未实现的主要功能吧——编辑既有待办项。为实现该功能，我们将利用 `v-if` 和 `v-else` 这两个条件渲染指令，让我们能在查看和编辑视图间切换。此外，我们还将添加删除待办项的功能。
- [使用 Vue ref 进行焦点管理](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_refs_focus_management)
  - : 对 Vue 的初步学习即将完成，我们最后要看看的功能是焦点管理，即怎么让键盘用户使用起来更方便。我们将利用使用 Vue 的 ref 完成该需求——这个高级功能让你既能直接操作虚拟 DOM 下的 DOM 节点，也可在组件中直接操作其子组件内部的 DOM 结构。
- [Vue 资源](/zh-CN/docs/Learn_web_development/Core/Frameworks_libraries/Vue_resources)
  - : 在最后一章，我们给你提供了一系列 Vue 学习资源，助你更进一步的探索。

## 我应该选择哪个框架？

我们选取了 React/ReactDOM、Ember 和 Vue 这三个框架进行教学，原因如下：

- 它们在今后一段时间内将仍是主流选择。类似于别的工具型软件，选一个仍在活跃开发并且不太可能随时停更、还会为你的求职增加竞争力的框架，显然更加稳妥。
- 它们拥有强大的社区和完善的文档。学习复杂的内容时，从外界得到帮助至关重要，尤其对于初学者而言。
- 我们无法涵盖*所有*框架。如前文所说，新的框架层出不穷，及时更新这些框架列表的难度过大。
- 身为初学者，在巨量的选项中难以做出选择是个真实的痛点，因此把列表做短点儿反而是有益的。

另外我们想说，我们选择这些框架，**并非**因为我们主观觉得它们最好或想要无端吹捧，也不是因为我们以任何方式推荐它们。我们只是认为它们十分契合这些标准。
