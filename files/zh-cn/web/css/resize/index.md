---
title: resize
slug: Web/CSS/resize
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`resize`** 用于设置元素是否可调整尺寸，以及可调整的方向。

{{EmbedInteractiveExample("pages/css/resize.html")}}

`resize` 不适用于下列元素：

- 内联元素
- {{CSSXref("overflow")}} 属性设置为 `visible` 的块元素

## 语法

```css
/* 关键词值 */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* 全局值 */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

`resize` 属性可指定为下列关键词值之一。

### 取值

- `none`
  - : 元素不提供用户可控的调整其尺寸的方法。
- `both`
  - : 元素显示可让用户调整其尺寸的机制，可沿水平和竖直方向调整尺寸。
- `horizontal`
  - : 元素显示可让用户沿*水平*方向调整其尺寸的机制。
- `vertical`
  - : 元素显示可让用户沿*竖直*方向调整其尺寸的机制。
- `block` {{experimental_inline}}
  - : 元素显示可让用户沿*块向*（水平或竖直方向之一，取决于 {{CSSXref("writing-mode")}} 和 {{CSSXref("direction")}} 的值）调整其尺寸的机制。
- `inline` {{experimental_inline}}
  - : 元素显示可让用户沿*行向*（水平或竖直方向之一，取决于 {{CSSXref("writing-mode")}} 和 {{CSSXref("direction")}} 的值）调整其尺寸的机制。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 禁用文本区域的尺寸调整

在很多浏览器中，{{HTMLElement("textarea")}} 元素默认可调整尺寸。你可以用 `resize` 属性改写此行为。

#### HTML

```html
<textarea>在此处输入一些文本。</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* 禁用尺寸调整 */
}
```

#### 结果

{{EmbedLiveSample("禁用文本区域的尺寸调整", "200", "100")}}

### 对任意元素使用 resize

你可以用 `resize` 属性使任意元素可调整尺寸。在下列示例中，一个可调整尺寸的 {{HTMLElement("div")}} 包含了一个可调整尺寸的段落（{{HTMLElement("p")}} 元素）。

#### HTML

```html
<div class="resizable">
  <p class="resizable">
    此段落可在各个方向上调整尺寸，这是因为在此元素上 CSS `resize` 属性设置为
    `both`。
  </p>
</div>
```

#### CSS

```css
.resizable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### 结果

{{EmbedLiveSample("对任意元素使用_resize", "450", "450")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTMLElement("textarea")}}
