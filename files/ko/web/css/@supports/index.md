---
title: "@supports"
slug: Web/CSS/@supports
---

{{CSSRef}}

**`@supports`** [CSS](/ko/docs/Web/CSS) [@규칙](/ko/docs/Web/CSS/At-rule)은 주어진 하나 이상의 CSS 기능을 브라우저가 지원하는지에 따라 다른 스타일 선언을 할 수 있는 방법을 제공합니다. 이를 기능 쿼리(feature query)라고 부릅니다. `@supports`는 스타일의 최상위 단계, 또는 다른 [조건부 그룹 규칙](/ko/docs/Web/CSS/At-rule#조건부_그룹_규칙)에 중첩해 위치할 수 있습니다.

```css
@supports (display: grid) {
  div {
    display: grid;
  }
}
```

```css
@supports not (display: grid) {
  div {
    float: right;
  }
}
```

JavaScript에서, `@supports`는 CSS 객체 모델 인터페이스 {{DOMxRef("CSSSupportsRule")}}로 접근할 수 있습니다.

## 구문

`@supports` @규칙은 하나의 선언 블록을 특정 기능의 브라우저 지원 조건과 연결할 수 있습니다. _지원 조건은 하나 이상의 키-값 쌍을 논리곱(`and`), 논리합(`or`), 부정(`not`으로 연결해 구성합니다. 괄호로 묶어 우선순위를_ 지정할 수도 있습니다.

### 선언 구문

가장 기본적인 지원 조건은 단순한 선언(속성 이름과 그 값)입니다. 선언은 괄호로 묶여야 합니다. 다음 예제는 브라우저가 {{cssxref("transform-origin")}} 속성의 값으로 `5% 5%`가 유효하다고 여길 때 통과합니다.

```css
@supports (transform-origin: 5% 5%) {
}
```

### 함수 구문

두 번째 기본적인 지원 조건은 지원 함수로, 모든 브라우저가 함수 구문을 지원하지만 지원 함수 자체는 아직 표준화 중입니다.

#### `selector()` {{experimental_inline}}

브라우저가 주어진 선택자를 지원하는지 판별합니다. 다음 예제는 브라우저가 [자식 결합자](/ko/docs/Web/CSS/Child_combinator)를 지원할 때 통과합니다.

```css
@supports selector(A > B) {
}
```

### `not` 연산자

`not` 연산자를 어떤 표현식 앞에 붙이면 그 반대 결과를 낳는 새로운 표현식을 생성합니다. 다음 예제는 브라우저가 {{cssxref("transform-origin")}} 속성의 값으로 `10em 10em 10em`이 **유효하지 않다**고 여길 때 통과합니다.

```css
@supports not (transform-origin: 10em 10em 10em) {
}
```

다른 연산자와 마찬가지로, 선언의 복잡도와 관계 없이 `not` 연산자를 적용할 수 있습니다. 다음 두 예시는 모두 유효한 구문입니다.

```css
@supports not (not (transform-origin: 2px)) {
}
@supports (display: grid) and (not (display: inline-grid)) {
}
```

> **참고:** 최상위 `not` 연산자는 괄호로 감싸지 않아도 괜찮습니다. `and`, `or` 등 다른 연산자와 함께 사용할 때는 괄호가 필요합니다.

### `and` 연산자

`and` 연산자는 두 표현식의 논리곱으로부터 새로운 표현식을 생성합니다. 새로운 표현식은 두 구성 표현식이 **모두 참일 때만** 참을 반환합니다. 다음 예제는 두 개의 구성 표현식이 동시에 참이어야만 통과합니다.

```css
@supports (display: table-cell) and (display: list-item) {
}
```

다수의 논리곱은 괄호 없이 병치할 수 있습니다. 다음 두 예시는 모두 유효한 구문입니다.

```css
@supports (display: table-cell) and (display: list-item) and (display: run-in) {
}
@supports (display: table-cell) and ((display: list-item) and (display: run-in)) {
}
```

### `or` 연산자

`or` 연산자는 두 표현식의 논리합으로부터 새로운 표현식을 생성합니다. 새로운 표현식은 두 구성 표현식 중 **어느 한 쪽이라도 참이면** 참을 반환합니다. 다음 예제는 두 개의 구성 표현식 중 하나라도 참이면 통과합니다.

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) {
}
```

다수의 논리합은 괄호 없이 병치할 수 있습니다. 다음 두 예시는 모두 유효한 구문입니다.

```css
@supports (transform-style: preserve) or (-moz-transform-style: preserve) or
  (-o-transform-style: preserve) or (-webkit-transform-style: preserve) {
}

@supports (transform-style: preserve-3d) or
  (
    (-moz-transform-style: preserve-3d) or
      (
        (-o-transform-style: preserve-3d) or
          (-webkit-transform-style: preserve-3d)
      )
  ) {
}
```

> **참고:** `and`와 `or` 연산자를 같이 사용할 때는 괄호를 사용해 연산자 적용 순서를 정의해야 합니다. 그렇지 않으면 조건이 유효하지 않으므로 @-규칙 전체를 무시합니다.

### 형식 구문

{{csssyntax}}

## 예제

### 주어진 CSS 속성의 지원 여부 판별

```css
@supports (animation-name: test) {
    … /* 애니메이션 속성을 접두사 없이 사용할 수 있을 때 CSS 적용 */
    @keyframes { /* 다른 @-규칙을 중첩 가능 */
      …
    }
}
```

### 주어진 CSS 속성 및 접두사 버전의 지원 여부 판별

```css
@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* 접두사가 붙더라도 3D 변형을 지원하면 CSS 적용 */
}
```

### 특정 CSS 속성의 미지원 여부 판별

```css
@supports not ((text-align-last: justify) or (-moz-text-align-last: justify) ){
    … /* text-align-last: justify를 대체할 CSS */
}
```

### 사용자 정의 속성 지원 여부 판별

```css
@supports (--foo: green) {
  body {
    color: var(--varName);
  }
}
```

### 선택자 지원 여부 판별 (예: {{CSSxRef(":is", ":is()")}})

{{SeeCompatTable}}

```css
/* :is()를 지원하지 않는 브라우저에서는 무시함 */
:is(ul, ol) > li {
  … /* :is() 선택자를 지원할 때 적용할 CSS */
}

@supports not selector(:is(a, b)) {
  /* :is()를 지원하지 않을 때 대체할 CSS */
  ul > li,
  ol > li {
    … /* :is()를 지원하지 않을 때 적용할 CSS */
  }
}

@supports selector(:nth-child(1n of a, b)) {
  /* @supports로 먼저 묶지 않으면 :nth-child()의 of 구문을
     지원하지 않는 브라우저에서 스타일을 잘못 적용할 수 있음 */
  :is(:nth-child(1n of ul, ol) a,
  details > summary) {
    … /* :is() 선택자와 :nth-child()의 of 구문을 지원할 때 적용할 CSS */
  }
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSSOM 클래스 {{ domxref("CSSSupportsRule") }}과, JavaScript를 통해 동일한 판별을 수행할 수 있는 {{ domxref("CSS.supports") }} 메서드
