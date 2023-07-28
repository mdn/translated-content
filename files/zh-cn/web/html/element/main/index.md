---
title: <main>
slug: Web/HTML/Element/main
---

{{HTMLSidebar}}

HTML **`<main>` 元素**呈现了文档的 {{HTMLElement("body")}} 或应用的主体部分。主体部分由与文档直接相关，或者扩展于文档的中心主题、应用的主要功能部分的内容组成。

{{EmbedInteractiveExample("pages/tabbed/main.html","tabbed-shorter")}}

- _[内容](/zh-CN/docs/Web/HTML/Content_categories)类别_[Flow content](/zh-CN/docs/Web/HTML/Content_categories#Flow_content), palpable content.
- _允许内容_ [Flow content](/zh-CN/docs/Web/HTML/Content_categories#Flow_content).
- *标签省略*无; 开始与结束都是强制性。
- *被允许的父级元素*任何支持流内容但可能不是继承元素的 元素{{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, 或{{HTMLElement("nav")}}
- _DOM 接口_ {{domxref("HTMLElement")}}

## 属性

此元素仅包含[全局属性](/zh-CN/docs/Web/HTML/Global_attributes)。

## 使用说明

在文档中，`<main>` 元素的内容应当是独一无二的。任何同时存在于任意一系列文档中的相同、重复内容，比如侧边栏、导航栏链接、版权信息、网站 Logo，搜索框（除非搜索框为文档的主要功能），都不应当被包含在其内。

`<main>` 对文档的大纲（outline）没有贡献；也就是说，它与诸如 {{HTMLElement("body")}} 之类的元素，诸如 {{HTMLElement("h2")}} 之类的标题等不同，`<main>` 不会影响 {{glossary("DOM", "DOM")}} 的页面结构概念。它仅有提供信息的作用。（原文：It's strictly informative.）

## 示例

```html
<!-- 其他内容 -->

<main>
  <h1>Apples</h1>
  <p>The apple is the pomaceous fruit of the apple tree.</p>

  <article>
    <h2>Red Delicious</h2>
    <p>
      These bright red apples are the most common found in many supermarkets.
    </p>
    <p>...</p>
    <p>...</p>
  </article>

  <article>
    <h2>Granny Smith</h2>
    <p>These juicy, green apples make a great filling for apple pies.</p>
    <p>...</p>
    <p>...</p>
  </article>
</main>

<!-- 其他内容 -->
```

## 无障碍相关

### 界标

`<main>` 元素的行为与 [`main` 界标](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Main_role)所定义的角色相一致。 [界标](/zh-CN/docs/Web/Accessibility/ARIA/ARIA_Techniques#Landmark_roles)可被辅助技术使用，以快速识别并将用户导航到文档中的分段。通常使用 `<main>` 元素，而不是定义 `role="main"`，除非是考虑[对于旧浏览器的兼容性](/zh-CN/docs/Web/HTML/Element/main#Browser_compatibility).

### 直达内容

直达内容（skipnav），是一种辅助功能技术，使其用户可以快速跳过大段的重复内容（如主导航栏、信息横幅等）。这允许用户更快地访问到页面的主要内容。

向 `<main>` 元素添加 [`id` 属性](/zh-CN/docs/Web/HTML/Global_attributes/id)后，该元素可成为直达内容链接的目标。

```plain
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```

- [WebAIM: 直达链接](https://webaim.org/techniques/skipnav/)

### 阅读器模式

浏览器的阅读器模式会寻找文档中的`main` 元素，以及 [标题元素](/zh-CN/docs/Web/HTML/Element/Heading_Elements) 和 [内容分区元素](/zh-CN/docs/Web/HTML/Element#Content_sectioning) 以便将内容转换至阅读器视图。

- [为 Safari 阅读器模式以及其他阅读器应用构建网站](https://medium.com/@mandy.michael/building-websites-for-safari-reader-mode-and-other-reading-apps-1562913c86c9)

## 规范

{{Specifications}}

## 浏览器兼容性

`<main>` 标签受广泛支持。对于 IE 浏览器 11 版本和低于 11 的版本，推荐向 `<main>` 元素添加 `"main" 这一` {{glossary("ARIA")}} 角色，以保证其无障碍。(屏幕阅读器，如 JAWS，当与较旧版本的 Internet Explorer 一起使用时，需包括此 `role` 属性才能理解 `<main>` 元素的语义含义）

```html
<main role="main">...</main>
```

{{Compat}}

## 参见

- 基本结构元素：{{HTMLElement("html")}}、{{HTMLElement("head")}}、{{HTMLElement("body")}}
- 分段相关元素：{{HTMLElement("article")}}、{{HTMLElement("aside")}}、{{HTMLElement("footer")}}、{{HTMLElement("header")}}, 或 {{HTMLElement("nav")}}
