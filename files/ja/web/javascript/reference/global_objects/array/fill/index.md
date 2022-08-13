---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/fill
---
<div>{{JSRef}}</div>

<p><code><strong>fill()</strong></code> メソッドは、開始インデックス（デフォルトは <code>0</code>）から終了インデックス（デフォルトは <code>array.length</code>）までのすべての要素を、静的な値に変更した配列を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-fill.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>arr</var>.fill(<var>value</var>[, <var>start<var>[, <var>end</var>]])</var></var></code></pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>配列に設定する値です。</dd>
 <dt><code>start</code> {{optional_inline}}</dt>
 <dd>開始する位置です。既定値は 0 です。</dd>
 <dt><code>end</code> {{optional_inline}}</dt>
 <dd>終了する位置です。既定値は <code>this.length</code> です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>変更された配列です。</p>

<h2 id="Description" name="Description">説明</h2>

<ul>
 <li><code>start</code> が負の場合 <code>array.length + start</code> として扱われます。</li>
 <li><code>end</code> が負の場合 <code>array.length + end</code> として扱われます。</li>
 <li><code>fill</code> メソッドはジェネリック関数であり、<code>this</code> が配列オブジェクトである必要はありません。</li>
 <li><code>fill</code> メソッドは可変メソッドで、配列のコピーではなく、変更された配列そのものを返します。</li>
 <li>最初のパラメータがオブジェクトの場合、配列の各スロットはそのオブジェクトを参照します。</li>
</ul>


<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length &gt;&gt;&gt; 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start &gt;&gt; 0;

      // Step 8.
      var k = relativeStart &lt; 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end &gt;&gt; 0;

      // Step 11.
      var final = relativeEnd &lt; 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k &lt; final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
</pre>

<p><code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">Object.defineProperty</a></code> が利用できないとても古い JavaScript エンジンをサポートする必要がある場合、<code>Array.prototype</code> のメソッドを polyfill するのは避けたほうがよいでしょう。それらを列挙不可にすることができないからです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_fill" name="Using_fill">fill を使用する</h3>

<pre class="brush: js notranslate">[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]
[].fill.call({ length: 3 }, 4)   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi"            // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.fill', 'Array.prototype.fill')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Array.fill")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("TypedArray.prototype.fill()")}}</li>
</ul>
