---
title: HTML 요소 참고서
slug: Web/HTML/Element
---

{{HTMLSidebar("Elements")}}
이 페이지는 {{glossary("tag", "태그")}}를 사용해 만들 수 있는 모든 {{glossary("HTML")}} {{glossary("Element", "요소")}}의 목록을 제공합니다. 필요로 하는 요소를 쉽게 찾을 수 있도록 기능별로 분류했으며, 각각의 요소 참조 페이지 사이드바에서는 사전 순으로 정렬된 목록도 확인할 수 있습니다.

## 메인 루트

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("html")}} | HTML 문서의 루트(최상위 요소)를 나타내므로 root 요소라고도 합니다. 다른 모든 요소는 이 요소의 자손이어야 합니다. |

## 문서 메타데이터

{{glossary("metadata", "메타데이터")}}는 스타일, 스크립트, 각종 소프트웨어({{Glossary("search engine", "검색 엔진")}}, {{glossary("browser", "브라우저")}} 등)의 탐색 및 렌더링을 도와줄 데이터 등 페이지에 대한 정보를 가집니다. 스타일과 스크립트 메타데이터는 페이지 안에서 정의할 수도 있고, 해당하는 정보를 가진 다른 파일로 링크할 수도 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("base")}}  | 문서의 모든 상대 URL에 사용할 기본 URL을 지정합니다. 문서에는 이러한 요소가 하나만 있을 수 있습니다. |
| {{HTMLElement("head")}}  | [제목](/ko/docs/Web/HTML/Element/title), [스크립트](/ko/docs/Web/HTML/Element/script) 및 [스타일 시트](/ko/docs/Web/HTML/Element/style)와 같은 문서에 대한 기계 판독 가능 정보(메타데이터)를 포함합니다. |
| {{HTMLElement("link")}}  | 현재 문서와 외부 리소스 간의 관계를 지정합니다. 이 요소는 CSS에 연결하는 데 가장 일반적으로 사용되지만 무엇보다도 사이트 아이콘("favicon" 스타일 아이콘과 홈 화면용 아이콘 및 모바일 장치의 앱)을 설정하는 데도 사용됩니다. |
| {{HTMLElement("meta")}}  | {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}}, {{HTMLElement("title")}}과 같은 다른 메타관련 요소로 나타낼 수 없는 {{glossary("Metadata", "메타데이터")}}를 나타냅니다. |
| {{HTMLElement("style")}} | 문서 또는 문서의 일부에 대한 스타일 정보를 포함합니다. 이 요소를 포함하는 문서의 내용에 적용되는 CSS를 포함합니다 |
| {{HTMLElement("title")}} | {{glossary("Browser", "browser")}}의 제목 표시줄 또는 페이지의 탭에 표시되는 문서의 제목을 정의합니다. 텍스트만 포함합니다. 요소 내의 태그는 무시됩니다. |

## 구획 루트

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("body")}} | **HTML `<body>` 요소**는 HTML 문서의 내용을 나타냅니다. 한 문서에 하나의 `<body>` 요소만 존재할 수 있습니다. |

## 콘텐츠 구획

콘텐츠 구획 요소를 사용하면 문서의 콘텐츠를 논리적인 조각으로 체계화할 수 있습니다. 구획 요소를 사용해 탐색을 위한 헤더 및 푸터, 콘텐츠 판별을 위한 제목 요소 등 페이지 콘텐츠의 큰 틀을 잡으세요.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("address")}}                                                                                                                                                                                                                                                                                                                           | **HTML `<address>` 요소**는 가까운 HTML 요소의 사람, 단체, 조직 등에 대한 연락처 정보를 나타냅니다. |
| {{HTMLElement("article")}}                                                                                                                                                                                                                                                                                                                           | **HTML `<article>` 요소**는 문서, 페이지, 애플리케이션, 또는 사이트 안에서 독립적으로 구분해 배포하거나 재사용할 수 있는 구획을 나타냅니다. 사용 예제로 게시판과 블로그 글, 매거진이나 뉴스 기사 등이 있습니다. |
| {{HTMLElement("aside")}}                                                                                                                                                                                                                                                                                                                             | **HTML `<aside>` 요소**는 문서의 주요 내용과 간접적으로만 연관된 부분을 나타냅니다. 주로 사이드바 혹은 콜아웃 박스로 표현합니다. |
| {{HTMLElement("footer")}}                                                                                                                                                                                                                                                                                                                            | **HTML `<footer>` 요소**는 가장 가까운 [구획 콘텐츠](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)나 [구획 루트](/ko/docs/Web/HTML/HTML5_문서의_섹션과_윤곽)의 푸터를 나타냅니다. 푸터는 일반적으로 구획의 작성자, 저작권 정보, 관련 문서 등의 내용을 담습니다. |
| {{HTMLElement("header")}}                                                                                                                                                                                                                                                                                                                            | **HTML `<header>` 요소**는 소개 및 탐색에 도움을 주는 콘텐츠를 나타냅니다. 제목, 로고, 검색 폼, 작성자 이름 등의 요소도 포함할 수 있습니다. |
| [`<h1>`](/ko/docs/Web/HTML/Element/Heading_Elements), [`<h2>`](/ko/docs/Web/HTML/Element/Heading_Elements), [`<h3>`](/ko/docs/Web/HTML/Element/Heading_Elements), [`<h4>`](/ko/docs/Web/HTML/Element/Heading_Elements), [`<h5>`](/ko/docs/Web/HTML/Element/Heading_Elements), [`<h6>`](/ko/docs/Web/HTML/Element/Heading_Elements) | **HTML `<h1>`–`<h6>` 요소**는 6단계의 구획 제목을 나타냅니다. 구획 단계는 `<h1>`이 가장 높고 `<h6>`은 가장 낮습니다. |
| {{HTMLElement("main")}}                                                                                                                                                                                                                                                                                                                              | **HTML `<main>` 요소**는 문서 {{HTMLElement("body")}}의 주요 콘텐츠를 나타냅니다. 주요 콘텐츠 영역은 문서의 핵심 주제나 앱의 핵심 기능에 직접적으로 연결됐거나 확장하는 콘텐츠로 이루어집니다. |
| {{HTMLElement("nav")}}                                                                                                                                                                                                                                                                                                                               | **HTML `<nav>` 요소**는 문서의 부분 중 현재 페이지 내, 또는 다른 페이지로의 링크를 보여주는 구획을 나타냅니다. 자주 쓰이는 예제는 메뉴, 목차, 색인입니다. |
| {{HTMLElement("section")}}                                                                                                                                                                                                                                                                                                                           | **HTML `<section>` 요소**는 HTML 문서의 독립적인 구획을 나타내며, 더 적합한 의미를 가진 요소가 없을 때 사용합니다. 보통 `<section>`은 제목을 포함하지만, 항상 그런 것은 아닙니다. |

