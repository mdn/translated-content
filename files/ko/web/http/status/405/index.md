---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
translation_of: Web/HTTP/Status/405
---
<div>{{HTTPSidebar}}</div>

<p>하이퍼텍스트 전송 프로토콜(HTTP)의 <code><strong>405 Method Not Allowed</strong></code> 응답 상태 코드는 요청 방법이 서버에 의해 알려졌으나, 사용 불가능한 상태임을 가리킵니다.</p>

<div class="note">
<p><strong>유의: 두 가지 필수 메소드인 </strong>{{HTTPMethod("GET")}}와 {{HTTPMethod("HEAD")}}는 사용 불가능 하여서는 안 되며, 이러한 오류 타입을 반환해서는 안 됩니다.</p>
</div>

<h2 id="상태">상태</h2>

<pre class="syntaxbox">405 Method Not Allowed</pre>

<h2 id="기술_사양">기술 사양</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">기술 사양</th>
   <th scope="col">제목</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "405 Method Not Allowed" , "6.5.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="함께_보기">함께 보기</h2>

<ul>
 <li>{{HTTPHeader("Allow")}}</li>
</ul>
