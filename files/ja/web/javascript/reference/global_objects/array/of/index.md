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

<p><code><strong>Array.of()</strong></code> メソッドは、引数の数や型にかかわらず、可変長引数から、新しい <code>Array</code> インスタンスを生成します。</p>

<p><code><strong>Array.of()</strong></code> と <code>Array</code> コンストラクタの違いは整数引数の扱いにあります。<code><strong>Array.of(7)</strong></code> は単一の要素、<code>7</code> を持つ配列を作成しますが、<code><strong>Array(7)</strong></code> は <code>length</code> プロパティが 7 の空の配列を作成します（<strong>注:</strong> これは実際の <code>undefined</code> の値を持つスロットではなく、7 つの空のスロットの配列を意味します）。</p>

<pre class="brush: js notranslate">Array.of(7);       // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7);          // 7 つの空のスロットの配列
Array(1, 2, 3);    // [1, 2, 3]
</pre>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">Array.of(<var>element0</var>[, <var>element1</var>[, ...[, <var>elementN</var>]]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>element<em>N</em></var></code></dt>
 <dd>生成する配列の要素。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{jsxref("Array")}} インスタンス。</p>

<h2 id="Description" name="Description">解説</h2>

<p>この関数は、ECMAScript 標準の第 6 版の一部です。詳しい情報は、<a href="https://gist.github.com/rwaldron/1074126"><code>Array.of</code> と <code>Array.from</code> 提案</a>、<a href="https://gist.github.com/rwaldron/3186576"><code>Array.of</code> 互換コード</a> をご覧ください。</p>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
 <li>{{jsxref("TypedArray.of()")}}</li>
</ul>


<h2 id="ポリフィル">ポリフィル</h2>

<p>以下のコードを他のコードよりも前に記述する事により、ネイティブで実装されていなくても、<code>Array.of()</code> が使用可能になります。</p>

<pre class="brush: js notranslate">if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
    // Or
    let vals = [];
    for(let prop in arguments){
        vals.push(arguments[prop]);
    }
    return vals;
  }
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Array.of_の使用">Array.of の使用</h3>

<pre class="brush: js notranslate">Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
</pre>


<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.of', 'Array.of')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Array.of")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Array.from()")}}</li>
 <li>{{jsxref("TypedArray.of()")}}</li>
</ul>
