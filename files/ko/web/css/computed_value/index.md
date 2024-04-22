---
title: 계산값
slug: Web/CSS/computed_value
---

{{cssref}}

[CSS](/ko/docs/Web/CSS) 속성의 **계산값**은 상속 과정에서 부모가 자식에게 물려주는 값을 말합니다. 계산값은 [지정값](/ko/docs/Web/CSS/specified_value)으로부터 다음 방법을 통해 구합니다.

- 특수값인 {{cssxref("inherit")}}, {{cssxref("initial")}}, {{cssxref("unset")}}, {{cssxref("revert")}}를 처리하여.
- 각 속성 정의 표의 "Computed value" 항목이 가리키는 연산을 수행하여.

계산값을 구하기 위한 연산은 보통 상댓값(`em` 단위나 백분율 등)을 절댓값으로 변환하는 작업을 수반합니다. 예컨대 요소가 `font-size: 1px`과 `padding-top: 2em`을 가진다면, `padding-top`의 계산값은 글씨 크기의 두 배인 `32px`입니다.

그러나, `width`, `margin-right`, `text-index`, `top`과 같이, 백분율의 값을 알아내려면 레이아웃부터 계산해야 하는 속성의 백분율 지정값은 백분율 계산값이 됩니다. 추가로, `line-height` 속성의 단위 없는 값도 그대로 계산값이 됩니다. 이렇게 남겨진 상대적 계산값은 [사용값](/ko/docs/Web/CSS/used_value)을 구할 때 절댓값이 됩니다.

> **참고:**{{domxref("Window.getComputedStyle", "getComputedStyle()")}} DOM API는 [결정값](/ko/docs/Web/CSS/resolved_value)을 반환합니다. 결정값은 속성에 따라 [계산값](/ko/docs/Web/CSS/computed_value)일 수도, [사용값](/ko/docs/Web/CSS/used_value)일 수도 있습니다.

## 명세

{{Specifications}}

## 같이 보기

- [CSS Reference](/ko/docs/Web/CSS/CSS_Reference)
- CSS 주요 개념

  - [CSS 문법](/ko/docs/Web/CSS/Syntax)
  - [@규칙](/ko/docs/Web/CSS/At-rule)
  - [주석](/ko/docs/Web/CSS/Comments)
  - [명시도](/ko/docs/Web/CSS/Specificity)
  - [상속](/ko/docs/Web/CSS/inheritance)
  - [박스 모델](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [레이아웃 모드](/ko/docs/Web/CSS/Layout_mode)
  - [시각적 서식 모델](/ko/docs/Web/CSS/Visual_formatting_model)
  - [마진 중첩](/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - 값

    - [초깃값](/ko/docs/Web/CSS/initial_value)
    - [계산값](/ko/docs/Web/CSS/computed_value)
    - [결정값](/ko/docs/Web/CSS/resolved_value)
    - [지정값](/ko/docs/Web/CSS/specified_value)
    - [사용값](/ko/docs/Web/CSS/used_value)
    - [실제값](/ko/docs/Web/CSS/actual_value)

  - [값 정의 구문](/ko/docs/Web/CSS/Value_definition_syntax)
  - [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)
  - [대체 요소](/ko/docs/Web/CSS/Replaced_element)
