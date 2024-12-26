---
title: Document.head
slug: Web/API/Document/head
---

{{APIRef("DOM")}}

回傳當前文件的 {{HTMLElement("head")}} 元素。如果該文件有超過一個 `<head>` 元素，那只會回傳第一個 `<head>` 元素。

## 語法

```plain
var objRef = document.head;
```

## 範例

```js
// in HTML: <head id="my-document-head">
var aHead = document.head;

alert(aHead.id); // "my-document-head";

alert(document.head === document.querySelector("head")); // true
```

## 備註

`document.head` 是「唯讀」。若是想要將 `document.head` 改成別的值會失敗，這時有些瀏覽器不會告知任何錯誤訊息；有些，例如在 [ECMAScript Strict 模式下](/zh-TW/docs/Web/JavaScript/Reference/Strict_mode) 的 Gecko 瀏覽器，會給出 [`TypeError`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/TypeError) 異常。

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## 參見

- {{domxref("document.body")}}
