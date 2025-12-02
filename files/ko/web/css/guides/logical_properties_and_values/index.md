---
title: CSS 논리적 속성과 값
slug: Web/CSS/Guides/Logical_properties_and_values
original_slug: Web/CSS/CSS_logical_properties_and_values
l10n:
  sourceCommit: 63249f6b1e89f42e172878c54a2f9674bee50904
---

**CSS 논리적 속성과 값** 모듈은 레이아웃을 물리적인 방향과 차원의 매핑이 아닌 논리적인 방식의 매핑으로 제어할 수 있는 논리적 속성들과 값으로 정의합니다. 논리적 속성은 해당하는 물리적 속성의 대응하는 방향 상대성을 정의합니다.

문장의 시작 부분이 항상 왼쪽 부분인 것은 아닙니다. 다른 쓰기 체계는 다양한 방향성을 가지고 있습니다. 아래 예시들을 확인해 보세요.

- 영어와 포르투갈어는 왼쪽에서 오른쪽이로 쓰여지고 새로운 문장은 기존 문장 아래에 추가됩니다.
- 히브리어와 아라비아어는 오른쪽에서 왼쪽으로 쓰여지는 언어이고 새로운 문장은 기존 문장 아래에 추가됩니다.
- 몇몇의 쓰기 모드에서, 텍스트로 이루어진 문장은 수직이고, 위에서 아래로 쓰입니다. 중국어, 베트남어, 한국어, 그리고 일본어는 전통적으로 위에서 아래 방향인 수직 방향으로 쓰여지며, 새로운 문장은 기존 문장 왼쪽에 추가됩니다.
- 전통 방식의 몽골어 또한 위에서 아래로 쓰여지지만, 새로운 문장은 기존 문장의 오른쪽에 추가됩니다.

이 모듈에서 정의된 논리적 속성은 물리적 방향이 아니라 콘텐츠의 쓰기 방향에 따른 속성을 정의할 수 있습니다. 이 의미는 콘텐츠가 다른 쓰기 방식의 언어로 번역되어도 콘텐츠가 의도한대로 렌더링된다는 것을 의미합니다.

논리적 속성과 값은 흐르는 방향을 설명하기 위해 블록과 인라인이라는 추상적인 용어들을 사용합니다. 이러한 용어들의 물리적 의미는 [쓰기 모드](/ko/docs/Web/CSS/CSS_writing_modes)에 의존합니다.

**블록 차원**은 문장 내의 흐름에 수직적인 차원입니다. 즉, 가로 방향의 쓰기 모드에서는 수직 차원이고, 세로 방향의 쓰기 모드에서는 수평 차원입니다. 표준 영어 텍스트의 경우에는 수직 차원입니다.

**인라인 차원**은 문장 내의 흐름과 평행합니다. 즉, 가로 방향의 쓰기 모드에서는 수평 차원이고, 세로 방향의 쓰기 모드에서는 수직 차원입니다. 표준 영어 텍스트의 경우에는 수평 차원입니다.

CSS 는 본래 물리적인 좌표만을 위해 고안되었습니다. 논리적 속성과 값 모듈은 많은 [값](/ko/docs/Web/CSS/CSS_values_and_units)과 [속성](/ko/docs/Glossary/Property/CSS)들에 대응하는 흐름 상대성을 정의합니다. 물리적 값 (`top`, `bottom`, `left`, `right`) 만 수용했던 속성들은 이제 흐름 상대적인 논리적 속성 (`block-start`, `block-end`, `inline-start`, `inline-end`) 들도 허용하게 됩니다.

## 참고서

### 속성