## 텍스트 콘텐츠

HTML 텍스트 콘텐츠를 사용하여 여는 {{htmlelement("body")}}와 닫는 `</body>` 태그 사이의 블록이나 콘텐츠 구획을 정리할 수 있습니다. 해당 콘텐츠의 목적이나 구조 판별에 사용하므로 {{glossary("accessibility", "접근성")}}과 {{glossary("SEO")}}에 중요합니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("blockquote")}} | **HTML `<blockquote>` 요소**는 안쪽의 텍스트가 긴 인용문임을 나타냅니다. 주로 들여쓰기를 한 것으로 그려집니다. (외형을 바꾸는 법은 [사용 일람](#사용_일람)을 참고하세요) 인용문의 출처 URL은 {{htmlattrxref("cite", "blockquote")}} 특성으로, 출처 텍스트는 {{htmlelement("cite")}} 요소로 제공할 수 있습니다. |
| {{HTMLElement("dd")}}         | **HTML `<dd>` 요소**는 정의 목록 요소({{HTMLElement("dl")}})에서 앞선 용어({{htmlelement("dt")}})에 대한 설명, 정의, 또는 값을 제공합니다. |
| {{HTMLElement("div")}}        | **HTML `<div>` 요소**는 플로우 콘텐츠를 위한 통용 컨테이너입니다. {{glossary("CSS")}}로 꾸미기 전에는 콘텐츠나 레이아웃에 어떤 영향도 주지 않습니다. |
| {{HTMLElement("dl")}}         | **HTML `<dl>` 요소**는 설명 목록을 나타냅니다. `<dl>`은 {{htmlelement("dt")}}로 표기한 용어와 {{htmlelement("dd")}} 요소로 표기한 설명 그룹의 목록을 감싸서 설명 목록을 생성합니다. 주로 용어사전 구현이나 메타데이터(키-값 쌍 목록)를 표시할 때 사용합니다. |
| {{HTMLElement("dt")}}         | **HTML `<dt>` 요소**는 설명 혹은 정의 리스트에서 용어를 나타냅니다. {{htmlelement("dl")}} 요소 안에 위치해야 합니다. 보통 {{htmlelement("dd")}} 요소가 뒤따르지만, 여러 개의 \<dt> 요소를 연속해 배치하면 바로 다음 {{htmlelement("dd")}} 요소로 한꺼번에 서술할 수 있습니다. |
| {{HTMLElement("figcaption")}} | **HTML `<figcaption>` 요소는** 부모 {{HTMLElement("figure")}} 요소가 포함하는 다른 콘텐츠에 대한 설명 혹은 범례를 나타냅니다. |
| {{HTMLElement("figure")}}     | **HTML `<figure>` 요소**는 독립적인 콘텐츠를 표현합니다. {{htmlelement("figcaption")}} 요소를 사용해 설명을 붙일 수 있습니다. 피규어, 설명, 콘텐츠는 하나의 단위로 참조됩니다. |
| {{HTMLElement("hr")}}         | **HTML `<hr>` 요소**는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다. |
| {{HTMLElement("li")}}         | **HTML `<li>` 요소**는 목록의 항목을 나타냅니다. 반드시 정렬 목록({{htmlelement("ol")}}), 비정렬 목록({{htmlelement("ul")}}, 혹은 메뉴({{htmlelement("menu")}}) 안에 위치해야 합니다. 메뉴와 비정렬 목록에서는 보통 불릿으로 항목을 나타내고, 정렬 목록에서는 숫자나 문자를 사용한 오름차순 카운터로 나타냅니다. |
| {{HTMLElement("menu")}}       | **HTML `<menu>` 요소**는 사용자가 수행하거나 하는 명령 묶음을 말합니다. 이것은 스크린 위에 나오는 목록 메뉴와 눌려진 버튼 아래에 나오는 것과 같은 맥락 메뉴를 포함합니다. |
| {{HTMLElement("ol")}}         | **HTML `<ol>` 요소**는 정렬된 목록을 나타냅니다. 보통 숫자 목록으로 표현합니다. |
| {{HTMLElement("p")}}          | **HTML `<p>` 요소**는 하나의 문단을 나타냅니다. 시각적인 매체에서, 문단은 보통 인접 블록과의 여백과 첫 줄의 들여쓰기로 구분하지만, HTML에서 문단은 이미지나 입력 폼 등 서로 관련있는 콘텐츠 무엇이나 될 수 있습니다. |
| {{HTMLElement("pre")}}        | **HTML `<pre>` 요소**는 미리 서식을 지정한 텍스트를 나타내며, HTML에 작성한 내용 그대로 표현합니다. 텍스트는 보통 고정폭 글꼴을 사용해 렌더링하고, 요소 내 공백문자를 그대로 유지합니다. |
| {{HTMLElement("ul")}}         | **HTML `<ul>` 요소**는 정렬되지 않은 목록을 나타냅니다. 보통 불릿으로 표현합니다. |

## 인라인 텍스트 시멘틱

HTML 인라인 텍스트 시멘틱을 사용해서 단어, 줄, 혹은 아무 부분의 의미나 구조, 스타일을 정의할 수 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("a")}}      | **HTML `<a>` 요소**(앵커 요소)는 {{htmlattrxref("href", "a")}} 특성을 통해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소와 그 외 다른 URL로 연결할 수 있는 하이퍼링크를 만듭니다. `<a>` 안의 콘텐츠는 링크 목적지의 설명을 **나타내야 합니다**. |
| {{HTMLElement("abbr")}}   | **HTML `<abbr>` 요소**는 준말 또는 머리글자를 나타냅니다. 선택 속성인 {{htmlattrxref("title")}}을 사용하면 준말의 전체 뜻이나 설명을 제공할 수 있습니다. `title` 속성은 전체 설명만을 가져야 하며 다른건 포함할 수 없습니다. |
| {{HTMLElement("b")}}      | **HTML `<b>` 요소**는 독자의 주의를 요소의 콘텐츠로 끌기 위한 용도로 사용합니다. 그 외의 다른 특별한 중요도는 주어지지 않습니다. 원래는 "굵은 글씨 요소"로 불렸으며, 대부분의 브라우저도 여전히 텍스트를 굵은 글씨체로 강조합니다. 그러나 `<b>`를 사용해 텍스트를 꾸미면 안됩니다. 대신 CSS {{cssxref("font-weight")}}를 사용해 굵은 글씨체를 적용하거나, {{htmlelement("strong")}} 요소를 사용해 특별히 중요한 텍스트를 나타내세요. |
| {{HTMLElement("bdi")}}    | Tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted. |
| {{HTMLElement("bdo")}}    | **HTML `<bdo>` 요소**는 현재 텍스트의 쓰기 방향을 덮어쓰고 다른 방향으로 렌더링 할 때 사용합니다. |
| {{HTMLElement("br")}}     | **HTML `<br>` 요소**는 텍스트 안에 줄바꿈(캐리지 리턴)을 생성합니다. 주소나 시조 등 줄의 구분이 중요한 내용을 작성할 때 유용합니다. |
| {{HTMLElement("cite")}}   | **HTML `<cite>` 요소**는 저작물의 출처를 표기할 때 사용하며, 제목을 반드시 포함해야 합니다. 적절한 맥락 아래에서는 출처를 축약해서 표기할 수 있습니다. |
| {{HTMLElement("code")}}   | **HTML `<code>` 요소**는 짧은 코드 조각을 나타내는 스타일을 사용해 자신의 콘텐츠를 표시합니다. 기본 스타일은 {{glossary("user agent", "사용자 에이전트")}}의 고정폭 글씨체입니다. |
| {{HTMLElement("data")}}   | **HTML `<data>` 요소**는 주어진 콘텐츠를 기계가 읽을 수 있는 해석본과 연결합니다. 콘텐츠가 시간 혹은 날짜 관련 정보라면 대신 {{htmlelement("time")}} 요소를 사용하세요. |
| {{HTMLElement("dfn")}}    | **HTML `<dfn>` 요소**는 현재 맥락이나 문장에서 정의하고 있는 용어를 나타냅니다. `<dfn>`에서 가장 가까운 {{htmlelement("p")}}, {{htmlelement("dt")}}/{{htmlelement("dd")}} 쌍, {{htmlelement("section")}} 조상 요소를 용어 정의로 간주합니다. |
| {{HTMLElement("em")}}     | **HTML `<em>` 요소**는 텍스트의 강세를 나타냅니다. `<em>` 요소를 중첩하면 더 큰 강세를 뜻하게 됩니다. |
| {{HTMLElement("i")}}      | **HTML `<i>` 요소**는 텍스트에서 어떤 이유로 주위와 구분해야 하는 부분을 나타냅니다. 기술 용어, 외국어 구절, 등장인물의 생각 등을 예시로 들 수 있습니다. 보통 기울임꼴로 표시합니다. |
| {{HTMLElement("kbd")}}    | **HTML `<kbd>` 요소**는 키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력을 나타냅니다. 관례에 따라 {{glossary("user agent", "사용자 에이전트")}}의 고정폭 글꼴로 표시하지만, HTML 표준은 그런 점을 강제하지 않습니다. |
| {{HTMLElement("mark")}}   | **HTML `<mark>` 요소**는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다. |
| {{HTMLElement("q")}}      | **HTML `<q>`요소**는 둘러싼 텍스트가 짧은 인라인 인용문이라는것을 나타냅니다. 대부분의 브라우저에서는 앞과 뒤에 따옴표를 붙여 표현합니다. `<q>`는 줄 바꿈이 없는 짧은 경우에 적합합니다. 긴 인용문은 {{htmlelement("blockquote")}} 요소를 사용하세요. |
| {{HTMLElement("rp")}}     | **HTML `<rp>` 요소**는 {{htmlelement("ruby")}} 요소를 사용한 루비 주석을 지원하지 않는 경우 보여줄 괄호를 제공할 때 사용합니다. {{htmlelement("rt")}} 요소를 감싸는 여는 괄호와 닫는 괄호를 각각의 `<rp>` 요소로 나타내야 합니다. |
| {{HTMLElement("rt")}}     | **HTML `<rt>` 요소**는 동아시아 문자의 루비 주석에서 발음, 번역 등을 나타내는 텍스트 부분을 지정합니다. |
| {{HTMLElement("ruby")}}   | **HTML `<ruby>` 요소**는 루비 주석을 나타냅니다. 루비 주석은 동아시아 문자의 발음을 표기할 때 사용합니다. |
| {{HTMLElement("s")}}      | **HTML `<s>` 요소**는 글자에 취소선, 즉 글자를 가로지르는 선을 그립니다. `<s>` 요소를 사용해 이제 관계 없거나 더 이상 정확하지 않은 부분을 나타내세요. 그러나, `<s>`는 문서의 편집 기록을 나타내는 용도로는 적합하지 않습니다. 상황에 따라 {{HTMLElement("del")}}과 {{HTMLElement("ins")}} 요소를 대신 사용하세요. |
| {{HTMLElement("samp")}}   | **HTML `<samp>` 요소**는 컴퓨터 프로그램 출력의 예시(혹은 인용문)를 나타냅니다. 보통 브라우저의 기본 고정폭 글씨체(보통 Courier, Lucida Console)를 사용해 렌더링합니다. |
| {{HTMLElement("small")}}  | **HTML `<small>`** **요소**는 덧붙이는 글이나, 저작권과 법률 표기 등의 작은 텍스트를 나타냅니다. 기본 상태에서 `<small>`은 자신의 콘텐츠를 한 사이즈 작은 글꼴(`small`에서 `x-small` 등)로 표시하지만, 스타일을 적용한 후에도 글씨 크기가 작을 필요는 없습니다. |
| {{HTMLElement("span")}}   | **HTML `<span>` 요소**는 구문 콘텐츠를 위한 통용 인라인 컨테이너로, 본질적으로는 아무것도 나타내지 않습니다. 스타일을 적용하기 위해서, 또는 {{htmlattrxref("lang")}} 등 어떤 특성의 값을 서로 공유하는 요소를 묶을 때 사용할 수 있습니다. 적절한 의미를 가진 다른 요소가 없을 때에만 사용해야 합니다. `<span>`은 {{htmlelement("div")}}와 매우 유사하지만, {{htmlelement("div")}}는 [블록 레벨 요소](/ko/docs/Web/HTML/Block-level_elements)인 반면 `<span>`은 [인라인 요소](/ko/docs/Web/HTML/Inline_elements)입니다. |
| {{HTMLElement("strong")}} | **HTML `<strong>` 요소**는 중대하거나 긴급한 콘텐츠를 나타냅니다. 보통 브라우저는 굵은 글씨로 표시합니다. |
| {{HTMLElement("sub")}}    | **HTML** **`<sub>`** 요소는 활자 배치를 아래 첨자로 해야 하는 인라인 텍스트를 지정합니다. 아래 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 아래로 내려 렌더링 합니다. |
| {{HTMLElement("sup")}}    | **HTML** **`<sup>`** 요소는 활자 배치를 위 첨자로 해야 하는 인라인 텍스트를 지정합니다. 위 첨자는 보통 더 작은 글씨 크기를 가지고, 기준선을 위로 올려 렌더링 합니다. |
| {{HTMLElement("time")}}   | **HTML `<time>` 요소**는 시간의 특정 지점 또는 구간을 나타냅니다. `datetime` 특성의 값을 지정해 보다 적절한 검색 결과나, 알림 같은 특정 기능을 구현할 때 사용할 수 있습니다. |
| {{HTMLElement("u")}}      | **HTML `<u>` 요소**는 글자로 표현하지 않는 주석을 가진 것으로 렌더링 해야 하는 텍스트를 나타냅니다. 기본값에서는 단순한 밑줄로 표시하지만 CSS를 사용해 바꿀 수 있습니다. |
| {{HTMLElement("var")}}    | **HTM `<var>` 요소**는 수학 표현 또는 프로그래밍에서 변수의 이름을 나타냅니다. 보통 현재 글씨체의 기울임꼴로 표시하지만, 브라우저마다 다를 수 있습니다. |
| {{HTMLElement("wbr")}}    | **HTML `<wbr>` 요소**는 현재 요소의 줄 바꿈 규칙을 무시하고 브라우저가 줄을 바꿀 수 있는 위치를 나타냅니다. |

## 이미지 & 멀티미디어

HTML은 사진, 오디오, 비디오 등 다양한 멀티미디어 리소스를 지원합니다..

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("area")}}  | **HTML `<area>` 요소**는 이미지의 핫스팟 영역을 정의하고 {{glossary("hyperlink", "하이퍼링크")}}를 추가할 수 있습니다. {{htmlelement("map")}} 요소 안에서만 사용할 수 있습니다. |
| {{HTMLElement("audio")}} | **HTML `<audio>` 요소**는 문서에 소리 콘텐츠를 포함할 때 사용합니다. `src` 특성 또는 {{htmlelement("source")}} 요소를 사용해 한 개 이상의 오디오 소스를 지정할 수 있으며, 다수를 지정한 경우 가장 적절한 소스를 브라우저가 고릅니다. {{domxref("MediaStream")}}을 사용하면 미디어 스트림을 바라볼 수도 있습니다. |
| {{HTMLElement("img")}}   | **HTML `<img>` 요소**는 문서에 이미지를 넣습니다. |
| {{HTMLElement("map")}}   | **HTML `<map>` 요소**는 {{htmlelement("area")}} 요소와 함께 이미지 맵(클릭 가능한 링크 영역)을 정의할 때 사용합니다. |
| {{HTMLElement("track")}} | **HTML `<track>` 요소**는 미디어 요소({{HTMLElement("audio")}}, {{HTMLElement("video")}})의 자식으로서, 자막 등 시간별 텍스트 트랙(시간 기반 데이터)를 지정할 때 사용합니다. 트랙은 [WebVTT](/ko/docs/Web/API/WebVTT_API)(Web Video Text Tracks, `.vtt` 파일) 또는 [Timed Text Markup Language(TTML)](https://w3c.github.io/ttml2/index.html)형식을 사용해야 합니다. |
| {{HTMLElement("video")}} | **HTML `<video>` 요소**는 비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입합니다. 오디오 콘텐츠에도 사용할 수 있으나, {{htmlelement("audio")}} 요소가 사용자 경험에 좀 더 적합합니다. |

## 내장 콘텐츠

HTML은 일반적인 멀티미디어 콘텐츠 외에도 다양한 종류의 기타 콘텐츠를 포함할 수 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("embed")}}   | **HTML `<embed>` 요소**는 외부 어플리케이션이나 대화형 컨텐츠와의 통합점을 나타냅니다. |
| {{HTMLElement("iframe")}}  | **HTML `<iframe>` 요소**는 중첩 {{glossary("browsing context", "브라우징 맥락")}}을 나타내는 요소로, 현재 문서 안에 다른 HTML 페이지를 삽입합니다. |
| {{HTMLElement("object")}}  | **HTML `<object>` 요소**는 이미지나, 중첩된 브라우저 컨텍스트, 플러그인에 의해 다뤄질수 있는 리소스와 같은 외부 리소스를 나타냅니다. |
| {{HTMLElement("picture")}} | Contains zero or more {{HTMLElement("source")}} elements and one {{HTMLElement("img")}} element to offer alternative versions of an image for different display/device scenarios. |
| {{HTMLElement("portal")}}  | Enables the embedding of another HTML page into the current one for the purposes of allowing smoother navigation into new pages. |
| {{HTMLElement("source")}}  | Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for [image file formats](/en-US/docs/Web/Media/Formats/Image_types) and [media file formats](/ko/docs/Web/Media/Formats). |

