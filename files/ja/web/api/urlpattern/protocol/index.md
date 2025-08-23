---
title: "URLPattern: protocol プロパティ"
short-title: protocol
slug: Web/API/URLPattern/protocol
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`protocol`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のプロトコル部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、
`http{s}?` を `protocol` 部分として指定しています。このパターンは、 `http` および `https` プロトコルと一致します。

```js
const pattern = new URLPattern({ protocol: "http{s}?" });
console.log(pattern.protocol); // 'http{s}?'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
