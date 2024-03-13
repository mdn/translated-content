---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
---

{{CSSRef}}

**`margin-inline-start`** [CSS](/zh-CN/docs/Web/CSS) 属性定义元素的逻辑行首外边距，根据元素的书写模式、行内方向和文本朝向映射为实体的外边距。它根据 {{cssxref("writing-mode")}}、{{cssxref("direction")}} 和 {{cssxref("text-orientation")}} 属性的值对应于 {{cssxref("margin-top")}}、{{cssxref("margin-right")}}、{{cssxref("margin-bottom")}} 或 {{cssxref("margin-left")}} 属性。

{{EmbedInteractiveExample("pages/css/margin-inline-start.html")}}

## 语法

```css
/* <length> 值 */
margin-inline-start: 10px; /* 绝对长度 */
margin-inline-start: 1em; /* 相对于文字大小 */
margin-inline-start: 5%; /* 相对于最近区块容器的宽度 */

/* 关键词值 */
margin-inline-start: auto;

/* 全局值 */
margin-inline-start: inherit;
margin-inline-start: initial;
margin-inline-start: revert;
margin-inline-start: unset;
```

这个属性与 {{cssxref("margin-block-start")}}、{{cssxref("margin-block-end")}} 和 {{cssxref("margin-inline-end")}} 属性相关，它们均定义元素的其他边距。

### 值

`margin-inline-start` 属性接受与 {{cssxref("margin-left")}} 属性相同的值。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置逻辑行首外边距

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
  margin-inline-start: 20px;
  background-color: #c8c800;
}
```

#### 结果

{{EmbedLiveSample("设置逻辑行首外边距", 140, 140)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [CSS 逻辑属性与逻辑值](/zh-CN/docs/Web/CSS/CSS_logical_properties_and_values)
- {{cssxref("margin-inline-end")}}
- 对应的实体属性：{{cssxref("margin-top")}}、{{cssxref("margin-right")}}、{{cssxref("margin-bottom")}} 和 {{cssxref("margin-left")}}
- {{cssxref("writing-mode")}}、{{cssxref("direction")}}、{{cssxref("text-orientation")}}
