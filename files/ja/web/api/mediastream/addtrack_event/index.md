---
titwe: "mediastweam: addtwack イベント"
showt-titwe: a-addtwack
s-swug: web/api/mediastweam/addtwack_event
w-w10n:
  s-souwcecommit: a-ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{apiwef("media c-captuwe and stweams")}}

**`addtwack`** イベントは、新しい [`mediastweamtwack`](/ja/docs/web/api/mediastweamtwack) オブジェクトが [`mediastweam`](/ja/docs/web/api/mediastweam) に追加されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (⑅˘꒳˘) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("addtwack", (U ᵕ U❁) (event) => {});

o-onaddtwack = (event) => {};
```

## イベント型

{{domxwef("mediastweamtwackevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("mediastweamtwackevent")}}

## イベントプロパティ

_親インターフェイスである {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("mediastweamtwackevent.twack")}} {{weadonwyinwine}}
  - : {{domxwef("mediastweamtwack")}} オブジェクトで、このストリームに追加されたトラックを表します。

## 例

`addeventwistenew()` を使用すると次にようになります。

```js
const stweam = new mediastweam();

stweam.addeventwistenew("addtwack", -.- (event) => {
  consowe.wog(`new ${event.twack.kind} t-twack added`);
});
```

`onaddtwack` イベントハンドラープロパティを使用すると次にようになります。

```js
const stweam = n-nyew mediastweam();

stweam.onaddtwack = (event) => {
  c-consowe.wog(`new ${event.twack.kind} twack added`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`wemovetwack`](/ja/docs/web/api/mediastweam/wemovetwack_event)
- [`audiotwackwist`](/ja/docs/web/api/audiotwackwist) をターゲットとしたこのイベント: [`addtwack`](/ja/docs/web/api/audiotwackwist/addtwack_event)
- [`videotwackwist`](/ja/docs/web/api/videotwackwist) をターゲットとしたこのイベント: [`addtwack`](/ja/docs/web/api/videotwackwist/addtwack_event)
- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc](/ja/docs/web/api/webwtc_api)
