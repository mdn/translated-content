---
title: contain-intrinsic-width
slug: Web/CSS/Reference/Properties/contain-intrinsic-width
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`contain-intrinsic-width`** 定义了元素受[尺寸局限](/zh-CN/docs/Web/CSS/Guides/Containment#尺寸局限)时浏览器用于布局的元素宽度。

## 语法

```css
/* 关键词值 */
contain-intrinsic-width: none;

/* <length> 值 */
contain-intrinsic-width: 1000px;
contain-intrinsic-width: 10rem;

/* auto <length> */
contain-intrinsic-width: auto 300px;

/* 全局值 */
contain-intrinsic-width: inherit;
contain-intrinsic-width: initial;
contain-intrinsic-width: revert;
contain-intrinsic-width: revert-layer;
contain-intrinsic-width: unset;
```

### 取值

可为元素指定下列值。

- `none`
  - : 元素无固有宽度。
- `<length>`
  - : 元素具有指定宽度（{{CSSXref("&lt;length&gt;")}}）。
- `auto <length>`
  - : 若存在“正常渲染”的元素宽度且元素正在跳过其内容（例如在屏外时），则为此宽度的记忆值；否则为指定的 `<length>`。

## 描述

此属性的应用常常伴随如 {{CSSXref("contain", "contain: size")}} 和 {{CSSXref("content-visibility")}} 等可触发尺寸局限的要素，且亦可使用[简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties) {{CSSXref("contain-intrinsic-size")}} 设置。

尺寸局限允许用户代理将元素视为具有固定尺寸进行布局。由此避免为确定实际尺寸而重渲子元素，阻止不必要的重排（进而改善用户体验）。尺寸局限默认将元素视为不包含内容，且可按与内容无宽度或高度相同的方式折叠布局。`contain-intrinsic-width` 允许作者为布局所用的宽度指定合适的值。

`auto <length>` 值允许元素“被正常渲染”（包括其子元素）后存储其宽度，再在元素不包含任何内容时使用此宽度而非指定宽度。由此允许有 {{CSSXref("content-visibility", "content-visibility: auto")}} 的屏外元素无需开发者精确估计元素尺寸即可受益于尺寸局限。在子元素渲染时，不使用记忆值（若启用尺寸局限，则将使用 `<length>`）。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

除下列示例外，{{CSSXref("contain-intrinsic-size")}} 页面含有演示修改固有宽度和高度的效果的运行实例。

### 设置固有宽度

下列 HTML 代码定义了将受尺寸限制的元素“contained_element”，此元素包含一个子元素。

```html
<div id="contained_element">
  <div class="child_element"></div>
</div>
```

下列 CSS 代码将 `contained_element` 的 {{CSSXref("content-visibility")}} 设置为 `auto`，故若元素被隐藏则将受尺寸限制。此元素受尺寸限制时所用的宽度和高度分别使用 `contain-intrinsic-width` 和 `contain-intrinsic-height` 同时设置。

```css
#contained_element {
  border: 2px solid green;
  width: 151px;
  content-visibility: auto;
  contain-intrinsic-width: 152px;
  contain-intrinsic-height: 52px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [content-visibility：提高渲染性能的新 CSS 属性](https://web.developers.google.cn/articles/content-visibility)（web.developers.google.cn）
- {{CSSXref("contain-intrinsic-size")}}
- {{CSSXref("contain-intrinsic-height")}}
- {{CSSXref("contain-intrinsic-block-size")}}
- {{CSSXref("contain-intrinsic-inline-size")}}
