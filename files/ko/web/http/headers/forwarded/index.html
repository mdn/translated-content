---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
tags:
  - HTTP
  - HTTP 헤더
  - 요청 헤더
  - 참고자료
  - 헤더
translation_of: Web/HTTP/Headers/Forwarded
---
<div>{{HTTPSidebar}}</div>

<p><code><strong>Forwarded</strong></code> 헤더는 클라이언트에서 접하고 있는 프록시 서버들이 요청에 대한 연결에 연관되어 있는 상황에서 해당 연결이 변경되거나 잃어버리게 되었을 때, 해당되는 정보를 가지고 있습니다.</p>

<p>이 헤더를 대체하는 실질적인 표준 버전은 {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}}, 그리고 {{HTTPHeader("X-Forwarded-Proto")}} 입니다.</p>

<p>이 헤더는 디버깅, 통계, 그리고 위치 기반 컨텐츠에서 사용되며 클라이언트의 IP 주소와 같은 민감한 개인 정보를 노출하도록 디자인 되었습니다. 따라서 이 헤더를 사용할 경우에는 사용자의 정보를 노출시키지 않도록 반드시 주의해야합니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">헤더 타입</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>아니오</td>
  </tr>
 </tbody>
</table>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">Forwarded: by=&lt;identifier&gt;; for=&lt;identifier&gt;; host=&lt;host&gt;; proto=&lt;http|https&gt;
</pre>

<h2 id="지시자">지시자</h2>

<dl>
 <dt>&lt;identifier&gt;</dt>
 <dd>식별자는 프록시를 사용할 때, 대체되거나 잃어버린 정보를 밝힙니다. 이것은 다음과 같을 수 있습니다:
 <ul>
  <li>IP 주소(v4 또는 v6, 추가로 포트, 그리고 IPv6는 따옴표와 대괄호로 쌓여있습니다),</li>
  <li>애매한 식별자(예를 들면, "_hidden" 또는 "_secret"),</li>
  <li>또는 알 수 없는 개체를 진행하고자 했을 때 (그리고 당신이 계속 만들어진 요청이 전달되기를 원한다고 알려줄 때) "unknown"  or "unknown".</li>
 </ul>
 </dd>
 <dt>by=&lt;identifier&gt;</dt>
 <dd>요청이 프록시 서버에 들어왔을 때의 인터페이스.</dd>
 <dt>for=&lt;identifier&gt;</dt>
 <dd>요청을 시작한 클라이언트와 프록시 체인에서 뒤이은 프록시.</dd>
 <dt>host=&lt;host&gt;</dt>
 <dd>{{HTTPHeader("Host")}} 요청 헤더 영역은 프록시에게서 받는다.</dd>
 <dt>proto=&lt;http|https&gt;</dt>
 <dd>
 <p>요청을 만들기 위해서 어떠한 프로토콜(보통 "http" 또는 "https")이 사용되었는지 알려준다.</p>
 </dd>
</dl>

<h2 id="예제">예제</h2>

<h3 id="Forwarded_헤더_사용"><code>Forwarded</code> 헤더 사용</h3>

<pre>Forwarded: for="_mdn"

# case insensitive
Forwarded: For="[2001:db8:cafe::17]:4711"

# separated by semicolon
Forwarded: for=192.0.2.60; proto=http; by=203.0.113.43

# multiple values can be appended using a comma
Forwarded: for=192.0.2.43, for=198.51.100.17
</pre>

<h3 id="X-Forwarded-For_에서_Forwarded_로의_전환"><code>X-Forwarded-For</code> 에서 <code>Forwarded</code> 로의 전환</h3>

<p>만약 어플리케이션(서버 또는 프록시)이 표준화된 <code>Forwared</code> 헤더를 지원한다면, {{HTTPHeader("X-Forwarded-For")}} 헤더는 대체될 수 있습니다. IPv6 주소는 <code>Forwarded</code>에서 따옴표와 대괄호로 감싸질 수 있다는 것을 알아두세요.</p>

<pre>X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, 2001:db8:cafe::17
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
</pre>

<h2 id="기술_사양">기술 사양</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">기술 사양</th>
   <th scope="col">제목</th>
  </tr>
  <tr>
   <td>{{RFC("7239", "Forwarded", "4")}}</td>
   <td>Forwarded HTTP Extension</td>
  </tr>
 </tbody>
</table>

<h2 id="함께_참고할_내용">함께 참고할 내용</h2>

<ul>
 <li>{{HTTPHeader("X-Forwarded-For")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
 <li>{{HTTPHeader("Via")}} – provides information about the proxy itself, not about the client connecting to it.</li>
</ul>
