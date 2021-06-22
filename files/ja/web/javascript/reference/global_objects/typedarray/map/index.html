---
title: TypedArray.prototype.map()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/map
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/map
---
<div>{{JSRef}}</div>

<p><strong><code>map()</code></strong> メソッドは、与えられた関数を型付き配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。このメソッドは、{{jsxref("Array.prototype.map()")}}と同じアルゴリズムです。 <em>TypedArray</em> は、ここでは<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列型</a>の一つです。</p>

<div>{{EmbedInteractiveExample("pages/js/array-map.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>typedArray</var>.map(<var>mapFn</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>mapFn</var></code></dt>
 <dd>
 <p>新しい型付き配列の要素を生み出すコールバック関数で、3つの引数を取ります。</p>

 <dl>
  <dt><code><var>currentValue</var></code></dt>
  <dd>現在処理中の要素の値です。</dd>
  <dt><code><var>index</var></code> {{optional_inline}}</dt>
  <dd>現在処理中の要素の型付き配列内における添字です。</dd>
  <dt><code><var>array</var></code> {{optional_inline}}</dt>
  <dd><code>map()</code> が実行されている型付き配列です。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd><code><var>mapFn</var></code> を実行するときに <code>this</code> として使う値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい型付き配列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>map()</code> は、与えられたコールバック関数 (<code><var>mapFn</var></code>) を型付き配列の各要素に対して、順番通りに一度ずつ呼び出し、その結果から新しい配列を生成します。</p>

<p><code><var>mapFn</var></code> は型付き配列のインデックスのうち、値が割り当てられているものにのみ呼び出しす。 <code>undefined</code> であるインデックス、すなわち削除されたか値が割り当てられたことがないインデックスには呼び出しません。</p>

<p><code><var>mapFn</var></code> は、要素の値、要素の添字、走査中の型付き配列オブジェクトという 3 つの引数をともなって呼び出されます。</p>

<p><code><var>thisArg</var></code> 引数が <code>map()</code> に与えられた場合は、それが <code><var>mapFn</var></code> の呼び出し時に渡され、 <code>this</code> として使用されます。そうでない場合は、 {{jsxref("undefined")}} が <code>this</code> の値として使用されます。 <code><var>mapFn</var></code> から最終的に見える <code>this</code> の値は、<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">関数における通常の <code>this</code> を決定するルール</a>に従って決まります。</p>

<p><code>map()</code> は呼び出された型付き配列を変化させません (ただし、 <code><var>mapFn</var></code> が呼び出されたあ愛は、変更する可能性はあります)。</p>

<p><code>map()</code> によって処理される要素の範囲は、 <code><var>mapFn</var></code> が最初に呼び出される前に設定されます。 <code>map()</code> の呼び出しが開始された後に追加された要素に対しては、 <code><var>mapFn</var></code> は実行されません。既存の配列要素が変更されたり、削除された場合、 <code><var>mapFn</var></code> に渡される値は <code>map()</code> がそれらを訪れた時点での値になり、削除された要素を訪問することはありません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Mapping_a_typed_array_to_a_typed_array_of_square_roots" name="Mapping_a_typed_array_to_a_typed_array_of_square_roots">型付き配列を平方根の型付き配列にマッピング</h3>

<p>次のコードは型付き配列を取り、最初の型付き配列にある数値の平方根からなる新しい型付き配列を生成します。</p>

<pre class="brush: js notranslate">const numbers = new Uint8Array([1, 4, 9]);
const roots = numbers.map(Math.sqrt);
// roots の内容は [1, 2, 3] となる
// numbers の内容は [1, 4, 9] のまま
</pre>

<h3 id="Mapping_a_typed_array_of_numbers_using_a_function_containing_an_argument" name="Mapping_a_typed_array_of_numbers_using_a_function_containing_an_argument">引数を含む関数を使用して型付き配列をマッピングする</h3>

<p>次のコードは、1 つの引数を必要とする関数を使用するときに <code>map()</code> がどのように動作するかを示しています。引数は元の配列を通した <code>map()</code> ループとして、配列の各要素に自動的に割り当てられます。</p>

<pre class="brush: js notranslate">const numbers = new Uint8Array([1, 4, 9]);
const doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now Uint8Array [2, 8, 18]
// numbers is still Uint8Array [1, 4, 9]
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.map', 'TypedArray.prototype.map')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.map")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.filter()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
</ul>
