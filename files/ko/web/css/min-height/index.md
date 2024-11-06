---
title: min-height
slug: Web/CSS/min-height
---

{{CSSRef}}

**`max-height`** [CSS](/ko/docs/CSS) 속성은 요소의 최소 높이를 설정합니다. `min-height`는 {{cssxref("height")}} 속성의 [사용값](/ko/docs/Web/CSS/used_value)이 자신의 값보다 작아지는걸 방지합니다.

{{EmbedInteractiveExample("pages/css/min-height.html")}}

`min-height`가 {{cssxref("max-height")}} 또는 {{cssxref("height")}}보다 커지면 요소의 높이는 `min-height`의 값을 사용합니다.

## 구문

```css
/* <length> 값 */
min-height: 3.5em;

/* <percentage> 값 */
min-height: 10%;

/* 키워드 값 */
min-height: max-content;
min-height: min-content;
min-height: fit-content;
min-height: fill-available;

/* 전역 값 */
min-height: inherit;
min-height: initial;
min-height: unset;
```

### 값

- {{cssxref("&lt;length&gt;")}}
  - : 고정 길이로 나타낸 최대 높이. 음수 값은 유효하지 않습니다.
- {{cssxref("&lt;percentage&gt;")}}
  - [: 컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) 높이에 대한 백분율로 나타낸 최대 높이. 음수 값은 유효하지 않습니다.

#### 키워드 값

- `auto`
  - : 최소 높이를 정하지 않음.
- `max-content` {{ experimental_inline() }}
  - : 본질적인 선호 높이.
- `min-content` {{ experimental_inline() }}
  - : 본질적인 최소 높이.
- `fill-available` {{ experimental_inline() }}
  - : 컨테이닝 블록의 높이에서 세로축 안쪽 및 바깥 여백과 테두리의 공간을 제외한 높이. (일부 브라우저는 매우 오래 된 이름인 `available`로 구현함을 참고하세요.)
- `fit-content` {{ experimental_inline() }}
  - : CSS3 Box 모듈에 따라 `min-content`의 다른 이름. CSS3 Sizing 모듈은 더 복잡한 알고리즘을 정의하지만, 모든 브라우저에서 실험 기능으로도 구현하지 않습니다.

### 형식 구문

{{csssyntax}}

## 예제

```css
table {
  min-height: 75%;
}

form {
  min-height: 0;
}
```

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [박스 모델 입문](/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model), {{cssxref("box-sizing")}}
- {{ Cssxref("height") }}, {{ Cssxref("max-height") }}
