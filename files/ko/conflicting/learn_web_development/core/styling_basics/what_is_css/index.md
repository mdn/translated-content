---
title: CSS 란 무엇인가?
slug: conflicting/Learn_web_development/Core/Styling_basics/What_is_CSS
original_slug: Learn/CSS/First_steps/What_is_CSS
l10n:
  sourceCommit: 45268b07c84a04b45d46bcdf104e2b33be00adcf
---

{{LearnSidebar}}

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**{{Glossary("CSS")}}** (Cascading Style Sheets) 를 사용하면 멋진 웹 페이지를 만들 수 있지만, 어떻게 작동할까요? 이 기사에서는 간단한 구문 예제를 통해 CSS가 무엇인지 설명하고 CSS에 대한 몇 가지 주요 용어를 다룹니다.

| 전제조건: | 컴퓨터 기본 활용 능력, [기본 소프트웨어 설치](/ko/docs/Learn/Getting_started_with_the_web/Installing_basic_software), [파일 작업](/ko/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files) 에 대한 기본 지식 및 HTML 기본 사항 ([HTML 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content) 학습) |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **목적:** | CSS가 무엇인지 배우기.                                                                                                                                                                                                                                                                             |

[HTML 소개](/ko/docs/conflicting/Learn_web_development/Core/Structuring_content)단원에서는 HTML이 무엇인지, 그리고 문서를 마크 업하는 데 사용되는 방법에 대해 설명했습니다. 이 문서는 웹 브라우저에서 읽을 수 있습니다. 제목은 일반 텍스트보다 크게 보이며, 단락은 줄바꿈이 되고 공백이 있습니다. 링크는 텍스트의 나머지 부분과 구분하기 위해 색상과 밑줄이 표시됩니다. 현재 보고 있는 것은 브라우저의 기본 스타일입니다. 페이지 작성자가 명시적인 스타일을 지정하지 않은 경우에도 기본적으로 읽을 수 있도록 브라우저가 HTML에 적용하는 매우 기본적인 스타일입니다.

![The default styles used by a browser](html-example.png)

그러나, 모든 웹 사이트가 그렇게 보인다면 웹은 지루한 곳이 될 것입니다. CSS를 사용하면 브라우저에서 HTML 요소의 모양을 정확하게 제어하고 원하는 디자인을 사용하여 마크 업을 표시할 수 있습니다.

브라우저/기본 스타일에 대한 자세한 내용은 다음 비디오를 확인하세요.

{{EmbedYouTube("spK_S0HfzFw")}}

## CSS 란 무엇입니까?

앞에서 언급했듯이, CSS는 사용자에게 문서를 표시하는 방법을 지정하는 언어입니다 — 스타일, 레이아웃 등.

**문서**는 일반적으로 마크 업 언어를 사용하여 구성된 텍스트 파일입니다 — {{Glossary("HTML")}} 이 가장 일반적인 마크 업 언어이지만, {{Glossary("SVG")}} 또는 {{Glossary("XML")}} 과 같은 다른 마크 업 언어를 사용할 수도 있습니다.

사용자에게 문서를 **제공 한다는 것** 은 대상이 사용 할 수 있는 형식으로 문서를 변환하는 것을 의미합니다. {{Glossary("browser","Browsers")}}, {{Glossary("Mozilla Firefox","Firefox")}}, {{Glossary("Google Chrome","Chrome")}} 또는 {{Glossary("Microsoft Edge","Edge")}} 는 컴퓨터 화면, 프로젝터 또는 프린터 등의 문서를 시각적으로 표시하도록 설계되었습니다.

> [!NOTE]
>
> 브라우저는 {{Glossary("User agent","사용자 에이전트")}} 라고도 하며, 기본적으로 컴퓨터 시스템 내부의 개인을 나타내는 컴퓨터 프로그램을 의미합니다.
> 브라우저는 CSS에 대해 이야기 할 때, 우리가 생각하는 주요 유형의 사용자 에이전트 이지만, 유일한 사용자 에이전트는 아닙니다.
> HTML 및 CSS 문서를 인쇄할 PDF로 변환하는 것과 같은 사용 가능한 다른 사용자 에이전트가 있습니다.

CSS 는 매우 기본적인 텍스트 문서 스타일링에 사용될 수 있습니다 — 예를 들어, 제목 및 링크의 [색상](/ko/docs/Web/CSS/color_value)과 [크기](/ko/docs/Web/CSS/font-size) 변경. 또한, 레이아웃을 만드는 데 사용 할 수 있습니다 — 예를 들어, [단일 텍스트 열을 변환](/ko/docs/Web/CSS/Layout_cookbook/Column_layouts) (기본 콘텐츠 영역과 관련 정보에 대한 사이드 바가 있는 레이아웃으로) 하는 등 레이아웃을 만드는 데 사용 할 수 있습니다. [애니메이션](/ko/docs/Web/CSS/CSS_animations) 과 같은 효과에도 사용 할 수 있습니다. 구체적인 예는 이 단락의 링크를 살펴보세요.

