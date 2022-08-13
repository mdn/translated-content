---
title: StyleSheet.parentStyleSheet
slug: Web/API/StyleSheet/parentStyleSheet
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/StyleSheet/parentStyleSheet
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p>対象のスタイルシートを含む親スタイルシートが存在する場合は、それを返します。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>parentStyleSheetObj</var> = <var>stylesheet</var>.parentStyleSheet
</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>対象スタイルシートがトップレベルのスタイルシートの場合、または対象スタイルシートがインクルードをサポートしていない場合、戻り値は <code>null</code> となります。</p>
<h2 id="Example" name="Example">例</h2>

<pre class="brush:js">var stylesheet = document.styleSheets[0]; // 文書中の最初のスタイルシート


// 親スタイルシートが存在する場合はそれを、
// 無ければ自身への参照を変数 sheet に代入しています。
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
} else {
  sheet = stylesheet;
}</pre>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Style-20001113/stylesheets.html#StyleSheets-StyleSheet-parentStyleSheet">parentStyleSheet</a></li>
 <li><a href="http://dev.w3.org/csswg/cssom/#widl-StyleSheet-parentStyleSheet" title="CSS Object Model (CSSOM)">CSS Object Model (CSSOM)</a></li>
</ul>
