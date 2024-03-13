---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
---

{{HTTPSidebar}}

HTTP **'415 지원되지 않는 미디어 유형'** 클라이언트 오류 응답 코드는 클라이언트가 보낸 페이로드가 지원하지 않는 형식이기 때문에 서버가 요청을 수락하지 않음을 나타냅니다.

형식 문제는 요청에 표시된 {{HTTPHeader("Content-Type")}} 또는 {{HTTPHeader("Content-Encoding")}}으로 인해 발생하거나 데이터를 직접 검사한 결과 발생할 수 있습니다.

## 상태

```
415 Unsupported Media Type
```

## 명세서

{{Specifications}}

## 같이 보기

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
