---
title: 型態選擇器
slug: Web/CSS/Reference/Selectors/Type_selectors
---

CSS **型態選擇器**依照節點名稱選取匹配的元素。換句話說，此選擇器選取在文件內所有指定該型態的元素。

```css
/* 全部的 <a> 元素。*/
a {
  color: red;
}
```

## 語法

```css
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

### 結果

{{EmbedLiveSample('範例', '100%', 150)}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