## SVG and MathML

You can embed [SVG](/ko/docs/Web/SVG) and [MathML](/ko/docs/Web/MathML) content directly into HTML documents, using the {{SVGElement("svg")}} and {{MathMLElement("math")}} elements.

| 요소 | 설명 |
| ---- | ---- |
| {{SVGElement("svg")}}     | Container defining a new coordinate system and [viewport](/en-US/docs/Web/SVG/Attribute/viewBox). It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document. |
| {{MathMLElement("math")}} | The top-level element in MathML. Every valid MathML instance must be wrapped in it. In addition you must not nest a second `<math>` element in another, but you can have an arbitrary number of other child elements in it. |

## 스크립트

HTML은 동적인 콘텐츠와 웹 어플리케이션을 위해 스크립트 언어, 그 중에서도 주로 JavaScript를 지원합니다. 특정 요소가 이런 기능을 가지고 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("canvas")}}   | **HTML `<canvas>` 요소**는 [캔버스 스크립팅 API](/ko/docs/Web/HTML/Canvas) 또는 [WebGL API](/ko/docs/Web/API/WebGL_API)와 함께 사용해 그래픽과 애니메이션을 그릴 수 있습니다. |
| {{HTMLElement("noscript")}} | **HTML `<noscript>` 요소**는 페이지의 스크립트 유형을 지원하지 않거나, 브라우저가 스크립트를 비활성화한 경우 보여줄 HTML 구획을 정의합니다. |
| {{HTMLElement("script")}}   | **HTML `<script>` 요소**는 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 JavaScript 코드와 함께 씁니다. [WebGL](/ko/docs/Web/API/WebGL_API)의 GLSL 셰이더 프로그래밍 언어, [JSON](/ko/docs/Glossary/JSON) 등 다른 언어와도 사용할 수 있습니다. |

