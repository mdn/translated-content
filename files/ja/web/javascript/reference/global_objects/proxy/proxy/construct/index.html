---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
---
<div>{{JSRef}}</div>

<p><strong><code>handler.construct()</code></strong> メソッドは {{jsxref("Operators/new", "new")}} 演算子のトラップです。結果として得られるプロキシオブジェクトに対して新しい操作を有効にするためには、プロキシを初期化するために使われるターゲット自身が <code>[[Construct]]</code> 内部メソッドを持っていなければなりません(つまり、 <code>new target</code> が有効でなければなりません)。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="brush: js notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  construct: function(<var>target</var>, <var>argumentsList</var>, <var>newTarget</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数が <code>construct()</code> メソッドに渡されます。 <code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクト</dd>
 <dt><code><var>argumentsList</var></code></dt>
 <dd>コンストラクタに対する引数のリスト</dd>
 <dt><code><var>newTarget</var></code></dt>
 <dd>上記の <code><var>p</var></code> に呼び出された元のコンストラクターです。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>construct</code> メソッドはオブジェクトを返す必要があります。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.construct()</strong></code> メソッドは {{jsxref("Operators/new", "new")}} 操作に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li><code>new proxy(...args)</code></li>
 <li>{{jsxref("Reflect.construct()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li>結果が <code>Object</code> でならなければならない。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Trapping_the_new_operator" name="Trapping_the_new_operator">new 演算子のトラップ</h3>

<p>次のコードでは {{jsxref("Operators/new", "new")}} 操作をトラップします。</p>

<pre class="brush: js notranslate">const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    console.log('called: ' + argumentsList.join(', '));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "called: 1"
                             // 10
</pre>

<p>次のコードでは不変条件に違反します。</p>

<pre class="brush: js example-bad notranslate">const p = new Proxy(function() {}, {
  construct: function(target, argumentsList, newTarget) {
    return 1;
  }
});

new p(); // TypeError is thrown
</pre>

<p>次のコードはプロキシを正しく初期化していません。プロキシの <code><var>target</var></code> の初期化は、それ自身が {{jsxref("Operators/new", "new")}} 演算子に有効なコンストラクターでなければなりません。</p>

<pre class="brush: js example-bad notranslate">const p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget) {
    return {};
  }
});

new p(); // TypeError is thrown, "p" is not a constructor
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
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget', '[[Construct]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.construct")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Operators/new", "new")}} operator.</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
</ul>
