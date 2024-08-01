---
title: 함수
slug: Web/JavaScript/Reference/Functions
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{jsSidebar("Functions")}}

보통 함수란 자신의 외부(재귀 함수의 경우 스스로) 코드가 호출할 수 있는 "하위 프로그램"입니다. 프로그램과 마찬가지로, 함수 역시 명령문의 시퀀스로 구성된 함수 본문을 가집니다. 함수에 값을 전달하면, 함수는 값을 반환할 것입니다.

JavaScript에서 함수는 다른 함수로 전달되거나 반환받을 수 있고, 변수와 속성을 할당받을 수도 있기 때문에 [일급 객체](/ko/docs/Glossary/First-class_Function)에 해당합니다. 또한 다른 객체와 마찬가지로 속성과 메서드를 가질 수 있습니다. 다른 객체와 구별되는 점은 함수를 호출할 수 있다는 점입니다.

[JavaScript 함수 안내서](/ko/docs/Web/JavaScript/Guide/Functions)에서 더 많은 예제와 설명을 확인하세요.

## 설명

함수 값은 일반적으로 [`함수`](/ko/docs/Web/JavaScript/Rference/Global_Objects/Function)의 인스턴스입니다. `함수` 객체의 속성 및 메서드에 대한 자세한 내용은 {{jsxref("Function")}}을 참조하세요. 호출 가능한 값으로 인해 [`typeof`](/ko/docs/Web/JavaScript/Rference/Operators/typeof)가 `"객체"` 대신 `"함수"`를 반환하게 됩니다.

