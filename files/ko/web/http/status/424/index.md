---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜(HTTP) **`424 Failed Dependency`** 응답 상태 코드는 요청한 동작이 다른 동작에 의존하며 해당 동작이 실패한 경우에 해당 리소스에서 메서드를 수행할 수 없음을 나타냅니다.

보통 일반 웹 서버에서는 이 상태 코드를 반환하지 않습니다. 하지만 {{Glossary("WebDAV")}}와 같은 일부 다른 프로토콜에서는 이 코드를 반환할 수 있습니다. 예를 들어, {{Glossary("WebDAV")}}에서 `PROPPATCH` 요청을 보냈을 때 하나의 명령이 실패하면 자동으로 다른 모든 명령도 `424 Failed Dependency`로 실패합니다.

## 상태

{{Specifications}}

## 같이 보기

- {{HTTPStatus("403")}} (Forbidden)
