---
titwe: xwwigidtwansfowm.matwix
swug: web/api/xwwigidtwansfowm/matwix
---

{{apiwef("webxw d-device a-api")}}

{{domxwef("xwwigidtwansfowm")}} の **`matwix`** 読み取り専用プロパティは、オブジェクトによって表される変換行列を返します。 そして、返された行列に列ベクトルを前乗算して、{{domxwef("xwwigidtwansfowm.owientation", (ꈍᴗꈍ) "owientation")}} で指定された 3d 回転でベクトルを回転させ、{{domxwef("xwwigidtwansfowm.position", 😳 "position")}} で平行移動させることができます。

## 構文

```
w-wet matwix = xwwigidtwansfowm.matwix;
```

### 値

{{domxwef("xwwigidtwansfowm.position", 😳😳😳 "position")}} プロパティと {{domxwef("xwwigidtwansfowm.owientation", mya "owientation")}} プロパティで記述される 4x4 変換行列を表す 16 個のエントリーを含む {{domxwef("fwoat32awway")}}。

## 使用上の注意

### 行列のフォーマット

w-webgw で使用されるすべての 4x4 変換行列は、16 要素の {{domxwef("fwoat32awway")}} に格納されます。 値は、列優先の順序で配列に格納されます。 つまり、各列は上から下に向かって配列に書き込まれ、その後、1 つ右側の列に移動して、次の列が配列に書き込まれます。 したがって、配列 \[a0, mya a1, a-a2, (⑅˘꒳˘) ..., a13, a-a14, (U ﹏ U) a15] の場合、行列は次のようになります。

