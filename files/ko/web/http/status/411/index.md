---
title: 411 Length Required
slug: Web/HTTP/Status/411
---

{{HTTPSidebar}}

하이퍼텍스트 전송 규약(HTTP) **`411 Length Required`** 클라이언트 오류 응답 코드는 서버가 정의된
{{HTTPHeader("Content-Length")}} 헤더 없이 요청을 수락하지 않음을 나타냅니다.

> [!NOTE]
> 사양에 따라 데이터를 일련의 큰 덩어리(chunk) 단위로 데이터를 전송할 때 `Content-Length` 헤더가 생략되며,
> 각 청크의 시작 부분에서 현재 청크의 길이를 16진수 형식으로 추가해야 합니다. 자세한 내용은
> {{HTTPHeader("Transfer-Encoding")}}을 참조하십시요.

## 상태

```http
411 Length Required
```

## 정의

{{Specifications}}

## 참고

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
