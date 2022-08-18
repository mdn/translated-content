---
title: 'Document: fullscreenerror イベント'
slug: Web/API/Document/fullscreenerror_event
tags:
  - API
  - Error
  - Event
  - Fullscreen API
  - Reference
  - fullscreen
  - fullscreenerror
translation_of: Web/API/Document/fullscreenerror_event
---
<p>{{APIRef}}</p>

<p><span class="seoSummary"><code>fullscreenerror</code> イベントは、ブラウザーが全画面モードに移行できないときに発生します。</span></p>

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
   <td>{{domxref("Document.onfullscreenerror", "onfullscreenerror")}}</td>
  </tr>
 </tbody>
</table>

<p>{{domxref("Document/fullscreenchange_event", "fullscreenchange")}} イベントと同様、二つの <code>fullscreenerror</code> イベントが発行されます。一つ目はモード切替に失敗した {{domxref("Element")}} へ送られ、二つ目はその要素を所有する {{domxref("Document")}} へ送られます。</p>

<p>全画面モードへの切り替えに失敗する理由については、<a href="/ja/docs/Web/API/Fullscreen_API/Guide">全画面 API のガイド</a>を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">const requestor = document.querySelector('div');

document.addEventListener('fullscreenerror', (event) =&gt; {
  console.error('an error occurred changing into fullscreen');
  console.log(event);
});

requestor.requestFullscreen();</pre>

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
   <td>{{SpecName("Fullscreen")}}</td>
   <td>{{Spec2("Fullscreen")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.fullscreenerror_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document/fullscreenchange_event", "fullscreenchange")}}</li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API">Fullscreen API</a></li>
 <li><a href="/ja/docs/Web/API/Fullscreen_API/Guide">Fullscreen API のガイド</a></li>
</ul>
