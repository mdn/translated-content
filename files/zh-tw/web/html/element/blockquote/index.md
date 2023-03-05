---
title: <blockquote>
slug: Web/HTML/Element/blockquote
---

## 摘要

**HTML `<blockquote>` 元素**（_HTML 區塊引言元素_）定義一段文字屬於引用。通常，這元素會透過縮排來呈現（要知道如何改變，請參考[備註](#Notes)）。引言的 URL 來源可透過 **cite** 屬性賦予，而來源的文本形式可以使用 {{HTMLElement("cite")}} 元素。

| [內容類別](/zh-TW/docs/HTML/Content_categories) | [流內容](/zh-TW/docs/HTML/Content_categories#Flow_content)、sectioning root、捫及內容。 |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| 允許內容                                        | [內容流](/zh-TW/docs/HTML/Content_categories#Flow_content).                             |
| Tag 省略                                        | {{no_tag_omission}}                                                                |
| 允許父元素                                      | 任何允許[內容流](/zh-TW/docs/HTML/Content_categories#Flow_content)的元素                |
| DOM 介面                                        | {{domxref("HTMLQuoteElement")}}                                                |

## 屬性

這個屬性包含[全局屬性](/zh-TW/docs/HTML/Global_attributes)。

- `cite`
  - : 一個指向被引用的原始文件或訊息的 URL 。這個屬性預期要指引到解釋內容的資訊，或是引言的援引。

## 範例

```html
<blockquote cite="http://developer.mozilla.org">
  <p>這是取自於 Mozilla Developer Center 的引言。</p>
</blockquote>
```

以上的 HTML 原始碼會輸出：

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 備註

要改變`<blockquote>`的縮進，請使用 [CSS](/zh-TW/docs/CSS) 的 {{cssxref("margin")}} 屬性。

針對短篇引文請使用 {{HTMLElement("q")}} 元素。

## 延伸閱讀

- {{HTMLElement("q")}} 元素：用以表示單行的引用內容。
- {{HTMLElement("cite")}} 元素：用以表示引用來源。

{{HTMLSidebar}}
