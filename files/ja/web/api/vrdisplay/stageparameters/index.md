---
title: VRDisplay.stageParameters
slug: Web/API/VRDisplay/stageParameters
translation_of: Web/API/VRDisplay/stageParameters
original_slug: Web/API/VRDevice/stageParameters
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>stageParameters</strong></code> 読取専用プロパティは， <code>VRDisplay</code> がルームスケール体験をサポートしている場合に，ルームスケールパラメータを持つ {{domxref("VRStageParameters")}} オブジェクトを返します． </p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js">var myStageParameters = vrDisplayInstance.stageParameters;
</pre>

<h3 id="値">値</h3>

<p><code>VRDisplay</code> のルームスケールパラメータを持つ {{domxref("VRStageParameters")}} オブジェクトです．ルームスケール体験をサポートしていない<code>VRDisplayでは</code> <code>null</code> です．</p>

<h2 id="例">例</h2>

<p>{{page("/Web/API/VRStageParameters", "Examples")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#dom-vrdisplay-stageparameters', 'stageParameters')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.stageParameters")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
