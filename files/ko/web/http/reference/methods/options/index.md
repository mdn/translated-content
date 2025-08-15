---
title: OPTIONS
slug: Web/HTTP/Reference/Methods/OPTIONS
original_slug: Web/HTTP/Methods/OPTIONS
l10n:
  sourceCommit: 5e8fc110cc2fd247cc8ec7c6c06503367d50e86f
---

**HTTP `OPTIONS` 메서드**는 주어진 URL 또는 서버에 대해 허용된 통신 옵션을 요청합니다. 클라이언트는 이 방법으로 URL을 지정하거나 별표(`*`)를 지정하여 전체 서버를 참조할 수 있습니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">요청에 본문이 있음</th>
      <td>아니요</td>
    </tr>
    <tr>
      <th scope="row">성공적인 응답에 본문이 있음</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe", "안전함")}}</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent", "멱등성")}}</th>
      <td>예</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable", "캐시 가능")}}</th>
      <td>아니요</td>
    </tr>
    <tr>
      <th scope="row">HTML 폼에서 허용됨</th>
      <td>아니요</td>
    </tr>
  </tbody>
</table>

## 구문

```http
OPTIONS /index.html HTTP/1.1
OPTIONS * HTTP/1.1
```

## 예제

### 허용된 요청 매서드 식별하기

서버가 지원하는 요청 방법을 찾으려면 아래와 같이 `curl` 명령어을 사용하여 `OPTIONS` 요청을 보내볼 수 있습니다.

```bash
curl -X OPTIONS https://example.org -i
```

그럼 응답은 허용된 메서드를 가지고 있는 {{HTTPHeader("Allow")}} 헤더가 있습니다.

```http
HTTP/1.1 204 No Content
Allow: OPTIONS, GET, HEAD, POST
Cache-Control: max-age=604800
Date: Thu, 13 Oct 2016 11:45:00 GMT
Server: EOS (lax004/2813)
```

### CORS 사전 요청

[CORS](/ko/docs/Web/HTTP/Guides/CORS)에서 [사전 요청](/ko/docs/Glossary/Preflight_request)은 `OPTIONS` 메서드를 통해 전송되므로 요청을 보낼 수 있는 경우라면 서버가 응답할 수 있습니다. 이번 예제에서는 다음 매개변수에 대한 권한을 요청합니다.

- 사전 요청에서 전송되는 {{HTTPHeader("Access-Control-Request-Method")}} 헤더는 서버에 실제 요청이 전송될 때 {{HTTPMethod("POST")}} 메서드가 있음을 알려줍니다.
- {{HTTPHeader("Access-Control-Request-Headers")}} 헤더는 서버에 실제 요청이 전송될 때 `X-PINGOTHER`와 `Content-Type` 헤더가 있음을 알려줍니다.

```http
OPTIONS /resources/post-here/ HTTP/1.1
Host: bar.example
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-us,en;q=0.5
Accept-Encoding: gzip,deflate
Connection: keep-alive
Origin: https://foo.example
Access-Control-Request-Method: POST
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

이제 서버는 아래와 같은 상황에서 요청을 수락할 때 응답할 수 있습니다. 이 예제에세 서버의 응답은 다음과 같습니다.

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : `https://foo.example` 출처는 다음을 통해 `bar.example/resources/post-here/` URL을 요청할 수 있습니다.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : {{HTTPMethod("POST")}}, {{HTTPMethod("GET")}} 그리고 `OPTIONS`는 이 URL에 허용되는 메서드입니다. (이 헤더는 {{HTTPHeader("Allow")}} 헤더와 유사하지만 [CORS](/ko/docs/Web/HTTP/Guides/CORS)에만 사용됩니다.)
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : `X-PINGOTHER` 및 `Content-Type`은 URL에 대해 허용되는 요청 헤더입니다.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : 위 권한은 86,400초(1일) 동안 캐시될 수 있습니다.

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: https://foo.example
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
Access-Control-Max-Age: 86400
Vary: Accept-Encoding, Origin
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

## 상태 코드

{{HTTPStatus("200")}} OK와 {{HTTPStatus("204")}} No Content 모두 [허용되는 상태 코드](https://fetch.spec.whatwg.org/#ref-for-ok-status)이지만 일부 브라우저는 `204 No Content`가 실제 리소스에 적용된다고 잘못 판단하여 리소스를 가져오기 위한 다음 요청을 보내지 않습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTTPHeader("Allow")}} 헤더
- [CORS](/ko/docs/Web/HTTP/Guides/CORS)
