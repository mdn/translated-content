---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
tags:
  - ECMAScript 2015
  - ECMAScript6
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
---
<div>{{JSRef}}</div>

<p><strong><code>handler.preventExtensions()</code></strong> は {{jsxref("Object.preventExtensions()")}} に対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  preventExtensions: function(<var>target</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数は <code>preventExtensions()</code> メソッドに渡されます。 <code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>preventExtensions()</code> メソッドは真偽値を返さなければなりません。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.preventExtensions()</strong></code> メソッドは {{jsxref("Object.preventExtensions()")}} に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li><code>Object.preventExtensions(<var>proxy</var>)</code> は、 <code>Object.isExtensible(<var>proxy</var>)</code> が <code>false</code> の場合のみ <code>true</code> を返します。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="preventExtensions_のトラップ">preventExtensions のトラップ</h3>

<p>次のコードでは {{jsxref("Object.preventExtensions()")}} をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  preventExtensions: function(target) {
    console.log('called');
    Object.preventExtensions(target);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // "called"
                                          // false
</pre>

<p>The following code violates the invariant.</p>

<pre class="brush: js example-bad notranslate">const p = new Proxy({}, {
  preventExtensions: function(target) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError is thrown
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-preventextensions', '[[PreventExtensions]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.preventExtensions")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>
