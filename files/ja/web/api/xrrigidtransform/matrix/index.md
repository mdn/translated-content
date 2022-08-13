---
title: XRRigidTransform.matrix
slug: Web/API/XRRigidTransform/matrix
tags:
  - API
  - AR
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRRigidTransform
  - augmented
  - matrix
  - transform
translation_of: Web/API/XRRigidTransform/matrix
---
<p>{{APIRef("WebXR Device API")}}</p>

<p>{{domxref("XRRigidTransform")}} の <strong><code>matrix</code></strong> 読み取り専用プロパティは、オブジェクトによって表される変換行列を返します。 そして、返された行列に列ベクトルを前乗算して、{{domxref("XRRigidTransform.orientation", "orientation")}} で指定された 3D 回転でベクトルを回転させ、{{domxref("XRRigidTransform.position", "position")}} で平行移動させることができます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <em>matrix</em> = <em>xrRigidTransform</em>.matrix;</pre>

<h3 id="Value" name="Value">値</h3>

<p>{{domxref("XRRigidTransform.position", "position")}} プロパティと {{domxref("XRRigidTransform.orientation", "orientation")}} プロパティで記述される 4x4 変換行列を表す 16 個のエントリーを含む {{domxref("Float32Array")}}。</p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<h3 id="Matrix_format" name="Matrix_format">行列のフォーマット</h3>

<p>WebGL で使用されるすべての 4x4 変換行列は、16 要素の {{domxref("Float32Array")}} に格納されます。 値は、列優先の順序で配列に格納されます。 つまり、各列は上から下に向かって配列に書き込まれ、その後、1つ右側の列に移動して、次の列が配列に書き込まれます。 したがって、配列 [a0, a1, a2, ..., a13, a14, a15] の場合、行列は次のようになります。</p>

<p><math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>0</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>4</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>8</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>12</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>1</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>5</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>9</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>13</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>2</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>6</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>10</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>14</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>3</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>7</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>11</mn><mo stretchy="false">]</mo></mtd><mtd><mi>a</mi><mo stretchy="false">[</mo><mn>15</mn><mo stretchy="false">]</mo></mtd></mtr><mtr><mtd></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} a[0] &amp; a[4] &amp; a[8] &amp; a[12]\\ a[1] &amp; a[5] &amp; a[9] &amp; a[13]\\ a[2] &amp; a[6] &amp; a[10] &amp; a[14]\\ a[3] &amp; a[7] &amp; a[11] &amp; a[15]\\ \end{bmatrix}</annotation></semantics></math></p>

<p><code>matrix</code> は最初に要求されたときに計算します。 その後は、必要になるたびに計算して速度が低下しないように、キャッシュされます。</p>

<h3 id="Creating_the_matrix" name="Creating_the_matrix">行列の作成</h3>

<p>このセクションでは、より高度な読者を対象として、API が指定された変換の行列を計算する方法について説明します。 それは、新しい行列を割り当て、それに 4x4 の単位行列を書き込むことから始まります。</p>

<p><math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 &amp; 0 &amp; 0 &amp; 0\\ 0 &amp; 1 &amp; 0 &amp; 0\\ 0 &amp; 0 &amp; 1 &amp; 0\\ 0 &amp; 0 &amp; 0 &amp; 1 \end{bmatrix}</annotation></semantics></math></p>

<p>これは、適用した点、ベクトル、またはオブジェクトの向きや位置を変更しない変換です。</p>

<p>次に、このように <code>position</code> を右側の列に配置して、回転を変更せずに、各次元で指定した距離だけ座標系を変換する平行移動行列を作成します。 ここで、<code>p<sub>x</sub></code>、<code>p<sub>y</sub></code>、<code>p<sub>z</sub></code> は、{{domxref("DOMPointReadOnly")}} の <code>position</code> の <code>x</code>、<code>y</code>、<code>z</code> メンバーの値です。</p>

