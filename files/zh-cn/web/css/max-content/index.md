---
title: max-content
slug: Web/CSS/max-content
---

{{CSSRef}}

`max-content` 尺寸关键字代表了内容的最大宽度或最大高度。对于文本内容而言，这意味着内容即便溢出也不会被换行。

## 语法

```css
/* 作为长度使用 */
width: max-content;
inline-size: max-content;
height: max-content;
block-size: max-content;

/* 在 grid track 中使用 */
grid-template-columns: 200px 1fr max-content;

/* 全局值 */
max-content: inherit;
max-content: initial;
max-content: revert;
max-content: revert-layer;
max-content: unset;
```

## 示例

### 使用 max-content 调整盒子大小

#### HTML

```html
<div id="container">
  <div class="item">Item</div>
  <div class="item">
    Item with more text in it which will overflow the fixed width box.
  </div>
</div>
```

#### CSS

```css
#container {
  background-color: #8cffa0;
  padding: 10px;
  width: 200px;
}

.item {
  width: max-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 结果

{{EmbedLiveSample("使用 max-content 调整盒子大小", "100%", 200)}}

### 使用 max-content 调整网格列的大小

#### HTML

```html
<div id="container">
  Item
  <div>Item with more text in it.</div>
  Flexible item
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### 结果

{{EmbedLiveSample("使用 max-content 调整网格列的大小", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 其他尺寸关键字：{{cssxref("min-content")}}、{{cssxref("fit-content")}}
