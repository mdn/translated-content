---
title: 屬性
slug: Glossary/Attribute
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

**屬性**（attribute）擴展了 {{Glossary("HTML")}} 或 {{Glossary("XML")}} {{Glossary("element", "元素")}}，改變其行為或提供後設資料。

屬性總是具有 `name="value"` 的形式（屬性的標識符後跟其關聯的值）。你可能會看到沒有等號或值的屬性。這是 HTML 中提供空字串的簡寫。然而，這在 XML 中是無效的：XML 要求所有屬性都必須有明確的值。

許多 HTML 屬性是{{Glossary("Boolean/HTML", "布林屬性")}}。這些屬性的值僅由屬性的存在或不存在來控制。請參閱{{Glossary("Boolean/HTML", "布林屬性")}}以獲取更多資訊。

## 屬性的反射

屬性可能會被*反射*到一個指定的介面中的特定屬性。這意味著屬性的值可以透過對應介面上的屬性，直接在 JavaScript 中讀取或寫入，反之亦然。相較於使用 {{domxref("Element")}} 介面的 {{domxref("Element.getAttribute()","getAttribute()")}} 和 {{domxref("Element.setAttribute()","setAttribute()")}} 方法來取得和設定屬性，反射屬性提供了一種更自然的程式設計方法。

更多資訊請參見[屬性反射](/zh-TW/docs/Web/API/Document_Object_Model/Reflected_attributes)。

## 參見

- [HTML 屬性參考](/zh-TW/docs/Web/HTML/Reference/Attributes)
- [屬性反射](/zh-TW/docs/Web/API/Document_Object_Model/Reflected_attributes)
- HTML 的[全域屬性](/zh-TW/docs/Web/HTML/Reference/Global_attributes)相關資訊。
- [W3C XML 推薦標準](https://www.w3.org/TR/xml/#sec-starttags)中的 XML 開始標籤屬性推薦
- 相關術語：
  - {{Glossary("Element", "元素")}}
  - {{Glossary("Tag", "標籤")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "布林屬性")}}
  - {{Glossary("Enumerated", "枚舉屬性")}}
