---
title: 성능 예산
slug: Web/Performance/Guides/Performance_budgets
original_slug: Web/Performance/Performance_budgets
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubPages("Web/Performance")}}

성능 예산은 성능 저하를 방지하기 위한 제한입니다. 이는 특정 파일, 확장자, 페이지에서 로드되는 모든 파일, [Time to Interactive](/ko/docs/Glossary/Time_to_interactive) 같은 특정 지표, Time to Hero Element 같은 사용자 정의 지표, 또는 일정 기간 동안의 걸친 임계값에 적용할 수 있습니다.

## 성능 예산이 필요한 이유

예산은 달성 가능한 목표를 반영하기 위해 존재합니다. 이는 사용자 경험과 전환율 같은 기타 성능 지표 간 균형을 맞추는 과정입니다.

이러한 목표는 다음과 같습니다.

- 시간 기반: 예를 들어 [Time to Interactive](/ko/docs/Glossary/Time_to_interactive), [First Contentful Paint](/ko/docs/Glossary/First_contentful_paint)가 있습니다.
- 수량 기반: 예를 들어 JS 파일 개수와 전체 이미지 용량이 있습니다.
- 규칙 기반: 예를 들어 PageSpeed index, Lighthouse 점수가 있습니다.

예산의 주요 목표는 성능 저하를 방지하는 것이지만, 예를 들어 10월 한 주 동안 예산의 절반이 소모되었다와 같이 경향을 예측하는 데 도움을 주어 통찰력을 제공하기도 합니다.

또한, 더 작은 대안이 있는 대형 라이브러리가 일반적인 문제 해결을 위해 선택되는 경우처럼, 개발 요구사항을 발견하는 데도 활용할 수 있습니다.

## 성능 예산을 설정하는 방법

성능 예산은 두 가지 단계를 포함해야 합니다.

- 경고
- 오류

경고 단계는 개발이나 배포를 막지 않으면서도 사전 예방 조치를 가능하게 하고 기술 부채를 계획할 수 있도록 돕습니다.

오류 단계는 상한선 역할을 하며, 변경이 부정적이고 눈에 띄는 영향을 미칠 수 있습니다.

시작하려면 여러 [도구](/ko/docs/Learn_web_development/Extensions/Performance/Best_practices)를 사용하여 사용자가 어디서 오는지 기기와 연결 속도를 먼저 측정해야 합니다. 사용자는 3G 연결을 사용하는 200달러인 Android 기기를 사용하고 있을 수 있습니다. 이러한 시간 기반 지표는 파일 크기 예산으로 변환됩니다.

이탈률을 줄이기 위한 기본적인 기준은 [3G/4G에서 Time to Interactive를 5초 이하로 유지하고, 추가적인 로드는 2초 이하](https://infrequently.org/2017/10/can-you-afford-it-real-world-web-performance-budgets/)로 맞추는 것입니다. 하지만 사이트의 구체적인 목표나 콘텐츠에 따라 다른 성능 지표에 집중할 수도 있습니다.

블로그나 뉴스 사이트처럼 글자 중점 사이트에서, [First Contentful Paint](/ko/docs/Glossary/First_contentful_paint) 지표는 사용자가 얼마나 빠르게 읽기 시작할 수 있는지와 같이 사용자 행동을 더 정확하게 반영할 수 있습니다. 이는 글꼴 용량 같은 구체적인 예산과 [font-display](/ko/docs/Web/CSS/@font-face/font-display)를 활용해 [인지된 성능](/ko/docs/Learn_web_development/Extensions/Performance/Perceived_performance)을 개선하는 최적화 방법을 결정하는 데 도움을 줄 것입니다.

성능 예산의 궁극적인 가치는 성능이 사업이나 제품 목표에 미치는 영향을 파악하는 것입니다. 측정 지표를 정의할 때, [사용자 경험](https://extensionworkshop.com/documentation/develop/user-experience-best-practices/)에 초점을 맞춰야 합니다. 이는 단순히 이탈률이나 전환율 뿐만 아니라 사용자가 사이트를 다시 방문할 가능성에도 영향을 미칩니다.

## 성능 예산을 구현하는 방법

개발 과정에서, 새로운 자원이나 수정된 자원을 검사하는 데 사용할 수 있는 몇 가지 도구가 있습니다.

- 모듈 번들러는 자원이 지정된 한계를 초과할 경우 알림을 제공하는 [성능 기능](https://webpack.js.org/configuration/performance/)을 제공합니다. 예를 들어 [webpack](https://webpack.js.org/)이 있습니다.
- [Bundlesize](https://github.com/siddharthkp/bundlesize)는 지속적인 통합(CI) 파이프라인에서 파일 용량을 검사할 수 있도록 도와줍니다.

파일 용량 확인은 성능 저하를 막는 첫번째 방어선이지만, 용량을 시간 단위로 측정하도록 변환하는 것은 어려울 수 있습니다. 이는 개발환경에서 제3자의 스크립트와 [CDN](/ko/docs/Glossary/CDN)을 통해 제공되는 최적화가 부족할 수 있기 때문입니다.

첫 번째 단계는 각 브랜치에 대한 기준을 정의하고 개발과 배포 환경 간의 차이를 측정하여 실제 환경과 더 잘 맞추도록 목표를 설정하는 것입니다.

[Lighthouse Bot](https://github.com/GoogleChromeLabs/lighthousebot)은 [Travis CI](https://www.travis-ci.com/)와 통합되어 개발 URL에서 [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)와 [Webpage Test](https://www.webpagetest.org/) 측정값을 수집하는 데 사용할 수 있습니다. 봇은 제공된 최소 점수에 따라 성공 또는 실패합니다.

## 성능 예산을 고도화 하는 방법

예산을 초과할 가능성이 있는 요소를 빠르게 식별할수록 현재 사이트 상태를 더 잘 분석하고, 최적화가 필요한 부분이나 불필요한 코드를 더 잘 찾아낼 수 있습니다.

그러나 여러 개의 예산을 설정해야 하고 유동적으로 관리되어야 합니다. 예산은 진행 중인 목표를 반영하는 것을 의미하지만, 이는 위험하고 실험적입니다. 예를 들어, 전반적인 로드 시간은 증가하지만 사용자 참여를 증가시키는 기능을 도입할 수 있습니다. 즉 사용자가 페이지나 사이트에 머무는 시간을 늘릴 수 있습니다.

성능 예산은 새로운 시장을 개척하고 개인 맞춤 경험을 제공할 수 있어 현재 사용자를 위한 최적의 행동을 보호하는 데 도움됩니다.

## 같이 보기

- [Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/) by Addy Osmani
- [Performance Budgets 101](https://web.dev/articles/performance-budgets-101) by Milica Mihajlija
- [Performance Budgets That Stick](https://timkadlec.com/remembers/2019-03-07-performance-budgets-that-stick/) by Tim Kadlec
