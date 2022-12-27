---
title: 501 Not Implemented
slug: Web/HTTP/Status/501
translation_of: Web/HTTP/Status/501
---
{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`501 Not Implemented`** 서버 응답 코드는 **요청을 수행할 수 있는 기능을 서버가 지원하지 않는다**는 것을 의미합니다.요청자에게 서버에서 기능이 지원될 때, 다시 확인해볼 수 있도록 {{HTTPHeader("Retry-After")}} 헤더를 전송해줄 수 있습니다.

`501` 는 서버가 요청 방법을 이해하지 못하거나나 어떤 리소스를 지원하지 않은 경우에 적절합니다. 서버가 필수적으로 지원하는 method에는 {{HTTPMethod("GET")}} 와 {{HTTPMethod("HEAD")}}가 있습니다.

서버가 method를 이해하지 못하지만 고의적으로 지원하지 않는 경우에는 {{HTTPStatus(405, "405 Method Not Allowed")}} 응답이 적합합니다.

> **참고:** - 501 에러는 유저가 고칠 수 있는 영역이 아니며, 접속하려는 서버측에서의 문제가 있는 것
>
> - 캐슁 헤더의 지시가 있지 않는 이상, 501 응답은 디폴트로 cacheable하다.

## Status

```
501 Not Implemented
```

## Specifications

{{Specifications}}

## Browser compatibility

아래는 MDN Github(<https://github.com/mdn/browser-compat-data>)에서 가져온 정보입니다.

{{Compat("http.status.501")}}
