---
title: 'SyntaxError: missing ) after condition'
slug: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
translation_of: Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">SyntaxError: missing ) after condition
</pre>

<h2 id="에러_유형">에러 유형</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="무엇이_잘못_된_걸까">무엇이 잘못 된 걸까?</h2>

<p><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if</a></code>조건문에 에러가 있습니다. 어떠한 프로그래밍 언어에서든 코드는 입력값에 따라 의사를 결정하고 행동을 수행해야합니다. 지정된 조건이 true이면 if 문이 명령문을 실행합니다. 자바스크립트에서는 이 조건이 <code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if</a></code>문 다음의 괄호에 있어야 합니다. 다음은 그 예시입니다.</p>

<pre class="brush: js">if (condition) {
  // do something if the condition is true
}</pre>

<h2 id="예시">예시</h2>

<p>실수가 있을 수 있으니, 모든 괄호를 주의깊게 확인하세요.</p>

<pre class="brush: js example-bad">if (3 &gt; Math.PI {
  console.log("wait what?");
}

// SyntaxError: missing ) after condition
</pre>

<p>이 코드를 고치기 위해선, 조건문을 괄호로 닫아야 합니다.</p>

<pre class="brush: js example-good">if (3 &gt; Math.PI) {
  console.log("wait what?");
}</pre>

<p>다른 프로그래밍 언어를 배운 경우, 자바스크립트에서는 다르게 쓰이거나, 쓰이지 않는 키워드를 사용하기 쉽습니다.</p>

<pre class="brush: js example-bad">if (done is true) {
 console.log("we are done!");
}

// SyntaxError: missing ) after condition
</pre>

<p>이 경우 올바른 <a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">비교연산자</a>를 사용해야 합니다. 그 예시로:</p>

<pre class="brush: js example-good">if (done === true) {
 console.log("we are done!");
}</pre>

<h2 id="더_보기">더 보기</h2>

<ul>
 <li><code><a href="/en-US/docs/Web/JavaScript/Reference/Statements/if...else">if...else</a></code></li>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">Comparison operators</a></li>
 <li>
  <p><a href="/en-US/docs/Learn/JavaScript/Building_blocks/conditionals">Making decisions in your code — conditionals</a></p>
 </li>
</ul>
