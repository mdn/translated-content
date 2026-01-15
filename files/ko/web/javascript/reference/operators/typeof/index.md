---
title: typeof
slug: Web/JavaScript/Reference/Operators/typeof
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{jsSidebar("Operators")}}

**`typeof`** 연산자는 피연산자의 평가 전 자료형을 나타내는 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: typeof operator")}}

```js interactive-example
console.log(typeof 42);
// Expected output: "number"

console.log(typeof "blubber");
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"
```

## 구문

```js-nolint
typeof operand
```

### 매개변수

- `operand`
  - : 자료형을 가져올 객체 또는 {{glossary("Primitive", "원시값")}}을 나타내는 표현식.

## 설명

`typeof`가 반환할 수 있는 값을 아래 표에서 볼 수 있습니다. 자료형과 원시값에 대한 자세한 정보는 [JavaScript 자료형과 자료구조](/ko/docs/Web/JavaScript/Guide/Data_structures) 페이지를 참고하세요.

| Type                                                                         | Result                          |
| ---------------------------------------------------------------------------- | ------------------------------- |
| {{glossary("Undefined")}}                                                    | `"undefined"`                   |
| {{glossary("Null")}}                                                         | `"object"` ([아래](#null) 참고) |
| {{glossary("Boolean")}}                                                      | `"boolean"`                     |
| {{glossary("Number")}}                                                       | `"number"`                      |
| {{glossary("BigInt")}}                                                       | `"bigint"`                      |
| {{glossary("String")}}                                                       | `"string"`                      |
| {{glossary("Symbol")}}                                                       | `"symbol"`                      |
| {{glossary("Function")}} 객체 (ECMA-262 표현으로는 [[Call]]을 구현하는 객체) | `"function"`                    |
| 다른 모든 객체                                                               | `"object"`                      |

이 목록은 가능한 모든 값을 포함합니다. 명세를 준수하는 엔진에서 이외의 값이 생성된 사례는 현재까지도 보고되지 않았습니다.

## 예제

### 기본 사용법

```js
// Numbers
typeof 37 === "number";
typeof 3.14 === "number";
typeof 42 === "number";
typeof Math.LN2 === "number";
typeof Infinity === "number";
typeof NaN === "number"; // "숫자가 아님(Not-A-Number)" 임에도 불구하고
typeof Number("1") === "number"; // Number는 문자열을 숫자로 변환하려 시도함
typeof Number("shoe") === "number"; // 숫자로 변환할 수 없는 값도 포함됨

typeof 42n === "bigint";

// Strings
typeof "" === "string";
typeof "bla" === "string";
typeof `template literal` === "string";
typeof "1" === "string"; // 문자열 안에 숫자가 있어도 typeof 결과는 string
typeof typeof 1 === "string"; // typeof는 항상 문자열을 반환함
typeof String(1) === "string"; // String은 어떤 값이든 문자열로 변환, toString()보다 안전함

// Booleans
typeof true === "boolean";
typeof false === "boolean";
typeof Boolean(1) === "boolean"; // Boolean()은 값의 truthy/falsy 여부에 따라 변환함
typeof !!1 === "boolean"; // ! (논리 부정) 연산자를 두 번 적용하는 것은 Boolean()과 동일함

// Symbols
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";

// Undefined
typeof undefined === "undefined";
typeof declaredButUndefinedVariable === "undefined";
typeof undeclaredVariable === "undefined";

// Objects
typeof { a: 1 } === "object";

// 배열과 일반 객체를 구분하려면 Array.isArray 또는 Object.prototype.toString.call 사용
typeof [1, 2, 4] === "object";

typeof new Date() === "object";
typeof /regex/ === "object";

// 다음과 같은 코드는 혼란스럽고, 위험하며, 낭비적이므로 피하세요.
typeof new Boolean(true) === "object";
typeof new Number(1) === "object";
typeof new String("abc") === "object";

// Functions
typeof function () {} === "function";
typeof class C {} === "function";
typeof Math.sin === "function";
```

### `typeof null`

```js
// 이는 JavaScript가 처음 생겼을 때부터 존재해 왔습니다
typeof null === "object";
```

JavaScript를 처음 구현할 때, JavaScript 값은 타입 태그와 값으로 표시되었습니다. 객체의 타입 태그는 0이었습니다. `null`은 Null pointer(대부분의 플랫폼에서 `0x00`)로 표시되었습니다. 그 결과 null은 타입 태그로 0을 가지며, 따라서 `typeof`는 object를 반환합니다. ([참고 문서](https://2ality.com/2013/10/typeof-null.html))

ECMAScript에 수정이 제안(opt-in을 통해)되었으나 [거절되었습니다](https://web.archive.org/web/20160331031419/http://wiki.ecmascript.org:80/doku.php?id=harmony:typeof_null). 제안된 것은 다음과 같습니다. `typeof null === 'null'.`

### new 연산자 사용하기

[`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)와 함께 호출된 모든 생성자 함수는 비원시값(`"object"` 또는 `"function"`)을 반환합니다. 대부분은 객체를 반환하지만, 예외적으로 [`Function`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function)은 함수를 반환합니다.

```js
const str = new String("String");
const num = new Number(100);

typeof str; // "object"
typeof num; // "object"

const func = new Function();

typeof func; // "function"
```

### 구문에서 괄호의 필요성

`typeof` 연산자는 덧셈(`+`) 같은 이항 연산자보다 더 높은 연산자 [`우선순위`](/ko/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
를 가집니다. 따라서 덧셈 결과의 타입을 평가하려면 괄호가 필요합니다.

```js
// 표현식의 데이터 타입을 결정하기 위해 괄호를 사용할 수 있습니다.
const someData = 99;

typeof someData + " foo"; // "number foo"
typeof (someData + " foo"); // "string"
```

### 선언되지 않았거나 초기화되지 않은 변수와의 상호작용

`typeof`는 제공된 피연산자에 대해 항상 문자열을 반환하는 것이 보장됩니다. 선언되지 않은 식별자라도 `typeof`는 오류를 던지지 않고 `"undefined"`를 반환합니다.

```js
typeof undeclaredVariable; // "undefined"
```

그러나 동일한 블록 내에서 선언 위치 이전의 렉시컬 선언([`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const), [`class`](/ko/docs/Web/JavaScript/Reference/Statements/class)
)에 `typeof`를 사용하면 [`ReferenceError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)를 던집니다. 블록 범위 변수는 초기화가 처리되기 전까지 블록 시작부터 [`일시적 사각지대(TDZ)`](/ko/docs/Web/JavaScript/Reference/Statements/let#일시적_사각지대) 에 있기 때문에, 이 기간에 접근하면 오류가 발생합니다.

```js example-bad
typeof newLetVariable; // ReferenceError
typeof newConstVariable; // ReferenceError
typeof newClass; // ReferenceError

let newLetVariable;
const newConstVariable = "hello";
class newClass {}
```

### document.all의 예외적인 동작

현재 모든 브라우저는 타입이 `undefined`인 비표준 호스트 객체 [`document.all`](/ko/docs/Web/API/Document/all)
을 노출합니다.

```js
typeof document.all === "undefined";
```

document.all은 [`falsy`](/ko/docs/Glossary/Falsy) 값이고 `undefined` 와 느슨한 동등을 가지지만, 실제로 [`undefined`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)는 아닙니다. `document.all`의 타입이 `"undefined"`인 경우는 웹 호환성을 위한 원래 ECMAScript 표준의 "의도적인 위반(willful violation)"으로 웹 표준에 분류되어 있습니다.

### 더 구체적인 타입을 얻는 사용자 정의 메서드

`typeof`는 매우 유용하지만, 필요한 만큼 다재다능하지는 않습니다. 예를 들어, `typeof []`는 `"object"`이고, `typeof new Date()`, `typeof /abc/`도 마찬가지입니다.

더 구체적으로 타입을 확인하기 위해 여기에서는 사용자 정의 `type(value)` 함수를 제시합니다. 이 함수는 대부분 `typeof`의 동작을 모방하지만, 비원시값(즉, 객체와 함수)에 대해서는 가능한 경우 더 세분화된 타입 이름을 반환합니다.

```js
function type(value) {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // 원시 타입
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag는 종종 객체 클래스의 "표시 이름"을 지정합니다.
  // Object.prototype.toString()에서 사용됩니다.
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // 소스 코드가 "class" 키워드로 시작하는 함수라면 클래스입니다.
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // 생성자의 이름; 예: `Array`, `GeneratorFunction`,
  // `Number`, `String`, `Boolean`, 또는 `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // 이 시점에서는 값을 얻을 확실한 방법이 없으므로,
  // 기본 구현을 사용합니다.
  return baseType;
}
```

존재하지 않을 수 있는 변수를 확인할 때는 [`ReferenceError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)가 발생하지 않도록 typeof nonExistentVar === "undefined"를 사용해야 합니다. 이 동작은 사용자 정의 코드로는 흉내낼 수 없습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Operators/instanceof", "instanceof")}}
