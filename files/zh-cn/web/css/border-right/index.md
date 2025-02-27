---
title: border-right
slug: Web/CSS/border-right
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**`border-right`** [CSS](/zh-CN/docs/Web/CSS) [简写](/zh-CN/docs/Web/CSS/Shorthand_properties)属性用于设置元素右[边框](/zh-CN/docs/Web/CSS/border)的所有属性。

{{EmbedInteractiveExample("pages/css/border-right.html")}}

与所有简写属性一样，`border-right` 始终设置它可以设置的所有属性的值，即使这些属性未被明确指定。它将那些未指定的值设置为默认值。请看下面的代码：

```css
border-right-style: dotted;
border-right: thick green;
```

实际上，它和这个是一样的：

```css
border-right-style: dotted;
border-right: none thick green;
```

在 `border-right` 之前给定的 {{cssxref("border-right-style")}} 的值将被忽略。由于 {{cssxref("border-right-style")}} 的默认值是 `none`，如果没有指定 `border-style` 部分，则不会显示边框。

## 组成属性

该属性为以下 CSS 属性的简写：

- {{cssxref("border-right-color")}}
- {{cssxref("border-right-style")}}
- {{cssxref("border-right-width")}}

## 语法

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;

/* 全局值 */
border-right: inherit;
border-right: initial;
border-right: revert;
border-right: revert-layer;
border-right: unset;
```

简写属性的三个值可以任意顺序指定，也可以省略其中的一个或两个值。

### 值

- `<br-width>`
  - : 参见 {{cssxref("border-right-width")}}。
- `<br-style>`
  - : 参见 {{cssxref("border-right-style")}}。
- {{cssxref("&lt;color&gt;")}}
  - : 参见 {{cssxref("border-right-color")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用右侧边框

#### HTML

```html
<div>这个盒子在右侧有一个边框。</div>
```

#### CSS

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### 结果

{{EmbedLiveSample('应用右侧边框')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("border")}}
- {{cssxref("border-block")}}
- {{cssxref("outline")}}
