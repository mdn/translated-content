---
title: 'Document: cut イベント'
slug: Web/API/Document/cut_event
tags:
  - API
  - Clipboard API
  - Cut
  - Document
  - Event
  - Reference
  - Web
translation_of: Web/API/Document/cut_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>cut</code></strong> イベントは、ユーザーがブラウザーのユーザーインターフェイスから切り取り操作を実行したときに発生します。</span></p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル</th>
   <td>可</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("ClipboardEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("HTMLElement/oncut", "oncut")}}</td>
  </tr>
 </tbody>
</table>

<p>このイベントの本来の対象は、切り取り操作の意図の対象である {{domxref("Element")}} です。このイベントを {{domxref("Document")}} インターフェイス上で待ち受けし、キャプチャやバブリングの局面で処理することができます。このイベントの局面について完全な詳細は、 <a href="/ja/docs/Web/API/Element/cut_event">Element: cut イベント</a>を参照してください。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js">document.addEventListener('cut', (event) =&gt; {
    console.log('cut action initiated')
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
   <td>{{SpecName('Clipboard API', '#clipboard-event-cut')}}</td>
   <td>{{Spec2('Clipboard API')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.cut_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/paste_event", "paste")}}</li>
 <li>{{domxref("Element")}} を対象としたこのイベント: {{domxref("Element/cut_event", "cut")}}</li>
 <li>{{domxref("Document")}} を対象としたこのイベント: {{domxref("Document/cut_event", "cut")}}</li>
</ul>
