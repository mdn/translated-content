---
title: 'TypeError: "x" is (not) "y"'
slug: Web/JavaScript/Reference/Errors/Unexpected_type
tags:
  - Errors
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Unexpected_type
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: "x" is (not) "y"

Examples:
TypeError: "x" is undefined
TypeError: "x" is null
TypeError: "undefined" is not an object
TypeError: "x" is not an object or null
TypeError: "x" is not a symbol
</pre>

<h2 id="Error_type">Error type</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="What_went_wrong">What went wrong?</h2>

<p>그것은 정확하지 않은 형태이다. 그것은 가끔{{jsxref("undefined")}} 나 {{jsxref("null")}} 값을 발생한다.</p>

<p>또한, {{jsxref("Object.create()")}} 또는 {{jsxref("Symbol.keyFor()")}}와 같은 메서드는 반드시 제공되어야하는 특별한 형태를 요구한다.</p>

<h2 id="Examples">Examples</h2>

<h3 id="Invalid_cases">Invalid cases</h3>

<pre class="brush: js example-bad">// undefined and null cases on which the substring method won't work
var foo = undefined;
foo.substring(1); // TypeError: foo is undefined

var foo = null;
foo.substring(1); // TypeError: foo is null


// Certain methods might require a specific type
var foo = {}
Symbol.keyFor(foo); // TypeError: foo is not a symbol

var foo = 'bar'
Object.create(foo); // TypeError: "foo" is not an object or null
</pre>

<h3 id="Fixing_the_issue">Fixing the issue</h3>

<p>undefined 나 null 값을 가진 null 포인터를 고치기 위해서 아래 예제와 같이 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/typeof">typeof</a> 연산자를 사용할 수 있다.</p>

<pre class="brush: js">if (typeof foo !== 'undefined') {
  // Now we know that foo is defined, we are good to go.
}</pre>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("undefined")}}</li>
 <li>{{jsxref("null")}}</li>
</ul>
