---
title: VRDisplay.getPose()
slug: Web/API/VRDisplay/getPose
translation_of: Web/API/VRDisplay/getPose
original_slug: Web/API/VRDevice/getPose
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>getPose()</strong></code> メソッドは，現在のフレームが実際に描画される時点の未来の <code>VRDisplay</code> の予測ポーズを決める {{domxref("VRPose")}} オブジェクトを返します．</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js">var myPose = vrDisplayInstance.getPose();
</pre>

<h3 id="パラメータ">パラメータ</h3>

<p>なし．</p>

<h3 id="戻り値">戻り値</h3>

<p>{{domxref("VRPose")}} オブジェクト．</p>

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
   <td>{{SpecName('WebVR', '#dom-vrdisplay-getpose', 'getPose()')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.getPose")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
