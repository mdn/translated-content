---
title: "Document: head プロパティ"
short-title: head
slug: Web/API/Document/head
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`head`** は {{domxref("Document")}} インターフェイスの読み取り専用のプロパティで、この文書の {{HTMLElement("head")}} 要素を返します。

## 値

{{domxref("HTMLHeadElement")}} です。

## 例

```html
<!doctype html>
<head id="my-document-head">
  <title>例: document.head の使用</title>
</head>

<script>
  const theHead = document.head;

  console.log(theHead.id); // "my-document-head";

  console.log(theHead === document.querySelector("head")); // true
</script>
```

## メモ

`document.head` は読み取り専用です。このプロパティに値を代入した場合は、暗黙に失敗するか、 [厳格モード](/ja/docs/Web/JavaScript/Reference/Strict_mode)の場合は、{{jsxref("TypeError")}} が発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("document.body")}}
