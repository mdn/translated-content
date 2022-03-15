---
title: HTMLTableElement.deleteRow
slug: Web/API/HTMLTableElement/deleteRow
tags:
  - DOM
  - Gecko
  - Gecko DOM Reference
translation_of: Web/API/HTMLTableElement/deleteRow
---
<div>
 {{ApiRef()}}</div>
<h2 id="Summary" name="Summary">概要</h2>
<p><strong>deleteRow</strong> は、テーブルから行を取り除きます。</p>
<h2 id="Syntax" name="Syntax">構文</h2>
<pre class="syntaxbox"><em>HTMLTableElement</em>.deleteRow(<em>index</em>)</pre>
<h3 id="Return_Value" name="Return_Value">戻り値</h3>
<p>無し</p>
<h3 id="Parameters" name="Parameters">引数</h3>
<dl>
 <dt>
  <code>index</code></dt>
 <dd>
  削除対象行のインデックス（ 0 を一行目とする行番号。整数で指定）<br>
  但し <code>-1</code> は最終行を削除する特別なインデックスとなります。<br>
  <code>-1</code> 以外の負数は無効です。</dd>
</dl>
<h2 id="Example" name="Example">例</h2>
<pre class="brush:js">mytable.deleteRow(1);
// delete the second row</pre>
<h2 id="Exceptions" name="Exceptions">例外</h2>
<dl>
 <dt>
  <code>INDEX_SIZE_ERR</code></dt>
 <dd>
  行数以上のインデックスを引数に指定した場合に、もしくは <code>-1</code> 以外の負数を指定した場合に、この例外がスローされます。</dd>
</dl>
<h2 id="Specification" name="Specification">仕様書</h2>
<ul>
 <li><a class="external" href="http://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-13114938">deleteRow</a></li>
</ul>
