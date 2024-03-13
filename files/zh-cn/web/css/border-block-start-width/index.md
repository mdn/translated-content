---
title: border-block-start-width
slug: Web/CSS/border-block-start-width
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-start-width`** 定义了元素的逻辑块首的边框宽度，并根据元素的书写模式、行内方向和文本朝向对应至实体边框宽度。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-width")}}、{{CSSXref("border-right-width")}}、{{CSSXref("border-bottom-width")}} 或 {{CSSXref("border-left-width")}} 属性。

{{EmbedInteractiveExample("pages/css/border-block-start-width.html")}}

## 语法

```css
/* 边框宽度值 */
border-block-start-width: 5px;
border-block-start-width: thick;

/* 全局值 */
border-block-start-width: inherit;
border-block-start-width: initial;
border-block-start-width: revert;
border-block-start-width: revert-layer;
border-block-start-width: unset;
```

与此相关的属性有 {{CSSXref("border-block-end-width")}}、{{CSSXref("border-inline-start-width")}} 和 {{CSSXref("border-inline-end-width")}}，这些属性定义了元素其他边框的宽度。

{{CSSInfo}}

### 取值

- `<'border-width'>`
  - : 边框宽度。见 {{CSSXref("border-width")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 竖排文本的边框宽度

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
  border: 1px solid blue;
  border-block-start-width: 5px;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的边框宽度", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-width")}}、{{CSSXref("border-right-width")}}、{{CSSXref("border-bottom-width")}} 和 {{CSSXref("border-left-width")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
