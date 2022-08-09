---
title: Array.prototype.unshift()
slug: Web/JavaScript/Reference/Global_Objects/Array/unshift
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - unshift
  - 陣列
translation_of: Web/JavaScript/Reference/Global_Objects/Array/unshift
---
<div>{{JSRef}}</div>

<p><code><strong>unshift()</strong></code> 方法會添加一個或多個元素至陣列的開頭，並且回傳陣列的新長度。</p>

<div>{{EmbedInteractiveExample("pages/js/array-unshift.html")}}</div>

<h2 id="語法">語法</h2>

<pre class="syntaxbox"><var>arr</var>.unshift(<var>element1</var>[, ...[, <var>elementN</var>]])</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>欲添加至陣列開頭的元素。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>呼叫此方法之物件的新 {{jsxref("Array.length", "length")}} 屬性值。</p>

<h2 id="描述">描述</h2>

<p><code>unshift</code> 方法會將一或多個給定值插入至一個類陣列（array-like）物件的開頭。</p>

<p><code>unshift</code> 被刻意設計為具通用性；此方法可以藉由 {{jsxref("Function.call", "called", "", 1)}} 或 {{jsxref("Function.apply", "applied", "", 1)}} 應用於類似陣列的物件上。若欲應用此方法的物件不包含代表一系列啟始為零之數字屬性序列長度的 <code>length</code> 屬性，可能是不具任何意義的行為。</p>

<h2 id="範例">範例</h2>

<pre class="brush: js">var arr = [1, 2];

arr.unshift(0); // 執行後的結果是3，其代表處理後的陣列長度
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<div>


<p>{{Compat("javascript.builtins.Array.unshift")}}</p>
</div>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Array.prototype.push()")}}</li>
 <li>{{jsxref("Array.prototype.pop()")}}</li>
 <li>{{jsxref("Array.prototype.shift()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
