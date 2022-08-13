---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
tags:
  - API
  - Web パフォーマンス
  - インターフェイス
  - リファレンス
translation_of: Web/API/PerformanceObserverEntryList
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p><strong><code>PerformanceObserverEntryList</code></strong> インターフェイスは、{{domxref("PerformanceObserver.observe","observe()")}} メソッドを介して明示的に<em>監視された</em> {{domxref("PerformanceEntry","パフォーマンスイベント", '', 'true')}} のリストです。</p>

<p class="note">メモ: このインターフェイスは {{domxref("Window")}} と {{domxref("Worker")}} に公開されています。</p>

<h2 id="メソッド">メソッド</h2>

<dl>
 <dt>{{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}</dt>
 <dd>与えられた<em>フィルタ</em>に基づいて明示的に<em>観測された</em> {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。</dd>
 <dt>{{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}</dt>
 <dd>与えられた<em>エントリタイプ</em>の明示的に<em>観測された</em>{{domxref("PerformanceEntry")}} オブジェクトのリストを返します。</dd>
 <dt>{{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}</dt>
 <dd>指定された<em>名前</em>と<em>エントリタイプ</em>に基づいて、明示的に<em>監視されている</em> {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。</dd>
</dl>

<h2 id="例">例</h2>

<pre class="brush: js">// Create observer for all performance event types
// list is of type PerformanceObserveEntryList
var observe_all = new PerformanceObserver(function(list, obs) {
   var perfEntries = list.getEntries();
   for (var i = 0; i &lt; perfEntries.length; i++) {
      print_perf_entry(perfEntries[i]);
      // do something with it
   }
}</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">ステータス</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName('Performance Timeline Level 2', '#idl-def-performanceobserverentrylist', 'PerformanceObserverEntryList')}}</td>
   <td>{{Spec2('Performance Timeline Level 2')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.PerformanceObserverEntryList")}}</p>
