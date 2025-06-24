---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: f8bffed375ced0dce47ee084d805e69b631a9bbb
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
  - : この座標変換を表現する {{ domxref("DOMMatrix") }} としての行列。行列オブジェクトは「生きて」おり、 `SVGTransform` オブジェクトへの変更は即座に反映され、その逆も同様です。 行列オブジェクトが直接変更された場合（すなわち、`SVGTransform` インターフェース自体のメソッドを使用せずに変更された場合）、`SVGTransform` の型は `SVG_TRANSFORM_MATRIX` に変更されます。

<table class="no-markdown">
  <tbody>
    <tr>
      <th>名前</th>
      <th>値</th>
      <th>説明</th>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_UNKNOWN</code></td>
      <td>0</td>
      <td>
        単位型が定義済みの単位型ではありません。この型で新しい値を定義しようとしたり、既存の値をこの型に切り替えようとしたりすることは無効です。
      </td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_MATRIX</code></td>
      <td>1</td>
      <td><code>matrix(…)</code> の座標変換です。</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_TRANSLATE</code></td>
      <td>2</td>
      <td><code>translate(…)</code> の座標変換です。</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SCALE</code></td>
      <td>3</td>
      <td><code>scale(…)</code> の座標変換です。</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_ROTATE</code></td>
      <td>4</td>
      <td><code>rotate(…)</code> の座標変換です。</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWX</code></td>
      <td>5</td>
      <td><code>skewx(…)</code> の座標変換です。</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWY</code></td>
      <td>6</td>
      <td><code>skewy(…)</code> の座標変換です。</td>
    </tr>
  </tbody>
</table>

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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
