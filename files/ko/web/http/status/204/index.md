---
title: 204 No Content
slug: Web/HTTP/Status/204
tags:
  - HTTP
  - Reference
  - Status code
  - Success
translation_of: Web/HTTP/Status/204
---
{{HTTPSidebar}}

HTTP **`204 No Content`** 성공 상태 응답 코드는 요청이 성공했으나 클라이언트가 현재 페이지에서 벗어나지 않아도 된다는 것을 나타냅니다. 기본값에서 204 응답은 캐시에 저장할 수 있습니다. 캐시에서 가져온 응답인 경우 {{HTTPHeader("ETag")}} 헤더를 포함합니다.

흔히 `204`를 반환하는 경우는 {{HTTPMethod("PUT")}} 요청에 대한 응답으로, 사용자에게 보여지는 페이지를 바꾸지 않고 리소스를 업데이트할 때 쓰입니다. 리소스를 생성한 경우엔 {{HTTPStatus("201")}} `Created`를 대신 반환합니다. 새롭게 업데이트한 페이지를 보여줘야 할 경우 {{HTTPStatus("200")}}을 사용해야 합니다.

## 상태

```
204 No Content
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat("http.status.204")}}

## 호환성 참고사항

- `204 No Content`는 본문 없는 응답을 위한 상태 코드이지만, 서버에서 잘못되게 본문을 포함한 응답을 전달하는 경우가 존재할 수 있습니다. HTTP는 이런 경우를 사용자 에이전트 자의적으로, 서로 다르게 처리하는 것을 허용하고 있습니다. [이에 대한 토론은 여기서 확인할 수 있습니다.](https://github.com/httpwg/http-core/issues/26) 보통 지속 연결에서 볼 수 있는 문제로, 잘못 포함된 본문이 이후 요청에 대한 별도의 응답을 담고 있을 수 있습니다.

  Apple Safari는 잘못 포함된 모든 데이터를 거부합니다. Google Chrome과 Microsoft Edge는 잘못된 데이터의 최대 4바이트를 검사한 후, 유효한 별도의 요청을 찾지 못한 경우 폐기합니다. Firefox는 최대 1킬로바이트를 검사합니다.

## 같이 보기

- [HTTP 요청 메서드](/ko/docs/Web/HTTP/Methods)
