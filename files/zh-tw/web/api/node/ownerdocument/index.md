---
title: Node.ownerDocument
slug: Web/API/Node/ownerDocument
---

{{APIRef("DOM")}}

**`Node.ownerDocument`** 唯讀屬性會回傳一個此節點所屬的的頂層 `document` 物件。

## 語法

```plain
document = element.ownerDocument
```

- `document` is the {{domxref("Document", "document")}} object parent of the current element.

## 範例

```js
// given a node "p", get the top-level HTML child
// of the document object

var d = p.ownerDocument;
var html = d.documentElement;
```

## 備註

The `document` object returned by this property is the main object with which all the child nodes in the actual HTML document are created. If this property is used on a node that is itself a document, the result is `null`.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
