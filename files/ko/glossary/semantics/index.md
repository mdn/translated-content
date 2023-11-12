---
title: Semantics
slug: Glossary/Semantics
---

프로그래밍에서,**시맨틱**은 코드 조각의 *의미*를 나타냅니다 — 예를 들어 ("이게 어떻게 시각적으로 보여질까?" 보다)"이 Javascript 라인을 실행하는 것은 어떤 효과가 있는가?", 혹은 "이 HTML 엘리먼트가 가진 목적이나 역할은 무엇인가?"

## JavaScript 시맨틱

JavaScript의 경우입니다. `textContent` 문자열을 매개변수로 하고 {{htmlelement("li")}} 요소를 반환하는 함수를 생각해봅시다. 코드 볼 때, 함수를 `build('Peach')` 로 부르거나 `createLiWithContent('Peach')` 부르는 것 중 어느 것이 이 함수의 기능 파악하기에 쉬울까요?

## CSS 시맨틱

CSS의 경우입니다. 다양한 종류의 과일을 나타내기 위해서는 리스트 태그 `li` 가 있다고 가정해봅시다. `div> ul> li` 와 `.fruits__item` 둘 중 어떤 것이 어떤 DOM부분이 선택되었는지 잘 알려줄까요?

## HTML 시맨틱

예를 들어 HTML에서는 {{htmlelement("h1")}} 은 시맨틱 요소입니다. "이 페이지에서 최상위 제목" 인 텍스트를 감싸는 역할(또는 의미)를 나타냅니다.

```html
<h1>This is a top level heading</h1>
```

기본적으로 대부분의 브라우저의 [사용자 에이전트 스타일시트](/ko/docs/Web/CSS/Cascade#User-agent_stylesheets) {{htmlelement("h1")}} 가 제목(heading) 처럼 _보이도록_ 큰사이즈 폰트로 스타일을 만듭니다(당신이 원하는 대로 스타일을 바꿀 수도 있지만요).

반면에 모든 요소를 '최상위 제목'처럼 _보이게_ 할 수 있습니다. 다음을 고려하세요:

```html
<span style="font-size: 32px; margin: 21px 0;"
  >Is this a top level heading?</span
>
```

이렇게 하면 top level heading 처럼 보이지만 의미적 가치(semantic value)가 없으므로 위에서 설명한 것처럼 추가적인 이점은 얻을 수 없습니다. 따라서 작업에 적합한 HTML 요소를 사용하는 것이 좋습니다.

HTML은 채워질 *데이터*를 나타내도록 코딩해야합니다. 기본 프리젠테이션 스타일기반이 아니라요. 프레젠테이션(어떻게 보여져야만 하는가)은 [CSS](/ko/docs/Web/CSS)만의 단독 역할입니다.

의미론적인 마크업을 사용하면 아래와 같은 이점이 있습니다:

- 검색 엔진은 의미론적 마크업 을 페이지의 검색 랭킹에 영향을 줄 수 있는 중요한 키워드로 간주합니다 ({{glossary ( "SEO")}} 참조).
- 시각 장애가 있는 사용자가 화면 판독기로 페이지를 탐색할 때 의미론적 마크업을 푯말로 사용할 수 있습니다.
- 의미없고 클래스 이름이 붙여져있거나 그렇지 않은 끊임없는 `div` 들을 탐색하는 것보다, 의미있는 코드 블록을 찾는 것이 훨씬 쉽습니다.
- 개발자에게 태그 안에 채워질 데이터 유형을 제안합니다
- 의미있는 이름짓기(Semantic naming)는 적절한 사용자 정의 요소 / 구성 요소의 이름짓기(namimg)를 반영합니다.

사용할 마크업에 접근할 때 스스로에게 물어보세요. "내가 채울 데이터를 가장 잘 설명하고 나타내는 요소는 무엇일까?" 예를 들어, 그 데이터는 정렬된 목록입니까? 정렬되지 않은 목록입니까?, 관련된 정보가 제외된 섹션이 있는 아티클(article)입니까?, 정의의 나열입니까?, 캡션이 필요한 그림 또는 이미지입니까?, 사이트 전체 머리글(header) 및 바닥글(footer) 외에 또 다른 머리글과 바닥글이 있어야합니까? 등등

## 의미론적 요소(element)들

사용가능한 백 여개 정도의 요소([elements](/ko/docs/Web/HTML/Element))들이 있습니다.

- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("details")}}
- {{htmlelement("figcaption")}}
- {{htmlelement("figure")}}
- {{htmlelement("footer")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("mark")}}
- {{htmlelement("nav")}}
- {{htmlelement("section")}}
- {{htmlelement("summary")}}
- {{htmlelement("time")}}

## Learn more

- [HTML element reference](/ko/docs/Web/HTML/Element#Inline_text_semantics) on MDN
- [Using HTML sections and outlines](/ko/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Problems_solved_by_HTML5) on MDN
- [Semantics](<https://en.wikipedia.org/wiki/Semantics_(computer_science)>) on Wikipedia
