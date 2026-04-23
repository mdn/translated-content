---
title: block-size
slug: Web/CSS/Reference/Properties/block-size
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`block-size`** 根据元素的书写模式定义了元素块的横向或纵向尺寸。根据 {{CSSXref("writing-mode")}} 的值，此属性对应于 {{CSSXref("width")}} 或 {{CSSXref("height")}} 属性。

若为纵向书写模式，则 `block-size` 的值对应于元素的宽度；否则对应于元素的高度。与此相关的属性为 {{CSSXref("inline-size")}}，此属性定义了元素另一方向的尺度。

{{InteractiveExample("CSS Demo: block-size")}}

```css interactive-example-choice
block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
block-size: auto;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
block-size: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the block-size.
  </div>
</section>
```

```css interactive-example
#example-element {
  display: flex;
  flex-direction: column;
  background-color: #5b6dcd;
  justify-content: center;
  color: #ffffff;
}
```

## 语法

```css
/* <length> 值 */
block-size: 300px;
block-size: 25em;

/* <percentage> 值 */
block-size: 75%;

/* 关键词值 */
block-size: max-content;
block-size: min-content;
block-size: fit-content(20em);
block-size: auto;

/* 全局值 */
block-size: inherit;
block-size: initial;
block-size: revert;
block-size: revert-layer;
block-size: unset;
```

### 取值

`block-size` 属性的取值与 {{cssxref("width")}} 和 {{cssxref("height")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 竖排文本的块向尺寸

#### HTML

```html
<p class="exampleText">示例文本</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  block-size: 200px;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的块向尺寸")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 对应的实体属性：{{CSSXref("width")}} 和 {{CSSXref("height")}}
- {{cssxref("writing-mode")}}
