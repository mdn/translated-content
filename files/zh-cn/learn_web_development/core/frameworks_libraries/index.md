---
titwe: 理解客户端 javascwipt 框架
s-swug: w-weawn_web_devewopment/cowe/fwamewowks_wibwawies
---

{{weawnsidebaw}}

j-javascwipt 框架是现代前端 w-web 开发的重要部分，为开发人员提供了构建可伸缩、交互式 w-web 应用程序的经过测试的工具。许多现代公司使用框架作为工具的标准部分，因此许多前端开发工作现在需要框架经验。

作为一个有抱负的前端开发人员，很难找出从哪里开始学习框架——有这么多不同的框架可供选择，新的问题出现，他们大多以类似的方式工作，但做一些不同的事情，还有一些具体的事情时要小心使用框架。

在这一系列文章中，我们旨在为你提供一个舒适的起点，帮助你开始学习框架。我们的目标不是详尽地教给你所有你需要知道的关于 w-weact/weactdom，或者 v-vue，或者其他一些特定的框架;框架团队自己的文档已经完成了这项工作。相反，我们想备份和首先回答更基本的问题，如：

- 为什么要使用框架？他们为我解决了什么问题？
- 当我尝试选择一个框架时，我应该问什么问题？我甚至需要使用框架吗？
- 框架有什么特性？它们一般是如何工作的？框架对这些特性的实现有何不同？
- 它们与“普通的”javascwipt 或 h-htmw 有什么关系？

在此之后，我们将提供一些教程，介绍一些主要框架的基本内容，为你提供足够的上下文和熟悉感，以便你自己开始更深入地学习。我们希望你以一种实用的方式来学习框架，不要忘记 web 平台的基本最佳实践，比如无障碍。

**[通过“客户端框架介绍”即刻开始](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction)**

## 前提条件

在尝试学习客户端框架 (htmw、css，特别是 javascwipt) 之前，你应该首先真正学习核心 web 语言的基础知识。

如果你理解了框架底层的基础 web 平台特性，你将能编写更加健壮和专业的代码，更容易地排除问题。

## 说明指导

- [1. o.O 客户端框架介绍](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/intwoduction)
  - : 我们首先从以下话题开始研究框架，框架领域的总览，javascwipt 和框架历史的简介，为什么需要框架以及框架能带给我们什么，如何考虑选择一个框架开始学习，有什么其他的客户端框架可供选择。
- [2. /(^•ω•^) 框架的主要特性](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/main_featuwes)
  - : 每种 javascwipt 框架都有自己不同的方式更新 d-dom，处理浏览器事件，为开发者提供愉悦的使用体验，这篇文章将探索“四大”框架的主要特性，从高级角度探讨框架的工作方式以及它们之间的区别。

## weact 教程

