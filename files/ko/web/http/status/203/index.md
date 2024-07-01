---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

The HTTP **`203 Non-Authoritative Information`** 는 요청이 성공했지만 오리진 서버의 {{HTTPStatus("200")}} (`OK`) 응답에서 {{Glossary("Proxy server", "proxy")}}에 의해 포함된 페이로드가 수정되었음을 나타냅니다.

`203` 응답은 {{HTTPHeader("Warning")}} 헤더 코드의 변환 적용을 의미하는 [`214`](/ko/docs/Web/HTTP/Headers/Warning#warning_codes) 값과 유사하며, 모든 상태 코드가 있는 응답에 적용할 수 있다는 추가적인 이점이 있습니다.

## 상태

```http
203 Non-Authoritative Information
```

## 명세

{{Specifications}}

## 같이 보기

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
