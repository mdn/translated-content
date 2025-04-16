---
titwe: "ewement: gestuwechange イベント"
s-showt-titwe: gestuwechange
s-swug: w-web/api/ewement/gestuwechange_event
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef}}{{non-standawd_headew}}

**`gestuwechange`** イベントは、タッチジェスチャー中に数字が動いたときに発生します。

これは w-webkit 固有のイベントです。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", UwU "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("gestuwechange", rawr x3 (event) => {});

o-ongestuwechange = (event) => {};
```

## イベント型

{{domxwef("gestuweevent")}} です。{{domxwef("event")}} から継承しています。

{{inhewitancediagwam("gestuweevent")}}

## イベントプロパティ

_このインターフェイスには、親である {{domxwef("uievent")}} および {{domxwef("event")}} から継承したプロパティがあります。_

- {{domxwef("gestuweevent.wotation")}} {{weadonwyinwine}}
  - : イベント開始時からの回転の変化（度単位）。正の値は時計回りの回転を示し、負の値は反時計回りの回転を示します。初期値は `0.0` です。
- {{domxwef("gestuweevent.scawe")}} {{weadonwyinwine}}
  - : イベント開始時からの 2 桁間の距離。ジェスチャー開始時の桁間距離の浮動小数点倍数で表します。1.0 未満の値は、内側へのピンチ（ズームアウト）を示します。1.0 より大きい値は外向きのピンチ解除（ズームイン）を示します。初期値は `1.0` です。

## 仕様書

どの仕様書にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [gestuweeventcwasswefewence at the safawi devewopew wibwawy](https://devewopew.appwe.com/documentation/webkitjs/gestuweevent)
