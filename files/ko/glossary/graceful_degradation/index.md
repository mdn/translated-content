---
title: 우아한 성능 저하 (Graceful degradation)
slug: Glossary/Graceful_degradation
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**우아한 성능 저하**는 최신 브라우저에서 동작하는 웹 사이트/응용 프로그램 구축에 주력하는 설계 철학입니다. 그러나 오래된 브라우저에서는 비록 좋지 않은 경험이라 할 지라도 필수 콘텐츠와 기능을 여전히 제공합니다.

JavaScript {{Glossary("Polyfill","폴리필")}}을 이용하면 누락되는 기능을 구현할 수 있지만, 스타일과 레이아웃 같은 특징으로 대체할 수 있다면 CSS 종속 또는 HTML 폴백을 이용하는 편이 좋습니다. [일반적인 HTML과 CSS 문제 다루기](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)에서 좋은 예제를 찾을 수 있다.

알려지지 않은 다양한 사용자 에이전트가 웹 사이트에 접근할 때 웹 개발자가 최상의 웹 사이트를 개발하도록 집중할 수 있는 유용한 기법입니다. {{Glossary("Progressive enhancement", "점진적 향상")}}은 관련이 있지만 차이가 있습니다. 종종 우아한 성능 저하와 반대인 것처럼 보인다. 실제로 두 접근법은 유효하고 서로를 보완할 수 있다.

## 같이 보기

- [우아한 성능 저하](https://en.wikipedia.org/wiki/Graceful_degradation) on Wikipedia
- [흔한 HTML 및 CSS 문제 다루기](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [기능 탐지 구현](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [MDN Web Docs 용어 사전](/ko/docs/Glossary)
  - {{Glossary("Graceful degradation")}}
  - {{Glossary("Polyfill")}}
  - {{Glossary("Progressive enhancement")}}
