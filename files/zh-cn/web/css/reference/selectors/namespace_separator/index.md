---
title: 命名空间分隔符
slug: Web/CSS/Reference/Selectors/Namespace_separator
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**命名空间分隔符**（`|`）将选择器与命名空间分隔开，用于标识类型选择器是否包含{{glossary("namespace", "命名空间")}}。

```css
/* 在 myNameSpace 命名空间中的链接 */
myNameSpace|a {
  font-weight: bold;
}
/* 任何命名空间的段落（包含无命名空间） */
*|p {
  color: darkblue;
}
/* 无命名空间的二级标题 */
|h2 {
  margin-bottom: 0;
}
```

[类型选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Type_selectors)和[通配选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Universal_selectors)允许包含可选的命名空间组件。当命名空间已通过 {{CSSXref("@namespace")}} 声明时，可在选择器前添加命名空间名称（以命名空间分隔符 `|` 分隔）实现命名空间限定。此特性在处理含多重命名空间的文档时尤为实用，例如嵌入 SVG 或 MathML 的 HTML 文档，或混合多种词汇的 XML 文档。

- `ns|h1`——匹配命名空间 `ns` 中的 `<h1>` 元素
- `*|h1`——匹配所有 `<h1>` 元素
- `|h1`——匹配所有未声明或隐含命名空间外的 `<h1>` 元素

## 语法

```css
namespace|element { style properties }
```

## 示例

默认情况下，HTML 或 SVG 元素中的所有元素都具有命名空间，因为 `http://www.w3.org/1999/xhtml` 和 `http://www.w3.org/2000/svg` 命名空间是隐含的。可通过在 {{domxref("document.createElementNS")}} 方法中将命名空间参数设为空字符串，创建无命名空间的元素。

### 具名命名空间示例

在本示例中，所有元素都在一个命名空间内。

#### HTML

HTML 或 SVG 中均未显式声明命名空间。

```html
<p>此段落<a href="#">包含链接</a>。</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">SVG 中的链接</text>
  </a>
</svg>
```

#### CSS

该 CSS 声明了两个命名空间，随后为链接全局赋予样式（`a`），为无命名空间的链接赋予样式（`|a`），为任何命名空间或无命名空间的链接赋予样式（`*|a`），最后为两个不同的命名命名空间赋予样式（`svgNamespace|a` 和 `htmlNameSpace|a`）。

```css
@namespace svgNamespace url("http://www.w3.org/2000/svg");
@namespace htmlNameSpace url("http://www.w3.org/1999/xhtml");
/* 所有默认命名空间中的 `<a>`，在此示例中是所有的 `<a>` */
a {
  font-size: 1.4rem;
}
/* 无命名空间 */
|a {
  text-decoration: wavy overline lime;
  font-weight: bold;
}
/* 所有命名空间（包括无命名空间） */
*|a {
  color: red;
  fill: red;
  font-style: italic;
}
/* 仅 svgNamespace 命名空间，即 <svg> 内容 */
svgNamespace|a {
  color: green;
  fill: green;
}
/* htmlNameSpace 命名空间，即 HTML 文档 */
htmlNameSpace|a {
  text-decoration-line: line-through;
}
```

#### 结果

{{EmbedLiveSample("具名命名空间示例", "100%", 100)}}

选择器 `|a`（未在命名空间中的链接）无法匹配任何链接。在 HTML 中，默认隐含 `http://www.w3.org/1999/xhtml` 命名空间，这意味着所有 HTML 内容都处于命名空间中，即使未显式声明任何命名空间。在 SVG 中，即使未显式设置，`http://www.w3.org/2000/svg` 命名空间同样默认存在。这意味着所有内容至少属于一个命名空间。

### 默认命名空间与无命名空间

在此示例中，我们使用 JavaScript 创建一个无命名空间的元素并将其附加到文档中。通过 `@namespace` 定义未命名的命名空间，我们将 SVG 命名空间设为默认命名空间。

> [!NOTE]
> 若定义了默认（或无命名）命名空间，则通用选择器和类型选择器仅适用于该命名空间内的元素。

#### HTML

HTML 或 SVG 中均未显式声明命名空间。

```html
<p>在隐含的 HTML 命名空间中的<a href="#">链接</a>。</p>

<svg width="400" viewBox="0 0 400 20">
  <a href="#">
    <text x="0" y="15">在 SVG 命名空间中的链接。</text>
  </a>
</svg>
```

#### JavaScript

通过 JavaScript 的 {{DOMXRef("document.createElementNS")}}，我们创建一个无命名空间的锚点链接，并插入该链接。

```js
// 创建“无命名空间”的锚点
const a = document.createElementNS("", "a");
a.href = "#";
a.appendChild(document.createTextNode("无命名空间的锚点"));

document.body.appendChild(a);
```

#### CSS

我们使用 {{cssxref("@namespace")}} 声明命名空间。若省略命名空间名称，`@namespace` 声明将创建默认命名空间。

```css
/* 通过省略名称，将 SVG 设为默认命名空间 */
@namespace url("http://www.w3.org/2000/svg");

/* 默认命名空间（设为 SVG）的 `<a>` */
a {
  font-size: 1.4rem;
}

/* 默认命名空间（设为 SVG）的 `<svg>` 和 `<p>` */
svg,
p {
  border: 5px solid gold;
}

/* 任何命名空间之外的链接 */
|a {
  text-decoration: wavy underline purple;
  font-weight: bold;
}

/* 具有任何命名空间或无命名空间的链接 */
*|a {
  font-style: italic;
  color: magenta;
  fill: magenta;
}
```

#### 结果

{{EmbedLiveSample("默认命名空间与无命名空间", "100%", 100)}}

未添加命名空间分隔符的选择器 `a` 仅匹配了 SVG 中的 `<a>` 元素，因为 SVG 被设为默认命名空间。

未添加命名空间的选择器 `|a` 匹配了通过 JavaScript 定义并追加的 `<a>` 元素，因为该节点是唯一不具有默认命名空间的节点。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("@namespace")}}
- [`Document.createElementNS()`](/zh-CN/docs/Web/API/Document/createElementNS) 方法
- [`Element.namespaceURI`](/zh-CN/docs/Web/API/Element/namespaceURI) 属性
- [CSS 类型选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Type_selectors)
- [CSS 通配选择器](/zh-CN/docs/Web/CSS/Reference/Selectors/Universal_selectors)
- [CSS 选择器模块](/zh-CN/docs/Web/CSS/Guides/Selectors)
