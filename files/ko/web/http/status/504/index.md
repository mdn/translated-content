---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
translation_of: Web/HTTP/Status/504
---
{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜 (HTTP) **`504 Gateway Timeout`** 서버 에러 응답 코드는 서버가
게이트웨이(gateway) 혹은 프록시(proxy)의 역할을 하는 동안 시간 안에 업스트림 서버(upstream server)로부터 요청을 마치기 위해 필요한 응답를 받지 못 했음을 나타냅니다.

> **참고:** [Gateway](https://ko.wikipedia.org/wiki/%EA%B2%8C%EC%9D%B4%ED%8A%B8%EC%9B%A8%EC%9D%B4) 는 네트워킹에서 다른 것을 가르킬 수 있고 504 에러는 주로 수정할 수 있는 것이 아니지만, 당신이 접근하려고 하는 웹 서버 혹은 프록시의 수정이 필요합니다.

## Status

```
504 Gateway Timeout
```

## Specifications

{{Specifications}}

## Browser compatibility

아래 보이는 정보는 MDN 의 Github 로부터 가져왔습니다.
(<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.504")}}

## See also

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- {{HTTPStatus(502)}}
