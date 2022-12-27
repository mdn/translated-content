---
title: 브라우징 맥락
slug: Glossary/Browsing_context
original_slug: Glossary/브라우저-컨텍스트
---
{{QuickLinksWithSubpages("/ko/docs/Glossary")}}

**브라우징 맥락**은 {{glossary("browser", "브라우저")}}가 {{domxref("Document")}}를 표시하는 환경을 말합니다. 오늘날에는 보통 탭이지만, 브라우저 창이나 페이지 내의 프레임도 가능합니다.

각 브라우징 맥락은 특정 {{glossary("origin", "출처")}}, 활성화된 문서의 출처, 그리고 표시했던 모든 문서의 방문 기록을 가집니다.

브라우징 맥락 간 통신은 엄격히 제한됩니다. 같은 출처를 가진 맥락끼리는 {{domxref("BroadcastChannel")}}을 열어 사용할 수 있습니다.

## 더 알아보기

### 기술 참조

- [Browsing context on WHATWG](https://html.spec.whatwg.org/multipage/browsers.html#windows)
- [Browsing context on W3C](http://w3c.github.io/html/browsers.html#sec-browsing-contexts)
