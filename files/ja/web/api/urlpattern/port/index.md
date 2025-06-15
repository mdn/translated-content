---
title: "URLPattern: port プロパティ"
short-title: port
slug: Web/API/URLPattern/port
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("URL Pattern API")}}{{SeeCompatTable}} {{AvailableInWorkers}}

**`port`** は {{domxref("URLPattern")}} インターフェイスの読み取り専用プロパティで、URL のポート番号部分と照合するパターンを含む文字列です。
この値は、正規化が行われるため、コンストラクターへの入力と異なる場合があります。

## 値

文字列です。

## 例

下記の例では {{domxref("URLPattern")}} オブジェクトを作成し、
`(80|443|8080)` を `port` 部分として指定しています。このパターンは、ポート番号 `80`、`443`、`8080` と一致します。

```js
const pattern = new URLPattern({ port: "(80|443|8080)" });
console.log(pattern.port); // '(80|443|8080)'
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
