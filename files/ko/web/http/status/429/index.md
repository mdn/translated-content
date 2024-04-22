---
title: 429 Too Many Requests
slug: Web/HTTP/Status/429
---

{{HTTPSidebar}}

HTTP **`429 Too Many Requests`** 응답 상태 코드는 사용자가 주어진 시간 동안 너무 많은 요청을 보냈음을 나타냅니다("속도 제한").

새로운 요청을 하기 전에 얼마나 오래 대기해야 하는지를 알려주는 {{HTTPHeader("Retry-After")}} 헤더가 이 응답에 포함될 수 있습니다.

## 상태

```
429 Too Many Requests
```

## 예제

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## 명세서

{{Specifications}}

## 같이 보기

- {{HTTPHeader("Retry-After")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- Python solution: [How to avoid HTTP error 429 python](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
