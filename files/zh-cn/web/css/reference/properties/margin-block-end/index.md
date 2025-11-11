---
title: margin-block-end
slug: Web/CSS/Reference/Properties/margin-block-end
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`margin-block-end`** 定义了元素的逻辑块末外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{InteractiveExample("CSS Demo: margin-block-end")}}

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block-end: 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block-end: auto;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div id="container">
    <div class="row">One</div>
    <div class="row transition-all" id="example-element">Two</div>
    <div class="row">Three</div>
  </div>
</section>
```

```css interactive-example
#container {
  width: 300px;
  height: 200px;
  display: flex;
  align-content: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}

.row {
  height: 33.33%;
  display: inline-block;
  border: solid #ce7777 10px;
  background-color: #2b3a55;
  color: #ffffff;
  flex-shrink: 0;
}

#example-element {
  border: solid 10px #ffbf00;
  background-color: #2b3a55;
}
```

## 语法

```css
/* <length> 值 */
margin-block-end: 10px; /* 绝对长度 */
margin-block-end: 1em; /* 相对于文本尺寸 */
margin-block-end: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
margin-block-end: auto;

/* 全局值 */
margin-block-end: inherit;
margin-block-end: initial;
margin-block-end: revert;
margin-block-end: revert-layer;
margin-block-end: unset;
```

根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("margin-top")}}、{{CSSXref("margin-right")}}、{{CSSXref("margin-bottom")}} 或 {{CSSXref("margin-left")}} 属性。

与此属性相关的有 {{CSSXref("margin-block-start")}}、{{CSSXref("margin-inline-start")}} 和 {{CSSXref("margin-inline-end")}} 等定义元素的其他外边距的属性。

### 取值

`margin-block-end` 属性的取值与 {{CSSXref("margin-left")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置块末外边距

#### HTML

```html
<div>
  <p class="exampleText">示例文本</p>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-rl;
  margin-block-end: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("设置块末外边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 对应的实体属性：{{CSSXref("margin-top")}}、{{CSSXref("margin-right")}}、{{CSSXref("margin-bottom")}} 和 {{CSSXref("margin-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
