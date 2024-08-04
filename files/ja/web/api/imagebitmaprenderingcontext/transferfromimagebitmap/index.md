---
title: "ImageBitmapRenderingContext: transferFromImageBitmap() メソッド"
short-title: transferFromImageBitmap()
slug: Web/API/ImageBitmapRenderingContext/transferFromImageBitmap
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`ImageBitmapRenderingContext.transferFromImageBitmap()`** メソッドは、指定された {{domxref("ImageBitmap")}} をこのレンダリングコンテキストに関連付けられたキャンバスで表示します。`ImageBitmap` の所有権はキャンバスにも移譲されます。

このメソッドは以前は `transferImageBitmap()` と名付けられていましたが、仕様変更で名前が変更されました。コードの破損を避けるため、古い名前は別名として残されています。

## 構文

```js-nolint
transferFromImageBitmap(bitmap)
```

### 引数

- `bitmap`
  - : 移譲 {{domxref("ImageBitmap")}} オブジェクトです。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### HTML

```html
<canvas id="htmlCanvas"></canvas>
```

### JavaScript

```js
const htmlCanvas = document
  .getElementById("htmlCanvas")
  .getContext("bitmaprenderer");

// WebGL シーンをオフスクリーンで描画
const offscreen = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("webgl");

// gl コンテキストを使用して何かを描画

// 現在のフレームを可視キャンバスに移譲
const bitmap = offscreen.transferToImageBitmap();
htmlCanvas.transferFromImageBitmap(bitmap);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- このメソッドを定義するインターフェイスである {{domxref("ImageBitmapRenderingContext")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
