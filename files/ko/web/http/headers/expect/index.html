---
title: Expect
slug: Web/HTTP/Headers/Expect
translation_of: Web/HTTP/Headers/Expect
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Expect</code></strong> HTTP 요청 헤더는 요청을 적절하게 처리하기 위해 서버가 반환할 기대값을 나타냅니다.</p>

<p>명세에 정의된 유일한 기대값인 <code>Expect: 100-continue</code>에 대해, 서버는 다음과 같이 응답합니다:</p>

<p> </p>

<ul>
 <li>{{HTTPStatus("100")}} 헤더에 포함된 정보가, 즉시 성공으로 응답하기 충분할 때</li>
 <li>{{HTTPStatus("417")}} (Expectation Failed) 기대값을 충족하지 못했거나; 어쨌든 4xx 상태일 때</li>
</ul>

<p> </p>

<p>예를들어, 요청의 {{HTTPHeader("Content-Length")}} 값이 너무 크다면 서버는 이를 거절할 수도 있습니다.</p>

<p>일반적인 브라우저는 <code>Expect</code> 헤더를 전송하지 않지만, cURL과 같은 몇가지 클라이언트들은 전송하는 것이 기본값입니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Header type</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Syntax">Syntax</h2>

<p>현재는 "100-continue" 를 제외하고 어떤 기대값도 정의되어있지 않습니다.</p>

<pre class="syntaxbox">Expect: 100-continue
</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>100-continue</dt>
 <dd>Informs recipients that the client is about to send a (presumably large) message body in this request and wishes to receive a {{HTTPStatus("100")}} (Continue) interim response.</dd>
</dl>

<h2 id="Examples">Examples</h2>

<h3 id="Large_message_body">Large message body</h3>

<p>클라이언트는 <code>Expect</code> 헤더가 포함된 요청을 전송하고 메시지 바디를 전송하기 이전에 서버의 응답을 기다립니다.</p>

<pre>PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue</pre>

<p>이제 서버는 요청 헤더를 확인하고 {HTTPStatus("100")}} (Continue) 상태를 응답하여 클라이언트가 계속해서 메시지 바디를 전송하도록 안내하거나, {{HTTPStatus("417")}} (Expectation Failed) 상태를 응답하여 어떠한 기대값도 충족되지 않도록 합니다.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>No common browsers are known to send this header.</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{HTTPStatus("417")}}<code> Expectation Failed</code></li>
 <li>{{HTTPStatus("100")}}<code> Continue</code></li>
</ul>
