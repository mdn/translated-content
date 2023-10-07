---
title: touch-action
slug: Web/CSS/touch-action
---

{{CSSRef}}

CSS 属性 **`touch-action`** 用于设置触摸屏用户如何操纵元素的区域 (例如，浏览器内置的缩放功能)。

```css
/* Keyword values */
touch-action: auto;
touch-action: none;
touch-action: pan-x;
touch-action: pan-left;
touch-action: pan-right;
touch-action: pan-y;
touch-action: pan-up;
touch-action: pan-down;
touch-action: pinch-zoom;
touch-action: manipulation;

/* Global values */
touch-action: inherit;
touch-action: initial;
touch-action: unset;
```

{{cssinfo}}

默认情况下，平移（滚动）和缩放手势由浏览器专门处理。使用 {{domxref("Pointer_events")}} 的应用程序将在浏览器开始处理触摸手势时收到一个 [pointercancel](/zh-CN/docs/Web/Events/pointercancel) 事件。通过明确指定浏览器应该处理哪些手势，应用程序可以在 [pointermove](/zh-CN/docs/Web/CSS/Web/Events/pointermove) 和 [pointerup](/zh-CN/docs/Web/Events/pointerup) 监听器中为其余的手势提供自己的行为。使用 {{domxref("Touch_events")}} 的应用程序通过调用 {{domxref("Event.preventDefault","preventDefault()")}} 禁用浏览器处理手势，但也应使用**触摸操作**确保浏览器在调用任何事件侦听器之前，了解应用程序的意图。

当手势开始时，浏览器与触摸的元素及其所有祖先的**触摸动作**值相交直到一个实现手势（换句话说，第一个包含滚动元素）的**触摸动作**值。这意味着在实践中，**触摸动作**通常仅适用于具有某些自定义行为的单个元素，而无需在该元素的任何后代上明确指定**触摸动作**。手势开始之后，**触摸动作**值的更改将不会对当前手势的行为产生任何影响。

## 语法

touch-action 属性可以被指定为：

- 任何一个关键字 `auto`、`none`、`manipulation`，或
- 零或任何一个关键字 `pan-x`、`pan-left`、`pan-right`，加 零或任何一个关键字 `pan-y`、`pan-up`、`pan-down`，加可选关键字 [`pinch-zoom`](/zh-CN/docs/Web/CSS/touch-action#pinch-zoom).

### 值

- `auto`
  - : 当触控事件发生在元素上时，由浏览器来决定进行哪些操作，比如对 viewport 进行平滑、缩放等。
- `none`
  - : 当触控事件发生在元素上时，不进行任何操作。
- `pan-x`
  - : 启用单指水平平移手势。可以与 **pan-y**、**pan-up**、**pan-down** 和／或 **pinch-zoom** 组合使用。
- `pan-y`
  - : 启用单指垂直平移手势。可以与 **pan-x 、pan-left**、**pan-right** 和／或 **pinch-zoom** 组合使用。
- `manipulation`
  - : 浏览器只允许进行滚动和持续缩放操作。任何其他被 auto 值支持的行为不被支持。启用平移和缩小缩放手势，但禁用其他非标准手势，例如双击以进行缩放。禁用双击可缩放功能可减少浏览器在用户点击屏幕时延迟生成点击事件的需要。这是“**pan-x pan-y pinch-zoom**”（为了兼容性本身仍然有效）的别名。
- `pan-left`, `pan-right,pan-up,pan-down` {{experimental_inline}}
  - : 启用以指定方向滚动开始的单指手势。一旦滚动开始，方向可能仍然相反。请注意，滚动“向上”（**pan-up**）意味着用户正在将其手指向下拖动到屏幕表面上，同样 **pan-left** 表示用户将其手指向右拖动。多个方向可以组合，除非有更简单的表示（例如，“**pan-left pan-right**”无效，因为“**pan-x**”更简单，而“**pan-left pan-down**”有效）。
- `pinch-zoom`
  - : 启用多手指平移和缩放页面。这可以与任何平移值组合。

### 正式语法

{{csssyntax}}

## 示例

最常见的用法是禁用元素（及其不可滚动的后代）上的所有手势，以使用自己提供的拖放和缩放行为（如地图或游戏表面）。

```css
#map {
  touch-action: none;
}
```

另一种常见的模式是使用指针事件处理水平平移的图像轮播，但不想干扰网页的垂直滚动或缩放。

```css
.image-carousel {
  width: 100%;
  height: 150px;
  touch-action: pan-y pinch-zoom;
}
```

**触摸动作**也经常用于完全解决由支持双击缩放手势引起的点击事件的延迟。

```css
html {
  touch-action: manipulation;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 相关链接

- {{domxref("Pointer_events","Pointer Events")}}
- WebKit Blog [More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)
