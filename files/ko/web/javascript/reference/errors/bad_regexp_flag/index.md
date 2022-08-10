---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - 구문 에러
  - 자바스크립트
  - 정규식
  - 플래그
translation_of: Web/JavaScript/Reference/Errors/Bad_regexp_flag
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메세지">메세지</h2>

<pre class="syntaxbox">SyntaxError: Syntax error in regular expression (Edge)
SyntaxError: invalid regular expression flag "x" (Firefox)
SyntaxError: Invalid regular expression flags (Chrome)
</pre>

<h2 id="에러_타입">에러 타입</h2>

<p>{{jsxref("SyntaxError")}}</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>코드에 잘못된 정규 표현식 플래그가 있습니다. 슬래시로 묶인 패턴으로 구성되어 있는 정규 표현식 문자에서 플래그는 두 번째 플래그 뒤에 정의됩니다. 플래그는 또한 {{jsxref("RegExp")}} 객체의 생성자 함수에서도 정의될 수 있습니다(두 번째 매개변수). 정규 표현식 플래그는 따로 또는 순서에 상관 없이 같이 사용될 수 있지만 ECMAScript에는 오직 5개만 있습니다.</p>

<p>정규 표현식에 플래그를 포함시키려면 아래의 문법을 사용하세요:</p>

<pre class="brush: js">var re = /pattern/flags;
</pre>

<p>또는</p>

<pre class="brush: js">var re = new RegExp('pattern', 'flags');</pre>

<table class="standard-table">
 <caption>정규 표현식 플래그</caption>
 <thead>
  <tr>
   <th scope="col">플래그</th>
   <th scope="col">설명</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>g</code></td>
   <td>전역 검색.</td>
  </tr>
  <tr>
   <td>i</td>
   <td>대소문자 구별 없이 검색.</td>
  </tr>
  <tr>
   <td>m</td>
   <td>여러 줄(Multi-line) 검색.</td>
  </tr>
  <tr>
   <td>u</td>
   <td>유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급.</td>
  </tr>
  <tr>
   <td>y</td>
   <td>현재 위치에서 검색. ("sticky" 검색). {{jsxref("RegExp.sticky", "sticky")}} 참조.</td>
  </tr>
 </tbody>
</table>

<h2 id="예제">예제</h2>

<p>5개의 플래그만이 유효합니다.</p>

<pre class="brush: js example-bad">/foo/bar;

// SyntaxError: invalid regular expression flag "b"
</pre>

<p>정규 표현식을 만들려고 했나요? 두 개의 슬래시가 포함된 표현식은 정규 표현식 문자로 해석됩니다.</p>

<pre class="brush: js example-bad">let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
</pre>

<p>아니면 문자열로 만들려고 했나요? 작은 따옴표 또는 큰 따옴표를 추가하여 문자열을 만듭니다.</p>

<pre class="brush: js example-good">let obj = {
  url: '/docs/Web'
};</pre>

<h3 id="유효한_정규_표현식_플래그">유효한 정규 표현식 플래그</h3>

<p>자바스크립트에서 허용하는 5개의 유효한 정규 표현식 플래그를 위의 표에서 확인하세요.</p>

<pre class="brush: js example-good">/foo/g;
/foo/gim;
/foo/uy;
</pre>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/%EC%A0%95%EA%B7%9C%EC%8B%9D">정규 표현식</a></li>
 <li><a href="http://xregexp.com/flags/">XRegEx flags</a> – 새로운 4개의 플래그(<code>n</code>, <code>s</code>, <code>x</code>, <code>A</code>)를 제공하는 정규 표현식 라이브러리</li>
</ul>
