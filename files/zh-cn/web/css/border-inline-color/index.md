---
title: border-inline-color
slug: Web/CSS/border-inline-color
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-inline-color`** 定义了元素的逻辑行向的边框颜色，并根据元素的书写模式、行内方向和文本朝向对应至实体边框颜色。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-color")}} 和 {{CSSXref("border-bottom-color")}}，或者 {{CSSXref("border-right-color")}} 和 {{CSSXref("border-left-color")}} 属性。

{{EmbedInteractiveExample("pages/css/border-inline-color.html")}}

另一方向的边框颜色可用 {{CSSXref("border-block-color")}} 设置，此属性会设置 {{CSSXref("border-block-start-color")}} 和 {{CSSXref("border-block-end-color")}}。

## 语法

```css
border-inline-color: yellow;
border-inline-color: #f5f6f7;

/* 全局值 */
border-inline-color: inherit;
border-inline-color: initial;
border-inline-color: revert;
border-inline-color: revert-layer;
border-inline-color: unset;
```

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
  border-inline-color: red;
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
