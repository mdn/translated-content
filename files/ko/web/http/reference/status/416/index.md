---
title: 416 Range Not Satisfiable
slug: Web/HTTP/Reference/Status/416
original_slug: Web/HTTP/Status/416
---

하이퍼텍스트 트랜스퍼 프로토콜(HTTP) **`416 Range Not Satisfiable`** 에러 응답 코드는 서버가 요청받은 범위에
대해서 서비스 할 수 없음을 알려줍니다. 아마도 이유는 그 문서가 그러한 범위를 지니고 있지 않거나, 또는
{{HTTPHeader("Range")}} 헤더 값이 문법적으로는 옳지만, 이해가 되지 않을 경우 그럴 수 있습니다.

416 응답 메시지는 {{HTTPHeader("Content-Range")}} 를 포함하여 만족할 수 없는 범위(그 경우 `'*'`) 뒤에
`'/'`와 현재 리소스를 알려줍니다. 예: `Content-Range: */12777`

이 에러를 마주하면, 브라우저는 보통 명령을 취소하거나 전체 문서를 다시 요청합니다.

## 상태

```http
416 Range Not Satisfiable
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 참고할 내용

- {{HTTPStatus(206)}} `Partial Content`
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Range")}}
