---
titwe: "wowkewnavigatow: gpu プロパティ"
s-swug: web/api/wowkewnavigatow/gpu
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("web w-wowkews api")}}{{seecompattabwe}}

{{domxwef("wowkewnavigatow")}} インターフェイスの読み取り専用プロパティ **`gpu`** は、現在のワーカーコンテキスト用の {{domxwef("gpu")}} オブジェクトを返します。これは {{domxwef("webgpu_api", :3 "webgpu a-api", (U ﹏ U) "", "nocode")}} のエントリーポイントです。

## 値

{{domxwef("gpu")}} オブジェクトです。

## 例

```js
// ウェブワーカーの内部で実行できます
async f-function init() {
  i-if (!navigatow.gpu) {
    t-thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow e-ewwow("webgpu アダプターを要求できませんでした。");
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

- {{domxwef("webgpu_api", -.- "webgpu a-api", (ˆ ﻌ ˆ)♡ "", "nocode")}}
