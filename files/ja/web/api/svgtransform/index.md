---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

**`SVGTransform`** インターフェイスは、 {{ domxref("SVGTransformList") }} 内の構成要素の座標変換の 1 つを反映します。したがって、 `SVGTransform` オブジェクトは、 {{ SVGAttr("transform") }} 属性内の単一の構成要素（`scale(…)` または `matrix(…)`）に対応します。

`SVGTransform` オブジェクトは読み取り専用に指定することができ、その場合はオブジェクトを変更しようとすると例外が発生します。

## インスタンスプロパティ

- {{domxref("SVGTransform.type", "type")}}
  - : このインターフェイスで定義されている `SVG_TRANSFORM_*` 定数のいずれかで指定された値の型です。
- {{domxref("SVGTransform.angle", "angle")}}
  - : 浮動小数点数値としての角度。 `SVG_TRANSFORM_ROTATE`、`SVG_TRANSFORM_SKEWX`、`SVG_TRANSFORM_SKEWY` に対する利便性のための属性。 `SVG_TRANSFORM_MATRIX`、`SVG_TRANSFORM_TRANSLATE`、`SVG_TRANSFORM_SCALE` に対しては、 `angle` はゼロとなります。
- {{domxref("SVGTransform.matrix", "matrix")}}
  - : この座標変換を表現する {{ domxref("DOMMatrix") }} としての行列。行列オブジェクトは「生きて」おり、 `SVGTransform` オブジェクトへの変更は即座に反映され、その逆も同様です。 行列オブジェクトが直接変更された場合（すなわち、`SVGTransform` インターフェイス自体のメソッドを使用せずに変更された場合）、`SVGTransform` の型は `SVG_TRANSFORM_MATRIX` に変更されます。

## インスタンスメソッド

- {{domxref("SVGTransform.setMatrix", "setMatrix()")}}
  - : 座標変換の種類を `SVG_TRANSFORM_MATRIX` に設定し、新しい座標変換を定義する引数の行列を指定します。引数 `matrix` の値がコピーされることに注意してください。
- {{domxref("SVGTransform.setTranslate", "setTranslate()")}}
  - : 座標変換の種類を `SVG_TRANSFORM_TRANSLATE` に設定し、引数 `tx` と `ty` で移動量を定義します。
- {{domxref("SVGTransform.setScale", "setScale()")}}
  - : 座標変換の種類を `SVG_TRANSFORM_SCALE` に設定し、引数 `sx` と `sy` で倍率を定義します。
- {{domxref("SVGTransform.setRotate", "setRotate()")}}
  - : 座標変換の種類を `SVG_TRANSFORM_ROTATE` に設定し、引数 `angle` で回転角度を、引数 `cx` と `cy` でオプションの回転中心を定義します。
- {{domxref("SVGTransform.setSkewX", "setSkewX()")}}
  - : 座標変換の種類を `SVG_TRANSFORM_SKEWX` に設定し、引数 `angle` で歪めの量を定義します。
- {{domxref("SVGTransform.setSkewY", "setSkewY()")}}
  - : 座標変換の種類を `SVG_TRANSFORM_SKEWY` に設定し、引数 `angle` で歪めの量を定義します。

## 静的プロパティ

- `SVG_TRANSFORM_UNKNOWN` (0)
  - : 単位型が定義済みの単位型ではありません。この型で新しい値を定義しようとしたり、既存の値をこの型に切り替えようとしたりすることは無効です。
- `SVG_TRANSFORM_MATRIX` (1)
  - : `matrix(…)` の座標変換です。
- `SVG_TRANSFORM_TRANSLATE` (2)
  - : `translate(…)` の座標変換です。
- `SVG_TRANSFORM_SCALE` (3)
  - : `scale(…)` の座標変換です。
- `SVG_TRANSFORM_ROTATE` (4)
  - : `rotate(…)` の座標変換です。
- `SVG_TRANSFORM_SKEWX` (5)
  - : `skewx(…)` の座標変換です。
- `SVG_TRANSFORM_SKEWY` (6)
  - : `skewy(…)` の座標変換です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
