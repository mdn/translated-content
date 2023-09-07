---
title: Math.max()
slug: Web/JavaScript/Reference/Global_Objects/Math/max
---

{{JSRef}}

**Math.max()** 함수는 입력값으로 받은 0개 이상의 숫자 중 가장 큰 숫자를 반환합니다.

{{EmbedInteractiveExample("pages/js/math-max.html")}}

## 문법

```js
  Math.max()
  Math.max(값0)
  Math.max(값0, 값1)
  Math.max(값0, 값1, ... , 값N)

```

### 매개변수

- `값1, 값2, ...`
  - : 가장 큰 값을 선택하고 반환할 0개 이상의 숫자입니다.

### 반환 값

입력된 숫자 중 가장 큰 숫자를 반환합니다. 만약 인수 중 하나라도 숫자로 변환하지 못한다면 {{jsxref("NaN")}}로 반환합니다.
매개변수를 제공하지 않은 경우 결과는 -{{jsxref("Infinity")}}입니다.

## 설명

max ()는 Math의 정적 메서드이기 때문에 만든 Math 개체의 메서드가 아닌 항상 Math.max ()로 사용해야합니다. (Math는 생성자가 아닙니다).

만약 아무 요소도 주어지지 않았다면 -{{jsxref("Infinity")}}로 반환합니다.

만약 한 개 이상의 요소가 숫자로 변환되지 않는다면 {{jsxref("NaN")}}로 반환됩니다.

## 예제

### `Math.max()함수 사용하기`

```js
Math.max(10, 20); //  20
Math.max(-10, -20); // -10
Math.max(-10, 20); //  20
```

### 배열의 최대값 가져오기

{{jsxref("Array.prototype.reduce", "Array.reduce()")}} 숫자 배열의 최대 값을 찾는 데 사용할 수 있습니다.
숫자 배열의 요소, 각 값 비교 :

최대값을 찾는 데 사용할 수 있습니다.

```js
var arr = [1, 2, 3];
var max = arr.reduce(function (a, b) {
  return Math.max(a, b);
}, -Infinity);
```

다음 함수는 {{jsxref ( "Function.prototype.apply ()")}}을 사용하여 숫자 배열에서 최대 요소를 찾습니다. `getMaxOfArray([1, 2, 3])`는
`Math.max(1, 2, 3)`와 동일하지만 프로그래밍 방식으로 생성 된 모든 크기의 배열에서 `getMaxOfArray()`를 사용할 수 있습니다.

```js
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
```

새로운[스프레드
연산자](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)는 다음을 얻기 위해 솔루션을 `적용`하는 짧은 방법입니다.
배열의 최대값:

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

또한 {{jsxref("Operators/Spread_syntax", "spread operator")}}이 함수를 사용하면 배열의 숫자들 중 가장 큰 숫자를 쉽게 얻을 수 있습니다.

```js
var arr = [1, 2, 3];
var max = Math.max(...arr);
```

그러나, 두 스프레드 (`...`)와 `apply` 모두 실패하거나 배열에 요소가 너무 많은 경우 잘못된 결과를 반환합니다.
왜냐하면 배열이 함수 요소를 통과하기 때문입니다.
배열 요소를 함수 매개 변수로 사용할 수 있습니다.
[apply와
built-in 함수들의 사용법은 여기서 확인 할 수 있습니다.](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#using_apply_and_built-in_functions) `reduce`를 사용한 방법에는 해당 문제가 발생하지 않습니다.

## 표준

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{jsxref("Math.min()")}}
