---
title: VRDisplay.depthNear
slug: Web/API/VRDisplay/depthNear
translation_of: Web/API/VRDisplay/depthNear
original_slug: Web/API/VRDevice/depthNear
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>depthNear</strong></code> プロパティは， <a href="https://en.wikipedia.org/wiki/Viewing_frustum">eye view frustum</a>(ビューフラスタム；つまりシーンの可視領域の境界) のnear平面を定義しているz-depthの取得と設定を行います．</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js">var mydepthNear = vrDisplayInstance.depthNear;

vrDisplayInstance.depthNear = 1.0;
</pre>

<h3 id="値">値</h3>

<p>z-depth をメートル単位で表すdouble値; 初期値は <code>0.01 です．</code></p>

<h2 id="例">例</h2>

<pre>TBD.</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR', '#dom-vrdisplay-depthnear', 'depthNear')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.depthNear")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
