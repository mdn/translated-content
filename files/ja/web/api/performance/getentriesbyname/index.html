---
title: performance.getEntriesByName()
slug: Web/API/Performance/getEntriesByName
tags:
  - API
  - Web パフォーマンス
  - メソッド
  - リファレンス
translation_of: Web/API/Performance/getEntriesByName
---
<div>{{APIRef("Performance Timeline API")}}</div>

<p><strong><code>getEntriesByName()</code></strong> メソッドは、指定された<em>名前</em>と<em>タイプ</em>の {{domxref("PerformanceEntry")}} オブジェクトのリストを返します。リストのメンバ (<em>エントリ</em>) は、明示的な時点でパフォーマンス<em>マーク</em>または<em>メジャー</em>を作成することで (たとえば {{domxref("Performance.mark","mark()")}} メソッドを呼び出すことで) 作成できます。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><em>entries</em> = window.performance.getEntriesByName(name, type);
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>name</dt>
 <dd>取得するエントリの名前</dd>
 <dt>type {{optional_inline}}</dt>
 <dd>"<code>mark</code>" など、取得するエントリの種類。有効なエントリタイプは {{domxref("PerformanceEntry.entryType")}} に一覧表示されています。</dd>
</dl>

<h3 id="Return_Value" name="Return_Value">戻り値</h3>

<dl>
 <dt>entries</dt>
 <dd>指定された <code>name</code> と <code>type</code> を持つ {{domxref("PerformanceEntry")}} オブジェクトのリスト。 <code>type</code> 引数が指定されていない場合は、返されるエントリを決定するために名前だけが使用されます。項目はエントリ '{{domxref("PerformanceEntry.startTime","startTime")}} に基づいて時系列に並んでいます。指定された基準を満たすオブジェクトがない場合は、空のリストが返されます。</dd>
</dl>

<h2 id="例">例</h2>

<pre class="brush: js">function use_PerformanceEntry_methods() {
  log("PerformanceEntry tests ...");

  if (performance.mark === undefined) {
    log("... performance.mark Not supported");
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
  var p = performance.getEntries();
  for (var i=0; i &lt; p.length; i++) {
    log("Entry[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntries(name, entryType) to get specific entries
  p = performance.getEntries({name : "Begin", entryType: "mark"});
  for (var i=0; i &lt; p.length; i++) {
    log("Begin[" + i + "]");
    check_PerformanceEntry(p[i]);
  }

  // Use getEntriesByType() to get all "mark" entries
  p = performance.getEntriesByType("mark");
  for (var i=0; i &lt; p.length; i++) {
    log ("Mark only entry[" + i + "]: name = " + p[i].name +
         "; startTime = " + p[i].startTime +
         "; duration  = " + p[i].duration);
  }

  // Use getEntriesByName() to get all "mark" entries named "Begin"
  p = performance.getEntriesByName("Begin", "mark");
  for (var i=0; i &lt; p.length; i++) {
    log ("Mark and Begin entry[" + i + "]: name = " + p[i].name +
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
   <td>{{SpecName('Performance Timeline Level 2', '#dom-performance-getentriesbyname', 'getEntriesByName()')}}</td>
   <td>{{Spec2('Performance Timeline Level 2')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('Performance Timeline', '#dom-performance-getentriesbyname', 'getEntriesByName()')}}</td>
   <td>{{Spec2('Performance Timeline')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<div>
<p>{{Compat("api.Performance.getEntriesByName")}}</p>
</div>
