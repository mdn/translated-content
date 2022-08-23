---
title: WindowEventHandlers.onstorage
slug: conflicting/Web/API/Window/storage_event
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Web Storage
  - WindowEventHandler
translation_of: Web/API/WindowEventHandlers/onstorage
original_slug: Web/API/WindowEventHandlers/onstorage
---
<div class="syntaxbox">{{ ApiRef() }}</div>

<p><span class="seoSummary">{{domxref("WindowEventHandlers")}} ミックスインの <strong><code>onstorage</code></strong> プロパティは、<code><a href="/ja/docs/Web/API/Window/storage_event">storage</a></code> イベントを処理するための {{event("Event_handlers", "event handler")}} です。</span></p>

<p><code>storage</code> イベントは、別のドキュメントのコンテキストでストレージ領域が変更されたときに発生します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em> </em><em>window</em>.onstorage = <em>functionRef</em>;</pre>

<h3 id="Value" name="Value">値</h3>

<p><code>functionRef</code> は、関数名や<a href="/ja/docs/Web/JavaScript/Reference/Operators/function">関数式</a>です。 この関数は、その唯一の引数として {{domxref("StorageEvent")}} を受け取ります。</p>

<h2 id="Example" name="Example">例</h2>

<p>この例では、別のドキュメントでストレージキーに対する値が変更されるたびに、それを記録します。</p>

<pre class="brush: js">window.onstorage = function(e) {
  console.log('キー ' + e.key +
    ' の値が ' + e.oldValue +
    ' から ' + e.newValue + ' に変更されました。');
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG','webappapis.html#handler-window-onstorage','onstorage')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WindowEventHandlers.onstorage")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/API/Window/storage_event"><code>Window: storage</code> イベント</a></li>
</ul>
