---
title: Content-Range
slug: Web/HTTP/Headers/Content-Range
tags:
  - HTTP
  - HTTP 헤더
  - 응답 헤더
  - 참고자료
  - 헤더
translation_of: Web/HTTP/Headers/Content-Range
---
<div>{{HTTPSidebar}}</div>

<p><strong><code>Content-Range</code> </strong>HTTP 응답 헤더는 전체 바디 메시지에 속한 부분 메시지의 위치를 알려줍니다.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">헤더 타입</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>아니오</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Simple response header", "CORS-safelisted response-header")}}</th>
   <td>아니오</td>
  </tr>
 </tbody>
</table>

<h2 id="문법">문법</h2>

<pre class="syntaxbox">Content-Range: &lt;unit&gt; &lt;range-start&gt;-&lt;range-end&gt;/&lt;size&gt;
Content-Range: &lt;unit&gt; &lt;range-start&gt;-&lt;range-end&gt;/*
Content-Range: &lt;unit&gt; */&lt;size&gt;</pre>

<h2 id="지시자">지시자</h2>

<dl>
 <dt>&lt;unit&gt;</dt>
 <dd>단위는 범위를 지정합니다. 보통 <code>bytes</code>를 사용합니다.</dd>
</dl>

<dl>
 <dt>&lt;range-start&gt;</dt>
 <dd>범위 요청의 시작을 알려주는 정수 단위.</dd>
 <dt>&lt;range-end&gt;</dt>
 <dd>범위 요청의 끝을 알려주는 정수 단위.</dd>
 <dt>&lt;size&gt;</dt>
 <dd>문서의 총 크기(또는 모른다면 <code>'*'</code>)</dd>
</dl>

<h2 id="예제">예제</h2>

<pre>Content-Range: bytes 200-1000/67589
</pre>

<h2 id="기술_사양">기술 사양</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">기술 사양</th>
   <th scope="col">제목</th>
  </tr>
  <tr>
   <td>{{RFC("7233", "Content-Range", "4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Range Requests</td>
  </tr>
 </tbody>
</table>

<h2 id="브라우저_호환성">브라우저 호환성</h2>

<p>{{Compat("http.headers.Content-Range")}}</p>

<h2 id="함께_참고할_내용">함께 참고할 내용</h2>

<ul>
 <li>{{HTTPHeader("If-Range")}}</li>
 <li>{{HTTPHeader("Range")}}</li>
 <li>{{HTTPHeader("Content-Type")}}</li>
 <li>{{HTTPStatus("206")}} <code>Partial Content</code></li>
 <li>{{HTTPStatus("416")}} <code>Range Not Satisfiable</code></li>
</ul>
