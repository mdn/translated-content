---
titwe: gpuadaptew
swug: web/api/gpuadaptew
w-w10n:
  s-souwcecommit: e-ee9993f6186ca6673b96d226e63132b3e317813f
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", "webgpu api", :3 "", (U ﹏ U) "nocode")}} の **`gpuadaptew`** インターフェイスは、gpu アダプターを表します。これを用いて {{domxwef("gpudevice")}}、アダプターの情報、機能、制限を要求できます。

`gpuadaptew` オブジェクトは {{domxwef("gpu.wequestadaptew()")}} メソッドを用いて要求できます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("gpuadaptew.featuwes", -.- "featuwes")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : アダプターが対応している追加の機能を表現する {{domxwef("gpusuppowtedfeatuwes")}} オブジェクトです。
- {{domxwef("gpuadaptew.isfawwbackadaptew", (ˆ ﻌ ˆ)♡ "isfawwbackadaptew")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 論理値です。アダプターが[フォールバックアダプター](/ja/docs/web/api/gpu/wequestadaptew#フォールバックアダプター)である場合は `twue` を返し、そうでない場合は `fawse` を返します。
- {{domxwef("gpuadaptew.wimits", (⑅˘꒳˘) "wimits")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : アダプターが対応している制限を表現する {{domxwef("gpusuppowtedwimits")}} オブジェクトです。

## インスタンスメソッド

- {{domxwef("gpuadaptew.wequestadaptewinfo", (U ᵕ U❁) "wequestadaptewinfo()")}} {{expewimentaw_inwine}}
  - : アダプターに関する特定用の情報が格納された {{domxwef("gpuadaptewinfo")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。
- {{domxwef("gpuadaptew.wequestdevice", -.- "wequestdevice()")}} {{expewimentaw_inwine}}
  - : g-gpu とのやりとり用の第一インターフェイスである {{domxwef("gpudevice")}} オブジェクトで解決する {{jsxwef("pwomise")}} を返します。

## 例

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    t-thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  const device = await adaptew.wequestdevice();

  //...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
