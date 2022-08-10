---
title: 'SyntaxError: missing ] after element list'
slug: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
tags:
  - 구문 에러
  - 배열 초기자
  - 자바스크립트
translation_of: Web/JavaScript/Reference/Errors/Missing_bracket_after_list
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메세지">메세지</h2>

<pre class="syntaxbox">SyntaxError: missing ] after element list
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>{{jsxref("SyntaxError")}}.</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>배열 초기자 구문에 오류가 있습니다. 닫는 대괄호("<code>]</code>") 또는 콤마("<code>,</code>")가 빠진 것 같습니다.</p>

<h2 id="예제">예제</h2>

<h3 id="완성되지_않은_배열_초기자">완성되지 않은 배열 초기자</h3>

<pre class="brush: js example-bad">var list = [1, 2,

var instruments = [
  'Ukulele',
  'Guitar',
  'Piano'
};

var data = [{foo: 'bar'} {bar: 'foo'}];
</pre>

<p>바르게 고치면:</p>

<pre class="brush: js example-good">var list = [1, 2];

var instruments = [
 'Ukulele',
 'Guitar',
 'Piano'
];

var data = [{foo: 'bar'}, {bar: 'foo'}];</pre>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
</ul>