## CSS 구문

CSS는 규칙 기반 언어입니다 — 웹 페이지의 특정 요소 또는 요소 그룹에 적용할 스타일 그룹을 지정하는 규칙을 정의합니다.

예를 들어 페이지의 주요 제목을 큰 빨간색 텍스트로 표시되도록 결정할 수 있습니다.
다음 코드는 위에서 설명한 스타일을 실행 하는 매우 간단한 CSS 규칙을 보여줍니다.

```css
h1 {
  color: red;
  font-size: 5em;
}
```

- 위의 예시에서 CSS 규칙은 {{Glossary("CSS Selector", "선택자")}} 와 함께 열립니다. 스타일을 지정할 HTML 요소를 선택합니다. 이 경우 level 1 제목 ({{htmlelement("Heading_Elements", "h1")}}) 을 스타일링합니다.

- 그런 다음 중괄호 `{ }` 가 있습니다.
- 중괄호 안에는 **속성**과 **값** 쌍의 형태를 취하는 하나 이상의 **선언**이 있습니다. 콜론 앞에 속성(위의 예시에서 `color`)을 명시합니다. 그리고 콜론 뒤에 속성의 값(위의 예시에서는 `red`)을 명시합니다.
- 이 예시에는 `color`와 `font-size`라는 두가지 선언이 포함되어 있습니다. 각각의 쌍은 우리가 선택하려는 요소의 속성(이 경우 {{htmlelement("Heading_Elements", "h1")}})을 명시합니다. 그리고 해당 속성에 부여할 값을 지정합니다.

