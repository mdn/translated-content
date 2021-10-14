---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
---
<div>{{JSRef}}</div>

<p><strong><code>handler.get()</code></strong> はプロパティの値を取得することに対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  get: function(<var>target</var>, <var>property</var>, <var>receiver</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数が <code>get()</code> メソッドに渡されます。 <code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクト</dd>
 <dt><code><var>property</var></code></dt>
 <dd>取得するプロパティの名称</dd>
 <dt><code><var>receiver</var></code></dt>
 <dd>proxy、または proxy から継承するオブジェクトのどちらか</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>get()</code> メソッドはどんな値でも返すことができます。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.get()</strong></code> メソッドはプロパティ値を取得することに対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>プロパティアクセス: <code><var>proxy</var>[<var>foo</var>]</code> と <code><var>proxy</var>.<var>bar</var></code></li>
 <li>継承したプロパティアクセス: <code>Object.create(<var>proxy</var>)[<var>foo</var>]</code></li>
 <li>{{jsxref("Reflect.get()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li>ターゲットオブジェクトプロパティが書き込み不可で非設定なデータプロパティなら、プロパティに対して報告される値は対応するターゲットオブジェクトプロパティと同じでなければなりません。</li>
 <li>対応するターゲットオブジェクトプロパティが[[Get]]属性として未定義で非設定なアクセスプロパティなら、プロパティに対して報告される値は未定義でなければなりません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trap_for_getting_a_property_value" name="Trap_for_getting_a_property_value">プロパティ値の取得のトラップ</h3>

<p>次のコードではプロパティ値の取得をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy({}, {
  get: function(target, property, receiver) {
    console.log('called: ' + property);
    return 10;
  }
});

console.log(p.a); // "called: a"
                  // 10
</pre>

<p>次のコードでは不変条件に違反します。</p>

<pre class="brush: js notranslate">const obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false
});

const p = new Proxy(obj, {
  get: function(target, property) {
    return 20;
  }
});

p.a; // TypeError is thrown
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver', '[[Get]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.get")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Reflect.get()")}}</li>
</ul>
