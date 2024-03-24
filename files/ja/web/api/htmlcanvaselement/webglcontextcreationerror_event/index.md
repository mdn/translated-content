---
title: "HTMLCanvasElement: webglcontextcreationerror イベント"
slug: Web/API/HTMLCanvasElement/webglcontextcreationerror_event
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef}}

**`webglcontextcreationerror`** は [WebGL API](/ja/docs/Web/API/WebGL_API) のイベントで、ユーザーエージェントが {{domxref("WebGLRenderingContext")}} コンテキストを作成することができない場合に発行されます。

このイベントには {{domxref("WebGLContextEvent.statusMessage")}} プロパティがあり、失敗に関する詳細情報を含むプラットフォーム依存の文字列を格納されることがあります。

このイベントはバブリングしません。

## 構文

このイベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用したり、イベントハンドラープロパティを設定したりしてください。

```js
addEventListener("webglcontextcreationerror", (event) => {});

onwebglcontextcreationerror = (event) => {};
```

## イベント型

{{domxref("WebGLContextEvent")}} です。{{domxref("Event")}} を継承しています。

{{InheritanceDiagram("WebGLContextEvent")}}

## イベントプロパティ

_このインターフェイスには親インターフェイスである {{domxref("Event")}} から継承したプロパティもあります。_

- {{domxref("WebGLContextEvent.statusMessage")}}
  - : 読み取り専用のプロパティで、イベントに関する追加情報を保持します。

## 例

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener(
  "webglcontextcreationerror",
  (e) => {
    console.log(e.statusMessage || "Unknown error");
  },
  false,
);

const gl = canvas.getContext("webgl");
// logs statusMessage or "Unknown error" if unable to create WebGL context
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
