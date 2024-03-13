---
title: padding-inline
slug: Web/CSS/padding-inline
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties) **`padding-inline`** 定义了元素的逻辑行首和行末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{EmbedInteractiveExample("pages/css/padding-inline.html")}}

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("padding-inline-end")}}
- {{CSSXref("padding-inline-start")}}

## 语法

```css
/* <length> 值 */
padding-inline: 10px 20px; /* 绝对长度 */
padding-inline: 1em 2em; /* 相对于文本尺寸 */
padding-inline: 10px; /* 同时设置行首和行末值 */

/* <percentage> 值 */
padding-inline: 5% 2%; /* 相对于最近包含区块的宽度 */

/* 全局值 */
padding-inline: inherit;
padding-inline: initial;
padding-inline: revert;
padding-inline: revert-layer;
padding-inline: unset;
```

`padding-inline` 属性可用一个或两个值指定。若给一值，则此值同时用于 {{CSSXref("padding-inline-start")}} 和 {{CSSXref("padding-inline-end")}}。若给两值，则第一个用于 {{CSSXref("padding-inline-start")}} 而第二个用于 {{CSSXref("padding-inline-end")}}。

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 以固定值指定的内边距尺寸。必须非负。
- {{CSSXref("&lt;percentage&gt;")}}
  - : 以百分比指定的内边距尺寸，参照[包含区块](/zh-CN/docs/Web/CSS/Containing_block)的行向尺寸（即横向语言中的*宽度*，由 {{CSSXref("writing-mode")}} 所定义）。必须非负。

## 描述

根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性的值对应于 {{CSSXref("padding-top")}} 和 {{CSSXref("padding-bottom")}}，或者 {{CSSXref("padding-right")}} 和 {{CSSXref("padding-left")}} 属性。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为竖排文本设置行向内边距

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
  padding-inline: 20px 40px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("为竖排文本设置行向内边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 对应的实体属性：{{CSSXref("padding-top")}}、{{CSSXref("padding-right")}}、{{CSSXref("padding-bottom")}} 和 {{CSSXref("padding-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
