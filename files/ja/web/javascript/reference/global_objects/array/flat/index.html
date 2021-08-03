---
title: Array.prototype.flat()
slug: Web/JavaScript/Reference/Global_Objects/Array/flat
tags:
  - Array
  - JavaScript
  - Method
  - Prototype
  - Reference
  - flat
translation_of: Web/JavaScript/Reference/Global_Objects/Array/flat
---
<div>{{JSRef}}</div>

<p><code><strong>flat()</strong></code> メソッドは、すべてのサブ配列の要素を指定した深さで再帰的に結合した新しい配列を生成します。</p>

<div>{{EmbedInteractiveExample("pages/js/array-flat.html")}}</div>



<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>var newArray = arr</var>.flat(<em>[depth]</em>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>depth</code> {{optional_inline}}</dt>
 <dd>ネストされた配列構造で、どの程度の深さをフラット化するか指定する深さレベルです。既定値は 1 です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>サブ配列の要素を結合した新しい配列。</p>

<h2 id="Alternatives" name="Alternatives">代替手段</h2>

<h3 id="reduce_and_concat" name="reduce_and_concat">reduce と concat</h3>

<pre class="brush: js notranslate">const arr = [1, 2, [3, 4]];

// 単一レベルの配列にする
arr.flat();
// 次のものと同様
arr.reduce((acc, val) =&gt; acc.concat(val), []);
// [1, 2, 3, 4]

// または、分割代入の構文を使用して
const flattened = arr =&gt; [].concat(...arr);
</pre>

<h3 id="reduce_concat_isArray_recursivity" name="reduce_concat_isArray_recursivity">reduce + concat + isArray + 再帰</h3>

<pre class="brush: js notranslate">const arr = [1, 2, [3, 4, [5, 6]]];

// reduce と concat の再帰によって深いレベルを平坦化することができる
function flatDeep(arr, d = 1) {
   return d &gt; 0 ? arr.reduce((acc, val) =&gt; acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

flatDeep(arr, Infinity);
// [1, 2, 3, 4, 5, 6]
</pre>

<h3 id="Use_a_stack" name="Use_a_stack">スタックの使用</h3>

<pre class="brush: js notranslate">// 再帰を使わずにスタックを使用して平坦化
// note that depth control is hard/inefficient as we will need to tag EACH value with its own depth
// also possible w/o reversing on shift/unshift, but array OPs on the end tends to be faster
function flatten(input) {
  const stack = [...input];
  const res = [];
  while(stack.length) {
    // pop value from stack
    const next = stack.pop();
    if(Array.isArray(next)) {
      // push back array items, won't modify the original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // reverse to restore input order
  return res.reverse();
}

const arr = [1, 2, [3, 4, [5, 6]]];
flatten(arr);
// [1, 2, 3, 4, 5, 6]
</pre>

<h3 id="Use_Generator_function" name="Use_Generator_function">Generator 関数の使用</h3>

<pre class="brush: js notranslate">function* flatten(array, depth) {
    if(depth === undefined) {
      depth = 1;
    }
    for(const item of array) {
        if(Array.isArray(item) &amp;&amp; depth &gt; 0) {
          yield* flatten(item, depth - 1);
        } else {
          yield item;
        }
    }
}

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr, Infinity)];
// [1, 2, 3, 4, 5, 6]
</pre>

<div class="hidden">
<p>この記事にポリフィルを追加しないでください。参考までに、<a href="https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500">https://discourse.mozilla.org/t/mdn-rfc-001-mdn-wiki-pages-shouldnt-be-a-distributor-of-polyfills/24500</a> をチェックしてください。</p>
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Flattening_nested_arrays" name="Flattening_nested_arrays">ネストされた配列の平坦化</h3>

<pre class="brush: js notranslate">const arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</pre>

<h3 id="Flattening_and_array_holes" name="Flattening_and_array_holes">平坦化と配列の穴</h3>

<p>flat メソッドは配列内の空要素を削除します。</p>

<pre class="brush: js notranslate">const arr5 = [1, 2, , 4, 5];
arr5.flat();
// [1, 2, 4, 5]
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
   <td>{{SpecName('ESDraft', '#sec-array.prototype.flat', 'Array.prototype.flat')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Array.flat")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.flatMap()")}}</li>
 <li>{{jsxref("Array.prototype.map()")}}</li>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.concat()")}}</li>
</ul>
