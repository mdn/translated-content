---
title: NodeList.prototype.forEach()
slug: Web/API/NodeList/forEach
translation_of: Web/API/NodeList/forEach
---
<p>{{APIRef("DOM")}}</p>

<p>{{domxref("NodeList")}} 인터페이스의 <strong><code>forEach()</code></strong> 메서드는 리스트 내의 각각의 값 쌍에 대해 매개 변수에 지정된 콜백을 삽입 순서로 호출합니다.</p>

<h2 id="문법Syntax">문법Syntax</h2>

<pre class="syntaxbox"><em>NodeList.</em>forEach<em>(callback[, thisArg]);</em>
</pre>

<h3 id="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>각각의 요소에 대해 실행하는 함수로, 3개의 인수(arguments)를 갖습니다:
 <dl>
  <dt><em><code>currentValue</code></em></dt>
  <dd>NodeList에서 처리중인 현재 요소(element)입니다.</dd>
  <dt><code><em>currentIndex</em></code></dt>
  <dd>NodeList에서 처리중인 현재 요소의 인덱스입니다.</dd>
  <dt><em><code>listObj</code></em></dt>
  <dd><code>forEach()</code> 가 적용되고 있는 NodeList 객체입니다. </dd>
 </dl>
 </dd>
 <dt><code>thisArg</code><code> {{Optional_inline}}</code></dt>
 <dd><code>callback</code> 을 실행할 때 {{jsxref("this")}} 에 대입할 값입니다.</dd>
</dl>

<h3 id="Return_value">Return value</h3>

<p>{{jsxref('undefined')}}.</p>

<h2 id="Exceptions">Exceptions</h2>

<p><em>None</em>.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js;highlight:[6]">var node = document.createElement("div");
var kid1 = document.createElement("p");
var kid2 = document.createTextNode("hey");
var kid3 = document.createElement("span");

node.appendChild(kid1);
node.appendChild(kid2);
node.appendChild(kid3);

var list = node.childNodes;

list.forEach(
  function(currentValue, currentIndex, listObj) {
    console.log(currentValue + ', ' + currentIndex + ', ' + this);
  },
  'myThisArg'
);</pre>

<p>결과는 다음과 같습니다.</p>

<pre>[object HTMLParagraphElement], 0, myThisArg
[object Text], 1, myThisArg
[object HTMLSpanElement], 2, myThisArg</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>이 {{Glossary("Polyfill","polyfill")}} 은 <a href="https://caniuse.com/#search=es5">ES5</a> 를 지원하는 모든 브라우저에서 동작합니다:</p>

<pre class="brush: js">if (window.NodeList &amp;&amp; !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i &lt; this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}</pre>

<p>또는</p>

<pre class="brush: js">if (window.NodeList &amp;&amp; !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}</pre>

<p>The above behavior is how many browsers actually implement NodeList.prototype.forEach (Chrome, for example).</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_Compatibility">Browser Compatibility</h2>

<p>{{Compat("api.NodeList.forEach")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("Node")}}</li>
 <li>{{domxref("NodeList")}}</li>
</ul>
