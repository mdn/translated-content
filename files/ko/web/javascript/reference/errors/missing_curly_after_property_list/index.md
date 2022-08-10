---
title: 'SyntaxError: missing } after property list'
slug: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
translation_of: Web/JavaScript/Reference/Errors/Missing_curly_after_property_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">SyntaxError: missing } after property list
</pre>

<h2 id="에러_유형">에러 유형</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="무엇이_잘못_된_걸까">무엇이 잘못 된 걸까?</h2>

<p><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">객체를 초기화 하는 부분</a> 어딘가에 구문에 실수가 있습니다. 실제로 빠진 중괄호 일 수도 있지만, 누락 된 쉼표 일 수도 있습니다. 또한 닫는 중괄호나 괄호가 올바른 순서인지 확인하세요. 코드를 들여쓰기하거나 서식을 지정하면 좀 더 보기 쉽습니다.</p>

<h2 id="예시">예시</h2>

<h3 id="쉼표를_까먹은_경우">쉼표를 까먹은 경우</h3>

<p>종종 객체 초기화 과정에서 쉼표를 빠트리는 경우가 있습니다:</p>

<pre class="brush: js example-bad">var obj = {
  a: 1,
  b: { myProp: 2 }
  c: 3
};
</pre>

<p>올바른 예시는 다음과 같습니다:</p>

<pre class="brush: js example-good">var obj = {
  a: 1,
  b: { myProp: 2 },
  c: 3
};
</pre>

<h2 id="더_보기">더 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">Object initializer</a></li>
</ul>
