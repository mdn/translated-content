---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
---
<div>{{JSRef}}</div>

<p><strong><code>handler.getPrototypeOf()</code></strong> メソッドは <code>[[GetPrototypeOf]]</code> 内部メソッドに対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>p</var> = new Proxy(<var>obj</var>, {
  getPrototypeOf(<var>target</var>) {
  ...
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数は <code>getPrototypeOf()</code> メソッドに渡されます。<code>this</code> はハンドラにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>getPrototypeOf()</code> メソッドはオブジェクト、または <code>null</code> を返さなければなりません。</p>

<h2 id="Description" name="Description">解説</h2>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object/proto", "__proto__")}}</li>
 <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{jsxref("Operators/instanceof", "instanceof")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li><code>getPrototypeOf</code> メソッドはオブジェクト、または <code>null</code> を返さなければなりません。</li>
 <li><code>target</code>が拡張不可の場合、 <code>Object.getPrototypeOf(<var>proxy</var>)</code> メソッドは <code>Object.getPrototypeOf(<var>target</var>)</code> と同じ値を返さなければなりません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Basic_usage" name="Basic_usage">基本的な使い方</h3>

<pre class="brush: js notranslate">const obj = {};
const proto = {};
const handler = {
    getPrototypeOf(target) {
        console.log(target === obj);   // true
        console.log(this === handler); // true
        return proto;
    }
};

const p = new Proxy(obj, handler);
console.log(Object.getPrototypeOf(p) === proto);    // true
</pre>

<h3 id="Five_ways_to_trigger_the_getPrototypeOf_trap" name="Five ways to trigger the getPrototypeOf trap">getPrototypeOf トラップが発生する５つの方法</h3>

<pre class="brush: js notranslate">const obj = {};
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
</pre>

<h3 id="Two_kinds_of_exceptions" name="Two_kinds_of_exceptions">２種類の例外</h3>

<pre class="brush: js example-bad notranslate">const obj = {};
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return 'foo';
    }
});
Object.getPrototypeOf(p); // TypeError: "foo" is not an object or null

const obj = Object.preventExtensions({});
const p = new Proxy(obj, {
    getPrototypeOf(target) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError: expected same prototype value
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof', '[[GetPrototypeOf]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.getPrototypeOf")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
</ul>
