---
title: Set.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Set/values
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/values
---
{{JSRef}}

**`values()`** メソッドは、挿入順で `Set` オブジェクト内の各要素の値を含んだ、新しいイテレーターオブジェクトを返します。

<div class="blockIndicator note">
**注**: **`keys()`** メソッドは ({{jsxref("Map")}} オブジェクトとの類似性のため) このメソッドに対するエイリアスです。まったく同じように動作し、`Set` の各要素の**値**を返します。
</div>

{{EmbedInteractiveExample("pages/js/set-prototype-values.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>mySet</var>.values();</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

挿入順で `Set` オブジェクト内の各要素の値を含んだ、新しいイテレーターオブジェクトです。

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_values" name="Using_values">values() の使用</h3>

<pre class="brush:js notranslate">var mySet = new Set();
mySet.add('foo');
mySet.add('bar');
mySet.add('baz');

var setIter = mySet.values();

console.log(setIter.next().value); // "foo"
console.log(setIter.next().value); // "bar"
console.log(setIter.next().value); // "baz"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-set.prototype.values', 'Set.prototype.values')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.builtins.Set.values")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Set.prototype.entries()")}}</li>
</ul>
