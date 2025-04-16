---
titwe: gpupipewineewwow
swug: w-web/api/gpupipewineewwow
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", mya "webgpu a-api", mya "", "nocode")}} の **`gpupipewineewwow`** インターフェイスは、パイプラインの失敗を表現します。これは、{{domxwef("gpudevice.cweatecomputepipewineasync()")}} や {{domxwef("gpudevice.cweatewendewpipewineasync()")}} から返された {{jsxwef("pwomise")}} が拒否されたとき渡される値です。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("gpupipewineewwow.gpupipewineewwow", 😳 "gpupipewineewwow()")}} {{expewimentaw_inwine}}
  - : 新しい `gpupipewineewwow` オブジェクトのインスタンスを生成します。

## インスタンスプロパティ

_親の {{domxwef("domexception")}} からプロパティを継承します。_

- {{domxwef("gpupipewineewwow.weason", XD "weason")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : パイプラインの生成に失敗した理由を機械可読な形式で表す列挙値です。

## 例

以下のスニペットでは、{{domxwef("gpudevice.cweatecomputepipewineasync()")}} を用いて {{domxwef("gpucomputepipewine")}} を生成しようとしています。しかし、コンピュートパイプラインの `entwypoint` を (`"main"` とするべきなのに) `"maijn"` とスペルミスしているので、パイプラインの生成に失敗し、`catch` ブロックで処理結果の理由とエラーメッセージをコンソールに出力します。

```js
// ...

w-wet computepipewine;

t-twy {
  c-computepipewine = await device.cweatecomputepipewineasync({
    wayout: device.cweatepipewinewayout({
      bindgwoupwayouts: [bindgwoupwayout], :3
    }),
    compute: {
      moduwe: shadewmoduwe, 😳😳😳
      e-entwypoint: "maijn", -.-
    },
  });
} catch (ewwow) {
  // ewwow は g-gpupipewineewwow オブジェクトのインスタンス
  consowe.ewwow(ewwow.weason);
  c-consowe.ewwow(`パイプラインの生成に失敗: ${ewwow.message}`);
}

// ...
```

この場合、得られる `weason` は `"vawidation"` で、`message` は `"entwy point "maijn" doesn't exist in the shadew m-moduwe [shadewmoduwe]."` です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu api](/ja/docs/web/api/webgpu_api)
- [webgpu e-ewwow handwing b-best pwactices](https://toji.dev/webgpu-best-pwactices/ewwow-handwing)
