---
title: CanvasGradient
slug: Web/API/CanvasGradient
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

**`CanvasGradient`** インターフェイスは、グラデーションを記述する[不透明オブジェクト](https://en.wikipedia.org/wiki/Opaque_data_type)を表します。 {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}、{{domxref("CanvasRenderingContext2D.createConicGradient()")}}、{{domxref("CanvasRenderingContext2D.createRadialGradient()")}} のいずれかのメソッドから返されます。

{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} として使用することができます。

## プロパティ

_不透明オブジェクトですので、公開されているプロパティはありません。_

## メソッド

- {{domxref("CanvasGradient.addColorStop()")}}
  - : `offset` および `color` で定義される、グラデーションの新しい色経由点を追加します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D")}} のクリエイターメソッド
- {{HTMLElement("canvas")}} 要素と関連する {{domxref("HTMLCanvasElement")}} インターフェイス
