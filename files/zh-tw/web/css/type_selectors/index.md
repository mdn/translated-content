---
title: 元素選擇器
slug: Web/CSS/Type_selectors
---

{{CSSRef}}
**CSS 元素選擇器 （也稱 型態選擇器）**依照 Node 節點名稱選取匹配的 Element 元素。換句話說，此選擇器選取在 Document 文件內所有指定該型態的元素。

```css
/* 全部的 <a> 元素。*/
a {
  color: red;
}
```

## 語法

```plain
element { style properties }
```

## 範例

### CSS

```css
span {
  background-color: skyblue;
}
```

### HTML

```html
<span>Here's a span with some text.</span>
<p>Here's a p with some text.</p>
<span>Here's a span with more text.</span>
```

### Result

{{EmbedLiveSample('範例', '100%', 150)}}

## 規範

{{Specifications}}

## Browser compatibility

{{Compat}}
