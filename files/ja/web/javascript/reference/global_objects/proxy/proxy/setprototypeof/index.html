---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
---
<div>{{JSRef}}</div>

<p><strong><code>handler.setPrototypeOf()</code></strong> メソッドは、 {{jsxref("Object.setPrototypeOf()")}} に対するトラップです。</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller", "taller")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">const <var>p</var> = new Proxy(<var>target</var>, {
  setPrototypeOf: function(<var>target</var>, <var>prototype</var>) {
  }
});
</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<p>次の引数は <code>setPrototypeOf()</code> メソッドに渡されます。 <code>this</code> はハンドラーにバインドされます。</p>

<dl>
 <dt><code><var>target</var></code></dt>
 <dd>ターゲットオブジェクトです。</dd>
 <dt><code><var>prototype</var></code></dt>
 <dd>オブジェクトの新しいプロトタイプ、または <code>null</code> です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p><code>setPrototypeOf()</code> メソッドは <code>[[Prototype]]</code> の変更に成功したら <code>true</code> を返し、そうでない場合は <code>false</code> を返します。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code><strong>handler.setPrototypeOf()</strong></code> メソッドは {{jsxref("Object.setPrototypeOf()")}} に対するトラップです。</p>

<h3 id="Interceptions" name="Interceptions">介入</h3>

<p>このトラップは下記の操作に介入できます。</p>

<ul>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
</ul>

<h3 id="Invariants" name="Invariants">不変条件</h3>

<p>以下の不変条件に違反している場合、プロキシは {{jsxref("TypeError")}} を発生します。</p>

<ul>
 <li><code><var>target</var></code> が拡張可能でない場合、引数の <code>prototype</code> は <code>Object.getPrototypeOf(<var>target</var>)</code> と同じ値でなければなりません。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<p>オブジェクトに新しいプロトタイプを設定することを禁止したい場合は、ハンドラーの <code>setPrototypeOf()</code> メソッドで <code>false</code> を返したり、例外を発生させたりするようにすることができます。</p>

<h3 id="Approach_1_Returning_false" name="Approach_1_Returning_false">アプローチ 1: false を返す</h3>

<p>このアプローチでは、例外を発生させる変更操作は、それ自身で例外を生成する必要があります。</p>

<p>例えば、 {{jsxref("Object.setPrototypeOf()")}} は、それ自体が {{jsxref("TypeError")}} を発生させます。 {{jsxref("Reflect.setPrototypeOf()")}} のように、失敗しても通常は例外が発生しない操作で変更操作が行われた場合、例外は発生しません。</p>

<pre class="brush: js notranslate">const handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

const newProto = {}, target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
</pre>

<h3 id="Approach_2_Throwing_an_Exception" name="Approach_2_Throwing_an_Exception">アプローチ 2: 例外を発生</h3>

<p>後者のアプローチでは、変更を試みるすべての操作で例外が発生します。このアプローチは、例外を発生しない操作でも失敗時に例外をは正させたい場合や、カスタムの例外値を発生させたい場合に最適です。</p>

<pre class="brush: js notranslate">const handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error('custom error');
    }
};

const newProto = {}, target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);  // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v', '[[SetPrototypeOf]]')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.Proxy.handler.setPrototypeOf")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
</ul>
