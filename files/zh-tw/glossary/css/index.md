---
title: CSS
slug: Glossary/CSS
---

**階層式樣式表**，或稱**層疊樣式表**（Cascading Style Sheets，**CSS**）是控制網頁的外觀，要在{{glossary("瀏覽器")}}裡面如何表現的陳述式語言。瀏覽器會套用 CSS 樣式宣告、以期被選中的元素能正確顯示之。樣式宣告包含了屬性（Property）與屬性值（Value）。它們會判斷網頁如何顯示。

CSS 與 {{Glossary("HTML")}} 及 {{Glossary("JavaScript")}} 並列為網路三大核心技術。CSS 通常用作{{Glossary("Element"," HTML 元素")}}的樣式化，但它也能給其他像 {{Glossary("SVG")}} 或 {{Glossary("XML")}} 之類的標記語言樣式化。

CSS 的規則，是一個{{Glossary("CSS Property","屬性")}}配上一個{{Glossary("selector","選擇器")}}。以下的例子能把所有 HTML 的段落元素，變成黑底黃字：

```css
/* 選擇器「p」是指所有文件內的段落，都會受這個規則所影響。 */
p {
  /* "color" 屬性定義了文字的顏色，本例為黃色。 */
  color: yellow;

  /* "background-color" 屬性定義了背景的顏色，本例為黑色。 */
  background-color: black;
}
```

階層式樣式表的「階層（Cascading）」一詞，就是在指：如何決定改變網頁外觀的選擇器，其優先次序為何的支配規則。這個功能非常重要，因為一個夠複雜的網頁，可以動用上千個 CSS 規則。

## 深入了解

### 基本知識

- [Learn CSS](/zh-TW/docs/Learn_web_development/Core/Styling_basics)
- 維基百科的 [CSS](https://zh.wikipedia.org/wiki/CSS)

### 技術參考

- [MDN 的 CSS 文件](/zh-TW/docs/Web/CSS)
- [CSS 工作小組當前的工作進度](https://www.w3.org/Style/CSS/current-work)

### 深入了解 CSS

- [codecademy.com 的課程](https://www.codecademy.com/en/tracks/web)
