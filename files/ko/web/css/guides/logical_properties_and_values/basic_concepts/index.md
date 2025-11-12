---
title: 논리적 속성과 값의 기본 개념
slug: Web/CSS/Guides/Logical_properties_and_values/Basic_concepts
original_slug: Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values
l10n:
  sourceCommit: a08c1d8b4022ffbd69d4fd3097d0a30716f5fde7
---

[CSS 논리적 속성과 값 모듈](/ko/docs/Web/CSS/CSS_logical_properties_and_values#properties) 은 CSS 에서의 {{glossary("physical properties")}} 의 대열 상대적인 매핑과 값을 정의합니다. 이 안내서에서는 모듈에 대해 다루며, {{glossary("flow relative values")}} 값과 속성에 대해 설명합니다.

## 논리적 속성이 유용한 이유

CSS 2.1과 이전 버전에서는 화면의 물리적 크기를 따라 요소의 크기를 설정해왔습니다. 그렇기 떄문에 박스를 {{CSSxRef("width")}} 와 {{CSSxRef("height")}} 로 표현했고, 아이템은 `top` 과 `left` 에서부터 위치시키고, 테두리, 바깥 여백, 그리고 안쪽 여백을 `top`, `right`, `bottom`, `left` 등에 할당했습니다. 논리적 속성과 값 모듈은 이러한 {{glossary("physical properties")}} 와 값을 논리적이거나 흐름 상대적인 값에 매핑합니다. 예로 `left`와 `right`, `top` 과 `bottom` 대신에 `start`와 `end`를 이용합니다.

이러한 매핑은 원래의 레이아웃과 다른 쓰기 모드의 언어로 번역되는 사이트에서 매우 유용합니다. 예를 들어, CSS 그리드 레이아웃에서는, 만일 그리드 컨테이너가 그리드 요소들을 정렬하기 위해 {{CSSxRef("align-self")}} 와 {{CSSxRef("justify-self")}} 속성이 적용된 너비를 가지고 있을 때, 이 속성은 대열 상대적이기 때문에 `justify-self: start` 는 요소를 인라인 차원의 시작 지점에 요소들을 정렬하고, `align-self: start` 는 블록 차원에서의 시작 지점에 요소들을 정렬합니다.

![가로 쓰기 모드에서의 그리드](grid-horizontal-width-sm.png)

만일 컴포넌트의 쓰기 모드가 {{CSSxRef("writing-mode")}} 속성을 사용하여 `vertical-rl` 로 변경될 때, 정렬은 여전히 같은 방식으로 동작합니다. 인라인 차원은 세로로 동작하며, 블록 차원은 가로로 동작합니다. 그러나 그리드가 동일하게 보이지는 않는데, 이는 컨테이너에 지정된 너비는 가로로 측정되었으며, 이 측정은 텍스트의 논리나 상대 대열이 아닌 물리적인 측정이기 때문입니다.

![세로 쓰기 모드에서의 그리드](grid-vertical-width-sm.png)

`width` 속성을 사용하는 대신 논리적 속성인 {{CSSxRef("inline-size")}} 가 사용되었다면, 쓰기 모드에 관계 없이 컴포넌트가 동일한 방식으로 작동합니다.

![세로 쓰기 모드에서의 그리드 레이아웃](grid-vertical-inline-size-small.png)

아래의 실제 예제를 이용하여 시연해 볼 수 있습니다. `grid` 의 `writing-mode` 를 `vertical-rl` 에서 `horizontal-tb` 로 변경하여 다른 속성들이 레이아웃을 어떻게 변화시키는지 확인해 보세요.

{{EmbedGHLiveSample("css-examples/logical/intro-grid-example.html", '100%', 700)}}

창의적인 이유로 가로 방향이 아닌 위에서 아래 방향의 쓰기 모드를 사용할 때 콘텐츠의 대열을 연관지을 수 있다는 것은 매우 중요한 일입니다.

## 블록과 인라인 차원

대열 상대적인 속성과 값의 핵심 개념은 블록과 인라인 두 개의 차원입니다. 플렉스박스와 그리드 레이아웃과 같은 CSS 레이아웃 메서드는 요소를 정렬하기 위해 `right` 및 `left`/`top` 및 `bottom` 를 대신하여 `block` 과 `inline` 개념을 사용합니다.

`inline` 차원은 현재 사용 중인 쓰기 모드에서 텍스트가 따르는 차원입니다. 즉, 텍스트가 왼쪽에서 오른쪽의 가로 방향을 따르는 영어 문서나 텍스트가 오른쪽에서 왼쪽의 가로 방향을 따라는 아랍어 문서에서 인라인 차원은 수평입니다. 세로 쓰기 모드 (예시. 일어 문서) 로 전환되면 해당 쓰기 모드에서는 줄이 세로를 따르므로 인라인 차원은 수직이 됩니다.

블록 차원은 다른 차원이고, 단락과 같은 블록 방향에서는 하나의 요소가 다른 요소 뒤에 배치됩니다. 영어나 아랍어 문서에서는 이들이 세로 방향을 따르고, 세로 쓰기 모드에서는 가로로 표시됩니다.

아래 도표는 가로 쓰기 모드에서의 인라인과 블록 방향을 나타냅니다.

![인라인 축이 가로로, 블록 축이 세로로 실행되는 것을 나타내는 도표](mdn-horizontal.png)

아래 도표는 세로 쓰기 모드에서의 인라인과 블록 방향을 나타냅니다.

![블록 축이 가로로, 인라인 축이 세로로 실행되는 것을 나타내는 도표](mdn-vertical.png)

## 같이 보기

- [그리드 레이아웃에서의 박스 정렬](/ko/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
- [플렉스 레이아웃에서의 박스 정렬](/ko/docs/Web/CSS/CSS_box_alignment/Box_alignment_in_flexbox)
- [대열 레이아웃과 쓰기 모드](/ko/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- Smashing Magazine (2018)의 [논리적 속성과 값 이해하기](https://www.smashingmagazine.com/2018/03/understanding-logical-properties-values/)
