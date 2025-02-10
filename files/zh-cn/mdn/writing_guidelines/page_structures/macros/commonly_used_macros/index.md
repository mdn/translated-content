---
title: 常用的宏
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
---

本页列举了一些 MDN 中的常用宏命令。对于使用这些宏的入门信息，请阅读[使用宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros)这篇文章。

还有一些不常用或只在特定上下文中使用的，以及一些弃用的宏的信息，参见[其他宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)。

## 链接

MDN 提供了许多链接宏，用于简化参考页、术语表条目和其他主题的链接的创建。

我们推荐使用宏而不是普通的 Markdown 链接来创建这些常见的链接，这样不但简洁，而且对翻译工作也很友好。例如，使用宏创建的术语和技术参考的链接不需要再做翻译处理：在其他本地环境中，它将自动链接到文件的正确版本。

### 链接到术语库

[`Glossary`](https://github.com/mdn/yari/blob/main/kumascript/macros/Glossary.ejs) 宏可用于创建指向 MDN [术语表](/zh-CN/docs/Glossary)内一个具体词条的链接。调用这个宏时，有一个必需的参数和一个可选参数：

1. 术语的名字（比如“HTML”）：`\{{Glossary("HTML")}}` 会生成 {{Glossary("HTML")}}。
2. 可选参数：使用参数中的文本内容，替代术语的名字显示在页面中：`\{{Glossary("CSS", "层叠样式表")}}` 会生成{{Glossary("CSS", "层叠样式表")}}。

### 链接到参考页

下面列出的宏可链接到 MDN 站内不同技术领域的参考页，如 Javascript、CSS、HTML 元素、SVG 等。

这些宏都易于使用。你可以仅在第一个参数中指定要链接到的项目的名称。大多数宏也接受第二个用于修改显示的文本的参数（相关的文档可在下方表格中最左列的链接中找到）。

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
      <td><code>\{{CSSxRef("cursor")}}</code> 会生成 {{CSSxRef("cursor")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/DOMxRef.ejs">DOMxRef</a>
      </td>
      <td><a href="/zh-CN/docs/Web/API">DOM 参考文档</a>（/Web/API）</td>
      <td><code>\{{DOMxRef("Document")}}</code> 或 <code>\{{DOMxRef("document")}}</code> 都生成 {{DOMxRef("Document")}}。<br>
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> 会生成 {{DOMxRef("document.getElementsByName()")}}<br>
        <code>\{{DOMxRef("Node")}}</code> 会生成 {{DOMxRef("Node")}}。<br>
        你可以使用第二个参数控制在页面上实际显示的文本：<code>\{{DOMxRef("document.getElementsByName()","getElementsByName()")}}</code> 会生成 {{DOMxRef("document.getElementsByName()","getElementsByName()")}}。
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTMLElement.ejs">HTMLElement</a></code>
      </td>
      <td><a href="/zh-CN/docs/Web/HTML/Element">HTML 元素参考</a>（/Web/HTML/Element）</td>
      <td><code>\{{HTMLElement("select")}}</code> 会生成 {{HTMLElement("select")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/jsxref.ejs">JSxRef</a>
      </td>
      <td><a href="/zh-CN/docs/Web/JavaScript/Reference">JavaScript 参考</a>（/Web/JavaScript/Reference）</td>
      <td><code>\{{JSxRef("Promise")}}</code> 会生成 {{JSxRef("Promise")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGAttr.ejs">SVGAttr</a>
      </td>
      <td><a href="/zh-CN/docs/Web/SVG/Attribute">SVG 属性参考</a>（/Web/SVG/Attribute）</td>
      <td><code>\{{SVGAttr("d")}}</code> 会生成 {{SVGAttr("d")}}。</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mdn/yari/tree/main/kumascript/macros/SVGElement.ejs">SVGElement</a></td>
      <td><a href="/zh-CN/docs/Web/SVG/Element">SVG 元素参考</a>（/Web/SVG/Element）</td>
      <td><code>\{{SVGElement("view")}}</code> 会生成 {{SVGElement("view")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/blob/main/kumascript/macros/httpheader.ejs">HTTPHeader</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Headers">HTTP 标头</a>（/Web/HTTP/Headers）</td>
      <td><code>\{{HTTPHeader("ACCEPT")}}</code> 会生成 {{HTTPHeader("ACCEPT")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPMethod.ejs">HTTPMethod</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Methods">HTTP 请求方法</a>（/Web/HTTP/Methods）</td>
      <td><code>\{{HTTPMethod("HEAD")}}</code> 会生成 {{HTTPMethod("HEAD")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/yari/tree/main/kumascript/macros/HTTPStatus.ejs">HTTPStatus</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Status">HTTP 响应状态码</a>（/Web/HTTP/Status）</td>
      <td><code>\{{HTTPStatus("404")}}</code> 会生成 {{HTTPStatus("404")}}。</td>
    </tr>
  </tbody>
</table>

### 多页面间的导航栏

[`Previous`](https://github.com/mdn/yari/blob/main/kumascript/macros/Previous.ejs)、[`Next`](https://github.com/mdn/yari/blob/main/kumascript/macros/Next.ejs) 和 [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs) 为序列中的文章提供导航控件。对于单向的模板，唯一需要的参数是序列中的上一篇或下一篇文章的 wiki 位置。对于 [`PreviousNext`](https://github.com/mdn/yari/blob/main/kumascript/macros/PreviousNext.ejs)，需要的两个参数是相应文章的 wiki 位置。第一个参数用于上一篇文章，第二个参数用于下一篇文章。

## 代码示例

### 运行实例

- [`EmbedLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) 可以在当前页面中嵌入一个代码示例的实际展示效果（使用方法参见[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)）。
- [`LiveSampleLink`](https://github.com/mdn/yari/blob/main/kumascript/macros/LiveSampleLink.ejs) 创建指向包含页面上代码示例输出的页面的链接，如[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)中所述。
- [`EmbedGHLiveSample`](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedGHLiveSample.ejs) 提供了一种新的运行实例编写和使用方式，你可以在 [Github 在线实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_在线实例)中了解更多信息。

## 侧边栏生成

几乎每个大型页面集合都有模板。它们通常会链接回参考/指南/教程的主页（这通常是需要的，因为我们的面包屑有时无法做到这一点）并将文章放入适当的类别中。

- [`CSSRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/CSSRef.ejs) 生成 CSS 参考页的侧边栏。
- [`HTMLSidebar`](https://github.com/mdn/yari/blob/main/kumascript/macros/HTMLSidebar.ejs) 生成 HTML 参考页的侧边栏。
- [`APIRef`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIRef.ejs) 生成 Web API 参考页的侧边栏。

## 通用的文章格式化工具

### API 文档的行内指示器

[`optional_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/optional_inline.ejs) 和 [`ReadOnlyInline`](https://github.com/mdn/yari/blob/main/kumascript/macros/ReadOnlyInline.ejs) 被用于 API 文档，通常在描述对象的属性列表或函数的参数时使用。

用法：`\{{Optional_Inline}}` 或 `\{{ReadOnlyInline}}`。示例：

- `isCustomObject` {{ReadOnlyInline}}
  - : 如果此项值为 `true`，表明该对象是一个自定义对象。
- `parameterX` {{Optional_Inline}}
  - : 参数描述

## 状态和兼容性指示器

### 无需参数的行内指示器

#### 非标准

[`non-standard_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Inline.ejs) 插入一个行内标记，表示 API 尚未标准化并且未被标准化追踪。

##### 语法

`\{{Non-standard_Inline}}`

##### 示例

- 图标：{{Non-standard_Inline}}

#### 实验性

[`experimental_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/experimental_inline.ejs) 插入一个行内标记，表示当前 API 尚未被广泛地实现，并且以后可能会发生变化。有关**实验性**定义的更多信息，请参阅[实验性、已弃用和过时](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)文档。

##### 语法

`\{{Experimental_Inline}}`

##### 示例

- 图标：{{Experimental_Inline}}

### 代表明确技术参考的行内指示器

#### 已弃用

[`deprecated_inline`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Inline.ejs) 会插入一个行内的已弃用标记（{{Deprecated_Inline}}）以不鼓励使用官方已弃用（或已删除）的 API。有关**已弃用**定义的更多信息，请参阅[实验性、已弃用和过时](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)文档。

##### 语法

`\{{Deprecated_Inline}}`

##### 示例

- 图标：{{Deprecated_Inline}}

### 页面或章节头部的指示器

这些模板与上述的行内指示器具有相同的语义。这些模板应直接放置在参考页面的主页标题（或面包屑导航栏，如果有的话）下，也可以用于标记页面上的某个部分。

- [`non-standard_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Non-standard_Header.ejs)：`\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/yari/blob/main/kumascript/macros/SeeCompatTable.ejs) 应该用于记录[实验性特性](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#实验性)的页面。示例：`\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`deprecated_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/Deprecated_Header.ejs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`secureContext_header`](https://github.com/mdn/yari/blob/main/kumascript/macros/secureContext_header.ejs)：应该用于接口页面、API 概览页面和 API 入口点（例如 `navigator.xyz`）等主要页面，但通常不在方法和属性页面等子页面上使用。示例：`\{{SecureContext_Header}}` {{SecureContext_Header}}

### 表明某个特性在 Web Worker 中可用的指示器

[`AvailableInWorkers`](https://github.com/mdn/yari/blob/main/kumascript/macros/AvailableInWorkers.ejs) 宏插入一个本地化的注释框，表明一个特性在 [Web worker](/zh-CN/docs/Web/API/Web_Workers_API) 上下文中可用。它还有一个可选参数，当带有 `notservice` 时，表示该特性在 Web Worker 中可用但在 Servcie Worker 中不可用。

#### 语法

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("notservice")}}
```

#### 示例

{{AvailableInWorkers}}
{{AvailableInWorkers("notservice")}}
