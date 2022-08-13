---
title: 멱등성
slug: Glossary/Idempotent
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/Idempotent
---
<p>동일한 요청을 한 번 보내는 것과 여러 번 연속으로 보내는 것이 같은 효과를 지니고, 서버의 상태도 동일하게 남을 때, 해당 HTTP 메서드가 <strong>멱등성</strong>을 가졌다고 말합니다. 다른 말로는, 멱등성 메서드에는 통계 기록 등을 제외하면 어떠한 부수 효과(side effect)도 존재해서는 안됩니다. 올바르게 구현한 경우 {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}} 메서드는 멱등성을 가지며, {{HTTPMethod("POST")}} 메서드는 그렇지 않습니다. 모든 {{glossary("safe", "안전한")}} 메서드는 멱등성도 가집니다.</p>

<p>멱등성을 따질 땐 실제 서버의 백엔드 상태만 보면 되며, 각 요청에서 반환하는 응답 코드는 다를 수 있습니다. 첫 번째 {{HTTPMethod("DELETE")}} 요청이 {{HTTPStatus("200")}}을 반환한다면, 그 이후는 아마 {{HTTPStatus("404")}}를 반환할 것입니다. <code>DELETE</code>가 멱등성을 가진다는 것은, REST API에서 개발자는 <code>DELETE</code> 메서드를 사용해 "목록의 마지막 항목 제거" 기능을 구현해서는 안된다는 것입니다.</p>

<p>다만, 서버는 멱등성을 보장하지 않으며, 일부 애플리케이션은 잘못된 구현으로 멱등성 제약을 어길 수도 있습니다.</p>

<p><code>GET /pageX HTTP/1.1</code>는 멱등성을 가집니다. 여러 번 연속해서 호출해도 클라이언트가 받는 응답은 동일합니다.</p>

<pre>GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
GET /pageX HTTP/1.1
</pre>

<p><code>POST /add_row HTTP/1.1</code>는 멱등성을 갖지 않습니다. 여러 번 호출할 경우, 여러 열을 추가합니다.</p>

<pre>POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -&gt; Adds a 2nd row
POST /add_row HTTP/1.1   -&gt; Adds a 3rd row
</pre>

<p><code>DELETE /idX/delete HTTP/1.1</code>의 상태 코드는 응답마다 달라질 수 있지만, 그럼에도 멱등성을 가집니다.</p>

<pre>DELETE /idX/delete HTTP/1.1   -&gt; Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -&gt; Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -&gt; Returns 404</pre>

<h2 id="더_알아보기">더 알아보기</h2>

<h3 id="일반_지식">일반 지식</h3>

<ul>
 <li><a href="https://tools.ietf.org/html/rfc7231#section-4.2.2">HTTP 명세의 멱등성</a> 정의</li>
</ul>

<h3 id="기술_지식">기술 지식</h3>

<ul>
 <li>멱등성 메서드 문서: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}</li>
 <li>비 멱등성 메서드 문서: {{HTTPMethod("POST")}},{{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}</li>
</ul>
