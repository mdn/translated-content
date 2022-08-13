---
title: XRRigidTransform
slug: Web/API/XRRigidTransform
tags:
  - API
  - AR
  - Interface
  - Reality
  - Reference
  - Reference Space
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRReferenceSpace
  - XRRigidTransform
  - augmented
  - space
  - transform
translation_of: Web/API/XRRigidTransform
---
<p>{{APIRef("WebXR Device API")}}</p>

<p><span class="seoSummary"><strong><code>XRRigidTransform</code></strong> は、位置と向きによって記述される 3D 幾何学的変換を表す <a href="/ja/docs/Web/API/WebXR_API">WebXR API</a> のインターフェイスです。</span></p>

<p><code>XRRigidTransform</code> は、以下を含む WebXR API 全体で変換を指定するために使用されます。</p>

<ul>
 <li>{{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} を使用して新しい参照空間を作成するときに使用する、親参照空間を基準にしたオフセットと向き。</li>
 <li>{{domxref("XRView")}} の {{domxref("XRView.transform", "transform")}}。</li>
 <li>{{domxref("XRPose")}} の {{domxref("XRPose.transform", "transform")}}。</li>
 <li>{{domxref("XRReferenceSpace")}} が受信した {{domxref("XRReferenceSpace.reset_event", "reset")}} イベントにある {{domxref("XRReferenceSpaceEvent")}} イベントの {{domxref("XRReferenceSpaceEvent.transform", "transform")}} プロパティ。</li>
</ul>

<p>行列データを提供する裸の配列ではなく、これらの場所で <code>XRRigidTransform</code> を使用する利点は、<code>XRRigidTransform</code> が変換の逆の計算などを自動的に実行することです。 さらに良いことに、一度計算したらキャッシュされるため、後続の要求は大幅に高速化されます。</p>

<h2 id="Constructor" name="Constructor">コンストラクター</h2>

<dl>
 <dt>{{domxref("XRRigidTransform.XRRigidTransform", "new XRRigidTransform()")}}</dt>
 <dd>指定された位置や向きを適用する変換を表す新しい <code>XRRigidTransform</code> オブジェクトを作成します。</dd>
</dl>

<h2 id="Properties" name="Properties">プロパティ</h2>

<dl>
 <dt>{{DOMxRef("XRRigidTransform.position")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>変換の平行移動成分を記述する、メートルで表される3次元の点を指定する {{DOMxRef("DOMPointReadOnly")}}。 {{DOMxRef("DOMPointReadonly.w", "w")}} プロパティは常に <code>1.0</code> です。</dd>
 <dt>{{DOMxRef("XRRigidTransform.orientation")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>変換の回転成分を記述する単位クォータニオンを含む {{DOMxRef("DOMPointReadOnly")}}。 単位クォータニオンとして、その長さは常に <code>1.0</code> に正規化されます。</dd>
 <dt>{{DOMxRef("XRRigidTransform.matrix")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>16 メンバーの {{DOMxRef("Float32Array")}} の形式で変換行列を返します。 配列を使用して行列を表す方法については、<a href="/ja/docs/Web/API/XRRigidTransform/matrix#Matrix_format">行列のフォーマット</a>のセクションを参照してください。</dd>
</dl>

<dl>
 <dt>{{DOMxRef("XRRigidTransform.inverse")}} {{readonlyInline}} {{experimental_inline}}</dt>
 <dd>この変換の逆である <code>XRRigidTransform</code> を返します。 つまり、元の変換によって以前に変換されたオブジェクトに適用された場合、変換が元に戻され、元のオブジェクトが返されます。</dd>
</dl>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p><code>XRRigidTransform</code> が解釈されると、位置が適用される前に、影響を受けるオブジェクトに常に向きが適用されます。</p>

<h2 id="Example" name="Example">例</h2>

<p>このコードスニペットは、<code>XRRigidTransform</code> を作成して、新しい参照空間を作成するときに使用する現在の参照空間に対するオフセットと向きを指定します。 次に、セッションの {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} メソッドを呼び出して、最初のアニメーションフレームコールバックを要求します。</p>

<pre class="brush: js notranslate">xrSession.requestReferenceSpace(refSpaceType)
.then((refSpace) =&gt; {
  xrReferenceSpace = refSpace;
  xrReferenceSpace = xrReferenceSpace.getOffsetReferenceSpace(
        new XRRigidTransform(viewerStartPosition, cubeOrientation));
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);</pre>

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
   <td>{{SpecName("WebXR","#xrrigidtransform-interface","XRRigidTransform")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XRRigidTransform")}}</div>
