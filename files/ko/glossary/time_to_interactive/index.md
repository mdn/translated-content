---
title: Time to interactive (TTI)
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Time to Interactive(TTI)** 는 마지막 [긴 작업](/ko/docs/Web/API/PerformanceLongTaskTiming)이 완료되고 5초의 네트워크 및 메인 스레드가 비활성화된 시점으로 정의된 비표준화된 웹 성능 '진행' 측정항목입니다.

2018년 Web Incubator Community Group에서 제안한 TTI는 페이지나 애플리케이션에 유용한 콘텐츠가 포함되어 있고 메인 스레드가 유휴 상태이며 이벤트 핸들러 등록을 포함해 사용자 상호작용에 자유롭게 응답하는 경우를 설명하는 측정 기준을 제공하기 위한 것입니다.

#### 경고

TTI는 [긴 작업 API](/ko/docs/Web/API/PerformanceLongTaskTiming)의 정보를 활용하여 파생되어 나온 정보입니다. 일부 성능 모니터링 도구에는 사용할 수 있지만, TTI는 이 글을 쓰는 시점에서는 공식 웹 명세서의 일부가 아닙니다.

## 같이 보기

- Web Incubator Community Group의 [TTI의 정의](https://github.com/WICG/time-to-interactive)
- Radimir Bitsov의 [Time to Interactive — 인간 중심 지표에 초점](https://calibreapp.com/blog/time-to-interactive)
- [TTI 추적](https://web.dev/user-centric-performance-metrics/#tracking_tti)
