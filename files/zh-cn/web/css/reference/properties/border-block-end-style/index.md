---
title: border-block-end-style
slug: Web/CSS/Reference/Properties/border-block-end-style
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-block-end-style`** 定义了元素的逻辑块末的边框线型，并根据元素的书写模式、行内方向和文本朝向对应至实体边框线型。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top-style")}}、{{CSSXref("border-right-style")}}、{{CSSXref("border-bottom-style")}} 或 {{CSSXref("border-left-style")}} 属性。

{{InteractiveExample("CSS Demo: border-block-end-style")}}

```css interactive-example-choice
border-block-end-style: dotted;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-style: dotted;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-block-end-style: groove;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-block-end-style: dashed;
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
  color: #000;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

## 语法

```css
/* 边框线型值 */
border-block-end-style: dashed;
border-block-end-style: dotted;
border-block-end-style: groove;

/* 全局值 */
border-block-end-style: inherit;
border-block-end-style: initial;
border-block-end-style: revert;
border-block-end-style: revert-layer;
border-block-end-style: unset;
```

与此相关的属性有 {{CSSXref("border-block-start-style")}}、{{CSSXref("border-inline-start-style")}} 和 {{CSSXref("border-inline-end-style")}}，这些属性定义了元素其他边框的线型。

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
  border-block-end-style: dashed;
}
```

#### 结果

{{EmbedLiveSample("竖排文本的虚线边框", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 此属性对应的实体边框属性：{{CSSXref("border-top-style")}}、{{CSSXref("border-right-style")}}、{{CSSXref("border-bottom-style")}} 和 {{CSSXref("border-left-style")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
