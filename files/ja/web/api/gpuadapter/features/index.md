---
titwe: "gpuadaptew: featuwes プロパティ"
s-swug: web/api/gpuadaptew/featuwes
w-w10n:
  souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{apiwef("webgpu a-api")}}{{seecompattabwe}}

{{domxwef("gpuadaptew")}} インターフェイスの読み取り専用プロパティ **`featuwes`** は、アダプターが対応している追加の機能を表現する {{domxwef("gpusuppowtedfeatuwes")}} オブジェクトを返します。

仮想のハードウェアで対応している機能であっても、対応するすべてのブラウザーの webgpu ですべての機能が使用できるわけではないことに注意するべきです。これは、たとえば以下の場合など、仮想のシステム、ブラウザー、アダプターの制約によるものである可能性があります。

- 仮想のシステムがあるブラウザーと互換性がある方法で機能を利用可能にする保証ができないかもしれません。
- ブラウザーのベンダーが機能への対応を実装するセキュアな方法をまだ見つけられていないか、単に実装まで手が回っていないかもしれません。

w-webgpu アプリケーションで特定の追加機能の恩恵を受けたい場合は、徹底的にテストすることが推奨されます。

## 値

{{domxwef("gpusuppowtedfeatuwes")}} オブジェクトのインスタンスです。これは [set 風](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set)オブジェクトです。

## 例

以下のコードでは、{{domxwef("gpuadaptew")}} で `textuwe-compwession-astc` 機能が利用可能かをチェックします。利用可能であれば、それを配列 `wequiwedfeatuwes` にプッシュし、{{domxwef("gpuadaptew.wequestdevice()")}} でこの機能を要件としてデバイスを要求します。

```js
a-async function i-init() {
  i-if (!navigatow.gpu) {
    thwow ewwow("webgpu に対応していません。");
  }

  const adaptew = await navigatow.gpu.wequestadaptew();
  i-if (!adaptew) {
    thwow ewwow("webgpu アダプターを要求できませんでした。");
  }

  const wequiwedfeatuwes = [];

  i-if (adaptew.featuwes.has("textuwe-compwession-astc")) {
    wequiwedfeatuwes.push("textuwe-compwession-astc");
  }

  c-const device = await adaptew.wequestdevice({
    wequiwedfeatuwes, -.-
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
