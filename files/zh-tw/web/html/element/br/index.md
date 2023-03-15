---
title: <br>（斷行元素）
slug: Web/HTML/Element/br
---

{{HTMLSidebar}}

**HTML `<br>` 元素**會產生文字的斷行（carriage-return、CR 或是確認鍵）。此元素主要用於斷行有所意義的時候，像是寫詩或寫住址。

{{EmbedInteractiveExample("pages/tabbed/br.html", "tabbed-standard")}}

如上所示，`<br>` 元素會在需要斷行的時候出現。在 `<br>` 之後的文字會從文字區域的下一行出現。

> **備註：** 不要用 `<br>` 建立段落間距：這種情況下要用 {{htmlelement("p")}} 把它們包起來，並使用 [CSS](/zh-TW/docs/CSS) {{cssxref('margin')}} 屬性控制間距大小。

## 屬性

這個元件屬性含有[全域屬性](/zh-TW/docs/HTML/Global_attributes)。

### 棄用屬性

- `clear`
  - : 指示中斷後下一行的開始位置。

## 使用 CSS 樣式化

`<br>` 元素有一個定義明確的用途：在文字區塊裡面建立斷行。因此它本身沒有尺寸或視覺輸出，基本上你做不了任何樣式化。

你可以給 `<br>` 元素設置 {{cssxref("margin")}} 以增加文字之間的斷行大小，但這並不是正確的作法：你應該用 {{cssxref("line-height")}} 屬性做這件事情。

## 示例

```html
Mozilla Foundation<br>
1981 Landings Drive<br>
Building K<br>
Mountain View, CA 94043-0801<br>
USA
```

以上 HTML 將顯示

{{ EmbedLiveSample('示例', '100%', '90') }}

## 無障礙議題

使用 `<br>` 元素*分段*不只作法不佳，對於使用輔具的人來說，也會是有問題的。螢幕閱讀器會念出該元素，但 `<br>` 裡面的內容是念不出來的。對於使用螢幕閱讀器的人來說，這可能是困惑與沮喪的體驗。

請使用 `<p>` 元素搭配 CSS 屬性如 {{cssxref("margin")}} 來控制間距大小。

## 技術摘要

| [內容類型](/zh-TW/docs/HTML/Content_categories) | [流型內容](/zh-TW/docs/HTML/Content_categories#Flow_content)、[段落型內容](/zh-TW/docs/HTML/Content_categories#Phrasing_content)。 |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 允許內容                                        | 無，這是個{{Glossary("空元素")}}.                                                                                        |
| 標籤省略                                        | 絕對要有開啟標籤，也絕不能關閉標籤。在 XHTML 文件內，要把這個元素寫成 `<br />`.                                                    |
| 允許父元素                                      | 任何接受[段落型內容](/zh-TW/docs/HTML/Content_categories#Phrasing_content)的元素                                                   |
| 允許的 ARIA roles                               | 所有                                                                                                                               |
| DOM 介面                                        | {{domxref("HTMLBRElement")}}                                                                                               |

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{HTMLElement("address")}} 元素
- {{HTMLElement("p")}} 元素
- {{HTMLElement("wbr")}} 元素
