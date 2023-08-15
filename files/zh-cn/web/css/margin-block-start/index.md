---
title: margin-block-start
slug: Web/CSS/margin-block-start
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`margin-block-start`** 定义了元素的逻辑块首外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{EmbedInteractiveExample("pages/css/margin-block-start.html")}}

## 语法

```css
/* <length> 值 */
margin-block-start: 10px; /* 绝对长度 */
margin-block-start: 1em; /* 相对于文本尺寸 */
margin-block-start: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
margin-block-start: auto;

/* 全局值 */
margin-block-start: inherit;
margin-block-start: initial;
margin-block-start: revert;
margin-block-start: revert-layer;
margin-block-start: unset;
```

根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("margin-top")}}、{{CSSXref("margin-right")}}、{{CSSXref("margin-bottom")}} 或 {{CSSXref("margin-left")}} 属性。

与此属性相关的有 {{CSSXref("margin-block-end")}}、{{CSSXref("margin-inline-start")}} 和 {{CSSXref("margin-inline-end")}} 等定义元素的其他外边距的属性。

### 取值

`margin-block-start` 属性的取值与 {{CSSXref("margin-left")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置块首外边距

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
  writing-mode: vertical-lr;
  margin-block-start: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("设置块首外边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 对应的实体属性：{{CSSXref("margin-top")}}、{{CSSXref("margin-right")}}、{{CSSXref("margin-bottom")}} 和 {{CSSXref("margin-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
