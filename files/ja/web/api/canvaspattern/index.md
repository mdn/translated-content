---
title: CanvasPattern
slug: Web/API/CanvasPattern
---

{{APIRef("Canvas API")}}

**`CanvasPattern`** インターフェースは、{{domxref("CanvasRenderingContext2D.createPattern()")}} メソッドによって（画像、 canvas 要素、video 要素をもとに）生成される不透明なオブジェクトです。

## プロパティ

_不透明なオブジェクトを表し、公開されたプロパティはありません。_

## メソッド

_継承されたメソッドはありません。_

- {{domxref("CanvasPattern.setTransform()")}} {{experimental_inline}}
  - : パターンに線形の変化を表す {{domxref("SVGMatrix")}} を適用する。

## 仕様

| 仕様                                                                                                             | ステータス                       | コメント                                |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------- |
| {{SpecName('HTML WHATWG', "the-canvas-element.html#canvaspattern", "CanvasPattern")}} | {{Spec2('HTML WHATWG')}} | v5 で `setTransform()` メソッドを追加。 |

## ブラウザ実装状況

{{Compat("api.CanvasPattern")}}

## 関連項目

- {{domxref("CanvasRenderingContext2D.createPattern()")}}
- The {{HTMLElement("canvas")}} 要素と関連するインターフェースである {{domxref("HTMLCanvasElement")}}
