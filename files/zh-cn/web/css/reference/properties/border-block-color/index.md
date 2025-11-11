---
title: border-block-color
slug: Web/CSS/Reference/Properties/border-block-color
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-color`** 定义了元素的逻辑块向的边框颜色，并根据元素的书写模式、行内方向和文本朝向对应至实体边框颜色。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-color")}} 和 {{CSSXref("border-bottom-color")}}，或者 {{CSSXref("border-right-color")}} 和 {{CSSXref("border-left-color")}} 属性。

{{InteractiveExample("CSS Demo: border-block-color")}}

```css interactive-example-choice
border-block-color: red;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-color: #32a1ce;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-color: rgb(170, 50, 220, 0.6);
writing-mode: horizontal-tb;
direction: rtl;
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
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

另一方向的边框颜色可用 {{CSSXref("border-inline-color")}} 设置，此属性会设置 {{CSSXref("border-inline-start-color")}} 和 {{CSSXref("border-inline-end-color")}}。

## 语法

```css
border-block-color: yellow;
border-block-color: #f5f6f7;

/* 全局值 */
border-block-color: inherit;
border-block-color: initial;
border-block-color: revert;
border-block-color: revert-layer;
border-block-color: unset;
```

### 取值

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
  writing-mode: vertical-lr;
  border: 10px solid blue;
  border-block-color: red;
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
- 此属性对应的实体边框属性：{{CSSXref("border-top-color")}}、{{CSSXref("border-right-color")}}、{{CSSXref("border-bottom-color")}} 或 {{CSSXref("border-left-color")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
