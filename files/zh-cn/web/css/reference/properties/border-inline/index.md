---
title: border-inline
slug: Web/CSS/Reference/Properties/border-inline
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`border-inline`** 为[简写属性](/zh-CN/docs/Web/CSS/Guides/Cascade/Shorthand_properties)，用于在样式表中的某处同时设置逻辑行向边框的各属性值。

{{InteractiveExample("CSS Demo: border-inline")}}

```css interactive-example-choice
border-inline: solid;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
border-inline: dashed red;
writing-mode: vertical-rl;
```

```css interactive-example-choice
border-inline: 1rem solid;
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
  color: #8b008b;
  padding: 0.75em;
  width: 80%;
  height: 100px;
  unicode-bidi: bidi-override;
}
```

`border-inline` 所对应的实体边框取决于元素的书写模式、行内方向和文本朝向。根据 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所定义的值，此属性对应于 {{CSSXref("border-top")}} 和 {{CSSXref("border-bottom")}}，或者 {{CSSXref("border-right")}} 和 {{CSSXref("border-left")}} 属性。

另一方向的边框可用 {{CSSXref("border-block")}} 设置，此属性会设置 {{CSSXref("border-block-start")}} 和 {{CSSXref("border-block-end")}}。

## 属性构成

此属性为下列 CSS 属性的简写属性：

- {{CSSXref("border-inline-color")}}
- {{CSSXref("border-inline-style")}}
- {{CSSXref("border-inline-width")}}

## 语法

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;

/* 全局值 */
border-inline: inherit;
border-inline: initial;
border-inline: revert;
border-inline: revert-layer;
border-inline: unset;
```

### 取值

`border-inline` 属性可用下列值中的至少一个指定，次序任意：

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
  border-inline: 5px dashed blue;
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
