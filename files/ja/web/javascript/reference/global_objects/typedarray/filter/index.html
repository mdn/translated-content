---
title: TypedArray.prototype.filter()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/filter
---
<div>{{JSRef}}</div>

<p><strong><code>filter()</code></strong> メソッドは、提供された関数によって実装されたテストに合格したすべての要素を含む新しい型付き配列を生成します。このメソッドのアルゴリズムは {{jsxref("Array.prototype.filter()")}} と同じです。ここで <em>TypedArray</em> は、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列型</a>のうちの1つです。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-filter.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>typedarray</var>.filter(<var>callback</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>型付き配列の各要素をテストする関数。 <code>(<var>element</var>, <var>index</var>, <var>typedarray</var>)</code> の引数で呼び出されます。 <code>true</code> を返すと要素を維持し、それでなければ <code>false</code> を返します。</dd>
 <dt><code><var>thisArg</var></code>{{optional_inline}}</dt>
 <dd><code><var>callback</var></code> を実行するときに <code>this</code> として使用する値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>テストに合格した要素を持つ新しい型付き配列。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>filter()</code> は、与えられた <code><var>callback</var></code> 関数を型付き配列の各要素に対して一度ずつ呼び出し、<code><var>callback</var></code> が <a href="/ja/docs/Glossary/Truthy"><code>true</code> と評価される値</a>を返したすべての要素からなる新しい型付き配列を生成します。<code><var>callback</var></code> は値が代入されている型付き配列の添字に対してのみ呼び出されます。つまり、すでに削除された添字や、まだ値が代入されていない添字に対しては呼び出されません。<code><var>callback</var></code> によるテストに合格しなかった型付き配列の要素は単純にスキップされ、新しい型付き配列には含まれません。</p>

<p><code><var>callback</var></code> は 3 つの引数で呼び出されます。</p>

<ol>
 <li>要素の値</li>
 <li>要素の添字</li>
 <li>走査中の型付き配列オブジェクト</li>
</ol>

<p>引数 <code><var>thisArg</var></code> が <code>filter()</code> に与えられた場合、そのオブジェクトは <code><var>callback</var></code> が呼び出された際に <code>this</code> 値として使われます。そうでない場合、 <code>undefined</code> が <code>this</code> 値として使われます。<code><var>callback</var></code> 関数内の最終的な <code>this</code> 値は<a href="/ja/docs/Web/JavaScript/Reference/Operators/this">関数内の <code>this</code> を決定する一般的ルール</a>に従って決められます。</p>

<p><code>filter()</code> は呼び出された型付き配列を変化させません。</p>

<p><code>filter()</code> によって処理される要素の範囲は <code><var>callback</var></code> が最初の呼び出し前に設定されます。 <code>filter()</code> の呼び出しが始まった後で型付き配列にに追加された要素は <code><var>callback</var></code> によって処理されません。型付き配列の存在している要素が変更されたり、削除された場合、 <code><var>callback</var></code> に渡される値は、 <code>filter()</code> が処理する直前の値になります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Filtering_out_all_small_values" name="Filtering_out_all_small_values">小さな値をすべて取り除く</h3>

<p>次の例では、<code>filter()</code> を使って <code>10</code> 未満の値を持つ要素をすべて取り除いた型付き配列を生成します。</p>

<pre class="brush: js notranslate">function isBigEnough(element, index, array) {
  return element &gt;= 10;
}
new Uint8Array([12, 5, 8, 130, 44]).filter(isBigEnough);
// Uint8Array [ 12, 130, 44 ]
</pre>

<h3 id="Filtering_typed_array_elements_using_arrow_functions" name="Filtering_typed_array_elements_using_arrow_functions">アロー関数を使用して型付き配列の要素をフィルターする</h3>

<p><a href="/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions">アロー関数</a>によって、同じテストをより短い構文で実現できます。</p>

<pre class="brush: js notranslate">new Uint8Array([12, 5, 8, 130, 44]).filter(elem =&gt; elem &gt;= 10);
// Uint8Array [ 12, 130, 44 ]</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.filter', 'TypedArray.prototype.filter')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.filter")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.prototype.every()")}}</li>
 <li>{{jsxref("TypedArray.prototype.some()")}}</li>
 <li>{{jsxref("Array.prototype.filter()")}}</li>
</ul>
