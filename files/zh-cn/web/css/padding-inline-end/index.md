---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`padding-inline-end`** 定义了元素的逻辑行末内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## 语法

```css
/* <length> 值 */
padding-inline-end: 10px; /* 绝对长度 */
padding-inline-end: 1em; /* 相对于文本尺寸的长度 */

/* <percentage> 值 */
padding-inline-end: 5%; /* 相对于包含区块宽度的内边距 */

/* 全局值 */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: revert;
padding-inline-end: revert-layer;
padding-inline-end: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 以固定值指定的内边距尺寸。必须非负。
- {{CSSXref("&lt;percentage&gt;")}}
  - : 以百分比指定的内边距尺寸，参照[包含区块](/zh-CN/docs/Web/CSS/Containing_block)的[行向尺寸](/zh-CN/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)（即横向语言中的*宽度*，由 {{CSSXref("writing-mode")}} 所定义）。必须非负。

## 描述

虽然规范定义 `padding-inline-end` 属性的取值与 {{CSSXref("padding-top")}} 属性相同，但是此属性所对应的实体属性取决于 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所设置的值。因此这一属性可能对应于 {{CSSXref("padding-bottom")}}、{{CSSXref("padding-right")}} 或 {{CSSXref("padding-left")}}。

与此相关的属性有 {{CSSXref("padding-block-start")}}、{{CSSXref("padding-block-end")}} 和 {{CSSXref("padding-inline-start")}}，这些属性定义了元素的其他内边距。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为竖排文本设置行末内边距

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
  padding-inline-end: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("为竖排文本设置行末内边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 对应的实体属性：{{CSSXref("padding-top")}}、{{CSSXref("padding-right")}}、{{CSSXref("padding-bottom")}} 和 {{CSSXref("padding-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
