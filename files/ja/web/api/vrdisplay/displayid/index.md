---
title: VRDisplay.displayId
slug: Web/API/VRDisplay/displayId
tags:
  - API
  - Experimental
  - Property
  - Reference
  - VR
  - VRDisplay
  - Virtual Reality
  - WebVR
  - displayId
translation_of: Web/API/VRDisplay/displayId
original_slug: Web/API/VRDevice/displayId
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <strong><code>displayId</code></strong> 読み取り専用プロパティは、この特定の <code>VRDisplay</code> の識別子を返します。これは、 <a href="/ja/docs/Web/API/Gamepad_API">Gamepad API</a> の関連付けポイントとしても使用されます( {{domxref("Gamepad.displayId")}} を参照)。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js notranslate">var myDisplayID = vrDisplayInstance.displayId;</pre>

<h3 id="値">値</h3>

<p>特定の <code>VRDisplay</code> のIDを表す番号。</p>

<h2 id="例">例</h2>

<p>{{page("/Web/API/VRDisplayCapabilities", "Examples")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#dom-vrdisplay-displayid', 'displayId')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.VRDisplay.displayId")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a></li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — demos, downloads, and other resources from the Mozilla VR team.</li>
</ul>
