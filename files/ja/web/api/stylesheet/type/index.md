---
title: StyleSheet.type
slug: Web/API/StyleSheet/type
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/StyleSheet/type
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>そのスタイルシートの <code>type</code> 属性の値を取得 / 設定します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>string</var> = <var>stylesheet</var>.type;
</pre>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var ss = document.styleSheets[0]; // 文書中の最初のスタイルシートを参照

ss.type = "text/css"; // 設定
alert( ss.type ); // 取得
</pre>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-type">type</a></li>
</ul>
