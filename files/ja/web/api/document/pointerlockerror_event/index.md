---
title: 'Document: pointerlockerror イベント'
slug: Web/API/Document/pointerlockerror_event
tags:
  - Document
  - Event
  - Reference
  - Web
  - pointerlockerror
  - イベント
  - ウェブ
  - ポインター
translation_of: Web/API/Document/pointerlockerror_event
---
<div>{{APIRef}}</div>

<p><code>pointerlockerror</code> イベントは、 (技術的な理由、またはパーミッションが拒否されたために) ポインターのロックに失敗したときに発生します。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">バブリング</th>
   <td>あり</td>
  </tr>
  <tr>
   <th scope="row">キャンセル可能</th>
   <td>いいえ</td>
  </tr>
  <tr>
   <th scope="row">インターフェイス</th>
   <td>{{domxref("Event")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラープロパティ</th>
   <td>{{domxref("Document/onpointerlockchange", "onpointerlockerror")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> を使用した場合</p>

<pre class="brush: js">const para = document.querySelector('p');

document.addEventListener('pointerlockerror', (event) =&gt; {
  console.log('Error locking pointer');
});</pre>

<p><code>onpointerlockerror</code> イベントハンドラープロパティを使用した場合</p>

<pre class="brush: js">document.onpointerlockerror = (event) =&gt; {
  console.log('Error locking pointer');
};</pre>

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
   <td>{{SpecName('Pointer Lock', '#pointerlockchange-and-pointerlockerror-events')}}</td>
   <td>{{Spec2('Pointer Lock')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの対応</h2>

<p>{{Compat("api.Document.pointerlockerror_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/API/Pointer_Lock_API">Pointer Lock API の使用</a></li>
</ul>
