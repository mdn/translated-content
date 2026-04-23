---
title: border-right-width
slug: Web/CSS/Reference/Properties/border-right-width
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-right-width`** 用于设置元素右边框的宽度。

{{InteractiveExample("CSS Demo: border-right-width")}}

```css interactive-example-choice
border-right-width: thick;
```

```css interactive-example-choice
border-right-width: 2em;
```

```css interactive-example-choice
border-right-width: 4px;
```

```css interactive-example-choice
border-right-width: 2ex;
```

```css interactive-example-choice
border-right-width: 0;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 语法

```css
/* 关键字值 */
border-right-width: thin;
border-right-width: medium;
border-right-width: thick;

/* <length> 值 */
border-right-width: 10em;
border-right-width: 3vmax;
border-right-width: 6px;

/* 全局关键字 */
border-right-width: inherit;
border-right-width: initial;
border-right-width: revert;
border-right-width: revert-layer;
border-right-width: unset;
```

### 值

- `<line-width>`
  - : 定义边框的宽度，明确的非负 {{cssxref("&lt;length&gt;")}} 值或者是关键字。如果它是关键字，则必须是以下值之一：
    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> 因为规范没有定义每个关键字表示的确切宽度，所以使用其中的某个关键字所得到的精确结果是特定于实现的。不过，它们通常遵循 `thin ≤ medium ≤ thick` 的模式，且这些值在单独的文档中是固定不变的。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 边框宽度对比

#### HTML

```html
<div>元素 1</div>
<div>元素 2</div>
```

#### CSS

```css
div {
  border: 1px solid red;
  margin: 1em 0;
}

div:nth-child(1) {
  border-right-width: thick;
}
div:nth-child(2) {
  border-right-width: 2em;
}
```

#### 结果

{{EmbedLiveSample('边框宽度对比', '100%')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他与 border-width 相关的 CSS 属性：{{Cssxref("border-bottom-width")}}、{{Cssxref("border-left-width")}}、{{Cssxref("border-top-width")}} 和 {{Cssxref("border-width")}}。
- 其他与 border-right 相关的 CSS 属性：{{Cssxref("border")}}、{{Cssxref("border-right")}}、{{Cssxref("border-right-style")}} 和 {{Cssxref("border-right-color")}}。
