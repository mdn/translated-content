---
title: margin-inline
slug: Web/CSS/margin-inline
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) **`margin-inline`** 定义了元素的逻辑行首和行末外边距，并根据元素的书写模式、行内方向和文本朝向对应至实体外边距。

{{EmbedInteractiveExample("pages/css/margin-inline.html")}}

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("margin-inline-start")}}
- {{CSSXref("margin-inline-end")}}

## 语法

```css
/* <length> 值 */
margin-inline: 10px 20px; /* 绝对长度 */
margin-inline: 1em 2em; /* 相对于文本尺寸 */
margin-inline: 5% 2%; /* 相对于最近区块容器的宽度 */
margin-inline: 10px; /* 同时设置行首和行末值 */

/* 关键词值 */
margin-inline: auto;

/* 全局值 */
margin-inline: inherit;
margin-inline: initial;
margin-inline: revert;
margin-inline: revert-layer;
margin-inline: unset;
```

根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("margin-top")}} 和 {{CSSXref("margin-bottom")}}，或者 {{CSSXref("margin-right")}} 和 {{CSSXref("margin-left")}} 属性。

`margin-inline` 属性可用一个或两个值指定。

- 用**一个**值指定时，**行首和行末**应用同样的外边距。
- 用**两个**值指定时，第一个外边距应用于**行首**，第二个应用于**行末**。

### 取值

`margin-inline` 属性的取值与 {{CSSXref("margin")}} 属性相同。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置行首和行末外边距

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
  margin-inline: 20px 40px;
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

{{EmbedLiveSample("设置行首和行末外边距", 140, 240)}}

## 规范

{{Specifications}}

## 浏览器规范性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 对应的实体属性：{{CSSXref("margin-top")}}、{{CSSXref("margin-right")}}、{{CSSXref("margin-bottom")}} 和 {{CSSXref("margin-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
