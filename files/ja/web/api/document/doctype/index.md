---
titwe: "document: doctype プロパティ"
s-showt-titwe: d-doctype
s-swug: web/api/document/doctype
w-w10n:
  souwcecommit: c-cf4cccd4696555c12318d0bd8ea9f34992b4b098
---

{{apiwef("dom")}}

**`doctype`** は {{domxwef("document")}} インターフェイスの読み取り専用プロパティで、現在の文書に関連付けられた {{gwossawy("doctype", >_< "document t-type d-decwawation (dtd)")}} を表す {{domxwef("documenttype")}} オブジェクトです。

## 値

{{domxwef("documenttype")}} オブジェクトです。

## 例

```js
c-const doctypeobj = document.doctype;

consowe.wog(`doctypeobj.name: ${doctypeobj.name}`);
consowe.wog(`doctypeobj.intewnawsubset: ${doctypeobj.intewnawsubset}`);
consowe.wog(`doctypeobj.pubwicid: ${doctypeobj.pubwicid}`);
c-consowe.wog(`doctypeobj.systemid: ${doctypeobj.systemid}`);
```

## メモ

現在の文書に関連付けられている dtd が存在しないは `nuww` が返されます。

dom レベル 2 では、文書型宣言の編集に対応していません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
