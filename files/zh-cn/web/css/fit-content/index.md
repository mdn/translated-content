---
title: fit-content
slug: Web/CSS/fit-content
---

{{CSSRef}}

`fit-content` 行为类似于 `fit-content(stretch)`，实际上这意味着盒子会使用可用的空间，但永远不会超过 {{cssxref("max-content")}}。

`fit-content` 属性可以用于设置元素的 {{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("min-width")}}、{{cssxref("min-height")}}、{{cssxref("max-width")}} 和 {{cssxref("max-height")}}，此时最大和最小尺寸将基于元素的内容尺寸计算。

> **备注：** CSS 尺寸规范另外还定义了 {{cssxref("fit-content()", "fit-content()")}} 函数。本页详细介绍了该关键字的用法。

## 语法

```css
width: fit-content;
block-size: fit-content;
```

## 示例

### 使用 fit-content 调整盒子大小

#### HTML

```html
<div class="container">
  <div class="item">Item</div>
  <div class="item">Item with more text in it.</div>
  <div class="item">
    Item with more text in it, hopefully we have added enough text so the text
    will start to wrap.
  </div>
</div>
```

#### CSS

```css
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: -moz-fit-content;
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 结果

{{EmbedLiveSample("使用 fit-content 调整盒子大小", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他尺寸关键字：{{cssxref("min-content")}}、{{cssxref("max-content")}}
