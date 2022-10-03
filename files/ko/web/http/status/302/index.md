---
title: 302 Found
slug: Web/HTTP/Status/302
tags:
  - HTTP
  - HTTP 상태 코드
  - 레퍼런스
  - 리다이렉트
translation_of: Web/HTTP/Status/302
---
{{HTTPSidebar}}

하이퍼텍스트 전송 프로토콜 (HTTP)의 302 Found 리다이렉트 상태 응답 코드는 클라이언트가 요청한 리소스가 {{HTTPHeader("Location")}} 헤더에 주어진 URL에 일시적으로 이동되었음을 가리킨다. 브라우저는 사용자를 이 URL의 페이지로 리다이렉트시키지만 검색 엔진은 그 리소스가 일시적으로 이동되었다고 해서 그에 대한 링크를 갱신하지는 않는다 ('SEO 관점' 에서 말하자면, 링크 주스(Link Juice)가 새로운 URL로 보내지지는 않는다).

명세는 리다이렉션이 수행되었을 때 메서드 (그리고 몸체) 가 변경되어서는 안된다고 명시했지만, 모든 사용자 에이전트들이 이를 따르는 것은 아니다 - 이러한 종류의 버그가 있는 소프트웨어를 쉽게 찾아볼 수도 있다. 따라서, 리다이렉트할 때에도 메서드 변경이 되지 않는 {{HTTPStatus("307", "307 Temporary Redirect")}} 을 대신 사용하고고 {{HTTPMethod("GET")}} 또는 {{HTTPMethod("HEAD")}} 요청에 대한 응답으로는 `302` 코드를 설정하는 것이 권장된다.메서드가 {{HTTPMethod("GET")}} 으로 변경되도록 하고 싶은 경우에는, {{HTTPStatus("303", "303 See Other")}} 를 대신 사용하라. 이 응답 코드는 {{HTTPMethod("PUT")}} 을 통해 리소스를 업로드하고 나서 업로드된 리소스 대신 '성공적으로 XYZ'를 업로드했습니다' 와 같은 메시지를 보여주는 응답을 할 때 유용하다.

## Status

```
302 Found
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("http.status.302")}}

## See also

- {{HTTPStatus("307", "307 Temporary Redirect")}}, the equivalent of this status code where the method used never changes.
- {{HTTPStatus("303", "303 See Other")}}, a temporary redirect that changes the method used to {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, the permanent redirect.
