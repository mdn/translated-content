---
title: Fetch 지시어 (Fetch directive)
slug: Glossary/Fetch_directive
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**{{Glossary("CSP")}} fetch 지시어**는 특정 리소스 유형이 로드될 수 있는 {{HTTPHeader("Content-Security-Policy")}} 헤더 및 제어 위치에 사용됩니다. 예를 들어, {{CSP("script-src")}}는 개발자가 신뢰할 수 있는 스크립트 소스가 페이지에서 실행되도록 허용하는 반면, {{CSP("font-src")}}는 웹 글꼴 소스를 제어합니다.

모든 fetch 지시문은 {{CSP("default-src")}}으로 대체됩니다. 즉, CSP 헤더에 fetch 지시어가 없으면 사용자 에이전트는 `default-src` 지시어를 찾습니다.

전체 목록은 [Fetch 지시어 목록](/ko/docs/Web/HTTP/Headers/Content-Security-Policy#fetch_directives)을 참고해주세요.

## 같이 보기

- [용어 사전](/ko/docs/Glossary)
  - {{Glossary("CSP")}}
  - {{Glossary("Reporting directive")}}
  - {{Glossary("Document directive")}}
  - {{Glossary("Navigation directive")}}

- 참고서
  - <https://www.w3.org/TR/CSP/#directives-fetch>
  - {{HTTPHeader("Content-Security-Policy/upgrade-insecure-requests", "upgrade-insecure-requests")}}
  - {{HTTPHeader("Content-Security-Policy/block-all-mixed-content", "block-all-mixed-content")}}
  - {{HTTPHeader("Content-Security-Policy")}}
