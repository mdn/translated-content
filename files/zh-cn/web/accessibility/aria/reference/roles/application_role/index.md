---
title: ARIA：application 角色
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

`application` 角色向辅助技术表明，某个元素*及其所有子元素*应当被视作类似于桌面应用程序，而不应使用传统的 HTML 解析技术。此角色应当只用于定义非常动态的、类桌面风格的 Web 应用程序。大多数移动端和桌面端 Web 应用*并不*属于此处所指的应用程序。

```html
<div role="application" aria-label="…">…</div>
```

通过指定 `application` 角色，表明这个 `div` 元素及其所有后代元素都将被视作桌面应用程序的一部分。

## 描述

`application` [文档结构角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles#1._文档结构角色)向辅助技术表明，Web 内容的这一部分所包含的元素不符合任何其他已知的 HTML 元素或 WAI-ARIA 微件。对 HTML 结构和微件的任何特殊解析都应当被搁置，鼠标、键盘或触摸交互的控制权应当完全移交给浏览器和 Web 应用程序来处理。

在这种模式下，Web 作者要完全负责处理所有键盘输入、焦点管理以及其他交互，并且不能指望辅助技术会在它们那一端做任何处理。

如果 application 角色所涵盖的 Web 应用程序中包含*应当*被视作普通 Web 内容的部分，则应当使用 [`document`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) 或 [`article`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) 角色来包裹这类内容。

### 背景

出于历史原因，尤其是在 Windows 上，屏幕阅读器和一些其他辅助技术（AT）传统上会在 Web 内容加载完成后，一次性地从浏览器抓取整个 Web 内容。这些辅助技术会构建自己的内容表示形式，使视障用户能以最适合的方式消费这些内容。这通常被称为*虚拟文档*（virtual document）、_浏览模式_（browse mode）或类似术语。文档会被精简为单栏视图。系统会生成一种与文字处理器非常相似的键盘交互模型，用户可以逐行、逐句或逐段地阅读。辅助技术会读出诸如链接、标题、表单控件、表格、列表或图像等语义。

此外，多年来还形成了一套所谓的*快速导航键*（quick navigation key），让视障用户能够按特定的元素类型快速浏览页面。这类元素通常包括标题、表单字段、列表、表格、链接、图形或地标区域。

为了让这一切得以实现，辅助技术几乎会拦截所有的键盘输入并自行处理，不让任何输入传递到浏览器或其他用户代理。为了能够与网页交互，辅助技术会识别一组标准的微件；当按下某个特定的键（通常是 <kbd>Enter</kbd> 键）时，这种模式就会被关闭。屏幕阅读器的这种模式通常被称为*表单模式*或*焦点模式*，它会让所有键盘输入重新传递到浏览器。<kbd>Escape</kbd> 是切换回*浏览*模式最常用的方式，但在特定的 `application` 区域内时，某些屏幕阅读器可能需要其他按键才能主动退出此模式，例如 JAWS 中的 <kbd>NUMPAD PLUS</kbd>。

`application` 角色旨在为那些不属于标准微件集合的微件提供一种途径，使它们能够在同时使用*浏览*和*焦点*两种模式与 Web 内容交互的辅助技术中被直接交互。最常用的微件都有人们预期的键盘交互行为。正因如此，由 Web 作者自行创建的键盘体验会造成令人困惑的体验。

### 关联的 WAI-ARIA 角色、状态和属性

- [`document`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/document_role)、[`article`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : 用于指示应用程序中应当被视作普通 Web 内容的部分
- [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : 用于管理应用程序内部的焦点。
- [`aria-label`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : 用于提供所暴露的应用程序或微件的名称或用途。
- [`aria-describedby`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : 用于引用某个元素的 ID，该元素包含有关如何导航或操作此元素的附加说明。
- [`aria-roledescription`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : 用于为应用程序提供更具描述性的角色文本，供屏幕阅读器朗读。此文本应当进行本地化。
- [`aria-disabled`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : 表示某个元素可见但处于禁用状态
- [`aria-errormessage`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : 对为设置了该属性的元素提供错误消息的元素的引用
- [`aria-expanded`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : 如果设置为 `true`，表示由该元素拥有或控制的分组元素处于展开状态；为 `false` 则表示处于折叠状态。
- [`aria-haspopup`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : 表示存在可由该元素触发的弹出内容，例如菜单或对话框。

### 键盘交互

键盘交互完全由 Web 作者掌控，可以是与所实现的特定微件相关的任何形式。例如，在一个幻灯片应用程序中，可以创建一个微件，用方向键在幻灯片上定位元素，并通过 ARIA 实时区域提供音频反馈，以传达元素的位置以及与其他对象的重叠状态。焦点通过 _aria-activedescendant_ 来管理。

<kbd>Tab</kbd>、<kbd>Space</kbd> 和 <kbd>Enter</kbd> 键，以及 <kbd>Escape</kbd> 键，必须由应用程序处理。唯一的例外是：如果焦点被设置到应用程序内部某个支持浏览器键盘导航的标准微件上，例如 [input](/zh-CN/docs/Web/HTML/Reference/Elements/input) 元素。

### 必需的 JavaScript 特性

- keyPress
  - : 用于处理键盘输入并控制焦点
- Click、Touch
  - : 也应当根据你的微件的具体情况进行相应处理
- 更改属性值
  - : [`aria-activedescendant`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) 用于管理应用程序容器内部的焦点。应当在响应改变焦点或交互点的键盘事件或其他应用程序事件时设置它。

> [!NOTE]
> `application` 角色没有对应的 HTML 微件，因此完全是自由形式的。应用程序的作者必须承担全部责任，确保用户不会被困在无法退出的焦点陷阱中。交互的所有方面都必须得到处理，包括返回到页面其他部分的常规 Web 内容。请明智而谨慎地使用，并记得进行测试！

## 示例

一些正确使用或曾经正确使用 application 角色的知名 Web 应用程序有：

- Google 文档、表格和幻灯片
- CKEditor 和 TinyMCE 等 WYSIWYG Web 编辑器，例如 Mozilla Developer Network 上所使用的编辑器
- Gmail 的某些部分

## 无障碍考虑

不当使用 `application` 角色可能会在无意之中使用户无法访问网页上的信息，因此使用时要格外留心。请认真思考你是否真的需要它，是否不能只使用一组其他已知的微件来完成同样的任务。

如果要使用，application 角色应当被添加到尽可能低的公共容器上，例如不要添加在 `<body>` 元素上。另外，务必使用辅助技术对你所编写的内容进行测试，以验证其按预期工作。

## 规范

{{Specifications}}

## 优先顺序

应用 `application` 角色会使该元素及其所有后代元素被视作应用程序内容，而非 Web 内容。辅助技术针对 Web 内容可能具备的任何阅读机制都将不再适用。

## 参见

- [如果你使用 WAI-ARIA 的 `application` 角色，请务必明智地使用](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/)——Marco Zehe 的博客文章
- [使用 ARIA `application` 角色](https://tink.uk/using-the-aria-application-role/)——由 Léonie Watson 撰写