> [!NOTE]
> 모든 호출 가능한 값이 `instanceof Function`인 것은 아닙니다. 예를 들어, `Function.prototype` 객체는 호출 가능하지만 `Function`의 인스턴스는 아닙니다. 함수의 [프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을 수동으로 설정하여 함수가 더 이상 `Function.prototype`에서 상속되지 않도록 할 수도 있습니다. 그러나 이러한 경우는 극히 드뭅니다.

### 반환 값

함수 실행이 [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return) 문에서 끝나지 않거나 `return` 키워드 뒤에 표현식이 없는 경우 반환 값은 {{jsxref("undefined")}}가 됩니다. `return`문을 사용하면 함수에서 임의의 값을 반환할 수 있습니다. 하나의 함수 호출은 하나의 값만 반환할 수 있지만, 객체 또는 배열을 반환하고 그 결과를 [구조 분해](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)하여 여러 값을 반환하는 효과를 나타낼 수 있습니다.

> **참고:** [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로 호출되는 생성자에는 반환값을 결정하는 다른 로직이 있습니다.

### 인수 전달

[매개변수와 전달인자](<https://ko.wikipedia.org/wiki/매개변수_(컴퓨터_프로그래밍)#매개변수와_전달인자>)의 의미는 약간 다르지만 MDN 웹 문서에서는 종종 같은 의미로 사용합니다. 간단한 예시입니다.

```js
function formatNumber(num) {
  return num.toFixed(2);
}

formatNumber(2);
```

이 예제에서 `num` 변수는 함수의 매개변수(parameter)라고 불리며, 괄호로 묶인 함수 정의 목록에 선언되어 있습니다. 런타임 유효성 검사 코드를 작성하지 않고는 JavaScript에서 시행할 수 없지만 `num` 매개변수에는 숫자가 들어갈 것입니다. `formatNumber(2)` 호출에서 숫자 `2`는 함수의 인수(argument)입니다. 즉, 함수 호출에서 함수에 실제로 전달되는 값입니다. 인수 값은 함수 내에서 해당 매개변수 이름 또는 [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체를 통해 접근할 수 있습니다.

인자는 항상 [값에 의한 호출](<https://ko.wikipedia.org/wiki/평가_전략_(컴퓨터_프로그래밍)#값에_의한_호출>)이 이루어지며 절대 참조에 의한 호출이 되지 않습니다. 즉, 함수가 매개변수를 재할당해도 그 값은 함수 외부에서 변경되지 않습니다. 더 정확히 말하면, 객체 인수는 [공유에 의한 호출](<https://ko.wikipedia.org/wiki/평가_전략_(컴퓨터_프로그래밍)#공유에_의한_호출>)이므로 객체의 속성이 변경되면 변경 사항이 함수 외부에 영향을 미칩니다. 예시를 들어보겠습니다.

```js
function updateBrand(obj) {
  // 객체 값의 변화는 함수 외부에서 볼 수 있습니다.
  obj.brand = "쌍용";
  // 매개 변수를 재할당해도
  // 함수 외부의 변수 값에는 영향을 미치지 않습니다.
  obj = null;
}

const car = {
  brand: "현대",
  model: "엑셀",
  year: 1994,
};

console.log(car.brand); // 현대

// 객체 참조를 함수에 전달합니다.
updateBrand(car);

// updateBrand의 호출로 car 객체의 값이 변합니다.
console.log(car.brand); // 쌍용
```

[`this` 키워드](/ko/docs/Web/JavaScript/Reference/Operators/this)는 함수가 접근하는 객체를 참조하며, 현재 실행 중인 함수를 참조하는 것이 아니므로 함수 내에서도 함수 값을 이름으로 참조해야 합니다.

### 함수 정의하기

크게 보면 JavaScript에는 네 가지 종류의 함수가 있습니다.

- 일반 함수: 무엇이든 반환할 수 있으며, 호출 후 항상 완료까지 실행됩니다.
- Generator 함수: [`Generator`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator) 객체를 반환하며, [`yield`](/ko/docs/Web/JavaScript/Reference/Operators/yield) 연산자를 사용하여 일시 중지 및 재개할 수 있습니다.
- 비동기 함수: [`Promise`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 반환하며, [`await`](/ko/docs/Web/JavaScript/Reference/Operators/await) 연산자를 사용하여 일시 중지 및 재개할 수 있습니다.
- 비동기 Generator 함수: [`AsyncGenerator`](/ko/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator) 객체를 반환하며, `await` 및 `yield` 연산자를 모두 사용할 수 있습니다.

모든 종류의 함수에 대해 세 가지 방법으로 정의할 수 있습니다.

- 선언
  - : [`함수 선언`](/ko/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/ko/docs/Web/JavaScript/Reference/Statements/function*), [`async function`](/ko/docs/Web/JavaScript/Reference/Statements/async_function), [`async function*`](/ko/docs/Web/JavaScript/Reference/Statements/async_function*)
- 표현식
  - : [`함수 표현식`](/ko/docs/Web/JavaScript/Reference/Operators/function), [`function*`](/ko/docs/Web/JavaScript/Reference/Operators/function*), [`async function 표현식`](/ko/docs/Web/JavaScript/Reference/Operators/async_function), [`async function*`](/ko/docs/Web/JavaScript/Reference/Operators/async_function*)
- 생성자
  - : [`Function()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/Function), [`GeneratorFunction()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction), [`AsyncFunction()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/AsyncFunction), [`AsyncGeneratorFunction()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction/AsyncGeneratorFunction)

또한 [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions)와 [메서드](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)를 정의하는 특수 구문이 있어 보다 정확한 의미로 사용할 수 있습니다. [Classes](/ko/docs/Web/JavaScript/Reference/Classes)는 `new` 없이 호출하면 에러가 발생하기 때문에 개념적으로는 함수가 아니지만 `Function.prototype`에서 상속되며 `typeof MyClass === "function"`을 갖습니다.

```js
// 생성자
const multiply = new Function("x", "y", "return x * y");

// 선언
function multiply(x, y) {
  return x * y;
} // No need for semicolon here

// 표현식; 변수에 할당되는 익명 함수입니다.
const multiply = function (x, y) {
  return x * y;
};
// 표현식; 고유한 이름을 가집니다.
const multiply = function funcName(x, y) {
  return x * y;
};

// 화살표 함수
const multiply = (x, y) => x * y;

// 메서드
const obj = {
  multiply(x, y) {
    return x * y;
  },
};
```

모든 구문은 거의 동일한 작업을 수행하지만 몇 가지 미묘한 동작 차이가 있습니다.

- `Function()` 생성자, `function` 표현식, `function` 선언 구문은 본격적인 함수 객체를 생성하며, 이 객체는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로 구성할 수 있습니다. 그러나 화살표 함수와 메서드는 구성할 수 없습니다. 비동기 함수, Generator 함수 및 비동기 Generator 함수는 구문에 관계없이 구성할 수 없습니다.
- `function` 선언은 [함수 호이스팅](/ko/docs/Web/JavaScript/Guide/Functions#함수_호이스팅)과 같은 함수를 생성합니다. 다른 구문은 함수를 띄우지 않으며 함수 값은 정의 뒤에만 표시됩니다.
- 화살표 함수와 `Function()` 생성자는 항상 익명 함수를 생성하므로 재귀적으로 자신을 쉽게 호출할 수 없습니다. 화살표 함수를 재귀적으로 호출하는 한 가지 방법은 변수에 할당하는 것입니다.
- 화살표 함수 구문에는 `arguments` 또는 `this`에 대한 접근 권한이 없습니다.
- `Function()` 생성자는 지역 변수에 접근할 수 없으며 전역 범위에만 접근할 수 있습니다.
- `Function()` 생성자는 런타임 컴파일을 유발하며 다른 구문보다 속도가 느린 경우가 많습니다.

`function` 표현식의 경우 함수 이름과 함수가 할당되는 변수 사이에 구분이 있습니다. 함수 이름은 변경할 수 없지만 함수가 할당된 변수는 재할당할 수 있습니다. 함수 이름은 함수가 할당된 변수와 다를 수 있으며, 서로 관련이 없습니다. 함수의 이름은 함수 내에서만 사용할 수 있습니다. 함수 외부에서 사용하려고 하면 오류가 발생합니다(또는 동일한 이름이 다른 곳에서 선언된 경우 다른 값을 가져옵니다). 예시를 봅시다.

```js
const y = function x() {};
console.log(x); // 참조 에러: x가 정의되지 않았습니다.
```

반면에 함수가 할당되는 변수는 함수가 선언된 범위를 포함하도록 보장되는 범위에 의해서만 제한됩니다.

함수 선언은 또한 함수 이름과 같은 이름의 변수를 생성합니다. 따라서 함수 표현식으로 정의된 함수와 달리 함수 선언으로 정의된 함수는 자체의 범위뿐만 아니라 정의된 범위에서 그 이름으로 접근할 수 있습니다.

`new Function`으로 정의된 함수는 소스가 동적으로 조직되며, 직렬화할 때 관찰할 수 있습니다. `console.log(new Function().toString())`은 다음과 같습니다.

```js-nolint
function anonymous(
) {

}
```

이것은 함수를 컴파일하는 데 사용되는 실제 소스입니다. `Function()` 생성자는 `anonymous`라는 이름의 함수를 생성하지만, 이 이름은 본문의 범위에 추가되지 않습니다. 본문은 전역 변수에만 접근할 수 있습니다. 예를 들어 다음과 같은 경우 오류가 발생합니다.

```js
new Function("alert(anonymous);")();
```

함수 표현식이나 함수 선언에 의해 정의된 함수는 현재 범위를 상속합니다. 즉, 함수는 클로저를 형성합니다. 반면에 `Function` 생성자에 의해 정의된 함수는 모든 함수가 상속하는 전역 범위 외에는 어떤 범위도 상속하지 않습니다.

```js
// p는 전역 변수입니다.
globalThis.p = 5;
function myFunc() {
  // p는 지역 변수입니다.
  const p = 9;

  function decl() {
    console.log(p);
  }
  const expr = function () {
    console.log(p);
  };
  const cons = new Function("\tconsole.log(p);");

  decl();
  expr();
  cons();
}
myFunc();

// Logs:
// 9 ('decl' 함수 선언 (현재 범위))
// 9 ('expr' 함수 표현식 (현재 범위))
// 5 ('cons' 함수 생성자 (전역 범위))
```

함수 표현식과 함수 선언으로 정의된 함수는 한 번만 구문 분석되지만, `Function` 생성자로 정의된 함수는 생성자가 호출될 때마다 전달된 문자열을 매번 구문 분석합니다. 함수 표현식은 매번 클로저를 형성하지만 함수 내부는 다시 구문을 분석하지 않으므로 함수 표현식이 `new Function(...)`보다 여전히 빠릅니다. 따라서 일반적으로 `Function` 생성자는 가능한 한 피해야 합니다.

함수 선언을 표현식 구문에 작성할 때 의도치 않게 함수 표현식으로 바뀔 수 있습니다.

```js
// 함수 선언입니다.
function foo() {
  console.log("FOO!");
}

doSomething(
  // 인수로 전달된 함수 표현식입니다.
  function foo() {
    console.log("FOO!");
  },
);
```

반면에 함수 표현식은 함수 선언으로 바뀔 수도 있습니다. [expression statement](/ko/docs/Web/JavaScript/Reference/Statements/Expression_statement)은 `function` 또는 `async function` 키워드로 시작할 수 없으며, 이는 [IIFEs](/ko/docs/Glossary/IIFE)(즉시 호출된 함수 표현식)를 구현할 때 흔히 범하는 실수입니다.

```js-nolint example-bad
function () { // SyntaxError: Function statements require a function name
  console.log("FOO!");
}();

function foo() {
  console.log("FOO!");
}(); // SyntaxError: Unexpected token ')'
```

대신 표현식 구문을 다른 것으로 시작하여 `function` 키워드가 함수 표현식을 명확하게 시작하도록 합니다. 일반적인 옵션으로는 [그룹 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Grouping)와 [`void`](/ko/docs/Web/JavaScript/Reference/Operators/void) 사용이 있습니다.

```js-nolint example-good
(function () {
  console.log("FOO!");
})();

void function () {
  console.log("FOO!");
}();
```

### 함수 매개변수

함수의 매개변수는 함수 내에서 접근할 수 있는 간단한 식별자입니다.

```js
function myFunc(a, b, c) {
  // You can access the values of a, b, and c here
}
```

세 가지의 특별한 매개변수 구문이 있습니다.

- [기본값 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)를 사용하면 값이 전달되지 않거나 `정의되지 않은` 경우 공식 매개변수를 기본값으로 초기화할 수 있습니다.
- [나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)를 사용하면 무한한 수의 인수를 배열로 표현할 수 있습니다.
- [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)을 사용하면 배열의 요소 또는 객체의 속성를 별개의 변수로 분해할 수 있습니다.

```js
function myFunc({ a, b }, c = 1, ...rest) {
  // 여기서 a, b, c와 나머지 값에 접근할 수 있습니다.
}
```

위의 매개변수 구문 중 하나를 사용할 경우 몇 가지 결과가 발생합니다.

- 함수 내부에 `"use strict"`를 적용할 수 없습니다. 이로 인해 [syntax error](/ko/docs/Web/JavaScript/Reference/Errors/Strict_non_simple_params)가 발생합니다.
- 함수가 [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode)에 있지 않더라도, [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체는 명명된 매개변수와 동기화를 중지하고 [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee) 접근 시 오류를 발생시킵니다.

### arguments 객체

[`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체를 사용하여 함수 내에서 함수의 인수를 참조할 수 있습니다.

- [`arguments`](/ko/docs/Web/JavaScript/Reference/Functions/arguments)
  - : 현재 실행 중인 함수에 전달된 인수가 포함된 배열형 객체입니다.
- [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee)
  - : 현재 실행 중인 함수입니다.
- [`arguments.length`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/length)
  - : 함수에 전달한 인수의 수입니다.

### Getter와 setter 함수

새로운 속성 추가를 지원하는 표준 내장 객체 또는 사용자 정의 객체에서 접근자의 속성을 정의할 수 있습니다. [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) 및 [classes](/ko/docs/Web/JavaScript/Reference/Classes) 내에서 특수 구문을 사용하여 접근자 속성의 getter와 setter를 정의할 수 있습니다.

- [get](/ko/docs/Web/JavaScript/Reference/Functions/get)
  - : 객체의 속성에 접근하면 호출할 함수를 바인딩합니다.
- [set](/ko/docs/Web/JavaScript/Reference/Functions/set)
  - : 객체의 속성에 할당을 시도하면 호출할 함수를 바인딩합니다.

이 구문은 메서드가 아닌 객체 속성을 생성한다는 점에 유의하세요. Getter 및 setter 함수 자체는 {{jsxref("Object.getOwnPropertyDescriptor()")}}와 같은 리플렉티브 API를 통해서만 접근할 수 있습니다.

## 블록 레벨 함수

[엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 블록 내의 함수 범위가 해당 블록으로 제한됩니다. ES2015 이전에는 엄격 모드에서 블록 수준 함수가 금지되었습니다.

```js
"use strict";

function f() {
  return 1;
}

{
  function f() {
    return 2;
  }
}

f() === 1; // true

// 엄격 모드가 아닐 경우 f() === 2
```

### 비엄격 모드의 블록 레벨 함수

한 마디로, **하지 마세요**.

비엄격 모드에서의 블록 내 함수 선언은 이상하게 동작합니다. 예시를 봅시다.

```js
if (shouldDefineZero) {
  function zero() {
    // 위험: 호환성 위험
    console.log("zero입니다.");
  }
}
```

엄격 모드에서 이 의미는 잘 지정되어 있습니다. `0`은 `if` 블록의 해당 범위 내에서만 존재합니다. `shouldDefineZero`가 거짓이면 블록이 실행되지 않으므로 `zero`를 정의해서는 안 됩니다. 이전에는 이 값이 지정되지 않았기 때문에 브라우저마다 비엄격 모드에서 다르게 구현했습니다. 자세한 내용은 [`함수` 선언](/ko/docs/Web/JavaScript/Reference/Statements/function#block-level_function_declaration)을 참조하세요.

조건부로 함수를 정의하는 더 안전한 방법은 변수에 함수 표현식을 할당하는 것입니다.

```js
// var를 사용하면 전역 변수로 사용할 수 있습니다.
// 최상위 함수 선언에 더 가까운 동작을 제공합니다.
var zero;
if (shouldDefineZero) {
  zero = function () {
    console.log("zero입니다.");
  };
}
```

## 예제

### 형식이 지정된 숫자 반환

숫자에 선행 0을 추가해 형식화된 표현으로 문자열을 반환하는 함수입니다.

```js
// 이 함수는 선행 0으로 패딩된 문자열을 반환합니다.
function padZeros(num, totalLen) {
  let numStr = num.toString(); // 반환 값을 문자열로 초기화
  const numZeros = totalLen - numStr.length; // 필요한 0의 수 계산
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}
```

다음 명령문에서 `padZeros` 함수를 호출합니다.

```js
let result;
result = padZeros(42, 4); // "0042" 반환
result = padZeros(42, 2); // "42" 반환
result = padZeros(5, 4); // "0005" 반환
```

### 함수 존재 여부 판단

[`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof) 연산자를 사용하여 함수가 있는지 확인할 수 있습니다. 다음 예제에서는 `window` 객체에 함수인 `noFunc`라는 속성이 있는지 확인하기 위한 테스트가 수행됩니다. 속성이 있다면 사용되며, 그렇지 않으면 다른 조치가 취해집니다.

```js
if (typeof window.noFunc === "function") {
  // noFunc() 사용
} else {
  // 다른 동작 수행
}
```

`if` 테스트에서는 `noFunc`에 대한 참조가 사용되며, 함수 이름 뒤에 대괄호 `()`가 없으므로 실제 함수가 호출되지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [함수](/ko/docs/Web/JavaScript/Guide/Functions)
- [Classes](/ko/docs/Web/JavaScript/Reference/Classes)
- {{jsxref("Statements/function", "function")}}
- [`함수` 표현식](/ko/docs/Web/JavaScript/Reference/Operators/function)
- {{jsxref("Function")}}