## 수정사항 표시

텍스트의 특정 부분이 수정됐다는 것을 표시할 수 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("del")}} | **HTML `<del>` 요소**는 문서에서 제거된 텍스트의 범위를 나타냅니다. 문서나 소스 코드의 변경점 추적 등에 사용할 수 있습니다. {{htmlelement("ins")}} 요소를 추가된 텍스트의 범위를 나타낼 수 있습니다. |
| {{HTMLElement("ins")}} | **HTML `<ins>` 요소**는 문서에 추가된 텍스트의 범위를 나타냅니다. {{htmlelement("del")}} 요소를 사용하면 삭제된 텍스트의 범위를 나타낼 수 있습니다. |

## 표 콘텐츠

표 형식의 데이터를 생성하고 처리할 때 사용합니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("caption")}}  | **HTML `<caption>` 요소**는 표의 설명 또는 제목을 나타냅니다. |
| {{HTMLElement("col")}}      | **HTML `<col>` 요소**는 표의 열을 나타내며, 열에 속하는 칸에 공통된 의미를 부여할 때 사용합니다. {{htmlelement("colgroup")}} 안에서 찾을 수 있습니다. |
| {{HTMLElement("colgroup")}} | **HTML `<colgroup>` 요소**는 표의 열을 묶는 그룹을 정의합니다. |
| {{HTMLElement("table")}}    | **HTML `<table>` 요소**는 행과 열로 이루어진 표를 나타냅니다. |
| {{HTMLElement("tbody")}}    | **HTML** **`<tbody>`** 요소는 표의 여러 행({{htmlelement("tr")}})을 묶어서 표 본문을 구성합니다. |
| {{HTMLElement("td")}}       | _Table cell_ [HTML](/ko/docs/Web/HTML) 요소 (**`<td>`**) 는 데이터를 포함하는 표의 셀을 정의합니다. 이것은 *표 모델*에 참여합니다. |
| {{HTMLElement("tfoot")}}    | [HTML](/ko/docs/Web/HTML) 요소는 테이블의 열을 요약하는 행들의 집합입니다. |
| {{HTMLElement("th")}}       | The **HTML `<th>` element** defines a cell as header of a group of table cells. The exact nature of this group is defined by the {{htmlattrxref("scope", "th")}} and {{htmlattrxref("headers", "th")}} attributes. |
| {{HTMLElement("thead")}}    | **`<thead>`** [HTML](/ko/docs/Web/HTML) 요소는 테이블의 열의 머리글인 행들의 집합입니다. |
| {{HTMLElement("tr")}}       | The _HTML Table Row Element_ (`<tr>`) defines a row of cells in a table. Those can be a mix of {{HTMLElement("td")}} and {{HTMLElement("th")}} elements. |

