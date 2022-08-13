---
title: Reflect.get()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/get
tags:
- ECMAScript 2015
- JavaScript
- Method
- Reference
- Reflect
- メソッド
translation_of: Web/JavaScript/Reference/Global_Objects/Reflect/get
---
<div>{{JSRef}}</div>

<p>静的な <strong><code>Reflect.get()</code></strong> メソッドは、オブジェクト (<code>target[propertyKey]</code>) からプロパティを関数として取得するように動作します。</p>

<div>{{EmbedInteractiveExample("pages/js/reflect-get.html")}}</div>

<h2 id="Syntax">構文</h2>

<pre class="brush: js">Reflect.get(<var>target</var>, <var>propertyKey</var>[, <var>receiver</var>])
</pre>

<h3 id="Parameters">引数</h3>

<dl>
  <dt><code><var>target</var></code></dt>
  <dd>プロパティを取得する対象のオブジェクト。</dd>
  <dt><code><var>propertyKey</var></code></dt>
  <dd>設定するプロパティ名。</dd>
  <dt><code><var>receiver</var></code> {{optional_inline}}</dt>
  <dd>ゲッターがあった場合、 <code><var>target</var></code> への呼び出しで使用する <code>this</code> の値を提供します。 {{jsxref("Proxy")}} とともに使用すると、 <code><var>target</var></code> から継承しているオブジェクトにすることができます。</dd>
</dl>

<h3 id="Return_value">返値</h3>

<p>プロパティの値です。</p>

<h3 id="Exceptions">例外</h3>

<p><code><var>target</var></code> が {{jsxref("Object")}} でなかった場合、 {{jsxref("TypeError")}} が発生します。</p>

<h2 id="Description">解説</h2>

<p><code>Reflect.get</code> メソッドはオブジェクトのプロパティを取得します。機能としては<a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティアクセサー</a>構文と似ています。</p>

<h2 id="Examples">例</h2>

<h3 id="Using_Reflect.get"><code>Reflect.get()</code> の使用</h3>

<pre class="brush: js">// オブジェクト
let obj = { x: 1, y: 2 }
Reflect.get(obj, 'x')  // 1

// 配列
Reflect.get(['zero', 'one'], 1)  // "one"

// Proxy with a get handler
let x = {p: 1};

let obj = new Proxy(x, {
  get(t, k, r) {
    return k + 'bar'
  }
})
Reflect.get(obj, 'foo')  // "foobar"

//Proxy with get handler and receiver
let x = {p: 1, foo: 2};
let y = {foo: 3};

let obj = new Proxy(x, {
  get(t, prop, receiver) {
    return receiver[prop] + 'bar'
  }
})
Reflect.get(obj, 'foo', y) // "3bar"
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-reflect.get', 'Reflect.get')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Reflect.get")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
  <li>{{jsxref("Reflect")}}</li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティアクセサー</a></li>
</ul>
