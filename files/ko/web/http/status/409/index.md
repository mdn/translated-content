---
title: 409 Conflict
slug: Web/HTTP/Status/409
translation_of: Web/HTTP/Status/409
---
{{HTTPSidebar}}

HTTP **`409 Conflict`** 응답 상태 코드는 서버의 현재 상태와 요청이 충돌했음을 나타낸다.

충돌은 {{HTTPMethod("PUT")}} 요청에 대응하여 발생할 가능성이 가장 높다. 예를 들어 서버에 이미 있는 파일보다 오래된 파일을 업로드할 때 409 응답이 발생하여 버전 제어 충돌이 발생할 수 있다.

## Status

```
409 Conflict
```

## Specifications

{{Specifications}}

## See also

- {{HTTPMethod("PUT")}}
