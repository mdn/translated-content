---
title: Window.onappinstalled
slug: conflicting/Web/API/Window/appinstalled_event
tags:
  - API
  - Event Handler
  - Property
  - Reference
  - Window
  - web manifest
translation_of: Web/API/Window/onappinstalled
original_slug: Web/API/Window/onappinstalled
---
<div>{{APIRef}}</div>

<p>{{domxref("Window")}} オブジェクトの <code><strong>onappinstalled</strong></code> プロパティは、<code><a href="/ja/docs/Web/API/Window/appinstalled_event">appinstalled</a></code> イベントのイベントハンドラーとして扱われます。これは、ウェブアプリケーションが <a href="/ja/Apps/Progressive">プログレッシブウェブアプリ (PWA)</a> としてインストールに成功すると発行されます。この発生したイベントは、{{domxref("Event")}} インターフェイスを実装する「単純なイベント」です。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">window.onappinstalled = function(event) { ... };
</pre>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">window.onappinstalled = function(ev) {
  console.log('アプリケーションがインストールされました。');
};</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('Manifest', '#onappinstalled-attribute', 'Window.onappinstalled')}}</td>
   <td>{{Spec2('Manifest')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>



<p>{{Compat("api.Window.onappinstalled")}}</p>

<h2 id="See_also" name="See_also">関連項目</h2>

<ul>
 <li>{{ event("install") }}</li>
</ul>
