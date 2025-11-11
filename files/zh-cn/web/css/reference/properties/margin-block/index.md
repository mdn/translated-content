---
title: margin-block
slug: Web/CSS/Reference/Properties/margin-block
---

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties) **`margin-block`** 定义了元素的逻辑块首和块末外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{InteractiveExample("CSS Demo: margin-block")}}

```css interactive-example-choice
margin-block: 10px 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 20px 40px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
margin-block: 5% 20%;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
margin-block: 1rem auto;
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

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("margin-block-start")}}
- {{CSSXref("margin-block-end")}}

## 语法

```css
/* <length> 值 */
margin-block: 10px 20px; /* 绝对长度 */
margin-block: 1em 2em; /* 相对于文本尺寸 */
margin-block: 5% 2%; /* 相对于最近区块容器的宽度 */
margin-block: 10px; /* 同时设置块首和块末值 */

/* 关键词值 */
margin-block: auto;

/* 全局值 */
margin-block: inherit;
margin-block: initial;
margin-block: revert;
margin-block: revert-layer;
margin-block: unset;
```

根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("margin-top")}} 和 {{CSSXref("margin-bottom")}}，或者 {{CSSXref("margin-right")}} 和 {{CSSXref("margin-left")}} 属性。

`margin-block` 属性可用一个或两个值指定。

- 用**一个**值指定时，**块首和块末**应用同样的外边距。
- 用**两个**值指定时，第一个外边距应用于**块首**，第二个应用于**块末**。

### 取值

`margin-block` 属性的取值与 {{CSSXref("margin")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置块首和块末外边距

#### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: auto;
  border: 1px solid green;
}

p {
  margin: 0;
  margin-block: 20px 40px;
  background-color: tan;
}

.verticalExample {
  writing-mode: vertical-rl;
}
```

#### HTML

```html
<div>
  <p>示例文本</p>
</div>
<div class="verticalExample">
  <p>示例文本</p>
</div>
```

#### 结果

{{EmbedLiveSample("设置块首和块末外边距", 140, 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 对应的实体属性：{{CSSXref("margin-top")}}、{{CSSXref("margin-right")}}、{{CSSXref("margin-bottom")}} 和 {{CSSXref("margin-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
