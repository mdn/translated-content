---
title: 'Window: resize イベント'
slug: Web/API/Window/resize_event
tags:
  - API
  - Reference
  - Web
  - Window
  - events
  - resize
browser-compat: api.Window.resize_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>resize</code></strong> イベントは、この文書のビュー (ウィンドウ) の大きさが変更されたときに発行されます。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("UIEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onresize", "onresize")}}</td>
  </tr>
 </tbody>
</table>

<p>一部の初期のブラウザーでは、 <code>resize</code> イベントのハンドラーをすべての HTML 要素に設定することができました。現在でも <code>onresize</code> 属性や {{domxref("EventTarget.addEventListener", "addEventListener()")}} を使用して、どの要素にもハンドラーを設定することができます。しかし、 <code>resize</code> イベントは {{domxref("Window", "window")}} オブジェクト (すなわち {{domxref("document.defaultView")}} で返されるもの) でのみ発行されます。 <code>window</code> オブジェクトに登録されたハンドラーのみが、 <code>resize</code> イベントを受け取ります。</p>

<p>すべての要素が大きさの変更を通知できるようにする提案があります。 <a href="https://wicg.github.io/ResizeObserver/">Resize Observer</a> で草稿のドキュメントを、 <a href="https://github.com/WICG/ResizeObserver/issues">GitHub issue</a> で進行中の議論を読むことができます。</p>

<h2 id="Examples">例</h2>

<h3 id="Window_size_logger">ウィンドウの大きさのログ出力</h3>

<p>以下の例では、ウィンドウの大きさが変更されるたびに報告を出力します。この例は <code>&lt;iframe&gt;</code> 内で実行されているので、効果を見る前に実際に <code>&lt;iframe&gt;</code> の大きさを変更する必要があることを覚えておいてください。</p>

<pre class="brush: html">&lt;p&gt;ブラウザーウィンドウを変更すると &lt;code&gt;resize&lt;/code&gt; イベントを発行します。&lt;/p&gt;
&lt;p&gt;ウィンドウの高さ: &lt;span id="height"&gt;&lt;/span&gt;&lt;/p&gt;
&lt;p&gt;ウィンドウの幅: &lt;span id="width"&gt;&lt;/span&gt;&lt;/p&gt;</pre>

<pre class="brush: js">const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;</pre>

<p>{{EmbedLiveSample("Window_size_logger")}}</p>

<h3 id="addEventListener_equivalent">addEventListener による同等の実装</h3>

<p>イベントハンドラーを設定するために <code><a href="/ja/docs/Web/API/EventTarget/addEventListener">addEventListener()</a></code> メソッドを使用することもできます。</p>

<pre class="brush: js">window.addEventListener('resize', reportWindowSize);</pre>

<h2 id="Specifications">仕様書</h2>

{{Specifications}}

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat}}</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{domxref("GlobalEventHandlers.onresize")}}</li>
</ul>
