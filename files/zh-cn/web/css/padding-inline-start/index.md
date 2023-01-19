---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
---

{{CSSRef}}

**`padding-inline-start`** [CSS](/zh-CN/docs/Web/CSS) 属性定义了一个元素的逻辑起始边距，根据该元素的书写模式、方向性和文本方向，它映射为一个物理边距。

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

## 语法

```css
/* 长度值 */
padding-inline-start: 10px;   /* 绝对长度 */
padding-inline-start: 1em;    /* 相对于文本的大小 */

/* 百分比值 */
padding-inline-start: 5%;     /* 相对于区块容器的宽度边距 */

/* 全局值 */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: revert;
padding-inline-start: revert-layer;
padding-inline-start: unset;
```

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 作为固定值的边距大小，必须为非负值。
- {{cssxref("&lt;percentage&gt;")}}
  - : 作为百分比的边距大小，相对于[包含块](/zh-CN/docs/Web/CSS/Containing_block)的内联大小（在 {{cssxref("writing-mode")}} 中定义的水平语言中为 _width_），必须是非负值。

## 描述

在规范中，`padding-inline-start` 属性被定义为与 {{cssxref("padding-top")}} 属性取值相同。然而，它所映射的物理属性取决于 {{cssxref("writing-mode")}}、{{cssxref("direction")}} 和 {{cssxref("text-orientation")}} 的值。因此，它可以映射到{{cssxref("padding-top")}}、{{cssxref("padding-right")}} 或 {{cssxref("padding-left")}}。

它与 {{cssxref("padding-block-start")}}、{{cssxref("padding-block-end")}} 和 {{cssxref("padding-inline-end")}} 有关，它们定义了该元素的其他边距。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置垂直文字的起始内联边距

#### HTML

```html
<div>
  <p class="exampleText">Example text</p>
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
  padding-inline-start: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("设置垂直文字的起始内联边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性和值](/zh-CN/docs/Web/CSS/CSS_Logical_Properties)
- 所映射的物理属性：{{cssxref("padding-top")}}、{{cssxref("padding-right")}}、{{cssxref("padding-bottom")}} 和 {{cssxref("padding-left")}}
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
