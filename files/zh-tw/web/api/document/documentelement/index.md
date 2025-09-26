---
title: Document：documentElement 屬性
slug: Web/API/Document/documentElement
l10n:
  sourceCommit: 376da6eeed886361367923824132ccfc5ac1177d
---

{{ApiRef("DOM")}}

{{domxref("Document")}} 介面的 **`documentElement`** 唯讀屬性會回傳作為{{domxref("document", "文件", "", 1)}}根元素的{{domxref("Element", "元素", "", 1)}}（例如，HTML 文件中的 {{HTMLElement("html")}} 元素）。

## 值

一個 {{domxref("Element")}} 物件。

## 範例

```js
const rootElement = document.documentElement;
const firstTier = rootElement.childNodes;
// firstTier 是根元素的直接子節點的 NodeList
// 像是 <head> 和 <body>

for (const child of firstTier) {
  // 對根元素的每個直接子節點執行某些操作
}
```

## 備註

對於任何非空的 HTML 文件，`documentElement` 總是 {{HTMLElement("html")}} 元素。對於任何非空的 XML 文件，`documentElement` 一定會是該文件的根元素（無論是哪一個元素）。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
