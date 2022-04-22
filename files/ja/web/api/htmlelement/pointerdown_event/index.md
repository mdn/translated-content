---
title: 'HTMLElement: pointerdown イベント'
slug: Web/API/HTMLElement/pointerdown_event
tags:
  - DOM
  - Event
  - PointerEvent
  - Reference
translation_of: Web/API/HTMLElement/pointerdown_event
---
<div>{{APIRef}}</div>

<p><span class="seoSummary"><code>pointerdown</code> イベントは、ポインタがアクティブになったときに発生します。</span> マウスの場合は、ボタンが押されていない状態から少なくとも1つのボタンが押された状態に移行したときに発生します。 タッチの場合は、物理的な接触がデジタイザとなされたときに発生します。 ペンの場合は、スタイラスがデジタイザと物理的に接触したときに発生します。</p>

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
   <td>{{domxref("PointerEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">イベントハンドラプロパティ</th>
   <td><code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerdown">onpointerdown</a></code></td>
  </tr>
 </tbody>
</table>

<h2 id="Examples" name="Examples">例</h2>

<p><code>addEventListener()</code> を使用する場合</p>

<pre class="brush: js">const para = document.querySelector('p');

para.addEventListener('pointerdown', (event) =&gt; {
  console.log('ポインタダウンイベント');
});</pre>

<p><code>onpointerdown</code> イベントハンドラプロパティを使用する場合</p>

<pre class="brush: js">const para = document.querySelector('p');

para.onpointerdown = (event) =&gt; {
  console.log('ポインタダウンイベント');
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#the-pointerdown-event')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.HTMLElement.pointerdown_event")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><code><a href="/ja/docs/Web/API/GlobalEventHandlers/onpointerdown">onpointerdown</a></code> イベントハンドラプロパティ</li>
 <li><code>Document</code> でのこのイベント: <code><a href="/ja/docs/Web/API/Document/pointerdown_event">pointerdown</a></code> イベント</li>
</ul>
