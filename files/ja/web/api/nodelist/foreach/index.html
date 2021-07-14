---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
tags:
  - DOM
  - Iterable
  - Method
  - NodeList
  - Reference
  - Web
translation_of: Web/API/NodeList/forEach
---
<p>{{APIRef("DOM")}}</p>

<p>{{domxref("NodeList")}} インターフェースにおける <strong><code>forEach()</code></strong> メソッドは、引数に渡されたコールバックをリストの各値のペアに対して 1 度ずつ挿入順で呼び出します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>someNodeList</var>.forEach(<var>callback</var>[, <var>thisArg</var>]);
</pre>

<h3 id="Parameters" name="Parameters">パラメーター</h3>

<dl>
 <dt><code><var>callback</var></code></dt>
 <dd>
 <p><code><var>someNodeList</var></code> の各要素に対して実行する関数で、3 つの引数を受け付けます。</p>

 <dl>
  <dt><code><var>currentValue</var></code></dt>
  <dd>現在 <code><var>someNodeList</var></code> で処理されている要素です。</dd>
  <dt><code><var>currentIndex</var></code> {{Optional_inline}}</dt>
  <dd>現在 <code><var>someNodeList</var></code><var> </var>で処理されている <code><var>currentValue</var></code> の添字です。</dd>
  <dt><code><var>listObj</var></code> {{Optional_inline}}</dt>
  <dd><code>forEach()</code> を適用しようとしている <code><var>someNodeList</var></code><var> </var>です。</dd>
 </dl>
 </dd>
 <dt><code><var>thisArg</var></code> {{Optional_inline}}</dt>
 <dd><code><var>callback</var></code> 内で <code><a href="/ja/docs/Web/JavaScript/Reference/Operators/this">this</a></code> として使う値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">戻り値</h3>

<p>{{jsxref('undefined')}}.</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js;highlight:[6] notranslate">let node = document.createElement("div");
let kid1 = document.createElement("p");
let kid2 = document.createTextNode("hey");
let kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

let list = node.childNodes;

list.forEach(
  function(currentValue, currentIndex, listObj) {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'myThisArg'
);</pre>

<p>上記のコードの結果は以下のようになります。</p>

<pre class="notranslate">[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p>以下の {{Glossary("Polyfill","polyfill")}} を追加することで、 <a href="https://caniuse.com/#search=es5">ES5</a> をサポートする全てのブラウザで使用することができるようになります。</p>

<pre class="brush: js notranslate">if (window.NodeList &amp;&amp; !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i &lt; this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}</pre>

<p>または</p>

<pre class="brush: js notranslate">if (window.NodeList &amp;&amp; !NodeList.prototype.forEach) {
   NodeList.prototype.forEach = Array.prototype.forEach;
}</pre>

<p>多くのブラウザでは、実は上記のような方法で <code>NodeList.prototype.forEach()</code> を実装しています。(例えば、Chrome)</p>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">策定状況</th>
   <th scope="col">コメント</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("WebIDL", "#es-forEach", "forEach")}}</td>
   <td>{{Spec2("WebIDL")}}</td>
   <td><code>iterable</code> 宣言で<code>forEach</code> を定義。</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility" name="Browser_Compatibility">ブラウザーの互換性</h2>



<p>{{Compat("api.NodeList.forEach")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>
