---
title: border-image-slice
slug: Web/CSS/border-image-slice
---

{{CSSRef}}

**`border-image-slice`** [CSS](/ko/docs/Web/CSS) 속성은 {{cssxref("border-image-source")}}로 설정한 이미지를 여러 개의 영역으로 나눕니다. 이렇게 나눠진 영역이 요소의 [테두리 이미지](/ko/docs/Web/CSS/border-image)를 이룹니다.

{{EmbedInteractiveExample("pages/css/border-image-slice.html")}}

이미지는 네 개의 꼭지점, 네 개의 모서리, 한 개의 중앙 총 9개의 영역으로 나눠집니다. 상하좌우 각각의 모서리에서 주어진 거리만큼 떨어진 네 개의 분할선이 영역의 크기를 결정합니다.

[![The nine regions defined by the border-image or border-image-slice properties](/files/3814/border-image-slice.png)](/files/3814/border-image-slice.png)

위의 도표로 구역이 어떻게 나뉘는지 확인할 수 있습니다.

- 1-4번 구역은

  꼭지점 영역

  입니다. 코너 영역은 최종 테두리 이미지에서도 코너를 이루며 한 번씩만 그려집니다.

- 5-8번 구역은

  모서리 영역

  입니다. 모서리 영역은 최종 테두리 이미지의 크기에 맞도록 [반복하여 그리거나 크기를 조정하는 등 변형](/ko/docs/Web/CSS/border-image-repeat)됩니다.

- 9번 구역은

  중앙 영역

  입니다. 기본값으로는 쓰이지 않지만, `fill` 키워드를 지정한 경우 배경 이미지처럼 사용합니다.

{{cssxref("border-image-repeat")}}, {{cssxref("border-image-width")}}, {{cssxref("border-image-outset")}} 속성이 최종 테두리 이미지에서 각 영역의 사용 방법을 지정합니다.

## 구문

```css
/* 모든 방향 */
border-image-slice: 30%;

/* 세로방향 | 가로방향 */
border-image-slice: 10% 30%;

/* 위 | 가로방향 | 아래 */
border-image-slice: 30 30% 45;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
border-image-slice: 7 12 14 5;

/* `fill` 키워드 */
border-image-slice: 10% fill 7 12;

/* 전역 값 */
border-image-slice: inherit;
border-image-slice: initial;
border-image-slice: unset;
```

`border-image-slice` 속성은 한 개에서 네 개의 `<number>` 또는 `<percentage>` 값을 사용해 지정할 수 있습니다. 각각의 숫자는 네 방향 분할선의 위치를 나타냅니다. 음수 값은 유효하지 않고, 최대 크기보다 큰 값은 `100%`로 잘립니다.

- **한 개의 값**을 지정하면, 모든 분할선의 위치가 각각의 기준 모서리에서 동일한 거리만큼 떨어진 곳으로 설정됩니다.
- **두 개의 값**을 지정하면, 첫 번째 값은 **위와 아래** 분할선, 두 번째 값은 **왼쪽과 오른쪽** 분할선의 위치를 설정합니다.
- **세 개의 값**을 지정하면, 첫 번째 값은 **위**, 두 번째 값은 **왼쪽과 오른쪽**, 세 번째 값은 **아래** 분할선의 위치를 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 분할선의 거리를 순서대로 지정합니다. (시계방향)

선택적으로 아무데나 `fill` 키워드를 추가할 수 있습니다.

### 값

- {{cssxref("&lt;number&gt;")}}
  - : 모서리에서 분할선까지의 픽셀 거리(래스터 이미지), 또는 좌표 거리(벡터 이미지). 벡터 이미지에서 숫자는 원본 이미지가 아닌 요소의 크기에 상대적이므로 보통 백분율을 선호합니다.
- {{cssxref("&lt;percentage&gt;")}}
  - : 모서리에서 분할선까지의 백분율 거리. 가로축은 원본 이미지의 너비에, 세로축은 이미지의 높이에 상대적입니다.
- `fill`
  - : 중앙 영역을 보존하여 배경 이미지처럼 사용. 실제 {{cssxref("background")}} 속성보다 위에 그려집니다. 중앙 영역 이미지는 위와 왼쪽 모서리 영역의 크기에 맞도록 늘어납니다.

### 형식 구문

{{csssyntax}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}
