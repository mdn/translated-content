---
title: 'TypeError: invalid Array.prototype.sort argument'
slug: Web/JavaScript/Reference/Errors/Array_sort_argument
tags:
  - Error
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Array_sort_argument
---
<div>{{jsSidebar("Errors")}}</div>

<p>JavaScript の例外 "invalid Array.prototype.sort argument" は、 {{jsxref("Array.prototype.sort()")}} の引数が {{jsxref("undefined")}} でもオペランドを比較する関数でもない場合に発生します。</p>

<h2 id="Message">エラーメッセージ</h2>

<pre class="brush: html">TypeError: argument is not a function object (Edge)
TypeError: invalid Array.prototype.sort argument (Firefox)
</pre>

<h2 id="Error_type">エラーの種類</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="What_went_wrong">エラーの原因</h2>

<p>{{jsxref("Array.prototype.sort()")}} の引数には、{{jsxref("undefined")}} かオペランドを比較する関数のいずれかが求められれます。</p>

<h2 id="Examples">例</h2>

<h3 id="Invalid_cases">無効な場合</h3>

<pre class="brush: js example-bad">[1, 3, 2].sort(5);  // TypeError

var cmp = { asc: (x, y) =&gt; x &gt;= y, dsc: (x, y) =&gt; x &lt;= y };
[1, 3, 2].sort(cmp[this.key] || 'asc');  // TypeError
</pre>

<h3 id="Valid_cases">有効な場合</h3>

<pre class="brush: js example-good">[1, 3, 2].sort();   // [1, 2, 3]

var cmp = { asc: (x, y) =&gt; x &gt;= y, dsc: (x, y) =&gt; x &lt;= y };
[1, 3, 2].sort(cmp[this.key || 'asc']); // [1, 2, 3]</pre>

<h2 id="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.sort()")}}</li>
</ul>
