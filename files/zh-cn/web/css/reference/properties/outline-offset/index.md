---
title: outline-offset
slug: Web/CSS/Reference/Properties/outline-offset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`outline-offset`** 设置[轮廓](/zh-CN/docs/Web/CSS/Reference/Properties/outline)与元素边缘或边框之间的间距。

{{InteractiveExample("CSS 演示：outline-offset")}}

```css interactive-example-choice
outline-offset: 4px;
```

```css interactive-example-choice
outline-offset: 0.6rem;
```

```css interactive-example-choice
outline-offset: 12px;
outline: 5px dashed blue;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    这是一个带有轮廓线框的盒子。
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 2px solid crimson;
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 语法

```css
/* <length> 值 */
outline-offset: 3px;
outline-offset: 0.2em;

/* 全局值 */
outline-offset: inherit;
outline-offset: initial;
outline-offset: revert;
outline-offset: revert-layer;
outline-offset: unset;
```

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 元素与其轮廓线之间的间距宽度。负值会将轮廓线置于元素内部。当值为 `0` 时，轮廓线与元素之间没有间距。

## 描述

轮廓线是绘制在元素周围、边框边缘之外的一条线。元素与其轮廓线之间的空间是透明的。换句话说，它与父元素具有相同的背景。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 以像素为单位设置轮廓线偏移

#### HTML

```html
<p>这是一段文本，这是一段文本。</p>
```

#### CSS

```css
p {
  outline: 1px dashed red;
  outline-offset: 10px;
  background: yellow;
  border: 1px solid blue;
  margin: 15px;
}
```

#### 结果

{{EmbedLiveSample('以像素为单位设置轮廓线偏移')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("outline")}}
- {{cssxref("outline-width")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-color")}}
