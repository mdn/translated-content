---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
tags:
  - JavaScript
  - Property
  - Prototype
browser-compat: javascript.builtins.Error.message
---
<div>{{JSRef}}</div>

<p><code><strong>message</strong></code> 속성은 사람이 읽을 수 있는 오류의 설명입니다.</p>

<h2 id="Description">설명</h2>

<p>이 속성은 오류가 있거나 설정된 경우 오류에 대한 간략한 설명을 포함합니다. <a href="/en-US/docs/Mozilla/Projects/SpiderMonkey">SpiderMonkey</a>는 예외적으로 <code>message</code> 속성을 광범위하게 사용합니다. {{jsxref("Error.prototype.name", "name")}} 속성과 결합된 <code>message</code> 속성은 {{jsxref("Error.prototype.toString()")}} 메서드에서 오류의 문자열 표현을 생성하는 데 사용됩니다.</p>

<p>기본적으로 <code>message</code> 속성은 빈 문자열이지만, {{jsxref("Error/Error", "Error")}} 생성자에 대한 첫 번째 인수로 메시지를 지정하여 인스턴스에 대해 이 동작을 재정의할 수 있습니다.</p>

<h2 id="Examples">예제</h2>

<h3 id="Throwing_a_custom_error">사용자 정의 오류 발생시키기</h3>

<pre class="brush: js">var e = new Error('Could not parse input');
// e.message is 'Could not parse input'
throw e;
</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="Browser_compatibility">브라우저 호환성</h2>

<p>{{Compat}}</p>

<h2 id="See_also">같이 보기</h2>

<ul>
 <li>{{jsxref("Error.prototype.name")}}</li>
 <li>{{jsxref("Error.prototype.toString()")}}</li>
</ul>
