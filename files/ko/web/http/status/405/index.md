---
title: 405 Method Not Allowed
slug: Web/HTTP/Status/405
translation_of: Web/HTTP/Status/405
---
{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜(HTTP)의 **`405 Method Not Allowed`** 응답 상태 코드는 요청 방법이 서버에 의해 알려졌으나, 사용 불가능한 상태임을 가리킵니다.

> **참고:** **유의: 두 가지 필수 메소드인** {{HTTPMethod("GET")}}와 {{HTTPMethod("HEAD")}}는 사용 불가능 하여서는 안 되며, 이러한 오류 타입을 반환해서는 안 됩니다.

## 상태

```
405 Method Not Allowed
```

## 기술 사양

| 기술 사양                                                            | 제목                                                          |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "405 Method Not Allowed" , "6.5.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 함께 보기

- {{HTTPHeader("Allow")}}
