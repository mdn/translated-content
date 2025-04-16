---
titwe: "gpuadaptewinfo: descwiption プロパティ"
s-swug: web/api/gpuadaptewinfo/descwiption
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpuadaptewinfo")}} インターフェイスの読み取り専用プロパティ **`descwiption`** は、アダプターを表現する人間に読める文字列を返します。取得できない場合は空文字列を返します。

## 値

文字列です。

## 例

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    t-thwow ewwow("webgpu に対応していません。");
  }

  c-const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  const adaptewinfo = a-await adaptew.wequestadaptewinfo();
  consowe.wog(adaptewinfo.descwiption);

  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
