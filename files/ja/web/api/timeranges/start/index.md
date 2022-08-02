---
title: TimeRanges.start()
slug: Web/API/TimeRanges/start
tags:
  - API
  - HTML DOM
  - Media
  - Method
  - Reference
  - TimeRanges
translation_of: Web/API/TimeRanges/start
---
<p>{{APIRef("DOM")}}</p>

<p>{{gecko_minversion_header("2.0")}}</p>

<p><span class="seoSummary">指定された時間範囲が始まる時間オフセットを返します。</span></p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><em>startTime</em> = TimeRanges.start(index)
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<ul>
 <li><code>index</code> は、開始時間を返す範囲の番号です。</li>
</ul>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>INDEX_SIZE_ERR</dt>
 <dd>指定されたインデックスが既存の範囲に対応しない場合にスローされる <code>DOMException</code>。</dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<p>ID が "myVideo" の動画要素がある場合、</p>

<pre class="brush: js">var v = document.getElementById("myVideo");

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
 <tbody>
  <tr>
   <th scope="col">仕様</th>
   <th scope="col">状態</th>
   <th scope="col">コメント</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "#dom-timeranges-start", "TimeRanges.start()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>初期定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.TimeRanges.start")}}</p>
