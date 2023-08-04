---
title: 常用的宏
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
---

{{MDNSidebar}}

本页列举了一些 MDN 中的常用宏命令。对于使用这些宏的入门信息，请阅读[使用宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros)这篇文章。

还有一些不常用或只在特定内容中适用，以及一些弃用的宏的信息，参见[其他宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)。

## 链接

为了简化一些常见超链接的创建工作——如指向站内的技术参考页面、术语库以及其他主题的链接，我们提供了丰富的宏来完成这些工作。

我们推荐使用宏来创建这些常见的链接，这样不但简洁，而且对翻译工作也很友好——使用宏创建的术语库和技术参考链接不需要翻译者再做处理，这些宏可提供正确的链接，使其符合当前页面的语言。

### 链接到术语库

[`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) 这个宏可用于创建指向 MDN 中[术语库](/zh-CN/docs/Glossary)内一个具体词条的链接。调用这个宏时，有一个必需的参数和一个可选参数。

1. 术语的名字（比如“HTML”）：`\{{Glossary("HTML")}}` 会指向 {{Glossary("HTML")}}。
2. 可选参数：使用参数中的文本内容，替代术语的名字显示在页面中：`\{{Glossary("CSS", "层叠样式表")}}` 会生成{{Glossary("CSS", "层叠样式表")}}。

### 链接到 MDN 的参考文档页面

下面列出的宏可链接到 MDN 站内不同技术领域的参考文档，如 Javascript、CSS、HTML 元素、SVG 等。

这些宏都很容易上手，大多数情况下只需一个参数——链接的组件的名称。大多数宏也接受第二个可选的、用于修改实际显示的文本的参数（相关的文档可在下方表格中最左列的链接中找到）。

<table class="standard-table">
  <thead>
    <tr>
      <th>宏</th>
      <th>所归属的主题页面</th>
      <th>示例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/mdn/yari/tree/main/kumascript/macros/cssxref.ejs">CSSxRef</a></td>
      <td><a href="/zh-CN/docs/Web/CSS/Reference">CSS 参考文档</a>（/Web/CSS/Reference）</td>
      <td><code>\{{CSSxRef("cursor")}}</code> 会指向 {{CSSxRef("cursor")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/zh-CN/docs/Web/API">DOM 参考文档</a>（/Web/API）</td>
      <td><code>\{{DOMxRef("Document")}}</code> 或 <code>\{{DOMxRef("document")}}</code> 都指向 {{DOMxRef("Document")}}。<br>
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> 会指向 {{DOMxRef("document.getElementsByName()")}}<br>
        <code>\{{DOMxRef("Node")}}</code> 会指向 {{DOMxRef("Node")}}。<br>
        你可以使用第二个参数控制在页面上实际显示的文本：<code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> 会生成 {{DOMxRef("document.getElementsByName()","getElementsByName()")}}。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a></code>
      </td>
      <td><a href="/zh-CN/docs/Web/HTML/Element">HTML 元素参考文档</a>（/Web/HTML/Element）</td>
      <td><code>\{{HTMLElement("select")}}</code> 会指向 {{HTMLElement("select")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/jsxref.ejs">JSxRef</a>
      </td>
      <td><a href="/zh-CN/docs/Web/JavaScript/Reference">JavaScript 参考文档</a>（/Web/JavaScript/Reference）</td>
      <td><code>\{{JSxRef("Promise")}}</code> 会指向 {{JSxRef("Promise")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
      </td>
      <td><a href="/zh-CN/docs/Web/SVG/Attribute">SVG 属性参考</a>（/Web/SVG/Attribute）</td>
      <td><code>\{{SVGAttr("d")}}</code> 会指向 {{SVGAttr("d")}}。</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGElement.ejs">SVGElement</a></td>
      <td><a href="/zh-CN/docs/Web/SVG/Element">SVG 元素参考</a>（/Web/SVG/Element）</td>
      <td><code>\{{SVGElement("view")}}</code> 会指向 {{SVGElement("view")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/httpheader.ejs">HTTPHeader</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Headers">HTTP 标头</a>（/Web/HTTP/Headers）</td>
      <td><code>\{{HTTPHeader("ACCEPT")}}</code> 会指向 {{HTTPHeader("ACCEPT")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPMethod.ejs">HTTPMethod</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Methods">HTTP 请求方法</a>（/Web/HTTP/Methods）</td>
      <td><code>\{{HTTPMethod("HEAD")}}</code> 会指向 {{HTTPMethod("HEAD")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPStatus.ejs">HTTPStatus</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Status">HTTP 响应代码</a>（/Web/HTTP/Status）</td>
      <td><code>\{{HTTPStatus("404")}}</code> 会指向 {{HTTPStatus("404")}}。</td>
    </tr>
  </tbody>
</table>

### 多页面间的导航栏

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs)、[`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) 和 [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) 这几个宏可以在页面中创建导航栏，帮助读者按照文章的先后顺序阅读。其中的参数需要填入目标页面在 MDN 中的位置，你可以在页面的网址中找到所需的信息。对于 [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs)，需要的两个参数是相应文章的 Wiki 位置。第一个参数用于上一篇文章，第二个参数用于下一篇文章。

