---
title: 'HTMLElement: pointercancel イベント'
slug: Web/API/HTMLElement/pointercancel_event
tags:
  - DOM
  - Event
  - Pointer Events
  - PointerEvent
  - Reference
  - pointercancel
  - user input
translation_of: Web/API/HTMLElement/pointercancel_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><strong><code>pointercancel</code></strong> イベントは、これ以上ポインタイベントがないとブラウザーが判断したとき、または {{event("pointerdown")}} イベントが発生した後に、パン、ズーム、スクロールによってビューポートを操作するためにポインタを使用する場合に発生します。</span></p>

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
   <td>{{domxref("PointerEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td><code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointercancel">onpointercancel</a></code></td>
  </tr>
 </tbody>
</table>

<p><code>pointercancel</code> イベントを引き起こす状況の例</p>

<ul>
 <li>ポインタの活動をキャンセルするハードウェアイベントが発生した。 これには、例えば、アプリ切り替えインターフェイスやモバイルデバイスの「ホーム」ボタンを使用したユーザーのアプリ切り替えが含まれる場合があります。</li>
 <li>ポインタがアクティブなときに、デバイスの画面の向きが変わった。</li>
 <li>ブラウザーが、ユーザーが誤ってポインタ入力を開始したと判断した。 これは、例えば、スタイラスを使用しているときにディスプレイ上に手を置いて誤ってトリガしないように、ハードウェアが手のひら拒否をサポートしている場合に発生する可能性があります。</li>
 <li>{{cssxref("touch-action")}} CSS プロパティが、入力を続行しないようにした。</li>
</ul>

<div class="note">
<p><code>pointercancel</code> イベントが発生した後、ブラウザーは {{event("pointerout")}} とそれに続く {{event("pointerleave")}} も送信します。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> を使用する場合</p>

<pre class="brush: js">const para = document.querySelector('p');

para.addEventListener('pointercancel', (event) =&gt; {
  console.log('ポインタイベントがキャンセルされた');
});</pre>

<p><code>onpointercancel</code> イベントハンドラプロパティを使用する場合</p>

<pre class="brush: js">const para = document.querySelector('p');

para.onpointercancel = (event) =&gt; {
  console.log('ポインタイベントがキャンセルされた');
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#the-pointercancel-event')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.pointercancel_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>関連イベント
  <ul>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/gotpointercapture_event">gotpointercapture</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/lostpointercapture_event">lostpointercapture</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerover_event">pointerover</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerenter_event">pointerenter</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerdown_event">pointerdown</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointermove_event">pointermove</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerup_event">pointerup</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerout_event">pointerout</a></code></li>
   <li><code><a href="/ja/docs/Web/API/HTMLElement/pointerleave_event">pointerleave</a></code></li>
  </ul>
 </li>
 <li><code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointercancel">onpointercancel</a></code> イベントハンドラプロパティ</li>
 <li><code>Document</code> でのこのイベント: <code><a href="/ja/docs/Web/API/Document/pointercancel_event">pointercancel</a></code> イベント</li>
</ul>
