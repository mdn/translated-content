---
title: "HTMLCanvasElement: webglcontextlost イベント"
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`webglcontextlost`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のイベントで、{{domxref("WebGLRenderingContext")}} オブジェクトに関連づけられた描画バッファーが失われたことをユーザーエージェントが検出した場合に発行されます。

このイベントはバブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
addEventListener("webglcontextlost", (event) => {});

onwebglcontextlost = (event) => {};
```

## イベント型

{{domxref("WebGLContextEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("WebGLContextEvent")}}

## イベントプロパティ

_このインターフェイスには親インターフェイスである {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : 読み取り専用のプロパティで、イベントに関する追加情報を保持します。

## 例

{{domxref("WEBGL_lose_context")}} 拡張機能の助けにより、`webglcontextlost` イベントをシミュレートすることができます。

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// "webglcontextlost" event is logged.
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
