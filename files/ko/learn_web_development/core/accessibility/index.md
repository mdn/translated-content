---
title: 접근성
slug: Learn_web_development/Core/Accessibility
original_slug: Learn/Accessibility
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}

웹 개발자가 되기위해서 HTML, CSS 및 JavaScript를 배우는 것이 필요하지만 배운 지식을 효과적으로 사용하기위해서는 지식이상의 기술이 필요로 합니다. 이 기술을 사용해서 웹사이트에 접근하려는 모든 사용자를 차별없이 접근할수 있도록 해야합니다. 이를 위하여 모범 사례([HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS) 및 [JavaScript](/ko/docs/Learn/JavaScript) 항목에서 설명) 를 준수하고 [브라우저 호환성 테스트를 거치며](/ko/docs/Learn/Tools_and_testing/Cross_browser_testing) 처음부터 접근성을 고려해야합니다. 이 문서에서는 후자에 대해 자세히 다룰 것입니다.

## 개요

사이트를 "접근 가능"하다고 말할 때, 이는 모든 사용자가 웹에 접근하는 방식에 상관없이 모든 기능과 콘텐츠를 사용할 수 있음을 의미합니다. 특히, 신체적 또는 정신적 장애가 있는 사용자도 예외가 아닙니다.

- 사이트는 키보드, 마우스, 터치 스크린 사용자를 비롯해 스크린 리더와 Alexa, Google Home 같은 음성 비서와 같은 다양한 웹 접근 방식을 사용하는 사용자들에게 접근 가능해야 합니다.
- 애플리케이션은 청각, 시각, 신체적 또는 인지 능력에 상관없이 모든 사람이 이해하고 사용할 수 있어야 합니다.
- 또한 사이트는 해를 끼치지 않아야 합니다. 예를 들어 모션 같은 웹 기능은 편두통이나 간질 발작을 유발할 수 있습니다.

**HTML은 올바르게 사용될 경우 기본적으로 접근 가능합니다.** 웹 접근성은 웹에 누가, 어떻게 접근하든지 콘텐츠가 계속 접근 가능하도록 보장하는 것을 포함합니다.

Firefox Accessibility Inspector는 웹 페이지의 접근성 문제를 점검하는 데 매우 유용한 도구입니다. 다음 비디오는 이에 대한 좋은 소개를 제공합니다.

{{EmbedYouTube("7mqqgIxX_NU")}}

## 선결조건

이 문서를 최대한 활용하려면 최소한 [HTML](/ko/docs/Learn/HTML), [CSS](/ko/docs/Learn/CSS) 및 [JavaScript](/ko/docs/Learn/JavaScript) 항목 중 처음 두 문서를 통해 작업하거나 또는 접근성 문서와 관련된 기술을 통해 개선해 나가는것이 좋습니다.

> [!NOTE]
>
> 당신은 당신이 당신의 자신의 파일을 생성 할 수 있는 기능이 없는 컴퓨터 / 태블릿 / 다른 장치에서 작업하는 경우, 당신은 [JSBin](https://jsbin.com/) 또는 [Glitch](https://glitch.com/) 같은 온라인 코딩 프로그램에서 코드 예제의 대부분을 테스트 할 수 있습니다.

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

- [Learn Accessible Web Design](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>_MDN Curriculum partner_</sup>
  - : [Scrimba's](https://scrimba.com?via=mdn) _Learn Accessible Web Design_ course teaches you how to write accessible HTML by solving interactive coding challenges and fixing a real-world website.
- [Start Building Accessible Web Applications Today](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : An excellent series of video tutorials by Marcy Sutton.
- [Deque University resources](https://dequeuniversity.com/resources/)
  - : Includes code examples, screen reader references, and other useful resources.
- [WebAIM resources](https://webaim.org/resources/)
  - : Includes guides, checklists, tools, and more.
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)
  - : Includes a list of web accessibility evaluation tools.
