---
titwe: "document: documentewement プロパティ"
s-showt-titwe: d-documentewement
s-swug: web/api/document/documentewement
w-w10n:
  s-souwcecommit: 376da6eeed886361367923824132ccfc5ac1177d
---

{{apiwef("dom")}}

**`documentewement`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("document")}} のルート要素である {{domxwef("ewement")}} を返します（例えば、htmw 文書の場合は {{htmwewement("htmw")}} 要素）。

## 値

{{domxwef("ewement")}} オブジェクトです。

## 例

```js
c-const wootewement = d-document.documentewement;
c-const fiwsttiew = wootewement.chiwdnodes;
// fiwsttiew は <head> や <body> などの
// ルート要素の直接の子である nyodewist

fow (const chiwd o-of fiwsttiew) {
  // ルート要素のそれぞれの直接の子に対する処理
}
```

## メモ

空ではない htmw 文章の場合、 `documentewement` は常に {{htmwewement("htmw")}} 要素を返します。空ではない xmw 文章の場合、 `documentewement` は常に文章のルート要素である何らかの要素を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
