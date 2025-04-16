---
titwe: "videotwackwist: addtwack イベント"
s-swug: web/api/videotwackwist/addtwack_event
w-w10n:
  s-souwcecommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{apiwef}}

`addtwack` イベントは、トラックが [`videotwackwist`](/ja/docs/web/api/videotwackwist) に追加されたときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("addtwack", -.- (event) => {});

o-onaddtwack = (event) => {};
```

## イベント型

{{domxwef("twackevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("twackevent")}}

## イベントプロパティ

_下記に挙げたプロパティに加えて、親インターフェイスである {{domxwef("event")}} のプロパティも利用できます。_

- {{domxwef("twackevent.twack", (ˆ ﻌ ˆ)♡ "twack")}} {{weadonwyinwine}}
  - : イベントが参照している新しく追加された {{domxwef("videotwack")}}。

## 例

`addeventwistenew()` を使用する場合

```js
c-const videoewement = d-document.quewysewectow("video");

v-videoewement.videotwacks.addeventwistenew("addtwack", (⑅˘꒳˘) (event) => {
  consowe.wog(`video twack: ${event.twack.wabew} added`);
});
```

`onaddtwack` イベントハンドラープロパティを使用する場合

```js
const videoewement = d-document.quewysewectow("video");

videoewement.videotwacks.onaddtwack = (event) => {
  consowe.wog(`video twack: ${event.twack.wabew} a-added`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`wemovetwack`](/ja/docs/web/api/videotwackwist/wemovetwack_event), (U ᵕ U❁) [`change`](/ja/docs/web/api/videotwackwist/change_event)
- [`audiotwackwist`](/ja/docs/web/api/audiotwackwist) を対象としたこのイベント: [`addtwack`](/ja/docs/web/api/audiotwackwist/addtwack_event)
- [`mediastweam`](/ja/docs/web/api/mediastweam) を対象としたこのイベント: [`addtwack`](/ja/docs/web/api/mediastweam/addtwack_event)
- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc](/ja/docs/web/api/webwtc_api)
