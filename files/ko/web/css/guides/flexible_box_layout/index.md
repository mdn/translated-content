---
title: CSS Flexible Box Layout
slug: Web/CSS/Guides/Flexible_box_layout
original_slug: Web/CSS/CSS_flexible_box_layout
---

**CSS Flexible Box Layout**은 사용자 인터페이스 디자인과 단방향 레이아웃에 최적화된 [CSS](/ko/docs/Web/CSS) 모듈입니다. 플렉스 레이아웃 모델에서는, 플렉스 컨테이너의 자식을 어떤 방향으로도 배치할 수 있으며, 자식의 크기도 유연하게("플렉시블") 빈 공간을 채우거나, 컨테이너를 넘어가지 않도록 줄어듭니다. 자식 간의 수평 및 수직 정렬 또한 쉽게 조작할 수 있습니다.

## 기본 예제

다음 예제의 컨테이너는 `display: flex`를 적용한 상태입니다. 따라서 컨테이너의 세 자식은 플렉스 항목이 됩니다. `justify-content`의 값은 `space-between`으로, 각 아이템을 주축(가로축)에 균일한 간격으로 배치합니다. 그래서 같은 양의 공간이 자식 사이에 균일하게 생기며 왼쪽과 오른쪽 아이템이 플렉스 컨테이너의 양 모서리에 붙어서 배치됩니다. 또한 `align-items`의 기본값인 `stretch`로 인해, 각 항목의 높이가 플렉스 컨테이너의 높이까지 늘어나서 세 자식 모두 제일 높이가 큰 항목과 같은 높이가 되는 것도 확인할 수 있습니다.

{{EmbedGHLiveSample("css-examples/flexbox/basics/simple-example.html", '100%', 500)}}

## 참고서

### CSS 속성

- {{cssxref("flex")}}
- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-flow")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-wrap")}}
- {{cssxref("order")}}

### 정렬 속성

`align-content`, `align-self`, `align-items`, `justify-content` 속성은 플렉스박스 명세에서 처음 나왔지만, 지금은 박스 정렬 명세가 정의하며 플렉스박스 명세는 박스 정렬 명세를 참조하고 있습니다. 추가 정렬 속성도 박스 정렬 명세가 가지고 있습니다.

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("align-items")}}
- {{cssxref("align-self")}}
- {{cssxref("place-content")}}
- {{cssxref("place-items")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### 용어

- {{Glossary("Flexbox", "플렉스박스")}}
- {{Glossary("Flex Container", "플렉스 컨테이너")}}
- {{Glossary("Flex Item", "플렉스 항목")}}
- {{Glossary("Main Axis", "주축")}}
- {{Glossary("Cross Axis", "교차축")}}
- {{Glossary("Flex", "플렉스")}}

## 안내서

- [플렉스박스의 기본 개념](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Flexbox%EC%9D%98_%EA%B8%B0%EB%B3%B8_%EA%B0%9C%EB%85%90)
  - : 플렉스박스의 기능 개요입니다.
- [다른 레이아웃과 플렉스박스의 관계](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
  - : 플렉스박스와 다른 레이아웃 방법, 그리고 다른 CSS 명세가 가진 관계를 설명합니다.
- [플렉스 컨테이너의 아이템 정렬하기](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
  - : 박스 정렬 속성이 플렉스박스에서 동작하는 방식을 설명합니다.
- [플렉스 아이템 배치하기](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
  - : 아이템의 순서와 방향을 바꾸는 여러 방법과, 이 때 발생할 수 있는 여러 문제를 다룹니다.
- [플렉스 아이템의 주요 축 비율 조절하기](/ko/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
  - : `flex-grow`, `flex-shrink`, `flex-basis` 속성을 설명합니다.
- [플렉스 아이템 줄바꿈 마스터하기](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
  - : 여러 줄로 이뤄진 플렉스 컨테이너를 만드는 방법과, 컨테이너 아이템의 표시 방법 설정을 설명합니다.
- [플렉스박스의 일반적인 용례](/ko/docs/Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox)
  - : 일반적인 플렉스박스 디자인 패턴입니다.
- [플렉스박스의 하위 호환성](/ko/docs/Glossary/Flexbox)
  - : 플렉스박스의 브라우저 상태, 상호 호환성 이슈와 함께 구형 브라우저와 이전 명세를 지원하는 방법을 설명합니다.

## 명세

{{Specifications}}
