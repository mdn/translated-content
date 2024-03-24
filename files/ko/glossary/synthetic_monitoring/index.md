---
title: 종합 모니터링 (Synthetic monitoring)
slug: Glossary/Synthetic_monitoring
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**종합 모니터링(Synthetic monitoring)** 은 일반적으로 가능한 한 일관된 환경에서 자동화 도구를 사용해, '실험실' 환경에서 페이지 성능을 모니터링하는 작업을 의미합니다.

일관된 기준을 사용하는, 종합 모니터링은 코드 변경이 성능에 미치는 영향을 측정하는 데 좋습니다. 그러나 사용자가 경험하고 있는 상황이 반드시 반영되는 것은 아닙니다.

종합 모니터링에는 최종 사용자가 웹 애플리케이션을 통해 이동할 수 있는 경로를 시뮬레이션하기 위한 스크립트 배포가 포함되며, 시뮬레이터 경험의 성능 결과를 다시 보고합니다. 널리 사용되는 종합 모니터링 도구의 예로는 [WebPageTest](https://webpagetest.org) 및 [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)가 있습니다. 측정된 트래픽은 실제 사용자가 아니라, 페이지 성능에 대한 데이터를 수집하여 종합적으로 생성된 트래픽입니다.

[실제 사용자 모니터링 (Real User Monitoring, RUM)](/ko/docs/Glossary/Real_User_Monitoring)과 달리, 종합 모니터링은 사용자 차이를 고려하지 않는 좁은 성능 보기를 제공합니다. 그래서 애플리케이션 성능에 대한 기본 데이터를 얻고 개발 환경에서 성능을 즉각적으로 확인하는 데 유용합니다. 네트워크 조절과 같은 다른 도구와 결합하면, 잠재적인 문제 영역에 대한 뛰어난 통찰력을 제공할 수 있습니다.

## 같이 보기

- [실제 사용자 모니터링 (Real User Monitoring, RUM)](/ko/docs/Glossary/Real_User_Monitoring)
- [실제 사용자 모니터링 vs 종합 모니터링](/ko/docs/Web/Performance/Rum-vs-Synthetic)
- [비콘](/ko/docs/Glossary/Beacon)
