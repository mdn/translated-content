---
title: Document.head
slug: Web/API/Document/head
---

{{APIRef("DOM")}}

{{domxref("Document")}} インターフェイスの **`head`** は読み取り専用のプロパティで、現在の文書の {{HTMLElement("head")}} 要素を返します。

## 構文

```
var objRef = document.head;
```

### 値

{{domxref("HTMLHeadElement")}} です。

## 例

```html
<!doctype html>
<head id="my-document-head">
  <title>Example: using document.head</title>
</head>

<script>
  var theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log(theHead === document.querySelector("head")); // true
</script>
```

## メモ

`document.head` は読取専用です。このプロパティに値を代入した場合は、暗黙に失敗するか、 [Strict モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の場合は、 {{jsxref("TypeError")}} を投げます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.body")}}
