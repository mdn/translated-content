---
title: gap
slug: Web/CSS/gap
l10n:
  sourceCommit: 50171049701b814d205e8750d9049593ddd29143
---

{{CSSRef}}

[CSS](/zh-CN/docs/Web/CSS) **`gap`** [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)用于设置行与列之间的间隙（{{glossary("gutters", "网格间距")}}）。

规范的早期版本将该属性命名为 `grid-gap`，且为了保持与旧网站的兼容性，浏览器仍然会接受 `grid-gap` 作为 `gap` 的别名。

{{EmbedInteractiveExample("pages/css/gap.html")}}

## 组成属性

该属性为以下 CSS 属性的简写：

- {{cssxref("column-gap")}}
- {{cssxref("row-gap")}}

## 语法

```css
/* 一个 <length> 值 */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* 一个 <percentage> 值 */
gap: 16%;
gap: 100%;

/* 两个 <length> 值 */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* 一个或两个 <percentage> 值 */
gap: 16% 100%;
gap: 21px 82%;

/* calc() 值 */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* 全局值 */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

该属性用来表示 `<'row-gap'>` 和可选的 `<'column-gap'>` 的值。如果缺失 `<'column-gap'>`，则其会被设置成跟 `<'row-gap'>` 一样的值。

`<'row-gap'>` 和 `<'column-gap'>` 都可以用 `<length>` 或者 `<percentage>` 来指定。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 网格线之间的间隙宽度。
- {{cssxref("&lt;percentage&gt;")}}
  - : 网格线之间的间隙宽度，为相对于当前元素尺寸的百分比。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 弹性布局

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### 结果

{{EmbedLiveSample("弹性布局", "auto", 250)}}

### 网格布局

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### 结果

{{EmbedLiveSample("网格布局", "auto", 250)}}

### 多列布局

#### HTML

```html
<p class="content-box">
  这是使用 CSS <code>gap</code> 属性创建的具有 40px
  列间距的多栏文本。你不觉得这很有趣和令人兴奋吗？我当然是这么认为的！！！
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### 结果

{{EmbedLiveSample("多列布局", "auto", "120px")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 相关 CSS 属性：{{CSSxRef("row-gap")}}、{{CSSxRef("column-gap")}}
- 网格布局指南：_[网格布局的基本概念——网格间距](/zh-CN/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#网格间距)_
