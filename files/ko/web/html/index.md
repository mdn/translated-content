---
title: "HTML: Hypertext Markup Language"
slug: Web/HTML
---

{{HTMLSidebar}}

**HTML**(HyperText Markup Language)은 웹을 이루는 가장 기초적인 구성 요소로, 웹 콘텐츠의 의미와 구조를
정의할 때 사용합니다. HTML 이외의 다른 기술은 일반적으로 웹 페이지의 모양/표현 ([CSS](/ko/docs/Web/CSS)), 또는 기능/동작 ([JavaScript](/ko/docs/Web/JavaScript))을 설명하는 데 사용됩니다.

"Hypertext(하이퍼텍스트)"란 웹 페이지를 다른 페이지로 연결하는 링크를 말합니다. 링크는 웹의 근본적인 속성으로,
인터넷에 자료를 올리고 다른 사람이 만든 페이지로 링크함으로써 여러분도 월드 와이드 웹 세계의 능동적인 일원이 될 수
있습니다.

HTML은 웹 브라우저에 표시되는 글과 이미지 등의 다양한 콘텐츠를 표시하기 위해 "마크업"을 사용합니다. HTML 마크업은
다양한 "요소"를 사용하는데, 요소에는 {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}},
{{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}},
{{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}},
{{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}},
{{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("output")}},
{{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}},
{{HTMLElement("li")}} 등 많은 종류가 존재합니다.

HTML 요소는 "태그"를 사용해서 문서의 다른 텍스트와 구분합니다. 태그는 "`<`", 태그 이름,
"`>`"로 이루어집니다. 태그 안의 요소 이름은 대소문자를 구분하지 않습니다. 즉, 대문자, 소문자, 아니면
섞어서도 작성할 수 있습니다. 예를 들어 `<title>`요소는 `<Title>`,
`<TITLE>`, 그 외 기타 가능한 모든 방법으로 작성할 수 있습니다.

아래 문서에서 HTML을 더 깊게 배워보세요.

## 중요한 자료

- HTML 소개
  - : 웹 개발이 처음이시라면 [HTML 기본](/ko/docs/Learn/Getting_started_with_the_web/HTML_basics) 문서에서
    HTML이란 무엇인지, 그리고 HTML의 사용법을 배워보세요.
- HTML 자습서
  - : [HTML 학습지](/ko/docs/Learn/HTML)를 방문하시면 HTML 사용법과 자습서, 완전한 예제를 찾아보실 수 있습니다.
- HTML 참고서
  - : 방대한 [HTML 참고서](/ko/docs/Web/HTML/Reference)에서는 HTML을 구성하는 모든 요소와 특성의 자세한 설명을
    볼 수 있습니다.

> **알림:** #### 프런트엔드 웹 개발자가 되고자 하시나요?목표를 달성하기 위한 모든 필수 정보가 들어있는 교육 과정을 준비했습니다.[**시작하기**](/ko/docs/Learn/Front-end_web_developer)

<h2 class="Tools" id="beginners_tutorials">초보자 자습서</h2>

MDN [HTML 학습지](/ko/docs/Learn/HTML)는 HTML을 처음부터 알려주는 모듈로 구성되어 있습니다. 사전 지식도
필요하지 않습니다.

- [HTML 소개](/ko/docs/Learn/HTML/Introduction_to_HTML)
  - : 이 모듈에서는 텍스트에 HTML을 추가하고, 하이퍼링크를 작성하고, HTML을 이용해 웹 페이지의 구조를 작성하는 등 중요한
    개념과 구문에 익숙해지도록 기초를 다집니다.
- [멀티미디어와 임베딩](/ko/docs/Learn/HTML/Multimedia_and_embedding)
  - : 이 모듈에서는 HTML을 사용해 웹 페이지에 이미지를 추가하는 여러가지 방법과 오디오, 비디오, 혹은 다른 웹 페이지를
    통째로 삽입하는 등 멀티미디어를 삽입하는 방법을 살펴봅니다.
- [HTML 표](/ko/docs/Learn/HTML/Tables)
  - : 표 형태의 데이터를 웹페이지에 이해하기도 쉽고 접근하기도 쉬운 방식으로 표현하는 것은 어려울 수 있습니다. 이 모듈은
    기본적인 표 마크업 작성법과, 캡션과 요약 등 고급 기능 구현도 다룹니다.
- [HTML 양식](/ko/docs/Learn/Forms)
  - : 양식은 웹의 매우 중요한 부분으로, 회원가입과 로그인, 피드백 전송, 상품 구매 등 웹 사이트의 상호작용에 필요한 많은
    기능을 제공합니다. 이 모듈은 양식의 클라이언트 사이트 개발 방법을 안내합니다.
- [일반적인 HTML 문제 해결하기](/ko/docs/Learn/HTML/Howto)
  - : 이 모듈은 HTML을 사용해서 웹 페이지 제목, 이미지와 비디오 추가, 콘텐츠 강조, 기본적인 양식 생성처럼 일반적인 문제를
    해결하는 법을 설명합니다.

## 고급 주제

