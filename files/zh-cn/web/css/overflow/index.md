---
title: overflow
slug: Web/CSS/overflow
---
{{ CSSRef() }}

CSS 属性 **overflow** 定义当一个元素的内容太大而无法适应 [块级格式化上下文](/zh-CN/docs/CSS/block_formatting_context) 时候该做什么。它是 {{cssxref("overflow-x")}} 和{{cssxref("overflow-y")}}的 [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)。

{{EmbedInteractiveExample("pages/css/overflow.html")}}

这个选项包含剪切，显示滚动条，或者显示 从容器溢出到周围区域的内容。

指定除`visible`(默认值) 以外的值将创建一个新的 [块级格式化上下文](/zh-CN/docs/CSS/block_formatting_context). 这在技术层面上是必须的——如果一个浮动元素和滚动条相交，它会在每个滚动步骤后强行重新包装内容，从而导致慢滚动体验。

为使 `overflow` 有效果，块级容器必须有一个指定的高度（`height`或者`max-height`）或者将`white-space`设置为`nowrap`。

> **备注：** 设置一个轴为`visible`（默认值），同时设置另一个轴为不同的值，会导致设置`visible`的轴的行为会变成`auto`。

> **备注：** 即使将 overflow 设置为 hidden，也可以使用 JavaScript {{domxref("Element.scrollTop")}} 属性来滚动 HTML 元素。

## 语法

```css
/* 默认值。内容不会被修剪，会呈现在元素框之外 */
overflow: visible;

/* 内容会被修剪，并且其余内容不可见 */
overflow: hidden;

/* 内容会被修剪，浏览器会显示滚动条以便查看其余内容 */
overflow: scroll;

/* 由浏览器定夺，如果内容被修剪，就会显示滚动条 */
overflow: auto;

/* 规定从父元素继承 overflow 属性的值 */
overflow: inherit;
```

从下面列表中选出一个或两个关键字来指定`overflow` 属性。如果指定了两个关键字，第一个关键字应用于`overflow-x`，第二个关键字应用于`overflow-y`。否则，`overflow-x`和`overflow-y`都设置为相同的值。

> **备注：** 在 Firefox 63 之前，这些值是反向的，第一个值应用于`overflow-y`，第二个值应用于`overflow-x`。Firefox 63 更新了这个顺序，以匹配对[规范的更改](https://www.fxsitecompat.com/en-CA/docs/2018/overflow-shorthand-syntax-has-been-updated-to-swap-2-values/)。此更改是为了匹配使用新逻辑属性`overflow-block`和`overflow-inline`时的顺序。

```
overflow-x: scroll;
overflow-y: hidden;
/* On Firefox 61 and 62, this is the same as */
overflow: hidden scroll;
/* But on Firefox 63 and later, it will be */
overflow: scroll hidden;
```

### 值

- `visible`
  - : 默认值。内容不会被修剪，可以呈现在元素框之外。
- `hidden`
  - : 如果需要，内容将被剪裁以适合填充框。不提供滚动条。
- `scroll`
  - : 如果需要，内容将被剪裁以适合填充框。浏览器显示滚动条，无论是否实际剪切了任何内容。 （这可以防止滚动条在内容更改时出现或消失。）打印机仍可能打印溢出的内容。
- `auto`
  - : 取决于用户代理。如果内容适合填充框内部，则它看起来与可见内容相同，但仍会建立新的块格式化上下文。如果内容溢出，桌面浏览器会提供滚动条。
- `overlay` {{experimental_inline}} {{deprecated_inline}}
  - : 行为与`auto`相同，但滚动条绘制在内容之上而不是占用空间。仅在基于 WebKit（例如，Safari）和基于 Blink 的（例如，Chrome 或 Opera）浏览器中受支持。

#### Mozilla 扩展

- `-moz-scrollbars-none`{{Deprecated_Inline}}
  - : 使用 `overflow:hidden` 代替。
- `-moz-scrollbars-horizontal` {{ Deprecated_inline() }}
  - : 推荐使用 {{ Cssxref("overflow-x") }} 和 {{ Cssxref("overflow-y") }}。
- `-moz-scrollbars-vertical` {{ Deprecated_inline() }}
  - : 推荐使用 {{ Cssxref("overflow-x") }} 和 {{ Cssxref("overflow-y") }}。
- \-moz-hidden-unscrollable {{ non-standard_inline() }}
  - : 主要用于内部和主题。禁用 方向键 和 鼠标滚轮 来滚动 XML 跟元素以及\<HTML>和\<body>元素。

### 形式语法

{{csssyntax}}

## 示例

```css
p {
     width: 12em;
     height: 6em;
     border: dotted;
     overflow: visible; /* 内容不会被修剪 */
}
```

`visible` (default)
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```html
p { overflow: hidden; /* 不显示滚动条 */  }
```

`overflow: hidden`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```css
  p { overflow: scroll; /* 始终显示滚动条 */  }
```

`overflow: scroll`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

```html
p { overflow: auto; /* 必要时显示滚动条 */  }
```

`overflow: auto`
Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat("css.properties.overflow")}}

## See also

- Related CSS properties: {{cssxref("text-overflow")}}, {{cssxref("white-space")}}, {{Cssxref("overflow-x")}}, {{Cssxref("overflow-y")}}, {{Cssxref("clip")}}, {{Cssxref("display")}}
