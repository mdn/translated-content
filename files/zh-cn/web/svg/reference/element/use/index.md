---
title: <use>
slug: Web/SVG/Reference/Element/use
l10n:
  sourceCommit: 2e5fc06de139c56873a20ec4bc3bf5600ea3cbef
---

**`<use>`** 元素从 SVG 文档中获取节点，并将它们复制到其他地方。其效果与将这些节点深度克隆到一个不可导出的 DOM 中，然后粘贴到 `use` 元素所在的位置相同，这与克隆的[模版元素](/zh-CN/docs/Web/HTML/Reference/Elements/template)类似。

## 示例

下面的示例展示了如何使用 `use` 元素绘制一个具有不同填充色和描边色的圆形。在最后一个圆形中，`stroke="red"` 将被忽略，因为描边已在 `myCircle` 上设置。

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <circle id="myCircle" cx="5" cy="5" r="4" stroke="blue" />
  <use href="#myCircle" x="10" fill="blue" />
  <use href="#myCircle" x="20" fill="white" stroke="red" />
</svg>
```

{{EmbedLiveSample('示例', 200, 200)}}

## 属性

- {{SVGAttr("href")}}
  - : 需要被复制的元素或片段的 URL。有关常见陷阱的详细信息，请参阅[使用说明](#使用说明)。<br/> _值类型_：[**`<URL>`**](/zh-CN/docs/Web/SVG/Guides/Content_type#url)；_默认值_：无；_动画性_：**是**
- {{SVGAttr("xlink:href")}} {{Deprecated_Inline}}
  - : 需要被复制的元素或片段的 [`<IRI>`](/zh-CN/docs/Web/SVG/Guides/Content_type#iri) 引用。如果同时存在 {{SVGAttr("href")}} 和 {{SVGAttr("xlink:href")}} ，则使用 {{SVGAttr("href")}} 所给的值。<br/> _值类型_：[**`<IRI>`**](/zh-CN/docs/Web/SVG/Guides/Content_type#iri)；_默认值_：无；_动画性_：**是**
- {{SVGAttr("x")}}
  - : 应用于 `<use>` 元素的额外最终偏移变换的 x 坐标。<br/> _值类型_：[**`<coordinate>`**](/zh-CN/docs/Web/SVG/Guides/Content_type#坐标)；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("y")}}
  - : 应用于 `<use>` 元素的额外最终偏移变换的 y 坐标。<br/> _值类型_：[**`<coordinate>`**](/zh-CN/docs/Web/SVG/Guides/Content_type#坐标)；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("width")}}
  - : use 元素的宽度。<br/> _值类型_：[**`<length>`**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度)；_默认值_：`0`；_动画性_：**是**
- {{SVGAttr("height")}}
  - : use 元素的高度。<br/> _值类型_：[**`<length>`**](/zh-CN/docs/Web/SVG/Guides/Content_type#长度)；_默认值_：`0`；_动画性_：**是**

> [!NOTE]
> 除非引用的元素具有 [viewBox](/zh-CN/docs/Web/SVG/Reference/Attribute/viewBox)，否则 `width` 和 `height` 对 `use` 元素没有任何影响。仅在 `use` 指向 `svg` 或 `symbol` 元素时才有效。

> [!NOTE]
> 从 SVG2 开始，`x`、`y`、`width` 和 `height` 是*几何属性*，这意味着这些属性也可以作为该元素的 CSS 属性使用。

## 使用说明

如果 `use` *引用*的元素上已经定义了相应的属性，则大多数 `use` 元素上的属性将被忽略。（这与 CSS 样式属性在层叠中如何覆盖“先前”设置的属性有所不同）。**只有**在 `use` 元素上的 {{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}}、{{SVGAttr("height")}} 和 {{SVGAttr("href")}} 属性，若引用的元素已经定义了相应的属性，才会或可能产生一些效果，稍后会进行描述。然而，*任何其他属性*如果没有在引用的元素上设置，**将**应用于 `use` 元素。

由于克隆的节点不可导出，因此在使用 [CSS](/zh-CN/docs/Web/CSS) 为 `use` 元素及其克隆的后代添加样式时必须小心。除非通过 [CSS 继承](/zh-CN/docs/Web/CSS/Guides/Cascade/Inheritance)显式请求，否则无法保证克隆的 DOM 会继承 CSS 属性。

出于安全原因，浏览器可能会对 `use` 元素应用[同源策略](/zh-CN/docs/Web/Security/Defenses/Same-origin_policy)，并可能拒绝加载 {{SVGAttr("href")}} 属性中的跨源 URL。目前没有定义的方式为 `use` 元素设置跨源策略。

> [!WARNING]
> 出于安全原因，在 `href` 属性中使用数据 URI 加载资源已被弃用。这适用于 `<use href="data:...`，以及使用 [`set`](/zh-CN/docs/Web/SVG/Reference/Element/set) 或 [`setAttribute`](/zh-CN/docs/Web/API/Element/setAttribute) 方法设置 `href` 的情况。请参阅[浏览器兼容性](#浏览器兼容性)表中的“Load from data: URI”部分，以检查不同浏览器版本的支持情况。

> [!WARNING]
> 从 SVG 2 开始，{{SVGAttr("xlink:href")}} 属性已被弃用，建议改用 {{SVGAttr("href")}}。有关更多信息，请参阅 {{SVGAttr("xlink:href")}} 页面。

## 使用上下文

{{SVGInfo}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
