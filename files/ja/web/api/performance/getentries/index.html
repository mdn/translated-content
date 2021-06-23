---
title: performance.getEntries()
slug: Web/API/Performance/getEntries
tags:
  - API
  - Web パフォーマンス
  - メソッド
  - リファレンス
translation_of: Web/API/Performance/getEntries
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p><strong><code>getEntries()</code></strong> メソッドは、そのページのすべての {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。リストのメンバ (エントリ) は、明示的な時点でパフォーマンスマークまたはメジャーを作成することで (たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すことで) 作成できます。特定の種類のパフォーマンスエントリや特定の名前のパフォーマンスエントリにのみ関心がある場合は、{{domxref("Performance.getEntriesByType", "getEntriesByType()")}} と {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} を参照してください。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="構文">構文</h2>

<p>一般的な構文:</p>

<pre class="syntaxbox"><em>entries</em> = window.performance.getEntries();
</pre>

<h3 id="Return_Value" name="Return_Value">戻り値</h3>

<dl>
 <dt>entries</dt>
 <dd>{{domxref("PerformanceEntry")}} オブジェクトの配列。項目はエントリ '{{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並んでいます。</dd>
</dl>

<h2 id="例">例</h2>

<pre class="brush: js">function use_PerformanceEntry_methods() {
  console.log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    console.log("... performance.mark Not supported");
    return;
  }

  // Create some performance entries via the mark() method
  performance.mark("Begin");
  do_work(50000);
  performance.mark("End");
  performance.mark("Begin");
  do_work(100000);
  performance.mark("End");
  do_work(200000);
  performance.mark("End");

  // Use getEntries() to iterate through the each entry
  let p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    console.log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (let i=0; i &lt; p.length; i++) {
    console.log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (let i=0; i &lt; p.length; i++) {
    console.log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }
}
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
   <td>{{SpecName('Performance Timeline Level 2', '#dom-performance-getentries', 'getEntries()')}}</td>
   <td>{{Spec2('Performance Timeline Level 2')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('Performance Timeline', '#dom-performance-getentries', 'getEntries()')}}</td>
   <td>{{Spec2('Performance Timeline')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<div>
<p>{{Compat("api.Performance.getEntries")}}</p>
</div>
