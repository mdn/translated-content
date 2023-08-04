---
title: overflow-x
slug: Web/CSS/overflow-x
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`overflow-x`** 设置了当内容溢出块级元素的左右两侧时所显示的内容。可以不显示，或者显示滚动条或溢出内容。

{{EmbedInteractiveExample("pages/css/overflow-x.html")}}

## 语法

```css
/* 关键词值 */
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

`overflow-x` 属性可指定为下列关键词之一。

### 取值

- `visible`
  - : 内容不会被截断，且可以显示在内容盒之外。当 {{cssxref("overflow-y")}} 的值为 `hidden`、`scroll` 或者 `auto`，而本属性的值为 `visible` 时，本属性会被隐式的计算为 `auto`。
- `hidden`
  - : 内容会被截断，且不会显示滚动条。
- `scroll`
  - : 桌面浏览器总是显示滚动条，无论内容是否发生溢出。这可以避免滚动条的显示与消失所导致的元素尺寸不确定的问题。而打印机可能会打印溢出的内容。
- `auto`
  - : 取决于浏览器本身。当内容发生溢出时，桌面浏览器如 Firefox 会显示滚动条。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

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
    <code>overflow-x:visible</code>——按需在盒外显示文本
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

- 相关 CSS 属性：{{CSSXref("text-overflow")}}、{{CSSXref("white-space")}}、{{CSSXref("overflow")}}、{{CSSXref("overflow-y")}}、{{CSSXref("clip")}}、{{CSSXref("display")}}
