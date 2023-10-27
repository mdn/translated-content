---
title: CSS logical properties and values
slug: Web/CSS/CSS_logical_properties_and_values
page-type: css-module
spec-urls: https://drafts.csswg.org/css-logical/
---

{{CSSRef}}

<!-- The **CSS logical properties and values** module introduces logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings. -->

**CSS 논리속성과 값 모듈**은 방향 혹은 차원 매핑와 같은 물리적인 속성이 아닌, 논리적 속성과 값들을 통해서 레이아웃을 변경할 방법을 제공합니다.

<!-- The module also defines logical properties and values for properties previously defined in CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties. -->

이 모듈은 CSS 2.1. Logical properties define direction‐relative equivalents of their corresponding physical properties에서 정의된 논리 속성과 값들을 재정의합니다.

### 블록(Block) vs. 인라인(inline)

<!-- Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/en-US/docs/Web/CSS/CSS_writing_modes). -->

논리적 속성과 값은 블록(block) 과 인라인(inline)의 추상적인 개념을 사용해서 콘텐츠의 흐름을 설명합니다. 이 개념들의 물리적인 의미는 [writing mode](/ko/docs/Web/CSS/CSS_writing_modes)에 의거합니다.

<!-- The dimension perpendicular to the flow of text within a line, i.e., the vertical dimension in horizontal writing modes, and the horizontal dimension in vertical writing modes. For standard English text, it is the vertical dimension. -->

<!-- The dimension parallel to the flow of text within a line, i.e., the horizontal dimension in horizontal writing modes, and the vertical dimension in vertical writing modes. For standard English text, it is the horizontal dimension. -->

- 블록 차원(Block dimension)

  - : 선상에서 글의 흐름과 수직을 이루는 차원. 예: 수평 작성 모드에서는 수직의 차원, 그리고 수직 작성 모드에서는 수평의 차원이 해당합니다.

- 인라인 차원(Inline dimension)
  - : 선상에서 글의 흐름과 평행을 이루는 차원. 예: 수평 작성 모드에서는 수평의 차원, 그리고 수직 작성 모드에서는 수직의 차원이 해당합니다.

### 새로운 속성과 값들

<!-- CSS was initially designed with only physical coordinates in its controls. The module defines new flow–relative equivalents for many [values](/en-US/docs/Web/CSS/CSS_Values_and_Units) and [properties](/en-US/docs/Glossary/Property/CSS). -->

CSS은 초기에 물리적인 좌표과 활용을 고려해서 설계되었습니다. 이 모듈은 많은 [values](/ko/docs/Web/CSS/CSS_Values_and_Units)들과 [properties](/ko/docs/Glossary/Property/CSS)에 새로운 플로우-상대적인 속성들을 제공합니다.

<!-- Some physical properties now have logical equivalents. Properties that accept physical values (`top`, `bottom`, `left`, `right`) now also accept flow-relative logical values (`block-start`, `block-end`, `inline-start`, `inline-end`). -->

일부 물리적 속성들은 논리 속성으로 표현될 수 있습니다. (`top`, `bottom`, `left`, `right`)의 물리적 값이 적용되는 속성들에 (`block-start`, `block-end`, `inline-start`, `inline-end`)와 같은 플로우-상대적인 값들을 적용할 수 있습니다.

<!-- The transition to logical axes is ongoing and not fully defined by the module; some properties don't yet have logical equivalents. -->

논리 속성으로 표현하는 방식의 전환은 아직 진행되고 있으며 모듈을 통해 완전히 정의되지 않습니다. 모든 속성들은 논리 속성으로 표현하기에는 어려움이 있습니다.

## 참고서

### 사이즈 조절에 사용되는 속성들

- {{CSSxRef("block-size")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-inline-size")}}

### 바깥 여백에 사용되는 속성들

- {{CSSxRef("margin")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("margin-block")}}
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-inline")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}

### 안쪽 여백(패딩)에 사용되는 속성들

- {{CSSxRef("padding")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("padding-block")}}
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-inline")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}

### 테두리에 사용되는 속성들

- {{CSSxRef("border-block")}}
- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-start")}}
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-color")}}
- {{CSSxRef("border-inline")}}
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-start")}}
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-width")}}

### 테두리 굴곡(반지름)에 사용되는 속성들

- {{CSSxRef("border-radius")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-end-end-radius")}}

### 위치 조정에 사용되는 속성들

- {{CSSxRef("inset")}}
- {{CSSxRef("inset-block")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-inline")}}
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}

### 크기 제한 및 제어에 사용되는 속성들

- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}

### 스크롤링에 사용되는 속성들

- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}

### float요소들과 함께 사용되는 속성들

- {{CSSxRef("clear")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("float")}} (`inline-end` and `inline-start` keywords)

### 다른 속성들

- {{CSSxRef("caption-side")}} (`inline-end` and `inline-start` keywords)
- {{CSSxRef("resize")}} (`block` and `inline` keywords)
- {{CSSxRef("text-align")}} (`end` and `start` keywords)

### 사용되지 않는 속성들

- `offset-block-end` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-end")}})
- `offset-block-start` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-block-start")}})
- `offset-inline-end` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-end")}})
- `offset-inline-start` {{Non-standard_Inline}} {{Deprecated_Inline}} (now {{CSSxRef("inset-inline-start")}})

### 지원되지 않는 속성들

아래 속성들은 대응하는 논리적인 속성이 존재하지 않습니다:

- {{CSSxRef("background-position-x")}}
- {{CSSxRef("background-position-y")}}

### 지원되지 않는 값들

아래 속성들은 물리적인 값들만 적용됩니다:

- {{CSSxRef("text-underline-position")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("clip-path")}}

- {{CSSxRef("&lt;position&gt;")}}
  - {{CSSxRef("background-position")}}
  - {{CSSxRef("object-position")}}
  - {{CSSxRef("mask-position")}}
  - {{CSSxRef("offset-position")}}
  - {{CSSxRef("offset-anchor")}}
  - {{CSSxRef("transform-origin")}}
  - {{CSSxRef("perspective-origin")}}

## 안내서

- [Basic concepts of logical properties and values](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Basic_concepts_of_logical_properties_and_values)
- [Logical properties for sizing](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Sizing)
- [Logical properties for margins, borders, and padding](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Margins_borders_padding)
- [Logical properties for floating and positioning](/en-US/docs/Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning)

## 명세서

{{Specifications}}

## 브라우저 호환성

호환성과 관련된 정보는 속성별 페이지에 있습니다.
