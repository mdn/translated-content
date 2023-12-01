---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜 (HTTP) **`504 Gateway Timeout`** 서버 에러 응답 코드는 서버가 게이트웨이 혹은 프록시의 역할을 하는 동안 시간 안에 업스트림 서버(upstream server)로부터 요청을 마치기 위해 필요한 응답를 받지 못했음을 나타냅니다.

> **참고:** [Gateway](https://ko.wikipedia.org/wiki/%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4) 는 네트워킹에서 다른 것을 가르킬 수 있고 504 에러는 보통 여러분이 수정할 수 있는 것이 아니지만, 여러분이 접근하려고 하는 웹 서버 혹은 프록시의 수정이 필요합니다.

## 상태

```http
504 Gateway Timeout
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- {{HTTPStatus(502)}}
