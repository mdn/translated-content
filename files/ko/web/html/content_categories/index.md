---
title: 콘텐츠 카테고리
slug: Web/HTML/Content_categories
l10n:
  sourceCommit: 62681c2ef134407009c5c11fa679db1f485e016d
---

{{HTMLSidebar}}

모든 [HTML](/ko/docs/Web/HTML) 요소는 특성을 공유하는 요소끼리 묶는 **콘텐츠 카테고리** 한 가지 이상에 속합니다. 콘텐츠 카테고리는 느슨한 관계로 서로 간에 어떤 관계를 형성하지는 않지만, 카테고리에서 공유하는 동작이나 관련 규칙을 정의하고 설명할 때, 특히 복잡한 세부사항을 포함할 때는 더욱 도움이 됩니다. 요소가 아무런 카테고리에도 속하지 않는 것 역시 가능합니다.

콘텐츠 카테고리의 유형은 다음의 세 가지가 있습니다.

- 메인 콘텐츠 카테고리는 여러 요소가 서로 공유하는 일반적인 콘텐츠 규칙을 설명합니다.
- 폼 관련 콘텐츠 카테고리는 입력 폼 관련 요소가 공통으로 가지는 규칙을 설명합니다.
- 특정 콘텐츠 카테고리는 소수의 요소만 공유하는 카테고리를 설명하며, 특정 문맥에서만 유효하기도 합니다.

> **참고:** 콘텐츠 카테고리의 상세 내용과 서로간의 비교는 이 글의 범위를 벗어납니다. 궁금하시다면 [HTML 명세의 관련 항목](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content)을 읽어보세요.

[![다양한 내용 범주가 상호 작용하는 방식을 보여주는 벤다이어그램입니다. 다음 절에서는 이러한 관계를 텍스트로 설명합니다.](content_categories_venn.png)](/ko/docs/Web/HTML/Content_categories/content_categories_venn.png)

## 메인 콘텐츠 카테고리

### 메타데이터 콘텐츠

메타데이터 콘텐츠 카테고리에 속한 요소는 문서의 표현이나 동작을 수정하거나, 다른 문서를 가리키는 링크를 설정하거나, 기타 "대역 외 정보"를 전달합니다.

이 카테고리에 속하는 요소는 {{HTMLElement("base")}}, {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} 및 {{HTMLElement("title")}} 입니다.

### 플로우 콘텐츠

제목 요소, 섹션 구분 요소, 구문 요소, 임베딩 요소, 대화형 요소, 양식 관련 요소 등 {{HTMLElement("body")}} 요소 안에 들어갈 수 있는 대부분의 요소를 포괄하는 광범위한 범주입니다. 또한 텍스트 노드도 포함됩니다(단, 공백 문자로만 구성된 노드는 제외).

