---
title: 304 Not Modified
slug: Web/HTTP/Status/304
---

{{HTTPSidebar}}

클라이언트 리디렉션 응답 코드 **`304 Not Modified`** 는 요청된 리소스를 재전송할 필요가 없음을 나타낸다. 캐시된 자원으로의 암묵적인 리디렉션이다. 이 는 {{HTTPMethod("GET")}} 나 {{HTTPMethod("HEAD")}} 요청처럼 요청 방법이 {{glossary("안전")}} 한 경우 또는 요청이 조건부로 {{HTTPHeader("If-None-Match")}} 또는 {{HTTPHeader("If-Modified-Since")}} 헤더를 사용할 때 응답 된다.

이에 상응하는 {{HTTPStatus("200")}} `OK` 응답에는 {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, 그리고 {{HTTPHeader("Vary")}} 가 포함되어 있었을 것이다.

> **참고:** [브라우저의 개발자도구 네트워크 패널](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html)은 304 응답으로 이어지는 많은 요청을 생성하며, 로컬 캐시로 액세스 하는 것을 개발자에게 보여준다.

## 상태

```
304 Not Modified
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 호환성 노트

- 이 응답에 영구 연결의 본문이 잘못 포함되어 있으면 브라우저 동작이 다릅니다. 자세한 내용은 [204 No Content](/ko/docs/Web/HTTP/Status/204)을(를) 참조하십시오.

## 같이 보기

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
