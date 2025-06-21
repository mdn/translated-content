---
title: Web 表单构建块
slug: Learn_web_development/Extensions/Forms
l10n:
  sourceCommit: b76266228bd0900aa1256902c7858971156a58c9
---

本模块提供的系列文章意在帮助你掌握 Web 表单的基本知识。Web 表单是用于和用户交互的强大工具——其常用于收集用户数据和控制用户界面。然而，出于历史和技术原因，如何发挥 Web 表单的全部潜力并不总是显而易见的。在下面的文章中，你会学习 Web 表单的全部基本内容，包括：标记表单的 HTML 结构、为表单控件添加样式、验证表单数据，以及向服务器提交数据。

## 前提

在开始本模块之前，你应该至少学习过 [HTML 简介](/zh-CN/docs/Learn_web_development/Core/Structuring_content)。此时此刻，你应该会发现[入门指南](#入门指南)很容易理解，并且也能够使用[基本的原生表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)指南。

然而，掌握表单需要的不仅仅是 HTML 知识——你还需要学习一些为表单控件添加样式的特定技术，一些用于处理诸如验证和创建自定义表单控件等内容的脚本知识。因此，在学习下列其他文章之前，我们会建议你先离开去学习一些 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics) 和 [JavaScript](/zh-CN/docs/Learn_web_development/Core/Scripting)。

以上内容很好地表明了我们为什么将 Web 表单放在单独模块中，而不是将其混入 HTML、CSS 和 JavaScript 主题中——表单元素比大多数其他的 HTML 元素要复杂，并且它们还需要与相关的 CSS 和 JavaScript 技术紧密配合才能充分利用。

> [!NOTE]
> 如果你工作的计算机/掌上电脑/其他设备无法创建文件，可以使用在线编码程序（例如，[JSBin](https://jsbin.com/) 或者 [Glitch](https://glitch.com/)）实验（大多数）代码示例。

## 入门指南

- [你的第一个表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Your_first_form)
  - : 本系列的第一篇文章让你拥有第一次创建 Web 表单的体验，包括，设计一个简单表单、使用正确的 HTML 元素实现表单、通过 CSS 添加一些非常简单的样式，以及向服务器发送数据。
- [如何构造 Web 表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_structure_a_web_form)
  - : 已经有了基础知识，现在深入学习为表单的不同部分提供结构和含义的元素。

## 不同的表单控件

- [基本的原生表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Basic_native_form_controls)
  - : 从详细学习原始 HTML {{htmlelement("input")}} 类型的功能开始，同时学习在收集不同类型的数据时，还有哪些可用的选择。
- [HTML5 input 类型](/zh-CN/docs/Learn_web_development/Extensions/Forms/HTML5_input_types)
  - : 继续深入学习 `<input>` 元素，了解 HTML5 发布时提供的其他 input 类型，以及这些类型提供的各种 UI 控件和数据收集增强功能。此外，还会学习 {{htmlelement('output')}} 元素。
- [其他表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/Other_form_controls)
  - : 接下来学习所有非 `<input>` 表单控件，以及相关的工具，例如：{{htmlelement('select')}}、{{htmlelement('textarea')}}、{{htmlelement('meter')}} 和 {{htmlelement('progress')}}。

## 表单样式指南

- [为 Web 表单添加样式](/zh-CN/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
  - : 这篇文章介绍如何使用 CSS 为表单添加样式，包括完成基本样式任务所需了解的全部基础知识。
- [高级表单样式](/zh-CN/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : 在这里学习一些更高级的表单样式技术，用于处理一些很难设置样式的表单元素。
- [UI 伪类](/zh-CN/docs/Learn_web_development/Extensions/Forms/UI_pseudo-classes)
  - : 一篇 UI 伪类的介绍——根据表单的当前状态定位到 HTML 表单控件。

## 验证和提交表单数据

- [客户端表单验证](/zh-CN/docs/Learn_web_development/Extensions/Forms/Form_validation)
  - : 仅仅发送数据还不够——还需要确保用户填写的表单数据的格式是正确的，以便后续能正确处理，也要确保数据不会破坏应用程序。我们也想帮助用户正确填写表单，让用户在使用应用程序时不会感到困扰。表单验证帮助我们实现这些目标——这篇文章讲解你需要了解的内容。
- [发送表单数据](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
  - : 这篇文章讨论的是当用户提交表单时，会发生什么——表单数据的去向，以及当表单数据到达之后如何处理？还研究一些与发送表单数据有关联的安全问题。

## 高级文章

以下文章对于学习路径来说没那么重要，但是当你掌握了上述技术并想了解更多内容时，它们会变得有趣且实用。

- [如何构建自定义表单控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/How_to_build_custom_form_controls)
  - : 在某些情况下，出于样式或功能的原因，原生表单微件无法提供你所需的东西。在这种情况下，你会需要使用原生 HTML 构建表单微件。这篇文章通过一个案例研究说明你将如何做到这一点，以及在实际操作时需要注意的事项。
- [通过 JavaScript 发送表单](/zh-CN/docs/Learn_web_development/Extensions/Forms/Sending_forms_through_JavaScript)
  - : 这篇文章将讨论如何使用表单来构建 HTTP 请求，并通过自定义的 JavaScript 而不是标准的表单提交发送请求。这篇文章还说明为什么要这么做，以及这样做的意图。（参见[使用 FormData 对象](/zh-CN/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)。）
- [表单控件的 CSS 属性兼容性表](/zh-CN/docs/Learn_web_development/Extensions/Forms)
  - : 最后一篇文章提供的参考意在方便查找 CSS 属性与表单元素的兼容性关系。

## 参见

- [HTML 表单元素参考](/zh-CN/docs/Web/HTML/Reference/Elements#表单)
- [HTML \<input> 类型参考](/zh-CN/docs/Web/HTML/Reference/Elements/input)
- [HTML 属性参考](/zh-CN/docs/Web/HTML/Reference/Attributes)
- [用户输入方式和控件](/zh-CN/docs/Learn_web_development/Extensions/Forms/User_input_methods)
