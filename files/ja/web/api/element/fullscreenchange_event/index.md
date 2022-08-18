---
title: 'Element: fullscreenchange イベント'
slug: Web/API/Element/fullscreenchange_event
tags:
  - API
  - Fullscreen API
  - Fullscreen events
  - events
  - fullscreen
  - fullscreenchange
  - イベント
  - 全画面 API
  - 全画面イベント
translation_of: Web/API/Element/fullscreenchange_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>fullscreenchange</code> イベントは、ある要素 ({{domxref("Element")}}) が全画面モードに切り替わったり、終了したりした直後に発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>不可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("Element.onfullscreenchange", "onfullscreenchange")}}</td>
  </tr>
 </tbody>
</table>

<p>このイベントは、全画面モードへ移行または終了する要素 (<code>Element</code>) へ送られます。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>この例では、 <code>fullscreenchange</code> イベントのハンドラーは、 ID が <code>fullscreen-div</code> である要素に追加されます。</p>

<p>ユーザーが "Toggle Fullscreen Mode" ボタンをクリックすると、 <code>click</code> ハンドラーが <code>div</code> の全画面モードを切り替えます。もし <code>document.fullscreenElement</code> に値があれば、全画面モードを終了します。そうでなければ、 div は全画面モードに移行します。</p>

<p><code>fullscreenchange</code> イベントが処理されたとき、要素の状態はすでに変化していることを思い出してください。よって、全画面モードへ変化した場合は、 <code>document.fullscreenElement</code> が全画面モードになった要素を指します。一方、 <code>document.fullscreenElement</code> が null の場合は、全画面モードが取り消されています。</p>

<p>すなわち、この例のコードでは、要素が現在全画面モードである場合、 <code>fullscreenchange</code> ハンドラーはコンソールへ全画面の要素の <code>id</code> をログ出力します。 <code>document.fullscreenElement</code> が null の場合は、このコードは全画面モードが終了した旨をログ出力します。</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html"> &lt;h1&gt;fullscreenchange event example&lt;/h1&gt;
 &lt;div id="fullscreen-div"&gt;
   &lt;button id="toggle-fullscreen"&gt;Toggle Fullscreen Mode&lt;/button&gt;
 &lt;/div&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">document.getElementById('fullscreen-div').addEventListener('fullscreenchange', (event) =&gt; {
  // document.fullscreenElement will point to the element that
  // is in fullscreen mode if there is one. If not, the value
  // of the property is null.
  if (document.fullscreenElement) {
    console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
  } else {
    console.log('Leaving full-screen mode.');
  }
});

document.getElementById('toggle-fullscreen').addEventListener('click', (event) =&gt; {
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    document.getElementById('fullscreen-div').requestFullscreen();
  }
});</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a class="external external-icon" href="https://fullscreen.spec.whatwg.org/" rel="noopener" title="The 'Fullscreen API' specification">Fullscreen API</a></td>
   <td><span class="spec-Living">Living Standard</span></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Element.fullscreenchange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Document/fullscreenchange_event">Document: fullscreenchange イベント</a></li>
 <li><a href="/ja/docs/Web/API/Element/fullscreenerror_event">Element: fullscreenerror イベント</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API/Guide">Fullscreen API のガイド</a></li>
</ul>
