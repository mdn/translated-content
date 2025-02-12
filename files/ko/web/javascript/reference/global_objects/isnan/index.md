---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

{{jsSidebar("Objects")}}

**`isNaN()`** 함수는 어떤 값이 {{jsxref("NaN")}}인지 판별합니다. `isNaN` 함수는 몇몇 [혼란스러운 케이스](special-behavior)을 가지고 있으므로, ECMAScript 2015에서 추가한 {{jsxref("Number.isNaN()")}}으로 바꾸는 편이 좋을 수도 있습니다.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - isNaN()")}}

```js interactive-example
function milliseconds(x) {
  if (isNaN(x)) {
    return "Not a Number!";
  }
  return x * 1000;
}

console.log(milliseconds("100F"));
// Expected output: "Not a Number!"

console.log(milliseconds("0.0314E+2"));
// Expected output: 3140
```

## 구문

```js
isNaN(value);
```

### 매개변수

- `value`
  - : 테스트되는 값.

### 반환 값

주어진 값이 {{jsxref("NaN")}}이면 `true`, 아니면 `false`.

## 설명

### `isNaN` 함수의 필요성

JavaScript의 다른 모든 값과 달리, {{jsxref("NaN")}}은 같음 연산(`==`, `===`)을 사용해 판별할 수 없습니다. `NaN == NaN`, `NaN === NaN`은 `false`로 평가되기 때문입니다. 그래서 `NaN`을 판별하는 함수가 필요합니다.

### `NaN` 값의 기원

`NaN` 값은 산술 연산이 **정의되지 않은** 결과 또는 **표현할 수 없는** 결과를 도출하면 생성되며, 반드시 오버플로 조건을 나타내는 것은 아닙니다. 숫자가 아닌 값의 변환을 시도했으나 알맞은 원시 숫자 값이 없는 경우의 결과도 `NaN`입니다.

예를 들어 0을 0으로 나누면 `NaN`이지만, 다른 수를 0으로 나누면 그렇지 않습니다.

### <a name="special-behavior"></a>혼란스러운 특별 케이스 행동

