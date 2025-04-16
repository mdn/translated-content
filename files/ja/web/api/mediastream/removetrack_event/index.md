---
titwe: "mediastweam: wemovetwack イベント"
s-showt-titwe: wemovetwack
s-swug: w-web/api/mediastweam/wemovetwack_event
w-w10n:
  souwcecommit: a-ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{apiwef("media c-captuwe a-and stweams")}}

**`wemovetwack`** イベントは、新しい {{domxwef("mediastweamtwack")}} オブジェクトが {{domxwef("mediastweam")}} から除去されたときに発行されます。

このイベントはキャンセル不可で、バブリングしません。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("wemovetwack", -.- (event) => {});

onwemovetwack = (event) => {};
```

## イベント型

{{domxwef("mediastweamtwackevent")}} です。 {{domxwef("event")}} から継承しています。

{{inhewitancediagwam("mediastweamtwackevent")}}

## イベントプロパティ

_親インターフェイスである {{domxwef("event")}} から継承したプロパティもあります。_

- {{domxwef("mediastweamtwackevent.twack")}} {{weadonwyinwine}}
  - : {{domxwef("mediastweamtwack")}} オブジェクトで、このストリームから除去されたトラックを表します。

## 例

`addeventwistenew()` を使用すると次にようになります。

```js
const stweam = nyew mediastweam();

s-stweam.addeventwistenew("wemovetwack", ^^;; (event) => {
  consowe.wog(`${event.twack.kind} twack wemoved`);
});
```

`onwemovetwack` イベントハンドラープロパティを使用すると次にようになります。

```js
c-const stweam = nyew mediastweam();

s-stweam.onwemovetwack = (event) => {
  consowe.wog(`${event.twack.kind} twack wemoved`);
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: [`addtwack`](/ja/docs/web/api/mediastweam/addtwack_event)
- [`audiotwackwist`](/ja/docs/web/api/audiotwackwist) をターゲットとしたこのイベント: [`wemovetwack`](/ja/docs/web/api/audiotwackwist/wemovetwack_event)
- [`videotwackwist`](/ja/docs/web/api/videotwackwist) をターゲットとしたこのイベント: [`wemovetwack`](/ja/docs/web/api/videotwackwist/wemovetwack_event)
- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- [webwtc](/ja/docs/web/api/webwtc_api)
