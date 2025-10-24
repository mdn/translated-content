---
title: 교차 브라우저 테스팅
slug: Learn_web_development/Extensions/Testing
original_slug: Learn/Tools_and_testing/Cross_browser_testing
l10n:
  sourceCommit: 26e2f9883e0e73def04c0e86fec6da3ec42e66b3
---

{{LearnSidebar}}

이 모듈은 웹 프로젝트를 다양한 브라우저에서 테스트하는 것에 중점을 둡니다. 주요 타겟 사용자층을 식별하는 방법(예: 어떤 사용자, 브라우저, 기기를 가장 신경 써야 하는가?), 테스트를 수행하는 방법, 다양한 코드 유형에서 직면하게 될 주요 문제와 이를 완화하는 방법, 문제를 테스트하고 해결하는 데 가장 유용한 도구, 그리고 테스트 속도를 높이기 위해 자동화를 사용하는 방법에 대해 다룹니다.

## 전제조건

여기서 설명된 도구를 사용하기 전에 기본적인 [HTML](/ko/docs/Learn_web_development/Core/Structuring_content), [CSS](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics_b957eec7deaf1ea2b20721d6838ea6e1), [JavaScript](/ko/docs/conflicting/Learn_web_development/Core/Scripting_41cf930b8cfd2b83c76f8086a5e24792) 언어를 먼저 학습하는 것이 좋습니다.

## 안내서

- [교차 브라우저 테스트 소개](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
  - : 이 글은 "교차 브라우저 테스트란 무엇인가?", "가장 일반적으로 직면하는 문제 유형은 무엇인가?", "문제를 테스트하고 식별하며 수정하는 주요 접근 방식은 무엇인가?"와 같은 질문에 답하면서 교차 브라우저 테스트 주제에 대한 개요를 제공합니다.
- [테스트 수행 전략](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
  - : 다음으로, 테스트 수행에 대해 심도 있게 다루며 타겟 사용자층을 식별하는 방법(예: 어떤 브라우저, 기기 및 기타 세그먼트를 테스트해야 하는지), 저기술 테스트 전략(다양한 기기와 가상 머신을 구비하고 필요할 때 즉흥적으로 테스트 수행), 고기술 전략(자동화, 전용 테스트 앱 사용), 사용자 그룹과의 테스트 등을 살펴봅니다.
- [일반적인 HTML 및 CSS 문제 처리](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
  - : 본격적으로 HTML 및 CSS 코드에서 발생할 수 있는 일반적인 교차 브라우저 문제를 살펴보고, 문제를 방지하거나 발생한 문제를 해결하는 데 사용할 수 있는 도구를 소개합니다. 여기에는 코드 린팅, CSS 접두사 처리, 브라우저 개발자 도구를 사용한 문제 추적, 브라우저에 기능을 추가하기 위한 폴리필 사용, 반응형 디자인 문제 해결 등이 포함됩니다.
- [일반적인 JavaScript 문제 처리](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
  - : 일반적인 교차 브라우저 JavaScript 문제와 그 해결 방법을 살펴봅니다. 여기에는 브라우저 개발자 도구를 사용한 문제 추적 및 해결, 폴리필 및 라이브러리를 사용한 문제 해결, 최신 JavaScript 기능을 구형 브라우저에서 작동하게 하는 방법 등이 포함됩니다.
- [일반적인 접근성 문제 처리](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
  - : 다음으로 접근성 문제에 대해 다루며, 일반적인 문제, 간단한 테스트 방법, 접근성 문제를 찾기 위한 감사/자동화 도구 활용 방법에 대한 정보를 제공합니다.
- [기능 감지 구현](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
  - : 기능 감지는 브라우저가 특정 코드 블록을 지원하는지 여부를 파악하고, 지원 여부에 따라 다른 코드를 실행하여 모든 브라우저에서 충돌하거나 오류가 발생하는 대신 항상 작동하는 환경을 제공할 수 있도록 하는 것입니다. 이 글에서는 간단한 기능 감지 코드를 작성하는 방법, 구현 속도를 높이기 위해 라이브러리를 사용하는 방법, `@supports`와 같은 기능 감지를 위한 기본 기능에 대해 설명합니다.
- [자동화된 테스트 소개](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
  - : 여러 브라우저와 기기에서 하루에도 여러 번 수동으로 테스트를 실행하는 것은 지루하고 시간이 많이 소요될 수 있습니다. 이를 효율적으로 처리하기 위해 자동화 도구에 익숙해지는 것이 좋습니다. 이 글에서는 사용 가능한 도구, 작업 실행기(task runner)를 사용하는 방법, Sauce Labs 및 Browser Stack과 같은 상용 브라우저 테스트 자동화 앱을 사용하는 기본 사항에 대해 살펴봅니다.
- [자체 테스트 자동화 환경 설정](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
  - : 이 글에서는 Selenium/WebDriver 및 Node용 selenium-webdriver와 같은 테스트 라이브러리를 사용하여 자체 자동화 환경을 설치하고 테스트를 실행하는 방법을 설명합니다. 또한 이전 글에서 논의한 상용 앱과 로컬 테스트 환경을 통합하는 방법도 살펴봅니다.
