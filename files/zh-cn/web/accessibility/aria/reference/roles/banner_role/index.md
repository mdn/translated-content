---
title: ARIA：banner 角色
slug: Web/Accessibility/ARIA/Reference/Roles/banner_role
l10n:
  sourceCommit: 6193c69cb71e80e45e7dff97188253ed15d58321
---

`banner` 角色用于定义全局的站点页眉，其中通常包含徽标（logo）、公司名称、搜索功能，还可能包含全局导航或标语。它通常位于页面顶部。

默认情况下，HTML 的 {{htmlelement("header")}} 元素与 `banner` 地标具有相同的含义，除非它是 {{htmlelement("aside")}}、{{htmlelement("article")}}、{{htmlelement("main")}}、{{htmlelement("nav")}} 或 {{htmlelement("section")}} 的后代元素，此时 {{htmlelement("header")}} 将呈现 [`generic`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) 角色，而不是等同于站点级 banner。

## 描述

`banner` 地标角色会覆盖其所应用到的容器元素的隐式 ARIA 角色。它应当保留给在站点范围内全局重复出现、且通常位于每个页面顶部的内容。

banner 通常包含徽标或企业形象等内容，也可能包含站点专用的搜索工具，并且通常就是市场营销团队所说的站点“页眉”或“顶部横幅”。如果该 banner 没有使用 [`header` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/header)技术，则应使用 `role="banner"` 声明来为辅助技术定义 banner 地标。

如果页面的 `header` 元素是 [`body` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/body)的后代，且未嵌套在 `article`、`aside`、`main`、`nav` 或 `section` 子分区中，辅助技术就可以将其识别为 `banner`。

每个页面都可以有一个 `banner` 地标，但通常每个页面应限于只有一个 banner 角色的元素。对于包含嵌套 `document` 和/或 `application` 角色的页面，每个嵌套的 `document` 或 `application` 角色也可以各有一个 `banner` 地标。如果一个页面包含多个 `banner` 地标，则每个地标都应具有唯一的无障碍名称。

### 关联的 ARIA 角色、状态和属性

无。

### 键盘交互

无。

### 所需的 JavaScript 特性

无。

## 示例

下面是一个虚拟的 banner，其中包含一个跳转到导航的链接、一个徽标、一个标题和一个副标题。由于这是站点的主页眉，我们为容器元素添加了 `banner` 地标角色。

```html
<div role="banner">
  <a href="#main" id="skipToMain" class="skiptocontent">跳转到主要内容</a>
  <img src="images/w3c.png" alt="W3C 标志" />
  <h1>ARIA 地标</h1>
  <p>标识页面子分区，便于导航</p>
  <nav>…</nav>
</div>
```

我们也可以使用 HTML `header` 元素来编写上述代码：

```html
<header>
  <a href="#main" id="skipToMain" class="skiptocontent">跳转到主要内容</a>
  <img src="images/w3c.png" alt="W3C 标志" />
  <h1>ARIA 地标</h1>
  <p>标识页面子分区，便于导航</p>
  <nav>…</nav>
</header>
```

## 最佳实践

使用 {{HTMLElement('header')}} 元素会自动传达该元素具有 `banner` 角色的信息。如果可能，请优先使用语义化的 `<header>` 元素，而不是 `banner` 角色。

虽然最好使用 `header` 元素并确保它不是页面任何子分区的后代，但有时你可能无法访问底层 HTML。在这种情况下，你可以使用 JavaScript 为页面中应呈现为 `banner` 的元素添加 `banner` 角色。以这种方式标识页面的 banner 将有助于提升站点的无障碍性。

## 规范

{{Specifications}}

## 参见

- [HTML `header` 元素](/zh-CN/docs/Web/HTML/Reference/Elements/header)
- [W3C 地标示例](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/banner.html)