## 代码示例

### 运行实例

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) 可以在当前页面中嵌入一个代码示例的实际展示效果（使用方法参见[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)）。
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) 创建指向包含页面上代码示例输出的页面的链接，如[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)中所述。
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) 提供了一种新的运行实例编写和使用方式，你可以在 [Github 运行实例](/zh-CN/docs/MDN/Structures/Code_examples#github_live_samples)中了解更多信息。

## 添加侧边栏

一些有海量子条目的主题，比如技术参考、指南、教程等，通常需要一个单独的主页面提供导航。对于这些主题中的页面，顶部的面包屑导航就显得比较简陋，下面这些模板，可以在页面的左侧，生成对应主题的侧边导航栏。

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) 生成 CSS 参考页面的侧边栏。
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) 生成 HTML 参考页面的侧边栏。
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) 生成 Web API 参考页面的侧边栏。

## 通用的文章格式化工具

### API 文档的内联指示器

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) 和 [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) 被用于 API 文档，通常可以用来描述一个对象的属性是只读的或一个函数的参数是可省略的。

用法：`\{{optional_inline}}` 或 `\{{ReadOnlyInline}}`。示例：

- `isCustomObject` {{ReadOnlyInline}}
  - : 如果此项值为 `true`，表明该对象是一个自定义对象。
- `parameterX` {{optional_inline}}
  - : 参数描述

## 状态和兼容性指示器

### 无需参数的行内指示器

#### 非标准的

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) 插入一个内联标记，表示 API 尚未标准化并且不在标准轨道上。

##### 语法

`\{{Non-standard_Inline}}`

##### 示例

- 图标：{{Non-standard_Inline}}

#### 实验性的

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) 插入一个内联标记，表示当前 API 没有被广泛地实现，并且在以后可能会改变。

##### 语法

`\{{Experimental_Inline}}`

##### 示例

- 图标：{{Experimental_Inline}}

### 代表明确技术参考的行内指示器

#### 已弃用

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) 会插入一个带有（{{Deprecated_Inline}}）的标记以不鼓励使用官方已弃用（或已删除）的 API。

##### 语法

`\{{Deprecated_Inline}}`

##### 示例

- 图标：{{Deprecated_Inline}}

### 页面或章节头部的指示器

下列指示器的含义，类似于上述的内联指示器。这些组件应直接放置在技术参考页面的标题（或面包屑导航栏）下，也可以用于标记页面上的某个小节。

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs) 语法：`\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) 对于一些介绍[实验性功能](/zh-CN/docs/MDN/Guidelines/Conventions_definitions#experimental)的内容，应当在这些内容前放置此指示器。语法：`\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs)：应该用于界面页面、API 概览页面和 API 入口点（例如 `navigator.xyz`）等主要页面，但通常不在方法和属性页面等子页面上使用。语法：`\{{SecureContext_Header}}` {{SecureContext_Header}}

### 表明某个功能在 Web Worker 中可用的指示器

[`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) 宏插入一个本地化的注释框，表明一个功能在 [Web worker](/zh-CN/docs/Web/API/Web_Workers_API) 上下文中可用。它还有一个可选参数，当带有 `notservice` 时，表示该功能在 Web Worker 中可用但在 Servcie Worker 中不可用。

##### 语法

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("notservice")}}
```

##### 示例

{{AvailableInWorkers}}
{{AvailableInWorkers("notservice")}}
