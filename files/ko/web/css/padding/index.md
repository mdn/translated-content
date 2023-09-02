---
title: padding
slug: Web/CSS/padding
---

{{CSSRef}}

**`padding`** [CSS](/ko/CSS) 속성은 요소의 네 방향 [안쪽 여백 영역](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model#padding-area)을 설정합니다. {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}의 단축 속성입니다.

{{EmbedInteractiveExample("pages/css/padding.html")}}

요소의 안쪽 여백 영역은 콘텐츠와 테두리 사이의 공간입니다.

> **참고:** `padding`은 요소의 내부에 빈 공간을 추가합니다. 반면 {{cssxref("margin")}}은 요소의 **주위**에 빈 공간을 만듭니다.

## 구문

```css
/* 네 면 모두 적용 */
padding: 1em;

/* 세로방향 | 가로방향 */
padding: 5% 10%;

/* 위 | 가로방향 | 아래 */
padding: 1em 2em 2em;

/* 위 | 오른쪽 | 아래 | 왼쪽 */
padding: 5px 1em 0 2em;

/* 전역 값 */
padding: inherit;
padding: initial;
padding: unset;
```

padding 속성은 한 개, 두 개, 세 개, 혹은 네 개의 값으로 지정할 수 있습니다. 각 값은 {{cssxref("&lt;length&gt;")}}, {{cssxref("&lt;percentage&gt;")}} 중 하나로, 음수 값은 유효하지 않습니다.

- **한 개의 값**은 모든 네 면의 여백을 설정합니다.
- **두 개의 값**을 지정하면 첫 번째는 **위와 아래**, 두 번째는 **왼쪽과 오른쪽** 여백을 설정합니다.
- **세 개의 값**을 지정하면 첫 번째는 **위**, 두 번째는 **왼쪽과 오른쪽,** 세 번째 값은 **아래** 여백을 설정합니다.
- **네 개의 값**을 지정하면 각각 **상, 우, 하, 좌** 순서로 여백을 지정합니다. (시계방향)

### 값

- **{{cssxref("length")}}**
  - : 여백의 크기로 고정값 사용.
- {{cssxref("percentage")}}
  - : 여백의 크기로 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 너비의 백분율 사용.

### 형식 구문

{{csssyntax}}

## 예제

### 간단한 예제

#### HTML

```html
<h4>평범한 안쪽 여백을 가진 요소.</h4>
<h3>엄청난 안쪽 여백을 가진 요소!</h3>
```

#### CSS

```css
h4 {
  background-color: lime;
  padding: 20px 50px;
}

h3 {
  background-color: cyan;
  padding: 110px 50px 50px 110px;
}
```

{{EmbedLiveSample('간단한_예제', '100%', 300)}}

### 더 많은 예제

```css
padding: 5%; /* 모두 5% */

padding: 10px; /* 모두 10px */

padding: 10px 20px;
/* 상하: 10px */
/* 좌우: 20px */

padding: 10px 3% 20px;
/* 상: 10px */
/* 좌우: 3% */
/* 하: 20px */

padding: 1em 3px 30px 5px;
/* 상:  1em */
/* 우:  3px */
/* 하: 30px */
/* 좌:  5px */
```

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS 기본 박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}}, {{cssxref("padding-left")}}.
