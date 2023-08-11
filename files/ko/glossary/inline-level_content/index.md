---
title: 인라인 요소
slug: Glossary/Inline-level_content
---

HTML(**Hypertext Markup Language**)의 요소는 역사적으로 ["블록 레벨" 요소](/ko/docs/Web/HTML/Block-level_elements)와 "인라인" 요소로 분류됐습니다. 인라인 요소는 콘텐츠의 흐름을 끊지 않고, 요소를 구성하는 태그에 할당된 공간만 차지합니다. 이 글은 인라인 요소란 무엇인지와 블록 레벨 요소와의 차이점을 살펴봅니다.

> **참고:** 인라인 요소는 새로운 줄을 만들지 않으며 필요한 너비만 차지합니다.

## 인라인 vs. 블록 레벨 요소

간단한 예제만으로 쉽게 설명할 수 있습니다. 우선 다음 CSS를 사용하겠습니다.

```css
.highlight {
  background-color: #ee3;
}
```

### 인라인

인라인 요소를 보이는 다음 예제를 확인해주세요.

```html
<div>
  다음 span은 <span class="highlight">인라인 요소</span>로, 영향 범위의 시작과
  끝을 알 수 있도록 배경색을 지정했습니다.
</div>
```

이 예제에서 {{HTMLElement("div")}}는 텍스트를 가진 블록 레벨 요소입니다. 그 텍스트 안에는 인라인 요소인 {{HTMLElement("span")}}이 존재합니다. `<span>`은 인라인이기 때문에 전체 문단이 끊기지 않고 하나로 그려집니다. 결과도 확인해보세요.

{{EmbedLiveSample("인라인", 600, 80)}}

### 블록 레벨

이제 아까 만든 `<span>`을 마치 {{htmlelement("p")}}처럼 블록 레벨인 요소로 바꿔보겠습니다.

```html
<div>
  다음 p는
  <p class="highlight">블록 레벨 요소</p>
  로, 영향 범위의 시작과 끝을 알 수 있도록 배경색을 지정했습니다.
</div>
```

아까와 같은 CSS를 사용했을 때, 결과는 다음과 같습니다.

{{EmbedLiveSample("블록_레벨", 600, 150)}}

차이가 보이나요? `<p>` 요소는 텍스트의 레이아웃을 완전히 바꿔, `<p>` 이전과 자기 자신의 텍스트, 그리고 `<p>` 이후의 세 부분으로 나눠버렸습니다.

### 요소 레벨 변경

CSS {{cssxref("display")}} 속성을 사용해 요소의 시각적 표현 레벨을 바꿀 수 있습니다. 예컨대 `display`의 값을 `inline`에서 `block`으로 바꾸면, 브라우저에게 이 인라인 요소를 인라인 박스 대신 블록 박스를 사용해 그리라고 알리는 것입니다. 그러나 이 방법을 사용해도 요소의 카테고리와 콘텐츠 모델은 바뀌지 않습니다. 즉 `<span>` 요소의 `display`를 `block`으로 지정한다 해도, 그 안에 `<div>`를 넣을 수는 없습니다.

## 개념적 차이

다음은 인라인과 블록 레벨 요소의 간략한 개념적 차이입니다.

- 콘텐츠 모델
  - : 보통 인라인 요소는 데이터와 다른 인라인 요소만 포함할 수 있으며, 블록 요소는 포함할 수 없습니다.
- 서식
  - : 기본적으로, 인라인 요소는 문서 흐름에서 줄바꿈을 강제하지 않습니다. 반면 블록 요소는 줄바꿈을 유발합니다. (물론 언제나처럼 CSS로 바꿀 수 있습니다)

## 요소 목록

다음은 기본값이 인라인인 요소의 목록입니다. (사실 HTML5는 블록과 인라인 요소를 정의하지 않습니다. [콘텐츠 카테고리](/ko/docs/Web/Guide/HTML/Content_categories)를 사용하세요)

- {{ HTMLElement("a") }}
- {{ HTMLElement("abbr") }}
- {{ HTMLElement("acronym") }}
- {{ HTMLElement("audio") }} (컨트롤이 보이면)
- {{ HTMLElement("b") }}
- {{ HTMLElement("bdi") }}
- {{ HTMLElement("bdo") }}
- {{ HTMLElement("big") }}
- {{ HTMLElement("br") }}
- {{ HTMLElement("button") }}
- {{ HTMLElement("canvas") }}
- {{ HTMLElement("cite") }}
- {{ HTMLElement("code") }}
- {{ HTMLElement("data") }}
- {{ HTMLElement("datalist") }}
- {{ HTMLElement("del") }}
- {{ HTMLElement("dfn") }}
- {{ HTMLElement("em") }}
- {{ HTMLElement("embed") }}
- {{ HTMLElement("i") }}
- {{ HTMLElement("iframe") }}
- {{ HTMLElement("img") }}
- {{ HTMLElement("input") }}
- {{ HTMLElement("ins") }}
- {{ HTMLElement("kbd") }}
- {{ HTMLElement("label") }}
- {{ HTMLElement("map") }}
- {{ HTMLElement("mark") }}
- {{ HTMLElement("meter") }}
- {{ HTMLElement("noscript") }}
- {{ HTMLElement("object") }}
- {{ HTMLElement("output") }}
- {{ HTMLElement("picture") }}
- {{ HTMLElement("progress") }}
- {{ HTMLElement("q") }}
- {{ HTMLElement("ruby") }}
- {{ HTMLElement("s") }}
- {{ HTMLElement("samp") }}
- {{ HTMLElement("script") }}
- {{ HTMLElement("select") }}
- {{ HTMLElement("slot") }}
- {{ HTMLElement("small") }}
- {{ HTMLElement("span") }}
- {{ HTMLElement("strong") }}
- {{ HTMLElement("sub") }}
- {{ HTMLElement("sup") }}
- {{ HTMLElement("svg") }}
- {{ HTMLElement("template") }}
- {{ HTMLElement("textarea") }}
- {{ HTMLElement("time") }}
- {{ HTMLElement("u") }}
- {{ HTMLElement("tt") }}
- {{ HTMLElement("var") }}
- {{ HTMLElement("video") }}
- {{ HTMLElement("wbr") }}

## 같이 보기

- [블록 레벨 요소](/ko/docs/Web/HTML/Block-level_elements)
- [HTML 요소 참고서](/ko/docs/Web/HTML/Element)
- {{cssxref("display")}}
- [콘텐츠 카테고리](/ko/docs/Web/Guide/HTML/Content_categories)
- [일반 플로우에서의 블록과 인라인 레이아웃](/ko/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/ko/docs/Web/HTML/")}}
