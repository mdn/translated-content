---
title: 블록 레벨 요소
slug: Web/HTML/Block-level_elements
---

**HTML**(Hypertext Markup Language)의 요소는 역사적으로 "블록 레벨" 요소와 ["인라인" 요소](/ko/docs/Web/HTML/Inline_elements)로 분류됐습니다. 기본적으로 블록 레벨 요소는 부모 요소의 전체 공간을 차지하여 "블록"을 만듭니다. 이 글에서 자세한 설명을 읽을 수 있습니다.

{{glossary("browser", "브라우저")}}는 보통 블록 레벨 요소의 앞과 뒤를 개행해서 그립니다. 상자를 쌓는 것 처럼 생각할 수 있습니다.

> **참고:** 블록 레벨 요소는 언제나 새로운 줄에서 시작하고, 좌우 양쪽으로 최대한 늘어나 가능한 모든 너비를 차지합니다.

다음 예제가 블록 레벨 요소의 영향을 보여줍니다.

## 블록 레벨 요소

### HTML

```html
<p>이 문단은 블록 레벨 요소입니다. 부모 요소와 구분할 수 있도록 배경 색을 입혔습니다.</p>
```

### CSS

```css
p { background-color: #8ABB55; }
```

{{EmbedLiveSample('블록_레벨_요소')}}

## 사용처

- 블록 레벨 요소는 {{HTMLElement("body")}} 요소 안에서만 나타날 수 있습니다.

## 블록 레벨 vs. 인라인

블록 레벨 요소와 인라인 요소는 몇 가지 중요한 차이점을 가지고 있습니다.

- 콘텐츠 모델
  - : 일반적으로 블록 레벨 요소는 인라인 요소와 (때때로) 다른 블록 레벨 요소를 포함할 수 있습니다. 이런 고유한 구조적 차이점으로 인해 블록 레벨 요소는 인라인 요소보다 더 "큰" 구조를 생성할 수 있습니다.
- 기본 서식
  - : 기본적으로 블록 레벨 요소는 새로운 줄에서 시작하지만, 인라인 요소는 줄의 어느 곳에서나 시작할 수 있습니다.

블록 레벨과 인라인 요소의 분류는 HTML 명세 4.01까지 사용됐습니다. 이런 이진적 구분은 HTML5부터 보다 복잡한 [콘텐츠 카테고리](/ko/docs/Web/Guide/HTML/Content_categories) 집합으로 대체됐습니다. "인라인" 카테고리는 [구문 콘텐츠](/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠)와 적당히 짝지을 수 있지만 "블록 레벨" 카테고리는 어느 HTML5 콘텐츠 카테고리와도 정확히 일치하지 않습니다. 그러나 블록 레벨과 인라인 요소를 조합하면 [플로우 콘텐츠](/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠)에 대응합니다. [대화형 콘텐츠](/ko/docs/Web/Guide/HTML/Content_categories#대화형_콘텐츠) 등 추가 카테고리도 존재합니다.

## 요소 목록

다음은 HTML 블록 레벨 요소의 전체 목록입니다. (사실 HTML5의 새로운 요소를 설명할 때, "블록 레벨"이라는 용어는 정의되지 않습니다.)

- {{ HTMLElement("address") }}
  - : 연락처 정보.
- {{ HTMLElement("article") }}
  - : 단락 콘텐츠.
- {{ HTMLElement("aside") }}
  - : 부가 콘텐츠.
- {{ HTMLElement("blockquote") }}
  - : 긴("블록") 인용구.
- {{HTMLElement("details")}}
  - : 상세 정보 위젯.
- {{HTMLElement("dialog")}}
  - : 대화상자.
- {{ HTMLElement("dd") }}
  - : 설명 목록의 정의 설명.
- {{ HTMLElement("div") }}
  - : 문서의 분할.
- {{ HTMLElement("dl") }}
  - : 설명 목록.
- {{HTMLElement("dt")}}
  - : 설명 목록의 정의.
- {{ HTMLElement("fieldset") }}
  - : 필드 집합의 라벨.
- {{ HTMLElement("figcaption") }}
  - : 그림 설명.
- {{ HTMLElement("figure") }}
  - : 미디어 콘텐츠 그룹과 설명. ({{ HTMLElement("figcaption") }}을 참고하세요)
- {{ HTMLElement("footer") }}
  - : 페이지나 구역의 푸터.
- {{ HTMLElement("form") }}
  - : 입력 폼.
- {{ HTMLElement("h1") }}, {{ HTMLElement("h2") }}, {{ HTMLElement("h3") }}, {{ HTMLElement("h4") }}, {{ HTMLElement("h5") }}, {{ HTMLElement("h6") }}
  - : 1\~6단계 제목.
- {{ HTMLElement("header") }}
  - : 페이지나 구역의 헤더.
- {{ HTMLElement("hgroup") }}
  - : 헤더 정보 그룹.
- {{ HTMLElement("hr") }}
  - : 수평선(구분선).
- {{HTMLElement("li")}}
  - : 목록의 항목.
- {{HTMLElement("main")}}
  - : 문서에서 하나 뿐인 중심 콘텐츠.
- {{HTMLElement("nav")}}
  - : 탐색 링크를 포함.
- {{ HTMLElement("ol") }}
  - : 정렬된 목록.
- {{ HTMLElement("p") }}
  - : 문단.
- {{ HTMLElement("pre") }}
  - : 미리 서식 적용한 글.
- {{ HTMLElement("section") }}
  - : 웹 페이지의 구역.
- {{ HTMLElement("table") }}
  - : 표.
- {{ HTMLElement("ul") }}
  - : 정렬되지 않은 목록.

## 같이 보기

- [인라인 요소](/ko/docs/Web/HTML/Inline_elements)
- {{cssxref("display")}}
- [Block and Inline Layout in Normal Flow](/ko/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

{{QuickLinksWithSubpages("/ko/docs/Web/HTML/")}}
