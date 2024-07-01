---
title: border-block-start-style
slug: Web/CSS/border-block-start-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-start-style`** 定义了元素的逻辑块首的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-style")}}、{{CSSXref("border-right-style")}}、{{CSSXref("border-bottom-style")}} 或 {{CSSXref("border-left-style")}} 属性。

{{EmbedInteractiveExample("pages/css/border-block-start-style.html")}}

## 语法

```css
/* 边框线型值 */
border-block-start-style: dashed;
border-block-start-style: dotted;
border-block-start-style: groove;

/* 全局值 */
border-block-start-style: inherit;
border-block-start-style: initial;
border-block-start-style: revert;
border-block-start-style: revert-layer;
border-block-start-style: unset;
```

与此相关的属性有 {{CSSXref("border-block-end-style")}}、{{CSSXref("border-inline-start-style")}} 和 {{CSSXref("border-inline-end-style")}}，这些属性定义了元素其他边框的线型。

### 取值

- `<'border-style'>`
  - : 边框线型。见 {{CSSXref("border-style")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 竖排文本的虚线边框

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
  border-block-start-style: dashed;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的虚线边框", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-style")}}、{{CSSXref("border-right-style")}}、{{CSSXref("border-bottom-style")}} 或 {{CSSXref("border-left-style")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
