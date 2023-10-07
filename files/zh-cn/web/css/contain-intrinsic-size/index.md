---
title: contain-intrinsic-size
slug: Web/CSS/contain-intrinsic-size
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) **`contain-intrinsic-size`** 定义了元素受[尺寸局限](/zh-CN/docs/Web/CSS/CSS_containment#尺寸局限)时浏览器用于布局的元素尺寸。

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("contain-intrinsic-width")}}
- {{CSSXref("contain-intrinsic-height")}}

## 语法

```css
/* 关键词值 */
contain-intrinsic-width: none;

/* <length> 值 */
contain-intrinsic-size: 1000px;
contain-intrinsic-size: 10rem;

/* 宽度 | 高度 */
contain-intrinsic-size: 1000px 1.5em;

/* auto <length> */
contain-intrinsic-size: auto 300px;

/* auto 宽度 | auto 高度 */
contain-intrinsic-size: auto 300px auto 4rem;

/* 全局值 */
contain-intrinsic-size: inherit;
contain-intrinsic-size: initial;
contain-intrinsic-size: revert;
contain-intrinsic-size: unset;
```

### 取值

可为元素指定下列值中的一个或两个。若指定两值，则第一个值应用于宽度，第二个应用于高度。若指定一值，则同时应用于宽度和高度。

- `none`
  - : 元素在所给方向上无固有尺寸。
- `<length>`
  - : 元素在所给方向上具有指定尺寸（{{CSSXref("&lt;length&gt;")}}）。
- `auto <length>`
  - : 若存在“正常渲染”的元素尺寸且元素正在跳过其内容（例如在屏外时），则为此尺寸的记忆值；否则为指定的 `<length>`。

## 描述

此属性的应用常常伴随如 {{CSSXref("contain", "contain: size")}} 和 {{CSSXref("content-visibility")}} 等可触发尺寸局限的要素。

尺寸局限允许用户代理将元素视为具有固定尺寸进行布局。由此避免为确定实际尺寸而重渲子元素，阻止不必要的重排（进而改善用户体验）。尺寸局限默认将元素视为不包含内容，且可按与内容无宽度或高度相同的方式折叠布局。`contain-intrinsic-size` 允许作者为布局所用的宽度指定合适的值。

`auto <length>` 值允许元素“被正常渲染”（包括其子元素）后存储其尺寸，再在元素不包含任何内容时使用此尺寸而非指定长度。由此允许有 {{CSSXref("content-visibility", "content-visibility: auto")}} 的屏外元素无需开发者精确估计元素尺寸即可受益于尺寸局限。在子元素渲染时，不使用记忆值（若启用尺寸局限，则将使用 `<length>`）。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置固有尺寸

此示例提供了可用于修改元素的 `contain-intrinsic-size`、`content-visibility` 和 `contain` 的选项列表，以此观察不同设置的效果。

#### CSS

```css
#contained_element {
  border: 2px solid green;
  width: 120px;
}
.child_element {
  border: 1px solid red;
  background: blue;
  height: 50px;
  width: 150px;
}
```

#### JavaScript

下列代码根据所选选项在包含元素上添加或移除样式。

```js
const containedElement = document.querySelector("#contained_element");
const intrinsicSizeSelector = document.querySelector(
  "#contain_intrinsic_size_selector",
);
const containSelector = document.querySelector("#contain_selector");
const contentVisibilitySelector = document.querySelector(
  "#content_visibility_selector",
);

containedElement.style["contain-intrinsic-size"] =
  intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
containedElement.style["contain"] =
  containSelector.options[containSelector.selectedIndex].text;
containedElement.style["content-visibility"] =
  contentVisibilitySelector.options[
    contentVisibilitySelector.selectedIndex
  ].text;

intrinsicSizeSelector.addEventListener("change", () => {
  containedElement.style["contain-intrinsic-size"] =
    intrinsicSizeSelector.options[intrinsicSizeSelector.selectedIndex].text;
});

containSelector.addEventListener("change", () => {
  containedElement.style["contain"] =
    containSelector.options[containSelector.selectedIndex].text;
});

contentVisibilitySelector.addEventListener("change", () => {
  containedElement.style["content-visibility"] =
    contentVisibilitySelector.options[
      contentVisibilitySelector.selectedIndex
    ].text;
});
```

#### HTML

此 HTML 代码定义了两个按钮和一个通过 `content-visibility` 属性受局限的包含元素。

```html
<p>
  <label for="contain_intrinsic_size_selector">contain-intrinsic-size:</label>
  <select id="contain_intrinsic_size_selector">
    <option>none</option>
    <option>40px 130px</option>
    <option>auto 40px auto 130px</option></select
  >;<br />

  <label for="contain_selector">contain:</label>
  <select id="contain_selector">
    <option>none</option>
    <option>size</option>
    <option>strict</option></select
  >;<br />

  <label for="content_visibility_selector">content-visibility:</label>
  <select id="content_visibility_selector">
    <option>visible</option>
    <option>auto</option>
    <option>hidden</option></select
  >;
</p>

<div id="contained_element">
  <div class="child_element"></div>
</div>
```

#### 结果

使用选项将所给样式应用于包含元素 `div`。注意到当 `content-visibility` 为 `visible` 或 `auto` 时，改变 `contain-intrinsic-size` 不会产生区别。然而若内容被隐藏，`none` 值的 `contain-intrinsic-size` 使子元素被视为无尺寸且使父元素被折叠。

{{EmbedLiveSample("设置固有尺寸", "100%", 170)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [content-visibility：提高渲染性能的新 CSS 属性](https://web.dev/content-visibility/)（web.dev）
- {{CSSXref("contain-intrinsic-block-size")}}
- {{CSSXref("contain-intrinsic-inline-size")}}
