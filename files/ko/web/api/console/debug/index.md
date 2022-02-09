---
title: console.debug()
slug: Web/API/Console/debug
tags:
  - API
  - Method
  - Reference
  - console
translation_of: Web/API/Console/debug
---
<div>{{APIRef("Console API")}}</div>

<p><strong><code>console.debug()</code></strong> 메서드는 메시지를 "디버그" 중요도로 콘솔에 출력합니다. 디버그 중요도 메시지는 별도 설정 없이는 보이지 않습니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">console.debug(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.debug(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>출력에 사용할 JavaScript 객체. 각각의 문자열 표현을 순서대로 출력합니다.</dd>
 <dt><code>msg</code></dt>
 <dd>0개 이상의 치환 문자열을 포함하는 JavaScript 문자열.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd><code>msg</code> 매개변수의 치환 문자열에 대입할 JavaScript 객체.</dd>
</dl>

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
   <td>{{SpecName("Console API", "#debug", "console.debug()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<div>


<p>{{Compat("api.Console.debug")}}</p>
</div>
