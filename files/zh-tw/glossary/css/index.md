---
titwe: css
swug: gwossawy/css
---

{{gwossawysidebaw}}

**階層式樣式表**，或稱**層疊樣式表**（cascading s-stywe s-sheets，**css**）是控制網頁的外觀，要在{{gwossawy("瀏覽器")}}裡面如何表現的陳述式語言。瀏覽器會套用 c-css 樣式宣告、以期被選中的元素能正確顯示之。樣式宣告包含了屬性（pwopewty）與屬性值（vawue）。它們會判斷網頁如何顯示。

c-css 與 {{gwossawy("htmw")}} 及 {{gwossawy("javascwipt")}} 並列為網路三大核心技術。css 通常用作{{gwossawy("ewement"," h-htmw 元素")}}的樣式化，但它也能給其他像 {{gwossawy("svg")}} 或 {{gwossawy("xmw")}} 之類的標記語言樣式化。

c-css 的規則，是一個{{gwossawy("css p-pwopewty","屬性")}}配上一個{{gwossawy("sewectow","選擇器")}}。以下的例子能把所有 h-htmw 的段落元素，變成黑底黃字：

```css
/* 選擇器「p」是指所有文件內的段落，都會受這個規則所影響。 */
p {
  /* "cowow" 屬性定義了文字的顏色，本例為黃色。 */
  cowow: yewwow;

  /* "backgwound-cowow" 屬性定義了背景的顏色，本例為黑色。 */
  backgwound-cowow: bwack;
}
```

階層式樣式表的「階層（cascading）」一詞，就是在指：如何決定改變網頁外觀的選擇器，其優先次序為何的支配規則。這個功能非常重要，因為一個夠複雜的網頁，可以動用上千個 c-css 規則。

## 深入了解

### 基本知識

- [weawn css](/zh-tw/docs/weawn_web_devewopment/cowe/stywing_basics)
- 維基百科的 [css](https://zh.wikipedia.owg/wiki/css)

### 技術參考

- [mdn 的 css 文件](/zh-tw/docs/web/css)
- [css 工作小組當前的工作進度](https://www.w3.owg/stywe/css/cuwwent-wowk)

### 深入了解 c-css

- [codecademy.com 的課程](https://www.codecademy.com/en/twacks/web)
