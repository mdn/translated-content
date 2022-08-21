---
title: XRRigidTransform.orientation
slug: Web/API/XRRigidTransform/orientation
tags:
  - API
  - AR
  - Orientation
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
  - rotation
translation_of: Web/API/XRRigidTransform/orientation
---
<p>{{APIRef("WebXR Device API")}}</p>

<p><span class="seoSummary">{{domxref("XRRigidTransform")}} の <strong><code>orientation</code></strong> 読み取り専用プロパティは、オブジェクトによって表される変換の回転成分を指定する正規化された{{Glossary("quaternion","クォータニオン")}}（<strong><a href="https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%85%83%E6%95%B0#%E5%8D%98%E4%BD%8D%E5%9B%9B%E5%85%83%E6%95%B0">単位クォータニオン</a></strong>または<strong>ベルソル</strong>とも呼ばれます）を含む {{DOMxRef("DOMPointReadOnly")}} です。</span> 長さが正確に 1.0 メートルではないクォータニオンを指定すると、正規化されます。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <em>orientation</em> = <em>xrRigidTransform</em>.orientation;</pre>

<h3 id="Value" name="Value">Value</h3>

<p>変換の向き成分を提供する単位クォータニオンを含む {{domxref("DOMPointReadOnly")}} オブジェクト。 単位クォータニオンとして、返されるクォータニオンの長さは常に 1.0 メートルです。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>地面から 2 メートル離れた位置に、真上を向くように配置された参照空間を作成するには、次のようにします。</p>

<pre class="brush: js notranslate">xrReferenceSpace = refSpace.getOffsetReferenceSpace(
  new XRRigidTransform({y: -2}, {x: 0.0, y: 1.0, z: 0.0, w: 1.0});
);
</pre>

<p>ここで指定されている単位クォータニオンは [0.0, 1.0, 0.0, 1.0] であり、オブジェクトが y 軸に沿って直接向いている必要があることを示します。</p>

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
   <td>{{SpecName("WebXR","#dom-xrrigidtransform-orientation","XRRigidTransform.orientation")}}</td>
   <td>{{Spec2("WebXR")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>{{Compat("api.XRRigidTransform.orientation")}}</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebXR_Device_API/Movement_and_motion">移動、向き、モーション</a></li>
 <li><a href="https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%85%83%E6%95%B0#%E5%8D%98%E4%BD%8D%E5%9B%9B%E5%85%83%E6%95%B0">単位クォータニオン</a></li>
 <li><a href="https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation">クォータニオンと空間回転</a>（英語）</li>
</ul>
