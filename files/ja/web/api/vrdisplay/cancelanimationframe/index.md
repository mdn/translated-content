---
title: VRDisplay.cancelAnimationFrame()
slug: Web/API/VRDisplay/cancelAnimationFrame
translation_of: Web/API/VRDisplay/cancelAnimationFrame
original_slug: Web/API/VRDevice/cancelAnimationFrame
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>cancelAnimationFrame()</strong></code> メソッドは， {{domxref("Window.cancelAnimationFrame")}} の特別な実装で， {{domxref("VRDisplay.requestAnimationFrame()")}} で登録したコールバックを登録解除します．</p>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js">vrDisplayInstance.cancelAnimationFrame(<em>handle</em>);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt>handle</dt>
 <dd>登録解除したいハンドルを与えます．ハンドルは {{domxref("VRDisplay.requestAnimationFrame()")}} を呼出した時に戻り値として取得できます．</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p>void．</p>

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
   <td>{{SpecName('WebVR', '#dom-vrdisplay-cancelanimationframe', 'cancelAnimationFrame()')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.cancelAnimationFrame")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
