---
title: XRReferenceSpaceEvent.referenceSpace
slug: Web/API/XRReferenceSpaceEvent/referenceSpace
tags:
  - API
  - AR
  - Mixed
  - Reality
  - Reference
  - Reference Space
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRReferenceSpaceEvent
  - augmented
  - events
  - referenceSpace
  - source
translation_of: Web/API/XRReferenceSpaceEvent/referenceSpace
---
<p>{{APIRef("WebXR Device API")}}{{SecureContext_header}}</p>

<p>{{domxref("XRReferenceSpaceEvent")}} の <strong><code>referenceSpace</code></strong> 読み取り専用プロパティは、イベントの発生元である参照空間を指定します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">let <em>refSpace</em> = <em>xrReferenceSpaceEvent</em>.referenceSpace;</pre>

<h3 id="Value" name="Value">値</h3>

<p>イベントのソースを示す {{domxref("XRReferenceSpace")}}。</p>

<h2 id="Examples" name="Examples">例</h2>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebXR','#dom-xrreferencespaceevent-referencespace','XRReferenceSpaceEvent.referenceSpace')}}</td>
   <td>{{Spec2('WebXR')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.XRReferenceSpaceEvent.referenceSpace")}}</p>
