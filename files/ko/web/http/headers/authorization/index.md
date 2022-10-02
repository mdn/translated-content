---
title: Authorization
slug: Web/HTTP/Headers/Authorization
tags:
  - HTTP
  - HTTP 헤더
  - 요청 헤더
  - 참고자료
  - 헤더
translation_of: Web/HTTP/Headers/Authorization
---
<div>{{HTTPSidebar}}</div>

<p>HTTP <strong><code>Authorization</code></strong> 요청 헤더는 서버의 사용자 에이전트임을 증명하는 자격을 포함하여, 보통 서버에서 {{HTTPStatus("401")}} <code>Unauthorized</code> 상태를 {{HTTPHeader("WWW-Authenticate")}} 헤더로 알려준 이후에 나옵니다.</p>

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

<pre class="syntaxbox">Authorization: &lt;type&gt; &lt;credentials&gt;</pre>

<h2 id="지시자">지시자</h2>

<dl>
 <dt>&lt;type&gt;</dt>
 <dd><a href="/ko/docs/Web/HTTP/Authentication#%EC%9D%B8%EC%A6%9D_%EC%8A%A4%ED%82%B4">인증 타입</a>. 보통 타입은 <a href="/ko/docs/Web/HTTP/Authentication#Basic_%EC%9D%B8%EC%A6%9D_%EC%8A%A4%ED%82%B4">"Basic"</a>이며. 다른 타입으로:
 <ul>
  <li><a href="http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">IANA registry of Authentication schemes</a></li>
  <li><a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">Authentification for AWS servers (<code>AWS4-HMAC-SHA256</code>)</a></li>
 </ul>
 </dd>
 <dt>&lt;credentials&gt;</dt>
 <dd>만약 "Basic" 인증 스킴이 사용되었다면, 증명은 다음과 같이 만들어집니다:
 <ul>
  <li>사용자명과 비밀번호가 콜론을 이용하여 합쳐집니다(<code>aladdin:opensesame</code>).</li>
  <li>그 결과에 대한 문자열을 <a href="/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">base64</a> 로 인코딩합니다 (<code>YWxhZGRpbjpvcGVuc2VzYW1l</code>).</li>
 </ul>

 <div class="note">
 <p><strong>Note</strong>: Base64 인코딩은 암호화나 해싱을 의미하지 않습니다! 이 방법은 인증에 대해서 문자를 그대로 보내는 것과 동일하다고 할 수 있습니다 (base64인코딩은 복호화 가능). Basic 인증을 하는 경우 HTTPS로 접속하는 것을 권장합니다.</p>
 </div>
 </dd>
</dl>

<h2 id="예제">예제</h2>

<pre>Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
</pre>

<p>HTTP basic 인증을 사용하여 비밀번호를 보호하기 위해 Apache 또는 nginx 서버를 어떻게 설정해야 하는지 예제를 보기 위해서는<a href="/ko/docs/Web/HTTP/Authentication"> HTTP authentication</a> 를 보시기 바랍니다.</p>

<h2 id="기술_사양">기술 사양</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">기술 사양</th>
   <th scope="col">제목</th>
  </tr>
  <tr>
   <td>{{RFC("7235", "Authorization", "4.2")}}</td>
   <td>HTTP/1.1: Authentication</td>
  </tr>
  <tr>
   <td>{{RFC("7617")}}</td>
   <td>The 'Basic' HTTP Authentication Scheme</td>
  </tr>
 </tbody>
</table>

<h2 id="함께_더_보기">함께 더 보기</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Authentication">HTTP authentication</a></li>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
