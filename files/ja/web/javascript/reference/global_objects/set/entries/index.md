---
title: Set.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Set/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/entries
---
{{JSRef}}

`**entries()**` メソッドは、`Set` オブジェクトの各要素を挿入順に** `[value, value]` の配列**を含む新しい<a href="/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators">イテレーター</a>オブジェクトを返します。`Set` オブジェクトは、`Map` オブジェクトのように `key` を持つことはありません。しかしながら、`Map` オブジェクトと似た API をもつために、各 <em>entry</em> は <em>key</em> と <em>value</em> に対して同じ値を持ちます。そのため、配列 `[value, value]` が返されます。

{{EmbedInteractiveExample("pages/js/set-prototype-entries.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">`<em>mySet</em>.entries()`</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

`Set` オブジェクトの各要素を挿入順に** `[value, value]` の配列**を含む新しい `Iterator` オブジェクトです。

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_entries" name="Using_entries">entries() を使う</h3>

<pre class="brush:js notranslate">var mySet = new Set();
mySet.add('foobar');
mySet.add(1);
mySet.add('baz');

var setIter = mySet.entries();

console.log(setIter.next().value); // ["foobar", "foobar"]
console.log(setIter.next().value); // [1, 1]
console.log(setIter.next().value); // ["baz", "baz"]
</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-set.prototype.entries', 'Set.prototype.entries')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Set.entries")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Set.prototype.keys()")}}</li>
 <li>{{jsxref("Set.prototype.values()")}}</li>
</ul>
