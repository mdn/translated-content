---
title: contain-intrinsic-block-size
slug: Web/CSS/contain-intrinsic-block-size
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [逻辑属性](/zh-CN/docs/Web/CSS/CSS_Logical_Properties) **`contain-intrinsic-block-size`** 定义了元素受[尺寸局限](/zh-CN/docs/Web/CSS/CSS_Containment#尺寸局限)时浏览器用于布局的元素块向尺寸。

块向尺寸为元素在垂直于行内文本流的方向上的尺寸。在如标准英文等横向{{CSSXref("writing-mode", "书写模式")}}中，块向尺寸为纵向尺度（高度）；在纵向书写模式中，块向尺寸为横向尺度。

## 语法

```css
/* 关键词值 */
contain-intrinsic-block-size: none;

/* 长度值 */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto 长度 */
contain-intrinsic-block-size: auto 300px;

/* 全局值 */
contain-intrinsic-block-size: inherit;
contain-intrinsic-block-size: initial;
contain-intrinsic-block-size: revert;
contain-intrinsic-block-size: revert-layer;
contain-intrinsic-block-size: unset;
```

### 取值

元素的固有块向尺寸可指定为下列值：

- `none`
  - : 元素无固有块向尺寸。
- `长度`
  - : 元素具有指定的块向尺寸，以{{CSSXref("&lt;length&gt;", "长度")}}数据类型表示。
- `auto 长度`
  - : 当元素在尺寸局限中且正在跳过其内容（例如元素在屏外且设置了 `content-visibility: auto`）时，块向尺寸为记忆值——即元素在上次渲染其子元素时的实际尺寸。若元素从未渲染其子元素导致无正常渲染时的元素尺寸的记忆值，或者元素未在跳过其内容，块向尺寸为指定的`长度`。

## 描述

The property is commonly applied alongside elements that can trigger size containment, such as [`contain: size`](/en-US/docs/Web/CSS/contain) and [`content-visibility`](/en-US/docs/Web/CSS/content-visibility).

Size containment allows a user agent to lay out an element as though it had a fixed size.
This prevents unnecessary reflows by avoiding the re-rendering of child elements to determine the actual size (thereby improving user experience).
By default, size containment treats elements as though they had no contents and may collapse the layout in the same way as if the contents had no width or height.
The `contain-intrinsic-block-size` property allows authors to specify an appropriate value to be used as the block-size for layout.

The `auto <length>` value allows the block-size of an element to be stored if the element is ever "normally rendered" (with its child elements) and then used instead of the specified value when the element does not have any content.
This allows offscreen elements with [`content-visibility: auto`](/en-US/docs/Web/CSS/content-visibility) to benefit from size containment without developers having to be precise in their estimates of element size.
The remembered value is not used if the child elements are being rendered; if size containment is enabled, the `<length>` value will be used.

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置固有块向尺寸

下列 HTML 代码定义了将受尺寸限制的元素“contained_element”，此元素包含一个子元素。

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

下列 CSS 代码将 `contained_element` 的 {{CSSXref("content-visibility")}} 设置为 `auto`，故若元素被隐藏则将受尺寸限制。此元素受尺寸限制时所用的固有块向和行向尺寸分别使用 `contain-intrinsic-block-size` 和 `contain-intrinsic-inline-size` 同时设置。

```css
#contained_element {
  border: 2px solid green;
  inline-size: 151px;
  content-visibility: auto;
  contain-intrinsic-inline-size: 152px;
  contain-intrinsic-block-size: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  block-size: 50px;
  inline-size: 150px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [content-visibility: the new CSS property that boosts your rendering performance](https://web.dev/content-visibility/)（web.dev）
- {{CSSXref("contain-intrinsic-inline-size")}}
- {{CSSXref("contain-intrinsic-size")}}
- {{CSSXref("contain-intrinsic-width")}}
- {{CSSXref("contain-intrinsic-height")}}
