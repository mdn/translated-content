---
title: 접근성
slug: Web/Accessibility
tags:
  - Accessibility
  - Landing
translation_of: Web/Accessibility
---

웹 개발에서의 **접근성**은 사람들의 능력이 어느 정도 제한되어 있더라도, 가능한 많은 사람이 웹사이트를 사용 할 수 있도록 하는 것 입니다.

많은 사람에게, 기술은 일을 더 쉽게 만들어줍니다. 장애를 가진 사람들에게, 기술은 일을 가능하게 만들어줍니다. 접근성은 개인의 신체적, 인지적 능력 및 웹에 접근하는 방법과 관계없이 가능한 한 접근할 수 있도록 콘텐츠를 개발하는 것을 의미합니다.

"웹은 사람들의 하드웨어, 소프트웨어, 언어, 문화, 장소, 혹은 신체적 물리적 능력과 관계없이 **모든 사람을 위해 작동하도록 설계되었습니다**. 웹이 이 목표를 달성할 때, 다양한 범위의 청각, 움직임, 시각, 그리고 인지 능력을 가진 사람들이 웹에 접근할 수 있습니다." ([W3C - 접근성](https://www.w3.org/standards/webdesign/accessibility))

## 주요 자습서

MDN은(는) [접근성 학습 영역](/ko/docs/Learn/Accessibility) 접근성에 대한 현대적이고 최신의 자습서를 포함하고 있습니다:

- [접근성이란 무엇입니까?](/ko/docs/Learn/Accessibility/What_is_accessibility)
  - : 이 글은 접근성이 실제로 무엇인지 자세히 살펴보는 것으로 모듈을 시작하며 - 여기에는 우리가 고려해야 하는 그룹의 사람들과 그 이유, 웹과 상호작용하기 위해 다른 사람들이 사용하는 도구, 그리고 접근성을 웹 개발 워크플로우의 일부로 어떻게 만들 수 있는지가 포함됩니다.
- [HTML: 접근성을 위한 좋은 기반](/ko/docs/Learn/Accessibility/HTML)
  - : 올바른 HTML 요소가 항상 올바른 목적으로 사용되는지 확인하는 것만으로도 웹 콘텐츠로 접근성을 만들 수 있습니다. 이 글에서 HTML이 최대 접근성을 보장하기 위해 어떻게 사용될 수 있는지 자세히 살펴봅니다.
- [CSS 그리고 JavaScript 접근성 모범 사례](/ko/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS와 JavaScript 또한 적절하게 사용될 경우 접근 가능한 웹 경험을 허용할 수 있는 잠재력을 가지고 있습니다 ... 혹은 잘못 사용하면 접근성을 크게 해칠 수 있습니다. 이 글에서는 복잡한 콘텐츠도 최대한 접근 할 수 있도록 하기 위해 고려해야 하는 몇 가지 CSS 및 JavaScript 모범 사례에 대해 윤곽을 잡습니다.
- [WAI-ARIA 기초](/ko/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : 이전 글에 따르면, 때때로 의미 없는 HTML과 동적 JavaScript 업데이트 콘텐츠를 포함하는 복잡한 UI 컨트롤을 만드는 것은 어려울 수 있습니다. WAI-ARIA은(는) 브라우저와 보조 기술이 인식하여 사용자에게 무슨 일이 일어나고 있는지 알리기 위해 사용할 수 있는 추가적인 의미를 추가함으로써 그러한 문제를 도와줄 수 있는 기술입니다. 여기서는 기본 수준에서 이 기능을 사용하여 접근성을 향상하는 방법을 보여 줍니다.
- [접근 가능한 멀티미디어](/ko/docs/Learn/Accessibility/Multimedia)
  - : 접근성 문제를 일으킬 수 있는 또 다른 콘텐츠 범주는 멀티미디어입니다 — 비디오, 오디오 및 이미지 콘텐츠는 보조 기술과 사용자에 의해 이해될 수 있도록 적절한 텍스트 대안이 제공되어야 합니다. 이 글은 어떻게 하는지 보여줍니다.
- [모바일 접근성](/ko/docs/Learn/Accessibility/Mobile)
  - : 모바일에서의 웹 접근이 더욱더 대중적으로 되고, iOS 및 Android와 같은 인기 플랫폼이 완전한 접근성 도구를 가지게 됨에 따라, 이러한 플랫폼에서 웹 콘텐츠의 접근성을 고려하는 것은 중요합니다. 이 문서에서는 모바일에 특화된 접근 고려 사항에 대해서 살펴봅니다.

## 기타 문서

- [웹 콘텐츠 접근성 지침 이해하기](/ko/docs/Web/Accessibility/Understanding_WCAG)
  - : 이 문서는 W3C 웹 콘텐츠 접근성 가이드라인 2.0(WCAG 2.0 또는 WCAG, 이 글의 목적상)에 기입된 권장 요약 사항을 준수하기 위해 취해야 할 단계를 이해하는 데 도움이 되는 빠른 예제를 제공합니다.
- [색상 및 접근성 소개](/ko/docs/Web/Accessibility/Understanding_Colors_and_Luminance)
  - : 이 글에서는 빛과 색에 대한 우리의 인식을 논하고, 접근하기 쉬운 디자인에 색을 사용하는 기초를 제공하며, 시각적이고 읽을 수 있는 콘텐츠에 대한 모범 사례를 보여줍니다.
- [키보드 탐색 가능한 JavaScript 위젯](/ko/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
  - : 지금까지 스타일링 된 &lt;div&gt; 및 &lt;span&gt; 기반의 접근하기 쉬운 위젯들을 만들고자 하는 웹 개발자들은 적절한 기술이 부족했습니다. **키보드 접근성**은 개발자가 인지해야 할 최소 접근성 요구사항의 일부입니다.
- [ARIA](/ko/docs/Web/Accessibility/ARIA)
  - : ARIA를 사용하여 HTML 문서를 더 접근성 있게 만들 방법을 학습하는 글 모음입니다.
- [모바일 접근성 점검표](/ko/docs/Web/Accessibility/Mobile_accessibility_checklist)
  - : 이 문서는 모바일 앱 개발자를 위한 접근성 요구 사항에 대한 간단한 체크리스트를 제공합니다.
- [인지 접근성](/ko/docs/Web/Accessibility/Cognitive_accessibility)
  - : 웹 콘텐츠를 만들 때, 인지 장애가 있는 사람이 웹 콘텐츠에 접근할 수 있도록 하는 방법을 숙지해야 합니다.
- [발작 장애에 대한 접근성](/ko/docs/Web/Accessibility/Seizure_disorders)
  - : 어떤 종류의 시각적 웹 콘텐츠는 특정 뇌 질환을 가진 사람들에게 발작을 일으킬 수 있습니다. 문제가 될 수 있는 콘텐츠 유형을 이해하고, 이러한 문제를 방지할 수 있는 도구와 전략을 찾습니다.

## 함께 보기

- [WAI Interest Group](https://www.w3.org/WAI/IG/)
- [개발자 가이드](/ko/docs/Web/Guide)
- [접근성 그리고 Mozilla](/ko/docs/Mozilla/Accessibility)
