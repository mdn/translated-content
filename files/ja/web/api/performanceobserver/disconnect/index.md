---
title: PeformanceObserver.disconnect()
slug: Web/API/PerformanceObserver/disconnect
tags:
  - API
  - PerformanceObserver
  - Web パフォーマンス
  - disconnect()
  - オブザーバー
  - パフォーマンスオブザーバー API
  - メソッド
  - リファレンス
translation_of: Web/API/PerformanceObserver/disconnect
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p>{{domxref('PerformanceObserver')}} インターフェイスの <strong><code>disconnect()</code></strong> メソッドは、パフォーマンスオブザーバーが{{domxref("PerformanceEntry","パフォーマンスエントリ", '', 'true')}}イベントを受け取らないようにするために使用されます。</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><em>performanceObserver</em>.disconnect();
</pre>

<h2 id="例">例</h2>

<pre class="brush: js">var observer = new PerformanceObserver(function(list, obj) {
  var entries = list.getEntries();
  for (var i=0; i &lt; entries.length; i++) {
    // Process "mark" and "frame" events
  }
});
observer.observe({entryTypes: ["mark", "frame"]});

function perf_observer(list, observer) {
  // Process the "measure" event
  // ...
  // Disable additional performance events
  observer.disconnect();
}
var observer2 = new PerformanceObserver(perf_observer);
observer2.observe({entryTypes: ["measure"]});
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Performance Timeline Level 2', '#dom-performanceobserver-disconnect', 'disconnect()')}}</td>
   <td>{{Spec2('Performance Timeline Level 2')}}</td>
   <td><code>disconnect()</code> メソッドの初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<div>
<p>{{Compat("api.PerformanceObserver.disconnect")}}</p>
</div>
