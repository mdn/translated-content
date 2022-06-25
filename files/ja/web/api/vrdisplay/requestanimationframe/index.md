---
title: VRDisplay.requestAnimationFrame()
slug: Web/API/VRDisplay/requestAnimationFrame
translation_of: Web/API/VRDisplay/requestAnimationFrame
original_slug: Web/API/VRDevice/requestAnimationFrame
---
<div>{{APIRef("WebVR API")}}{{SeeCompatTable}}</div>

<p>{{domxref("VRDisplay")}} インターフェイスの <code><strong>requestAnimationFrame()</strong></code> メソッドは，{{domxref("Window.requestAnimationFrame")}} の特別な実装です．このメソッドは <code>VRDisplay</code> がレンダリングされている間，新しいフレーム毎に呼出されるコールバック関数を持ちます:</p>

<ul>
 <li><code>VRDisplay</code> がシーンを表示していないときは， {{domxref("Window.requestAnimationFrame")}} と等価な働きをします．</li>
 <li>VRDisplay が表示されている場合は，<code>VRDisplay のネイティブなリフレッシュレートでコールバックが呼び出されます．</code></li>
</ul>

<h2 id="シンタックス">シンタックス</h2>

<pre class="brush: js">var handle = vrDisplayInstance.requestAnimationFrame(<em>callback</em>);
</pre>

<h3 id="パラメータ">パラメータ</h3>

<dl>
 <dt>callback</dt>
 <dd><code>描画されている VRDisplay の新しいフレーム描画の度に呼出されるコールバック関数．</code></dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<p><code>requestAnimationFrame()呼出しのハンドルを表す</code> long値．この値は，コールバックを登録解除するために {{domxref("VRDisplay.cancelAnimationFrame()")}} 呼出しへ渡すのに使えます．</p>

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
   <td>{{SpecName('WebVR', '#dom-vrdisplay-requestanimationframe', 'requestAnimationFrame()')}}</td>
   <td>{{Spec2('WebVR')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.VRDisplay.requestAnimationFrame")}}</p>

<h2 id="参照">参照</h2>

<ul>
 <li><a href="/ja/docs/Web/API/WebVR_API">WebVR API homepage</a>.</li>
 <li><a href="http://mozvr.com/">MozVr.com</a> — Mozilla VRチームのデモ，ダウンロード，その他のリソース．</li>
</ul>
