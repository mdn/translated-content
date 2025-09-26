---
title: 주축
slug: Glossary/Main_Axis
l10n:
  sourceCommit: d267a8cb862c20277f81bbc223221b36b0c613e6
---

{{GlossarySidebar}}

{{glossary("flexbox", "플렉스박스")}}에서, 주축이란 {{cssxref("flex-direction")}} 속성이 지정한 방향과 수평한 축입니다. `flex-direction`은 다음과 같은 네 가지 방향이 가능합니다.

- `row`
- `row-reverse`
- `column`
- `column-reverse`

`row` 또는 `row-reverse`를 선택한 경우, 주축은 행을 따라 인라인 방향으로 진행합니다.

![이 이미지에서 flex-direction is 행을 주축을 형성하는 행입니다](basics1.png)

`column` 또는 `column-reverse`인 경우, 주축은 페이지의 위에서 아래, 블록 방향으로 진행합니다.

![컨테이너의 전체 너비를 차지하는 3개의 플렉스 항목이 코드 순서대로 다른 항목 아래에 표시됩니다. Flex-direction은 열로 설정됩니다(주축은 수직, 즉, 위에서 아래로)](basics2.png)

아이템의 `flex` 속성을 통하면, 컨테이너의 사용 가능한 공간을 그 아이템에 더 할당하는 방식으로 주축 방향 크기를 키울 수 있습니다. 아니면 `justify-content` 속성을 사용해 아이템 사이와 주위 여백을 조절할 수 있습니다.

주 축에서는 항목의 `flex` 속성을 통해 항목 자체에 사용 가능한 공간을 추가하여 플렉스 항목의 크기를 제어할 수 있습니다. 또는, `justify-content` 속성을 사용하여 항목 사이와 항목 주위의 공간을 제어할 수 있습니다.

## 같이 보기

### 속성 참고서

- {{cssxref("flex-basis")}}
- {{cssxref("flex-direction")}}
- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("justify-content")}}
- {{cssxref("flex")}}

### 더 읽어보기

- CSS Flexbox Guide
  - [Flexbox 기본 개념](/ko/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
  - [flex container의 항목 배치](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
  - [주 축을 따라 flex 항목의 비율 제어하기](/ko/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis)