## 양식

HTML은 여러가지 입력 가능한 요소를 제공합니다. 이런 요소를 서로 조합하면 사용자가 내용을 채우고, 웹사이트나 어플리케이션에 제출할 수 있습니다. [HTML 폼 안내서](/ko/docs/Learn/HTML/Forms)에 더욱 다양한 내용이 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("button")}}   | **HTML `<button>` 요소**는 클릭 가능한 버튼을 나타냅니다. 버튼은 [양식](/ko/docs/Learn/HTML/Forms) 내부는 물론 간단한 표준 버튼 기능이 필요한 곳이라면 문서 어디에나 배치할 수 있습니다. 기본값의 HTML 버튼은 {{glossary("user agent", "사용자 에이전트")}}의 호스트 플랫폼과 비슷한 디자인을 따라가지만, 외형은 [CSS](/ko/docs/Web/CSS)로 변경할 수 있습니다. |
| {{HTMLElement("datalist")}} | **HTML `<datalist>` 요소**는 다른 컨트롤에서 고를 수 있는 가능한, 혹은 추천하는 선택지를 나타내는 {{htmlelement("option")}} 요소 여럿을 담습니다. |
| {{HTMLElement("fieldset")}} | **HTML `<fieldset>` 요소**는 웹 양식의 여러 컨트롤과 레이블({{htmlelement("label")}})을 묶을 때 사용합니다. |
| {{HTMLElement("form")}}     | **HTML `<form>` 요소**는 정보를 제출하기 위한 대화형 컨트롤을 포함하는 문서 구획을 나타냅니다. |
| {{HTMLElement("input")}}    | **HTML `<input>` 요소**는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성합니다. {{glossary("user agent", "사용자 에이전트")}}에 따라서 다양한 종류의 입력 데이터 유형과 컨트롤 위젯이 존재합니다. 입력 유형과 특성의 다양한 조합 가능성으로 인해, `<input>` 요소는 HTML에서 제일 강력하고 복잡한 요소 중 하나입니다. |
| {{HTMLElement("label")}}    | **HTML `<label>` 요소**는 사용자 인터페이스 항목의 설명을 나타냅니다. |
| {{HTMLElement("legend")}}   | **HTML `<legend>` 요소**는 부모 {{HTMLElement("fieldset")}} 콘텐츠의 설명을 나타냅니다. |
| {{HTMLElement("meter")}}    | **HTML `<meter>` 요소**는 특정 범위 내에서의 스칼라 값, 또는 백분율 값을 나타냅니다. |
| {{HTMLElement("optgroup")}} | **HTML `<optgroup>` 요소**는 {{HTMLElement("select")}} 요소의 옵션을 묶을 수 있습니다. |
| {{HTMLElement("option")}}   | **HTML `<option>` 요소**는 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("datalist")}} 요소의 항목을 정의합니다. 그러므로, `<option>`을 사용해 팝업 메뉴 등 목록에서 하나의 항목을 나타낼 수 있습니다. |
| {{HTMLElement("output")}}   | **HTML `<output>` 요소**는 웹 사이트나 앱에서 계산이나 사용자 행동의 결과를 삽입할 수 있는 컨테이너 요소입니다. |
| {{HTMLElement("progress")}} | **HTML `<progress>` 요소**는 어느 작업의 완료 정도를 나타내며, 주로 진행 표시줄의 형태를 띕니다. |
| {{HTMLElement("select")}}   | **HTML `<select>` 요소**는 옵션 메뉴를 제공하는 컨트롤을 나타냅니다. |
| {{HTMLElement("textarea")}} | **HTML `<textarea>` 요소**는 멀티라인 일반 텍스트 편집 컨트롤을 나타냅니다. |

