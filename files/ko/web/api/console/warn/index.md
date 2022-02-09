---
title: Console.warn()
slug: Web/API/Console/warn
tags:
  - API
  - DOM
  - 디버깅
  - 메소드
  - 웹 개발
  - 웹 콘솔
translation_of: Web/API/Console/warn
---
<div>{{APIRef("Console API")}}</div>

<p>웹 콘솔에 경고 메시지를 출력합니다.</p>

<p>{{AvailableInWorkers}}</p>

<p>{{Note("Firefox에서는 웹 콘솔의 경고 옆에 작은 느낌표 아이콘이 나타납니다.")}}</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">console.warn(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.warn(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h2 id="파라미터">파라미터</h2>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>출력할 JavaScript 객체의 리스트. 각 객체의 문자열 표현은 입력한 순서대로 함께 출력됩니다.</dd>
 <dt><code>msg</code></dt>
 <dd>0개 이상의 문자열을 포함하는 JavaScript 문자열.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd><code>msg</code> 안의 문자열을 대체하기 위한 JavaScript 객체. 출력의 형식을 추가로 제어할 수 있게해줍니다.</dd>
</dl>

<p>자세한 내용은 {{domxref("console")}} 문서 내 <a href="/ko/docs/Web/API/console#Outputting_text_to_the_console">콘솔에 텍스트를 출력하기</a>를 확인하세요.</p>

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
   <td>{{SpecName("Console API", "#warn", "console.warn()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>초기 정의</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.Console.warn")}}</p>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li><a class="external" href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a class="external" href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
</ul>
