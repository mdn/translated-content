---
title: border-top
slug: Web/CSS/Reference/Properties/border-top
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`border-top`** 用于设置元素上[边框](/zh-CN/docs/Web/CSS/Reference/Properties/border)的所有属性。

{{InteractiveExample("CSS 演示：border-top")}}

```css interactive-example-choice
border-top: solid;
```

```css interactive-example-choice
border-top: dashed red;
```

```css interactive-example-choice
border-top: 1rem solid;
```

```css interactive-example-choice
border-top: thick double #32a1ce;
```

```css interactive-example-choice
border-top: 4mm ridge rgb(211 220 50 / 0.6);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    这是一个带有边框的盒子。
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: darkmagenta;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

与所有简写属性一样，`border-top` 总是会设置它能够设置的所有属性的值，即使这些属性在代码中没有被显式指定。对于未指定的属性，它会将其设置为默认值。参见下面给出的代码示例：

```css
border-top-style: dotted;
border-top: thick green;
```

它实际上与下面这段代码相同：

```css
border-top-style: dotted;
border-top: none thick green;
```

在 `border-top` 之前指定的 {{cssxref("border-top-style")}} 值会被忽略。由于 {{cssxref("border-top-style")}} 的默认值是 `none`，因此在简写属性中没有指定 `border-style` 部分，就不会显示边框。

## 组成属性

此属性是以下 CSS 属性的简写形式：

- [`border-top-color`](/zh-CN/docs/Web/CSS/Reference/Properties/border-top-color)
- [`border-top-style`](/zh-CN/docs/Web/CSS/Reference/Properties/border-top-style)
- [`border-top-width`](/zh-CN/docs/Web/CSS/Reference/Properties/border-top-width)

## 语法

```css
border-top: 1px;
border-top: 2px dotted;
border-top: medium dashed green;

/* 全局值 */
border-top: inherit;
border-top: initial;
border-top: revert;
border-top: revert-layer;
border-top: unset;
```

简写属性的三个值可以按任意顺序指定，并可省略其中的一到两个值。

### 值

- `<br-width>`
  - : 参见 {{cssxref("border-top-width")}}。
- `<br-style>`
  - : 参见 {{cssxref("border-top-style")}}。
- {{cssxref("&lt;color&gt;")}}
  - : 参见 {{cssxref("border-top-color")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 应用上边框

#### HTML

```html
<div>这个盒子在上边有一个边框。</div>
```

#### CSS

```css
div {
  border-top: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

#### 结果

{{EmbedLiveSample('应用上边框')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`border`](/zh-CN/docs/Web/CSS/Reference/Properties/border)
- [`border-block`](/zh-CN/docs/Web/CSS/Reference/Properties/border-block)
- [`outline`](/zh-CN/docs/Web/CSS/Reference/Properties/outline)
