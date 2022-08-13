---
title: WindowEventHandlers.onunload
slug: conflicting/Web/API/Window/unload_event
tags:
  - API
  - Event Handler
  - HTML DOM
  - MakeBrowserAgnostic
  - Property
  - Reference
  - WindowEventHandlers
translation_of: Web/API/WindowEventHandlers/onunload
original_slug: Web/API/WindowEventHandlers/onunload
---
<div>{{APIRef("HTML DOM")}}</div>

<p><span class="seoSummary">{{domxref("WindowEventHandlers")}} ミックスインの <strong><code>onunload</code></strong> プロパティは、{{Event("unload")}} イベントを処理するための {{event("Event_handlers", "event handler")}} です。 このイベントは、ウィンドウがコンテンツとリソースをアンロードするときに発生します。 リソースの除去は、<code>unload</code> イベントが発生した後に処理されます。</span></p>

<div class="blockIndicator note">
<p><strong>メモ</strong>: ポップアップブロッカーを備えたブラウザーは、<code>onunload</code> イベントハンドラ関数にあるすべての {{domxref("Window.open()")}} メソッドの呼び出しを無視します。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.addEventListener("unload", function(event) { ... });
window.onunload = function(event) { ... };
</pre>

<p>通常は、<code>onunload</code> の代わりに {{domxref("EventTarget.addEventListener", "window.addEventListener()")}} と {{event("unload")}} イベントを使用することをお勧めします。</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#handler-window-onunload', 'onunload')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.WindowEventHandlers.onunload")}}</p>

<p>Firefox 1.5 では、ページでこのイベントハンドラを使用すると、ブラウザーがメモリ内の bfcache にページをキャッシュできなくなります。 詳細については、<a href="/ja/Firefox/Releases/1.5/Using_Firefox_1.5_caching">Firefox 1.5 のキャッシュの使用</a>を参照してください。</p>
