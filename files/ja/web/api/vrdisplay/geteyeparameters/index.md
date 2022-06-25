---
title: VRDisplay.getEyeParameters()
slug: Web/API/VRDisplay/getEyeParameters
translation_of: Web/API/VRDisplay/getEyeParameters
original_slug: Web/API/VRDevice/getEyeParameters
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>getEyeParameters()</strong></code> メソッドは，指定下側の眼のeyeパラメータを持っている {{domxref("VREyeParameters")}} オブジェクトを返します．</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js">var myEyeParameters = vrDisplayInstance.getEyeParameters(<em>whichEye</em>);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt>whichEye</dt>
 <dd>取得したい側のeyeパラメータの眼を表す {{domxref("DOMString")}} です．指定できる値は (<a href="https://mozvr.com/webvr-spec/#enumdef-vreye">VREye enum</a> で定義されている) <code>left</code> と <code>right</code> です．</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p> {{domxref("VREyeParameters")}} オブジェクトか，VRコンテンツを表示できない場合(例えば {{domxref("VRDisplayCapabilities.canPresent")}} が <code>false</code> を返す場合)は null です．</p>

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
   <td>{{SpecName('WebVR', '#dom-vrdisplay-geteyeparameters', 'getEyeParameters()')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.getEyeParameters")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> —  Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
