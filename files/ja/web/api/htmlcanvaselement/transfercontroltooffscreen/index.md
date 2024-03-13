---
title: "HTMLCanvasElement: transferControlToOffscreen() メソッド"
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.transferControlToOffscreen()`** メソッドは、メインスレッドまたはワーカーの {{domxref("OffscreenCanvas")}} オブジェクトへ制御を委譲します。

## 構文

```js-nolint
transferControlToOffscreen()
```

### 引数

なし。

### 返値

{{domxref("OffscreenCanvas")}} オブジェクト。

## 例

次の例は、メインスレッド上の {{domxref("OffscreenCanvas")}} オブジェクトに制御を移譲する方法です。

```js
const htmlCanvas = document.createElement("canvas");
const offscreen = htmlCanvas.transferControlToOffscreen();
const gl = offscreen.getContext("webgl");

// Some drawing using the gl context…
```

次の例は、ワーカー上の {{domxref("OffscreenCanvas")}} オブジェクトに制御を移す方法を示しています。

```js
const offscreen = document.querySelector("canvas").transferControlToOffscreen();
const worker = new Worker("myworkerurl.js");
worker.postMessage({ canvas: offscreen }, [offscreen]);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義しているインターフェイス、{{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
