---
title: border-block-end-color
slug: Web/CSS/border-block-end-color
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-end-color`** 定义了元素的逻辑块末的边框颜色，并根据元素的书写模式、行内方向和文本朝向对应至实体边框颜色。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-color")}}、{{CSSXref("border-right-color")}}、{{CSSXref("border-bottom-color")}} 或 {{CSSXref("border-left-color")}} 属性。

{{EmbedInteractiveExample("pages/css/border-block-end-color.html")}}

## 语法

```css
border-block-end-color: yellow;
border-block-end-color: #f5f6f7;

/* 全局值 */
border-block-end-color: inherit;
border-block-end-color: initial;
border-block-end-color: revert;
border-block-end-color: revert-layer;
border-block-end-color: unset;
```

与此相关的属性有 {{CSSXref("border-block-start-color")}}、{{CSSXref("border-inline-start-color")}} 和 {{CSSXref("border-inline-end-color")}}，这些属性定义了元素其他边框的颜色。

### 取值

- `<'color'>`
  - : 边框颜色。见 {{CSSXref("color")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 竖排文本的边框颜色

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
  border: 10px solid blue;
  border-block-end-color: red;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的边框颜色", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-color")}}、{{CSSXref("border-right-color")}}、{{CSSXref("border-bottom-color")}} 或 {{CSSXref("border-left-color")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
