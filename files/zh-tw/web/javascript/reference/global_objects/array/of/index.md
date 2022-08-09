---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/of
---
<div>{{JSRef}}</div>

<p><code><strong>Array.of()</strong></code> 方法會由引數（arguments）的數量來建立一個新的 <code>Array</code> 實體，而不管引數的數量或類型為何。</p>

<p><code><strong>Array.of()</strong></code> 與 <code><strong>Array</strong></code> 建構式之間的不同在於如何處理整數引數：<code><strong>Array.of(7)</strong></code> 會建立一個擁有單個元素—<code>7</code>—的陣列，而 <code><strong>Array(7)</strong></code> 會建立一個 <code>length</code> 屬性值為 7 的空陣列（<strong>註：</strong>這意味著這個陣列有 7 個空缺欄位（empty slots），而非 7 個值為 <code>undefined</code> 的欄位）。</p>

<pre class="brush: js">Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // [ , , , , , , ]
Array(1, 2, 3);    // [1, 2, 3]
</pre>

<h2 id="語法">語法</h2>

<pre class="syntaxbox">Array.of(<var>element0</var>[, <var>element1</var>[, ...[, <var>elementN</var>]]])</pre>

<h3 id="參數">參數</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>要用來成為新建立之陣列的元素。</dd>
</dl>

<h3 id="回傳值">回傳值</h3>

<p>一個新的 {{jsxref("Array")}} 實體。</p>

<h2 id="描述">描述</h2>

<p>此函式是 ECMAScript 2015 標準的一部分。更多資訊可參考 <a href="https://gist.github.com/rwaldron/1074126"><code>Array.of</code> and <code>Array.from</code> proposal</a> 以及 <a href="https://gist.github.com/rwaldron/3186576"><code>Array.of</code> polyfill</a>。</p>

<h2 id="範例">範例</h2>

<pre class="brush: js">Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>若所有執行環境沒有原生支援，可以在其他程式之前先執行以下程式碼來建立 <code>Array.of()</code>。</p>

<pre class="brush: js">if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
</pre>

<h2 id="規範">規範</h2>

{{Specifications}}

<h2 id="瀏覽器相容性">瀏覽器相容性</h2>

<div>


<p>{{Compat("javascript.builtins.Array.of")}}</p>
</div>

<h2 id="參見">參見</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
 <li>{{jsxref("TypedArray.of()")}}</li>
</ul>
