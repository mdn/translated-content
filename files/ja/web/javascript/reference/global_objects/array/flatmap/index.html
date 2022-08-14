---
title: Array.prototype.flatMap()
slug: Web/JavaScript/Reference/Global_Objects/Array/flatMap
tags:
  - Array
  - JavaScript
  - Map
  - Method
  - Prototype
  - Reference
  - flatMap
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flatMap
---
<div>{{JSRef}}</div>

<p><code><strong>flatMap()</strong></code> メソッドは、最初にマッピング関数を使用してそれぞれの要素をマップした後、結果を新しい配列内にフラット化します。これは、{{jsxref("Array.prototype.map","map()")}} の後に深さ 1 の {{jsxref("Array.prototype.flat","flat()")}} を行うのと同じですが、これら 2 つのメソッドを別々にコールするよりもわずかに効率的です。</p>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>var new_array = arr</var>.flatMap(function <var>callback(currentValue[, index[, array]]) {
    // return element for new_array
}</var>[, <var>thisArg</var>])</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt></dt>
 <dt><code>currentValue</code></dt>
 <dd>配列で現在処理されている要素です。</dd>
 <dt><code>index</code>{{optional_inline}}</dt>
 <dd>配列で現在処理されている要素のインデックスです。</dd>
 <dt><code>array</code>{{optional_inline}}</dt>
 <dd><code>map</code> が呼び出された配列です。</dd>
</dl>

<dl>
 <dt><code>callback</code></dt>
 <dd>新しい配列の要素を生成する関数。3 つの引数を受け取ります。</dd>
 <dt><code>thisArg</code>{{optional_inline}}</dt>
 <dd><code>callback</code> を実行するときに <code>this</code> として使用する値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>各要素がコールバック関数の結果であり、深さが 1 にフラット化された新しい配列です。</p>

<h2 id="Description" name="Description">説明</h2>

<p>コールバック関数の詳細な説明は {{jsxref("Array.prototype.map()")}} を参照してください。<code>flatMap</code> メソッドは、<code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map">map</a></code> の後に深さ 1 の <code><a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat">flat</a></code> を呼び出すのと同じです。</p>

<h3 id="Alternative" name="Alternative">代替</h3>

<h4 id="reduce_and_concat" name="reduce_and_concat"><code>reduce()</code> と <code>concat()</code></h4>

<pre class="brush: js notranslate">var arr = [1, 2, 3, 4];

arr.flatMap(x =&gt; [x, x * 2]);
// is equivalent to
arr.reduce((acc, x) =&gt; acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
</pre>

<p>ただし、これは非効率的であり、大きな配列の場合は避けるべきであることに注意してください。処理ごとにガベージコレクションが必要な新しい一時配列を作成し、要素を単に追加するのではなく、現在のアキュムレータ配列から新しい配列に要素をコピーします。</p>

<div class="hidden">
<p>Please do not add polyfills on this article. For reference, please check: <a href="https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500">https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500</a></p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="map_and_flatMap" name="map_and_flatMap"><code>map()</code> と <code>flatMap()</code></h3>

<pre class="brush: js notranslate">let arr1 = [1, 2, 3, 4];

arr1.map(x =&gt; [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x =&gt; [x * 2]);
// [2, 4, 6, 8]

// only one level is flattened
arr1.flatMap(x =&gt; [[x * 2]]);
// [[2], [4], [6], [8]]
</pre>

<p>上記は map を使用することでも実現できますが、ここでは <code>flatMap</code> の使用方法をよりよく示す例を紹介します。</p>

<p>文章のリストから単語のリストを生成してみましょう。</p>

<pre class="brush: js notranslate">let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x =&gt; x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x =&gt; x.split(" "));
// ["it's","Sunny","in", "", "California"]</pre>

<p>出力リストの長さは入力リストの長さとは異なる場合があることに注意してください。</p>

<h3 id="For_adding_and_removing_items_during_a_map" name="For_adding_and_removing_items_during_a_map"><code>map()</code> のアイテムの追加と削除</h3>

<p><code>flatMap</code> は、<code>map</code> 中にアイテムの追加と削除（アイテムの数を変更）を行う方法として利用できます。つまり、常に<em>一対一</em>ではなく、<em>多くのアイテムを多くのアイテムに</em>（入力されたアイテムを個別に扱うことで）マップできるようになります。この意味では、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">filter</a> の逆のような働きをします。単純に、アイテムを保持するには 1 要素の配列を返し、アイテムを追加するには複数要素の配列を返し、アイテムを削除するには 0 要素の配列を返します。</p>

<pre class="brush: js notranslate">// 負の数をすべて取り除き、奇数を偶数と1に分割します。
let a = [5, 4, -3, 20, 17, -33, -4, 18]
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =&gt;
  (n &lt; 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
)

// 期待される出力: [4, 1, 4, 20, 16, 1, 18]
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.flatmap', 'Array.prototype.flatMap')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザー実装状況</h2>

<div>


<p>{{Compat("javascript.builtins.Array.flatMap")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.flat()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
