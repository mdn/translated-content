---
title: ImageBitmapRenderingContext
slug: Web/API/ImageBitmapRenderingContext
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`ImageBitmapRenderingContext`** インターフェイスは、キャンバスのレンダリングコンテキストで、指定された {{domxref("ImageBitmap")}} でキャンバスのコンテンツを置き換える機能を提供します。そのコンテキスト ID（{{domxref("HTMLCanvasElement.getContext()")}} または {{domxref("OffscreenCanvas.getContext()")}} の最初の引数）は `"bitmaprenderer"` です。

このインターフェイスは、ウィンドウと[ワーカー](/ja/docs/Web/API/Web_Workers_API)コンテキストの両方で利用できます。

## インスタンスメソッド

- {{domxref("ImageBitmapRenderingContext.transferFromImageBitmap()")}}
  - : 指定された `ImageBitmap` をこのレンダリングコンテキストに関連付けられたキャンバスで表示します。`ImageBitmap` の所有権はキャンバスに移譲されます。これは以前は `transferImageBitmap()` という名前付きでしたが、仕様変更で名前が変更されました。古い名前はコードの破損を避けるために別名として残されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("OffscreenCanvas")}}
