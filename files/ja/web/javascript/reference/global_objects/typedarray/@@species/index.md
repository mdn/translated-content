---
title: 'get TypedArray[@@species]'
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/@@species
---
<div>{{JSRef}}</div>

<p><code><strong>TypedArray[@@species]</strong></code> アクセッサプロパティは、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array</a> のコンストラクタを返します。</p>

<h2 id="説明">説明</h2>

<p><code>species</code> アクセッサプロパティは、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array</a> オブジェクトの既定のコンストラクタを返します。サブクラスのコンストラクタは、コンストラクタの割り当てを変更するために、これをオーバーライドできます。</p>

<h2 id="例">例</h2>

<h3 id="普通のオブジェクト">普通のオブジェクト</h3>

<p><code>species</code> プロパティは、指定した <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array</a> オブジェクトの typed array コンストラクタを既定のコンストラクタ関数として返します。</p>

<pre class="brush: js notranslate">Int8Array[Symbol.species];    // function Int8Array()
Uint8Array[Symbol.species];   // function Uint8Array()
Float32Array[Symbol.species]; // function Float32Array()
</pre>

<h3 id="派生オブジェクト">派生オブジェクト</h3>

<p>派生コレクションオブジェクト（たとえば、カスタム typed array の <code>MyTypedArray</code>）では、<code>MyTypedArray</code> の species は <code>MyTypedArray</code> コンストラクタです。しかし、派生クラスのメソッドで、親である <a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">typed array</a> オブジェクトを返すためにこれをオーバーライドしたいかもしれません。</p>

<pre class="brush: js notranslate">class MyTypedArray extends Uint8Array {
  // MyTypedArray の species を親である Uint8Array コンストラクタにオーバーライド
  static get [Symbol.species]() { return Uint8Array; }
}</pre>

<h2 id="仕様書">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-get-%typedarray%-@@species', 'get %TypedArray% [ @@species ]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>

<div>


<p>{{Compat("javascript.builtins.TypedArray.@@species")}}</p>
</div>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("Symbol.species")}}</li>
</ul>
