---
title: abs()
slug: Web/CSS/abs
l10n:
  sourceCommit: 8e4584c695829f1c404b03fd3ac90cbebdf745d7
---

{{CSSRef}}

**`abs()`** [CSS](/ko/docs/Web/CSS) [함수](/ko/docs/Web/CSS/CSS_Functions)는 입력된 값의 절댓값을 반환하며, 이 값의 타입은 입력값과 동일합니다.

## 구문

```css
/* property: abs(expression) */
width: abs(20% - 100px);
```

### 매개변수

`abs(x)` 함수는 매개변수로 오직 하나의 값을 취합니다.

- `x`
  - : 숫자로 계산되는 식입니다.

### 반환 값

`x` 의 절댓값입니다.

- 만일 `x` 의 값이 양수이거나 `0⁺` 이라면 `x` 를 반환합니다.
- 그렇지 않으면 `-1 * x` 를 반환합니다.

### 형식 구문

{{CSSSyntax}}

## 예제

### 양수 변수

`abs()` 함수는 값이 항상 양수일 것이라고 보장할 수 있습니다. 아래 예제는 CSS 커스텀 속성인 `--font-size` 가 {{CSSxRef("font-size")}} 의 값으로 사용됩니다. 커스텀 속성을 `abs()` 함수로 감싸면 음수는 양수로 반환됩니다.

```css
h1 {
  font-size: abs(var(--font-size));
}
```

### 그라디언트 각도의 방향 제어하기

그라디언트의 방향 또한 `abs()` 함수를 이용하여 제어할 수 있습니다. 아래는 -45deg에 해당하는 각을 가진 그라디언트가 빨간색에서 파란색으로 변화하는 예제입니다. `abs()` 를 사용하여 값을 양수로 만들면 그라디언트는 파란색에서 빨간색으로 변화하게 됩니다.

```css
div {
  --deg: -45deg;
  background-image: linear-gradient(abs(var(--deg)), blue, red);
}
```

### 이전 버전과 호환하기

CSS `abs()` 함수를 지원하지 않는 구형 브라우저에서는 CSS {{CSSxRef("max")}} 함수를 이용하여 같은 결과를 도출할 수 있습니다. 다음 예제를 참고해 보세요.

```css
p {
  line-height: max(var(--lh), -1 * var(--lh));
}
```

{{CSSxRef("max")}} 함수를 사용하여 `var(--lh)` 와 `-1 * var(--lh)` 두 값 중 더 큰 양수를 반환합니다. `--lh` 가 양수든 음수이든 상관없이 계산 후 반환된 값은 항상 양수, 즉 절댓값이 됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef("sign")}}
