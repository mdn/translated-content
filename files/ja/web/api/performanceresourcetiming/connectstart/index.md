---
title: PerformanceResourceTiming.connectStart
slug: Web/API/PerformanceResourceTiming/connectStart
tags:
  - API
  - Web パフォーマンス
  - プロパティ
  - リファレンス
translation_of: Web/API/PerformanceResourceTiming/connectStart
---
<div>{{APIRef("Resource Timing API")}}</div>

<p><strong><code>connectStart</code></strong> 読み取り専用プロパティは、リソースを取得するためにユーザエージェントがサーバへの接続の確立を開始する直前に {{domxref("DOMHighResTimeStamp","timestamp")}} を返します。</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>resource</em>.connectStart;
</pre>

<h3 id="Return_Value" name="Return_Value">戻り値</h3>

<p>ブラウザがリソースを取得するためにサーバーへの接続を確立し始める直前の {{domxref("DOMHighResTimeStamp")}}。</p>

<h2 id="例">例</h2>

<p>次の例では、すべての "<code>resource</code>" {{domxref("PerformanceEntry.entryType","type")}} イベントの <code>*Start</code> プロパティと <code>*End</code> プロパティの値が記録されます。</p>

<pre class="brush: js">function print_PerformanceEntries() {
  // Use getEntriesByType() to just get the "resource" events
  var p = performance.getEntriesByType("resource");
  for (var i=0; i &lt; p.length; i++) {
    print_start_and_end_properties(p[i]);
  }
}
function print_start_and_end_properties(perfEntry) {
  // Print timestamps of the PerformanceEntry *start and *end properties
  properties = ["connectStart", "connectEnd",
                "domainLookupStart", "domainLookupEnd",
                "fetchStart",
                "redirectStart", "redirectEnd",
                "requestStart",
                "responseStart", "responseEnd",
                "secureConnectionStart"];

  for (var i=0; i &lt; properties.length; i++) {
    // check each property
    var supported = properties[i] in perfEntry;
    if (supported) {
      var value = perfEntry[properties[i]];
      console.log("... " + properties[i] + " = " + value);
    } else {
      console.log("... " + properties[i] + " = NOT supported");
    }
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
   <td>{{SpecName('Resource Timing', '#widl-PerformanceResourceTiming-connectStart', 'connectStart')}}</td>
   <td>{{Spec2('Resource Timing')}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザの互換性">ブラウザの互換性</h2>

<p>{{Compat("api.PerformanceResourceTiming.connectStart")}}</p>
