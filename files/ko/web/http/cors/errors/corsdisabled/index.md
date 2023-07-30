---
title: "Reason: CORS disabled"
slug: Web/HTTP/CORS/Errors/CORSDisabled
---

{{HTTPSidebar}}

## 원인

```plain
원인: CORS 비활성화
```

## 무엇이 문제인가요?

{{Glossary("CORS")}}를 사용해야 하는 요청이 시도되었지만 사용자의 브라우저에서 CORS가 비활성화되어 있습니다. 이 경우 사용자는 브라우저에서 CORS를 다시 켜야 합니다.

파이어폭스에서 CORS를 비활성화하는 기본 설정은 `content.cors.disable`입니다.
`true`로 설정하면 CORS가 비활성화되므로 그럴 때마다 CORS 요청은 항상 실패하고 이 오류가 발생합니다.

## 더 보기

- [CORS 에러](/ko/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [CORS 소개](/ko/docs/Web/HTTP/CORS)
