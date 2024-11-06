---
title: box-shadow
slug: Web/CSS/box-shadow
---

{{ CSSRef }}

`box-shadow` CSS 속성은 요소의 테두리를 감싼 그림자 효과를 추가합니다. 쉼표로 구문해서 여러 그림자 효과를 입힐 수 있습니다. 박스 그림자는 요소에서의 수평수직 거리(오프셋), 흐릿함과 확산 정도, 색상으로 이루어집니다.

{{EmbedInteractiveExample("pages/css/box-shadow.html")}}

`box-shadow` 속성은 거의 모든 요소의 테두리에서 그림자를 드리울 수 있도록 도와줍니다. {{cssxref("border-radius")}}가 요소에 함께 적용됐다면 박스 그림자의 모서리도 똑같이 둥근 모서리를 갖게 됩니다. 여러 그림자의 z축 순서는 {{cssxref("text-shadow")}}와 동일하게 처음 그림자일수록 위로 올라옵니다.

[박스 그림자 생성기](/ko/docs/Web/CSS/CSS_Background_and_Borders/Box-shadow_generator)는 상호작용형 도구로, 쉽게 `box-shadow`의 값을 생성할 수 있습니다.

## 구문

```css
/* offset-x | offset-y | color */
box-shadow: 60px -16px teal;

/* offset-x | offset-y | blur-radius | color */
box-shadow: 10px 5px 5px black;

/* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

/* inset | offset-x | offset-y | color */
box-shadow: inset 5em 1em gold;

/* Any number of shadows, separated by commas */
box-shadow:
  3px 3px red,
  -1em 0 0.4em olive;

/* Global keywords */
box-shadow: inherit;
box-shadow: initial;
box-shadow: unset;
```

하나의 `box-shadow`는 다음 구성요소로 지정할 수 있습니다.

- 두 개에서 네 개의 {{cssxref("&lt;length&gt;")}} 값.

  - 두 개의 값을 사용하면 `<offset-x><offset-y>`로 분석합니다.
  - 세 번째 값이 주어지면 `<blur-radius>`로 분석합니다.
  - 네 번째 값이 주어지면 `<spread-radius>`로 분석합니다.

- 선택사항으로 `inset` 키워드.
- 선택사항으로 {{cssxref("&lt;color&gt;")}} 값.

### 값

- `inset`

  - : 값을 지정하지 않으면(기본값) 요소가 공중에 떠있는 것처럼 밖에 드리우는 그림자가 됩니다.

    `inset` 키워드가 존재하면 요소가 움푹 들어간 것처럼 그림자가 요소의 테두리 안, 배경색 위, 내부 콘텐츠 밑에 그려집니다.

- `<offset-x>` `<offset-y>`

  - : 그림자의 위치를 설정하는 두 개의 {{cssxref("&lt;length&gt;")}} 값입니다. `<offset-x>`는 수평 거리를 의미하며 음수 값은 그림자를 요소의 왼쪽에 표시합니다. `<offset-y>`는 수직 거리를 의미하며 음수 값은 그림자를 요소의 위쪽에 표시합니다. 가능한 단위는 {{cssxref("&lt;length&gt;")}}를 참고하세요.

  두 값이 모두 `0`이면 그림자가 요소 바로 뒤쪽에 위치하며, `<blur-radius>` 또는 `<spread-radius>`가 존재하면 흐려지는 효과를 볼 수 있습니다.

- `<blur-radius>`

  - : 세 번째 {{cssxref("&lt;length&gt;")}} 값입니다. 크면 클 수록 그림자 테두리가 흐려지므로 크기는 더 커지고 색은 더 밝아집니다. 음수 값은 사용할 수 없습니다. 값을 설정하지 않으면 `0`이 되어 테두리가 선명해집니다. 명세는 흐림 효과의 지름을 어떻게 계산해야 하는지 정확한 알고리즘은 명시하지 않았지만 대신 다음과 같이 설명하고 있습니다.

  …for a long, straight shadow edge, this should create a color transition the length of the blur distance that is perpendicular to and centered on the shadow's edge, and that ranges from the full shadow color at the radius endpoint inside the shadow to fully transparent at the endpoint outside it.

- `<spread-radius>`
  - : 네 번째 {{cssxref("&lt;length&gt;")}} 값입니다. 양수 값은 그림자가 더 커지고 확산하며, 음수 값은 그림자가 줄어듭니다. 기본값은 `0`(그림자와 요소 크기 동일)입니다.
- `<color>`

  - : 가능한 키워드와 표기법은 {{cssxref("&lt;color&gt;")}}를 참고하세요.

    기본값은 브라우저에 따라 다릅니다. 보통 {{cssxref("color")}} 속성의 값을 사용하지만, Safari는 투명한 그림자가 기본값입니다.

### 보간

Each shadow in the list (treating `none` as a 0-length list) is interpolated via the color (as color) component, and x, y, blur, and (when appropriate) spread (as length) components. For each shadow, if both input shadows are or are not `inset`, then the interpolated shadow must match the input shadows in that regard. If any pair of input shadows has one `inset` and the other not `inset`, the entire shadow list is uninterpolable. If the lists of shadows have different lengths, then the shorter list is padded at the end with shadows whose color is `transparent`, all lengths are `0`, and whose `inset` (or not) matches the longer list.

### 형식 구문

{{csssyntax}}

## 예제

- [box-shadow test](http://www.elektronotdienst-nuernberg.de/bugs/box-shadow_inset.html)
- [box-shadow tutorial and examples](http://markusstange.wordpress.com/2009/02/15/fun-with-box-shadows/)

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("&lt;color&gt;")}} 자료형
- Other color-related properties: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("caret-color")}}, and {{cssxref("column-rule-color")}}
- [Applying color to HTML elements using CSS](/ko/docs/Web/HTML/Applying_color)
