---
title: min-block-size
slug: Web/CSS/Reference/Properties/min-block-size
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`min-block-size`** 根据元素的书写模式定义了元素区块的横向或纵向最小尺寸。根据 {{CSSXref("writing-mode")}} 的值，此属性对应于 {{CSSXref("min-width")}} 或 {{CSSXref("min-height")}} 属性。

若为纵向书写模式，则 `min-block-size` 的值对应于元素的最小宽度；否则对应于元素的最小高度。与此相关的属性为 {{CSSXref("min-inline-size")}}，此属性定义了元素另一方向的尺度。

{{InteractiveExample("CSS Demo: min-block-size")}}

```css interactive-example-choice
min-block-size: 150px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 150px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
min-block-size: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
min-block-size: 15em;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box where you can change the minimum block size. <br />If there is
    more content than the minimum the box will grow in the block dimension as
    needed by the content.
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
min-block-size: 100px;
min-block-size: 5em;

/* <percentage> 值 */
min-block-size: 10%;

/* 关键词值 */
min-block-size: max-content;
min-block-size: min-content;
min-block-size: fit-content(20em);

/* 全局值 */
min-block-size: inherit;
min-block-size: initial;
min-block-size: revert;
min-block-size: revert-layer;
min-block-size: unset;
```

### 取值

`min-block-size` 属性的取值与 {{CSSXref("min-width")}} 和 {{CSSXref("min-height")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为竖排文本设置最小块向尺寸

#### HTML

```html
<p class="exampleText">示例文本</p>
```

#### CSS

```css
.exampleText {
  writing-mode: vertical-rl;
  background-color: yellow;
  min-block-size: 200px;
}
```

#### 结果

{{EmbedLiveSample("为竖排文本设置最小块向尺寸")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 对应的实体属性：{{CSSXref("min-width")}} 和 {{CSSXref("min-height")}}
- {{CSSXref("writing-mode")}}