## 대화형 요소

HTML은 상호작용 가능한 사용자 인터페이스 객체를 만들 때 사용할 수 있는 요소를 지원합니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("details")}} | **HTML `<details>` 요소**는 "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. 요약이나 레이블은 {{htmlelement("summary")}} 요소를 통해 제공할 수 있습니다. |
| {{HTMLElement("dialog")}}  | **HTML `<dialog>` 요소**는 닫을 수 있는 경고, 검사기, 창 등 대화 상자 및 기타 다른 상호작용 가능한 컴포넌트를 나타냅니다. |
| {{HTMLElement("summary")}} | **HTML 공개 요약 요소** (**`<요약>`**) 요소는 ("상세") 요소의 공개 상자에 대한 요약, 캡션 또는 범례를 지정한다. `<요약>` 요소를 클릭하면 부모 `<상세>` 요소의 상태가 열리거나 닫힌다. |

## 웹 컴포넌트

웹 컴포넌트는 완전히 새로운 형태의 요소를 생성한 후 일반적인 HTML처럼 사용할 수 있는 기술입니다. 또한 표준 HTML 요소의 맞춤 버전을 만들 수도 있습니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("slot")}}     | **HTML `<slot>` 요소**는 웹 컴포넌트 사용자가 자신만의 마크업으로 채워 별도의 DOM 트리를 생성하고, 컴포넌트와 함께 표현할 수 있는 웹 컴포넌트 내부의 플레이스홀더입니다. |
| {{HTMLElement("template")}} | **HTML `<template>` 요소**는 페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 {{glossary("HTML")}} 코드를 담을 방법을 제공합니다. |

