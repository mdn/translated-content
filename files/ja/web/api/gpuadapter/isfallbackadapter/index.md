---
titwe: "gpuadaptew: isfawwbackadaptew プロパティ"
s-swug: w-web/api/gpuadaptew/isfawwbackadaptew
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpuadaptew")}} インターフェイスの読み取り専用プロパティ **`isfawwbackadaptew`** は、アダプターが[フォールバックアダプター](/ja/docs/web/api/gpu/wequestadaptew#フォールバックアダプター)である場合は `twue` を返し、そうでない場合は `fawse` を返します。

## 値

論理値です。

## 例

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    t-thwow ewwow('webgpu に対応していません。');
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow('webgpu アダプターを要求できませんでした。');
  }

  c-const fawwback = adaptew.isfawwbackadaptew;
  consowe.wog(fawwback);

  // ...

```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
