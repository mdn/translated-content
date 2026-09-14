---
title: Document：head 屬性
slug: Web/API/Document/head
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

{{domxref("Document")}} 介面的 **`head`** 唯讀屬性回傳當前文件的 {{HTMLElement("head")}} 元素。

## 值

一個 {{domxref("HTMLHeadElement")}}。

## 範例

```html
<!doctype html>
<head id="my-document-head">
  <title>範例：使用 document.head</title>
</head>
```

```js
const theHead = document.head;

console.log(theHead.id); // 「my-document-head」;
console.log(theHead === document.querySelector("head")); // true
```

## 備註

`document.head` 是唯讀的。嘗試為此屬性賦值將會靜默失敗，或者在[嚴格模式](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode)中拋出 {{jsxref("TypeError")}}。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("document.body")}}
