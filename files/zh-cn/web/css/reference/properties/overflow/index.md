---
title: overflow
slug: Web/CSS/Reference/Properties/overflow
---

**`overflow`** 是 [CSS](/zh-CN/docs/Web/CSS) 的[简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)，其设置了元素溢出时所需的行为——即当元素的内容太大而无法适应它的[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)时。

{{InteractiveExample("CSS Demo: overflow")}}

```css interactive-example-choice
overflow: visible;
```

```css interactive-example-choice
overflow: hidden;
```

```css interactive-example-choice
overflow: clip;
```

```css interactive-example-choice
overflow: scroll;
```

```css interactive-example-choice
overflow: auto;
```

```html interactive-example
<section class="default-example" id="default-example">
  <p id="example-element">
    Michaelmas term lately over, and the Lord Chancellor sitting in Lincoln's
    Inn Hall. Implacable November weather. As much mud in the streets as if the
    waters had but newly retired from the face of the earth.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 15em;
  height: 9em;
  border: medium dotted;
  padding: 0.75em;
  text-align: left;
}
```

## 构成的属性

这个属性是以下 CSS 属性的简写：

- [`overflow-x`](/zh-CN/docs/Web/CSS/Reference/Properties/overflow-x)
- [`overflow-y`](/zh-CN/docs/Web/CSS/Reference/Properties/overflow-y)

## 语法

```css
/* Keyword values */
overflow: visible;
overflow: hidden;
overflow: clip;
overflow: scroll;
overflow: auto;
overflow: hidden visible;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: revert;
overflow: revert-layer;
overflow: unset;
```

从下面列表中指定一个或者两个关键字来作为 `overflow` 属性。如果指定两个关键字，第一个关键字用于 `overflow-x`，第二个关键字用于 `overflow-y`。否则，`overflow-x` 和 `overflow-y` 设置为相同的属性值。

### 值

- `visible`
  - : 内容不能被裁减并且可能渲染到边距盒（padding）的外部。
- `hidden`
  - : 如果需要，内容将被裁减以适应边距（padding）盒。不提供滚动条，也不支持允许用户滚动（例如通过拖拽或者使用滚轮）。内容*可以*以编程的方式滚动（例如，通过设置 {{domxref("Element.scrollLeft", "scrollLeft")}} 等属性的值或 {{domxref("Element.scrollTo", "scrollTo()")}} 方法）, 因此该元素仍然是一个滚动的容器。
- `clip`
  - : 类似于 `hidden`，内容将以元素的边距（padding）盒进行裁剪。`clip` 和 `hidden` 之间的区别是 `clip` 关键字禁止所有滚动，包括以编程方式的滚动。该盒子不是一个滚动的容器，并且不会启动新的格式化上下文。如果你希望开启一个新的格式化上下文，你可以使用 {{cssxref("display", "display: flow-root", "#flow-root")}} 来这样做。
- `scroll`
  - : 如果需要，内容将被裁减以适应边距（padding）盒。无论是否实际裁剪了任何内容，浏览器总是显示滚动条，以防止滚动条在内容改变时出现或者消失。打印机可能会打印溢出的内容。
- `auto`
  - : 取决于{{Glossary("user agent", "用户代理")}}。如果内容适应边距（padding）盒，它看起来与 `visible` 相同，但是仍然建立了一个新的块级格式化上下文。如果内容溢出，则浏览器提供滚动条。
- `overlay` {{deprecated_inline}}
  - : 行为与 `auto` 相同，但是滚动条绘制在内容之上，而不是占据空间。

#### Mozilla 扩展

- `-moz-scrollbars-none` {{deprecated_inline}}
  - : 请使用 `overflow: hidden` 代替。
- `-moz-scrollbars-horizontal` {{deprecated_inline}}
  - : 请使用 `{{Cssxref("overflow-x")}}: scroll` 和 `{{Cssxref("overflow-y")}}: hidden`，或使用 `overflow: scroll hidden` 代替。
- `-moz-scrollbars-vertical` {{deprecated_inline}}
  - : 请使用 `{{Cssxref("overflow-x")}}: hidden` 和 `{{Cssxref("overflow-y")}}: scroll`，或使用 `overflow: hidden scroll` 代替。
- `-moz-hidden-unscrollable` {{deprecated_inline}}
  - : 请使用 `overflow: clip` 代替。

在 Firefox 63 中：`-moz-scrollbars-none`、`-moz-scrollbars-horizontal` 和 `-moz-scrollbars-vertical` 位于特性首选项中。即需要在 about:config 中，将 `layout.css.overflow.moz-scrollbars.enabled` 设置为 `true`。

## 描述

overflow 选项包括裁减、显示滚动条，或者显示从容器流向周围区域的内容。

指定 `visible`（默认）或 `clip` 以外的值，会创建一个新的[区块格式化上下文](/zh-CN/docs/Web/CSS/Guides/Display/Block_formatting_context)。由于技术原因，这是必要的——如果浮动包含滚动元素，它将在每个滚动步骤后强制重新包装内容，从而导致一个缓慢的滚动体验。

为使 `overflow` 具有效果，块级水平的容器必须有一个设定的高度（`height` 或 `max-height`）或 `white-space` 设置为 `nowrap`。

设置一个轴为 `visible`（默认值），而设置另一个轴为*不同的*值时，`visible` 的行为会像 `auto` 一样。

JavaScript 的 {{domxref("Element.scrollTop")}} 属性可用于滚动 HTML 元素，即使当 `overflow` 设置为 `hidden` 时。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为文本设置不同的 overflow 值

#### HTML

```html
<div>
  <code>visible</code>
  <p class="visible">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>hidden</code>
  <p class="hidden">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>scroll</code>
  <p class="scroll">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>

<div>
  <code>auto</code>
  <p class="auto">
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
    doloremque laudantium.
  </p>
</div>
```

#### CSS

```css
body {
  display: flex;
  justify-content: space-around;
}

div {
  margin: 1em;
  font-size: 1.2em;
}

p {
  width: 8em;
  height: 5em;
  border: dotted;
}

p.visible {
  overflow: visible;
}

p.hidden {
  overflow: hidden;
}

p.scroll {
  overflow: scroll;
}

p.auto {
  overflow: auto;
}
```

#### 结果

{{EmbedLiveSample("为文本设置不同的 overflow 值", "600", "250")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{cssxref("text-overflow")}}、{{cssxref("white-space")}}、{{Cssxref("overflow-x")}}、{{Cssxref("overflow-y")}}、{{Cssxref("overflow-inline")}}、{{Cssxref("overflow-block")}}、{{Cssxref("clip")}}、{{Cssxref("display")}}
- [CSS Overflow](/zh-CN/docs/Web/CSS/Guides/Overflow) 和 [Debug scrollable overflow](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/debug_scrollable_overflow/index.html)
