---
title: Allow
slug: Web/HTTP/Headers/Allow
tags:
  - Entity header
  - HTTP
  - HTTP Header
  - Reference
  - header
translation_of: Web/HTTP/Headers/Allow
---
<div>{{HTTPSidebar}}</div>

<p><code><strong>Allow</strong></code> 헤더는 리소스가 지원하는 메소드 집합을 나열합니다.</p>

<p>어떤 요청 메소드를 사용할 수 있는지 알리기 위해 서버가 {{HTTPStatus("405")}} <code>Method Not Allowed</code> 상태코드로 응답할 경우에 이 헤더를 반드시 보내야 합니다. 비어있는 <code>Allow</code> 헤더는 리소스가 어떤 요청 메소드도 허용하지 않음을 나타냅니다. 예를 들어, 특정 리소스에 대해 일시적으로 발생할 수도 있는 요청 메소드조차 허용하지 않음을 나타냅니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="구문">구문</h2>

<pre class="syntaxbox">Allow: &lt;http-methods&gt;
</pre>

<h2 id="지시어">지시어</h2>

<dl>
 <dt>&lt;http-methods&gt;</dt>
 <dd>쉼표로 구분한 허용된 <a href="/en-US/docs/Web/HTTP/Methods">HTTP request methods</a> 목록.</dd>
</dl>

<h2 id="예제">예제</h2>

<pre>Allow: GET, POST, HEAD</pre>

<h2 id="Specifications">명세</h2>

{{Specifications}}

<h2 id="더보기">더보기</h2>

<ul>
 <li>{{HTTPStatus("405")}}</li>
 <li>{{HTTPHeader("Server")}}</li>
</ul>
