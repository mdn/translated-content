---
title: 교차축
slug: Glossary/Cross_Axis
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

{{glossary("flexbox", "플렉스박스")}}에서, 교차축이란 {{glossary("main axis", "주축")}}에 수직하는 축으로, {{cssxref("flex-direction")}}이 `row` 또는 `row-reverse` 인 경우 교차축은 열 방향을 따라갑니다.

![교차축은 열을 따라갑니다.](basics3.png)

주축이 `column` 또는 `column-reverse`인 경우 교차축은 행 방향을 따라갑니다.

![교차축은 행 방향을 따라갑니다.](basics4.png)

아이템을 교차축에 대해 정렬할 땐 플렉스 컨테이너의 `align-items` 속성 또는 각각 아이템의 `align-self` 속성을 사용합니다. 플렉스 컨테이너가 콘텐츠 여러 줄을 가졌고, 교차축에 남는 공간이 있다면, `align-content` 속성을 통해 열 간격을 조절할 수 있습니다.

## 같이 보기

### 속성 참고서

- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("order")}}

### 더 읽어보기

- CSS Flexbox Guide:
  - [Flexbox의 기본 개념](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [플렉스 컨테이너 안의 내용 정렬](/ko/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container)
  - [플렉스 항목의 래핑 마스터하기](/ko/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items)

- [Glossary](/ko/docs/Glossary)
  - {{Glossary("Flex")}}
  - {{Glossary("Flex Container")}}
  - {{Glossary("Flex Item")}}
  - {{Glossary("Grid")}}
