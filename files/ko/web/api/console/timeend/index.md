---
title: Console.timeEnd()
slug: Web/API/Console/timeEnd
tags:
  - 디버깅
  - 웹 개발
  - 웹 콘솔
  - 콘솔
  - 타이머
translation_of: Web/API/Console/timeEnd
---
<div>{{APIRef("Console API")}}</div>

<div>이전에 {{domxref("console.time()")}}를 호출하여 시작된 타이머를 중지하고 <a href="/ko/docs/도구들/Web_Console">웹 콘솔</a>에 경과 시간을 밀리초 단위로 표시합니다.</div>

<div> </div>

<div>자세한 내용과 예제는 <strong>콘솔</strong> 문서의 <a href="/ko/docs/Web/API/console#Timers">Timers</a>를 참조하세요.</div>

<div> </div>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문(Syntax)">구문(Syntax)</h2>

<pre class="syntaxbox">console.timeEnd(<em>label</em>);
</pre>

<h3 id="매개_변수(Parameters)">매개 변수(Parameters)</h3>

<dl>
 <dt><code>label</code></dt>
 <dd>중지할 타이머의 이름입니다. console.time()를 호출할 때의 이름을 사용하여 해당 타이머를 중지할 수 있는 식별자 역할을 합니다.</dd>
</dl>

<h2 id="명세서(Specifications)">명세서(Specifications)</h2>

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
   <td>{{SpecName("Console API", "#timeend", "console.timeEnd()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성(Browser_compatibility)">브라우저 호환성(Browser compatibility)</h2>

<div>


<p>{{Compat("api.Console.timeEnd")}}</p>
</div>

<h2 id="함께_보기(See_also)">함께 보기(See also)</h2>

<ul>
 <li>{{domxref("console.time()")}}</li>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
</ul>
