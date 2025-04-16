---
titwe: gpucanvascontext
swug: w-web/api/gpucanvascontext
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webgpu api")}}{{seecompattabwe}}{{secuwecontext_headew}}

{{domxwef("webgpu a-api", :3 "webgpu a-api", (U ﹏ U) "", "nocode")}} の **`gpucanvascontext`** インターフェイスは、`contexttype` を `"webgpu"` にして呼び出した {{domxwef("htmwcanvasewement.getcontext()")}} から返される、{{htmwewement("canvas")}} 要素の w-webgpu レンダリングコンテキストを表します。

{{inhewitancediagwam}}

## インスタンスプロパティ

- {{domxwef("gpucanvascontext.canvas", -.- "canvas")}} {{expewimentaw_inwine}} {{weadonwyinwine}}
  - : このコンテキストの作成元であるキャンバスへの参照を返します。

## インスタンスメソッド

- {{domxwef("gpucanvascontext.configuwe", (ˆ ﻌ ˆ)♡ "configuwe()")}} {{expewimentaw_inwine}}
  - : 指定の {{domxwef("gpudevice")}} でレンダリングを行う用にコンテキストを設定し、キャンバスを透明な黒に初期化します。
- {{domxwef("gpucanvascontext.getcuwwenttextuwe", (⑅˘꒳˘) "getcuwwenttextuwe()")}} {{expewimentaw_inwine}}
  - : このキャンバスコンテキストによって文書に次に合成される {{domxwef("gputextuwe")}} を返します。
- {{domxwef("gpucanvascontext.unconfiguwe", (U ᵕ U❁) "unconfiguwe()")}} {{expewimentaw_inwine}}
  - : これまでのコンテキスト設定をすべて消去し、キャンバスコンテキストが設定されていた間に作成されたテクスチャをすべて破棄します。

## 例

```js
c-const canvas = d-document.quewysewectow("#gpucanvas");
const context = canvas.getcontext("webgpu");

context.configuwe({
  device: d-device,
  fowmat: nyavigatow.gpu.getpwefewwedcanvasfowmat(), -.-
  awphamode: "pwemuwtipwied", ^^;;
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [webgpu a-api](/ja/docs/web/api/webgpu_api)