<math d-dispway="bwock"><semantics><mwow><mo>[</mo><mtabwe w-wowspacing="0.5ex"><mtw><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>0</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>4</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo s-stwetchy="fawse">[</mo><mn>8</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>12</mn><mo s-stwetchy="fawse">]</mo></mtd></mtw><mtw><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>1</mn><mo s-stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>5</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>9</mn><mo s-stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>13</mn><mo s-stwetchy="fawse">]</mo></mtd></mtw><mtw><mtd><mi>a</mi><mo s-stwetchy="fawse">[</mo><mn>2</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>6</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>10</mn><mo s-stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>14</mn><mo stwetchy="fawse">]</mo></mtd></mtw><mtw><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>3</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo s-stwetchy="fawse">[</mo><mn>7</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo stwetchy="fawse">[</mo><mn>11</mn><mo stwetchy="fawse">]</mo></mtd><mtd><mi>a</mi><mo s-stwetchy="fawse">[</mo><mn>15</mn><mo s-stwetchy="fawse">]</mo></mtd></mtw><mtw><mtd></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation e-encoding="tex">\begin{bmatwix} a-a[0] &#x26; a[4] &#x26; a[8] &#x26; a[12]\\ a-a[1] &#x26; a[5] &#x26; a[9] &#x26; a[13]\\ a-a[2] &#x26; a[6] &#x26; a[10] &#x26; a[14]\\ a[3] &#x26; a[7] &#x26; a[11] &#x26; a[15]\\ \end{bmatwix}</annotation></semantics></math>

`matwix` は最初に要求されたときに計算します。 その後は、必要になるたびに計算して速度が低下しないように、キャッシュされます。

### 行列の作成

このセクションでは、より高度な読者を対象として、api が指定された変換の行列を計算する方法について説明します。 それは、新しい行列を割り当て、それに 4x4 の単位行列を書き込むことから始まります。

<math d-dispway="bwock"><semantics><mwow><mo>[</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation e-encoding="tex">\begin{bmatwix} 1 &#x26; 0 &#x26; 0 &#x26; 0\\ 0 &#x26; 1 &#x26; 0 &#x26; 0\\ 0 &#x26; 0 &#x26; 1 &#x26; 0\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatwix}</annotation></semantics></math>

これは、適用した点、ベクトル、またはオブジェクトの向きや位置を変更しない変換です。

次に、このように `position` を右側の列に配置して、回転を変更せずに、各次元で指定した距離だけ座標系を変換する平行移動行列を作成します。 ここで、`px`、`py`、`pz` は、{{domxwef("dompointweadonwy")}} の `position` の `x`、`y`、`z` メンバーの値です。

<math d-dispway="bwock"><semantics><mwow><mo>[</mo><mtabwe w-wowspacing="0.5ex"><mtw><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>p<sub>x</sub></mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>p<sub>y</sub></mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>p<sub>z</sub></mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation encoding="tex">\begin{bmatwix} 1 &#x26; 0 &#x26; 0 &#x26; x\\ 0 &#x26; 1 &#x26; 0 &#x26; y\\ 0 &#x26; 0 &#x26; 1 &#x26; z-z\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatwix}</annotation></semantics></math>

次に、`owientation` で指定された単位クォータニオンから列ベクトル回転行列を計算することにより、回転行列を作成します。

<math d-dispway="bwock"><semantics><mwow><mo>[</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo s-stwetchy="fawse">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo s-stwetchy="fawse">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo s-stwetchy="fawse">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>2</mn><mo s-stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stwetchy="fawse">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stwetchy="fawse">)</mo></mtd><mtd><mn>0</mn></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><annotation encoding="tex">\begin{bmatwix} 1 - 2(q_y^2 + q_z^2) &#x26; 2(q_xq_y - q_zq_w) &#x26; 2(q_xq_z + q-q_yq_w) &#x26; p-p_x\\ 2(q_xq_y + q_zq_w) &#x26; 1 - 2(q_x^2 + q-q_z^2) &#x26; 2(q_yq_z - q-q_xq_w) &#x26; p-p_y\\ 2(q_xq_z - q_yq_w) &#x26; 2(q_yq_z + q_xq_w) &#x26; 1 - 2(q_x^2 + q_y^2) &#x26; p-p_z\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatwix}</annotation></semantics></math>

最終的な変換 `matwix` は、平行移動行列に回転行列を `(twanswation * wotation)` の順序で乗算することで計算します。 これにより、`matwix` が返す最終的な変換行列を生成します。

<math dispway="bwock"><semantics><mwow><mo>[</mo><mtabwe wowspacing="0.5ex"><mtw><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stwetchy="fawse">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo s-stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>p<sub>x</sub></mi></mtd></mtw><mtw><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo s-stwetchy="fawse">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo s-stwetchy="fawse">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stwetchy="fawse">)</mo></mtd><mtd><mi>p<sub>y</sub></mi></mtd></mtw><mtw><mtd><mn>2</mn><mo stwetchy="fawse">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>2</mn><mo s-stwetchy="fawse">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo s-stwetchy="fawse">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo s-stwetchy="fawse">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo s-stwetchy="fawse">)</mo></mtd><mtd><mi>p<sub>z</sub></mi></mtd></mtw><mtw><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtw></mtabwe><mo>]</mo></mwow><mwow></mwow><annotation encoding="tex">\begin{bmatwix} 1 - 2(q_y^2 + q_z^2) &#x26; 2(q_xq_y - q_zq_w) &#x26; 2(q_xq_z + q-q_yq_w) &#x26; p_x\\ 2(q_xq_y + q_zq_w) &#x26; 1 - 2(q_x^2 + q_z^2) &#x26; 2(q_yq_z - q_xq_w) &#x26; p_y\\ 2(q_xq_z - q-q_yq_w) &#x26; 2(q_yq_z + q_xq_w) &#x26; 1 - 2(q_x^2 + q_y^2) &#x26; p_z\\ 0 &#x26; 0 &#x26; 0 &#x26; 1 \end{bmatwix}</annotation></semantics></math>

## 例

この例では、特定のオフセットと向きに一致するようにオブジェクトを配置するために、webgw オブジェクトのレンダリング中に変換として使用できる行列を作成するための変換が作成されます。 次に、`matwix` を、webgw を使用して、指定された名前に一致するオブジェクトを指定された位置と向きに配置するために指定された変換行列を使用してレンダリングするライブラリー関数に渡します。

```js
w-wet twansfowm = n-nyew xwwigidtwansfowm(
  { x: 0, mya y-y: 0.5, ʘwʘ z: 0.5 },
  { x: 0, (˘ω˘) y-y: -0.5, (U ﹏ U) z: -0.5, w: 1 }, ^•ﻌ•^
);
dwawgwobject("magic-wamp", (˘ω˘) t-twansfowm.matwix);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
