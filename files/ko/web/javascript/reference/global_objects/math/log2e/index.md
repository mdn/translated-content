---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
---
<div>{{JSRef}}</div>

<p><strong><code>Math.LOG2E</code></strong> 속성은 e의 로그 2 값, 약 1.442의 값을 가집니다.</p>

<p><math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math></p>

<div>{{EmbedInteractiveExample("pages/js/math-log2e.html")}}</div>



<div>{{js_property_attributes(0, 0, 0)}}</div>

<h2 id="설명">설명</h2>

<p><code>LOG2E</code>는 <code>Math</code>의 정적 속성이므로, 사용자가 생성한 <code>Math</code> 객체의 속성으로 접근할 수 없고 항상 <code>Math.LOG2E</code>를 사용해야 합니다. (<code>Math</code>는 생성자가 아닙니다)</p>

<h2 id="설명_2">설명</h2>

<h3 id="Math.LOG2E_사용하기"><code>Math.LOG2E</code> 사용하기</h3>

<p>다음 함수는 e의 로그 2 값을 반환합니다.</p>

<pre class="brush: js">function getLog2e() {
  return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.Math.LOG2E")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Math.exp()")}}</li>
 <li>{{jsxref("Math.log()")}}</li>
 <li>{{jsxref("Math.log2()")}}</li>
</ul>
