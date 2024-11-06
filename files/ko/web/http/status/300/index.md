---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`300 Multiple Choices`** 리디렉션 상태 응답 코드는 요청에 가능한 응답이 두 개 이상 있음을 의미합니다.
사용자 에이전트 또는 사용자는 둘 중 하나를 선택해야 합니다. 응답 중 하나를 선택하는 표준화된 방법이 없기 때문에 이
응답 코드는 거의 사용되지 않습니다.

서버는 선호하는 선택 항목이 있는 경우, {{HTTPHeader("Location")}}를 생성해야 합니다.

## 상태

```http
300 Multiple Choices
```

## 명세서

{{Specifications}}

## 같이 보기

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, 임시 리다이렉션
- {{HTTPStatus("308")}} `Permanent Redirect`
