---
title: border-inline-width
slug: Web/CSS/Reference/Properties/border-inline-width
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-inline-width`** 定义了元素的逻辑行向的边框宽度，并根据元素的书写模式、行内方向和文本朝向对应至实体边框宽度。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-width")}} 和 {{CSSXref("border-bottom-width")}}，或者 {{CSSXref("border-left-width")}} 和 {{CSSXref("border-right-width")}} 属性。

{{InteractiveExample("CSS Demo: border-inline-width")}}

```css interactive-example-choice
border-inline-width: thick;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline-width: thick;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline-width: 4px;
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

另一方向的边框宽度可用 {{CSSXref("border-block-width")}} 设置，此属性会设置 {{CSSXref("border-block-start-width")}} 和 {{CSSXref("border-block-end-width")}}。

## 语法

```css
/* 边框宽度值 */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;

/* 全局值 */
border-inline-width: inherit;
border-inline-width: initial;
border-inline-width: revert;
border-inline-width: revert-layer;
border-inline-width: unset;
```

### 取值

- `<'border-width'>`
  - : 边框宽度。见 {{CSSXref("border-width")}}。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### HTML

```html
<div>
  <p class="exampleText">示例文本</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exampleText {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-width: 5px 10px;
}
```

{{EmbedLiveSample("示例", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-width")}}、{{CSSXref("border-right-width")}}、{{CSSXref("border-bottom-width")}} 和 {{CSSXref("border-left-width")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
