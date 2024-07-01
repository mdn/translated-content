---
title: inset
slug: Web/CSS/inset
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) 属性 **`inset`** 为简写属性，对应于 {{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}} 和 {{cssxref("left")}} 属性。其与 {{cssxref("margin")}} 简写属性具有相同的多值语法。

{{EmbedInteractiveExample("pages/css/inset.html")}}

此属性虽然为 *CSS 逻辑属性*规范的一部分，但是无论元素的书写模式、行内方向和文本朝向如何，其所定义的都不是*逻辑*偏移而是*实体*偏移。

## 语法

```css
/* 长度值 */
inset: 10px; /* 应用于所有边 */
inset: 4px 8px; /* 上下 | 左右 */
inset: 5px 15px 10px; /* 上 | 左右 | 下 */
inset: 2.4em 3em 3em 3em; /* 上 | 右 | 下 | 左 */

/* 包含块的宽度（左或右）或高度（上或下）的百分比 */
inset: 10% 5% 5% 5%;

/* 关键词值 */
inset: auto;

/* 全局值 */
inset: inherit;
inset: initial;
inset: revert;
inset: revert-layer;
inset: unset;
```

### 取值

`inset` 属性的取值与 {{cssxref("left")}} 属性相同。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 为元素设置偏移

#### HTML

```html
<div>
  <span class="exampleText">示例文本</span>
</div>
```

#### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.exampleText {
  writing-mode: sideways-rl;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("为元素设置偏移", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 盒偏移的全称属性：{{cssxref("top")}}、{{cssxref("right")}}、{{cssxref("bottom")}} 和 {{cssxref("left")}}
- 对应的逻辑简写属性：{{cssxref("inset-block")}} 和 {{cssxref("inset-inline")}}
- {{cssxref("margin")}} 简写属性的多值语法
