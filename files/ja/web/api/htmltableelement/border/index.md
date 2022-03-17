---
title: HTMLTableElement.border
slug: Web/API/HTMLTableElement/border
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/border
---
<div>
 {{ApiRef()}} {{deprecated_header()}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><b>border</b> は、テーブルのボーダー幅（ <code>border</code> 属性の値）の取得 / 設定に用います。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>HTMLTableElement</var>.border =<i>borderWidth</i>; //取得
borderWidth = <var>HTMLTableElement</var>.<i>border</i>; //設定</pre>
<dl>
 <dt>
  <code>border</code></dt>
 <dd>
  テーブルのボーダーのピクセル幅を単位無しで取得 / 設定</dd>
</dl>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">// テーブルのボーダー幅を 2 ピクセルに設定する例

var t = document.getElementById("TableA"); // 対象とする table 要素への参照を変数 t に代入

t.border = "2"; // ボーダー幅の設定</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>border 属性は HTML 4.0 で非推奨属性となっています。代わりに CSS の {{cssxref("border-width")}} を間接的、または直接的に使用すると良いでしょう（例: <a href="/ja/docs/DOM/table.bgColor#Notes" title="table.bgColor | MDN">table.bgColor #注記</a>）</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li>W3C DOM 2 HTML 仕様書 <a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-50969400">
  <i>
   HTMLTableElement</i>
  .border</a>.</li>
</ul>
