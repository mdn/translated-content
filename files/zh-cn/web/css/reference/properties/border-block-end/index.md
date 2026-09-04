---
title: border-block-end
slug: Web/CSS/Reference/Properties/border-block-end
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-end`** 为[简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)，用于在样式表中的某处同时设置逻辑块末边框的各属性值。

{{InteractiveExample("CSS Demo: border-block-end")}}

```css interactive-example-choice
border-block-end: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end: 1rem solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end: thick double #32a1ce;
writing-mode: vertical-lr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("border-block-end-color")}}
- {{CSSXref("border-block-end-style")}}
- {{CSSXref("border-block-end-width")}}

## 语法

```css
border-block-end: 1px;
border-block-end: 2px dotted;
border-block-end: medium dashed blue;

/* 全局值 */
border-block-end: inherit;
border-block-end: initial;
border-block-end: revert;
border-block-end: revert-layer;
border-block-end: unset;
```

`border-block-end` 可用于设置 {{CSSXref("border-block-end-width")}}、{{CSSXref("border-block-end-style")}} 和 {{CSSXref("border-block-end-color")}} 中至少一个属性的值。此属性所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top")}}、{{CSSXref("border-right")}}、{{CSSXref("border-bottom")}} 或 {{CSSXref("border-left")}} 属性。

与此相关的属性有 {{CSSXref("border-block-start")}}、{{CSSXref("border-inline-start")}} 和 {{CSSXref("border-inline-end")}}，这些属性定义了元素的其他边框。

### 取值

`border-block-end` 属性可用下列值中的至少一个指定，次序任意：

- `<'border-width'>`
  - : 边框宽度。见 {{CSSXref("border-width")}}。
- `<'border-style'>`
  - : 边框线型。见 {{CSSXref("border-style")}}。
- `<'color'>`
  - : 边框颜色。见 {{CSSXref("color")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 竖排文本的边框

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
  border-block-end: 5px dashed blue;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的边框", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top")}}、{{CSSXref("border-right")}}、{{CSSXref("border-bottom")}} 或 {{CSSXref("border-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