## 폐기됐거나 사용하지 않는 요소들

> **경고:** 다음은 더 이상 사용하지 않고, 사용해서도 안되는 오래된 HTML 요소입니다. **새로운 프로젝트에서 절대 사용해서는 안되고, 오래된 프로젝트에서도 가능한 빨리 대체해야 합니다.** 아래 목록은 정보성 목적으로만 존재합니다.

| 요소 | 설명 |
| ---- | ---- |
| {{HTMLElement("acronym")}}   | Allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word. |
| {{HTMLElement("applet")}}    | HTML의 Applet 태그 (`<applet>`) 는 자바 애플릿을 보이게 하는 곳에 쓰입니다. |
| {{HTMLElement("bgsound")}}   | Sets up a sound file to play in the background while the page is used; use {{HTMLElement("audio")}} instead. |
| {{HTMLElement("big")}}       | Renders the enclosed text at a font size one level larger than the surrounding text (`medium` becomes `large`, for example). The size is capped at the browser's maximum permitted font size. |
| {{HTMLElement("blink")}}     | Causes the enclosed text to flash slowly. |
| {{HTMLElement("center")}}    | 이 HTML Center (`<center>`)요소는 또다른 블록요소을 포함하거나, 인라인요소(Inline)를 포함할 수 있는 [블록속성(block-level)](/ko/docs/HTML/Block-level_elements) 의 요소이다. 그리고 해당 \<center> 요소안에 포함된 전체요소는 \<center>의 내용안에 가운데 정렬이 된다. (통상적으로 {{HTMLElement("body")}}로 쓰임). |
| {{HTMLElement("content")}}   | The **HTML `<content>` element**—an obsolete part of the [Web Components](/ko/docs/Web/Web_Components) suite of technologies—was used inside of [Shadow DOM](/ko/docs/Web/Web_Components/Shadow_DOM) as an {{glossary("insertion point")}}, and wasn't meant to be used in ordinary HTML. It has now been replaced by the {{HTMLElement("slot")}} element, which creates a point in the DOM at which a shadow DOM can be inserted. |
| {{HTMLElement("dir")}}       | Container for a directory of files and/or folders, potentially with styles and icons applied by the user agent. Do not use this obsolete element; instead, you should use the {{HTMLElement("ul")}} element for lists, including lists of files. |
| {{HTMLElement("font")}}      | _HTML에서의 Font 요소_ (`<font>`) 는 본문의 글자 크기, 색상과 및면을 정의합니다. |
| {{HTMLElement("frame")}}     | `<frame>`은 다른 HTML 문서가 표시될 수 있는 특정 영역을 정의하는 element이다. frame은 {{HTMLElement("frameset")}}내에서 사용되어야 한다. |
| {{HTMLElement("frameset")}}  | `<frameset>`은 HTML element로써 {{HTMLElement("frame")}} element을 포함하고 사용된다. |
| {{HTMLElement("image")}}     | **HTML `<hgroup>` 요소**는 문서 구획의 다단계 제목을 나타냅니다. 다수의 `{{htmlelement("Heading_Elements", "&lt;h1&gt;-&lt;h6&gt;")}}` 요소를 묶을 때 사용합니다. |
| {{HTMLElement("keygen")}}    | Exists to facilitate generation of key material, and submission of the public key as part of an [HTML form](/ko/docs/Learn/Forms). This mechanism is designed for use with Web-based certificate management systems. It is expected that the `<keygen>` element will be used in an HTML form along with other information needed to construct a certificate request, and that the result of the process will be a signed certificate. |
| {{HTMLElement("marquee")}}   | Used to insert a scrolling area of text. You can control what happens when the text reaches the edges of its content area using its attributes. |
| {{HTMLElement("menuitem")}}  | Represents a command that a user is able to invoke through a popup menu. This includes context menus, as well as menus that might be attached to a menu button. |
| {{HTMLElement("nobr")}}      | Prevents the text it contains from automatically wrapping across multiple lines, potentially resulting in the user having to scroll horizontally to see the entire width of the text. |
| {{HTMLElement("noembed")}}   | An obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the embed element or do not support the type of [embedded content](/en-US/docs/Web/HTML/Content_categories#embedded_content) an author wishes to use. This element was deprecated in HTML 4.01 and above in favor of placing fallback content between the opening and closing tags of an {{HTMLElement("object")}} element. |
| {{HTMLElement("noframes")}}  | Provides content to be presented in browsers that don't support (or have disabled support for) the {{HTMLElement("frame")}} element. Although most commonly-used browsers support frames, there are exceptions, including certain special-use browsers including some mobile browsers, as well as text-mode browsers. |
| {{HTMLElement("param")}}     | Defines parameters for an {{HTMLElement("object")}} element. |
| {{HTMLElement("plaintext")}} | **HTML `<param>` 요소**는 {{HTMLElement("object")}} 요소의 매개변수를 정의합니다. |
| {{HTMLElement("rb")}}        | Used to delimit the base text component of a ruby annotation, i.e. the text that is being annotated. One `<rb>` element should wrap each separate atomic segment of the base text. |
| {{HTMLElement("rtc")}}       | **HTML `<rb>` 요소**는 {{HTMLElement("ruby")}} 표기의 기반 텍스트 구성요소(루비 주석을 적용하려는 글자)를 나눌 때 사용합니다. 하나의 `<rb>` 요소는 기반 텍스트에서의 최소 단위를 하나 감싸야 합니다. |
| {{HTMLElement("shadow")}}    | **HTML `<rtc>` 요소**는 {{htmlelement("rb")}} 요소가 표시하는 문자의 의미에 대한 주석을 나타냅니다. `<rb>`는 발음({{htmlelement("rt")}})과 의미(`<rtc>`) 둘 다 가질 수 있습니다. |
| {{HTMLElement("spacer")}}    | Allows insertion of empty spaces on pages. It was devised by Netscape to accomplish the same effect as a single-pixel layout image, which was something web designers used to use to add white spaces to web pages without actually using an image. However, `<spacer>` is no longer supported by any major browser and the same effects can now be achieved using simple CSS. |
| {{HTMLElement("strike")}}    | Places a strikethrough (horizontal line) over text. |
| {{HTMLElement("tt")}}        | Creates inline text which is presented using the user agent default monospace font face. This element was created for the purpose of rendering text as it would be displayed on a fixed-width display such as a teletype, text-only screen, or line printer. |
| {{HTMLElement("xmp")}}       | Renders text between the start and end tags without interpreting the HTML in between and using a monospaced font. The HTML2 specification recommended that it should be rendered wide enough to allow 80 characters per line. |
