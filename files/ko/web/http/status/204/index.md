---
title: 204 No Content
slug: Web/HTTP/Status/204
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

HTTP **`204 No Content`** 성공 상태 응답 코드는 요청이 성공했으나 클라이언트가
현재 페이지에서 벗어나지 않아도 된다는 것을 나타냅니다.

예를 들어, 위키 사이트에 "저장 후 편집 계속" 기능을 구현할 때 사용할 수 있습니다.
이 경우 {{HTTPMethod("PUT")}} 요청을 사용하여 페이지를 저장하고 `204 No Content` 응답을 전송하여
편집기를 다른 페이지로 대체해서는 안 된다는 것을 나타냅니다.

204 응답은 기본적으로 캐시 가능하며, 캐시에서 가져온 응답인 경우 {{HTTPHeader("ETag")}} 헤더를 포함합니다.

## 상태

```http
204 No Content
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 호환성 참고사항

- 이 상태코드는 본문 없는 응답을 위한 상태 코드이지만, 서버에서 잘못되게 본문을 포함한 응답을 전달하는 경우가
  존재할 수 있습니다. 이 프로토콜은 사용자 에이전트 다양한 방법으로 처리하는 것을 허용하고 있습니다.
  [이 명세에 대한 토론은 여기서 확인할 수 있습니다.](https://github.com/httpwg/http-core/issues/26)
  보통 지속 연결에서 볼 수 있는 문제로, 잘못 포함된 본문이 이후 요청에 대한 별도의 응답을 담고 있을 수 있습니다.

  Apple Safari는 잘못 포함된 모든 데이터를 거부합니다. Google Chrome과 Microsoft Edge는 잘못된 데이터의
  최대 4바이트를 검사한 후, 유효한 별도의 요청을 찾지 못한 경우 폐기합니다. Firefox는 1킬로바이트 이상을 검사합니다.

## 같이 보기

- [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)
