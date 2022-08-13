---
title: Math.fround()
slug: Web/JavaScript/Reference/Global_Objects/Math/fround
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/fround
browser-compat: javascript.builtins.Math.fround
---
<div>{{JSRef}}</div>

<p><strong><code>Math.fround()</code></strong> 함수는 <a class="external" href="https://en.wikipedia.org/wiki/Single-precision_floating-point_format" title="link to the wikipedia page on single-precision floating-point format">single precision</a> 포맷으로 표현할 수 있는 실수들 중에서 가장 가까운 숫자를 리턴합니다.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox"><code>Math.fround(<var>x</var>)</code></pre>

<h3 id="파라메터">파라메터</h3>

<dl>
 <dt><code>x</code></dt>
 <dd>숫자.</dd>
</dl>

<h2 id="설명">설명</h2>

<p><code>fround()</code> 가 <code>Math</code> 객체의 정적 메소드이기 때문에, 반드시 <code>Math.fround()</code> 같은 형태로 사용해야 합니다. <code>Math</code> 객체를 직접 만들어서 호출하는 방식으로 사용하지 않습니다 (<code>Math</code> 는 생성자가 아닙니다).</p>

<h2 id="예제">예제</h2>

<h3 id="Math.fround()_사용법"><code>Math.fround() 사용법</code></h3>

<pre class="brush: js">Math.fround(0);     // 0
Math.fround(1);     // 1
Math.fround(1.337); // 1.3370000123977661
Math.fround(1.5);   // 1.5
Math.fround(NaN);   // NaN
</pre>

<h2 id="Polyfill">Polyfill</h2>

<p>만약 {{jsxref("Float32Array")}} 가 지원된다면, Math.fround() 를 다음 함수로 흉내낼 수 있습니다.</p>

<pre class="brush: js">Math.fround = Math.fround || (function (array) {
  return function(x) {
    return array[0] = x, array[0];
  };
})(Float32Array(1));
</pre>

<h2 id="specifications">명세</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{jsxref("Math.round()")}}</li>
</ul>
