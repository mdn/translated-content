---
title: padding-block-start
slug: Web/CSS/Reference/Properties/padding-block-start
---

[CSS](/zh-CN/docs/Web/CSS) 属性 **`padding-block-start`** 定义了元素的逻辑块首内边距，并根据元素的书写模式、行内方向和文本朝向对应至实体内边距。

{{InteractiveExample("CSS Demo: padding-block-start")}}

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 20px;
writing-mode: vertical-rl;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: horizontal-tb;
```

```css interactive-example-choice
padding-block-start: 5em;
writing-mode: vertical-lr;
```

```html interactive-example
<section id="default-example">
  <div class="transition-all" id="example-element">
    <div class="box">
      Far out in the uncharted backwaters of the unfashionable end of the
      western spiral arm of the Galaxy lies a small unregarded yellow sun.
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 10px solid #ffc129;
  overflow: hidden;
  text-align: left;
}

.box {
  border: dashed 1px;
  unicode-bidi: bidi-override;
}
```

## 语法

```css
/* <length> 值 */
padding-block-start: 10px; /* 绝对长度 */
padding-block-start: 1em; /* 相对于文本尺寸的长度 */

/* <percentage> 值 */
padding-block-start: 5%; /* 相对于包含区块宽度的内边距 */

/* 全局值 */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: revert;
padding-block-start: revert-layer;
padding-block-start: unset;
```

### 取值

- {{CSSXref("&lt;length&gt;")}}
  - : 以固定值指定的内边距尺寸。必须非负。
- {{CSSXref("&lt;percentage&gt;")}}
  - : 以百分比指定的内边距尺寸，参照[包含区块](/zh-CN/docs/Web/CSS/Guides/Display/Containing_block)的[行向尺寸](/zh-CN/docs/Web/CSS/Guides/Display/Block_and_inline_layout)（即横向语言中的*宽度*，由 {{CSSXref("writing-mode")}} 所定义）。必须非负。

## 描述

虽然规范定义 `padding-block-start` 属性的取值与 {{CSSXref("padding-top")}} 属性相同，但是此属性所对应的实体属性取决于 {{CSSXref("writing-mode")}}、{{CSSXref("direction")}} 和 {{CSSXref("text-orientation")}} 所设置的值。因此这一属性可能对应于 {{CSSXref("padding-bottom")}}、{{CSSXref("padding-right")}} 或 {{CSSXref("padding-left")}}。

与此相关的属性有 {{CSSXref("padding-block-end")}}、{{CSSXref("padding-inline-start")}} 和 {{CSSXref("padding-inline-end")}}，这些属性定义了元素的其他内边距。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 为竖排文本设置块首内边距

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
  padding-block-start: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("为竖排文本设置块首内边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/Guides/Logical_properties_and_values)
- 对应的实体属性：{{CSSXref("padding-top")}}、{{CSSXref("padding-right")}}、{{CSSXref("padding-bottom")}} 和 {{CSSXref("padding-left")}}
- {{CSSXref("writing-mode")}}、{{CSSXref("direction")}}、{{CSSXref("text-orientation")}}
