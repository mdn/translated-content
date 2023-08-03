---
title: var()
slug: Web/CSS/var
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`var()`** 함수는 [사용자 지정 속성](/ko/docs/Web/CSS/--*), 또는 "CSS 변수"의 값을 다른 속성의 값으로 지정할 때 사용합니다.

```css
var(--header-color, blue);
```

`var()` 함수는 값이 아닌 속성 이름, 선택자 등 다른 곳에 사용할 수 없습니다. 시도할 경우 유효하지 않은 구문이 되거나, 변수와 관계없는 값이 됩니다.

## 구문

첫 번째 인수는 값을 가져올 사용자 지정 속성의 이름입니다. 선택적으로 제공할 수 있는 두 번째 인수는 대체값으로, 대상 사용자 지정 속성이 유효하지 않은 경우 대신 사용합니다.

{{csssyntax}}

> **참고:** 대체값 구문은 사용자 지정 속성 구문과 동일하게 쉼표를 허용합니다. 그러므로 `var(--foo, red, blue)`의 대체값은 쉼표까지 포함한 `red, blue`입니다. 말하자면 첫 번째 쉼표의 뒤쪽은 모두 대체값이 되는 것입니다.

### 값

- `<custom-property-name>`
  - : 두 개의 대시로 시작하는, 사용자 지정 속성의 이름을 나타내는 식별자.
- `<declaration-value>`
  - : 현재 맥락에서, 주어진 사용자 지정 속성이 유효하지 않으면 대신 사용할 대체값. 새 줄, 짝 없이 닫는 괄호(`)`, `]`, `}`) 세미콜론, 느낌표 등 특별한 의미를 가진 문자를 제외한 모든 문자를 사용할 수 있습니다.

## 예제

```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```

```css
/* Fallback */
/* In the component’s style: */
.component .header {
  color: var(
    --header-color,
    blue
  ); /* header-color isn’t set, and so remains blue, the fallback value */
}

.component .text {
  color: var(--text-color, black);
}

/* In the larger application’s style: */
.component {
  --text-color: #080;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("env","env(…)")}} – 사용자 에이전트가 통제하는 읽기 전용 환경 변수.
- [CSS 변수 사용하기](/ko/docs/Web/CSS/Using_CSS_variables)
