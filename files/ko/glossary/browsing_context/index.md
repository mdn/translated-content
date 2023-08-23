---
title: 브라우징 맥락
slug: Glossary/Browsing_context
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**브라우징 맥락**은 브라우저가 {{domxref("Document")}}를 표시하는 환경을 말합니다. 오늘날에는 보통 탭이지만, 브라우저 창이나 페이지 내의 프레임도 가능합니다.

각 브라우징 맥락은 특정 출처, 활성화된 문서의 출처, 그리고 표시했던 모든 문서의 방문 기록을 가집니다.

브라우징 맥락 간 통신은 엄격히 제한됩니다. 같은 출처를 가진 브라우징 맥락끼리는 {{domxref("BroadcastChannel")}}을 열어 사용할 수 있습니다.

## 같이 보기

- {{glossary("origin")}} 보기
