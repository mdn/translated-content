---
title: 오래 걸리는 작업 (Long task)
slug: Glossary/Long_task
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**오래 걸리는 작업 (Long task)** 은 완료하는 데 50ms 이상이 걸리는 작업입니다.

[메인 UI 스레드](/ko/docs/Glossary/Main_thread)가 50ms 이상 사용되는 중단 없는 기간입니다. 흔한 예로는 오래 실행되는 이벤트 핸들러, 비용이 많이 드는 [리플로우](/ko/docs/Glossary/Reflow) 및 기타 재렌더링, 50ms를 초과하는 이벤트 루프의 여러 반복 사이에서 브라우저가 수행하는 작업 등이 있습니다.

## 같이 보기

- [Long task API](/ko/docs/Web/API/PerformanceLongTaskTiming)
