---
title: Logical properties for floating and positioning
slug: Web/CSS/CSS_logical_properties_and_values/Floating_and_positioning
l10n:
  sourceCommit: 3b4bf3e92c726515fe99042c7f7f119ef1009b68
---

{{CSSRef}}

[CSS 논리적 속성과 값](/ko/docs/Web/CSS/CSS_logical_properties_and_values) 모듈은 {{cssxref("float")}} 와 {{cssxref("clear")}} 같은 물리적 값들의 논리적 매핑과, [위치 레이아웃](/ko/docs/Web/CSS/CSS_positioned_layout)에서 사용되는 위치 지정 속성에 대한 논리적 매핑을 포함합니다. 이 안내서는 이를 어떻게 사용하는지 소개합니다.

## 매핑된 속성과 값

아래 표는 이 안내서에서 논의된 {{glossary("logical properties")}} 와 그 값 그리고 {{glossary("physical properties")}} 과 값의 매핑에 관한 것입니다. 이 표는 수평 {{cssxref("writing-mode")}}, 즉 왼쪽에서 오른쪽 방향을 가정합니다.

| 논리적 속성 혹은 값                | 물리적 속성 혹은 값              |
| ---------------------------------- | -------------------------------- |
| {{cssxref("float")}}: inline-start | {{cssxref("float")}}: left       |
| {{cssxref("float")}}: inline-end   | {{cssxref("float")}}: right      |
| {{cssxref("clear")}}: inline-start | {{cssxref("clear")}}: left       |
| {{cssxref("clear")}}: inline-end   | {{cssxref("clear")}}: right      |
| {{cssxref("inset-inline-start")}}  | {{cssxref("left")}}              |
| {{cssxref("inset-inline-end")}}    | {{cssxref("right")}}             |
| {{cssxref("inset-block-start")}}   | {{cssxref("top")}}               |
| {{cssxref("inset-block-end")}}     | {{cssxref("bottom")}}            |
| {{cssxref("text-align")}}: start   | {{cssxref("text-align")}}: left  |
| {{cssxref("text-align")}}: end     | {{cssxref("text-align")}}: right |

이 매핑된 속성들에 더하여, 인라인 차원과 블록 차원을 지정할 수 있는 더 많은 단축 속성들이 존재합니다. 이들은 {{cssxref("inset")}} 속성을 제외하고는 물리적 속성과 매핑되지 않습니다.

| 논리적 속성                 | 목적                                                                         |
| --------------------------- | ---------------------------------------------------------------------------- |
| {{cssxref("inset-inline")}} | 인라인 차원에 대해 위 두 개의 내부 여백 값을 동시에 설정합니다.              |
| {{cssxref("inset-block")}}  | 블록 차원에 대해 위 두 개의 내부 여백 값을 동시에 설정합니다.                |
| {{cssxref("inset")}}        | 물리적으로 매핑된 다중 값으로 네 개의 모든 내부 여백 값을 동시에 설정합니다. |

## Float 와 clear 예제

{{cssxref("float")}} 와 {{cssxref("clear")}} 속성에 사용되는 물리적 값은 `left`, `right` 그리고 `both` 입니다. 이 CSS 논리적 속성과 값 모듈은 `inline-start` 와 `inline-end` 의 값을 `left` 및 `right` 로 매핑으로 정의합니다.

이 예제는 두 개의 박스 요소가 있습니다. 첫번째 박스 요소는 `float: left` 로 플로팅되어 있고, 두번째 박스는 `float: inline-start` 이 사용되었습니다. 만일 `writing-mode` 를 `vertical-rl` 로 변경하거나, `direction` 을 `rtl` 로 변경하게 된다면 왼쪽에 플로팅된 박스는 항상 왼쪽에 붙어 있는 반면, `inline-start` 로 플로팅된 요소는 `direction` 와 `writing-mode` 를 따르게 됩니다.

{{EmbedGHLiveSample("css-examples/logical/float.html", '100%', 700)}}

## 예제: 위치가 지정된 레이아웃을 위한 내부 여백 속성

CSS 위치 지정은 일반적으로 어떠한 요소를 그것을 포함하는 블록에 상대적으로 배치할 수 있게 합니다. 기본적인 흐름에 기반하여 배치될 위치에 요소를 삽입하게 됩니다. 요소를 뷰포트의 상대적으로 위치시키기 위해서는, 물리적 속성인 {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} 그리고 {{cssxref("left")}} 를 사용합니다. 쓰기 모드에서 텍스트의 흐름에 따라 위치를 지정하려면, {{cssxref("inset-block-start")}}, {{cssxref("inset-block-end")}}, {{cssxref("inset-inline-start")}} 그리고 {{cssxref("inset-inline-end")}} 속성들을 사용합니다.

이러한 속성들은 값으로 길이 혹은 백분율을 취하며, 사용자의 화면 크기와도 관련이 있습니다.

아래 예제에서는, `inset-block-start` 과 `inset-inline-end` 속성들은 `position: relative` 가 설정된 회색 점선 경계가 있는 영역 안쪽의 파란색 박스를 절대 위치로 배치합니다. `writing-mode` 속성을 `vertical-rl` 로 변경하거나, `direction: rtl` 을 추가하여 텍스트의 방향에 따라 어떻게 박스가 상대벅으로 유지되는지 확인해 보세요.

{{EmbedGHLiveSample("css-examples/logical/positioning-inset.html", '100%', 700)}}

## 두 개 혹은 네 개의 값을 위한 단축 속성

모듈에 있는 다른 속성들과 마찬가지로, 두 개 혹은 네 개의 값을 한번에 사용할 수 있는 단축 속성이 존재합니다.

- {{cssxref("inset")}} — 물리적 매핑으로 네 방향의 값을 한번에 정의합니다.
- {{cssxref("inset-inline")}} — 논리적 인라인의 내부 여백들을 설정합니다.
- {{cssxref("inset-block")}} — 논리적 블록의 내부 여백들을 설정합니다.

## 예제: text-align 을 위한 논리적 속성

{{cssxref("text-align")}} 속성은 텍스트의 방향과 관련된 논리적 값이 있습니다. `left` 와 `right` 를 대신하여 `start` 와 `end` 를 사용할 수 있게 됩니다. 아래 예제에서는, `text-align: right` 속성이 첫번째 블록에 설정되어 있고, `text-align: end` 가 두번째 블록에 설정되어 있습니다.

`direction` 값을 `rtl` 로 변경하면, 첫번째 블록의 정렬은 그대로 오른쪽에 있는 것으로 유지되지만, 두번째 블록은 논리적 끝인 왼쪽으로 이동하게 됩니다.

{{EmbedGHLiveSample("css-examples/logical/text-align.html", '100%', 700)}}

이는 박스를 정렬할 때 물리적 방향 시작과 끝을 사용하는 경우에 더 일관되게 동작합니다.
