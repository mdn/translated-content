---
title: 교차축
slug: Glossary/Cross_Axis
---

{{glossary("flexbox", "플렉스박스")}}에서, **교차축**이란 {{glossary("main axis", "주축")}}에 수직하는 축으로, {{cssxref("flex-direction")}}이 `row` 또는 `row-reverse` 인 경우 교차축은 열 방향을 따라갑니다.

![The cross axis runs down the column](basics3.png)

주축이 `column` 또는 `column-reverse`인 경우 교차축은 행 방향을 따라갑니다.

![The cross axis runs along the row.](basics4.png)

아이템을 교차축에 대해 정렬할 땐 플렉스 컨테이너의 `align-items` 속성 또는 각각 아이템의`align-self` 속성을 사용합니다. 플렉스 컨테이너가 콘텐츠 여러 줄을 가졌고, 교차축에 남는 공간이 있다면 `align-content` 속성을 통해 열 간격을 조절할 수 있습니다.

## 더 알아보기

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

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Mastering wrapping of flex items](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)_

  - {{Glossary("Flex")}}
  - {{Glossary("Flex Container")}}
  - {{Glossary("Flex Item")}}
  - {{Glossary("Grid")}}
