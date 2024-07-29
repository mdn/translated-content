---
title: DOMMatrix (WebKitCSSMatrix)
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 6197320c2f25a975ee4f7df4b8d5b48bf8d01562
---

{{APIRef("Geometry Interfaces")}}

**`DOMMatrix`** は、2D または 3D の回転や平行移動などの変換に適した 4×4 行列を表します。 これは {{domxref("DOMMatrixReadOnly")}} インターフェイスの変更可能なバージョンです。

**`WebKitCSSMatrix`** および **`SVGMatrix`** は **`DOMMatrix`** の別名です。

このインターフェイスは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内で利用できるはずですが、一部の実装はまだそうなっていません。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DOMMatrix.DOMMatrix","DOMMatrix()")}}
  - : 新しい `DOMMatrix` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスは {{domxref("DOMMatrixReadOnly")}} からプロパティを継承していますが、一部のプロパティは変更可能に変更されています。_

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

_このインターフェイスには以下のメソッドがあり、また {{domxref("DOMMatrixReadOnly")}} から継承したメソッドがあります。_

- {{domxref("DOMMatrix.invertSelf()")}}
  - : この行列を逆行列に変更します。逆行列にできない場合、その成分はすべて `NaN` に設定され、[`is2D`](/ja/docs/Web/API/DOMMatrixReadOnly#is2d) は `false` を返します。
- {{domxref("DOMMatrix.multiplySelf()")}}
  - : 指定した `DOMMatrix` と後乗算することで、行列を変更します。これは点積 `A⋅B` と等価であり、行列 `A` は入力行列、 `B` はメソッドへの入力として指定された行列です。自分自身を返します。
- {{domxref("DOMMatrix.preMultiplySelf()")}}
  - : 指定した `DOMMatrix` との前乗算によって、行列を変更します。これは点積 `B⋅A` と等価であり、行列 `A` は入力行列、 `B` はメソッドへの入力として指定された行列です。自分自身を返します。
- {{domxref("DOMMatrix.translateSelf()")}}
  - : 指定したベクトルを適用して行列を変更します。既定値では `[0, 0, 0]` です。自分自身を返します。
- {{domxref("DOMMatrix.scaleNonUniformSelf()")}} {{deprecated_inline}}
  - : 指定された原点を中心として、X、Y、Z 軸に指定した拡大縮小を適用して行列を変更します。既定値は、Y 軸と Z 軸の倍率はどちらも `1` ですが、X 軸の倍率は指定する必要があります。既定値では原点は `(0, 0, 0)` です。自分自身を返します。
- {{domxref("DOMMatrix.scaleSelf()")}}
  - : 指定した原点を中心として、指定した倍率を適用して行列を変更します。また、それ自身を返します。既定では、倍率は 3 軸すべて `1` で、原点は `(0, 0, 0)` です。自分自身を返します。
- {{domxref("DOMMatrix.scale3dSelf()")}}
  - : 指定された原点を中心とした 3 つの軸すべてに、指定された倍率を適用して行列を変更します。自分自身を返します。
- {{domxref("DOMMatrix.rotateSelf()")}}
  - : 指定した度数だけ各軸の周りを回転することで、行列を変更します。自分自身を返します。
- {{domxref("DOMMatrix.rotateAxisAngleSelf()")}}
  - : 指定されたベクトルを中心に、指定した角度だけ回転するように行列を変更します。自分自身を返します。
- {{domxref("DOMMatrix.rotateFromVectorSelf()")}}
  - : 行列を、指定したベクトルと `(1, 0)` とのなす角だけ回転させることにより変更します。自分自身を返します。
- {{domxref("DOMMatrix.setMatrixValue()")}}
  - : 行列の内容を、指定した変換で記述された行列で置き換えます。自分自身を返します。
- {{domxref("DOMMatrix.skewXSelf()")}}
  - : X 軸に沿って、指定した傾き変換を適用して行列を変更します。自分自身を返します。
- {{domxref("DOMMatrix.skewYSelf()")}}
  - : 指定した傾き変換を Y 軸に沿って適用することで、行列を変更します。自分自身を返します。

## 静的メソッド

_このインターフェイスは {{domxref("DOMMatrixReadOnly")}} からメソッドを継承しています。_

- {{domxref("DOMMatrix.fromFloat32Array", "fromFloat32Array()")}}
  - : 指定された単精度（32 ビット）浮動小数点数の配列から、変更可能な新しい `DOMMatrix` オブジェクトを作成します。配列に 6 個の値がある場合、結果は 2D 行列になり、配列に 16 個の値がある場合、結果は 3D 行列になります。そうでない場合、 {{jsxref("TypeError")}} 例外が発生します。
- {{domxref("DOMMatrix.fromFloat64Array", "fromFloat64Array()")}}
  - : 倍精度（64 ビット）浮動小数点値の配列が指定された場合、変更可能な新しい `DOMMatrix` オブジェクトを作成します。配列に 6 つの値がある場合、結果は 2D 行列になり、配列に 16 個の値がある場合、結果は 3D 行列になります。そうでない場合、 {{jsxref("TypeError")}} 例外が発生します。
- {{domxref("DOMMatrix.fromMatrix", "fromMatrix()")}}
  - : 既存の行列、あるいはそのプロパティの値を提供するオブジェクトが指定された場合、新しい変更可能な `DOMMatrix` オブジェクトを作成します。

## 使用上の注意

`DOMMatrix` インターフェイスで定義される行列は、4行4列で構成されます。この記事で数学を説明することはできませんが、この 4×4 のサイズは、 2D または 3D のジオメトリーに適用する変換を記述するのに十分です。

4×4 の抽象行列を構成する 16 個の要素（m_11 から m_44）の位置を示します。

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><msub><mi>m</mi><mn>11</mn></msub></mtd><mtd><msub><mi>m</mi><mn>21</mn></msub></mtd><mtd><msub><mi>m</mi><mn>31</mn></msub></mtd><mtd><msub><mi>m</mi><mn>41</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>12</mn></msub></mtd><mtd><msub><mi>m</mi><mn>22</mn></msub></mtd><mtd><msub><mi>m</mi><mn>32</mn></msub></mtd><mtd><msub><mi>m</mi><mn>42</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>13</mn></msub></mtd><mtd><msub><mi>m</mi><mn>23</mn></msub></mtd><mtd><msub><mi>m</mi><mn>33</mn></msub></mtd><mtd><msub><mi>m</mi><mn>43</mn></msub></mtd></mtr><mtr><mtd><msub><mi>m</mi><mn>14</mn></msub></mtd><mtd><msub><mi>m</mi><mn>24</mn></msub></mtd><mtd><msub><mi>m</mi><mn>34</mn></msub></mtd><mtd><msub><mi>m</mi><mn>44</mn></msub></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left [ \begin{matrix} m_{11} & m_{21} & m_{31} & m_{41} \\ m_{12} & m_{22} & m_{32} & m_{42} \\ m_{13} & m_{23} & m_{33} & m_{43} \\ m_{14} & m_{24} & m_{34} & m_{44} \end{matrix} \right ]</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

`DOMMatrix` インターフェイスは、マークアップ内のすべての行列に使用することを意図して設計されています。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 変更不可能な相当品である {{domxref("DOMMatrixReadOnly")}}
