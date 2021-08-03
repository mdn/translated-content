---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<p><strong><code>handler.getOwnPropertyDescriptor()</code></strong> は {{jsxref("Object.getOwnPropertyDescriptor()")}} に対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  getOwnPropertyDescriptor: function(<var>target</var>, <var>prop</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数は <code>getOwnPropertyDescriptor()</code> メソッドに渡されます。 <code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
 <dt><code><var>prop</var></code></dt>
 <dd>ディスクリプタを取得されるプロパティ名です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>getOwnPropertyDescriptor</code> メソッドはオブジェクト、または <code>undefined</code> を返さなければなりません。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.getOwnPropertyDescriptor()</strong></code> メソッドは {{jsxref("Object.getOwnPropertyDescriptor()")}} に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li><code>getOwnPropertyDescriptor()</code> はオブジェクトか、または <code>undefined</code> を返さなければなりません。</li>
 <li>プロパティがターゲットオブジェクトの設定不可な独自のプロパティとして存在する場合、存在しないとして報告されてはいけません。</li>
 <li>プロパティがターゲットオブジェクトの独自のプロパティとして存在し、そのターゲットオブジェクトが拡張不可の場合、存在しないとして報告されてはいけません。</li>
 <li>プロパティがターゲットオブジェクトの独自のプロパティとして存在せず、そのターゲットオブジェクトが拡張不可の場合、存在するとして報告されてはいけません。</li>
 <li>プロパティがターゲットオブジェクトの独自のプロパティとして存在しないか、ターゲットオブジェクトの設定可能な独自のプロパティとして存在している場合、設定不可であるとして報告されてはいけません。</li>
 <li><code>Object.getOwnPropertyDescriptor(<var>target</var>)</code> の結果を <code>Object.defineProperty()</code> に使用した時に、ターゲットオブジェクトに適用でき、例外をスローしません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trapping_of_getOwnPropertyDescriptor" name="Trapping_of_getOwnPropertyDescriptor">getOwnPropertyDescriptor のトラップ</h3>

<p>次のコードでは {{jsxref("Object.getOwnPropertyDescriptor()")}} をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({ a: 20}, {
  getOwnPropertyDescriptor: function(target, prop) {
    console.log('called: ' + prop);
    return { configurable: true, enumerable: true, value: 10 };
  }
});

console.log(Object.getOwnPropertyDescriptor(p, 'a').value); // "called: a"
                                                            // 10
</pre>

<p>次のコードでは不変条件に違反します。</p>

<pre class="brush: js example-bad notranslate">const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor: function(target, prop) {
    return undefined;
  }
});

Object.getOwnPropertyDescriptor(p, 'a'); // TypeError is thrown
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p', '[[GetOwnProperty]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.getOwnPropertyDescriptor")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>
