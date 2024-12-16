---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
page-type: http-status-code
spec-urls: https://www.rfc-editor.org/rfc/rfc9110#status.412
---

{{HTTPSidebar}}

**`412 Precondition Failed`** [클라이언트 오류 응답 코드](/ko/docs/Web/HTTP/Status#client_error_responses)는 대상 리소스에 대한 액세스가 거부되었음을 나타냅니다. 이는 {{HTTPMethod("GET")}} 또는 {{HTTPMethod("HEAD")}} 이외의 메서드에 대한 [조건부 요청](/ko/docs/Web/HTTP/Conditional_requests)에서 {{HTTPHeader("If-Unmodified-Since")}} 또는 {{HTTPHeader("If-Match")}} 헤더에 정의된 조건이 충족되지 않을 때 발생합니다. 이 경우 요청(일반적으로 리소스 업로드 또는 수정)을 수행할 수 없으며 이 오류 응답이 다시 전송됩니다.

## 상태

```http
412 Precondition Failed
```

## 명세서

{{Specifications}}

## 같이 보기

- [HTTP response status codes](/ko/docs/Web/HTTP/Status)
- [Conditional requests](/ko/docs/Web/HTTP/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
