---
title: Set.prototype.has()
slug: Web/JavaScript/Reference/Global_Objects/Set/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/has
---
{{JSRef}}

**`has()`** メソッドは、特定の値をもつ要素が `Set` オブジェクト内に存在するかどうかを示す真偽値を返します。

{{EmbedInteractiveExample("pages/js/set-prototype-has.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>mySet</var>.has(<var>value</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt>`<var>value</var>`</dt>
 <dd>`Set` オブジェクトに存在するかテストする値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

`Set` オブジェクト内に特定の値をもつ要素が存在していたら `true` を返します。さもなければ `false` を返します。

<div class="blockIndicator note">
**注:** 技術的に言えば、`has()` は <a href="/ja/docs/Web/JavaScript/Equality_comparisons_and_sameness#Same-value-zero_equality">Same-value-zero</a> アルゴリズムを使用して、指定された要素が見つかったかどうかを判断します。
</div>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_has_method" name="Using_the_has_method">has() メソッドの使用</h3>

<pre class="brush: js notranslate">var mySet = new Set();
mySet.add('foo');

mySet.has('foo');  // returns true
mySet.has('bar');  // returns false

var set1 = new Set();
var obj1 = {'key1': 1};
set1.add(obj1);

set1.has(obj1);        // returns true
set1.has({'key1': 1}); // オブジェクト参照が異なるため false を返す
set1.add({'key1': 1}); // set1 には2つのエントリが含まれるようになる
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
   <td>{{SpecName('ESDraft', '#sec-set.prototype.has', 'Set.prototype.has')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Set.has")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("Set.prototype.add()")}}</li>
 <li>{{jsxref("Set.prototype.delete()")}}</li>
</ul>
