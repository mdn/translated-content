---
title: Console.countReset()
slug: Web/API/Console/countReset
tags:
  - API
  - DOM
  - Method
  - Reference
  - console
translation_of: Web/API/Console/countReset
---
<div>{{APIRef("Console API")}}</div>

<p><strong><code>console.countReset()</code></strong> 메서드는 {{domxref("console.count()")}}의 카운터를 초기화합니다.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">console.countReset(<var>[label]</var>);
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>label</code> {{optional_inline}}</dt>
 <dd>{{jsxref("String")}}. 지정한 경우, 이 레이블을 지정한 <code>count()</code>를 초기화합니다. 누락한 경우 <code>"default"</code> 카운터를 초기화합니다.</dd>
</dl>

<h2 id="예제">예제</h2>

<pre class="brush: js">let user = "";

function greet() {
  console.count();
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
console.countReset();</pre>

<p>위 코드의 출력 결과는 다음과 같은 형태입니다.</p>

<pre class="eval">"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
</pre>

<p><code>countReset()</code>이 기본 카운터를 초기화했음을 알 수 있습니다.</p>

<p>레이블을 지정한 경우...</p>

<pre class="brush: js">let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
greet();
user = "alice";
greet();
greet();
console.countReset("bob");
console.count("alice");</pre>

<p>다음과 같이 출력합니다.</p>

<pre class="eval">"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"</pre>

<p>카운터 <code>bob</code>을 초기화해도 <code>alice</code>의 값에는 영향이 없습니다.</p>

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
   <td>{{SpecName("Console API", "#count", "console.countReset()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>



<p>{{Compat("api.Console.countReset")}}</p>
