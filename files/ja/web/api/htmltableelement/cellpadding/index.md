---
title: HTMLTableElement.cellPadding
slug: Web/API/HTMLTableElement/cellPadding
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/cellPadding
---
<div>
 {{Apiref()}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><b>cellPadding</b> は、テーブルの各セル全ての余白の設定 / 取得に用います。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><i>HTMLTableElement</i>.cellPadding = <var>padding</var>;
<var>padding</var> =<i>HTMLTableElement</i>.cellPadding;</pre>
<ul>
 <li>変数 <code>padding</code> は "10" の様な絶対値（ピクセル幅、単位無し）、或いは "100%" の様な相対値となります。</li>
</ul>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">// テーブルのセルの余白を 10px に設定する例

var t = document.getElementById("TableA"); // 対象とする table 要素への参照を代入
t.cellPadding = "10"; // 設定</pre>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li>W3C DOM 2 HTML 仕様書: <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-59162158">
  <i>
   HTMLTableElement</i>
  .cellPadding</a>.</li>
</ul>
