---
title: Array.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/Array/includes
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - inArray
  - in_array
  - polyfill
  - メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Array/includes
---
<div>{{JSRef}}</div>

<p><code><strong>includes()</strong></code> メソッドは、特定の要素が配列に含まれているかどうかを <code>true</code> または <code>false</code> で返します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-includes.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.includes(<var>valueToFind</var>[, <var>fromIndex</var>])
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>valueToFind</var></code></dt>
 <dd>
 <p>検索する値です。</p>

 <div class="blockIndicator note">
 <p><strong>メモ:</strong> 文字列や文字を比較するとき、<code>includes()</code> は<em>大文字と小文字を区別します</em>。</p>
 </div>
 </dd>
 <dt><code><var>fromIndex</var></code> {{optional_inline}}</dt>
 <dd>この配列内で <code><var>valueToFind</var></code> を探し始める位置です。</dd>
 <dd>検索される最初の文字は、<code><var>fromIndex</var></code> が正の値の場合は、<code><var>fromIndex</var></code> で見つかり、<code><var>fromIndex</var></code> が負の数の場合は (<code><var>fromIndex</var></code> の{{interwiki("wikipedia", "絶対値")}}だけ配列の末尾から文字数を戻った位置が検索開始地点となり)、<code><var>fromIndex</var></code> または <code><var>arr</var>.length + fromIndex</code> で見つかります。</dd>
 <dd>既定値は 0 です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("Boolean")}} で、<code>true</code> は <code><var>valueToFind</var></code> の値が配列内 (または、<code><var>fromIndex</var></code> が指定された場合はそれで示された配列の部分) から見つかった場合です。</p>

<p>ゼロの値はすべて、符号にかかわらず等しいとみなされます (つまり、<code>-0</code> は <code>0</code> と <code>+0</code> の両方に等しいとみなされます) が、<code>false</code> は <code>0</code> と同じとはみなされ<em>ません</em>。</p>

<div class="note">
<p><strong>注:</strong> 技術的に言えば、<code>includes()</code> は <code><a href="/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality">sameValueZero</a></code> アルゴリズムを使用して、指定された要素が見つかったかどうかを確認しています。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<pre class="brush: js notranslate">[1, 2, 3].includes(2)      // true
[1, 2, 3].includes(4)      // false
[1, 2, 3].includes(3, 3)   // false
[1, 2, 3].includes(3, -1)  // true
[1, 2, NaN].includes(NaN)  // true
</pre>

<h3 id="fromIndex_is_greater_than_or_equal_to_the_array_length" name="fromIndex_is_greater_than_or_equal_to_the_array_length"><code><var>fromIndex</var></code> が配列の長さと同じか大きい場合</h3>

<p><code><var>fromIndex</var></code> が配列の長さと同じか大きい場合は配列を検索せずに <code>false</code> を返します。</p>

<pre class="brush: js notranslate">let arr = ['a', 'b', 'c']

arr.includes('c', 3)    // false
arr.includes('c', 100)  // false
</pre>

<h3 id="Computed_index_is_less_than_0" name="Computed_index_is_less_than_0">計算値のインデックスが 0 より小さい場合</h3>

<p><code><var>fromIndex</var></code> が負の値である場合、計算値のインデックスは配列内で <code><var>valueToFind</var></code> の円策を開始する位置として使用するよう計算されます。計算値のインデックスが <code>-1 * <var>arr</var>.length</code> 以下の場合は、配列全体が検索されます。</p>

<pre class="brush: js notranslate">// 配列の長さは 3
// fromIndex は -100
// 補正されたインデックスは 3 + (-100) = -97

let arr = ['a', 'b', 'c']

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false
</pre>

<h3 id="includes_used_as_a_generic_method" name="includes_used_as_a_generic_method">ジェネリックメソッドとして使用される includes()</h3>

<p><code>includes()</code> メソッドは意図的にジェネリックになっています。<code>this</code> が Array オブジェクトであることは必須ではないので、他の種類のオブジェクト (例えば配列風オブジェクト) にも適用することができます。</p>

<p>以下の例は、<code>includes()</code> メソッドが関数の <a href="/ja/docs/Web/JavaScript/Reference/Functions/arguments">arguments</a> オブジェクトに対して使用される様子を示しています。</p>

<pre class="brush: js notranslate">(function() {
  console.log(Array.prototype.includes.call(arguments, 'a'))  // true
  console.log(Array.prototype.includes.call(arguments, 'd'))  // false
})('a','b','c') </pre>

<div class="hidden">
<p>参照記事にポリフィルを追加しないでください。詳細や議論については、<a href="https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500">https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500</a> を参照して下さい。</p>
</div>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.includes', 'Array.prototype.includes')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.includes")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.includes()")}}</li>
 <li>{{jsxref("String.prototype.includes()")}}</li>
 <li>{{jsxref("Array.prototype.indexOf()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("Array.prototype.findIndex()")}}</li>
</ul>
