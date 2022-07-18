---
title: String.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/String/slice
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - String
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/String/slice
---
<div>{{JSRef}}</div>

<p><strong><code>slice()</code></strong> メソッドは、元の文字列を変更せず、文字列の一部分を取り出し、それを新しい文字列として返します。</p>

<div>{{EmbedInteractiveExample("pages/js/string-slice.html", "taller")}}</div>

<p class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox"><var>str</var>.slice(<var>beginIndex</var>[, <var>endIndex</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>beginIndex</var></code></dt>
 <dd>
 <p>取り出しを開始する位置を示す 0 から始まるインデックスです。負の値の場合、 <code><var>str</var>.length + <var>beginIndex</var></code> として扱われます。 (例えば <code><var>beginIndex</var></code> が <code>-3</code> の場合、 <code><var>str</var>.length - 3</code> として扱われます。)</p>

 <p><code><var>beginIndex</var></code> が <code><var>str</var>.length</code> 以上である場合、 <code>slice()</code> は空文字列を返します。</p>
 </dd>
 <dt><code><var>endIndex</var></code> {{optional_inline}}</dt>
 <dd>
 <p>取り出しを終える<em>前の</em> 0 から始まるインデックスです。このインデックスにある文字は含まれません。</p>

 <p><code><var>endIndex</var></code> を省略した場合、 <code>slice()</code> は文字列の末尾までを取り出します。負の値の場合、 <code><var>str</var>.length + <var>endIndex</var></code> として扱われます。 (例えば <code><var>endIndex</var></code> が <code>-3</code> の場合、 <code><var>str</var>.length - 3</code> として扱われます。)</p>
 </dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>文字列の取り出された部分を含んだ新しい文字列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>slice()</code> は 1 つの文字列からテキストを取り出し、新しい文字列を返します。一方の文字列におけるテキストへの変更は、他の文字列に影響を与えません。</p>

<p><code>slice()</code> は <code><var>endIndex</var></code> を含まずにテキストを取り出します。 <code><var>str</var>.slice(1, 4)</code> は、 2 番目から 4 番目までの文字 (<code>1</code>, <code>2</code>, <code>3</code> のインデックスの文字) を取り出します。</p>

<p>例えば <code><var>str</var>.slice(2, -1)</code> は、文字列から 3 番目の文字から最後から 2 番目の文字までを取り出します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_slice_to_create_a_new_string" name="Using_slice_to_create_a_new_string"><code>slice()</code> を使って新しい文字列をつくる</h3>

<p>以下の例は、新しい文字列を生成するために <code>slice()</code> を使っています。</p>

<pre class="brush: js">let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""
</pre>

<h3 id="Using_slice_with_negative_indexes" name="Using_slice_with_negative_indexes">負のインデックスで <code>slice()</code> を使う</h3>

<p>下記の例は負のインデックスで <code>slice()</code> を使っています。</p>

<pre class="brush: js">let str = 'The morning is upon us.'
str.slice(-3)      // returns 'us.'
str.slice(-3, -1)  // returns 'us'
str.slice(0, -1)   // returns 'The morning is upon us'
</pre>

<p>この例は、文字列の末尾から前方に <code>11</code> 番目を開始インデックスとし、先頭から後方に <code>16</code> 番目を終了インデックスとします。</p>

<pre class="brush: js">console.log(str.slice(-11, 16)) // =&gt; "is u"</pre>

<p>こちらは先頭から後方に <code>11</code> 番目を開始インデックスとし、末尾から前方に <code>7</code> 番目を終了インデックスとします。</p>

<pre class="brush: js">console.log(str.slice(11, -7)) // =&gt; " is u"</pre>

<p>これらの引数は、末尾から前方に <code>5</code> 番目を開始インデックスとし、末尾から前方に <code>1</code> 番目を終了インデックスとします。</p>

<pre class="brush: js">console.log(str.slice(-5, -1)) // =&gt; "n us"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.slice', 'String.prototype.slice')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.String.slice")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("String.prototype.substr()")}}</li>
 <li>{{jsxref("String.prototype.substring()")}}</li>
 <li>{{jsxref("Array.prototype.slice()")}}</li>
</ul>
