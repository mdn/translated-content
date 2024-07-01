---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
l10n:
  sourceCommit: fcd80ee4c8477b6f73553bfada841781cf74cf46
---

{{JSRef}}

**`Object.is()`** 정적 메서드는 두 값이 [같은 값](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)인지 결정합니다.

{{EmbedInteractiveExample("pages/js/object-is.html")}}

## 구문

```js
Object.is(value1, value2);
```

### 매개변수

- `value1`
  - : 비교할 첫 번째 값.
- `value2`
  - : 비교할 두 번째 값.

### 반환 값

두 인수가 같은 값인지 여부를 나타내는 불리언.

## 설명

`Object.is()`는 두 값이 [같은 값](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)인지 결정합니다. 다음 중 하나를 만족하면 두 값은 같습니다.

- 둘 다 {{jsxref("undefined")}}
- 둘 다 {{jsxref("null")}}
- 둘 다 `true` 또는 둘 다 `false`
- 둘 다 같은 순서로 같은 문자에 같은 길이인 문자열
- 둘 다 같은 객체 (두 값 모두 메모리에서 같은 객체를 참조하는 것을 의미)
- 둘 다 숫자이며

  - 둘 다 `+0`
  - 둘 다 `-0`
  - 둘 다 {{jsxref("NaN")}}
  - 둘 다 0이나 {{jsxref("NaN")}}이 아니고, 같은 값을 지님

`Object.is()`는 [`==`](/ko/docs/Web/JavaScript/Reference/Operators/Equality) 연산자와 같지 않습니다. `==` 연산자는 같음을 테스트하기 전에 양 쪽(이 같은 형이 아니라면)에 다양한 강제(coercion)를 적용하지만(`"" == false`가 `true`가 되는 것과 같은 행동을 초래), `Object.is`는 어느 값도 강제하지 않습니다.

`Object.is()`는 [`===`](/ko/docs/Web/JavaScript/Reference/Operators/Strict_equality) 연산자와도 같지 않습니다. `Object.is()`와 `===`의 유일한 차이는 부호 있는 0과 `NaN` 값들의 처리입니다. `===` 연산자(및 `==` 연산자)는 숫자값 `-0`과 `+0`을 같게 처리하지만, {{jsxref("NaN")}}은 서로 같지 않게 처리합니다.

## 예제

### Object.is() 사용

```js
// Case 1: 평가 결과는 ===을 사용한 것과 동일합니다
Object.is(25, 25); // true
Object.is("foo", "foo"); // true
Object.is("foo", "bar"); // false
Object.is(null, null); // true
Object.is(undefined, undefined); // true
Object.is(window, window); // true
Object.is([], []); // false
const foo = { a: 1 };
const bar = { a: 1 };
const sameFoo = foo;
Object.is(foo, foo); // true
Object.is(foo, bar); // false
Object.is(foo, sameFoo); // true

// Case 2: 부호 있는 0
Object.is(0, -0); // false
Object.is(+0, -0); // false
Object.is(-0, -0); // true

// Case 3: NaN
Object.is(NaN, 0 / 0); // true
Object.is(NaN, Number.NaN); // true
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Object.is` 폴리필](https://github.com/zloirock/core-js#ecmascript-object)
- [동치 비교 및 동일성](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness) — 동일성 내장 기능 3가지 모두 비교
