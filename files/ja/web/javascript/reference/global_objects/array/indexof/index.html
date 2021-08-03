---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - indexof
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---
<div>{{JSRef}}</div>

<p><code><strong>indexOf()</strong></code> メソッドは引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-indexof.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、<a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.indexOf(<var>searchElement</var>[, <var>fromIndex</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>searchElement</var></code></dt>
 <dd>検索する配列要素です。</dd>
 <dt><code><var>fromIndex</var></code> {{optional_inline}}</dt>
 <dd>検索を始める位置です。もしこの位置が配列の長さ以上の場合は、-1 が返され、配列は検索されません。負の数の場合、これは配列の末尾からのオフセットとみなされます。なお、この位置が負の数であっても、配列は前から後ろに検索されることに注意してください。指定された位置が 0 であれば、配列全体が検索されます。既定値は 0 (配列全体を検索) です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>見つかった最初の配列要素の添字です。見つからなかった場合は <strong>-1</strong> です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>indexOf()</code> は <code><var>searchElement</var></code> と配列の要素を <a href="/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators">厳密等価</a> (三重イコール演算子 <code>===</code> で使われるのと同じ方法) を使って比較します。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> String メソッドについては、{{jsxref("String.prototype.indexOf()")}} を参照してください。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_indexOf" name="Using_indexOf">indexOf() の使用</h3>

<p>以下の例は <code>indexOf()</code> を使って、配列中のある値の位置を探しています。</p>

<pre class="brush: js notranslate">var array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
</pre>

<h3 id="Finding_all_the_occurrences_of_an_element" name="Finding_all_the_occurrences_of_an_element">ある要素の存在をすべて見つける</h3>

<pre class="brush: js notranslate">var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
</pre>

<h3 id="Finding_if_an_element_exists_in_the_array_or_not_and_updating_the_array" name="Finding_if_an_element_exists_in_the_array_or_not_and_updating_the_array">要素が配列内に存在するかどうかを調べ、配列を更新する</h3>

<pre class="brush: js notranslate">function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) &gt; -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}

var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

updateVegetablesCollection(veggies, 'spinach');
// New veggies collection is : potato,tomato,chillies,green-pepper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach already exists in the veggies collection.
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><code>indexOf()</code> メソッドは ECMA-262 第 5 版で追加されたものであり、すべてのブラウザーで動作するわけではありません。次のコードをスクリプトの先頭に追加することにより、<code>indexOf()</code> がネイティブでサポートされていない環境でも、これが使用可能となります。これは ECMA-262 第 5 版で定められたアルゴリズムと完全に同じものです。{{jsxref("Global_Objects/TypeError", "TypeError")}} と {{jsxref("Math.abs()")}} がオリジナルの値を持つ事を仮定しています。</p>

<pre class="brush: js notranslate">// This version tries to optimize by only checking for "in" when looking for undefined and
// skipping the definitely fruitless NaN search. Other parts are merely cosmetic conciseness.
// Whether it is actually faster remains to be seen.
if (!Array.prototype.indexOf)
  Array.prototype.indexOf = (function(Object, max, min) {
    "use strict"
    return function indexOf(member, fromIndex) {
      if (this === null || this === undefined)
        throw TypeError("Array.prototype.indexOf called on null or undefined")

      var that = Object(this), Len = that.length &gt;&gt;&gt; 0, i = min(fromIndex | 0, Len)
      if (i &lt; 0) i = max(0, Len + i)
      else if (i &gt;= Len) return -1

      if (member === void 0) {        // undefined
        for (; i !== Len; ++i) if (that[i] === void 0 &amp;&amp; i in that) return i
      } else if (member !== member) { // NaN
        return -1 // Since NaN !== NaN, it will never be found. Fast-path it.
      } else                          // all else
        for (; i !== Len; ++i) if (that[i] === member) return i

      return -1 // if the value was not found, then return -1
    }
  })(Object, Math.max, Math.min)
</pre>

<p>ですが、ECMA 標準で定義された技術的な部分に興味があり、パフォーマンスや簡潔さを意識しない場合、以下のような、より説明的なポリフィルが役立つことがあるでしょう。</p>

<pre class="brush: js notranslate">// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    "use strict";
    var k;

    // 1. ToObject に this 値を引数として渡した結果を
    // o とします。
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. "length" を引数として o の Get 内部メソッドを呼んだ結果を
    //    lenValue とします。
    // 3. ToUint32(lenValue) を len とします。
    var len = o.length &gt;&gt;&gt; 0;

    // 4. len が 0 の場合、-1 を返します。
    if (len === 0) {
      return -1;
    }

    // 5. n を fromIndex 引数が存在する場合は
    //   ToInteger(fromIndex)、存在しない場合は 0 とします。
    var n = fromIndex | 0;

    // 6. n が len 以上の場合 -1 を返します。
    if (n &gt;= len) {
      return -1;
    }

    // 7. n が 0 以上の場合 k を n とします。
    // 8. n が 0 未満の場合 k を len - abs(n) とします。
    //    k が 0 未満の場合 k を 0 とします。
    k = Math.max(n &gt;= 0 ? n : len - Math.abs(n), 0);

    // 9. k が len 未満の間は以下を繰り返します。
    for (; k &lt; len; k++) {
      // a. Pk を ToString(k) とします。
      //   これは暗黙的に in 演算子の左辺値です。
      // b. kPresent を Pk を引数として o の
      //    HasProperty 内部メソッドを呼んだ結果とします。
      //   このステップは c と組み合わせることができます。
      // c. kPresent が真の場合
      //    i.  elementK を ToString(k) を引数として
      //        o の [[Get]] 内部メソッドを呼んだ結果とします。
      //   ii.  same を searchElement と elementK で
      //        厳密な同一比較アルゴリズムを行った結果とします。
      //  iii.  same が真の場合 k を返します。
      if (k in o &amp;&amp; o[k] === searchElement)
        return k;
    }
    return -1;
  };
}
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.indexOf")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.lastIndexOf()")}}</li>
 <li>{{jsxref("TypedArray.prototype.indexOf()")}}</li>
 <li>{{jsxref("String.prototype.indexOf()")}}</li>
</ul>
