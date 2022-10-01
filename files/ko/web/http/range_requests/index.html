---
title: HTTP range requests
slug: Web/HTTP/Range_requests
tags:
  - HTTP
  - HTTP 범위 요청
  - 가이드
translation_of: Web/HTTP/Range_requests
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP 범위 요청은 HTTP의 일정 부분만 서버에서 클라이언트로 보내도록 허락하는 것입니다. 부분 요청은 예를들어 대형 미디어나 파일 다운로드 도중 일시정지와 다시 시작 기능에 유용합니다.</p>

<h2 id="서버가_부분_요청을_지원하는지_확인">서버가 부분 요청을 지원하는지 확인</h2>

<p>서버가 range 요청을 지원한다면, HTTP 응답에 {{HTTPHeader("Accept-Ranges")}}이 존재(그리고 그 값이 "<code>none</code>"이 아님)할 것입니다. 이는 예를들면 {{HTTPMethod("HEAD")}} 를 cURL에서 요청함으로 확인할 수 있습니다.</p>

<pre>curl -I http://i.imgur.com/z4d4kWk.jpg

HTTP/1.1 200 OK
...
Accept-Ranges: bytes
Content-Length: 146515
</pre>

<p>이 응답에서, <code>Accept-Ranges: bytes</code>는 바이트가 범위 요청에서 최소단위로 사용될 수 있음을 알려줍니다. 여기에서 {{HTTPHeader("Content-Length")}} 헤더 역시 이미지를 얻기 위한 최대 크기를 알 수 있어 유용합니다.</p>

<p>만약 사이트에서 <code>Accept-Ranges</code>헤더를 빠트린다면, 분할 요청을 지원하지 않는 것으로 생각됩니다. 일부 사이트는 명확하게 "<code>none</code>"을 값으로 보내 지원하지 않는 것을 알려줍니다. 일부 어플리케이션에서는 다운로드 매니저에서 일시정지 버튼을 없애버리는 경우가 있습니다.</p>

<pre>curl -I https://www.youtube.com/watch?v=EwTZ2xpQwpA

HTTP/1.1 200 OK
...
Accept-Ranges: none
</pre>

<h2 id="서버에_특정_범위를_요청">서버에 특정 범위를 요청</h2>

<p>만약 서버가 범위 요청을 지원한다면, {{HTTPHeader("Range")}} 헤더를 사용하여 요청할 수 있습니다. 이는 서버에서 문서의 일부분만 돌려주면 된다는 것을 알 수 있게 해줍니다.</p>

<h3 id="단일_부분_범위">단일 부분 범위</h3>

<p>우리는 리소스의 단일 부분에 대해서만 요청할 수 있습니다. 역시 cURL을 사용하여 테스트 합니다. "<code>-H</code>"는 HTTP요청의 헤더에 추가된다는 옵션이며, 이 경우에는 <code>Range</code>헤더로 첫 1024 바이트를 요청합니다.</p>

<pre>curl http://i.imgur.com/z4d4kWk.jpg -i -H "Range: bytes=0-1023"</pre>

<p>요청은 다음처럼 보여집니다:</p>

<pre>GET /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
Range: bytes=0-1023</pre>

<p>서버에서 {{HTTPStatus("206")}} <code>Partial Content</code> 상태로 응답합니다:</p>

<pre>HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/146515
Content-Length: 1024
...
(binary content)
</pre>

<p>{{HTTPHeader("Content-Length")}} 헤더는 이제 요청한 범위의 크기(전체 이미지의 크기가 아님)를 알려줍니다. {{HTTPHeader("Content-Range")}} 헤더는 리소스의 전체 크기와 메시지가 어느 부분에 속하는지 알려줍니다.</p>

<h3 id="다중_부분_범위">다중 부분 범위</h3>

<p>{{HTTPHeader("Range")}} 헤더는 문서의 여러 부분 역시 다중 범위 요청을 통해 한번에 가져올 수 있습니다. 범위는 콤마로 나누어집니다.</p>

