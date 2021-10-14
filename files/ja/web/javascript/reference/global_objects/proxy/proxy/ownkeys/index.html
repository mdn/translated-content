---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
---
<div>{{JSRef}}</div>

<p><strong><code>handler.ownKeys()</code></strong> メソッドは {{jsxref("Reflect.ownKeys()")}} に対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  ownKeys: function(<var>target</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数は <code>ownKeys</code> メソッドに渡されます。 <code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>ownKeys()</code> メソッドは列挙可能オブジェクトを返さなければなりません。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.ownKeys()</strong></code> メソッドは {{jsxref("Reflect.ownKeys()")}} に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.getOwnPropertySymbols()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Reflect.ownKeys()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li><code>ownKeys</code>の結果はリストです。</li>
 <li>結果リストのそれぞれの要素の型は{{jsxref("String")}} または {{jsxref("Symbol")}}のどちらかです。</li>
 <li>結果リストはターゲットオブジェクトのすべての非設定の独自プロパティのキーを含みます。</li>
 <li>ターゲットオブジェクトが拡張可能でないなら、結果リストはターゲットオブジェクトのすべての独自プロパティのキーを含まなければなりません。そして、他の値を含みません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trapping_of_getOwnPropertyNames" name="Trapping_of_getOwnPropertyNames">getOwnPropertyNames のトラップ</h3>

<p>次のコードでは {{jsxref("Object.getOwnPropertyNames()")}} をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  ownKeys: function(target) {
    console.log('called');
    return ['a', 'b', 'c'];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "called"
                                            // [ 'a', 'b', 'c' ]</pre>

<p>次のコードでは不変条件に違反します。</p>

<pre class="brush: js example-bad notranslate">const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: true,
  value: 10 }
);

const p = new Proxy(obj, {
  ownKeys: function(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys', '[[OwnPropertyKeys]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.ownKeys")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Reflect.ownKeys()")}}</li>
</ul>
