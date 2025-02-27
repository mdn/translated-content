---
title: <xmp>
slug: Web/HTML/Element/xmp
---

{{HTMLSidebar}}{{deprecated_header}}

**`<xmp>`** [HTML](/zh-TW/docs/Web/HTML) 元素呈現開始和結束標籤之間的文本，而不解釋其中的 HTML，並使用等寬字體。HTML2 規範建議應該以足夠寬的方式呈現，以允許每行 80 個字符。

> [!NOTE]
> 請不要使用此元素。
>
> - 自 HTML3.2 起就已經被棄用，並且並沒有以一致的方式實現。它已完全從當前的 HTML 中刪除。
> - 請改用 {{HTMLElement("pre")}} 元素，或者如果在語義上適當，則改用 {{HTMLElement("code")}} 元素。請注意，你需要將『`<`』字符轉義為『`&lt;`』，將『`&`』字符轉義為『`&amp;`』，以確保它們不被解釋為標記。
> - 可以通過將 `monospace` 作為 {{cssxref("font-family")}} 屬性的通用字體值，對任何元素應用適當的 [CSS](/zh-TW/docs/Web/CSS) 樣式，來獲得等寬字體。

## 屬性

此元素除了[全域屬性](/zh-TW/docs/Web/HTML/Global_attributes)外，沒有其他屬性，這些屬性對所有元素都是通用的。

## DOM 介面

此元素實現了 {{domxref('HTMLElement')}} 介面。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- 可以代替使用的 {{HTMLElement("pre")}} 和 {{HTMLElement("code")}} 元素。
- 類似於 {{HTMLElement("xmp")}} 但同樣已過時的 {{HTMLElement("plaintext")}} 元素。
