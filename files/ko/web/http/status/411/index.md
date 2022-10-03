---
title: 411 Length Required
slug: Web/HTTP/Status/411
translation_of: Web/HTTP/Status/411
---
HyperText Transfer Protocol (HTTP) 411 Length Required 클라이언트 오류 응답 코드는 서버가 정의된 {{HTTPHeader("Content-Length")}} 헤더 없이 요청을 수락하지 않음을 나타낸다.

> **참고:** 참고: 사양별로 청크 시리즈로 데이터를 전송할 때 `Content-Length` 헤더가 생략되며, 각 청크의 시작 부분에서 현재 청크의 길이를 16진수 형식으로 추가해야 한다. 자세한 내용은 {{HTTPHeader("Transfer-Encoding")}}을(를) 참조하십시오.

## 상태

```
411 Length Required
```

## 정의

| Specification                                                    | Title                                                         |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "411 Length Required" , "6.5.10")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 참고

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
