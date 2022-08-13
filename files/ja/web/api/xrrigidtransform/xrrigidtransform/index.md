---
title: XRRigidTransform()
slug: Web/API/XRRigidTransform/XRRigidTransform
tags:
  - API
  - AR
  - Constructor
  - Mixed Reality
  - Orientation
  - Position
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - XR
  - XRRigidTransform
  - augmented
  - transform
translation_of: Web/API/XRRigidTransform/XRRigidTransform
---
<div>{{APIRef("WebXR Device API")}}</div>

<p><span class="seoSummary"><strong><code>XRRigidTransform()</code></strong> コンストラクターは、点またはオブジェクトの位置と向きを表す新しい {{domxref("XRRigidTransform")}} オブジェクトを作成して返します。</span> 特に、<code>XRRigidTransform</code> は、空間を横断する座標系間で平行移動するための変換を提供するときに使用されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <em>xrRigidTransform</em> = new XRRigidTransform(<em>position</em>, <em>orientation</em>);</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code>position</code> {{optional_inline}}</dt>
 <dd>点またはオブジェクトが配置される座標を指定する {{domxref("DOMPointInit")}} に準拠するオブジェクト。 これらの寸法はメートルで指定します。 このパラメーターが省略されているか、<code>DOMPointInit</code> と互換性がない場合、使用される位置は <code>{x: 0, y: 0, z: 0, w: 1}</code> であると見なされます。 <code>w</code> は<em>常に</em> 1 でなければなりません。</dd>
 <dt><code>orientation</code> {{optional_inline}}</dt>
 <dd>オブジェクトが向いている方向を指定する {{domxref("DOMPointInit")}} に準拠するオブジェクト。 向きのデフォルト値は <code>{x: 0, y: 0, z: 0, w: 1}</code> です。 指定された向きは、まだ正規化されていない場合は正規化されます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>オブジェクトの位置と向きを原点から指定された <code>position</code> に調整し、<code>orientation</code> によって示される方向を向く変換行列を表すように初期化された新しい {{domxref("XRRigidTransform")}} オブジェクト。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt><code>TypeError</code></dt>
 <dd>指定された <code>position</code> の <code>w</code> 座標の値が 1.0 ではありません。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、シーンのアニメーションの開始が示されています。 特定のタイプの参照空間の要求から始まり、最初のアニメーションフレームを要求する前に、変換に基づいて座標系をシフトします。</p>

<pre class="brush: js notranslate">let animationFrameRequestID = 0;

xrSession.requestReferenceSpace("local-floor")
.then((refSpace) =&gt; {
  xrReferenceSpace = refSpace.getOffsetReferenceSpace(
        new XRRigidTransform(viewerPosition, viewerOrientation));
  animationFrameRequestID = xrSession.requestAnimationFrame(drawFrame);
});</pre>

<p><code>local-floor</code> タイプの参照空間を要求した後、返された promise は最終的に解決され、その時点で新しい参照空間オブジェクト <code>refSpace</code> を受け取ります。 ビューアーの初期位置と向きから <code>XRRigidTransform</code> を作成した後、新しい変換を {{domxref("XRReferenceSpace.getOffsetReferenceSpace", "getOffsetReferenceSpace()")}} に渡して<em>別</em>の参照空間を作成します。 オフセットして、その原点が <code>viewerPosition</code> によって指定された座標と同じ空間内の場所に配置されるようにします。 向きも同様に修正されます。</p>

<p>次に、{{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} が呼び出され、描画する新しいアニメーションフレームを要求します。 <code>drawFrame()</code> コールバックは、システムが次のフレームを描画する準備ができたときに実行されます。</p>

<p><a href="/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion">移動、向き、モーション</a>には、さらに多くの例があります。</p>

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
   <td>{{SpecName("WebXR","#dom-xrrigidtransform-xrrigidtransform","XRRigidTransform()")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XRRigidTransform.XRRigidTransform")}}</div>
