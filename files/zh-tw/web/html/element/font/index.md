---
title: <font>
slug: Web/HTML/Element/font
---

{{deprecated_header}}

## 概要

_HTML Font 元素_（`<font>`）定義了該內容的字體大小、顏色與表現。

> **備註：** 不要使用這個元素！儘管它在 HTML 3.2 規範化，但在 HTML 4.01，因為該元件只有裝飾用途的理由而遭棄用，接著在 HTML5 廢棄。從 HTML 4 開始，HTML 不能在 {{HTMLElement("style")}} 元素，或各元素 **style** 屬性以外，表現任何樣式資訊。今後的網頁開發，樣式化要用 [CSS](/zh-TW/docs/CSS)。{{HTMLElement("font")}} 元素的行為，能透過 [CSS](/zh-TW/docs/CSS) 屬性實現，也更好控制。

## 屬性

如同其他 HTML 元素，這個元素支援[全域屬性](/zh-TW/docs/HTML/Global_attributes)。

- `color`
  - : 這個屬性可以藉由顏色名字或是十六進位的 #RRGGBB 格式，來配置文字的顏色。
- `face`
  - : 這個屬性列出了一個或多個逗號分隔的字體名稱。 The document text in the default style is rendered in the first font face that the client's browser supports. 如果在用戶端的系統並沒有安裝這個字體，瀏覽器會在該系統使用預設的 proportional 或是 fixed-width 字體。
- `size`
  - : 這個屬性藉由數字或相對值指定文字大小。數字是由最小的 `1` 到最大的 `7` 之間，且預設為 `3` 的數值表示。也可以用諸如 `+2` 或 `-3` 的相對值指定, which set it relative to the value of the {{htmlattrxref("size", "basefont")}} attribute of the {{HTMLElement("basefont")}} element, or relative to 3, the default value, if none does exist.

## DOM 介面

這個元素 implements {{domxref("HTMLFontElement")}} 介面。

## 瀏覽器相容性

{{Compat}}

{{HTMLSidebar}}
