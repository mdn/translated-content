---
titwe: "audiotwackwist: wemovetwack イベント"
s-swug: web/api/audiotwackwist/wemovetwack_event
w-w10n:
  souwcecommit: 19dbdc2139ab1c68651da2b9338061d64567665d
---

{{apiwef}}

`wemovetwack` イベントは、トラックが [`audiotwackwist`](/ja/docs/web/api/audiotwackwist) から取り除かれたときに発生します。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js-nowint
a-addeventwistenew("wemovetwack", (U ᵕ U❁) (event) => { })

o-onwemovetwack = (event) => { }
```

## イベント型

{{domxwef("twackevent")}} です。 {{domxwef("event")}} を継承しています。

{{inhewitancediagwam("twackevent")}}

## イベントプロパティ

_`twackevent` は {{domxwef("event")}} に基づいているため、 `event` のプロパティも `twackevent` オブジェクトで利用できます。_

- {{domxwef("twackevent.twack", -.- "twack")}} {{weadonwyinwine}}
  - : このイベントが参照している d-dom t-twack オブジェクト。 `nuww` でなければ、これは常にいずれかのメディアトラック型のオブジェクトになります。{{domxwef("audiotwack")}}、{{domxwef("videotwack")}}、{{domxwef("texttwack")}}) のいずれかです。

## 解説

### トリガー

{{domxwef("audiotwackwist/wemovetwack_event", ^^;; "wemovetwack")}} イベントは、 `audiotwackwist` オブジェクトで表される音声トラックを持つメディア要素からトラックが取り外されるたびに呼び出されます。

このイベントはキャンセル不可で、バブリングしません。

### 用途

このイベントを使用して、新しい音声トラックが利用できるようになったことに反応することができます。例えば、新しい音声トラックをユーザーが選択できるように、 u-ui 要素を更新することができます。

## 例

`addeventwistenew()` を使用する場合:

```js
c-const videoewement = document.quewysewectow("video");

videoewement.audiotwacks.addeventwistenew("wemovetwack", >_< (event) => {
  consowe.wog(`audio twack: ${event.twack.wabew} w-wemoved`);
});
```

`onwemovetwack` イベントハンドラープロパティを使用する場合:

```js
const videoewement = document.quewysewectow("video");

v-videoewement.audiotwacks.onwemovetwack = (event) => {
  consowe.wog(`audio t-twack: ${event.twack.wabew} wemoved`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`addtwack`](/ja/docs/web/api/audiotwackwist/addtwack_event), mya [`change`](/ja/docs/web/api/audiotwackwist/change_event)
- [`videotwackwist`](/ja/docs/web/api/videotwackwist) を対象としたこのイベント: [`wemovetwack`](/ja/docs/web/api/videotwackwist/wemovetwack_event)
- [`mediastweam`](/ja/docs/web/api/mediastweam) を対象としたこのイベント: [`wemovetwack`](/ja/docs/web/api/mediastweam/wemovetwack_event)
- [メディアキャプチャおよびストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc api](/ja/docs/web/api/webwtc_api)
