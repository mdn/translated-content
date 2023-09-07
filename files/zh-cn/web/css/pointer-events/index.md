---
title: pointer-events
slug: Web/CSS/pointer-events
---

{{CSSRef}}

**`pointer-events`** CSS 属性指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 [target](/zh-CN/docs/Web/API/event.target)。

```css
/* Keyword values */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted; /* SVG only */
pointer-events: visibleFill; /* SVG only */
pointer-events: visibleStroke; /* SVG only */
pointer-events: visible; /* SVG only */
pointer-events: painted; /* SVG only */
pointer-events: fill; /* SVG only */
pointer-events: stroke; /* SVG only */
pointer-events: all; /* SVG only */

/* Global values */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
```

当此属性未指定时，`visiblePainted`值的相同特征适用于 SVG（可缩放矢量图形）内容。

除了指示该元素不是鼠标事件的目标之外，值`none`表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西。

{{cssinfo}}

## 语法

`pointer-events`属性被指定为从下面的值列表中选择的一个关键字。

### 值

- `auto`
  - : 与`pointer-events`属性未指定时的表现效果相同，对于 SVG 内容，该值与`visiblePainted`效果相同
- `none`
  - : 元素永远不会成为鼠标事件的[target](/zh-CN/docs/Web/API/event.target)。但是，当其后代元素的`pointer-events`属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。
- `visiblePainted`

  - : 只适用于 SVG。元素只有在以下情况才会成为鼠标事件的目标：

    - `visibility`属性值为`visible`，且鼠标指针在元素内部，且`fill`属性指定了`none`之外的值
    - `visibility`属性值为`visible`，鼠标指针在元素边界上，且`stroke`属性指定了`none`之外的值

- `visibleFill`
  - : 只适用于 SVG。只有在元素`visibility`属性值为`visible`，且鼠标指针在元素内部时，元素才会成为鼠标事件的目标，`fill`属性的值不影响事件处理。
- `visibleStroke`
  - : 只适用于 SVG。只有在元素`visibility`属性值为`visible`，且鼠标指针在元素边界时，元素才会成为鼠标事件的目标，`stroke`属性的值不影响事件处理。
- `visible`
  - : 只适用于 SVG。只有在元素`visibility`属性值为`visible`，且鼠标指针在元素内部或边界时，元素才会成为鼠标事件的目标，`fill`和`stroke`属性的值不影响事件处理。
- `painted`

  - : 只适用于 SVG。元素只有在以下情况才会成为鼠标事件的目标：

    - 鼠标指针在元素内部，且`fill`属性指定了`none`之外的值
    - 鼠标指针在元素边界上，且`stroke`属性指定了`none`之外的值

    `visibility`属性的值不影响事件处理。

- `fill`
  - : 只适用于 SVG。只有鼠标指针在元素内部时，元素才会成为鼠标事件的目标，`fill`和`visibility`属性的值不影响事件处理。
- `stroke`
  - : 只适用于 SVG。只有鼠标指针在元素边界上时，元素才会成为鼠标事件的目标，`stroke`和`visibility`属性的值不影响事件处理。
- `all`
  - : 只适用于 SVG。只有鼠标指针在元素内部或边界时，元素才会成为鼠标事件的目标，`fill`、`stroke`和`visibility`属性的值不影响事件处理。

## 示例

### 示例 1

```css
/* Example 1: Makes all the img non-reactive to any mouse events such as dragging, hovering, clicking etc */
img {
  pointer-events: none;
}
```

### 示例 2

点击链接 `http://example.com` 时，不会跳转

```html
<ul>
  <li><a href="https://developer.mozilla.org/">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

```css
a[href="http://example.com"]
{
  pointer-events: none;
}
```

{{EmbedLiveSample('示例 2', "500", "100")}}

## 提示

使用`pointer-events`来阻止元素成为鼠标事件目标不一定意味着元素上的事件侦听器永远不会触发。如果元素后代明确指定了`pointer-events`属性并允许其成为鼠标事件的目标，那么指向该元素的任何事件在事件传播过程中都将通过父元素，并以适当的方式触发其上的事件侦听器。当然，位于父元素但不在后代元素上的鼠标活动都不会被父元素和后代元素捕获（鼠标活动将会穿过父元素而指向位于其下面的元素）。

我们希望为 HTML 提供更为精细的控制（而不仅仅是`auto`和`none`），以控制元素哪一部分何时会捕获鼠标事件。如果你有独特的想法，请添加至[wiki 页面](https://wiki.mozilla.org/SVG:pointer-events)的 Use Cases 部分，以帮助我们如何针对 HTML 扩展`pointer-events`。

该属性也可用来提高滚动时的帧频。的确，当滚动时，鼠标悬停在某些元素上，则触发其上的 hover 效果，然而这些影响通常不被用户注意，并多半导致滚动出现问题。对`body`元素应用`pointer-events：none`，禁用了包括`hover`在内的鼠标事件，从而提高滚动性能。

## 规范

{{Specifications}}

Its extension to HTML elements, though present in early drafts of CSS Basic User Interface Module Level 3, has been pushed to its [level 4](http://wiki.csswg.org/spec/css4-ui#pointer-events).

## 浏览器兼容性

{{Compat}}

## 参见

- The SVG attribute {{SVGAttr("pointer-events")}}
- [WebKit Specs PointerEventsProperty](http://webkit.org/specs/PointerEventsProperty.html) extended for use in (X)HTML content
