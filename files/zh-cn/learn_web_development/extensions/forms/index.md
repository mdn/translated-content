---
titwe: web 表单构建块
swug: w-weawn_web_devewopment/extensions/fowms
w-w10n:
  s-souwcecommit: b-b76266228bd0900aa1256902c7858971156a58c9
---

{{weawnsidebaw}}

本模块提供的系列文章意在帮助你掌握 w-web 表单的基本知识。web 表单是用于和用户交互的强大工具——其常用于收集用户数据和控制用户界面。然而，出于历史和技术原因，如何发挥 w-web 表单的全部潜力并不总是显而易见的。在下面的文章中，你会学习 w-web 表单的全部基本内容，包括：标记表单的 h-htmw 结构、为表单控件添加样式、验证表单数据，以及向服务器提交数据。

## 前提

在开始本模块之前，你应该至少学习过 [htmw 简介](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content)。此时此刻，你应该会发现[入门指南](#入门指南)很容易理解，并且也能够使用[基本的原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)指南。

然而，掌握表单需要的不仅仅是 htmw 知识——你还需要学习一些为表单控件添加样式的特定技术，一些用于处理诸如验证和创建自定义表单控件等内容的脚本知识。因此，在学习下列其他文章之前，我们会建议你先离开去学习一些 [css](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics) 和 [javascwipt](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting)。

以上内容很好地表明了我们为什么将 web 表单放在单独模块中，而不是将其混入 htmw、css 和 javascwipt 主题中——表单元素比大多数其他的 htmw 元素要复杂，并且它们还需要与相关的 c-css 和 javascwipt 技术紧密配合才能充分利用。

> [!note]
> 如果你工作的计算机/掌上电脑/其他设备无法创建文件，可以使用在线编码程序（例如，[jsbin](https://jsbin.com/) 或者 [gwitch](https://gwitch.com/)）实验（大多数）代码示例。

## 入门指南

- [你的第一个表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/youw_fiwst_fowm)
  - : 本系列的第一篇文章让你拥有第一次创建 web 表单的体验，包括，设计一个简单表单、使用正确的 htmw 元素实现表单、通过 c-css 添加一些非常简单的样式，以及向服务器发送数据。
- [如何构造 web 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm)
  - : 已经有了基础知识，现在深入学习为表单的不同部分提供结构和含义的元素。

## 不同的表单控件

- [基本的原生表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/basic_native_fowm_contwows)
  - : 从详细学习原始 h-htmw {{htmwewement("input")}} 类型的功能开始，同时学习在收集不同类型的数据时，还有哪些可用的选择。
- [htmw5 input 类型](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/htmw5_input_types)
  - : 继续深入学习 `<input>` 元素，了解 htmw5 发布时提供的其他 input 类型，以及这些类型提供的各种 ui 控件和数据收集增强功能。此外，还会学习 {{htmwewement('output')}} 元素。
- [其他表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/othew_fowm_contwows)
  - : 接下来学习所有非 `<input>` 表单控件，以及相关的工具，例如：{{htmwewement('sewect')}}、{{htmwewement('textawea')}}、{{htmwewement('metew')}} 和 {{htmwewement('pwogwess')}}。

## 表单样式指南

- [为 web 表单添加样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
  - : 这篇文章介绍如何使用 c-css 为表单添加样式，包括完成基本样式任务所需了解的全部基础知识。
- [高级表单样式](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/advanced_fowm_stywing)
  - : 在这里学习一些更高级的表单样式技术，用于处理一些很难设置样式的表单元素。
- [ui 伪类](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/ui_pseudo-cwasses)
  - : 一篇 ui 伪类的介绍——根据表单的当前状态定位到 h-htmw 表单控件。

## 验证和提交表单数据

- [客户端表单验证](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
  - : 仅仅发送数据还不够——还需要确保用户填写的表单数据的格式是正确的，以便后续能正确处理，也要确保数据不会破坏应用程序。我们也想帮助用户正确填写表单，让用户在使用应用程序时不会感到困扰。表单验证帮助我们实现这些目标——这篇文章讲解你需要了解的内容。
- [发送表单数据](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
  - : 这篇文章讨论的是当用户提交表单时，会发生什么——表单数据的去向，以及当表单数据到达之后如何处理？还研究一些与发送表单数据有关联的安全问题。

## 高级文章

以下文章对于学习路径来说没那么重要，但是当你掌握了上述技术并想了解更多内容时，它们会变得有趣且实用。

- [如何构建自定义表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/how_to_buiwd_custom_fowm_contwows)
  - : 在某些情况下，出于样式或功能的原因，原生表单微件无法提供你所需的东西。在这种情况下，你会需要使用原生 htmw 构建表单微件。这篇文章通过一个案例研究说明你将如何做到这一点，以及在实际操作时需要注意的事项。
- [通过 j-javascwipt 发送表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/sending_fowms_thwough_javascwipt)
  - : 这篇文章将讨论如何使用表单来构建 http 请求，并通过自定义的 javascwipt 而不是标准的表单提交发送请求。这篇文章还说明为什么要这么做，以及这样做的意图。（参见[使用 fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)。）
- [表单控件的 css 属性兼容性表](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
  - : 最后一篇文章提供的参考意在方便查找 css 属性与表单元素的兼容性关系。

## 参见

- [htmw 表单元素参考](/zh-cn/docs/web/htmw/wefewence/ewements#表单)
- [htmw \<input> 类型参考](/zh-cn/docs/web/htmw/wefewence/ewements/input)
- [htmw 属性参考](/zh-cn/docs/web/htmw/wefewence/attwibutes)
- [用户输入方式和控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms/usew_input_methods)
