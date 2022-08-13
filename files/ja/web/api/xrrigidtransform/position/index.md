---
title: XRRigidTransform.position
slug: Web/API/XRRigidTransform/position
tags:
  - 3D
  - API
  - AR
  - Coordinates
  - Location
  - Point
  - Position
  - Property
  - Reference
  - VR
  - WebXR
  - WebXR API
  - XR
  - XRRigidTransform
  - transform
translation_of: Web/API/XRRigidTransform/position
---
<p>{{APIRef("WebXR Device API")}}</p>

<p>{{domxref("XRRigidTransform")}} の <strong><code>position</code></strong> 読み取り専用プロパティは、変換の平行移動成分を記述する、メートルで指定された 3D 点を提供する {{domxref("DOMPointReadOnly")}} オブジェクトです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <em>pos</em> = <em>xrRigidTransform</em>.position;</pre>

<h3 id="Value" name="Value">値</h3>

<p>変換行列の 3D 位置成分を示す読み取り専用の {{domxref("DOMPointReadOnly")}}。 単位はメートルです。</p>

<div class="blockIndicator note">
<p><strong>注</strong>: 点の <code>w</code> 成分は常に 1.0 です。</p>
</div>

<h2 id="Example" name="Example">例</h2>

<p>オブジェクトを目の高さに配置するために使用できる参照空間を作成するには、次のようにします（目の高さが 1.5 メートルであると想定）。</p>

<pre class="brush: js notranslate">function onSessionStarted(xrSession) {
  xrSession.addEventListener("end", onSessionEnded);

  gl = initGraphics(xrSession);

  let glLayer = new XRWebGLLayer(xrSession, gl);
  xrSession.updateRenderState({ baseLayer: glLayer });

  if (immersiveSession) {
    xrSession.requestReferenceSpace("bounded-floor").then((refSpace) =&gt; {
      refSpaceCreated(refSpace);
    }).catch(() =&gt; {
      session.requestReferenceSpace("local-floor").then(refSpaceCreated);
    });
  } else {
    session.requestReferenceSpace("viewer").then(refSpaceCreated);
  }
}

function refSpaceCreated(refSpace) {
  if (immersiveSession) {
    xrReferenceSpace = refSpace;
  } else {
    xrReferenceSpace = refSpace.getOffsetReferenceSpace(
      new XRRigidTransform({y: -1.5});
    );
  }
  xrSession.requestAnimationFrame(onFrame);
}
</pre>

<p>WebXR で使用するグラフィックスコンテキストを設定した後、これは変数 <code>immersiveSession</code> が <code>true</code> であるかどうかを確認することから始まります。 その場合、最初に <code>bounded-floor</code> 参照空間を要求します。 それが失敗した場合（おそらく <code>bounded-floor</code> がサポートされていないため）、<code>local-floor</code> 参照空間を要求しようとします。</p>

<p>没入型セッションでない場合は、代わりに <code>viewer</code> 参照空間を要求します。</p>

<p>いずれの場合も、空間が取得されたら、<code>refSpaceCreated()</code> 関数に渡します。 没入型空間の場合、指定された空間は将来の使用のために単に保存します。 ただし、インラインセッションの場合、床レベルが自動的に調整されない空間にいることがわかっているので、オフセット参照空間を要求して、ビューアーの高さを推定床レベルの 0 メートルより 1.5 メートル上にシフトします。 その新しい参照空間は、最初に受け取ったものの代わりに使用します。</p>

<p>最後に、アニメーションフレームの要求が送信されます。</p>

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
   <td>{{SpecName("WebXR","#dom-xrrigidtransform-position","XRRigidTransform.position")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XRRigidTransform.position")}}</div>
