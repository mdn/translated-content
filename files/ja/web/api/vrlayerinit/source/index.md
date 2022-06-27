---
title: VRLayerInit.source
slug: Web/API/VRLayerInit/source
tags:
  - API
  - Experimental
  - Property
  - Reference
  - VR
  - VRLayerInit
  - Virtual Reality
  - WebVR
  - source
translation_of: Web/API/VRLayerInit/source
original_slug: Web/API/VRLayer/source
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRLayerInit")}} インターフェイス（ディクショナリ）の <code><strong>source</strong></code> プロパティは、 {{domxref("VRDisplay")}} によってコンテンツが表示されるキャンバスを定義します。</p>

<h2 id="構文">構文</h2>

<pre class="brush: js notranslate">var myVRLayerInit = { };
myVRLayerInit.source = myCanvas;</pre>

<h3 id="値">値</h3>

<p>{{domxref("HTMLCanvasElement")}} または {{domxref("OffscreenCanvas")}} オブジェクト。</p>

<h2 id="例">例</h2>

<p>{{page("/Web/API/VRLayerInit", "Examples")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">ステータス</th>
   <th scope="col">備考</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#dom-vrlayerinit-source', 'source')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>

<p>{{Compat("api.VRLayerInit.source")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a></li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — demos, downloads, and other resources from the Mozilla VR team.</li>
</ul>
