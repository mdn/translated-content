---
title: DOMMatrixReadOnly
slug: Web/API/DOMMatrixReadOnly
l10n:
  sourceCommit: f45409ba2169ff05e433d21aa4ee0424079916b8
---

{{APIRef("Geometry Interfaces")}}

**`DOMMatrixReadOnly`** インターフェイスは、 2D および 3D 演算に適した読み取り専用の 4×4 行列を表します。 {{domxref("DOMMatrix")}} インターフェイスは、 `DOMMatrixReadOnly` をベースとして[変更可能](https://ja.wikipedia.org/wiki/イミュータブル)にしており、作成後に行列を変更することができます。

このインターフェイスは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内で利用できるはずですが、一部の実装はまだそうなっていません。

## コンストラクター

- {{domxref("DOMMatrixReadOnly.DOMMatrixReadOnly", "DOMMatrixReadOnly()")}}
  - : 新しい `DOMMatrixReadOnly` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスが継承しているプロパティはありません。_

- `is2D` {{ReadOnlyInline}}
  - : 論理値フラグであり、値が `true` の場合、行列は 2D 行列として初期化されます。 `false` の場合、行列は 3D となります。
- `isIdentity` {{ReadOnlyInline}}
  - : 行列が[単位行列](https://ja.wikipedia.org/wiki/単位行列)である場合に `true` となる論理値です。単位行列とは、左上から右下への対角線上にある値（言い換えれば、各方向のオフセットが等しい値）を除いて、すべての値が `0` となる行列のことです。
- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : 4×4 行列の各成分を表す倍精度浮動小数点数で、 `m11` から `m14` が最初の列、 `m21` から `m24` が 2 つ目の列、というようになります。
- `a`, `b`, `c`, `d`, `e`, `f`

  - : 2D の回転と平行移動を行うために必要となる、 4×4 行列の成分を表す倍精度浮動小数点数の値です。下記に示すように、これらは 4×4 行列の特定の成分の別名です。

    | 2D  | 3D の相当品 |
    | --- | ----------- |
    | `a` | `m11`       |
    | `b` | `m12`       |
    | `c` | `m21`       |
    | `d` | `m22`       |
    | `e` | `m41`       |
    | `f` | `m42`       |

## インスタンスメソッド

_このインターフェイスが継承しているメソッドはありません。以下のメソッドはいずれも元の行列を変更しません。_

- {{domxref("DOMMatrixReadOnly.flipX()")}}
  - : 入力行列を X 軸で反転して作成した、新しい {{domxref("DOMMatrix")}} を返します。これは、行列に `DOMMatrix(-1, 0, 0, 1, 0, 0)` を乗算することと等価です。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.flipY()")}}
  - : 元の行列を Y 軸で反転して作成した、新しい {{domxref("DOMMatrix")}} を返します。これは、行列に `DOMMatrix(1, 0, 0, -1, 0, 0)` を乗算することと等価です。元の行列は変更されません、
- {{domxref("DOMMatrixReadOnly.inverse()")}}
  - : 元の行列を反転して作成された新しい {{domxref("DOMMatrix")}} を返します。行列を反転できない場合、新しい行列の成分はすべて `NaN` に設定され、 `is2D` プロパティは `false` に設定されます。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.multiply()")}}
  - : 指定した行列と入力行列の内積を計算して作成した、新しい {{domxref("DOMMatrix")}} を返します。`A・B`。乗数として行列が指定されなかった場合、行列は右下隅とそのすぐ上と左にある要素 `m33` と `m34` を除くすべての要素が `0` である行列と乗算されます。これらは既定値では `1` です。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.rotateAxisAngle()")}}
  - : 指定されたベクトルを中心に、指定された角度だけ元の行列を回転させて作成した新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.rotate()")}}
  - : 元の行列を、指定した度数だけ回転させて作成した新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.rotateFromVector()")}}
  - : 指定したベクトルと `(1, 0)` とのなす角度だけ回転させた新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.scale()")}}
  - : 指定された原点を中心として、各軸で指定された量だけ拡大縮小して作成された新しい {{domxref("DOMMatrix")}} を返します。既定では、X 軸と Z 軸は `1` 倍に縮小され、Y 軸には既定値がありません。既定の原点は `(0, 0, 0)`` です。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.scale3d()")}}
  - : 指定された原点を中心として、元の 3D 行列をすべて指定された係数で拡大縮小して作成された新しい {{domxref("DOMMatrix")}} を返します。既定値は `(0, 0, 0)`` です。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.scaleNonUniform()")}} {{deprecated_inline}}
  - : 指定された原点を中心とした X, Y, Z 軸に、指定しただけ拡大縮小して作成した新しい {{domxref("DOMMatrix")}} を返します。既定では、 Y 軸と Z 軸のスケール係数はどちらも `1` ですが、 X 軸のスケール係数を指定する必要があります。既定値は `(0, 0, 0)` です。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.skewX()")}}
  - : 入力行列に対して、指定した歪み変換を X 軸方向に適用して作成した、新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.skewY()")}}
  - : 入力行列に対して、指定した歪み変換を Y 軸方向に適用して作成した、新しい {{domxref("DOMMatrix")}} を返します。元の行列は変更されません。
- {{domxref("DOMMatrixReadOnly.toFloat32Array()")}}
  - : 行列を構成する 16 個の要素（`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`）をすべて格納した新しい {{jsxref("Float32Array")}} を返します。各要素は単精度浮動小数点数で配列に格納され、列優先順 (colexographical access、"colex") で格納されます。（言い換えると、最初の列を上から下へ、次の列を下から上へという順です。）
- {{domxref("DOMMatrixReadOnly.toFloat64Array()")}}
  - : 行列を構成する 16 個の要素（`m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`）をすべて格納した新しい {{jsxref("Float32Array")}} を返します。各要素は倍精度浮動小数点数で配列に格納され、列優先順 (colexographical access、"colex") で格納されます。（言い換えると、最初の列を上から下へ、次の列を下から上へという順です。）
- {{domxref("DOMMatrixReadOnly.toJSON()")}}
  - : `DOMMatrixReadOnly` オブジェクトを JSON 表現で返します。
- {{domxref("DOMMatrixReadOnly.toString()")}}

  - : 適切な CSS 行列記法を使用して、CSS 行列構文による行列の文字列表現を格納した文字列オブジェクトを作成し、返します。この構文の詳細については、 CSS の {{cssxref("transform-function/matrix", "matrix()")}} 関数を参照してください。

    2D 行列の場合、要素 `a` から `f` までの合計 6 つの値が掲載されて、 `matrix(a, b, c, d, e, f)` という形式を取ります。

    3D 行列の場合、返される文字列は 16 個の要素をすべて含み、 `matrix3d(m11, m12, m13, m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)` という形式を取ります。 3D 記法の構文の詳細については、CSS の {{cssxref("transform-function/matrix3d", "matrix3d()")}} 関数を参照してください。

    行列の要素のいずれかが有限ではない場合（2D 行列の場合、その有限ではない値が 2D 行列表現で使用されない要素に含まれる場合であっても）、 `InvalidStateError` 例外が発生します。

- {{domxref("DOMMatrixReadOnly.transformPoint()")}}
  - : 行列を使用して指定した点を変換し、変換後の点を格納した新しい {{domxref("DOMPoint")}} オブジェクトを返します。行列も元の点も変更されません。
- {{domxref("DOMMatrixReadOnly.translate()")}}
  - : 指定したベクトルを用いて変換元の行列に対応させた行列を格納した、新しい {{domxref("DOMMatrix")}} を返します。既定値では、このベクトルは `(0, 0, 0)` です。元の行列は変更されません。

## 静的メソッド

- {{domxref("DOMMatrixReadOnly.fromFloat32Array", "fromFloat32Array()")}}
  - : 指定された単精度（32 ビット）浮動小数点数の配列から、変更可能な新しい `DOMMatrix` オブジェクトを作成します。配列に 6 個の値がある場合、結果は 2D 行列になり、配列に 16 個の値がある場合、結果は 3D 行列になります。そうでない場合、 {{jsxref("TypeError")}} 例外が発生します。
- {{domxref("DOMMatrixReadOnly.fromFloat64Array", "fromFloat64Array()")}}
  - : 倍精度（64 ビット）浮動小数点値の配列が指定された場合、変更可能な新しい `DOMMatrix` オブジェクトを作成します。配列に 6 つの値がある場合、結果は 2D 行列になり、配列に 16 個の値がある場合、結果は 3D 行列になります。そうでない場合、 {{jsxref("TypeError")}} 例外が発生します。
- {{domxref("DOMMatrixReadOnly.fromMatrix", "fromMatrix()")}}
  - : 既存の行列、あるいはそのプロパティの値を提供する {{domxref("DOMMatrixInit")}} 辞書が指定された場合、新しい変更可能な `DOMMatrix` オブジェクトを作成します。行列が指定されなかった場合、行列は右下隅とそのすぐ上と左にある要素 `m33` と `m34` を除くすべての要素を `0` に設定した状態で初期化されます。これらは既定値で `1` が保有されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- これをベースとした変更可能な行列型である {{domxref("DOMMatrix")}}
- このインターフェイスから CSS の {{cssxref("transform-function/matrix", "matrix()")}} および {{cssxref("transform-function/matrix3d", "matrix3d()")}} 関数記法を生成し、 CSS の {{cssxref("transform")}} で使用することができます。
