---
title: padding-block
slug: Web/CSS/padding-block
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/CSS_cascade/Shorthand_properties) **`padding-block`** 定义了元素的逻辑块首和块末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{EmbedInteractiveExample("pages/css/padding-block.html")}}

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("padding-block-end")}}
- {{CSSXref("padding-block-start")}}

## 语法

```css
/* <length> 值 */
padding-block: 10px 20px; /* 绝对长度 */
padding-block: 1em 2em; /* 相对于文本尺寸 */
padding-block: 10px; /* 同时设置块首和块末值 */

/* <percentage> 值 */
padding-block: 5% 2%; /* 相对于最近包含区块的宽度 */

/* 全局值 */
padding-block: inherit;
padding-block: initial;
padding-block: revert;
padding-block: revert-layer;
padding-block: unset;
```

`padding-block` 属性可用一个或两个值指定。若给一值，则此值同时用于 {{CSSXref("padding-block-start")}} 和 {{CSSXref("padding-block-end")}}。若给两值，则第一个用于 {{CSSXref("padding-block-start")}} 而第二个用于 {{CSSXref("padding-block-end")}}。

### 取值

`padding-block` 属性的取值与 {{CSSXref("padding-left")}} 属性相同。

## 描述

根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性的值对应于 {{CSSXref("padding-top")}} 和 {{CSSXref("padding-bottom")}}，或者 {{CSSXref("padding-right")}} 和 {{CSSXref("padding-left")}} 属性。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为竖排文本设置块向内边距

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
  padding-block: 20px 40px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("为竖排文本设置块向内边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 对应的实体属性：{{CSSXref("padding-top")}}、{{CSSXref("padding-right")}}、{{CSSXref("padding-bottom")}} 和 {{CSSXref("padding-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
