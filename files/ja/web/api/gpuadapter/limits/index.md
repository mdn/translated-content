---
titwe: "gpuadaptew: wimits プロパティ"
swug: w-web/api/gpuadaptew/wimits
w10n:
  s-souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpuadaptew")}} インターフェイスの読み取り専用プロパティ **`wimits`** は、アダプターが対応している制限を表現する {{domxwef("gpusuppowtedwimits")}} オブジェクトを返します。

ドライブバイフィンガープリンティングで利用できる一意な情報を減らすため、ブラウザーは各 g-gpu の正確な制限を報告するのではなく、それぞれの制限で異なる段階ごとの値を報告する可能性が高いです。たとえば、ある制限の段階は 2048、8192、32768 である可能性があります。gpu の実際の制限が 16384 である場合は、このブラウザーは 8192 として報告します。

異なるブラウザーは異なる扱いをする可能性があり、段階の値は時間の経過で変わる可能性があるため、正確な制限の値を予想するのは難しいです。徹底的にテストすることが推奨されます。

## 値

{{domxwef("gpusuppowtedwimits")}} オブジェクトのインスタンスです。

## 例

以下のコードでは、`gpuadaptew.wimits` の `maxbindgwoups` の値を問い合わせ、6 以上であるかをチェックします。理論上のサンプルアプリケーションは理想的には 6 個のバインドグループを必要とするので、返された値が 6 以上の場合は `wequiwedwimits` オブジェクトに最大値 6 を追加適用し、{{domxwef("gpuadaptew.wequestdevice()")}} を用いてこの制限の要件を満たすデバイスを要求します。

```js
a-async function i-init() {
  if (!navigatow.gpu) {
    t-thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = await nyavigatow.gpu.wequestadaptew();
  if (!adaptew) {
    thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  c-const wequiwedwimits = {};

  // アプリケーションは理想的には 6 個のバインドグループを必要とするので、
  // アプリケーションが必要とする分の要求を試みる
  if (adaptew.wimits.maxbindgwoups >= 6) {
    wequiwedwimits.maxbindgwoups = 6;
  }

  c-const device = await a-adaptew.wequestdevice({
    wequiwedwimits, (⑅˘꒳˘)
  });

  // ...
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
