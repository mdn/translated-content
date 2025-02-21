---
title: XRRigidTransform.matrix
slug: Web/API/XRRigidTransform/matrix
---

{{APIRef("WebXR Device API")}}

{{domxref("XRRigidTransform")}} の **`matrix`** 読み取り専用プロパティは、オブジェクトによって表される変換行列を返します。 そして、返された行列に列ベクトルを前乗算して、{{domxref("XRRigidTransform.orientation", "orientation")}} で指定された 3D 回転でベクトルを回転させ、{{domxref("XRRigidTransform.position", "position")}} で平行移動させることができます。

## 構文

```
let matrix = xrRigidTransform.matrix;
```

### 値

{{domxref("XRRigidTransform.position", "position")}} プロパティと {{domxref("XRRigidTransform.orientation", "orientation")}} プロパティで記述される 4x4 変換行列を表す 16 個のエントリーを含む {{domxref("Float32Array")}}。

## 使用上の注意

### 行列のフォーマット

WebGL で使用されるすべての 4x4 変換行列は、16 要素の {{domxref("Float32Array")}} に格納されます。 値は、列優先の順序で配列に格納されます。 つまり、各列は上から下に向かって配列に書き込まれ、その後、1 つ右側の列に移動して、次の列が配列に書き込まれます。 したがって、配列 \[a0, a1, a2, ..., a13, a14, a15] の場合、行列は次のようになります。

<math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>0</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>4</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>8</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>12</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>1</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>5</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>9</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>13</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>2</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>6</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>10</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>14</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>3</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>7</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>11</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>15</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} a[0] &#x26; a[4] &#x26; a[8] &#x26; a[12]\\ a[1] &#x26; a[5] &#x26; a[9] &#x26; a[13]\\ a[2] &#x26; a[6] &#x26; a[10] &#x26; a[14]\\ a[3] &#x26; a[7] &#x26; a[11] &#x26; a[15]\\ \end{bmatrix}</annotation></semantics></math>

`matrix` は最初に要求されたときに計算します。 その後は、必要になるたびに計算して速度が低下しないように、キャッシュされます。

### 行列の作成

このセクションでは、より高度な読者を対象として、API が指定された変換の行列を計算する方法について説明します。 それは、新しい行列を割り当て、それに 4x4 の単位行列を書き込むことから始まります。

<math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 &#x26; 0 &#x26; 0 &#x26; 0\\ 0 &#x26; 1 &#x26; 0 &#x26; 0\\ 0 &#x26; 0 &#x26; 1 &#x26; 0\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatrix}</annotation></semantics></math>

これは、適用した点、ベクトル、またはオブジェクトの向きや位置を変更しない変換です。

次に、このように `position` を右側の列に配置して、回転を変更せずに、各次元で指定した距離だけ座標系を変換する平行移動行列を作成します。 ここで、`px`、`py`、`pz` は、{{domxref("DOMPointReadOnly")}} の `position` の `x`、`y`、`z` メンバーの値です。

<math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>p<sub>x</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>p<sub>y</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>p<sub>z</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 &#x26; 0 &#x26; 0 &#x26; x\\ 0 &#x26; 1 &#x26; 0 &#x26; y\\ 0 &#x26; 0 &#x26; 1 &#x26; z\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatrix}</annotation></semantics></math>

次に、`orientation` で指定された単位クォータニオンから列ベクトル回転行列を計算することにより、回転行列を作成します。

<math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) &#x26; 2(q_xq_y - q_zq_w) &#x26; 2(q_xq_z + q_yq_w) &#x26; p_x\\ 2(q_xq_y + q_zq_w) &#x26; 1 - 2(q_x^2 + q_z^2) &#x26; 2(q_yq_z - q_xq_w) &#x26; p_y\\ 2(q_xq_z - q_yq_w) &#x26; 2(q_yq_z + q_xq_w) &#x26; 1 - 2(q_x^2 + q_y^2) &#x26; p_z\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatrix}</annotation></semantics></math>

最終的な変換 `matrix` は、平行移動行列に回転行列を `(translation * rotation)` の順序で乗算することで計算します。 これにより、`matrix` が返す最終的な変換行列を生成します。

<math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mi>p<sub>x</sub></mi></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mi>p<sub>y</sub></mi></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mi>p<sub>z</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><mrow></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) &#x26; 2(q_xq_y - q_zq_w) &#x26; 2(q_xq_z + q_yq_w) &#x26; p_x\\ 2(q_xq_y + q_zq_w) &#x26; 1 - 2(q_x^2 + q_z^2) &#x26; 2(q_yq_z - q_xq_w) &#x26; p_y\\ 2(q_xq_z - q_yq_w) &#x26; 2(q_yq_z + q_xq_w) &#x26; 1 - 2(q_x^2 + q_y^2) &#x26; p_z\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatrix}</annotation></semantics></math>

## 例

この例では、特定のオフセットと向きに一致するようにオブジェクトを配置するために、WebGL オブジェクトのレンダリング中に変換として使用できる行列を作成するための変換が作成されます。 次に、`matrix` を、WebGL を使用して、指定された名前に一致するオブジェクトを指定された位置と向きに配置するために指定された変換行列を使用してレンダリングするライブラリー関数に渡します。

```js
let transform = new XRRigidTransform(
  { x: 0, y: 0.5, z: 0.5 },
  { x: 0, y: -0.5, z: -0.5, w: 1 },
);
drawGLObject("magic-lamp", transform.matrix);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
