---
title: DOMMatrix
slug: Web/API/DOMMatrix
l10n:
  sourceCommit: 359abb1dcdc87d46d7271fc28c53a998a5523bf1
---

{{APIRef("Geometry Interfaces")}}{{AvailableInWorkers}}

**`DOMMatrix`** は、二次元または三次元の回転や平行移動などの変換に適した 4×4 行列を表します。 これは {{domxref("DOMMatrixReadOnly")}} インターフェイスの変更可能なバージョンです。
このインターフェイスは[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)内で利用できるはずですが、一部の実装はまだそうなっていません。

**`WebKitCSSMatrix`** および **`SVGMatrix`** は **`DOMMatrix`** の別名です。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("DOMMatrix.DOMMatrix","DOMMatrix()")}}
  - : 新しい `DOMMatrix` オブジェクトを作成します。

## インスタンスプロパティ

_このインターフェイスには {{domxref("DOMMatrixReadOnly")}} から継承したプロパティがありますが、一部のプロパティは変更可能に変更されています。_

- `m11`, `m12`, `m13`, `m14`, `m21`, `m22`, `m23`, `m24`, `m31`, `m32`, `m33`, `m34`, `m41`, `m42`, `m43`, `m44`
  - : 4×4 行列の各成分を表す倍精度浮動小数点数で、 `m11` から `m14` が最初の列、 `m21` から `m24` が 2 つ目の列、というようになっています。
- `a`, `b`, `c`, `d`, `e`, `f`
  - : 二次元の回転と平行移動を行うために必要となる、 4×4 行列の成分を表す倍精度浮動小数点数の値です。下記に示すように、これらは 4×4 行列の特定の成分の別名です。

    | 二次元 | 三次元の等価物 |
    | ------ | -------------- |
    | `a`    | `m11`          |
    | `b`    | `m12`          |
    | `c`    | `m21`          |
    | `d`    | `m22`          |
    | `e`    | `m41`          |
    | `f`    | `m42`          |

## インスタンスメソッド

_このインターフェイスには以下のメソッドがあり、また {{domxref("DOMMatrixReadOnly")}} から継承したメソッドがあります。_

- {{domxref("DOMMatrix.invertSelf()")}}
  - : この行列を逆行列に変更します。逆行列にできない場合、その成分はすべて `NaN` に設定され、[`is2D`](/ja/docs/Web/API/DOMMatrixReadOnly/is2D) は `false` を返します。
- {{domxref("DOMMatrix.multiplySelf()")}}
  - : 指定した `DOMMatrix` と後乗算することで、行列を変更します。これは点積 `A⋅B` と等価であり、行列 `A` は入力行列、 `B` はメソッドへの入力として指定された行列です。自分自身を返します。
- {{domxref("DOMMatrix.preMultiplySelf()")}}
  - : 指定した `DOMMatrix` との前乗算によって、行列を変更します。自分自身を返します。
- {{domxref("DOMMatrix.translateSelf()")}}
  - : 指定したベクトルを適用して行列を変更します。既定値では `[0, 0, 0]` です。自分自身を返します。
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

- {{domxref("DOMMatrix.fromFloat32Array_static", "fromFloat32Array()")}}
  - : 新しい `DOMMatrix` オブジェクトを作成し、指定された {{jsxref("Float32Array")}} の中の 6 個または 16 個の単精度（32 ビット）浮動小数点値で初期化します。
- {{domxref("DOMMatrix.fromFloat64Array_static", "fromFloat64Array()")}}
  - : 新しい `DOMMatrix` オブジェクトを作成し、指定された {{jsxref("Float64Array")}} の中の 6 個または 16 個の倍精度（64 ビット）浮動小数点値で初期化します。
- {{domxref("DOMMatrix.fromMatrix_static", "fromMatrix()")}}
  - : 新しい `DOMMatrix` オブジェクトを作成し、指定された既存の行列、またはそのプロパティの値を提供するオブジェクトで初期化します。

## 使用上のメモ

`DOMMatrix` インターフェイスで定義される行列は、4 行 4 列で構成されます。この記事で数学を説明することはできませんが、この 4×4 のサイズは、二次元または三次元のジオメトリーに適用する変換を記述するのに十分です。

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

- {{domxref("DOMMatrixReadOnly.is2D")}}
- {{domxref("DOMMatrixReadOnly.isIdentity")}}
