---
title: CanvasPattern
slug: Web/API/CanvasPattern
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("Canvas API")}}

**`CanvasPattern`** インターフェイスは、画像、キャンバス、動画をもとに生成される[不透明オブジェクト](https://en.wikipedia.org/wiki/Opaque_data_type)を表し、{{domxref("CanvasRenderingContext2D.createPattern()")}} メソッドによって作成されます。

{{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} または {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}} として使用することができます。

## インスタンスプロパティ

_不透明なオブジェクトを表し、公開されているプロパティはありません。_

## メソッド

_継承されたメソッドはありません。_

- {{domxref("CanvasPattern.setTransform()")}}
  - : パターンに線形の座標変換を表す {{domxref("DOMMatrix")}} を適用します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("CanvasRenderingContext2D.createPattern()")}}
- The {{HTMLElement("canvas")}} 要素と関連するインターフェイスである {{domxref("HTMLCanvasElement")}}
