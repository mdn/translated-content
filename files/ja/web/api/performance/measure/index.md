---
title: performance.measure()
slug: Web/API/Performance/measure
tags:
  - API
  - Web Workers
  - Web パフォーマンス
  - メソッド
  - リファレンス
translation_of: Web/API/Performance/measure
---
<div>{{APIRef("User Timing API")}}</div>

<p><strong><code>measure()</code></strong> メソッドは、マーク間、ナビゲーション開始時刻、または現在時刻の間に、ブラウザの<em>パフォーマンスエントリバッファ</em>に名前付き {{domxref("DOMHighResTimeStamp","timestamp")}} を作成します。2つのマーク間を測定するときは、それぞれ<em>開始マーク</em>と<em>終了マーク</em>があります。名前付きタイムスタンプは、<em>メジャー</em>と呼ばれます。</p>

<p><code>measure</code> は、{{domxref("Performance")}} インターフェイスの1つで取得できます。({{domxref("Performance.getEntries","getEntries()")}}、{{domxref("Performance.getEntriesByName","getEntriesByName()")}}または{{domxref("Performance.getEntriesByType","getEntriesByType()")}})</p>

<p><code>measure</code> の {{domxref("PerformanceEntry","performance entry")}} は、次のプロパティ値を持ちます。</p>

<ul>
 <li>{{domxref("PerformanceEntry.entryType","entryType")}} - "<code>measure</code>" に設定します</li>
 <li>{{domxref("PerformanceEntry.name","name")}} - measure が作成されたときに指定された "<code>name</code>" に設定します</li>
 <li>{{domxref("PerformanceEntry.startTime","startTime")}} - 開始マークに {{domxref("DOMHighResTimeStamp","timestamp")}} を設定します</li>
 <li>{{domxref("PerformanceEntry.duration","duration")}} - 小節の長さである {{domxref("DOMHighResTimeStamp")}} に設定します (通常、終了マークのタイムスタンプから開始マークのタイムスタンプを引いたもの)</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="構文">構文</h2>

<pre class="syntaxbox"><em>performance</em>.measure(name);
<em>performance</em>.measure(name, startMark);
<em>performance</em>.measure(name, startMark, endMark);
<em>performance</em>.measure(name, undefined, endMark);
</pre>

<h3 id="引数">引数</h3>

<dl>
 <dt>name</dt>
 <dd>メジャーの名前を表す {{domxref("DOMString")}}。</dd>
 <dt>startMark {{optional_inline}}</dt>
 <dd>メジャーの開始マークの名前を表す {{domxref("DOMString")}}。{{domxref("PerformanceTiming")}} プロパティの名前になることもあります。省略した場合は、開始時間がナビゲーション開始時間になります。</dd>
 <dt>endMark {{optional_inline}}</dt>
 <dd>メジャーの終了マークの名前を表す {{domxref("DOMString")}}。{{domxref("PerformanceTiming")}} プロパティの名前になることもあります。省略した場合は、現在時刻が使用されます。</dd>
</dl>

<h3 id="戻り値">戻り値</h3>

<dl>
 <dt>void</dt>
 <dd> </dd>
</dl>

<h2 id="例">例</h2>

<p>次の例は、ブラウザのパフォーマンスエントリバッファに <code>measure()</code> を使用して新しい<em>メジャー</em>{{domxref("PerformanceEntry","パフォーマンスエントリ")}}を作成する方法を示しています。</p>

<pre class="brush: js">const markerNameA = "example-marker-a"
const markerNameB = "example-marker-b"

// いくつかのネストしたタイムアウトを実行し、それぞれに対して PerformanceMark を作成します。
performance.mark(markerNameA);
setTimeout(function() {
  performance.mark(markerNameB);
  setTimeout(function() {

    // さまざまな測定値を作成します。
    performance.measure("measure a to b", markerNameA, markerNameB);
    performance.measure("measure a to now", markerNameA);
    performance.measure("measure from navigation start to b", undefined, markerNameB);
    performance.measure("measure from the start of navigation to now");

    // すべての測定値を引き出します。
    console.log(performance.getEntriesByType("measure"));

    // 最後に、エントリを整理します。
    performance.clearMarks();
    performance.clearMeasures();
  }, 1000);
}, 1000);
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
   <td>{{SpecName('User Timing Level 2', '#dom-performance-measure', 'measure()')}}</td>
   <td>{{Spec2('User Timing Level 2')}}</td>
   <td><code>measure()</code> 処理モデルを明確にします。</td>
  </tr>
  <tr>
   <td>{{SpecName('User Timing', '#dom-performance-measure', 'measure()')}}</td>
   <td>{{Spec2('User Timing')}}</td>
   <td>基本的な定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<div>
<p>{{Compat("api.Performance.measure")}}</p>
</div>
