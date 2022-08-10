---
title: arguments.length
slug: Web/JavaScript/Reference/Functions/arguments/length
translation_of: Web/JavaScript/Reference/Functions/arguments/length
---
<div>{{jsSidebar("Functions")}}</div>

<p><strong><code>arguments.length</code></strong> 속성은 함수에 전달된 인수의 수를 포함하고 있습니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">arguments.length</pre>

<h2 id="설명">설명</h2>

<p>arguments.length 속성은 실제로 함수에 전달된 arguments 의 수를 제공합니다. 이것은 정의된 매개변수의 수보다 작을 수도 클 수도 있습니다. ({{jsxref("Function.length")}} 보기).</p>

<h2 id="예제">예제</h2>

<h3 id="arguments.length_사용하기"><code>arguments.length</code> 사용하기</h3>

<p>이 예시에서는 둘 또는 그 이상의 수를 더할 수 있는 함수를 정의합니다.</p>

<pre class="brush: js">function adder(base /*, n2, ... */) {
  base = Number(base);
  for (var i = 1; i &lt; arguments.length; i++) {
    base += Number(arguments[i]);
  }
  return base;
}
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.functions.arguments.length")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Function.length")}}</li>
</ul>
