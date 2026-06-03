---
title: DOMParser
slug: Web/API/DOMParser
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

{{APIRef("DOM")}}

**`DOMParser`** 介面提供了從字串中解析 {{Glossary("XML")}} 或 {{Glossary("HTML")}} 原始碼成 DOM {{domxref("Document")}} 的能力。

若要執行相反的操作，也就是將 DOM 樹轉換成 XML 或 HTML 原始碼，可以使用 {{domxref("XMLSerializer")}} 介面。

若是 HTML 文件，也可以透過設定 {{domxref("Element.innerHTML")}} 和 {{domxref("Element.outerHTML", "outerHTML")}} 屬性的值，將 DOM 的部分內容替換為由 HTML 建立的新 DOM 樹。這些屬性也能被讀取，以擷取與對應 DOM 子樹相對應的 HTML 片段。

請注意，{{domxref("XMLHttpRequest")}} 可以直接從可透過 URL 存取的資源解析 XML 與 HTML，並在其 {{domxref("XMLHttpRequest.response", "response")}} 屬性中回傳一個 `Document`。

> [!NOTE]
> 請注意，像是 `<p>` 這樣的[區塊級元素](/zh-TW/docs/Glossary/Block-level_content)，如果另一個區塊級元素嵌套在內部並在關閉 `<p>` 標籤之前被解析，則會自動關閉。

## 建構子

- {{domxref("DOMParser.DOMParser","DOMParser()")}}
  - : 建立一個新的 `DOMParser` 物件。

## 實例方法

- {{domxref("DOMParser.parseFromString()")}}
  - : 使用 HTML 或 XML 解析器解析字串，並回傳一個 {{domxref("HTMLDocument")}} 或 {{domxref("XMLDocument")}}。

## 範例

這個介面唯一的方法 {{domxref("DOMParser.parseFromString()")}} 的文件中，包含了用於解析 XML、SVG 和 HTML 字串的範例。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- [解析與序列化 XML](/zh-TW/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}}——用於 {{jsxref("JSON")}} 文件的對應方法。
