---
title: border-style
slug: Web/CSS/border-style
---

{{CSSRef}}

**`border-style`** [CSS](/ko/docs/Web/CSS) [단축 속성](/ko/docs/Web/CSS/Shorthand_properties)은 요소 테두리 네 면의 스타일을 지정합니다.

{{EmbedInteractiveExample("pages/css/border-style.html")}}

## 구문

```css
/* 키워드 값 */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/* 세로방향 | 가로방향 */
border-style: dotted solid;

/* 위 | 가로방향 | 아래 */
border-style: hidden double dashed;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-style: none solid dotted dashed;

/* 전역 값 */
border-style: inherit;
border-style: initial;
border-style: unset;
```

`border-style` 속성은 한 개에서 네 개의 값을 사용해 지정할 수 있습니다.

- **한 개의 값**은 모든 네 면의 테두리 스타일을 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, 두 번째는 **왼쪽과 오른쪽** 테두리 스타일을 설정합니다.
- **세 개의 값**을 지정하면 첫 번째는 **위**, 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 테두리 스타일을 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 순서로 테두리 스타일을 지정합니다. (시계방향)

각각의 값은 아래 목록 중 하나로 지정합니다.

### 값

- `<line-style>`

  - : 테두리의 스타일을 설명합니다. 다음 표의 값을 사용할 수 있습니다.

    | `none`   |     | `hidden` 키워드와 마찬가지로 테두리를 표시하지 않습니다. {{cssxref("background-image")}}를 지정하지 않았으면 해당 면의 {{cssxref("border-width")}} 계산값은 지정값을 무시하고 `0`이 됩니다. 표에서, 칸의 테두리 상쇄 시 `none`은 제일 낮은 우선순위를 가집니다. 따라서 주변 칸이 테두리를 가진다면 테두리를 그립니다.          |
    | -------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `hidden` |     | `none` 키워드와 마찬가지로 테두리를 표시하지 않습니다. Unless a {{cssxref("background-image")}}를 지정하지 않았으면 해당 면의 {{cssxref("border-width")}} 계산값은 지정값을 무시하고 `0`이 됩니다. 표에서, 칸의 테두리 상쇄 시 `hidden`은 제일 높은 우선순위를 가집니다. 따라서 주변 칸이 테두리를 가지더라도 그리지 않습니다. |
    | `dotted` |     | 테두리를 둥근 점 여러개로 그립니다. 점 간격은 명세에서 지정하지 않으며 구현마다 다릅니다. 점의 반지름은 해당 면 {{cssxref("border-width")}}의 절반입니다.                                                                                                                                                                      |
    | `dashed` |     | 테두리를 직사각형 여러개로 그립니다. 사각형의 크기와 길이는 명세에서 지정하지 않으며 구현마다 다릅니다.                                                                                                                                                                                                                        |
    | `solid`  |     | 테두리를 하나의 직선으로 그립니다.                                                                                                                                                                                                                                                                                             |
    | `double` |     | 테두리를 두 개의 평행한 직선으로 그립니다.                                                                                                                                                                                                                                                                                     |
    | `groove` |     | 테두리가 파인 것처럼 그립니다.`ridge`의 반대입니다.                                                                                                                                                                                                                                                                            |
    | `ridge`  |     | 테두리가 튀어나온 것처럼 그립니다. `groove`의 반대입니다.                                                                                                                                                                                                                                                                      |
    | `inset`  |     | 요소가 파인 것처럼 테두리를 그립니다.`outset`의 반대입니다. {{cssxref("border-collapse")}}가 `collapsed`인 칸에서는 `groove`와 동일합니다.                                                                                                                                                                                     |
    | `outset` |     | 요소가 튀어나온 것처럼 그립니다. `inset`의 반대입니다. {{cssxref("border-collapse")}}가 `collapsed`인 칸에서는 `ridge`와 동일합니다.                                                                                                                                                                                           |

### 형식 구문

{{csssyntax}}

## 예제

### 속성 값의 예시 표

가능한 모든 값을 나열한 표입니다.

#### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">dotted</td>
    <td class="b4">dashed</td>
  </tr>
  <tr>
    <td class="b5">solid</td>
    <td class="b6">double</td>
    <td class="b7">groove</td>
    <td class="b8">ridge</td>
  </tr>
  <tr>
    <td class="b9">inset</td>
    <td class="b10">outset</td>
  </tr>
</table>
```

#### CSS

```css
/* 테이블 스타일 */
table {
  border-width: 3px;
  background-color: #52e396;
}
tr,
td {
  padding: 2px;
}

/* border-style 예제 클래스 */
.b1 {
  border-style: none;
}
.b2 {
  border-style: hidden;
}
.b3 {
  border-style: dotted;
}
.b4 {
  border-style: dashed;
}
.b5 {
  border-style: solid;
}
.b6 {
  border-style: double;
}
.b7 {
  border-style: groove;
}
.b8 {
  border-style: ridge;
}
.b9 {
  border-style: inset;
}
.b10 {
  border-style: outset;
}
```

#### 결과

{{EmbedLiveSample('속성_값의_예시_표', 300, 200)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 테두리 관련 CSS 단축 속성: {{Cssxref("border")}}, {{Cssxref("border-width")}}, {{Cssxref("border-color")}}, {{Cssxref("border-radius")}}
