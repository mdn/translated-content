---
title: 함수 선언
slug: Web/JavaScript/Reference/Statements/function
---

{{jsSidebar("Statements")}}

**함수 선언**(**function declaration**)은 지정된 매개변수(parameter)를 갖는 함수를 정의합니다.

{{jsxref("Function")}} 생성자나 {{jsxref("Operators/function", "함수 표현식(function expression)")}}을 사용해서 정의할 수도 있습니다.

{{EmbedInteractiveExample("pages/js/statement-function.html")}}

## 구문

```js
    function name([param[, param,[..., param]]]) { [statements] }
```

- `name`
  - : 함수 이름.
- `param`
  - : 함수로 전달되는 인수(argument)의 이름. 인수의 최대 개수는 엔진마다 다름.
- `statements`
  - : 함수의 몸통(body)을 구성하는 문(statement).

## 설명

함수 선언으로 생성된 함수는 `Function` 객체로, `Function` 객체의 모든 속성(property), 메서드 및 행위 특성(behavior)을 갖습니다. 함수에 관한 더 자세한 정보는 {{jsxref("Function")}} 참조하시기 바랍니다.

함수는 또한 표현식({{jsxref("Operators/function", "함수 표현식")}} 참조)을 사용하여 생성될 수 있습니다.

기본적으로 함수는 `undefined`를 반환합니다. 다른 값을 반환하기 위해서는, 함수는 반환값을 지정하는 {{jsxref("Statements/return", "return")}} 문이 있어야 합니다.

### 조건부로 생성되는 함수

함수는 조건부로 선언될 수 있습니다. 즉, function 문은 `if` 문 안에 들어갈 수 있습니다. 하지만, 구현에 따라 결과에 일관성이 없으므로 이 패턴은 실제 코드에서는 사용해선 안됩니다. 조건부로 함수를 생성하고자 한다면, 함수 표현식(function expression)을 대신 사용하세요.

```js
var hoisted = "foo" in this;
console.log(
  `'foo' name ${
    hoisted ? "is" : "is not"
  } hoisted. typeof foo is ${typeof foo}`,
);
if (false) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Firefox:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Edge:
// 'foo' name is not hoisted. typeof foo is undefined
//
// In Safari:
// 'foo' name is hoisted. typeof foo is function
```

결과는 참으로 평가되는 조건과 정확하게 일치합니다.

```js
var hoisted = "foo" in this;
console.log(
  `'foo' name ${
    hoisted ? "is" : "is not"
  } hoisted. typeof foo is ${typeof foo}`,
);
if (true) {
  function foo() {
    return 1;
  }
}

// In Chrome:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Firefox:
// 'foo' name is hoisted. typeof foo is undefined
//
// In Edge:
// 'foo' name is not hoisted. typeof foo is undefined
//
// In Safari:
// 'foo' name is hoisted. typeof foo is function
```

### 함수 선언 끌어올리기

자바스크립트에서 함수 선언은 그 선언을 둘러싼 함수의 최상부나 전역 범위(global scope)로 끌어올려집니다.

```js
hoisted(); // logs "foo"

function hoisted() {
  console.log("foo");
}
```

{{jsxref("Operators/function", "함수 표현식")}}은 끌어올려지지 않으므로 주의하세요:

```js
notHoisted(); // TypeError: notHoisted is not a function

var notHoisted = function () {
  console.log("bar");
};
```

## 예제

### `function` 사용하기

다음 코드는 제품 `a`, `b` 및 `c`의 단위 판매량이 주어졌을 때, 총 판매량을 반환하는 함수를 선언합니다.

```js
function calc_sales(units_a, units_b, units_c) {
  return units_a * 79 + units_b * 129 + units_c * 699;
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Functions", "함수 및 함수 범위")}}
- {{jsxref("Function")}}
- {{jsxref("Operators/function", "함수 표현식")}}
- {{jsxref("Statements/function*", "function* 문")}}
- {{jsxref("Operators/function*", "function* 식")}}
- {{jsxref("Functions/Arrow_functions", "화살표 함수")}}
- {{jsxref("GeneratorFunction")}}
