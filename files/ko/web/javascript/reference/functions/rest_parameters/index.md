---
title: 나머지 매개변수
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
  - Functions
  - JavaScript
  - Language feature
  - Reference
browser-compat: javascript.functions.rest_parameters
translation_of: Web/JavaScript/Reference/Functions/rest_parameters
---
{{jsSidebar("Functions")}}

**나머지 매개변수** 구문을 사용하면 함수가 정해지지 않은 수의 매개변수를 배열로 받을 수 있습니다. JavaScript에서 [가변항 함수](https://en.wikipedia.org/wiki/Variadic_function)를 표현할 때 사용합니다.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

## 구문

```js
function f(a, b, ...theArgs) {
  // ...
}
```

## 설명

함수의 마지막 매개변수 앞에 "`...`"(세 개의 U+002E FULL STOP 문자)를 붙이면 (사용자가 제공한) 모든 후속 매개변수를 [표준 JavaScript 배열](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array)에 넣도록 지정합니다. 마지막 매개변수만 나머지 매개변수로 설정할 수 있습니다.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

// 콘솔 출력:
// a, one
// b, two
// manyMoreArgs, [three, four, five, six]
```

### 빠른 참조

함수 정의에는 하나의 `...`만 존재할 수 있습니다.

```js example-bad
foo(...one, ...wrong, ...wrong)
```

나머지 매개변수는 반드시 함수 정의의 마지막 매개변수여야 합니다.

```js example-bad
foo(...wrong, arg2, arg3)
```

```js example-good
foo(arg1, arg2, ...correct)
```

### 나머지 매개변수와 `arguments` 객체의 차이

나머지 매개변수와 {{jsxref("Functions/arguments", "arguments")}} 객체 사이에는 세 개의 주요 차이가 있습니다.

- `arguments` 객체는 **실제 배열이 아닙니다**. 그러나 나머지 매개변수는 {{jsxref("Array")}} 인스턴스이므로 {{jsxref("Array.sort", "sort")}}, {{jsxref("Array.map", "map")}}, {{jsxref("Array.forEach", "forEach")}}, {{jsxref("Array.pop", "pop")}} 등의 메서드를 직접 적용할 수 있습니다.
- `arguments` 객체는 `callee` 속성과 같은 추가 기능을 포함합니다.
- `...restParam`은 후속 매개변수만 배열에 포함하므로 `...restParam` **이전**에 직접 정의한 매개변수는 포함하지 않습니다. 그러나 `arguments` 객체는, `...restParam`의 각 항목까지 더해 모든 매개변수를 포함합니다.

### 인수에서 배열로

나머지 매개변수는 다수의 인수를 배열로 변환하는 과정의 보일러플레이트 코드를 줄이기 위해 도입됐습니다.

```js
// 나머지 매개변수 이전에 "arguments"를 일반 배열로 변환하던 방법
function f(a, b) {
  let normalArray = Array.prototype.slice.call(arguments)
  // -- 또는 --
  let normalArray = [].slice.call(arguments)
  // -- 또는 --
  let normalArray = Array.from(arguments)

  let first = normalArray.shift()  // 동작, 첫 번째 매개변수 반환
  let first = arguments.shift()    // 오류, arguments는 실제 배열이 아님
}

// 이제는 나머지 매개변수를 사용해 쉽게 배열로 가져올 수 있음

function f(...args) {
  let normalArray = args
  let first = normalArray.shift() // 동작, 첫 번째 매개변수 반환
}
```

## 예제

### 나머지 매개변수 사용하기

아래 예제에서, 첫 번째 인수는 `a`, 두 번째 인수는 `b`로 맵핑되므로 이 두 개의 인수는 일반적인 방법으로 사용할 수 있습니다.

그러나 세 번째 인수인 `manyMoreArgs`는 셋, 넷, 다섯, 여섯, ... n번째 인수까지, 사용자가 제공한 만큼의 인수를 포함한 배열입니다.

```js
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", manyMoreArgs)
}

myFun("one", "two", "three", "four", "five", "six")

// a, "one"
// b, "two"
// manyMoreArgs, ["three", "four", "five", "six"] <-- 배열임에 주목
```

매개변수를 세 개만 제공하더라도 마지막 인수는 여전히 배열인 것을 확인할 수 있습니다.

```js
// 위에 정의한 함수를 그대로 사용

myFun("one", "two", "three")

// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- 요소가 하나지만 여전히 배열임
```

그리고 아래에선 매개변수를 두 개만 제공했지만, `manyMoreArgs`는 여전히 (빈) 배열입니다.

```js
// 위에 정의한 함수를 그대로 사용

myFun("one", "two")

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- 여전히 배열
```

### 매개변수 길이

`theArgs`가 배열이므로, `length` 속성을 사용하면 길이를 알아낼 수 있습니다.

```js
function fun1(...theArgs) {
  console.log(theArgs.length)
}

fun1()         // 0
fun1(5)        // 1
fun1(5, 6, 7)  // 3
```

### 나머지 매개변수를 일반 매개변수와 함께 사용하기

이 예제에서는 첫 번째 이후의 모든 매개변수를 배열에 모은 후, 각각의 값을 첫 번째 매개변수로 곱한 결과를 반환합니다.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(element => {
    return multiplier * element
  })
}

let arr = multiply(2, 15, 25, 42)
console.log(arr)  // [30, 50, 84]
```

### 나머지 매개변수는 실제 배열, `arguments`는 유사 배열

나머지 매개변수에서는 {{jsxref("Array")}} 메서드를 사용할 수 있지만, `arguments` 객체에서는 사용할 수 없습니다.

```js
function sortRestArgs(...theArgs) {
  let sortedArgs = theArgs.sort()
  return sortedArgs
}

console.log(sortRestArgs(5, 3, 7, 1)) // 1, 3, 5, 7

function sortArguments() {
  let sortedArgs = arguments.sort()
  return sortedArgs
}

console.log(sortArguments(5, 3, 7, 1))
// TypeError 발생 (arguments.sort is not a function)
```

`arguments` 객체에 `Array` 메서드를 사용하려면 우선 `arguments`를 실제 배열로 변환해야 합니다.

```js
function sortArguments() {
  let args = Array.from(arguments)
  let sortedArgs = args.sort()
  return sortedArgs
}
console.log(sortArguments(5, 3, 7, 1))  // 1, 3, 5, 7
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 함께 보기

- [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (같은 '`...`' 사용)
- [구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [`arguments` 객체](/ko/docs/Web/JavaScript/Reference/Functions/arguments)
- {{jsxref("Array")}}
