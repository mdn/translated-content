---
title: "CSS: Cascading Style Sheets"
slug: Web/CSS
---

{{CSSRef}}

**Cascading Style Sheets**(**CSS**)는 [HTML](/ko/docs/Web/HTML)이나
[XML](/ko/docs/Web/XML)(XML의 방언인 [SVG](/ko/docs/Web/SVG),
[XHTML](/ko/docs/Glossary/XHTML) 포함)로 작성된 문서의 표시 방법을 기술하기 위한
[스타일 시트](/ko/docs/Web/API/StyleSheet) 언어입니다. CSS는 요소가 화면, 종이, 음성이나 다른 매체 상에
어떻게 렌더링되어야 하는지 지정합니다.

CSS는 **오픈 웹**의 핵심 언어 중 하나이며, [W3C 명세](https://w3.org/Style/CSS/#specs)가 다양한
브라우저의 표준으로 작동하고 있습니다. 과거에는 CSS 명세의 다양한 부분을 순차적으로 개발했으므로 CSS1, CSS2.1,
CSS3처럼 버전을 붙이는 것이 가능했습니다. 그러나 공식 버전이 CSS4로 올라가지는 않을 것입니다.

CSS3 이후, CSS 명세의 범위가 엄청나게 넓어짐에 따라 여러 CSS 모듈 사이의 차이도 너무나 커졌습니다. 그래서 이제는
[권고안을 모듈별로 개발하고 공개](https://www.w3.org/Style/CSS/current-work)하는 것이 더 효과적인
상황입니다. 이제 W3C는 CSS 명세의 버전을 올리지 않고, 대신 주기적으로
[CSS 명세 안정판](https://www.w3.org/TR/css/)의 스냅샷을 생성하고 있습니다.

## 중요한 자료

- CSS 소개
  - : 웹 개발이 처음이시라면 [CSS 기본](/ko/docs/Learn/Getting_started_with_the_web/CSS_basics) 문서에서 CSS란
    무엇인지, 그리고 CSS의 사용법을 배워보세요.
- CSS 자습서
  - : MDN의 [CSS 학습지](/ko/docs/Learn/CSS)는 기초 수준부터 숙련 레벨까지, 모든 기초를 망라하는 방대한
    자습서를 포함하고 있습니다.
- CSS 참고서
  - : MDN의 [CSS 전체 참고서](/ko/docs/Web/CSS/Reference)는 숙련된 개발자를 위해 CSS의 모든 속성과 개념의
    설명을 제공합니다.

> **알림:** #### 프런트엔드 웹 개발자가 되고자 하시나요?목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.[**시작하기**](/ko/docs/Learn/Front-end_web_developer)

## 자습서

MDN [CSS 학습지](/ko/docs/Learn/CSS)는 CSS를 처음부터 알려주는 모듈로 구성되어 있습니다. 사전 지식도
필요하지 않습니다.

- [CSS 첫걸음](/ko/docs/Learn/CSS/First_steps)
  - : CSS(Cascading Style Sheets)는 웹 페이지에 스타일과 레이아웃을 적용할 때 사용합니다. 예시를 몇 가지 들자면 글꼴,
    색상, 크기를 조절하고, 콘텐츠의 간격을 조정하고, 페이지를 여러개의 열로 나누고, 애니메이션 등 장식을 추가할 수도
    있습니다. 이 모듈에서는 CSS의 기본적인 작동 원리와 구문의 생김새, HTML에 실제로 적용하는 법을 배우면서 다음 과정으로
    가는 길을 닦습니다.
- [CSS의 구성 블록](/ko/docs/Learn/CSS/Building_blocks)

  - : 이 모듈은 [CSS 첫걸음](/ko/docs/Learn/CSS/First_steps)이 끝난 곳부터 시작합니다. 이제 언어와 구문에
    익숙해졌고, 기본적인 사용법도 익혀봤으니 약간 더 깊게 들어갈 차례입니다. 이 모듈에서는 종속과 상속, 사용할 수 있는
    모든 선택자 유형, 단위와 크기, 배경과 테두리 스타일, 디버깅 등등 많은 것을 알아봅니다.

    여기의 목표는 여러분이 훌륭한 CSS를 작성할 수 있도록 도구를 제공하고,
    [텍스트 스타일링](/ko/docs/Learn/CSS/Styling_text)나
    [CSS 레이아웃](/ko/docs/Learn/CSS/CSS_layout)처럼 더 상세한 주제로 들어가기 전에 알고 있어야 할 필수
    이론을 익히는 것입니다.

- [텍스트 스타일링](/ko/docs/Learn/CSS/Styling_text)
  - : CSS 언어 기초를 다뤘으니, 다음 주제는 대표적인 CSS의 영역인 텍스트 스타일링에 집중합니다. 여기서는 글꼴 설정, 굵기,
    기울임꼴, 행간과 자간, 그림자 등 다양한 텍스트 기능을 배웁니다. 그 후 사용자 지정 글꼴을 페이지에 적용하는 법,
    그리고 리스트와 링크 스타일로 모듈을 마무리합니다.
- [CSS 레이아웃](/ko/docs/Learn/CSS/CSS_layout)
  - : 여기까지 왔으면 이미 CSS 기초, 텍스트 스타일링, 그리고 콘텐츠가 들어갈 박스를 조작하고 스타일을 적용하는 법을
    다뤘으니, 이번엔 박스를 뷰포트나 다른 박스에 상대적인 위치에 원하는 대로 배치하는 법을 알아봅니다. 필요한 사전
    지식은 모두 학습했으니 서로 다른 `display` 설정과 플렉스박스, CSS 그리드처럼 최신 레이아웃 방식, 위치
    조정처럼 CSS 레이아웃을 더 자세히 살펴보겠습니다. 마지막으로, 오래됐지만 여전히 알고 있으면 도움이 될만한 레이아웃
    방법도 몇 가지 둘러봅니다.
- [일반적인 CSS 문제 해결하기](/ko/docs/Learn/CSS/Howto)
  - : 이 모듈은 웹 페이지를 만들 때의 일반적인 문제를 CSS를 사용해서 해결하는 법을 설명합니다.

## 참고서

- [CSS 참고서](/ko/docs/Web/CSS/Reference): 숙련된 웹 개발자를 위해 CSS의 모든 속성과 개념을 설명합니다.
- CSS 핵심 개념

  - [언어 구문과 형태](/ko/docs/Web/CSS/Syntax)
  - [명시도](/ko/docs/Web/CSS/Specificity), [상속](/ko/docs/Web/CSS/inheritance),
    [종속](/ko/docs/Web/CSS/Cascade)
  - [CSS 단위와 값](/ko/docs/Web/CSS/CSS_Values_and_Units),
    [CSS 함수 표기법](/ko/docs/Web/CSS/CSS_Functions)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)과
    [여백 상쇄](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - [컨테이닝 블록](/ko/docs/Web/CSS/Containing_block)
  - [쌓임 맥락](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)과
    [블록 서식 맥락](/ko/docs/Web/Guide/CSS/Block_formatting_context)
  - [초기 값](/ko/docs/Web/CSS/initial_value), [계산 값](/ko/docs/Web/CSS/computed_value),
    [사용 값](/ko/docs/Web/CSS/used_value), [실제 값](/ko/docs/Web/CSS/actual_value)
  - [CSS 단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [CSS 플렉스박스 레이아웃](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout)
  - [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_Grid_Layout)
  - [CSS 선택자](/ko/docs/Web/CSS/CSS_Selectors)
  - [미디어 쿼리](/ko/docs/Web/CSS/Media_Queries)
  - [애니메이션](/ko/docs/Web/CSS/animation)

## 쿡북

[CSS 레이아웃 쿡북](/ko/docs/Web/CSS/Layout_cookbook)은 여러분의 웹 사이트에서도 사용할 일이 생길지 모르는,
흔히 쓰이는 레이아웃 패턴을 모아놓은 문서입니다. 프로젝트에서 사용할 기초 코드에 더해, 레이아웃 명세를 사용하는 각기
다른 방법과 개발자로서 결정할 수 있는 선택지도 제공합니다.

## CSS 개발 도구

- CSS가 유효한지 검사하는
  [W3C CSS Validation 서비스](http://jigsaw.w3.org/css-validator/). 매우 유용한 디버깅 도구입니다.
- [Firefox 개발자 도구](/ko/docs/Tools)를 사용하면 [검사기](/ko/docs/Tools/Page_Inspector)와
  [스타일 편집기](/ko/docs/Tools/Style_Editor)를 통해 페이지의 CSS를 살펴보고, 실시간으로 편집할 수
  있습니다.
- Firefox의 [Web Developer 확장](https://addons.mozilla.org/ko/firefox/addon/web-developer/)을 사용해서
  주시하는 사이트의 CSS를 추적하고 실시간으로 편집할 수 있습니다.
- 웹 커뮤니티에서는 [다른 여러 가지 CSS 도구](/ko/docs/Web/CSS/Tools)도 만들었습니다.

## 같이 보기

- [CSS 데모](/ko/docs/Web/Demos_of_open_web_technologies#CSS): 최신 CSS 기술을 사용한 데모를 탐색하며
  영감을 얻어보세요.
- CSS를 많이 적용하는 웹 언어: [HTML](/ko/docs/Web/HTML), [SVG](/ko/docs/Web/SVG),
  [XHTML](/ko/docs/Glossary/XHTML), [XML](/ko/docs/Web/XML)
- [Stack Overflow의 CSS 질문 목록](https://stackoverflow.com/questions/tagged/css)
