---
title: <angle>
slug: Web/CSS/angle
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`<angle>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 각도의 값을 도, 그레이드, 라디안 또는 회전수로 표현합니다. {{cssxref("&lt;gradient&gt;")}}나 일부 {{cssxref("transform")}} 함수에서 사용합니다..

{{EmbedInteractiveExample("pages/css/type-angle.html")}}

## 구문

`<angle>` 자료형은 {{cssxref("&lt;number&gt;")}} 다음에 아래 나열한 단위 중 하나를 붙여 구성합니다. 다른 CSS 단위처럼 숫자와 단위 문자 사이에 공백은 존재하지 않습니다. 숫자 `0` 뒤에는 단위를 붙이지 않아도 됩니다.

선택적으로 `+`, `-` 부호를 표시할 수 있습니다. 양의 부호는 시계방향 회전을, 음의 부호는 시계 반대방향 회전을 나타냅니다. 정적 속성에선 하나의 각도를 다른 각도로 표현할 수 있습니다. 예컨대 `90deg`는 `-270deg`, `1turn`은 `4turn`과 동일합니다. 그러나 동적 속성, 즉 {{cssxref("animation")}}이나 {{cssxref("transition")}}에서는 결과가 달라집니다.

### 단위

- `deg`
  - : 각도를 [도 단위](<https://ko.wikipedia.org/wiki/%EB%8F%84_(%EA%B0%81%EB%8F%84)>)로 나타냅니다. 1회전은 `360deg`입니다. 예: `0deg`, `90deg`, `14.23deg`
- `grad`
  - : 각도를 [그레이드](https://ko.wikipedia.org/wiki/%EA%B7%B8%EB%A0%88%EC%9D%B4%EB%93%9C)로 나타냅니다. 1회전은 `400grad`입니다. 예: `0grad`, `100grad`, `38.8grad`
- `rad`
  - : 각도를 [라디안](https://ko.wikipedia.org/wiki/%EB%9D%BC%EB%94%94%EC%95%88)으로 나타냅니다. 1회전은 2π 라디안으로 약 `6.2832rad`입니다. `1rad`는 180/π`deg`입니다. 예: `0rad`, `1.0708rad`, `6.2832rad`
- `turn`
  - : 각도를 회전의 수로 나타냅니다. 1회전은 `1turn`입니다. 예: `0turn`, `0.25turn`, `1.2turn`

## 예제

### 시계 방향 우측 90도

| ![Angle90.png](angle90.png) | `90deg = 100grad = 0.25turn ≈ 1.5708rad` |
| --------------------------- | ---------------------------------------- |

### 반대로 회전

| ![Angle180.png](angle180.png) | `180deg = 200grad = 0.5turn ≈ 3.1416rad` |
| ----------------------------- | ---------------------------------------- |

### 시계 반대 방향 우측 90도

| ![AngleMinus90.png](angleMinus90.png) | `-90deg = -100grad = -0.25turn ≈ -1.5708rad` |
| ------------------------------------- | -------------------------------------------- |

### 회전 없음

| ![Angle0.png](angle0.png) | `0 = 0deg = 0grad = 0turn = 0rad` |
| ------------------------- | --------------------------------- |

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
