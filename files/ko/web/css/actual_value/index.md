---
title: 실제값
slug: Web/CSS/actual_value
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) 속성의 **실제값**은 모든 근사치(approximation)가 적용된 뒤의 [사용값](/ko/docs/Web/CSS/used_value)입니다. 예를 들어, 사용자 에이전트는 오직 정수 픽셀값으로 테두리(border)를 렌더링할 수도 있고 테두리의 계산된 폭(width)에 근접하도록 강제할 지도 모릅니다.

## Calculating a property's actual value

The {{glossary("user agent")}} performs four steps to calculate a property's actual (final) value:

1. First, the [specified value](/ko/docs/CSS/specified_value) is determined based on the result of [cascading](/ko/docs/Web/CSS/Cascade), [inheritance](/ko/docs/Web/CSS/inheritance), or using the [initial value](/ko/docs/Web/CSS/initial_value).
2. Next, the [computed value](/ko/docs/Web/CSS/computed_value) is calculated according to the specification (for example, a `span` with `position: absolute` will have its computed `display` changed to `block`).
3. Then, layout is calculated, resulting in the [used value](/ko/docs/Web/CSS/used_value).
4. Finally, the used value is transformed according to the limitations of the local environment, resulting in the actual value.

## 명세

{{Specifications}}

## 같이 보기

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
