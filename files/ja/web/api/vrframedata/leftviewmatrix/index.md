---
title: VRFrameData.leftViewMatrix
slug: Web/API/VRFrameData/leftViewMatrix
translation_of: Web/API/VRFrameData/leftViewMatrix
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p><strong><code>leftViewMatrix</code></strong>は、{{domxref("VRFrameData")}}インタフェースの読み取り専用プロパティであり、4行4列の行列を表す{{domxref("Float32Array")}} 返します。この行列は、左目の描画に利用されるビュー変換を表します。</p>

<p>この値は、WebGLの{{domxref("WebGLRenderingContext.uniformMatrix", "uniformMatrix4fv")}}関数へ直接渡されるでしょう。</p>

<div class="warning">
<p><strong>重要</strong>: 描画時にアプリケーションがこの行列を使用することを強く薦めます。</p>
</div>

<h2 id="文法">文法</h2>

<pre class="brush: js">var myLVM = vrFrameDataInstance.leftViewMatrix;</pre>

<h3 id="値">値</h3>

<p>{{domxref("Float32Array")}}型のオブジェクトです。</p>

<h2 id="例">例</h2>

<p>{{page("/Web/API/VRDisplay/getFrameData", "Examples")}}</p>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状況</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('WebVR 1.1', '#dom-vrframedata-leftviewmatrix', 'leftViewMatrix')}}</td>
   <td>{{Spec2('WebVR 1.1')}}</td>
   <td>初版</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザ互換性">ブラウザ互換性</h2>

<p>{{Compat("api.VRFrameData.leftViewMatrix")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage (英語)</a></li>
 <li><a href="http://mozvr.com/">MozVr.com (英語)</a>  — デモ、ダウンロード、Mozilla VRチームからのその他のリソース</li>
</ul>
