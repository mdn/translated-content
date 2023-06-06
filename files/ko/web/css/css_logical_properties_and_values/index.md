---
title: CSS Logical Properties and Values
slug: Web/CSS/CSS_logical_properties_and_values
original_slug: Web/CSS/CSS_Logical_Properties
---

{{CSSRef}}

**CSS Logical Properties and Values**는 레이아웃을 제어하는 물리 속성에 논리 맵핑을 정의하는 CSS 모듈입니다.

### 블록과 인라인

Logical properties and values use the abstract terms _block_ and _inline_ to describe the direction in which they flow. The physical meaning of these terms depends on the [writing mode](/ko/docs/Web/CSS/CSS_Writing_Modes).

- 블록 치수
  - : The dimension perpendicular to the flow of text within a line, i.e., the vertical dimension in horizontal writing modes, and the horizontal dimension in vertical writing modes. For standard English text, it is the vertical dimension.
- 인라인 치수
  - : The dimension parallel to the flow of text within a line, i.e., the horizontal dimension in horizontal writing modes, and the vertical dimension in vertical writing modes. For standard English text, it is the horizontal dimension.

## 참고서

### 크기 속성

- {{CSSxRef("block-size")}} {{Experimental_Inline}}
- {{CSSxRef("inline-size")}} {{Experimental_Inline}}
- {{CSSxRef("max-block-size")}} {{Experimental_Inline}}
- {{CSSxRef("max-inline-size")}} {{Experimental_Inline}}
- {{CSSxRef("min-block-size")}} {{Experimental_Inline}}
- {{CSSxRef("min-inline-size")}} {{Experimental_Inline}}

### 안팎 여백, 테두리 속성

- {{CSSxRef("border-block")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-end-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-start-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-block-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-color")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("border-inline")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-end-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-color")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-start-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-style")}} {{Experimental_Inline}}
- {{CSSxRef("border-inline-width")}} {{Experimental_Inline}}
- {{CSSxRef("border-start-start-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-start-end-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-end-start-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-end-end-radius")}} {{Experimental_Inline}}
- {{CSSxRef("border-style")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("border-width")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("margin")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("margin-block")}} {{Experimental_Inline}}
- {{CSSxRef("margin-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("margin-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("margin-inline-start")}} {{Experimental_Inline}}
- {{CSSxRef("padding")}} (`logical` {{Experimental_Inline}} keyword)
- {{CSSxRef("padding-block")}} {{Experimental_Inline}}
- {{CSSxRef("padding-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("padding-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("padding-inline-start")}} {{Experimental_Inline}}

### 플로트와 위치 속성

- {{CSSxRef("clear")}} (`inline-end` {{Experimental_Inline}} and `inline-start` {{Experimental_Inline}} keywords)
- {{CSSxRef("float")}} (`inline-end` {{Experimental_Inline}} and `inline-start` {{Experimental_Inline}} keywords)
- {{CSSxRef("inset")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block-end")}} {{Experimental_Inline}}
- {{CSSxRef("inset-block-start")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline-end")}} {{Experimental_Inline}}
- {{CSSxRef("inset-inline-start")}} {{Experimental_Inline}}

### 기타 속성

- {{CSSxRef("caption-side")}} (`inline-end` {{Experimental_Inline}} and `inline-start` {{Experimental_Inline}} keywords)
- {{CSSxRef("resize")}} {{Experimental_Inline}} (`block` {{Experimental_Inline}} and `inline` {{Experimental_Inline}} keywords)
- {{CSSxRef("text-align")}} (`end` {{Experimental_Inline}} and `start` {{Experimental_Inline}} keywords)

## 명세

{{Specifications}}
