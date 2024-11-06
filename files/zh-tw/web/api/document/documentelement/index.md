---
title: Document.documentElement
slug: Web/API/Document/documentElement
---

{{ ApiRef("DOM") }}

**`Document.documentElement`** 會回傳目前文件（{{domxref("document")}}）中的根元素（{{domxref("Element")}}），如：HTML 文件中的 `<html>` 元素。

## 語法

```plain
var element = document.documentElement;
```

## 範例

```js
var rootElement = document.documentElement;
var firstTier = rootElement.childNodes;

// firstTier is the NodeList of the direct children of the root element
for (var i = 0; i < firstTier.length; i++) {
  // do something with each direct kid of the root element
  // as firstTier[i]
}
```

## 備註

對於所有非空的 HTML 文件， `document.documentElement` 將會是一個 {{HTMLElement("html")}} 元素 ; 對於所有非空的 XML 文件，`document.documentElement` 則會是文件的根元素。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
