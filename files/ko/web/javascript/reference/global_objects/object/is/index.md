---
title: Object.is()
slug: Web/JavaScript/Reference/Global_Objects/Object/is
---
{{JSRef}}

**`Object.is()`** 메서드는 두 값이 [같은 값](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)인지 결정합니다.

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

두 인수가 같은 값인지 여부를 나타내는 {{jsxref("Boolean")}}.

## 설명

`Object.is()`는 두 값이 [같은 값](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness)인지 결정합니다. 다음 중 하나를 만족하면 두 값은 같습니다.

- 둘 다 {{jsxref("undefined")}}
- 둘 다 {{jsxref("null")}}
- 둘 다 `true` 또는 둘 다 `false`
- 둘 다 같은 문자에 같은 길이인 문자열
- 둘 다 같은 객체
- 둘 다 숫자이며

  - 둘 다 `+0`
  - 둘 다 `-0`
  - 둘 다 {{jsxref("NaN")}}
  - 둘 다 0이나 {{jsxref("NaN")}}이 아니고 같은 값을 지님

이는 {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 연산자에 따른 같음과 같지 _않습니다_. {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 연산자는 같음을 테스트하기 전에 양 쪽(이 같은 형이 아니라면)에 다양한 강제(coercion)를 적용하지만(`"" == false`가 `true`가 되는 그런 행동을 초래), `Object.is`는 어느 값도 강제하지 않습니다.

이는 {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} 연산자에 따른 같음과도 같지 _않습니다_. {{jsxref("Operators/Comparison_Operators", "===", "#Identity")}} 연산자(와 {{jsxref("Operators/Comparison_Operators", "==", "#Equality")}} 연산자 역시)는 숫자값 `-0`과 `+0`을 같게 {{jsxref("Number.NaN")}}은 {{jsxref("NaN")}}과 같지 않게 여깁니다.

## 예제

```js
Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true

Object.is(null, null);       // true

// 특별한 경우
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
```

## 폴리필

```js
if (!Object.is) {
  Object.is = function(x, y) {
   // SameValue 알고리즘
    if (x === y) { // Steps 1-5, 7-10
     // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
   } else {
     // Step 6.a: NaN == NaN
     return x !== x && y !== y;
   }
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [같음 비교 및 똑같음](/ko/docs/Web/JavaScript/Equality_comparisons_and_sameness) — 똑같음 내장 기능 3가지 모두 비교
