---
title: BigInt() 생성자
slug: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
tags:
  - BigInt
  - Constructor
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/BigInt
---
<div>{{JSRef}}</div>

<p><strong><code>BigInt()</code></strong> 생성자는 {{jsxref("BigInt")}} 객체를 생성합니다.</p>

<h2 id="구분">구분</h2>

<pre class="syntaxbox">BigInt(<em>value</em>);
</pre>

<h3 id="매개변수">매개변수</h3>

<dl>
 <dt><code>value</code></dt>
 <dd>생성하는 객체에 할당할 숫자 값. 문자열 또는 정수를 사용할 수 있습니다.</dd>
</dl>

<div class="blockIndicator note">
<p><strong>참고</strong>: <code>BigInt()</code>는 {{jsxref("Operators/new", "new")}} 연산자와 함께 사용하지 않습니다.</p>
</div>

<h2 id="예제">예제</h2>

<pre class="brush: js">BigInt(123);
// 123n
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("javascript.builtins.BigInt.BigInt")}}</p>

<h2 id="같이_보기">같이 보기</h2>

<ul>
 <li>{{jsxref("BigInt")}} 클래스</li>
</ul>
