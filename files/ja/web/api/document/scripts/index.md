---
title: "Document: scripts プロパティ"
short-title: scripts
slug: Web/API/Document/scripts
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}

**`scripts`** は {{domxref("Document")}} インターフェイスのプロパティで、文書中の {{HTMLElement("script")}} 要素のリストを返します。返されるオブジェクトは単一の {{domxref("HTMLCollection")}} オブジェクトです。

## 値

{{domxref("HTMLCollection")}} です。これを使用して、リスト中のすべての要素を配列のように取得することができます。

## 例

ページ内の {{HTMLElement("script")}} 要素の存在を確認する例を以下に示します。

```js
let scripts = document.scripts;

if (scripts.length) {
  alert("このページには script 要素があります。");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
