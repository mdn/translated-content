---
title: TypedArray.prototype.some()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/some
tags:
  - ECMAScript6
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/some
---
<div>{{JSRef}}</div>

<p><strong><code>some()</code></strong> メソッドは、与えられた関数によって実行されるテストに合格する要素が型付き配列の中にあるかどうかをテストします。このメソッドは、{{jsxref("Array.prototype.some()")}}と同じアルゴリズムを持ちます。ここで <em>TypedArray</em> は<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列</a>のうちの一つです。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-some.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>typedarray</var>.some(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>各要素に対してテストを実行する関数。三つの引数を取ります。
 <dl>
  <dt><code>currentValue</code></dt>
  <dd>型付き配列内で処理されている現在の要素。</dd>
  <dt><code>index</code></dt>
  <dd>型付き配列内で処理されている現在の要素のインデックス。</dd>
  <dt><code>array</code></dt>
  <dd><code>some</code> が呼び出されている型付き配列。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code></dt>
 <dd>オプション。 <code><var>callback</var></code> を実行するときに <code>this</code> として使用する値。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>配列内のいずれかの要素でコールバック関数が{{Glossary("truthy", "真と解釈される")}}値を返した場合は &lt;<code>true</code> です。それ以外は <code>false</code> です。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>some()</code>メソッドは、 <code><var>callback</var></code> 関数を、型付き配列に含まれる各要素に対して一度ずつ、 <code><var>callback</var></code> が真の値を返す要素が見つかるまで呼び出します。真の値を返す要素が見つかると、 <code>some()</code> メソッドはただちに <code>true</code> を返します。見つからなかった場合、 <code>false</code> を返します。</p>

<p><code><var>callback</var></code> は、要素の値、要素の添字、走査中の配列オブジェクトの3つの引数で呼び出されます。</p>

<p><code><var>thisArg</var></code> 引数が <code>some()</code> に与えられると、 <code><var>callback</var></code> が呼び出される際に <code>this</code> として使用されます。さもなければ、 <code>undefined</code> 値が <code>this</code> として使用されるために渡されます。最終的に <code><var>callback</var></code> によって観測される <code>this</code> の値は、<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">関数から見える <code>this</code> を特定するための通常のルール</a>に応じて決定されます。</p>

<p><code>some</code> は呼び出された型付き配列を変更しません。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Testing_size_of_all_array_elements" name="Testing_size_of_all_array_elements">型付き配列のすべての要素の大きさをテストする</h3>

<p>次の例では、型付き配列の中に 10 よりも大きい要素があるかどうかをテストします。</p>

<pre class="brush: js  language-js notranslate">function isBiggerThan10(element, index, array) {
  return element &gt; 10;
}

new Uint8Array([2, 5, 8, 1, 4]).some(isBiggerThan10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(isBiggerThan10); // true</pre>

<h3 id="Testing_typed_array_elements_using_arrow_functions" name="Testing_typed_array_elements_using_arrow_functions">アロー関数を使用して型付き配列をテストする</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>は同じテストを短い構文で行うことができます。</p>

<pre class="brush: js notranslate">new Uint8Array([2, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // false
new Uint8Array([12, 5, 8, 1, 4]).some(elem =&gt; elem &gt; 10); // true</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><em>TypedArray</em> と言う名前のグローバルオブジェクトは存在しないため、ポリフィルは「必要に応じて」の原則で行う必要があります。</p>

<pre class="brush: js notranslate">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.some
if (!Uint8Array.prototype.some) {
  Object.defineProperty(Uint8Array.prototype, 'some', {
    value: Array.prototype.some
  });
}
</pre>

<p>もし {{jsxref("Object.defineProperty")}} にも対応していないような本当に古い JavaScript エンジンに対応する必要がある場合は、 <code>Array.prototype</code> メソッドは列挙可能にすることができないので、ポリフィルを行わないのが最良です。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.some', 'TypedArray.prototype.some')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.some")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
 <li>{{jsxref("Array.prototype.some()")}}</li>
</ul>
