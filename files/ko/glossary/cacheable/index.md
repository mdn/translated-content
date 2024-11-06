---
title: Cacheable
slug: Glossary/Cacheable
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**캐시 가능(cacheable)** 한 응답은 캐시할 수 있는 HTTP 응답으로, 나중에 검색하고 사용하기 위해 저장하여 새 요청을 서버에 저장합니다. 모든 HTTP 응답을 캐시할 수 있는 것은 아니며, 캐시할 HTTP 응답에 대한 제약 조건은 다음과 같습니다.

- {{HTTPMethod("GET")}} 또는 {{HTTPMethod("HEAD")}} 메서드는 요청에 사용된 메서드는 그 자체로 캐시 가능합니다. {{HTTPMethod("POST")}} 또는 {{HTTPMethod("PATCH")}} 요청에 대한 응답은 유효성이 표시되고 {{HTTPHeader("Content-Location")}} 헤더가 설정된 경우 캐시될 수도 있지만 거의 구현되지 않았습니다. (예를 들어, Firefox는 <https://bugzilla.mozilla.org/show_bug.cgi?id=109553> 에 따라 이를 지원하지 않습니다.) {{HTTPMethod("PUT")}} 혹은 {{HTTPMethod("DELETE")}} 다른 메서드는 캐시 가능하지 않고 그 결과 역시 캐시할 수 없습니다.
- 애플리케이션 캐싱에 의해 알려진 응답의 상태 코드는 캐시 가능한 것으로 간주됩니다. {{HTTPStatus("200")}}, {{HTTPStatus("203")}}, {{HTTPStatus("204")}}, {{HTTPStatus("206")}}, {{HTTPStatus("300")}}, {{HTTPStatus("301")}}, {{HTTPStatus("404")}}, {{HTTPStatus("405")}}, {{HTTPStatus("410")}}, {{HTTPStatus("414")}}, {{HTTPStatus("501")}} 상태 코드는 캐시 가능합니다.
- 응답에는 {{HTTPHeader("Cache-Control")}}과 같은 캐싱을 방지하는 특정 헤더가 있습니다.

특정 URI에 대한 일부 캐시할 수 없는 요청/응답은 동일한 URI에서 이전에 캐시된 응답을 무효화할 수 있습니다. 예를 들어 pageX.html에 대한 {{HTTPMethod("PUT")}} 요청은 동일한 URI에 대한 {{HTTPMethod("GET")}} 혹은 {{HTTPMethod("HEAD")}} 요청의 캐시를 무효화합니다.

요청 메서드와 응답 상태가 모두 캐시 가능한 경우 요청에 대한 응답을 캐시할 수 있습니다.

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

{{HTTPMethod("PUT")}} 요청을 캐시할 수 없습니다. 같은 URI에 대한 {{HTTPMethod("HEAD")}} 혹은 {{HTTPMethod("GET")}}를 통한 요청은 캐시된 데이터를 무효화합니다.

```http
PUT /pageX.html HTTP/1.1
(…)

200 OK
(…)
```

응답의 {{HTTPHeader("Cache-Control")}} 헤더는 캐싱을 방지합니다.

```http
GET /pageX.html HTTP/1.1
(…)

200 OK
Cache-Control: no-cache
(…)
```

## 같이 보기

- [메서드와 캐싱](https://httpwg.org/specs/rfc9110.html#rfc.section.9.2.3)에 대한 자세한 내용은 HTTP 명세서에서 제공합니다.
- 일반적으로 캐시 가능한 메서드에 대한 설명: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}
- 일반적으로 캐시 불가능한 메서드에 대한 설명: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, 가끔 {{HTTPMethod("POST")}}
