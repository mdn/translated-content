---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
tags:
  - '503'
  - HTTP
  - Server error
  - Status code
translation_of: Web/HTTP/Status/503
---
{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜 (HTTP) **`503 Service Unavailable`** 서버 에러 응답(response) 코드는 서버가 요청(request)을 처리할 준비가 되지 않은 것을 나타낸다.

흔하게는 서버가 점검을 위해 다운되거나 오버로드되어 발생한다. 이 응답(response)은 일시적인 상황를 위해 사용되어야 하며, {{HTTPHeader("Retry-After")}} HTTP header 는 가능하다면 서비스 복구를 위한 예상 시간을 포함해야 한다.

> **참고:** 이 응답(response)과 함께, 이 문제에 대해 설명하는 user-friendly page 가 전달되어야 한다.

503 상태는 종종 일시적인 상황이며 응답(response) 들은 일반적으로 캐쉬되지 않아야 하므로,
이 응답(response)과 함께 전달되는 캐싱 관련 헤더들은 주의 깊게 다루어져야 한다.

## Status

```
503 Service Unavailable
```

## Specifications

{{Specifications}}

## Browser compatibility

The information shown below has been pulled from MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.503")}}

## See also

- {{HTTPHeader("Retry-After")}}
