---
title: TypedArray.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/forEach
---
<div>{{JSRef}}</div>

<p><strong><code>forEach()</code></strong> メソッドは、配列の要素ごとに一度与えられた関数を実行します。このメソッドは {{jsxref("Array.prototype.forEach()")}} と同じアルゴリズムを持っています。ここで <em>TypedArray</em> は<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列型</a>の一つです。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>typedarray</var>.forEach(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>新しい型付き配列の要素を生成する関数。三つの引数を取ります。
 <dl>
  <dt><code><var>currentValue</var></code></dt>
  <dd>型付き配列内で処理される現在の要素。</dd>
  <dt><code><var>index</var></code></dt>
  <dd>配列内で処理される現在の要素の添字。</dd>
  <dt><code><var>array</var></code></dt>
  <dd><code>forEach()</code> が呼び出される配列。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{optional_inline}}</dt>
 <dd><code><var>callback</var></code> を実行するとき <code>this</code> として使用する値</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>{{jsxref("undefined")}} です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>forEach()</code> メソッドは与えられた <code><var>callback</var></code> を、型付き配列内に存在するそれぞれの要素に一度ずつ昇順に実行します。削除されたり、省略されたりしたインデックスに対しては呼び出されません。ただし、存在していて {{jsxref("undefined")}} の値を持つ要素に対しては実行されます。</p>

<p><code><var>callback</var></code> は次の <strong>3 つの引数</strong>で呼び出されます。</p>

<ul>
 <li><strong>要素の値</strong></li>
 <li><strong>要素の添字</strong></li>
 <li><strong>走査中の型付き配列</strong></li>
</ul>

<p><code><var>thisArg</var></code> 引数が <code>forEach()</code> に与えられた場合は、 <code><var>callback</var></code> の呼び出し時にそのオブジェクトが <code>this</code> の値として使用されます。与えられなかった場合は、 {{jsxref("undefined")}} が <code>this</code> の値として使用するために渡されます。 <code><var>callback</var></code> によって最終的に観測可能な <code>this</code> 値は<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">関数から見える <code>this</code> を特定する一般規則</a>に従います。</p>

<p><code>forEach()</code> によって処理される要素の範囲は <code><var>callback</var></code> の最初の呼び出し前に設定されます。 <code>forEach()</code> の呼び出しが始まったあとで型付き配列に追加される要素は、 <code><var>callback</var></code> によって処理されます。typed array内に存在している要素の値が変更されたら、 <code><var>callback</var></code> に渡される値は、<code>forEach()</code>メソッドが処理する直前の値です。つまり、処理される前に削除されている要素は処理されません。</p>

<p><code>forEach()</code> は型付き配列の各要素ごとに一度 <code>callback</code> 関数を実行します。 {{jsxref("TypedArray.prototype.every()", "every()")}} や {{jsxref("TypedArray.prototype.some()", "some()")}} とは異なり、常に、 {{jsxref("undefined")}} 値を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Logging_the_contents_of_a_typed_array" name="Logging_the_contents_of_a_typed_array">型付き配列の内容をログに出力する</h3>

<p>以下のコードは型付き配列内の各要素を1行ずつ出力します。</p>

<pre class="brush:js notranslate">function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

new Uint8Array([0, 1, 2, 3]).forEach(logArrayElements);
// logs:
// a[0] = 0
// a[1] = 1
// a[2] = 2
// a[3] = 3
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
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.foreach', '%TypedArray%.prototype.forEach')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.forEach")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.map()")}}</li>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
</ul>
