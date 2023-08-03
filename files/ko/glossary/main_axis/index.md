---
title: 주축
slug: Glossary/Main_Axis
---

{{glossary("flexbox", "플렉스박스")}}에서, **주축**이란 {{cssxref("flex-direction")}} 속성이 지정한 방향과 수평한 축입니다. `flex-direction`은 다음과 같은 네 가지 방향이 가능합니다.

- `row`
- `row-reverse`
- `column`
- `column-reverse`

`row` 또는 `row-reverse`를 선택한 경우, 주축은 행을 따라 인라인 방향으로 진행합니다.

![In this image the flex-direction is row which forms the main axis](basics1.png)

`column` 또는 `column-reverse`인 경우, 주축은 페이지의 위에서 아래, 블록 방향으로 진행합니다.

![](basics2.png)

아이템의 `flex` 속성을 통하면, 컨테이너의 사용 가능한 공간을 그 아이템에 더 할당하는 방식으로 주축 방향 크기를 키울 수 있습니다. 아니면 `justify-content` 속성을 사용해 아이템 사이와 주위 여백을 조절할 수 있습니다.

## 더 알아보기

### 속성 참고서

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### 더 읽어보기

- CSS Flexbox Guide: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS Flexbox Guide: _[Aligning items in a flex container](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)_
- CSS Flexbox Guide: _[Controlling Ratios of flex items along the main axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
