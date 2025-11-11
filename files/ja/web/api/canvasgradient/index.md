---
title: CanvasGradient
slug: Web/API/CanvasGradient
---

**`CanvasGradient`** インターフェイスは、グラデーションを記述する[不透明オブジェクト](https://en.wikipedia.org/wiki/Opaque_data_type)を表します。 {{domxref("CanvasRenderingContext2D.createLinearGradient()")}} または {{domxref("CanvasRenderingContext2D.createRadialGradient()")}} メソッドから返されます。

{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} として使用することができます。

## プロパティ

_不透明オブジェクトとして、公開されているプロパティはありません。_

## メソッド

_継承されたメソッドはありません。_

- {{domxref("CanvasGradient.addColorStop()")}}
  - : `offset` および `color` で定義される、グラデーションの新しい停止点を追加します。オフセットが `0` と `1` の間でなければ `INDEX_SIZE_ERR` が発生し、色が CSS の {{cssxref("&lt;color&gt;")}} として解釈できない場合は `SYNTAX_ERR` が発生します。

## 仕様書

{{Specifications}}

## ブラウザーの対応

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}} のクリエイターメソッド
- {{HTMLElement("canvas")}} 要素と関連する {{domxref("HTMLCanvasElement")}} インターフェイス

{{APIRef("Canvas API")}}
