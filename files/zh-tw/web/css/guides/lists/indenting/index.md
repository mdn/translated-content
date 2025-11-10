---
title: 一致的清單縮排
short-title: 縮排清單
slug: Web/CSS/Guides/Lists/Indenting
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

對清單最常見的樣式變更之一是改變縮排距離——也就是清單項目向右推移的距離。本文將幫助你了解如何縮排清單項目，以確保清單項目標記可見。

要了解為何如此，以及更重要的是如何完全避免這個問題，有必要檢視清單建構的細節。

## 建立清單

### 獨立的清單項目

首先，我們考慮一個純粹的清單項目，它沒有巢狀於一個清單中。當使用 HTML {{htmlelement("li")}} 元素時，瀏覽器會將 {{cssxref("display")}} 的值設定為 `list-item`。未巢狀於清單中的清單項目是否會提供標記（也稱為「項目符號」），取決於瀏覽器。我們可以使用 {{cssxref("list-style-type", "list-style-type: none")}} 來移除該項目符號。

```css
li {
  border: 1px dashed red;
}
li:nth-of-type(n + 4) {
  list-style-type: none;
}
```

```css hidden
li {
  width: 15em;
}
```

```html hidden
<p>預設的項目符號取決於瀏覽器：</p>
<li>一個清單項目</li>
<li>一個清單項目</li>
<li>一個清單項目</li>
<p>這些清單項目的項目符號已被移除：</p>
<li>一個清單項目</li>
<li>一個清單項目</li>
<li>一個清單項目</li>
```

{{EmbedLiveSample("獨立的清單項目", "100%", 200)}}

紅色虛線邊框代表每個清單項目內容區域的外部邊緣。此時，清單項目沒有內距或邊框。

### 巢狀的清單項目

現在我們將這些項目包裹在一個父元素中；在此例中，我們將它們包裹在一個無序清單（即 `<ul>`）中。根據 CSS 方塊模型，清單項目的方塊必須顯示在父元素的內容區域內。

```css
ul {
  border: 1px dashed blue;
}
li {
  border: 1px dashed red;
  list-style-type: none;
}
```

```css hidden
body {
  width: 15em;
}
```

```html hidden
<ul>
  <li>一個清單項目</li>
  <li>一個清單項目</li>
  <li>一個清單項目</li>
</ul>
```

{{EmbedLiveSample("巢狀的清單項目", "100%", 150)}}

藍色點狀邊框顯示了 `<ul>` 元素內容區域的邊緣。該父元素同時帶有外距和內距。瀏覽器對無序清單設定了以下預設樣式：

```css
ul {
  /* 使用者代理樣式 */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
```

### 預設項目符號位置

現在我們把清單項目標記加回來。由於這是一個無序清單，清單項目會從其 `<ul>` 父元素繼承 `list-style-type: disc;` 的瀏覽器樣式，也就是實心圓的「項目符號」。

```css
li {
  border: 1px dashed red;
}
ul {
  border: 1px dotted blue;
}
ul:last-of-type {
  list-style-position: inside;
}
```

```css hidden
ul {
  width: 15em;
}
```

```html hidden
<p>這些預設為 <code>list-style-position: outside</code>。</p>
<ul>
  <li>一個清單項目</li>
  <li>一個清單項目</li>
  <li>一個清單項目</li>
</ul>
<p>這些已設定 <code>list-style-position: inside</code>。</p>
<ul>
  <li>一個清單項目</li>
  <li>一個清單項目</li>
  <li>一個清單項目</li>
</ul>
```

{{EmbedLiveSample("預設項目符號位置", "100%", 220)}}

視覺上，標記位於 `<ul>` 內容區域的*外部*，但這不是這裡的重點。關鍵在於標記被放置在 `<li>` 元素「主方塊」的外部，而不是 `<ul>` 的外部。它們有點像清單項目的附加物，懸掛在 `<li>` 內容區域的外部，但仍然附屬於 `<li>`。

這就是為什麼在所有現代瀏覽器中，當 {{cssxref("list-style-position")}} 的值預設為或明確設定為 `outside` 時，標記會被放置在為 `<li>` 元素設定的任何邊框之外。當我們將其更改為 `inside` 時，標記就被帶入 `<li>` 的內容中，就像它們是放置在 `<li>` 最開頭的一個行內方塊一樣。

## 預設縮排

如上所述，所有瀏覽器都為 `<ul>` 父元素提供了外距和內距。雖然各個使用者代理的 CSS 有些許不同，但它們都包含：

```css
ul,
ol {
  /* 使用者代理樣式 */
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  padding-inline-start: 40px;
}
ol {
  list-style-type: decimal;
}
li {
  display: list-item;
  text-align: match-parent;
}
::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
}
```

所有瀏覽器預設都會為 `<ul>` 元素將 {{cssxref("padding-inline-start")}} 設定為 40 像素。在像英文這樣由左至右書寫的語言中，這就是左側的*內距*。在作者樣式表（也就是你的樣式表）中設定的任何內距都會優先採用。

如果你想明確指定，請在你的樣式表中設定以下內容，以確保除非被覆寫，否則你文件中包含在 {{htmlelement("main")}} 區塊內的主要內容區域中的清單項目都能正確縮排：

```css
:where(main ol, main ul) {
  margin-inline-start: 0;
  padding-inline-start: 40px;
}
```

並且，請務必將你的 `<li>` 元素巢狀於 `<ul>` 或 `<ol>` 之中。
