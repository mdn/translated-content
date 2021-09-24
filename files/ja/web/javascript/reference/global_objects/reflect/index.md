---
title: Reflect
slug: Web/JavaScript/Reference/Global_Objects/Reflect
tags:
  - ECMAScript 2015
  - JavaScript
  - Overview
  - Reflect
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect
---
<div>{{JSRef}}</div>

<p><span class="seoSummary"><strong>Reflect</strong> は、介入可能な JavaScript 操作に対するメソッドを提供する組込みオブジェクトです。メソッドは<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">プロキシハンドラー</a>のメソッドと同じです。 <code>Reflect</code> は関数オブジェクトではありませんので、構築することはできません。</span></p>

<h2 id="Description" name="Description">解説</h2>

<p>他のグローバルオブジェクトとは異なり、 <code>Reflect</code> はコンストラクターではありません。 <a href="/ja/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> 演算子</a>で使用したり、 <code>Reflect</code> オブジェクトを関数として呼び出すことはできません。 <code>Reflect</code> のすべてのプロパティとメソッドは ({{jsxref("Math")}} オブジェクトと同様に) 静的です。</p>

<p><code>Reflect</code> オブジェクトは<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">プロキシハンドラーメソッド</a>と同じ名前をもつ、下記の関数を提供します。</p>

<p>これらのメソッドの一部は {{jsxref("Object")}} の対応するメソッドとも同じですが、これらの間には<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods">いくらか微妙な違い</a>があります。</p>

<h2 id="Methods" name="Methods">メソッド</h2>

<dl>
 <dt>{{jsxref("Reflect.apply()", "Reflect.apply(<var>target</var>, <var>thisArgument</var>, <var>argumentsList</var>)")}}</dt>
 <dd><code><var>target</var></code> 関数を、引数 <code><var>argumentsList</var></code> で指定された引数で呼び出します。 {{jsxref("Function.prototype.apply()")}} も参照してください。</dd>
 <dt>{{jsxref("Reflect.construct()", "Reflect.construct(<var>target</var>, <var>argumentsList</var>[, <var>newTarget</var>])")}}</dt>
 <dd>関数としての <a href="/ja/docs/Web/JavaScript/Reference/Operators/new"><code>new</code> 演算子</a>です。 <code>new <var>target</var>(...<var>argumentsList</var>)</code> を呼び出すのと等価です。別なプロトタイプを指定するためにオプションを指定することもできます。</dd>
 <dt>{{jsxref("Reflect.defineProperty()", "Reflect.defineProperty(<var>target</var>, <var>propertyKey</var>, <var>attributes</var>)")}}</dt>
 <dd>{{jsxref("Object.defineProperty()")}} と同様です。返値は {{jsxref("Boolean")}} で、プロパティが定義できた場合は <code>true</code> を返します。</dd>
 <dt>{{jsxref("Reflect.deleteProperty()", "Reflect.deleteProperty(<var>target</var>, <var>propertyKey</var>)")}}</dt>
 <dd>関数としての <a href="/ja/docs/Web/JavaScript/Reference/Operators/delete"><code>delete</code> 演算子</a>です。 <code>delete <var>target</var>[<var>propertyKey</var>]</code> を呼び出すのと等価です。</dd>
 <dt>{{jsxref("Reflect.get()", "Reflect.get(<var>target</var>, <var>propertyKey</var>[, <var>receiver</var>])")}}</dt>
 <dd>このプロパティの値を返します。オブジェクトからのプロパティの取得 (<code>target[propertyKey]</code>) を関数にしたようなものです。</dd>
 <dt>{{jsxref("Reflect.getOwnPropertyDescriptor()", "Reflect.getOwnPropertyDescriptor(<var>target</var>, <var>propertyKey</var>)")}}</dt>
 <dd>{{jsxref("Object.getOwnPropertyDescriptor()")}} に似ています。指定したプロパティが存在する場合にプロパティディスクリプターを返し、存在しない場合は {{jsxref("undefined")}} を返します。</dd>
 <dt>{{jsxref("Reflect.getPrototypeOf()", "Reflect.getPrototypeOf(<var>target</var>)")}}</dt>
 <dd>{{jsxref("Object.getPrototypeOf()")}} と同じです。</dd>
 <dt>{{jsxref("Reflect.has()", "Reflect.has(<var>target, propertyKey</var>)")}}</dt>
 <dd>{{jsxref("Boolean")}} で対象がそのプロパティを持っているかどうかを返します。固有の場合も継承の場合も含みます。 <a href="/ja/docs/Web/JavaScript/Reference/Operators/in"><code>in</code> 演算子</a>を関数にしたものです。</dd>
 <dt>{{jsxref("Reflect.isExtensible()", "Reflect.isExtensible(<var>target</var>)")}}</dt>
 <dd>{{jsxref("Object.isExtensible()")}} と同じです。 {{jsxref("Boolean")}} を返し、 <code>true</code> ならば対象が拡張可能です。</dd>
 <dt>{{jsxref("Reflect.ownKeys()", "Reflect.ownKeys(<var>target</var>)")}}</dt>
 <dd>独自の (継承されているものではない) プロパティのキーをもつ文字列の配列を返します。</dd>
 <dt>{{jsxref("Reflect.preventExtensions()", "Reflect.preventExtensions(<var>target</var>)")}}</dt>
 <dd>{{jsxref("Object.preventExtensions()")}} に似ています。 {{jsxref("Boolean")}} を返し、 <code>true</code> は更新に成功した場合です。</dd>
 <dt>{{jsxref("Reflect.set()", "Reflect.set(<var>target</var>, <var>propertyKey</var>, <var>value</var>[, <var>receiver</var>])")}}</dt>
 <dd>値をプロパティに割り当てる関数です。更新に成功したら <code>true</code> となる {{jsxref("Boolean")}} を返します。</dd>
 <dt>{{jsxref("Reflect.setPrototypeOf()", "Reflect.setPrototypeOf(<var>target</var>, <var>prototype</var>)")}}</dt>
 <dd>オブジェクトのプロトタイプを設定する関数です。 {{jsxref("Boolean")}} を返し、 <code>true</code> ならば成功です。</dd>
</dl>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-reflect-object', 'Reflect')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Reflect")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}} グローバルオブジェクト</li>
 <li>{{jsxref("Proxy.handler", "handler")}} オブジェクト</li>
</ul>

<div id="gtx-trans" style="position: absolute; left: 22px; top: 1930px;">
<div class="gtx-trans-icon"></div>
</div>
