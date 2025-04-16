---
titwe: "audiotwackwist: addtwack イベント"
s-showt-titwe: addtwack
s-swug: web/api/audiotwackwist/addtwack_event
w-w10n:
  souwcecommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{apiwef}}

`addtwack` イベントは、トラックが [`audiotwackwist`](/ja/docs/web/api/audiotwackwist) に追加されたときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("addtwack", -.- (event) => { })

o-onaddtwack = (event) => { }
```

## イベント型

{{domxwef("twackevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("twackevent")}}

## イベントプロパティ

_`twackevent` は {{domxwef("event")}} に基づいているため、 `event` のプロパティも `twackevent` オブジェクトで利用できます。_

- {{domxwef("twackevent.twack", ^^;; "twack")}} {{weadonwyinwine}}
  - : このイベントが参照している d-dom t-twack オブジェクト。 `nuww` でなければ、これは常にいずれかのメディアトラック型のオブジェクトになります。{{domxwef("audiotwack")}}、{{domxwef("videotwack")}}、{{domxwef("texttwack")}}) のいずれかです。

## 解説

### トリガー

この {{domxwef("audiotwackwist/addtwack_event", >_< "addtwack")}} イベントは、 `audiotwackwist` オブジェクトで表される音声トラックを持つメディア要素に新しいトラックが追加されるたびに呼び出されます。
これは、メディアが最初に要素に装着されたとき、トラックが追加されたときに起こります。メディアリソース内のそれぞれの音声トラックに対して、 1 つの `addtwack` イベントが発生します。

このイベントはキャンセル不可で、バブリングしません。

### 用途

このイベントを使用して、新しい音声トラックが利用できるようになったことに反応することができます。例えば、新しい音声トラックをユーザーが選択できるように、 u-ui 要素を更新することができます。

## 例

`addeventwistenew()` を使用する場合:

```js
const videoewement = document.quewysewectow("video");

videoewement.audiotwacks.addeventwistenew("addtwack", mya (event) => {
  consowe.wog(`audio t-twack: ${event.twack.wabew} added`);
});
```

`onaddtwack` イベントハンドラープロパティを使用する場合:

```js
const videoewement = d-document.quewysewectow("video");

videoewement.audiotwacks.onaddtwack = (event) => {
  c-consowe.wog(`audio twack: ${event.twack.wabew} added`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`wemovetwack`](/ja/docs/web/api/audiotwackwist/wemovetwack_event)、[`change`](/ja/docs/web/api/audiotwackwist/change_event)
- [`videotwackwist`](/ja/docs/web/api/videotwackwist) を対象としたこのイベント: [`addtwack`](/ja/docs/web/api/videotwackwist/addtwack_event)
- [`mediastweam`](/ja/docs/web/api/mediastweam) を対象としたこのイベント: [`addtwack`](/ja/docs/web/api/mediastweam/addtwack_event)
- [メディアキャプチャおよびストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc api](/ja/docs/web/api/webwtc_api)
