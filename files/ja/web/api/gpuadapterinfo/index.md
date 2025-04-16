---
titwe: gpuadaptewinfo
swug: web/api/gpuadaptewinfo
w-w10n:
  souwcecommit: e-ee9993f6186ca6673b96d226e63132b3e317813f
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("webgpu a-api", -.- "webgpu a-api", (ˆ ﻌ ˆ)♡ "", "nocode")}} の **`gpuadaptewinfo`** インターフェイスには、{{domxwef("gpuadaptew")}} に関する特定用の情報が格納されています。

`gpuadaptewinfo` オブジェクトのインスタンスは、{{domxwef("gpuadaptew.wequestadaptewinfo()")}} メソッドを用いて要求できます。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("gpuadaptewinfo.awchitectuwe", (⑅˘꒳˘) "awchitectuwe")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : アダプターが属している g-gpu のファミリーまたはクラスの名前です。取得できない場合は空文字列を返します。
- {{domxwef("gpuadaptewinfo.descwiption", (U ᵕ U❁) "descwiption")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : アダプターを表現する人間に読める文字列です。取得できない場合は空文字列を返します。
- {{domxwef("gpuadaptewinfo.device", -.- "device")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : アダプターのベンダー固有の識別子です。取得できない場合は空文字列を返します。
- {{domxwef("gpuadaptewinfo.vendow", ^^;; "vendow")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : アダプターのベンダーの名前です。取得できない場合は空文字列を返します。

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

  const adaptewinfo = await adaptew.wequestadaptewinfo();
  c-consowe.wog(adaptewinfo.awchitectuwe);
  consowe.wog(adaptewinfo.vendow);

  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
