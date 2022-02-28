---
title: element.className
slug: Web/API/Element/className
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/Element/className
---
<div>
 {{ApiRef}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><strong>className</strong> は要素の <code>class</code> 属性の値の取得 / 設定に用います。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><var>cName</var> = <var>elementNodeReference</var>.className;
<var>elementNodeReference</var>.className = <var>cName</var>;</pre>
<ul>
 <li><var>cName</var> : クラス名（文字列）</li>
</ul>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">var elm = document.getElementById("div1"); //対象要素を取得

if (elm.className == "fixed") {
  // 対象要素のクラス名が "fixed" であった場合の処理をここに記述
}</pre>
<h2 id="Notes" name="Notes">注記</h2>
<p>"class" という語句はプログラミングに於いて様々な文脈で用いられる為、競合を防ぐために <code>className</code> という名称となっています。</p>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95362176">DOM Level 2 HTML: className</a></li>
</ul>
<h2 id="See_also" name="See_also">関連情報</h2>
<ul>
 <li>{{domxref("element.classList")}}</li>
</ul>