- {{cssxref("block-size")}}
- {{cssxref("border-block")}}
- {{cssxref("border-block-color")}}
- {{cssxref("border-block-end")}}
- {{cssxref("border-block-end-color")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-block-end-width")}}
- {{cssxref("border-block-start")}}
- {{cssxref("border-block-start-color")}}
- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-start-width")}}
- {{cssxref("border-block-style")}}
- {{cssxref("border-block-width")}}
- {{cssxref("border-end-end-radius")}}
- {{cssxref("border-end-start-radius")}}
- {{cssxref("border-inline")}}
- {{cssxref("border-inline-color")}}
- {{cssxref("border-inline-end")}}
- {{cssxref("border-inline-end-color")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-inline-end-width")}}
- {{cssxref("border-inline-start")}}
- {{cssxref("border-inline-start-color")}}
- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-start-width")}}
- {{cssxref("border-inline-style")}}
- {{cssxref("border-inline-width")}}
- {{cssxref("border-start-end-radius")}}
- {{cssxref("border-start-start-radius")}}
- {{cssxref("inline-size")}}
- {{cssxref("inset")}}
- {{cssxref("inset-block")}}
- {{cssxref("inset-block-end")}}
- {{cssxref("inset-block-start")}}
- {{cssxref("inset-inline")}}
- {{cssxref("inset-inline-end")}}
- {{cssxref("inset-inline-start")}}
- {{cssxref("margin-block")}}
- {{cssxref("margin-block-end")}}
- {{cssxref("margin-block-start")}}
- {{cssxref("margin-inline")}}
- {{cssxref("margin-inline-end")}}
- {{cssxref("margin-inline-start")}}
- {{cssxref("max-block-size")}}
- {{cssxref("max-inline-size")}}
- {{cssxref("min-block-size")}}
- {{cssxref("min-inline-size")}}
- {{cssxref("padding-block")}}
- {{cssxref("padding-block-end")}}
- {{cssxref("padding-block-start")}}
- {{cssxref("padding-inline")}}
- {{cssxref("padding-inline-end")}}
- {{cssxref("padding-inline-start")}}

### 데이터 타입과 값

{{glossary("Flow relative values")}}:

- `block-start`
- `block-end`
- `inline-start`
- `inline-end`
- `start`
- `end`

### 용어 사전의 용어들

- {{glossary("Flow relative values")}}
- {{glossary("Inset properties")}}
- {{glossary("Logical properties")}}
- {{glossary("Physical properties")}}

## 안내서

- [논리적 속성과 값의 기본 개념](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
  - : 흐름 상대적인 속성과 값들 전반에 대해 다룹니다.

- [크기 조절을 위한 논리적 속성](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)
  - : 페이지의 요소의 크기 조절에 사용되는 물리적 속성과 논리적 속성들 사이의 흐름 상대적인 매핑에 대해 다룹니다.

- [바깥 여백, 테두리, 그리고 안쪽 여백에 관한 논리적 속성들](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)
  - : 바깥 여백, 테두리, 그리고 안쪽 여백에 관한 흐름 상대적인 매핑과 그에 대한 단축 속성들에 대해 다룹니다.

- [플로팅과 위치 지정을 위한 논리적 속성](/ko/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)
  - : `float`, `clear`, [inset 속성](/ko/docs/Glossary/Inset_properties) 그리고 `resize` 에 사용되는 물리적인 값과 논리적인 값들 사이의 상세 매핑에 대해 다룹니다.

## 연관 개념

- {{CSSxRef("caption-side")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("float")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("text-align")}}

[CSS box model](/ko/docs/Web/CSS/CSS_box_model)

- {{CSSxRef("margin")}} 단축어
- {{CSSxRef("padding")}} 단축어

[CSS box sizing](/ko/docs/Web/CSS/CSS_box_sizing)

- {{CSSxRef("max-height")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-width")}}

[CSS backgrounds and borders](/ko/docs/Web/CSS/CSS_backgrounds_and_borders)

- {{CSSxRef("border-color")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}
- {{CSSxRef("border")}} 단축어
- {{CSSxRef("border-radius")}}

[CSS positioned layout](/ko/docs/Web/CSS/CSS_positioned_layout)

- {{CSSxRef("top")}}
- {{CSSxRef("right")}}
- {{CSSxRef("bottom")}}
- {{CSSxRef("left")}}

[CSS writing modes](/ko/docs/Web/CSS/CSS_writing_modes)

- {{CSSxRef("direction")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("writing-mode")}}

[CSS containment](/ko/docs/Web/CSS/CSS_containment)

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

[CSS overflow](/ko/docs/Web/CSS/CSS_overflow)

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}

[CSS overscroll behavior](/ko/docs/Web/CSS/CSS_overscroll_behavior)

- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

## 명세서

{{Specifications}}

## 같이 보기

- [플로우 레이아웃과 쓰기 모드](/ko/docs/Web/CSS/CSS_display/Flow_layout_and_writing_modes)
- [CSS 유연한 박스 레이아웃](/ko/docs/Web/CSS/CSS_flexible_box_layout) 모듈
- [CSS 그리드 레이아웃](/ko/docs/Web/CSS/CSS_grid_layout) 모듈
