---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/debugger
---
<div>{{jsSidebar("Statements")}}</div>

<p><strong><code>debugger</code> 문</strong>은 중단점 설정 등 현재 사용할 수 있는 디버그 기능을 호출합니다. 사용할 수있는 디버깅 기능이 없으면 아무런 동작도 하지 않습니다.</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">debugger;</pre>

<h2 id="예제">예제</h2>

<p>다음 예제에서는 함수가 호출 시 디버거를 활성화하도록 <code>debugger</code>를 삽입한 모습입니다.</p>

<pre class="brush:js">function potentiallyBuggyCode() {
    debugger;
    // 버그가 있을 것으로 생각하는 코드를 분석하거나, 한 단계씩 진행해보거나...
}</pre>

<p>디버거가 활성화되면 디버거 문의 위치에서 실행이 일시중지됩니다. 스크립트 소스의 중단점과 비슷합니다.</p>

<p><a href="https://mdn.mozillademos.org/files/6963/Screen Shot 2014-02-07 at 9.14.35 AM.png"><img alt="Paused at a debugger statement." src="https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png"></a></p>

<h2 id="Specifications">명세서</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.statements.debugger")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li><a href="/ko/docs/Mozilla/Debugging/Debugging_JavaScript">JavaScript 디버깅</a></li>
 <li><a href="/ko/docs/도구들/Debugger">Firefox 개발자 도구의 디버거</a></li>
</ul>
