---
title: Array.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/Array/some
tags:
  - Array
  - ECMAScript 5
  - JavaScript
  - Method
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/some
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong><code>some()</code></strong> メソッドは、配列の少なくとも一つの要素が、指定された関数で実装されたテストに合格するかどうかをテストします。これはブール値を返します。</span></p>

<div>{{EmbedInteractiveExample("pages/js/array-some.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.some(<var>callback</var>(<var>element</var>[, <var>index</var>[, <var>array</var>]])[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>
 <p>各要素に対してテストを実行する関数です。次の 3 つの引数を取ります。</p>

 <dl>
  <dt><code><var>element</var></code></dt>
  <dd>現在処理されている要素です。</dd>
  <dt><code><var>index</var></code>{{optional_inline}}</dt>
  <dd>現在処理されている要素のインデックスです。</dd>
  <dt><code><var>array</var></code>{{optional_inline}}</dt>
  <dd><code>some()</code> が実行されている配列です。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code>{{optional_inline}}</dt>
 <dd><code><var>callback</var></code> を実行するときに <code>this</code> として使用するオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>配列内の少なくとも1つの要素でコールバック関数が{{Glossary("truthy", "真と解釈される")}}値を返した場合は <strong><code>true</code></strong> です。それ以外は <strong><code>false</code></strong> です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>some()</code> は、与えられた <code><var>callback</var></code> 関数を、配列に含まれる各要素に対して一度ずつ、<code><var>callback</var></code> が<em>真と解釈される</em>値 (論理型に変換した際に真となる値) を返す要素が見つかるまで呼び出します。そのような要素が見つかると、<code>some()</code> はただちに <code>true</code> を返します。見つからなかった場合、<code>some()</code> は <code>false</code> を返します。<code><var>callback</var></code> は値が代入されている配列の要素に対してのみ呼び出されます。つまり、すでに削除された要素や、まだ値が代入されていない要素に対しては呼び出されません。</p>

<p><code><var>callback</var></code> は、要素の値、要素のインデックス、走査されている Array オブジェクトという 3 つの引数を伴って呼び出されます。</p>

<p><code><var>thisArg</var></code> 引数が <code>some()</code> に与えられると、それがコールバックのの <code>this</code> として使用されます。それ以外は、{{jsxref("undefined")}} 値が <code>this</code> として使用されるでしょう。 <code><var>callback</var></code> が最終的に見ることができる <code>this</code> の値は、<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">関数から見た <code>this</code> の決定に関する一般的なルール</a>によって決定されます。</p>

<p><code>some()</code> は呼び出された配列を変化させません。</p>

<p><code>some()</code> によって処理される要素の範囲は、<code><var>callback</var></code> が最初に呼び出される前に設定されます。<code>some()</code> の呼び出しが開始された後に追加された要素に対しては、<code><var>callback</var></code> は実行されません。既存の配列要素が変更されたり、削除されたりした場合、<code><var>callback</var></code> に渡される値は <code>some()</code> がそれらを訪れた時点での値になり、削除された要素を訪問することはありません。</p>

<div class="note">
<p><strong>注</strong>: このメソッドは空の配列ではあらゆる条件式に対して <code>false</code> を返します。</p>
</div>

<h2 id="Polyfill" name="Polyfill">Polyfill</h2>

<p><code>some()</code> は ECMA-262 標準の第 5 版に追加されたメソッドなので、この標準に準拠したすべての実装に存在するわけではありません。次のコードをスクリプトの先頭に追加することにより <code>some()</code> にネイティブで対応していない実装上でも使用可能になります。</p>

<p>このアルゴリズムは ECMA-262 第 5 版で指示されたアルゴリズムとまったく同じものです。 {{jsxref("Object")}}、{{jsxref("TypeError")}} はそれぞれオリジナルの値を持ち、またそれらの <code>fun.call</code> {{jsxref("Function.prototype.call()")}} のオリジナルの値として評価されます。</p>

<pre class="brush: js notranslate">// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(fun, thisArg) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length &gt;&gt;&gt; 0;

    for (var i = 0; i &lt; len; i++) {
      if (i in t &amp;&amp; fun.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
}
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Testing_value_of_array_elements" name="Testing_value_of_array_elements">配列要素の値のテスト</h3>

<p>次の例は、配列のいずれかの要素が 10 よりも大きいかどうかをテストします。</p>

<pre class="brush: js notranslate">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true</pre>

<h3 id="Testing_array_elements_using_arrow_functions" name="Testing_array_elements_using_arrow_functions">アロー関数を使った配列要素のテスト</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a> はより短い構文で同じテストを提供します。</p>

<pre class="brush: js notranslate">[2, 5, 8, 1, 4].some(x =&gt; x &gt; 10);  // false
[12, 5, 8, 1, 4].some(x =&gt; x &gt; 10); // true</pre>

<h3 id="Checking_whether_a_value_exists_in_an_array" name="Checking_whether_a_value_exists_in_an_array">ある値が配列に存在するかどうかのチェック</h3>

<p><code>includes()</code> メソッドを真似て、このカスタム関数は配列にその要素が存在する場合に <code>true</code> を返します。</p>

<pre class="brush: js notranslate">const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<h3 id="Checking_whether_a_value_exists_using_an_arrow_function" name="Checking_whether_a_value_exists_using_an_arrow_function">アロー関数を使ったある値が存在するかどうかのチェック</h3>

<pre class="brush: js notranslate">const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal =&gt; val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true</pre>

<h3 id="Converting_any_value_to_Boolean" name="Converting_any_value_to_Boolean">任意の値の Boolean への変換</h3>

<pre class="brush: js notranslate">const TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("ESDraft", "#sec-array.prototype.some", "Array.prototype.some")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.some")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Array.prototype.find()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
</ul>
