---
title: 'Document: selectionchange イベント'
slug: Web/API/Document/selectionchange_event
tags:
  - Event
  - Reference
  - Selection
  - Selection API
  - selectionchange
translation_of: Web/API/Document/selectionchange_event
---
<p>{{APIRef}}</p>

<div>
<p><code><strong>selectionchange</strong></code> イベントは <a href="/ja/docs/Web/API/Selection_API">Selection API</a> の一部で、文書における現在のテキストの選択が変更された際に発生します。</p>
</div>

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
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("GlobalEventHandlers.onselectionchange", "onselectionchange")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">// addEventListener version
document.addEventListener('selectionchange', () =&gt; {
  console.log(document.getSelection());
});

// onselectionchange version
document.onselectionchange = () =&gt; {
  console.log(document.getSelection());
};
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Selection API', '#selectionchange-event', 'selectionchange')}}</td>
   <td>{{Spec2('Selection API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("api.Document.selectionchange_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Document/selectstart_event", "selectstart")}}</li>
 <li>{{domxref("Document/getSelection", "Document.getSelection")}}</li>
 <li>{{domxref("Selection", "Selection")}}</li>
</ul>