<p><math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>p<sub>x</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mn>0</mn></mtd><mtd><mi>p<sub>y</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd><mtd><mi>p<sub>z</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 &amp; 0 &amp; 0 &amp; x\\ 0 &amp; 1 &amp; 0 &amp; y\\ 0 &amp; 0 &amp; 1 &amp; z\\ 0 &amp; 0 &amp; 0 &amp; 1 \end{bmatrix}</annotation></semantics></math></p>

<p>次に、<code>orientation</code> で指定された単位クォータニオンから列ベクトル回転行列を計算することにより、回転行列を作成します。</p>

<p><math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>0</mn></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) &amp; 2(q_xq_y - q_zq_w) &amp; 2(q_xq_z + q_yq_w) &amp; p_x\\ 2(q_xq_y + q_zq_w) &amp; 1 - 2(q_x^2 + q_z^2) &amp; 2(q_yq_z - q_xq_w) &amp; p_y\\ 2(q_xq_z - q_yq_w) &amp; 2(q_yq_z + q_xq_w) &amp; 1 - 2(q_x^2 + q_y^2) &amp; p_z\\ 0 &amp; 0 &amp; 0 &amp; 1 \end{bmatrix}</annotation></semantics></math></p>

<p>最終的な変換 <code>matrix</code> は、平行移動行列に回転行列を <code>(translation * rotation)</code> の順序で乗算することで計算します。 これにより、<code>matrix</code> が返す最終的な変換行列を生成します。</p>

<p><math display="block"><semantics><mrow><mo>[</mo><mtable rowspacing="0.5ex"><mtr><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>-</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mi>p<sub>x</sub></mi></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>y</mi></msub><mo>+</mo><msub><mi>q</mi><mi>z</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mi>p<sub>y</sub></mi></mtd></mtr><mtr><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>-</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>2</mn><mo stretchy="false">(</mo><msub><mi>q</mi><mi>y</mi></msub><msub><mi>q</mi><mi>z</mi></msub><mo>+</mo><msub><mi>q</mi><mi>x</mi></msub><msub><mi>q</mi><mi>w</mi></msub><mo stretchy="false">)</mo></mtd><mtd><mn>1</mn><mo>-</mo><mn>2</mn><mo stretchy="false">(</mo><msubsup><mi>q</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>q</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy="false">)</mo></mtd><mtd><mi>p<sub>z</sub></mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><mrow></mrow><annotation encoding="TeX">\begin{bmatrix} 1 - 2(q_y^2 + q_z^2) &amp; 2(q_xq_y - q_zq_w) &amp; 2(q_xq_z + q_yq_w) &amp; p_x\\ 2(q_xq_y + q_zq_w) &amp; 1 - 2(q_x^2 + q_z^2) &amp; 2(q_yq_z - q_xq_w) &amp; p_y\\ 2(q_xq_z - q_yq_w) &amp; 2(q_yq_z + q_xq_w) &amp; 1 - 2(q_x^2 + q_y^2) &amp; p_z\\ 0 &amp; 0 &amp; 0 &amp; 1 \end{bmatrix}</annotation></semantics></math></p>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、特定のオフセットと向きに一致するようにオブジェクトを配置するために、WebGL オブジェクトのレンダリング中に変換として使用できる行列を作成するための変換が作成されます。 次に、<code>matrix</code> を、WebGL を使用して、指定された名前に一致するオブジェクトを指定された位置と向きに配置するために指定された変換行列を使用してレンダリングするライブラリー関数に渡します。</p>

<pre class="brush: js notranslate">let transform = new XRRigidTransform(
                      {x: 0, y: 0.5, z: 0.5},
                      {x: 0, y: -0.5, z: -0.5, w: 1});
drawGLObject("magic-lamp", transform.matrix);
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("WebXR","#dom-xrrigidtransform-matrix","XRRigidTransform.matrix")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XRRigidTransform.matrix")}}</div>
