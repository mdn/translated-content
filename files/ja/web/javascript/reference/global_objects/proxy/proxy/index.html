---
title: Proxy() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
tags:
  - Constructor
  - JavaScript
  - Proxy
  - Reference
  - コンストラクター
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy
---
<div>{{JSRef}}</div>

<p><code><strong>Proxy()</strong></code> コンストラクターは {{jsxref("Proxy")}} オブジェクトを生成するために使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox">new Proxy(<var>target</var>, <var>handler</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd><code>Proxy</code> でラップするターゲットのオブジェクトです。あらゆる種類のオブジェクト、例えばネイティブ配列や関数、別のプロキシなどがなることができます。</dd>
 <dt><code><var>handler</var></code></dt>
 <dd>関数をプロパティとして持つオブジェクトで、その関数で、 Proxy <code><var>p</var></code> に対して操作が行われた場合の挙動を定義します。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p><code>Proxy()</code> コンストラクターを使用すると、新しい <code>Proxy</code> オブジェクトを生成することができます。このコンストラクターは2つの必須の引数を取ります。</p>

<ul>
 <li><code>target</code> はプロキシを作成するオブジェクトです。</li>
 <li><code>handler</code> はプロキシのカスタム動作を定義するオブジェクトです。</li>
</ul>

<p>handler を空にすると、ほとんどすべての点でターゲットとまったく同じように振る舞うプロキシを作成します。 <code>handler</code> オブジェクト上で関数群のいずれかを定義することで、プロキシの動作の特定の側面をカスタマイズすることができます。例えば、 <code>get()</code> を定義することで、 ターゲットの<a href="/ja/docs/Web/JavaScript/Reference/Operators/Property_Accessors">プロパティアクセサー</a>のカスタマイズされたバージョンを提供することができます。</p>

<h3 id="Handler_functions" name="Handler_functions">ハンドラー関数</h3>

<p>この節では、定義することができるすべてのハンドラー関数を列挙します。ハンドラー関数は、対象オブジェクトの呼び出しをトラップするので、<em>トラップ</em>と呼ばれることがあります。</p>

<dl>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/apply", "handler.apply()")}}</dt>
 <dd>関数呼び出しのトラップです。。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/construct", "handler.construct()")}}</dt>
 <dd>{{JSxRef("Operators/new", "new")}} 演算子のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/defineProperty", "handler.defineProperty()")}}</dt>
 <dd>{{JSxRef("Object.defineProperty")}} のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}</dt>
 <dd>{{JSxRef("Operators/delete", "delete")}} 演算子のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/get", "handler.get()")}}</dt>
 <dd>プロパティ値の取得のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}</dt>
 <dd>{{JSxRef("Object.getOwnPropertyDescriptor")}} のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}</dt>
 <dd>{{JSxRef("Object.getPrototypeOf")}} のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/has", "handler.has()")}}</dt>
 <dd>{{JSxRef("Operators/in", "in")}} 演算子のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/isExtensible", "handler.isExtensible()")}}</dt>
 <dd>{{JSxRef("Object.isExtensible")}} のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/ownKeys", "handler.ownKeys()")}}</dt>
 <dd>{{JSxRef("Object.getOwnPropertyNames")}} と {{JSxRef("Object.getOwnPropertySymbols")}} のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}</dt>
 <dd>{{JSxRef("Object.preventExtensions")}} のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/set", "handler.set()")}}</dt>
 <dd>プロパティ値の設定のトラップです。</dd>
 <dt>{{JSxRef("Global_Objects/Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}</dt>
 <dd>{{JSxRef("Object.setPrototypeOf")}} のトラップです。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Selectively_proxy_property_accessors" name="Selectively_proxy_property_accessors">選択的にプロパティアクセサーのプロキシを行う</h3>

<p>この例では、ターゲットは <code>notProxied</code> と <code>proxied</code> の2つのプロパティを持っています。 <code>proxied</code> に別の値を返し、それ以外のアクセスをターゲットに許可するハンドラーを定義します。</p>

<pre class="brush: js">const target = {
  notProxied: "original value",
  proxied: "original value"
};

const handler = {
  get: function(target, prop, receiver) {
    if (prop === "proxied") {
      return "replaced value";
    }
    return Reflect.get(...arguments);
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.notProxied); // "original value"
console.log(proxy.proxied);    // "replaced value"</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-constructor', 'Proxy constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Proxy.Proxy")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Meta_programming">JavaScript Guide ガイドの <code>Proxy</code> と <code>Reflect</code></a></li>
 <li>{{jsxref("Global_Objects/Reflect", "Reflect")}}</li>
</ul>
