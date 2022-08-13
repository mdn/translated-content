---
title: TimeRanges.length
slug: Web/API/TimeRanges/length
tags:
  - API
  - HTML DOM
  - Media
  - Property
  - Read-only
  - Reference
  - TimeRanges
translation_of: Web/API/TimeRanges/length
---
<div>{{APIRef("DOM")}}</div>

<p><span class="seoSummary"><strong><code>TimeRanges.length</code></strong> 読み取り専用プロパティは、オブジェクト内の範囲の数を返します。</span><br>
  </p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>length</em> = <em>TimeRanges</em>.length;
</pre>

<h2 id="Example" name="Example">例</h2>

<p>ID が "myVideo" の動画要素がある場合、</p>

<pre class="brush: js">var v = document.GetElementById("myVideo");

var buf = v.buffered;

var numRanges = buf.length;

if (buf.length == 1) {
  // 1つの範囲のみ
  if (buf.start(0) == 0 &amp;&amp; buf.end(0) == v.duration) {
    // 1つの範囲が動画の最初から始まり、
    // 動画の最後で終わるため、すべてが読み込まれています
  }
}
</pre>

<p>この例では、時間範囲を見て、動画全体が読み込まれたかどうかを確認します。</p>

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
   <td>{{SpecName("HTML WHATWG", "#dom-timeranges-length", "TimeRanges.length()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.TimeRanges.length")}}</p>
