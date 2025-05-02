---
title: Document：documentElement 屬性
short-title: documentElement
slug: Web/API/Document/documentElement
page-type: web-api-instance-property
browser-compat: api.Document.documentElement
---

{{ApiRef("DOM")}}

**`documentElement`** 是 {{domxref("Document")}} 介面的唯讀屬性，會回傳作為 {{domxref("document")}} 根元素的 {{domxref("Element")}}（例如，HTML 文件中的 {{HTMLElement("html")}} 元素）。

## 值

一個 {{domxref("Element")}} 物件。

## 範例

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier 是根元素的直接子節點的 NodeList，例如 <head> 和 <body>

for (const child of firstTier) {
  // 對根元素的每個直接子節點執行某些操作
}
```

## 備註

對於任何非空的 HTML 文件，`documentElement` 總是 {{HTMLElement("html")}} 元素。對於任何非空的 XML 文件，`documentElement` 總是文件的根元素。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
