---
title: min-content
slug: Web/CSS/min-content
---

{{CSSRef}}

`min-content` 是一个 CSS 的尺寸关键字，表示的是内容的最小宽度。对于文本内容而言，这意味着内容会利用所有软换行的机会，变得尽可能的小，大小不会超过最长单词的宽度。

## 语法

```css
/* 作为长度使用 */
width: min-content;
inline-size: min-content;
height: min-content;
block-size: min-content;

/* 在 grid track 中使用 */
grid-template-columns: 200px 1fr min-content;

/* 全局值 */
min-content: inherit;
min-content: initial;
min-content: revert;
min-content: revert-layer;
min-content: unset;
```

## 示例

### 使用 min-content 调整盒子的大小

#### HTML

```html
<div class="item">Item</div>
<div class="item">Item with more text in it.</div>
```

#### CSS

```css
.item {
  width: min-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

### 结果

{{EmbedLiveSample("使用 min-content 调整盒子的大小", "100%", 200)}}

### 通过 min-content 调整网格列的大小

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
  grid-template-columns: min-content min-content 1fr;
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

{{EmbedLiveSample("通过 min-content 调整网格列的大小", "100%", 200)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