플로우 요소는 다음과 같습니다.

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("dialog")}}
- {{HTMLElement("div")}}
- {{HTMLElement("dl")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("Heading_Elements", "h1")}}
- {{HTMLElement("Heading_Elements", "h2")}}
- {{HTMLElement("Heading_Elements", "h3")}}
- {{HTMLElement("Heading_Elements", "h4")}}
- {{HTMLElement("Heading_Elements", "h5")}}
- {{HTMLElement("Heading_Elements", "h6")}}
- {{HTMLElement("header")}}
- {{HTMLElement("hgroup")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("output")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("search")}}
- {{HTMLElement("script")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("ul")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- Plain text

특정 조건을 만족하는 경우 플로우 콘텐츠에 속하는 요소도 있습니다.

- {{HTMLElement("area")}}는 {{HTMLElement("map")}} 요소의 자손인 경우.
- {{HTMLElement("link")}}가 [itemprop](/ko/docs/HTML/Global_attributes#attr-itemprop) 특성을 가지고 있는 경우..
- {{HTMLElement("meta")}}가 [itemprop](/ko/docs/HTML/Global_attributes#attr-itemprop) 특성을 가지고 있는 경우.
- {{HTMLElement("style")}}이 `scoped` {{deprecated_inline}} 특성을 가지고 있는 경우.

### 섹션 콘텐츠

섹션 콘텐츠는 플로우 콘텐츠의 하위 집합이며 플로우 요소가 예상되는 모든 곳에서 사용할 수 있습니다. 섹션 구분 콘텐츠 모델에 속하는 요소는 [현재 개요](/en-US/docs/Web/HTML/Element/Heading_Elements)에서 {{HTMLElement("header")}} 요소, {{HTMLElement("footer")}} 요소 및 [제목 콘텐츠](#제목_콘텐츠)의 콘텐츠의 범위를 정의하는 섹션을 생성합니다.

여기에 속하는 요소들은 {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} 및 {{HTMLElement("section")}} 입니다.

### 제목 콘텐츠

제목 콘텐츠는 구획의 제목을 정의합니다. 구획은 [구획 콘텐츠](#섹션_콘텐츠)로 명시할 수도 있고, 제목 자신이 암시적으로 생성할 수도 있습니다.

여기에 속하는 요소들은 {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}} 및 {{HTMLElement("hgroup")}} 입니다.

> **참고:** {{HTMLElement("header")}} 요소는 보통 제목을 포함하지만 제목 콘텐츠는 아닙니다.

> **참고:** {{HTMLElement("hgroup")}} 요소는 보조 기술에서 제대로 동작하지 않으므로 권장하지 않습니다. 이 요소는 HTML5의 완성 전에 W3C HTML에서 제거됐으나, 여전히 WHATWG 명세의 일부이며 대부분의 브라우저에서 부분적으로나마 지원하고 있습니다.

### 구문 콘텐츠

구문 콘텐츠는 텍스트와, 텍스트가 포함한 마크업을 정의하는 플로우 콘텐츠의 하위집합으로 플로우 콘텐츠가 예상되는 모든 곳에서 사용 할 수 있습니다. 구문 콘텐츠가 모여 문단을 형성합니다.

카테고리에 해당하는 요소는 다음과 같습니다.

- {{HTMLElement("abbr")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}} 및 일반 텍스트 (공백 만으로 이루어지지 않은).

특정 조건을 만족하는 경우 구문 콘텐츠에 속하는 요소도 있습니다.

- {{HTMLElement("a")}}, 구문 콘텐츠만 포함하는 경우.
- {{HTMLElement("area")}}, {{HTMLElement("map")}}의 자손인 경우.
- {{HTMLElement("del")}}, 구문 콘텐츠만 포함하는 경우.
- {{HTMLElement("ins")}}, 구문 콘텐츠만 포함하는 경우.
- {{HTMLElement("link")}}, [itemprop](/ko/docs/Web/HTML/Global_attributes/itemprop) 속성을 가지고 있는 경우.
- {{HTMLElement("map")}}, 구문 콘텐츠만 포함하는 경우.
- {{HTMLElement("meta")}}, [itemprop](/ko/docs/Web/HTML/Global_attributes/itemprop) 속성을 가지고 있는 경우.


### 내장 콘텐츠

내장 콘텐츠는 다른 리소스를 가져오거나 다른 마크업 언어나 네임스페이스로부터 문서에 삽입하는 플로우 콘텐츠의 하위 집합으로 플로우 콘텐츠가 예상되는 모든 곳에서 사용 할 수있습니다. 이 카테고리에 속하는 요소는 다음과 같습니다.

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{MathMLElement("math")}}
- {{HTMLElement("object")}}
- {{HTMLElement("picture")}}
- {{SVGElement("svg")}}
- {{HTMLElement("video")}}

### 대화형 콘텐츠

대화형 콘텐츠 는 사용자와의 상호작용을 위해 특별하게 설계된 요소를 포함하는 플로우 콘텐츠의 하위 집합으로 플로우 콘텐츠가 예상되는 모든 곳에서 사용할 수 있습니다. 이 카테고리에 속하는 요소는 다음과 같습니다.

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}} 및 {{HTMLElement("textarea")}}.

특정 조건을 만족하는 경우 대화형 콘텐츠에 속하는 요소도 있습니다.

- {{HTMLElement("a")}}, [`href`](/en-US/docs/Web/HTML/Element/a#href) 속성을 가진경우.
- {{HTMLElement("audio")}}, [`controls`](/ko/docs/Web/HTML/Element/audio#controls) 속성을 가진 경우.
- {{HTMLElement("img")}}, [`usemap`](/ko/docs/Web/HTML/Element/img#usemap) 속성을 가진 경우.
- {{HTMLElement("input")}}, [type](/ko/docs/Web/HTML/Element/input#type) 속성이 hidden이 아닌경우.
- {{HTMLElement("object")}}, [`usemap`](/ko/docs/Web/HTML/Element/object#usemap) 속성을 가진 경우.
- {{HTMLElement("video")}}, [`controls`](/ko/docs/Web/HTML/Element/video#controls) 속성을 가진 경우.

### 뚜렷한 콘텐츠

내용이 비어있거나 숨겨지지 않은 경우 뚜렷한 콘텐츠입니다. 즉, 렌더링 되며 실질적인 콘텐츠면 뚜렷한 콘텐츠입니다. 플로우 콘텐츠 또는 구문 콘텐츠가 모델인 요소는 적어도 하나의 뚜렷한 노드가 있어야 합니다.

### 양식 관련 콘텐츠

양식 관련 콘텐츠는 양식 소유자가 있고 `form` 속성에 의해 노출되며 플로우 콘텐츠가 예상되는 모든 곳에서 사용할 수 있는 요소로 구성된 플로우 콘텐츠의 하위 집합입니다. 양식 소유자는 요소의 조상 {{HTMLElement("form")}} 요소, 또는 `form` 속성에 지정된 ID를 가진 요소입니다.

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{deprecated_inline()}}{{HTMLElement("keygen")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

양식 관련 콘텐츠는 여러 개의 하위 카테고리를 가집니다.

- 나열됨
  - : {{domxref("HTMLFormElement.elements", "form.elements")}} 및 `fieldset.element` 콜렉션에 나열된 요소. {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}를 포함합니다.
- 레이블 가능
  - : {{HTMLElement("label")}} 요소와 연결할 수 있는 요소. {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}를 포함합니다.
- 제출 가능
  - : 양식을 제출할 때, 양식 데이터셋을 구성할 수 있는 요소. {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}를 포함합니다.
- 초기화 가능
  - : 양식을 초기화할 때 영향을 받는 요소. {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}를 포함합니다.

## 보조 카테고리

알아두면 유용한 보조 카테고리도 있습니다.

### 스크립트 지원 요소

**스크립트 지원 요소**는 문서의 렌더링 결과에 바로 기여하지 않는 요소로, 대신 스크립트 코드를 직접 포함 또는 명시하거나, 스크립트가 사용할 데이터를 지정하는 방식으로 지원하는 요소입니다.

스크립트 지원 요소는 다음과 같습니다.

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## 투명 콘텐츠 모델

어느 요소가 투명 콘텐츠 모델을 가지면 해당 요소의 콘텐츠 구조를 생성할 때, 해당하는 요소를 제거한 후 자식 요소로 대체했음에도 유효한 HTML5가 되도록 해야 합니다.

예를 들어, {{HTMLElement("del")}} 과 {{HTMLELement("ins")}} 요소는 투명합니다:

```html
<p>
  We hold these truths to be <del><em>sacred &amp; undeniable</em></del>
  <ins>self-evident</ins>.
</p>
```

두 요소를 제거하더라도 HTML은 유효합니다.(올바른 영어가 아닌경우)

```html
<p>We hold these truths to be <em>sacred &amp; undeniable</em> self-evident.</p>
```
