---
title: 안전함 (HTTP 메서드)
slug: Glossary/Safe/HTTP
tags:
  - Glossary
  - WebMechanics
translation_of: Glossary/Safe/HTTP
---

<p>
  HTTP 메서드가 서버의 상태를 바꾸지 않으면 그 메서드가 <strong>안전</strong>하다고 말합니다. 다른 말로 하면, 읽기
  작업만 수행하는 메서드는 안전합니다. 흔히 쓰이는 HTTP 메서드 중에서는 {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}},
  {{HTTPMethod("OPTIONS")}}가 안전합니다. 모든 안전한 메서드는 <a href="/ko/docs/Glossary/Idempotent">멱등성</a> 또한
  갖지만, 모든 멱등성을 지닌 메서드가 안전한 것은 아닙니다. 예컨대 {{HTTPMethod("PUT")}}과 {{HTTPMethod("DELETE")}}는 둘
  다 멱등성을 가졌지만 안전하지는 않은 메서드입니다.
</p>

<p>
  그러나, 안전한 메서드가 읽기 전용의 의미를 내포하긴 하지만, 서버가 요청 정보와 통계 등을 기록함으로써 자신의 상태에
  변경을 가하는 것도 가능합니다. 안전함의 중요점은 그 메서드를 호출해도 클라이언트가 서버의 상태 변화를 직접 요청하는
  것이 아니므로 서버에 불필요한 부하를 주지 않을 것이란 점입니다. 즉 브라우저 입장에서는, 안전한 메서드라면 서버에 해를
  끼치지 않을 것임을 알 수 있기 때문에 자유롭게 호출할 수 있습니다. 이런 점을 활용해서 브라우저가 별다른 위험 없이도
  프리페칭과 같은 동작을 수행할 수 있는 것입니다. 웹 크롤러 역시 안전한 메서드의 호출에 의존합니다.
</p>

<p>
  안전한 메서드가 정적 파일만 제공해야 할 필요는 없으며, 요청에 대해 응답을 필요에 따라 생성하는 것도 가능합니다. 다만
  생성 과정은 안전해야 하므로, 다른 이커머스 웹 사이트에 주문을 넣는 것과 같이 외부 이펙트를 유발하는 것은 안됩니다.
</p>

<p>
  메서드의 안전함을 준수하는 것은 온전히 서버 어플리케이션의 책임으로, Apache, Nginx, IIS 등 웹 서버 스스로는 안전함을
  강제하지 못합니다. 서버 어플리케이션은 특히 {{HTTPMethod("GET")}} 요청을 받았을 때 자신의 상태가 바뀌지 않도록 해야 합니다.
</p>

<p>다음은 서버 상태를 바꾸지 않는, 안전한 메서드의 호출입니다.</p>

<pre>GET /pageX.html HTTP/1.1</pre>

<p>다음은 서버 상태를 바꿀 수도 있는, 안전하지 않은 메서드의 호출입니다.</p>

<pre>POST /pageX.html HTTP/1.1 </pre>

<p>마지막으로 멱등성을 가졌지만 안전하지는 않은 메서드의 호출입니다.</p>

<pre>DELETE /idX/delete HTTP/1.1</pre>

<h2 id="learn_more">더 알아보기</h2>

<h3 id="general_knowledge">일반 지식</h3>

<ul>
  <li>HTTP 명세에서 <a href="https://datatracker.ietf.org/doc/html/rfc7231#section-4.2.1">안전함</a>의 정의.</li>
</ul>

<h3 id="technical_knowledge">기술 지식</h3>

<ul>
  <li>일반적으로 쓰이는 안전한 메서드: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}</li>
  <li>
    일반적으로 쓰이는 안전하지 않은 메서드: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
  </li>
</ul>
