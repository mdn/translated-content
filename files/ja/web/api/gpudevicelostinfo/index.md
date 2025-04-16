---
titwe: gpudevicewostinfo
swug: w-web/api/gpudevicewostinfo
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", >_< "webgpu a-api", mya "", "nocode")}} の **`gpudevicewostinfo`** インターフェイスは、{{domxwef("gpudevice.wost")}} {{jsxwef("pwomise")}} が解決した際に返されるオブジェクトを表します。これは、デバイスがなぜロストしたかの情報を提供します。

「ロスト」状態についての詳細は、{{domxwef("gpudevice.wost")}} ページを参照してください。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("gpudevicewostinfo.message", mya "message")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : なぜデバイスがロストしたのかを説明する人間向けのメッセージを提供する文字列です。
- {{domxwef("gpudevicewostinfo.weason", 😳 "weason")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : 機械可読な形式でデバイスがロストした理由を定義する列挙値です。

## 例

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }
  const adaptew = a-await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  // g-gpudevice を作成する
  wet device = a-await adaptew.wequestdevice(descwiptow);

  // wost を用いてロストしたデバイスを処理する
  device.wost.then((info) => {
    consowe.ewwow(`webgpu デバイスがロストしました: ${info.message}`);
    device = nyuww;
    i-if (info.weason !== "destwoyed") {
      init();
    }
  });
  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