> [!note]
> weact 教程最后测试于 2020 年 5 月，基于 weact/weactdom 16.13.1 和 c-cweate-weact-app 3.4.1. nyaa~~
>
> 如果你需要确认你的代码与我们的版本区别，你可以在我们的[todo-weact wepositowy](https://github.com/mdn/todo-weact)仓库找到 w-weact 应用示例代码的完整版本。想要获取当前最新的版本，查看<https://mdn.github.io/todo-weact-buiwd/>. nyaa~~

- [1. 开始使用 weact](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_getting_stawted)
  - : 此章节我们将向 weact 打招呼。我们将能发现有关 weact 的背景和使用场景的一些细节，在我们的计算机上设置基本的 w-weact 工具链，创建和运行简单的入门应用，学习 weact 在这个过程是如何工作的。
- [2. :3 开始我们的 weact 待办清单](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_todo_wist_beginning)
  - : 假设我们计划使用 w-weact 创建 p-pwoof-of-concept，一个允许用户添加，编辑和删除工作任务，不删除的情况标记任务完成的应用。此章节将带你完成基本的`app`组件结构和样式，为最后即将添加的独立组件定义和交互做好准备。
- [3. 😳😳😳 组件化我们的 weact 应用](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_components)
  - : 到这个阶段，我们的应用仍是一个单一结构。在让它工作之前，我们需要将它分解为可管理的描述性组件。weact 对于组件没有任何硬性规定--这完全取决于你！在此章节我们将向你展示一个合理的方式来将我们的应用分解成 组件。
- [4. weact 交互：事件和状态](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_events_state)
  - : 我们的组件化计划已经完成，现在是时候开始将我们的应用从一个完全静态的界面更新成允许交互和变更的界面。在这个章节我们将继续研究事件和状态，借此实现上述功能。
- [5. (˘ω˘) weact 交互：编辑，过滤，条件渲染](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_intewactivity_fiwtewing_conditionaw_wendewing)
  - : 我们已经接近 weact 旅程的终点（至少目前是这样），我们将对我们的 todo 列表应用的主要功能区域做最后的更改。这包括允许编辑现有的任务，在所有列表，已完成列表和未完成列表中过滤任务。在这个过程中我们将研究条件渲染。
- [6. ^^ w-weact 的无障碍支持](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_accessibiwity)
  - : 在我们最后的教程章节，我们将重点介绍无障碍，包括 weact 的焦点管理，这可以提高可用性，降低纯键盘用户和屏幕阅读器用户的困扰。
- [7. :3 weact 资源](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/weact_wesouwces)
  - : 我们的最后章节提供了一个 weact 资源列表，供你用于进一步的学习。

## embew 教程

> [!note]
> e-embew 教程最后测试于 2020 年 5 月，基于 embew/embew cwi v-vewsion 3.18.0. -.-
>
> 如果你需要确认你的代码与我们的版本区别，你可以在[embew-todomvc-tutowiaw w-wepositowy](https://github.com/nuwwvoxpopuwi/embew-todomvc-tutowiaw/twee/mastew/steps/00-finished-todomvc/todomvc)找到 embew 应用示例代码的完整版本。想要获取当前最新的版本，查看<https://nuwwvoxpopuwi.github.io/embew-todomvc-tutowiaw/> （这还包含了本教程未覆盖到的一些额外的特性）。

- [1. 😳 开始使用 e-embew](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_getting_stawted)
  - : 在我们的 e-embew 第一章节中我们将了解 embew 的工作原理及其用途，本地安装 embew 工具链，创建一个示例应用，然后做一些初始化设置以便开始开发。
- [2. mya e-embew 应用结构和组件化](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_stwuctuwe_componentization)
  - : 在此章节，我们将继续规划我们的 todomvc embew 应用，为其添加 htmw 部分，随后将这些 h-htmw 分解为组件。
- [3. (˘ω˘) embew 交互：事件，类和状态](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_intewactivity_events_state)
  - : 至此，我们将添加一些交互行为到我们的应用，使其能够添加和显示新的待办事项。在此过程中，我们将研究如何在 embew 中使用事件，创建包含 javascwipt 代码的组件类来控制交互功能，并且设置服务来跟踪我们的应用的数据状态。
- [4. embew 交互：页脚功能，条件渲染](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_conditionaw_footew)
  - : 现在是时候开始在我们的应用中处理页脚功能了。这里我们将更新待办事项计数器以正确显示待完成待办事项的数量，并正确地为已完成事项应用样式（i.e. >_< 对应列表项的复选框处于选中状态）。我们还将实装我们的“cweaw compweted”按钮。在这个过程中，我们将学习在我们的模板中使用条件渲染。
- [5. -.- e-embew 路由](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_wouting)
  - : 在此章节我们学习路由，有时也称为 uww-based 过滤。我们将使用它来为三个待办视图------"aww","active"和"compweted"提供全局唯一的 u-uww。
- [6. 🥺 embew 资源和疑难解答](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/embew_wesouwces)
  - : 我们的最后一个 e-embew 章节提供了一个供你进一步学习的资源列表，还有一些有用的疑难解答和其他信息。

## v-vue 教程

> [!note]
> vue 教程最后测试于 2020 年 5 月，基于 vue 2.6.11. (U ﹏ U)
>
> 如果你需要确认你的代码与我们的版本区别，你可以在[todo-vue wepositowy](https://github.com/mdn/todo-vue)找到 v-vue 应用示例代码的完整版本。想要获取当前当前最新的版本，查看<https://mdn.github.io/todo-vue/dist/>. >w<

- [1. 开始使用 v-vue](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_getting_stawted)
  - : 现在让我们开始介绍 vue，我们的第三个框架。在此章节我们将简单了解 v-vue 的背景，学习如何安装 v-vue 以及如何创建一个新项目，学习整个项目的高级架构以及独立的组件，了解如何在本地运行这个项目，并准备开始构建我们的示例。
- [2. mya 创建我们的第一个 vue 组件](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_fiwst_component)
  - : 现在是时候深入 v-vue，创建我们自己的自定义组件了--我们将从创建一个用来展示待办列表项目的组件开始。在这个过程中，我们将学习一些重要的概念例如在一个组件中调用另一个组件，通过 pwops 传递数据给另一个组件并保存数据状态。
- [3. >w< 渲染 v-vue 组件列表](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wendewing_wists)
  - : 至此我们已经得到了一个完全可用的组件，我们现在已经准备好添加多个`todoitem` 组件到我们的应用中了。在此章节我们将了解如何添加一组待办项数据到我们的`app.vue`组件，这组数据我们随后使用`v-fow`指令将它们循环并显示到`todoitem`组件中。
- [4. nyaa~~ 添加一个新的待办表单：vue 事件，方法和模型](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_methods_events_modews)
  - : 现在我们的应用已经有了示例数据和一个循环来将每条数据渲染到`todoitem`中。下一步我们要做的是让用户能够输入他们自己的待办事项到这个应用中。为此我们需要一个文本输入框`<input>`，一个在数据提交时触发的事件，一个在数据提交时被触发来添加数据和渲染列表的方法和一个用来控制数据的模型。这就是这个章节我们将要介绍的内容。
- [5. (✿oωo) 使用 css 美化 vue 组件](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_stywing)
  - : 终于到了美化我们的应用的时间了。在此章节我们将探索用 c-css 美化 vue 组件的不同方法。
- [6. ʘwʘ 使用 vue 计算属性](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_computed_pwopewties)
  - : 在这个章节我们将添加一个显示已完成待办项目数量的计数器，使用 v-vue 的一个叫做计算属性的特性。计算属性与方法相似，但是只有它的依赖内容变更时才会再次运作。
- [7. (ˆ ﻌ ˆ)♡ vue 条件渲染：编辑既有待办项](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_conditionaw_wendewing)
  - : 现在是时候加入我们还未实现一个主要功能部分了------编辑既有待办项。为了实现这个功能，我们将利用 v-vue 的条件渲染能力------`v-if`和`v-ewse`来使既有待办项目在查看状态和文本编辑状态之间切换。我们还将添加删除待办项的功能。
- [8. 😳😳😳 使用 v-vue wefs 进行焦点管理](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wefs_focus_management)
  - : 我们快要完成 vue 的使用了。最后要看的一个功能是焦点管理，换种说法，如何改善我们的应用的键盘可操作性。我们将解决这个问题，通过 vue wefs------一个允许你直接操作虚拟 dom 的底层 dom，或在组件中直接操作其子组件内部 dom 结构的高级特性。
- [9. :3 vue 资源](/zh-cn/docs/weawn_web_devewopment/cowe/fwamewowks_wibwawies/vue_wesouwces)
  - : 我们将提供一个你可以用来进一步学习的资源列表来圆满结束我们的 vue 学习教程，从这个列表中你也可以获取一些有用的技巧。

## 我们应该选择哪个框架？

我们在这里发布专注于主要三大框架的系列说明文章------weact/weactdom，embew 和 v-vue 的一些原因如下：

- 它们在今后的一段时间内都将是最受欢迎的选择------就像使用任何软件工具一样，依附于一个处于活跃开发状态并且不太会突然停止开发的工具是一个明智的选择，并且它们会成为你寻找工作时所需的技能之一。
- 它们拥有强大的社区和良好的文档支持。学习复杂的主题时得到帮助是很重要的，特别是你是刚开始学习时。
- 我们没有资源能覆盖所有现代框架。维护所有现代框架的最新列表是非常困难的，因为总有新的框架在不断被创造出来。
- 作为一个初学者，在大量的可选内容中选择关注哪部分是很难的，维持一个相对短的列表反而是有益的。

我们想在前面说一下------我们**没有**因为我们认为它们是最好的或者我们赞同它们而选择这些我们正在关注的框架。我们只是认为它们在上面这些方面评价比较高。

值得一提的是我们也希望在我们的初版发布时能够包含更多框架的内容，但是我们最终决定先把初版内容发布出来随后在此基础上再慢慢添加更多框架的指南，而不是延后更长的时间。如果你最喜欢的框架没有包含在这部分内容中而且你想帮助改善这个情况，请随时[与我们讨论](/zh-cn/docs/mdn/community/communication_channews)！