`isNaN` 함수 스펙의 아주 초기 버전 이후로, 숫자 아닌 인수를 위한 행동이 혼란스럽습니다. `isNaN` 함수의 인수가 [Number](http://es5.github.com/#x8.5) 형이 아닌 경우, 그 값은 먼저 숫자로 강제됩니다. 결과값은 그 뒤에 {{jsxref("NaN")}}인지 결정하기 위해 테스트됩니다. 따라서 숫자 형으로 강제된 결과 유효한 비 NaN 숫자값(특히 강제될 때 숫자값이 0 또는 1을 주는 빈 문자열 및 불린 원시형)이 되는 비 숫자의 경우, "false" 반환값은 예기치 않을 수 있습니다; 예를 들어 빈 문자열은 분명히 "not a number"입니다. 혼란(confusion)은 용어 "not a number"가 IEEE-754 부동 소수점 값으로 표현된 숫자에 특정 의미가 있다는 사실에서 생깁니다. 함수는 "이 값이, 숫자값으로 강제되는 경우, IEEE-754 'Not A Number' 값인가?"라는 질문에 답하는 것으로 해석되어야 합니다.

ECMAScript (ES2015) 최근 버전은 {{jsxref("Number.isNaN()")}} 함수를 포함합니다. `Number.isNaN(x)`는 `x`가 `NaN`인지 아닌지 테스트하는 믿을 수 있는 방법이 됩니다. 그러나 `Number.isNaN`으로도, `NaN`의 의미는 정확한 숫자 의미로 남아있고 단순히 "not a number"는 아닙니다. 그 대신에, `Number.isNaN`이 없을 경우에, 식 `(x != x)`은 변수 `x`가 `NaN`인지 아닌지 테스트하는 더 믿을 수 있는 방법입니다, 그 결과는 `isNaN`을 믿을 수 없게 하는 오탐(false positive)의 대상이 아니기에.

당신은 isNaN을 다음과 같이 생각할 수 있습니다:

```js
isNaN = function (value) {
  Number.isNaN(Number(value));
};
```

## 예제

```js
isNaN(NaN); // 참
isNaN(undefined); // 참
isNaN({}); // 참

isNaN(true); // 거짓
isNaN(null); // 거짓
isNaN(37); // 거짓

// 문자열
isNaN("37"); // 거짓: "37"은 NaN이 아닌 숫자 37로 변환됩니다
isNaN("37.37"); // 거짓: "37.37"은 NaN이 아닌 숫자 37.37로 변환됩니다
isNaN("123ABC"); // 참: parseInt("123ABC")는 123이지만 Number("123ABC")는 NaN입니다
isNaN(""); // 거짓: 빈 문자열은 NaN이 아닌 0으로 변환됩니다
isNaN(" "); // 거짓: 공백이 있는 문자열은 NaN이 아닌 0으로 변환됩니다

// dates
isNaN(new Date()); // 거짓
isNaN(new Date().toString()); // 참

// 이것이 허위 양성이고 isNaN이 완전히 신뢰할 수 없는 이유이다.
isNaN("blabla"); // 참: "blabla"는 숫자로 변환됩니다.
// 이것을 숫자로 parsing 하는 것을 실패하고 NaN을 반환한다.
```

### 유용한 특별 케이스 행동

`isNaN()`을 고려한 더 용도 중심 방법이 있습니다: `isNaN(x)`가 `false`를 반환하면, 그 식이 `NaN`을 반환하게 하지 않고 산술 식에 `x`를 쓸 수 있습니다. `true`를 반환하는 경우, `x`는 모든 산술 식이 `NaN`을 반환하게 합니다. 이는 JavaScript에서, `isNaN(x) == true`가 `NaN`을 반환하는 `x - 0`과 동일함(JavaScript에서 `x - 0 == NaN`가 항상 거짓을 반환하여 그것을 테스트할 수 없지만)을 뜻합니다. 실제로, `isNaN(x)`, `isNaN(x - 0)`, `isNaN(Number(x))`, `Number.isNaN(x - 0)` 및 `Number.isNaN(Number(x))`는 항상 같은 값을 반환하며 JavaScript에서 `isNaN(x)`는 그저 이러한 각각의 조건(terms)을 표현하는 가장 짧은 형태입니다.

예를 들어 함수에 인수가 산술 처리 가능한(숫자 "처럼" 쓸 수 있는)지를 테스트하기 위해 사용할 수 있습니다, 그렇지 않은 경우 기본 값 또는 다른 무언가를 제공해야 합니다. 이런 식으로 문맥에 따라 암시적인 값 변환을 제공하는 JavaScript의 다양성(versatility) 전체를 이용케 하는 함수를 가질 수 있습니다.

## 예시

```js
function increment(x) {
  if (isNaN(x)) x = 0;
  return x + 1;
}

// Number.isNaN()과 같은 효과:
function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
}

// 함수의 인수 x에 대해 다음 경우에,
// isNaN(x)는 항상 거짓, x가 실제 숫자가 아닐지라도
// 하지만 산술 식에 그대로
// 사용될 수 있습니다
increment(""); // 1: ""는 0으로 변환됩니다
increment(new String()); // 1: 빈 문자열을 나타내는 String 객체는 0으로 변환됩니다
increment([]); // 1: []는 0으로 변환됩니다
increment(new Array()); // 1: 빈 배열을 나타내는 Array 객체는 0으로 변환됩니다
increment("0"); // 1: "0"은 0으로 변환됩니다
increment("1"); // 2: "1"은 1로 변환됩니다
increment("0.1"); // 1.1: "0.1"은 0.1로 변환됩니다
increment("Infinity"); // Infinity: "Infinity"는 Infinity로 변환됩니다
increment(null); // 1: null은 0으로 변환됩니다
increment(false); // 1: false는 0으로 변환됩니다
increment(true); // 2: true는 1로 변환됩니다
increment(new Date()); // 밀리초로 현재 date/time + 1을 반환합니다

// 함수의 인수 x에 대해 다음 경우에,
// isNaN(x)는 항상 거짓이고 x는 실제로 숫자입니다
increment(-1); // 0
increment(-0.1); // 0.9
increment(0); // 1
increment(1); // 2
increment(2); // 3
// ... 등등 ...
increment(Infinity); // Infinity

// 함수의 인수 x에 대해 다음 경우에,
// isNaN(x)는 항상 참이고 x는 실제로 숫자가 아닙니다,
// 따라서 함수는 인수를 0으로 대체하고 1을 반환합니다
increment(String); // 1
increment(Array); // 1
increment("blabla"); // 1
increment("-blabla"); // 1
increment(0 / 0); // 1
increment("0/0"); // 1
increment(Infinity / Infinity); // 1
increment(NaN); // 1
increment(undefined); // 1
increment(); // 1

// isNaN(x)는 항상 isNaN(Number(x))과 같지만,
// x의 존재는 여기서 필수입니다!
isNaN(x) == isNaN(Number(x)); // x == undefined 포함 x의 어떤 값도 참,
// isNaN(undefined) == true 및 Number(undefined)가 NaN을 반환하기에,
// 하지만 ...
isNaN() == isNaN(Number()); // 거짓, isNaN() == true 및 Number() == 0 때문에
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
