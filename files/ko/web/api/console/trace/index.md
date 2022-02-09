---
title: console.trace()
slug: Web/API/Console/trace
tags:
  - API
  - DOM
  - Firefox
  - 디버깅
  - 메소드
  - 웹 개발
  - 웹 콘솔
  - 추적
  - 콘솔
  - 크롬
translation_of: Web/API/Console/trace
---
<div>{{APIRef("Console API")}}</div>

<p><a href="/en-US/docs/Tools/Web_Console">웹 콘솔</a>에 스택 추적을 출력합니다.</p>

<p>{{AvailableInWorkers}}</p>

<p>자세한 내용과 예제는 {{domxref("console")}} 내의 <a href="/ko/docs/Web/API/console#Stack_traces">스택 추적</a>을 확인하세요.</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">console.trace();
</pre>

<h2 id="예제">예제</h2>

<pre class="brush: js">function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
</pre>

<p>콘솔에 다음과 같은 추적이 표시됩니다.</p>

<pre>bar
foo
&lt;anonymous&gt;</pre>

<h2 id="명세">명세</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#trace", "console.trace()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>초기 정의</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.Console.trace")}}</p>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li><a class="external" href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
</ul>
