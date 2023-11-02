---
title: 페이지 로드 시간 (Page load time)
slug: Glossary/Page_load_time
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**페이지 로드 시간(Page load time)** 은 페이지를 로드하는 데 걸리는 시간으로, [탐색 시작](/ko/docs/Web/API/PerformanceTiming/navigationStart)부터 [로드 이벤트 시작](/ko/docs/Web/API/PerformanceTiming/loadEventStart)까지 측정됩니다.

```js
let time = performance.timing;

let pageloadtime = time.loadEventStart - time.navigationStart;
```

페이지 로드 시간은 완벽한 웹 성능 지표처럼 들리지만, 그렇지 않습니다. 로드 시간은 장치 기능, 네트워크 상태 및 서버와의 거리에 따라 사용자마다 크게 다를 수 있습니다. 페이지 로드 시간이 측정되는 개발 환경은 사용자의 현실을 반영하지 않는 최적의 환경일 가능성이 높습니다. 또한, 웹 성능은 로드 이벤트가 발생하는 시점에만 국한되지 않습니다. 또한 페이지 로드 시간은 [인지된 성능](/ko/docs/Glossary/Perceived_performance), 응답성, [jank](/ko/docs/Glossary/Jank) 및 지터와 관련이 있습니다.

## 같이 보기

- [탐색 및 리소스 타이밍](/ko/docs/Web/Performance/Navigation_and_resource_timings)
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformanceResourceTiming")}},