- [CORS 활성화 이미지](/ko/docs/Web/HTML/CORS_enabled_image)
  - : [`crossorigin`](/ko/docs/Web/HTML/Element/img#crossorigin) 속성을 적절한 {{glossary("CORS")}} 헤더와 조합하면 {{htmlelement("img")}}
    요소의 이미지를 외부 {{glossary("origin", "출처")}}에서 가져올 수 있으며, 마치 현재 출처의 이미지인 것처럼
    {{htmlelement("canvas")}}에서도 사용할 수 있습니다.
- [CORS 설정 특성](/ko/docs/Web/HTML/Attributes/crossorigin)
  - : {{htmlelement("img")}}, {{htmlelement("video")}} 등 {{glossary("CORS")}}를 지원하는 일부 HTML 요소는
    `crossorigin` 특성(`crossOrigin` 속성)을 보유하며, 해당 요소가 데이터를 가져올 때의 CORS
    요청을 통제할 수 있습니다.
- [rel="preload"로 콘텐츠 미리 불러오기](/ko/docs/Web/HTML/Link_types/preload)
  - : {{htmlelement("link")}} 요소, [`rel`](/ko/docs/Web/HTML/Element/link#rel) 특성의 `preload` 값을 사용하면 페이지를
    불러온 직후 빠르게 사용해야 하는 리소스에 대해 선언적인 가져오기 요청을 {{htmlelement("head")}} 안에 추가할 수
    있습니다. 이렇게 지정한 리소스는 페이지 불러오기 라이프사이클의 초기, 브라우저의 주 렌더링이 시작하기도 전에
    시작하고, 페이지의 첫 렌더링이 덜 막혀 성능이 개선됩니다. 이 글에서는 `preload` 작동 방식에 대한 기본적인
    지침을 제공합니다.

<h2 class="Documentation" id="references">참고서</h2>

- [HTML 참고서](/ko/docs/Web/HTML/Reference)
  - : HTML은 **요소**로 이루어져있으며, 각각의 요소는 몇 가지 **특성**을 사용해 수정할 수
    있습니다. HTML 문서는 서로 [링크](/ko/docs/Web/HTML/Link_types)로 연결되어 있습니다.
- [HTML 요소 참고서](/ko/docs/Web/HTML/Element)
  - : 모든 {{glossary("HTML")}} {{glossary("Element", "요소")}}의 목록을 살펴보세요.
- [HTML 특성 참고서](/ko/docs/Web/HTML/Attributes)
  - : HTML 요소는 **특성**을 가집니다. 특성은 요소나 그 동작 방식을 다양하게 설정하고 수정하는 일련의 추가
    값입니다.
- [전역 특성](/ko/docs/Web/HTML/Global_attributes)
  - : 전역 특성은 모든 [HTML 요소](/ko/docs/Web/HTML/Element)에 지정할 수 있으며, 심지어 표준에 명시되지 않은
    요소에도 지정할 수 있습니다. 비록 비표준 요소를 사용하는 순간 문서는 HTML 표준을 준수하지 않는 것이지만, 그렇다고
    해도 모든 비표준 요소는 전역 특성을 허용해야 합니다.
- [인라인 요소](/ko/docs/Web/HTML/Inline_elements)와
  [블록 레벨 요소](/ko/docs/Web/HTML/Block-level_elements)
  - : HTML의 요소는 역사적으로 "블록 레벨" 요소와 "인라인" 요소로 분류됐습니다. 인라인 요소는 콘텐츠의 흐름을 끊지 않고,
    요소를 구성하는 태그에 할당된 공간만 차지합니다. 블록 레벨 요소는 부모 요소의 전체 공간을 차지하여 "블록"을
    만듭니다.
- [링크 유형](/ko/docs/Web/HTML/Link_types)
  - : HTML에선 두 문서간의 관계를 명시할 때 여러 링크 유형을 사용합니다. 유형을 설정할 수 있는 링크 타입 요소들은
    `<a>`, `<area>`, 또는 `<link>`가 있습니다.
- [HTML 미디어 유형과 형식 안내서](/ko/docs/Web/Media/Formats)
  - : {{HTMLElement("audio")}}와 {{HTMLElement("video")}} 요소를 통해 외부 프로그램 없이 오디오와 비디오 미디어를 재생할
    수 있습니다.
- [HTML 콘텐츠 카테고리](/ko/docs/Web/Guide/HTML/Content_categories)
  - : HTML 요소는 어떤 상황에서는 사용할 수 있고, 어떤 상황에서는 사용할 수 없는지 결정하는 여러가지 분류, 콘텐츠
    카테고리에 속합니다. 마찬가지로, 요소는 자신의 콘텐츠로 허용할 콘텐츠 카테고리도 정의합니다.
- [호환성 모드와 표준 모드](/ko/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : 호환성 모드와 표준 모드에 대한 역사적인 정보입니다.

## 관련 주제

- [CSS를 사용해 HTML 요소에 색 입히기](/ko/docs/Web/HTML/Applying_color)
  - : 이 문서는 HTML 문서의 어떤 부분에 색을 적용할 수 있는지와, 이 때 사용할 수 있는 CSS 속성을 나열합니다. 예제와 함께
    각종 도구로의 링크도 제공합니다.
