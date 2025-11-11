---
title: 常用的宏
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 7819249f906dcfc59a2c4cb702b80a35b7964842
---

本页列举了一些 MDN 中的常用宏命令。对于在 MDN 内容中使用这些宏的通用信息，请阅读[使用宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros)这篇文章。

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
      <td><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a></td>
      <td><a href="/zh-CN/docs/Web/CSS/Reference">CSS 参考文档</a>（/Web/CSS/Reference）</td>
      <td><code>\{{CSSxRef("cursor")}}</code> 会生成 {{CSSxRef("cursor")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
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
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a></code>
      </td>
      <td><a href="/zh-CN/docs/Web/HTML/Reference/Elements">HTML 元素参考</a>（/Web/HTML/Reference/Elements）</td>
      <td><code>\{{HTMLElement("select")}}</code> 会生成 {{HTMLElement("select")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td><a href="/zh-CN/docs/Web/JavaScript/Reference">JavaScript 参考</a>（/Web/JavaScript/Reference）</td>
      <td><code>\{{JSxRef("Promise")}}</code> 会生成 {{JSxRef("Promise")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td><a href="/zh-CN/docs/Web/SVG/Reference/Attribute">SVG 属性参考</a>（/Web/SVG/Reference/Attribute）</td>
      <td><code>\{{SVGAttr("d")}}</code> 会生成 {{SVGAttr("d")}}。</td>
    </tr>
    <tr>
      <td><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a></td>
      <td><a href="/zh-CN/docs/Web/SVG/Reference/Element">SVG 元素参考</a>（/Web/SVG/Reference/Element）</td>
      <td><code>\{{SVGElement("view")}}</code> 会生成 {{SVGElement("view")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Reference/Headers">HTTP 标头</a>（/Web/HTTP/Reference/Headers）</td>
      <td><code>\{{HTTPHeader("ACCEPT")}}</code> 会生成 {{HTTPHeader("ACCEPT")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Reference/Methods">HTTP 请求方法</a>（/Web/HTTP/Reference/Methods）</td>
      <td><code>\{{HTTPMethod("HEAD")}}</code> 会生成 {{HTTPMethod("HEAD")}}。</td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td><a href="/zh-CN/docs/Web/HTTP/Reference/Status">HTTP 响应状态码</a>（/Web/HTTP/Reference/Status）</td>
      <td><code>\{{HTTPStatus("404")}}</code> 会生成 {{HTTPStatus("404")}}。</td>
    </tr>
  </tbody>
</table>

### 多页面间的导航栏

[`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)、[`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) 和 [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) 为序列中的文章提供导航控件。对于单向的模板，唯一需要的参数是序列中的上一篇或下一篇文章的 wiki 位置。对于 [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs)，需要的两个参数是相应文章的 wiki 位置。第一个参数用于上一篇文章，第二个参数用于下一篇文章。

## 代码示例

### 运行实例

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) 可以在当前页面中嵌入一个代码示例的实际展示效果（使用方法参见[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)）。
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) 创建指向包含页面上代码示例输出的页面的链接，如[运行实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Live_samples)中所述。
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) 允许从 GitHub Pages 中嵌入运行实例，你可以在 [Github 在线实例](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_在线实例)中了解更多信息。

## 通用格式化

### API 文档的行内指示器

[`optional_inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) 和 [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) 被用于 API 文档，通常在描述对象的属性列表或函数的参数时使用。

用法：`\{{Optional_Inline}}` 或 `\{{ReadOnlyInline}}`。示例：

- `isCustomObject` {{ReadOnlyInline}}
  - : 如果此项值为 `true`，表明该对象是一个自定义对象。
- `parameterX` {{Optional_Inline}}
  - : 参数描述

## 状态和兼容性指示器

### 无需参数的行内指示器

#### 非标准

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) 插入一个行内标记，表示 API 尚未标准化并且未被标准化追踪。

##### 语法

`\{{Non-standard_Inline}}`

##### 示例

- 图标：{{Non-standard_Inline}}

#### 实验性

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) 插入一个行内标记，表示当前 API 尚未被广泛地实现，并且以后可能会发生变化。有关**实验性**定义的更多信息，请参阅[实验性、已弃用和过时](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)文档。

##### 语法

`\{{Experimental_Inline}}`

##### 示例

- 图标：{{Experimental_Inline}}

### 代表明确技术参考的行内指示器

#### 已弃用

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) 会插入一个行内的已弃用标记（{{Deprecated_Inline}}）以不鼓励使用官方已弃用（或已删除）的 API。有关**已弃用**定义的更多信息，请参阅[实验性、已弃用和过时](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)文档。

##### 语法

`\{{Deprecated_Inline}}`

##### 示例

- 图标：{{Deprecated_Inline}}

### 页面或章节头部的指示器

这些模板与上述的行内指示器具有相同的语义。这些模板应直接放置在参考页面的主页标题（或面包屑导航栏，如果有的话）下，也可以用于标记页面上的某个部分。

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)：`\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) 应该用于记录[实验性特性](/zh-CN/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#实验性)的页面。示例：`\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)：`\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)：应该用于接口页面、API 概览页面和 API 入口点（例如 `navigator.xyz`）等主要页面，但通常不在方法和属性页面等子页面上使用。示例：`\{{SecureContext_Header}}` {{SecureContext_Header}}

### 表明某个特性在 Web Worker 中可用的指示器

[`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) 宏插入一个本地化的注释框，表明一个特性在 [Web worker](/zh-CN/docs/Web/API/Web_Workers_API) 上下文中可用。你还可以传递一些参数来指示某个特性在指定的 worker 上下文中可用。

#### 语法

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

#### 示例

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## 浏览器兼容性和规范宏

以下宏包含在所有参考页中，但也被所有页面类型所支持。

- `\{{Compat}}`
  - : 为页面元数据（front matter）中的 `browser-compat` 定义的特性生成[兼容性表格](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables)。
- `\{{Specifications}}`
  - : 包含用于展示相关特性的[规范表格](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Specification_tables)，特性由页面元数据中的 `spec-urls`（如果存在）或页面元数据中的 `browser-compat` 定义的浏览器兼容性数据所列的规范定义。

## 参见

- [侧边栏宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [页面模板](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Page_types#页面模板)
- [页面组件](/zh-CN/docs/MDN/Writing_guidelines/Writing_style_guide#页面组件)
- [特性状态宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [其他宏](/zh-CN/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)：不常用或弃用的宏
