---
title: "Reason: CORS request external redirect not allowed"
slug: Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 이유

```plain
Reason: CORS request external redirect not allowed
```

## 무엇이 잘못되었나요?

{{Glossary("CORS")}} 요청이 CORS 요청 중에 허용되지 않는 원래 요청과 다른 출처의 URL에 대한 HTTP 리디렉션으로 서버에 의해 응답되었습니다.

예를 들어, `https://service.tld/fetchdata` 페이지가 요청되고, HTTP 응답은 "301 영구적으로 이동됨", "307 임시 리디렉션" 또는 "308 영구 리디렉션" 이고 `Location`이 `https://anotherservice.net/getdata`인 경우, 이러한 방식의 CORS 요청은 실패합니다.

문제를 해결하려면, 리디렉션에서 보고된 새 URL을 사용하도록 코드를 갱신하세요. 따라서 리디렉션을 피할 수 있습니다.

## 같이 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- 용어 사전: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
