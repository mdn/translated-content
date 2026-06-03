---
title: contain-intrinsic-block-size
slug: Web/CSS/Reference/Properties/contain-intrinsic-block-size
---

[CSS](/zh-CN/docs/Web/CSS) [逻辑属性](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values) **`contain-intrinsic-block-size`** 定义了元素受[尺寸局限](/zh-CN/docs/Web/CSS/Guides/Containment#尺寸局限)时浏览器用于布局的元素块向尺寸。

块向尺寸为元素在垂直于行内文本流的方向上的尺寸。在如标准英文等横向书写模式（{{CSSXref("writing-mode")}}）中，块向尺寸为纵向尺度（高度）；在纵向书写模式中，块向尺寸为横向尺度。

## 语法

```css
/* 关键词值 */
contain-intrinsic-block-size: none;

/* <length> 值 */
contain-intrinsic-block-size: 1000px;
contain-intrinsic-block-size: 10rem;

/* auto <length> */
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
- `<length>`
  - : 元素具有指定的块向尺寸，以 {{CSSXref("&lt;length&gt;")}} 数据类型表示。
- `auto <length>`
  - : 当元素在尺寸局限中且正在跳过其内容（例如元素在屏外且设置了 `content-visibility: auto`）时，块向尺寸为记忆值——即元素在上次渲染其子元素时的实际尺寸。若元素从未渲染其子元素导致无正常渲染时的元素尺寸的记忆值，或者元素未在跳过其内容，块向尺寸为指定的 `<length>`。

## 描述

此属性的应用常常伴随如 {{CSSXref("contain", "contain: size")}} 和 {{CSSXref("content-visibility")}} 等可触发尺寸局限的要素。

尺寸局限允许用户代理将元素视为具有固定尺寸进行布局。由此避免为确定实际尺寸而重渲子元素，阻止不必要的重排（进而改善用户体验）。尺寸局限默认将元素视为不包含内容，且可按与内容无宽度或高度相同的方式折叠布局。`contain-intrinsic-block-size` 允许作者为布局所用的块向尺寸指定合适的值。

`auto <length>` 值允许元素“被正常渲染”（包括其子元素）后存储其块向尺寸，再在元素不包含任何内容时使用此值而非指定值。由此允许有 {{CSSXref("content-visibility", "content-visibility: auto")}} 的屏外元素无需开发者精确估计元素尺寸即可受益于尺寸局限。在子元素渲染时，不使用记忆值；若启用尺寸局限，则将使用 `<length>` 值。

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

- [content-visibility：提高渲染性能的新 CSS 属性](https://web.developers.google.cn/articles/content-visibility)（web.developers.google.cn）
- {{CSSXref("contain-intrinsic-inline-size")}}
- {{CSSXref("contain-intrinsic-size")}}
- {{CSSXref("contain-intrinsic-width")}}
- {{CSSXref("contain-intrinsic-height")}}
