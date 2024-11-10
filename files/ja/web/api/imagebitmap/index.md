---
title: ImageBitmap
slug: Web/API/ImageBitmap
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{APIRef("Canvas API")}}

**`ImageBitmap`** インターフェイスは、{{HTMLElement("canvas")}} に過度の遅延なく描画することができるビットマップ画像を表します。これは {{domxref("createImageBitmap()")}} ファクトリーメソッドを使用して、様々なソースオブジェクトから作成することができます。`ImageBitmap` は、WebGL でレンダリングするためのテクスチャを準備するための、非同期でリソース効率の良い経路を提供します。

`ImageBitmap` は[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)です。

## インスタンスプロパティ

- {{domxref("ImageBitmap.height")}} {{ReadOnlyInline}}
  - : `unsigned long` で、`ImageData` の高さを CSS ピクセル数で表します。
- {{domxref("ImageBitmap.width")}} {{ReadOnlyInline}}
  - : `unsigned long` で、`ImageData` の幅を CSS ピクセル数で表します。

## インスタンスメソッド

- {{domxref("ImageBitmap.close()")}}
  - : `ImageBitmap` に関連するすべてのグラフィカルリソースを破棄します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("createImageBitmap()")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("OffscreenCanvas.transferToImageBitmap()")}}
