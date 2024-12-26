---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

HTTP **`412 Precondition Failed`** [클라이언트 오류](/ko/docs/Web/HTTP/Status#client_error_responses) 상태 코드는 대상 리소스에 대한 액세스가 거부되었음을 나타냅니다. 이는 {{HTTPMethod("GET")}} 또는 {{HTTPMethod("HEAD")}} 이외의 메서드에 대한 [조건부 요청](/ko/docs/Web/HTTP/Conditional_requests)에서 {{HTTPHeader("If-Unmodified-Since")}} 또는 {{HTTPHeader("If-Match")}} 헤더에 정의된 조건이 충족되지 않을 때 발생합니다. 이 경우 요청(일반적으로 리소스 업로드 또는 수정)을 수행할 수 없으며 이 오류 응답이 다시 전송됩니다.

## 상태

```http
412 Precondition Failed
```

## 예제

### Precondition failed

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Avoiding mid-air collisions

`ETag`와 {{HTTPHeader("If-Match")}} 헤더를 사용하면 충돌이나 공중 충돌을 방지할 수 있습니다. 예를 들어, 일부 위키 페이지를 편집할 때 콘텐츠가 해시되어 성공적인 응답의 `ETag`에 입력됩니다.

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

위키 페이지에 변경 사항을 저장할 때(데이터를 게시할 때), {{HTTPMethod("POST")}} 요청에는 클라이언트가 마지막 편집에서 저장한 ETag 값이 포함된 {{HTTPHeader("If-Match")}} 헤더가 포함되어 서버에서 리소스의 최신 상태를 확인합니다.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

해시 값이 일치하지 않으면 문서가 그 사이에 편집되었음을 의미하며, 이 경우 `412 Precondition Failed` 오류가 발생합니다.

## 명세서

{{Specifications}}

## 같이 보기

- [HTTP 상태 코드](/ko/docs/Web/HTTP/Status)
- [HTTP 조건부 요청](/ko/docs/Web/HTTP/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
