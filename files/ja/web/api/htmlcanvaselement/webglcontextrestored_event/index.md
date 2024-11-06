---
title: "HTMLCanvasElement: webglcontextrestored イベント"
slug: Web/API/HTMLCanvasElement/webglcontextrestored_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`webglcontextrestored`** は [WebGL API](/ja/docs/Web/API/WebGL_API) インターフェイスのイベントで、ユーザーエージェントが {{domxref("WebGLRenderingContext")}} オブジェクトの描画バッファーを復元したときに発行されます。

コンテキストが復元されると、コンテキストが失われる前に作成したテクスチャやバッファーなどの WebGL リソースは使えなくなります。WebGL アプリケーションの状態を再初期化し、リソースを再作成する必要があります。

このイベントはバブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
addEventListener("webglcontextrestored", (event) => {});

onwebglcontextrestored = (event) => {};
```

## イベント型

{{domxref("WebGLContextEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("WebGLContextEvent")}}

## イベントプロパティ

_このインターフェイスには親インターフェイスである {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : 読み取り専用のプロパティで、イベントに関する追加情報を保持します。

## 例

{{domxref("WEBGL_lose_context")}} 拡張機能の助けにより、`webglcontextrestored` イベントをシミュレートすることができます。

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextrestored",
  (e) => {
    console.log(e);
  },
  false,
);

gl.getExtension("WEBGL_lose_context").restoreContext();

// "webglcontextrestored" event is logged.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
