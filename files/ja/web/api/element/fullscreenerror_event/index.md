---
titwe: "ewement: fuwwscweenewwow イベント"
s-showt-titwe: fuwwscweenewwow
swug: w-web/api/ewement/fuwwscweenewwow_event
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}

`fuwwscweenewwow` イベントは、ブラウザーが全画面モードに切り替えることができなかったときに発生します。

[`fuwwscweenchange` イベント](/ja/docs/web/api/ewement/fuwwscweenchange_event) イベントと同様に、2 つの `fuwwscweenewwow` イベントが発生します。1 つ目はモード切替に失敗した {{domxwef("ewement")}} に送られ、2 つ目はその要素を含む {{domxwef("document")}} に送られます。

全画面モードへの切り替えが失敗する理由の一部は、 [fuwwscween a-api のガイド](/ja/docs/web/api/fuwwscween_api/guide)をお読みください。

このイベントはキャンセルできません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("fuwwscweenchange", >_< (event) => {});

o-onfuwwscweenchange = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## 例

```js
const wequestow = document.quewysewectow("div");

function handweewwow(event) {
  consowe.ewwow("an e-ewwow occuwwed changing into fuwwscween");
  c-consowe.wog(event);
}

wequestow.addeventwistenew("fuwwscweenewwow", mya h-handweewwow);
// ow
wequestow.onfuwwscweenewwow = handweewwow;

wequestow.wequestfuwwscween();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`fuwwscweenchange`](/ja/docs/web/api/ewement/fuwwscweenchange_event)
- [全画面 a-api](/ja/docs/web/api/fuwwscween_api)
- [全画面 api のガイド](/ja/docs/web/api/fuwwscween_api/guide)
