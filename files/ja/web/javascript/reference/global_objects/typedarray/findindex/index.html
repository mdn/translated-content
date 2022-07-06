---
title: TypedArray.prototype.findIndex()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/findIndex
---
<div>{{JSRef}}</div>

<p><strong><code>findIndex()</code></strong> メソッドは、型付き配列内の要素が与えられたテスト関数を満たす場合、型付き配列内の<strong>位置</strong>を返します。さもなければ、 -1 が返されます。</p>

<p>{{jsxref("TypedArray.find", "find()")}} メソッドも参照してください。これは型付き配列内の見つかった要素の添字の代わりに<strong>値</strong>を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-findindex.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>typedarray</var>.findIndex(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>型付き配列の各要素で実行する関数。3 つの引数を取ります。
 <dl>
  <dt><code><var>element</var></code></dt>
  <dd>型付き配列内で現在処理されている要素。</dd>
  <dt><code><var>index</var></code></dt>
  <dd>型付き配列内で現在処理されている要素の位置。</dd>
  <dt><code><var>array</var></code></dt>
  <dd><code>findIndex()</code> を呼び出した元の配列。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd><code><var>callback</var></code> を実行するときに <code>this</code> として使用するオブジェクト。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>テストを満たした配列の要素の位置を返します。それ以外の場合は、 <code>-1</code> を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>findIndex()</code> メソッドは、 <code><var>callback</var></code> 関数が true 値を返す要素を見つけるまで、型付き配列内に存在している各要素に対して一度ずつ <code><var>callback</var></code> 関数を実行します。そのような要素が見つかったら、 <code>findIndex()</code> はすぐに要素の添字を返します。さもなければ、 <code>findIndex()</code> メソッドは -1 を返します。 <code><var>callback</var></code> は型付き配列の値を割り当てた位置に対してのみ呼び出されます。つまり、削除されたり、値が割り当てられて位置に対しては呼び出されません。</p>

<p><code><var>callback</var></code> は、要素の値、要素の位置、走査中の型付き配列の 3 つの引数とともに呼び出されます。</p>

<p><code><var>thisArg</var></code> 引数が <code>findIndex()</code> に与えられた場合、 <code><var>callback</var></code> の各呼び出しで <code>this</code> として使用されます。<code><var>thisArg</var></code> 引数が与えられなかった場合は、 {{jsxref("undefined")}} が使用されます。</p>

<p><code>findIndex()</code> メソッドは呼び出される型付き配列を変更しません。</p>

<p><code>findIndex()</code> によって処理される要素の範囲は、最初に <code><var>callback</var></code> が呼び出される前に設定されます。 <code>findIndex()</code> の呼び出しが始まったあとで型付き配列に追加された要素は、 <code><var>callback</var></code> メソッドによって処理されません。存在していて、処理されていない型付き配列の要素が <code><var>callback</var></code> によって変更された場合、処理している <code><var>callback</var></code> 関数に渡される値は、 <code>findIndex()</code> が要素の位置を処理する直前の値です。削除された要素は処理されません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Find_the_index_of_a_prime_number_in_a_typed_array" name="Find_the_index_of_a_prime_number_in_a_typed_array">型付き配列内の素数の位置を検索する</h3>

<p>次の例では、型付き配列の中で素数の入った最初の要素の位置を返し、素数が見つからなかった場合は <code>-1</code> を返します。</p>

<pre class="brush: js notranslate">function isPrime(element, index, array) {
  var start = 2;
  while (start &lt;= Math.sqrt(element)) {
    if (element % start++ &lt; 1) {
      return false;
    }
  }
  return element &gt; 1;
}

var uint8 = new Uint8Array([4, 6, 8, 12]);
var uint16 = new Uint16Array([4, 6, 7, 12]);

console.log(uint8.findIndex(isPrime)); // -1, not found
console.log(uint16.findIndex(isPrime)); // 2
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<pre class="brush: js notranslate">TypedArray.prototype.findIndex = Array.prototype.findIndex = Array.prototype.findIndex || function(evaluator, thisArg) {
        'use strict';
        if (!this) {
          throw new TypeError('Array.prototype.some called on null or undefined');
        }

        if (typeof(evaluator) !== 'function') {
            if (typeof(evaluator) === 'string') {
                // Attempt to convert it to a function
                if ( ! (evaluator = eval(evaluator)) ){
                    throw new TypeError();
                }
            } else {
                throw new TypeError();
            }
        }

        var i;
        if (thisArg === undefined) {  // Optimize for thisArg
            for (i in this) {
                if (evaluator(this[i], i, this)) {
                    return i;
                }
            }
            return -1;
        }
        for (i in this) {
            if (evaluator.call(thisArg, this[i], i, this)) {
                return i;
            }
        }
        return -1;
};</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.findindex', '%TypedArray%.prototype.findIndex')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.findIndex")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.find()")}}</li>
 <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
</ul>
