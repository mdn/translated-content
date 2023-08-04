---
title: widows
slug: Web/CSS/widows
---

{{CSSRef}}

[CSS](/zh-CN/docs/CSS) 属性 **`widows`** 可以用来设置一个块级容器在新的[分页](/zh-CN/docs/Web/CSS/CSS_paged_media)，区域或者[列](/zh-CN/docs/Web/CSS/CSS_multicol_layout)的**顶部**需要结合在一起的最小行数。

```css
/* <integer> values */
widows: 2;
widows: 3;

/* Global values */
widows: inherit;
widows: initial;
widows: unset;
```

> **备注：** 在排版中，_widow_ 指的是在新页面顶部单独出现的段落的最后一行。（这一行来自于上一个页面的段落）

## 语法

### 值

- {{cssxref("&lt;integer&gt;")}}
  - : 在一个片段打断后，新的片段顶部需要结合在一起的最小行数。该值必须为正值。

## 形式定义

{{CSSInfo}}

## 形式语法

{{CSSSyntax}}

## 示例

### 控制列布局中的 widows

#### HTML

```html
<div>
  <p>This is the first paragraph containing some text.</p>
  <p>
    This is the second paragraph containing some more text than the first one.
    It is used to demonstrate how widows work.
  </p>
  <p>
    This is the third paragraph. It has a little bit more text than the first
    one.
  </p>
</div>
```

#### CSS

```css
div {
  background-color: #8cffa0;
  columns: 3;
  widows: 2;
}

p {
  background-color: #8ca0ff;
}

p:first-child {
  margin-top: 0;
}
```

#### 结果

{{EmbedLiveSample("控制列布局中的 widows", 400, 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("orphans")}}
- [分页媒体](/zh-CN/docs/Web/CSS/CSS_paged_media)
