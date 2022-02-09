---
title: Console.error()
slug: Web/API/Console/error
tags:
  - API
  - DOM
  - 디버깅
  - 메소드
  - 웹 개발
  - 웹 콘솔
translation_of: Web/API/Console/error
---
<div>{{APIRef("Console API")}}</div>

<p>웹 콘솔에 에러 메시지를 출력합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">console.error(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.error(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
console.exception(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.exception(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<div class="note">
<p><strong>노트:</strong> <code>console.exception()</code>은 <code>console.error()</code>의 별칭입니다. 둘은 기능적으로 동일합니다.</p>
</div>

<h3 id="파라미터">파라미터</h3>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>출력할 JavaScript 객체의 리스트. 각 객체의 문자열 표현은 나열된 순서로 함께 출력됩니다.</dd>
 <dt><code>msg</code></dt>
 <dd>0개 이상의 하위 문자열을 포함하는 JavaScript 문자열.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd><code>msg</code> 안의 대체할 하위 문자열을 포함하는 JavaScript 객체. 출력 형식에 추가 제어를 할 수 있게 해줍니다.</dd>
</dl>

<p>자세한 내용은 {{domxref("console")}} 문서의 <a href="/ko/docs/Web/API/console#Outputting_text_to_the_console">콘솔에 텍스트를 출력하기</a>를 확인하세요.</p>

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
   <td>{{SpecName("Console API", "#error", "console.error()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>초기 정의</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>


<p>{{Compat("api.Console.error")}}</p>
</div>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
 <li><a href="https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings">Chrome Developer Tools: Using the Console</a></li>
</ul>
