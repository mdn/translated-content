---
title: 'Error: Permission denied to access property "x"'
slug: Web/JavaScript/Reference/Errors/Property_access_denied
translation_of: Web/JavaScript/Reference/Errors/Property_access_denied
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="메시지">메시지</h2>

<pre class="syntaxbox">Error: Permission denied to access property "x"
</pre>

<h2 id="에러_형식">에러 형식</h2>

<p>{{jsxref("Error")}}.</p>

<h2 id="무엇이_잘못되었을까">무엇이 잘못되었을까?</h2>

<p>접근이 허가되지 않은 객체에 접근하기 위한 시도가 있었습니다. 아마 동일 출처 정책(<a href="/en-US/docs/Web/Security/Same-origin_policy">same-origin policy</a>)을 침해하여 다른 도메인으로부터 로드된 {{HTMLElement("iframe")}} 엘리먼트에 대한 것이었을 겁니다.</p>

<h2 id="예">예</h2>

<pre class="brush: html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;iframe id="myframe" src="http://www1.w3c-test.org/common/blank.html"&gt;&lt;/iframe&gt;
    &lt;script&gt;
      onload = function() {
        console.log(frames[0].document);
        // Error: Permission denied to access property "document"
      }
    &lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;</pre>

<h2 id="참조">참조</h2>

<ul>
 <li>{{HTMLElement("iframe")}}</li>
 <li><a href="/en-US/docs/Web/Security/Same-origin_policy">Same-origin policy</a></li>
</ul>
