---
title: 접근성
slug: Web/Accessibility
---

{{AccessibilitySidebar}}

웹 개발에서의 **접근성**(종종 **A11y**로 축약됨 - "a"와 "y" 사이에 11개의 글자가 있다는 의미)은 사람들의 능력이 어느 정도 제한되어 있더라도, 가능한 많은 사람이 웹사이트를 사용 할 수 있도록 보장하는 것 입니다.

많은 사람에게, 기술은 많은 것을 더 쉽게 만들어줍니다. 장애를 가진 사람들에게, 기술은 여러 일을 가능하게 만들어줍니다. 접근성은 개인의 신체적, 인지적 능력 및 웹을 이용하는 방법과 관계없이 가능한 한 접근하기 쉬운 콘텐츠를 개발하는 것을 의미합니다.

"웹은 사람들의 하드웨어, 소프트웨어, 언어, 문화, 장소, 혹은 신체적 및 물리적 능력과 관계없이 **모든 사람을 위해 작동하도록 설계되었습니다**. 웹의 이러한 목표가 달성될 때, 다양한 범위의 청각, 움직임, 시각, 그리고 인지 능력을 가진 사람들이 웹에 보다 쉽게 접근할 수 있습니다." ([W3C - 접근성](https://www.w3.org/standards/webdesign/accessibility))

## 주요 자습서

MDN의 [접근성 학습 공간](/ko/docs/Learn/Accessibility)은 다음의 접근성 필수 사항을 다루는 최신 자습서를 포함하고 있습니다:

- [접근성이란 무엇입니까?](/ko/docs/Learn/Accessibility/What_is_accessibility)
  - : 이 글은 접근성이 실제로 무엇인지 자세히 살펴보는 것으로 모듈을 시작합니다. 여기에는 우리가 고려해야 하는 사용자 그룹과 그 이유, 웹과 상호작용하기 위해 다른 사람들이 사용하는 도구, 그리고 웹 개발 워크플로우에 접근성을 포함할 수 있는 방법 등에 대한 설명도 포함됩니다.
- [HTML: 접근성을 위한 좋은 기초](/ko/docs/Learn/Accessibility/HTML)
  - : 올바른 HTML 요소가 항상 제대로 사용되고 있는지 확인하는 것만으로도 웹 콘텐츠로 접근성을 만들 수 있습니다. 이 글에서는 접근성을 최대한 보장하는 HTML 사용법을 자세히 살펴봅니다.
- [CSS 그리고 JavaScript 접근성 모범 사례](/ko/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS와 JavaScript 역시 올바르게 사용하면 접근성 높은 웹 경험을 제공할 수 있습니다. 하지만 이와 동시에 잘못 사용하면 접근성을 크게 해칠 수 있습니다. 이 글에서는 복잡한 콘텐츠의 접근성 보장을 위해 고려해야 하는 몇 가지 CSS 및 JavaScript 모범 사례를 간략하게 설명합니다.
- [WAI-ARIA 기초](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : 이전 글에 이어, 의미 없는 HTML과 동적 자바스크립트로 업데이트되는 콘텐츠가 포함된 복잡한 UI 컨트롤에 접근성을 보장하는 것은 때때로 쉽지 않을 수 있습니다. 이러한 문제는 WAI-ARIA의 도움을 받을 수 있는데 이는 브라우저 및 보조 기술이 인식할 수 있는 추가적인 의미를 제공함으로써 사용자에게 무슨 일이 일어나고 있는지 알리는 기술입니다. 이 글에서는 접근성 개선을 위해 이를 사용할 수 있는 기본적인 방법을 다룹니다.
- [접근 가능한 멀티미디어](/ko/docs/Learn/Accessibility/Multimedia)
  - : 접근성 문제를 일으킬 수 있는 또 다른 콘텐츠 범주는 비디오, 오디오 및 이미지 등의 멀티미디어입니다. 이러한 콘텐츠는 보조 기술과 사용자에 의해 이해될 수 있도록 적절한 텍스트 대체제를 제공해야 합니다. 이 글에서는 그 방법을 설명합니다.
- [모바일 접근성](/ko/docs/Learn/Accessibility/Mobile)
  - : 모바일 기기를 통한 웹 접근이 매우 대중화되며 iOS 및 Android와 같은 인기 플랫폼은 본격적인 접근성 도구들을 제공함과 더불어 모바일 기기에서의 웹 콘텐츠 접근성은 더욱 중요하게 고려되고 있습니다. 이 문서에서는 모바일에 특화된 접근성 고려 사항을 살펴봅니다.

## 기타 문서

- [웹 콘텐츠 접근성 지침 이해하기](/ko/docs/Web/Accessibility/Understanding_WCAG)
  - : 이 문서는 W3C 웹 콘텐츠 접근성 가이드라인 2.0(이 글의 목적상, WCAG 2.0 또는 WCAG)에 요약된 권장 사항 준수를 위해 수행해야 하는 단계를 이해하는 데 도움이 되는 간단한 예제를 제공합니다.
- [색상 및 접근성 소개](/ko/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : 이 글에서는 빛과 색에 대한 우리의 인식을 다루고, 접근성을 보장하는 디자인이 사용하는 색의 기초를 제공하며, 시각적이고 가독성이 있는 콘텐츠에 대한 모범 사례를 보여줍니다.
- [키보드 탐색 가능한 JavaScript 위젯](/ko/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : 지금까지는 웹 개발자들이 스타일이 지정된 &lt;div&gt; 및 &lt;span&gt; 을 사용하여 위젯을 만들 때, 접근성을 보장하는 적절한 기술을 찾기가 어려웠습니다. **키보드 접근성**은 개발자가 알아야 할 최소한의 접근성 요구사항의 일부입니다.
- [ARIA](/ko/docs/Web/Accessibility/ARIA)
  - : ARIA를 사용하여 HTML 문서를 보다 더 접근성 있게 만들 방법을 학습하는 글 모음입니다.
- [모바일 접근성 점검표](/ko/docs/Web/Accessibility/Mobile_accessibility_checklist)
  - : 이 문서는 모바일 앱 개발자를 위한 접근성 요구 사항에 대한 간단한 체크리스트를 제공합니다.
- [인지 접근성](/ko/docs/Web/Accessibility/Cognitive_accessibility)
  - : 웹 콘텐츠를 만들 때, 인지 장애가 있는 사람이 웹 콘텐츠에 접근할 수 있도록 하는 방법을 숙지해야 합니다.
- [발작 장애에 대한 접근성](/ko/docs/Web/Accessibility/Seizure_disorders)
  - : 어떤 종류의 시각적 웹 콘텐츠는 특정 뇌 질환을 가진 사람들에게 발작을 일으킬 수 있습니다. 문제가 될 수 있는 콘텐츠 유형을 이해하고, 이러한 문제를 방지할 수 있는 도구와 전략을 찾습니다.

## 함께 보기

- [WAI Interest Group](https://www.w3.org/WAI/IG/)
- [개발자 가이드](/ko/docs/Web/Guide)
