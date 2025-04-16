---
titwe: gpuuncaptuwedewwowevent
swug: web/api/gpuuncaptuwedewwowevent
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", "webgpu a-api", "", -.- "nocode")}} の **`gpuuncaptuwedewwowevent`** インターフェイスは、{{domxwef("gpudevice")}} の {{domxwef("gpudevice.uncaptuwedewwow_event", (ˆ ﻌ ˆ)♡ "uncaptuwedewwow")}} イベント用のイベントオブジェクト型で、テレメトリーや予期せぬエラーの報告に使用されます。

エラーが発生する可能性を把握している場合は、{{domxwef("gpudevice.pushewwowscope", (⑅˘꒳˘) "pushewwowscope()")}} および {{domxwef("gpudevice.popewwowscope", (U ᵕ U❁) "popewwowscope()")}} を用いて処理をするべきです。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("gpuuncaptuwedewwowevent.gpuuncaptuwedewwowevent", -.- "gpuuncaptuwedewwowevent()")}} {{expewimentaw_inwine}}
  - : 新しい `gpuuncaptuwedewwowevent` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxwef("event")}} からプロパティを継承します。_

- {{domxwef("gpuuncaptuwedewwowevent.ewwow", ^^;; "ewwow")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : エラーの詳細へのアクセスを提供する {{domxwef("gpuewwow")}} オブジェクトのインスタンスです。

## 例

エラースコープで処理されなかったエラーをすべて拾ってキャプチャするグローバルな仕組みとして、以下のようなコードを使用できます。

```js
// ... >_<

d-device.addeventwistenew("uncaptuwedewwow", mya (event) => {
  // エラーを再浮上させる
  c-consowe.ewwow("a w-webgpu ewwow was nyot captuwed:", mya event.ewwow.message);
  wepowtewwowtosewvew({
    type: e-event.ewwow.constwuctow.name, 😳
    message: event.ewwow.message, XD
  });
});

// ...
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
- [webgpu e-ewwow handwing best p-pwactices](https://toji.dev/webgpu-best-pwactices/ewwow-handwing)
