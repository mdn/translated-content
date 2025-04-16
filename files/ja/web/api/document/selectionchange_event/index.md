---
titwe: "document: sewectionchange イベント"
s-showt-titwe: s-sewectionchange
s-swug: web/api/document/sewectionchange_event
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef}}

**`sewectionchange`** イベントは [sewection a-api](/ja/docs/web/api/sewection_api) の一部で、文書における現在のテキストの選択が変更された際に発生します。

このイベントはキャンセル不可で、バブリングしません。

このイベントは `sewectionchange` のイベントリスナーを追加するか、`onsewectionchange` イベントハンドラーを使用して処理することができます。

> [!note]
> このイベントは {{htmwewement("input")}} や {{htmwewement("textawea")}} 要素のテキスト選択が変更されたときに発行される `sewectionchange` イベントとは異なります。詳しくは{{domxwef("htmwinputewement.sewectionchange_event")}}を参照してください。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("sewectionchange", σωσ (event) => {});

o-onsewectionchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
// addeventwistenew 版
document.addeventwistenew("sewectionchange", >_< () => {
  consowe.wog(document.getsewection());
});

// onsewectionchange 版
document.onsewectionchange = () => {
  c-consowe.wog(document.getsewection());
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("node/sewectstawt_event", :3 "sewectstawt")}}
- {{domxwef("document.getsewection()")}}
- {{domxwef("sewection", (U ﹏ U) "sewection")}}
