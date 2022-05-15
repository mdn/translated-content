---
title: 'get Set[@@species]'
slug: Web/JavaScript/Reference/Global_Objects/Set/@@species
tags:
  - ECMAScript 2015
  - JavaScript
  - Property
  - set
translation_of: Web/JavaScript/Reference/Global_Objects/Set/@@species
---
{{JSRef}}

**`Array[Symbol.species]`** アクセサープロパティは、`Set` コンストラクターを返します。

<h2 id="Description" name="Description">解説</h2>

`species` アクセサープロパティは、 `Set` オブジェクトの既定のコンストラクターを返します。サブクラスのコンストラクターはコンストラクターに代入することで、これをオーバーライドすることができます。

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Species_in_ordinary_objects" name="Species_in_ordinary_objects">通常のオブジェクトの spicies</h3>

`species` プロパティは、`Set` オブジェクトの既定のコンストラクター関数である `Set` コンストラクターを返します。

<pre class="brush: js notranslate">Set[Symbol.species]; // Set() 関数</pre>

<h3 id="Species_in_derived_objects" name="Species_in_derived_objects">派生オブジェクトの spicies</h3>

派生コレクションオブジェクト (たとえば、独自の配列である `MySet`) では、`MySet` の species は `MySet` コンストラクターです。しかし、派生クラスのメソッドで、親である `Set` オブジェクトを返すためにこれをオーバーライドしたいかもしれません。

<pre class="brush: js notranslate">class MySet extends Set {
  // MySet species を親である Set コンストラクターにオーバーライド。
  static get [Symbol.species]() { return Set; }
}</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-set-@@species', 'get Set [ @@species ]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
{{Compat("javascript.builtins.Set.@@species")}}
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