<pre>curl http://www.example.com -i -H "Range: bytes=0-50, 100-150"</pre>

<p>서버는 {{HTTPStatus("206")}} <code>Partial Content</code> 상태로 응답하며 {{HTTPHeader("Content-Type")}}<code>: multipart/byteranges; boundary=3d6b6a416f9b5</code> 는 다중 부분 바이트 범위를 알려줍니다. 각 부분은 고유의 <code>Content-Type</code>과 <code>Content-Range</code> 영역을 가지고 있으며, 경계를 나누는 문자열인 경계 파라미터를 필요로 합니다.</p>

<pre>HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 282

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 0-50/1270

&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Example Do
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-150/1270

eta http-equiv="Content-type" content="text/html; c
--3d6b6a416f9b5--</pre>

<h3 id="조건_분할_요청">조건 분할 요청</h3>

<p>리소스에 대해 추가 요청을 재개하기에 앞서, 마지막에 분할된 데이터를 받은 이후 저장된 리소스가 수정되지는 않았는지 확인해야 합니다.</p>

<p>{{HTTPHeader("If-Range")}} HTTP 요청 헤더는 범위 요청에 조건을 만듭니다: 만약 조건이 만족하면, 분할 요청은 서버에서 처리되어 {{HTTPStatus("206")}} <code>Partial Content</code> 응답과 함께 적절한 바디와 돌아올겁니다. 만약 조건이 만족하지 못한다면, 전체 리소스가 {{HTTPStatus("200")}} <code>OK</code> 상태로 보내집니다. 이 헤더는 {{HTTPHeader("Last-Modified")}} 확인자나 {{HTTPHeader("ETag")}}와 함께 사용될 수 있지만, 동시에는 안됩니다.</p>

<pre>If-Range: Wed, 21 Oct 2015 07:28:00 GMT </pre>

<h2 id="분할_요청_응답">분할 요청 응답</h2>

<p>범위 요청을 처리할 때, 다음의 3가지 상태가 있습니다:</p>

<ul>
 <li>성공적으로 보내질 경우에는, {{HTTPStatus("206")}} <code>Partial Content</code> 상태가 서버에서 돌아옵니다.</li>
 <li>범위를 벗어난 경우(범위 값이 리소스 크기를 벗어났을 때), 서버는 {{HTTPStatus("416")}} <code>Requested Range Not Satisfiable</code> 상태로 답합니다.</li>
 <li>범위 요청을 지원하지 않는 경우, 서버는 {{HTTPStatus("200")}} <code>OK</code> 상태를 돌려보냅니다.</li>
</ul>

<h2 id="Chunked_Transfer-Encoding과_비교"><code>Chunked Transfer-Encoding</code>과 비교</h2>

<p>{{HTTPHeader("Transfer-Encoding")}} 헤더는 <code>chunked encoding</code> 또한 지원하며, 이는 대용량 데이터를 클라이언트에 보낼 때와 요청이 모두 처리되기 전까지 총 크기를 알 수 없을 때 유용합니다. 서버는 데이터를 클라이언트에 응답 버퍼링 없이 즉시 보내거나, 정확한 길이를 측정하여 지연 시간을 향상시킵니다. 범위 요청과 청크는 호환되어 함께 사용할 수도 있고, 따로 사용할 수 있습니다.</p>

<h2 id="함께_참고할_내용">함께 참고할 내용</h2>

<ul>
 <li>연관된 상태 코드 {{HTTPStatus("200")}}, {{HTTPStatus("206")}}, {{HTTPStatus("416")}}.</li>
 <li>연관된 헤더: {{HTTPHeader("Accept-Ranges")}}, {{HTTPHeader("Range")}}, {{HTTPHeader("Content-Range")}}, {{HTTPHeader("If-Range")}}, {{HTTPHeader("Transfer-Encoding")}}.</li>
 <li><a href="https://blogs.msdn.microsoft.com/ieinternals/2011/06/03/download-resumption-in-internet-explorer/">Download resumption in Internet Explorer</a></li>
</ul>
