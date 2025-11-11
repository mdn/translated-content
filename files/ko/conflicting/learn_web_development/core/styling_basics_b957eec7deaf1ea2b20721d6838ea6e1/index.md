---
title: CSS를 이용한 HTML 스타일링 익히기
slug: conflicting/Learn_web_development/Core/Styling_basics_b957eec7deaf1ea2b20721d6838ea6e1
original_slug: Learn/CSS
---

{{LearnSidebar}}

{{glossary("CSS")}}(Cascading Stylesheets – 종속형 스타일시트)는 {{glossary("HTML")}}을 익힌 후 가장 먼저 배워야할 웹기술입니다. HTML이 콘텐츠의 구조와 의미를 정의하는 반면 CSS는 스타일과 레이아웃을 지정합니다. 예를 들어, CSS를 사용하면 콘텐츠의 글꼴, 색상, 크기 및 간격을 변경하거나, 여러 개의 열로 분할하거나, 애니메이션이나 기타 장식 효과를 추가할 수 있습니다.

## 학습 경로

CSS에 도전하기 전에 HTML의 기초를 익혀야 합니다. 먼저 [HTML 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content)를 진행하면서 다음을 익히시는게 좋습니다.

- [CSS 소개](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics)부터 시작하는 CSS
- 고급 [HTML 주제](/ko/docs/Learn_web_development/Core/Structuring_content#구성)
- [JavaScript](/ko/docs/conflicting/Learn_web_development/Core/Scripting_41cf930b8cfd2b83c76f8086a5e24792) 및 웹페이지에 동적 기능을 추가하는 법

HTML의 기본 원리를 이해하고 나면, HTML과 CSS 사이를 왕복하며 동시에 학습하는걸 추천드립니다. HTML은 CSS를 활용할 때 훨씬 흥미롭고 재미있으며, HTML을 모르고는 CSS를 제대로 배울 수 없기 때문입니다.

이 주제를 시작하기 전에, 컴퓨터의 사용법과 웹을 둘러보는 일이 익숙해야 합니다. [기본 소프트웨어 설치하기](/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software)에서 설명하는 기본적인 작업 환경을 갖춰야 하고, [파일 다루기](/ko/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)에서 설명하는 파일 생성 및 관리도 이해해야 합니다. 두 안내서 모두 처음 시작하는 분을 위한 [Web과 함께 시작하기](/ko/docs/Learn_web_development/Getting_started/Your_first_website)의 일부분이죠.

본 주제를 시작하기 전에 [Web과 함께 시작하기](/ko/docs/Learn_web_development/Getting_started/Your_first_website)를 먼저 해보시는게 좋겠습니다. 그러나 CSS 기초 글에서 다루는걸 여기 [CSS 소개](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics)에서 훨씬 상세하게 다루므로 필수는 아닙니다.

## 구성

아래는 추천 순서로 정렬한 본 주제의 구성입니다. 첫 항목부터 시작하세요.

- [CSS 소개](/ko/docs/conflicting/Learn_web_development/Core/Styling_basics)
  - : CSS 작동 원리에 대한 기초로, 선택자와 속성, CSS 규칙을 쓰는 법, HTML에 적용하기, 길이나 색상 등 단위를 특정하는 법, 종속과 상속, 박스 모델의 기초, CSS 디버그 등을 다룹니다.
- [텍스트 스타일링](/ko/docs/Learn_web_development/Core/Text_styling)
  - : 여기서 글꼴, 굵기 및 기울임꼴, 줄과 문자 간격, 그림자 및 기타 텍스트 기능 설정을 비롯한 텍스트 스타일링 기본 사항을 살펴 봅니다. 페이지에 맞춤 글꼴을 적용하거나 목록 및 링크에 스타일을 적용할 수도 있습니다.
- [박스 스타일링](/ko/docs/Learn_web_development/Core/Styling_basics)
  - : 다음으로 웹페이지 레이아웃을 위한 기본 단계 중 하나인 박스 스타일링을 살펴 봅니다. 먼저 박스 모델을 다시 요약하여 설명한 후, 내부 여백(padding), 테두리(borders) 및 외부 여백(margins)을 설정하거나 사용자 지정 배경색, 이미지 및 기타 기능을 설정하고, 박스에 그림자나 필터와 같은 멋진 기능을 설정하는 등 상자 레이아웃을 제어하는 법을 알아봅니다.
- [CSS 레이아웃](/ko/docs/Learn_web_development/Core/CSS_layout)
  - : 이 시점에서 이미 CSS 기초, 텍스트 스타일링 및 콘텐트가 포함된 박스의 스타일링 및 조작을 살펴보았습니다. 이제는 박스를 뷰포트(viewport) 또는 다른 박스와 관련하여 올바른 위치에 배치하는 방법을 살펴볼 시간입니다. 필요한 사전 요구 사항을 포함하여, CSS 레이아웃, 디스플레이(display) 속성의 다양한 설정, 플로트(float) 및 위치 지정(positioning)과 관련된 기존 레이아웃 방식과 더불어 유동적 박스(flexbox) 같은 새롭고 놀라운 레이아웃 도구를 깊게 살펴봅니다.
- 반응형 디자인 (TBD)
  - : 요즘은 다양한 장치로 웹을 탐색하기 때문에 [반응형 웹 디자인](/ko/docs/Web/Progressive_web_apps)(RWD; Responsive Web Design)은 핵심적인 웹 개발 기술이 되었습니다. 이 모듈에서는 반응형 웹 디자인의 기본 원칙과 도구들을 다루며, 화면 너비, 방향, 해상도와 같은 장치 특성에 따라 다른 CSS를 적용하는 방법을 설명합니다. 그리고 이런 특성에 따라 다양한 비디오와 이미지를 제공할 수 있게 하는 기술을 탐구합니다.

## CSS로 일상적인 문제 해결하기

[CSS를 사용하여 일반적인 문제 해결하기](/ko/docs/Learn_web_development/Howto/Solve_CSS_problems)는 웹페이지를 만들 때의 매우 흔한 문제들을 CSS를 사용해 해결하는 방법을 살펴보는 섹션들의 링크를 제공합니다.

시작부터 가장 많이 하게 되는 일은 HTML 요소들(elements)의 색상과 배경색을 지정하고, 크기나 모양 또는 위치를 변경하고, 테두리(borders)를 정의하고 추가하는 일입니다. 하지만 일단 CSS의 기초에 대해 확실하게 이해만 하면 못하는 일이 거의 없게 됩니다. CSS 학습의 장점 중 하나는 잘 모르는 것에 대해서도 일단 기초만 익혀두면 무엇을 할 수 있고 무엇을 할 수 없는지를 꽤 정확하게 느낄 수 있다는 것입니다!

## 더 알아보기

- [MDN의 CSS](/ko/docs/Web/CSS)
  - : MDN의 CSS 문서 목록에 대한 주 진입 지점입니다. CSS 언어의 모든 기능에 대한 자세한 참조 문서 목록을 찾을 수 있습니다. 혹시 속성(property)이 가질 수 있는 모든 값(values)에 대한 정보가 필요한가요? 그렇다면 이곳으로 이동하세요.
