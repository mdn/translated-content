---
title: border-block-width
slug: Web/CSS/Reference/Properties/border-block-width
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-width`** 定义了元素的逻辑块向的边框宽度，并根据元素的书写模式、行内方向和文本朝向对应至实体边框宽度。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-width")}} 和 {{CSSXref("border-bottom-width")}}，或者 {{CSSXref("border-left-width")}} 和 {{CSSXref("border-right-width")}} 属性。

{{InteractiveExample("CSS Demo: border-block-width")}}

```css interactive-example-choice
border-block-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-width: 4px;
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
  background-color: palegreen;
  color: #000;
  border: 0 solid crimson;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

另一方向的边框宽度可用 {{CSSXref("border-inline-width")}} 设置，此属性会设置 {{CSSXref("border-inline-start-width")}} 和 {{CSSXref("border-inline-end-width")}}。

## 语法

```css
/* 边框宽度值 */
border-block-width: 5px;
border-block-width: thick;

/* 全局值 */
border-block-width: inherit;
border-block-width: initial;
border-block-width: revert;
border-block-width: revert-layer;
border-block-width: unset;
```

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
  border-block-width: 5px;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的边框宽度", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-width")}}、{{CSSXref("border-right-width")}}、{{CSSXref("border-bottom-width")}} 和 {{CSSXref("border-left-width")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
