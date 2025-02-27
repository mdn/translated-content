---
title: overflow-x
slug: Web/CSS/overflow-x
l10n:
  sourceCommit: f89df1bb60b0d71d3e41bf5b1c0d8cb4eac45a27
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-x`** 设置当内容溢出块级元素的左右两侧时所显示的内容。可以不显示，或显示滚动条，或显示溢出内容。也可以使用 [`overflow`](/zh-CN/docs/Web/CSS/overflow) 简写属性来设置该属性。

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## 语法

```css
/* 关键字值 */
overflow-x: visible;
overflow-x: hidden;
overflow-x: clip;
overflow-x: scroll;
overflow-x: auto;

/* 全局值 */
overflow-x: inherit;
overflow-x: initial;
overflow-x: revert;
overflow-x: revert-layer;
overflow-x: unset;
```

`overflow-x` 属性可指定为下列 {{CSSXref("overflow_value", "&lt;overflow&gt;")}} 关键字值之一。

当 {{cssxref("overflow-y")}} 的值为 `hidden`、`scroll` 或者 `auto`，而 `overflow-x` 属性的值为 `visible`（默认值）时，该值会被隐式地计算为 `auto`。

### 取值

- `visible`
  - : 溢出的内容不会被截断，且可以显示在元素边距（padding）框的左右边缘之外。元素盒子不是{{glossary("scroll container", "滚动容器")}}。
- `hidden`
  - : 如有必要，溢出的内容会被截断以从水平方向适应元素的边距框，不会显示滚动条。
- `clip`
  - : 在*溢出截断边缘*（使用 [`overflow-clip-margin`](/zh-CN/docs/Web/CSS/overflow-clip-margin) 属性定义）上的溢出内容会被截断。即，距元素内边距框指定宽度（为 `overflow-clip-margin` 的 {{cssxref("&lt;length&gt;")}} 值，若未设置则为 `0px`）范围内的内容会溢出。`clip` 和 `hidden` 的区别是 `clip` 关键字还禁止所有滚动，包括程序性滚动（programmatic scrolling）。其不会创建新的格式化上下文。如果要创建新的格式化上下文，请将 `overflow: clip` 与 {{cssxref("display", "display: flow-root", "#flow-root")}} 一起使用。元素盒子不是滚动容器。
- `scroll`
  - : 如有必要，溢出的内容会被截断以从水平方向适应元素的边距框。无论内容是否发生溢出，浏览器总是显示滚动条。（这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。）而打印机可能会打印溢出的内容。
- `auto`
  - : 元素边距框中的溢出内容会被截断，且溢出内容可通过滚动以进行浏览。与 `scroll` 关键字值不同的是，用户代理*只在*内容溢出时显示滚动条，默认不会显示滚动条。如果内容可以适应元素的边距框，则看起来与 `visible` 相同，但仍然会创建新的区块格式化上下文。桌面浏览器会在内容溢出时显示滚动条。

> [!NOTE]
> 关键字值 `overlay` 是 `auto` 的一个遗留别名。使用 `overlay` 时，滚动条会绘制在内容上方，而不占用空间。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### HTML

```html
<ul>
  <li>
    <code>overflow-block:hidden</code>——在盒外隐藏文本
    <div id="div1">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-block:scroll</code>——总是添加滚动条
    <div id="div2">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:visible</code>——必要时在盒外显示文本
    <div id="div3">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>

  <li>
    <code>overflow-x:auto</code>——在多数浏览器上等价于 <code>scroll</code>
    <div id="div4">ABCDEFGHIJKLMOPQRSTUVWXYZABCDEFGHIJKLMOPQRSTUVWXYZ</div>
  </li>
</ul>
```

### CSS

```css
#div1,
#div2,
#div3,
#div4 {
  border: 1px solid black;
  width: 250px;
  margin-bottom: 12px;
}

#div1 {
  overflow-x: hidden;
}
#div2 {
  overflow-x: scroll;
}
#div3 {
  overflow-x: visible;
}
#div4 {
  overflow-x: auto;
}
```

### 结果

{{EmbedLiveSample("示例", "100%", "270")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{Cssxref("clip")}}、{{Cssxref("display")}}、{{cssxref("text-overflow")}}、{{cssxref("white-space")}}
- [CSS 溢出](/zh-CN/docs/Web/CSS/CSS_overflow)模块
- [CSS 构建：溢出的内容](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Overflow)
