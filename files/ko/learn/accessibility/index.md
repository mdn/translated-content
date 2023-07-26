---
title: 접근성
slug: Learn/Accessibility
---

{{LearnSidebar}}

웹 개발자가 되기위해서 HTML, CSS 및 JavaScript를 배우는 것이 필요하지만 배운 지식을 효과적으로 사용하기위해서는 지식이상의 기술이 필요로 합니다. 이 기술을 사용해서 웹사이트에 접근하려는 모든 사용자를 차별없이 접근할수 있도록 해야합니다. 이를 위하여 모범 사례([HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS) 및 [JavaScript](/ko/docs/Learn/JavaScript) 항목에서 설명) 를 준수하고 [브라우저 호환성 테스트를 거치며](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing) 처음부터 접근성을 고려해야합니다. 이 문서에서는 후자에 대해 자세히 다룰 것입니다.

## 선결조건

이 문서를 최대한 활용하려면 최소한 [HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS) 및 [JavaScript](/ko/docs/Learn/JavaScript) 항목 중 처음 두 문서를 통해 작업하거나 또는 접근성 문서와 관련된 기술을 통해 개선해 나가는것이 좋습니다.

> **참고:**
>
> 당신은 당신이 당신의 자신의 파일을 생성 할 수 있는 기능이 없는 컴퓨터 / 태블릿 / 다른 장치에서 작업하는 경우, 당신은 [JSBin](http://jsbin.com/) 또는 [Thimble](https://thimble.mozilla.org/) 같은 온라인 코딩 프로그램에서 코드 예제의 대부분을 테스트 할 수 있습니다.

## 가이드

- [접근성이란?](/ko/docs/Learn/Accessibility/What_is_accessibility)
  - : 이 문서에서는 접근성이 실제로 무엇인지 자세히 살펴보는 것으로 모듈을 시작합니다. 여기에는 고려해야 할 사람의 그룹, 웹과 상호 작용하는 데 사용하는 서로 다른 도구 및 접근성 워크 플로우를 개발하는 방법이 포함됩니다.
- [HTML: 접근성을 위한 좋은기초](/ko/docs/Learn/Accessibility/HTML)
  - : 항상 올바른 HTML요소를 올바른 용도로 사용하는 것만으로 수많은 웹 콘텐츠에 접근 할 수 있습니다. 이 문서는 접근성을 극대화하기 위해 HTML을 사용하는 방법을 자세히 살펴봅니다.
- [CSS 와 JavaScript의 접근성 모범 사례](/ko/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : 또한, CSS 와 JavaScript를 적절히 사용하면 접근성 높은 웹 경험을 줄수도 있지만 , 만약 잘못 사용될 경우 접근성을 크게 해칠 수 있다. 이 문서에서는 복잡한 컨텐츠도 가능한 액세스 할 수 있도록 하기 위해 고려해야 할 몇가지 CSS 및 JavaScript모범 사례를 간략히 설명합니다.
- [WAI-ARIA 기초](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : 이전 문서에 이어, 시맨틱하지 못한 HTML과 동적 자바 스크립트로 업데이트되는 컨텐츠를 포함하는 복잡한 UI를 제어 하는 것은 어려울 수 있습니다. WAI-ARIA는 브라우저와 보조 기술이 사용자에게 상황을 알려 주는 데 사용할 수 있는 시맨틱한 요소를 추가하여 이러한 문제를 해결하는 기술이다. 여기서는 접근성을 향상시키기 위해 기본적인 수준에서 이 기능을 사용하는 방법을 보여 줍니다.
- [멀티미디어 접근성](/ko/docs/Learn/Accessibility/Multimedia)
  - : 접근성 문제를 야기할 수 있는 또 다른 범주의 콘텐츠 즉 멀티 미디어 . 비디오, 오디오 및 이미지 콘텐츠에 적절한 대체텍스트를 제공해서 보조 기술과 사용자가 이해할 수 있도록 해야 한다. 이 글은 그 방법을 보여 준다.
- [모바일 접근성](/ko/docs/Learn/Accessibility/Mobile)
  - : 모바일 기기를 이용한 웹 접근이 매우 널리 사용되고 있고 iOS및 Android와 같은 유명한 플랫폼에서 액세스가 가능한 툴을 사용하는 경우, 이러한 플랫폼에서 웹 콘텐츠를 접근 할 수 있는지를 고려해야 합니다. 이 자료에서는 모바일 접근성 고려 사항에 대해 살펴봅니다.

## 평가

- [접근성 문제 해결](/ko/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : 평가에서는 진단 및 해결해야 하는 다양한 접근성 문제가 포함된 간단한 사이트를 제공합니다.

## 참고 항목

- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today) — an excellent series of video tutorials by Marcy Sutton.
- [Deque University resources](https://dequeuniversity.com/resources/) — includes code examples, screen reader references, and other useful resources.
- [WebAIM resources](https://webaim.org/resources/) — includes guides, checklists, tools, and more.
