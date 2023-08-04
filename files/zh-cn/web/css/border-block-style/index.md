---
title: border-block-style
slug: Web/CSS/border-block-style
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-style`** 定义了元素的逻辑块向的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-style")}} 和 {{CSSXref("border-bottom-style")}}，或者 {{CSSXref("border-left-style")}} 和 {{CSSXref("border-right-style")}} 属性。

{{EmbedInteractiveExample("pages/css/border-block-style.html")}}

另一方向的边框线型可用 {{CSSXref("border-inline-style")}} 设置，此属性会设置 {{CSSXref("border-inline-start-style")}} 和 {{CSSXref("border-inline-end-style")}}。

## 语法

```css
/* 边框线型值 */
border-block-style: dashed;
border-block-style: dotted;
border-block-style: groove;

/* 全局值 */
border-block-style: inherit;
border-block-style: initial;
border-block-style: revert;
border-block-style: revert-layer;
border-block-style: unset;
```

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
  border-block-style: dashed;
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