CSS {{Glossary("property/CSS","속성")}}은 지정되는 속성에 따라 허용되는 값이 다릅니다. 이 예제에서는 다양한 [색상 값](/ko/docs/Learn_web_development/Core/Styling_basics/Values_and_units#color) 을 사용 할 수 있는 `color` 속성이 있습니다. 또한 `font-size` 속성도 있습니다. 이 속성은 다양한 [크기 단위](/ko/docs/Learn_web_development/Core/Styling_basics/Values_and_units#numbers_lengths_and_percentages) 를 값으로 사용 할 수 있습니다.

CSS 스타일 시트에는 차례로 작성된 여러 규칙이 포함됩니다.

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

일부 값은 빨리 배운다는 것을 알게 될 것이고, 반면에 다른 값은 여러분이 찾아야 할 것입니다. MDN 의 개별 속성 페이지는 잊었을 때 또는 값으로 사용 할 수 있는 다른 것을 알고자 할 때 속성과 해당 값을 빠르게 찾을 수 있는 방법을 제공합니다.

> [!NOTE]
>
> MDN [CSS 참조](/ko/docs/Web/CSS/Reference) 에 나열된 모든 CSS 속성 페이지 (다른 CSS 기능과 함께) 에 대한 링크를 찾을 수 있습니다.
> 또는, CSS 기능에 대한 자세한 정보를 찾아야 할 때 마다, 자주 사용하는 검색 엔진에서 "mdn _css-feature-name_" 을 검색하는 데 익숙해야 합니다.
> 예를 들어, "mdn color" 및 "mdn font-size" 를 검색해 보십시오!

## CSS Modules

CSS를 사용하여 스타일을 지정할 수 있는 것이 너무 많으므로, 언어는 _module_ 로 분류됩니다. MDN 을 탐색할 때 이러한 module 에 대한 참조가 표시되면, 많은 설명서 페이지가 특정 module 을 중심으로 구성되어 있습니다. 예를 들어, [배경 및 테두리](/ko/docs/Web/CSS/CSS_backgrounds_and_borders) module 에 대한 MDN 참조를 통해 그 용도가 무엇이며, 그 용도에 포함된 다른 속성 및 기타 기능을 확인할 수 있습니다. 또한 기술을 정의하는 _CSS Specification_ 에 대한 링크를 찾을 수 있습니다 (아래 참조).

이 단계에서는 CSS가 어떻게 구성되어 있는지에 대해 너무 걱정할 필요가 없지만, 예를 들어 특정 속성이 다른 유사한 것들 중에서 발견될 가능성이 높기 때문에, 동일한 명세서에 있을 수 있다는 것을 알고 있다면 정보를 쉽게 찾을 수 있습니다.

구체적인 예를 들어, 배경 및 테두리 module 로 돌아가 보겠습니다 — 이 module 에서 [`background-color`](/ko/docs/Web/CSS/background-color) 및 [`border-color`](/ko/docs/Web/CSS/border-color) 속성을 정의하는 것이 논리적이라고 생각 할 수 있습니다. 당신이 옳을 겁니다.

### CSS Specifications

모든 웹 표준 기술 (HTML, CSS, JavaScript 등.) 은 표준 조직 ({{glossary("W3C")}}, {{glossary("WHATWG")}}, {{glossary("ECMA")}} 또는 {{glossary("Khronos")}} 와 같은) 이 게시한 명세서 (또는 단순히 "명세") 라는 거대한 문서로 정의됩니다. 그리고 해당 기술들이 어떻게 작동하는지 정확하게 정의합니다.

CSS는 다르지 않습니다 — W3C 내에서 [CSS Working Group](https://www.w3.org/Style/CSS/) 이라는 곳에서 개발 했습니다. 이 그룹은 브라우저 공급 업체 및 CSS에 관심이 있는 다른 회사의 대표로 구성됩니다. 독립적인 목소리로 행동하는 **_초청된 전문가_** 로 알려진 다른 사람들도 있습니다. 그들은 회원 조직에 연결되어 있지 않습니다.

새로운 CSS 기능은 CSS Working Group 에 의해 개발되거나 지정됩니다. 때로는 특정 브라우저가 일부 기능에 관심이 있기 때문에 웹 디자이너와 개발자가 기능을 요구하고, 때로는 실무 그룹 자체가 요구 사항을 식별했기 때문입니다. CSS는 지속적으로 개발 중이며 새로운 기능을 사용할 수 있습니다. 그러나 CSS의 중요한 점은 모든 사람이 오래된 웹 사이트를 망가뜨릴 수 있는 방식으로 변경하지 않도록 매우 열심히 노력한다는 것입니다. 현재 사용 가능한 제한된 CSS를 사용하여 2000년에 구축된 웹 사이트는 여전히 브라우저에서 사용 할 수 있습니다!

CSS를 처음 접하는 사람들은, CSS 명세가 압도적이라고 생각할 것입니다 — 웹 개발자가 CSS를 이해하기 위해 읽는 것이 아니라 엔지니어가 사용자 에이전트의 기능에 대한 지원을 구현하는 데 사용하기 위한 것입니다. 많은 숙련된 개발자는 MDN 설명서나 기타 자습서를 참조하는 것이 좋습니다. 그러나 사용중인 CSS, 브라우저 지원 (아래 참조) 및 specs 간의 관계를 이해하고 존재한다는 것을 아는 것이 좋습니다.

## 브라우저 지원

CSS가 지정되면 하나 이상의 브라우저가 이를 구현한 경우에만 웹 페이지를 개발하는 데 유용합니다. 이것은 CSS 파일의 명령을 화면에 출력할 수 있는 것으로 바꾸도록 코드가 작성되었음을 의미합니다. [CSS 작동 방식](/ko/docs/Learn_web_development/Core/Styling_basics/What_is_CSS) 수업에서 이것에 대해 자세히 살펴보겠습니다. 모든 브라우저가 동시에 기능을 구현하는 것은 드문 일이므로 일반적으로 일부 브라우저에서는 CSS의 일부를 사용할 수 있고, 다른 브라우저에서는 사용할 수 없는 경우가 있습니다. 이러한 이유로, 구현 상태를 확인할 수 있는 것이 유용합니다. MDN 의 각 속성 페이지에서 관심있는 속성의 상태를 볼 수 있으므로 웹 사이트에서 해당 속성을 사용할 수 있는지 알 수 있습니다.

브라우저 지원 상태는 모든 MDN CSS 속성 페이지에 "브라우저 호환성" 이라는 이름을 가진 표에 표시됩니다. 해당 표를 이용해서 속성을 당신의 웹사이트에서 사용할 수 있는지 확인하세요. [CSS `font-family` 속성을 위한 브라우저 호환성](/ko/docs/Web/CSS/font-family#브라우저_호환성)에서 예시를 확인할 수 있습니다.

요구사항에 따라 브라우저 호환 표를 사용할 수 있습니다. 이것을 이용해 얼마나 이 속성이 다양한 브라우저에서 지원되는지 또는 당신이 사용중인 특정 브라우저와 버전이 이 속성을 지원하는지 또는 사용중인 브라우저와 버전에 대해서 유의해야할 사항이 있는지 확인할 수 있습니다.

## 다음은 뭐죠

CSS가 무엇인지 이해했으니, 이제 [CSS 시작하기](/ko/docs/Learn_web_development/Core/Styling_basics/Getting_started) 로 넘어가서 CSS를 직접 작성할 수 있습니다.

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}
