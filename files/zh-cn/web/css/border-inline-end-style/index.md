---
title: border-inline-end-style
slug: Web/CSS/border-inline-end-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-inline-end-style`** 定义了元素的逻辑行末的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-style")}}、{{CSSXref("border-right-style")}}、{{CSSXref("border-bottom-style")}} 或 {{CSSXref("border-left-style")}} 属性。

{{EmbedInteractiveExample("pages/css/border-inline-end-style.html")}}

## 语法

```css
/* 边框线型值 */
border-inline-end-style: dashed;
border-inline-end-style: dotted;
border-inline-end-style: groove;

/* 全局值 */
border-inline-end-style: inherit;
border-inline-end-style: initial;
border-inline-end-style: revert;
border-inline-end-style: revert-layer;
border-inline-end-style: unset;
```

与此相关的属性有 {{CSSXref("border-block-start-style")}}、{{CSSXref("border-block-end-style")}} 和 {{CSSXref("border-inline-start-style")}}，这些属性定义了元素其他边框的线型。

### 取值

- `<'border-style'>`
  - : 边框线型。见 {{CSSXref("border-style")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 设置行末线型

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
  border: 5px solid blue;
  border-inline-end-style: dashed;
}
```

#### 结果

{{EmbedLiveSample("示例", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-style")}}、{{CSSXref("border-right-style")}}、{{CSSXref("border-bottom-style")}} 或 {{CSSXref("border-left-style")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
