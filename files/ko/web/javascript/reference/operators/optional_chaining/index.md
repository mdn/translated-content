---
title: Optional chaining
slug: Web/JavaScript/Reference/Operators/Optional_chaining
---

{{JSSidebar("Operators")}}

**optional chaining** 연산자 (**`?.`**) 는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성 값을 읽을 수 있다.

`?.` 연산자는 `.` 체이닝 연산자와 유사하게 작동하지만, 만약 참조가 {{glossary("nullish")}} ({{JSxRef("null")}} 또는 {{JSxRef("undefined")}})이라면, 에러가 발생하는 것 대신에 표현식의 리턴 값은 `undefined`로 단락된다. 함수 호출에서 사용될 때, 만약 주어진 함수가 존재하지 않는다면, `undefined`를 리턴한다.

따라서 참조가 누락될 가능성이 있는 경우 연결된 속성으로 접근할 때 더 짧고 간단한 표현식이 생성된다. 어떤 속성이 필요한지에 대한 보증이 확실하지 않는 경우 객체의 내용을 탐색하는 동안 도움이 될 수 있다.

optional chaining은 선언되지 않은 루트 객체에 사용할 수 없지만, 정의되지 않은 루트 객체와는 함께 사용할 수 있다.

{{EmbedInteractiveExample("pages/js/expressions-optionalchainingoperator.html")}}

## 문법

```js
obj?.prop;
obj?.[expr];
arr?.[index];
func?.(args);
```

## 설명

optional chaining 연산자는 참조나 기능이 `undefined` 또는 `null`일 수 있을 때 연결된 객체의 값에 접근하는 단순화할 수 있는 방법을 제공한다.

예를 들어, 중첩된 구조를 가진 객체에서 `obj`가 있다. optional chaining이 없이 깊이 중첩된 하위 속성을 찾으려면, 다음과 같이 참조를 확인해야 한다:

```js
let nestedProp = obj.first && obj.first.second;
```

`obj.first`의 값은 `obj.first.second`의 값에 접근하기 전에 `null` (그리고 `undefined`)가 아니라는 점을 검증한다. 이는 만약에 `obj.first`를 테스트 없이 `obj.first.second` 에 직접 접근할 때 일어날 수 있는 에러를 방지한다.

그러나 optional chaining 연산자(`?.`)를 사용하여, `obj.first.second` 에 접근하기 전에 `obj.first`의 상태에 따라 명시적으로 테스트하거나 단락시키지 않아도 된다:

```js
let nestedProp = obj.first?.second;
```

`.` 대신에 `?.` 연산자를 사용함으로써, 자바스크립트는 `obj.first.second`에 접근하기 전에 `obj.first`가 `null` 또는 `undefined`가 아니라는 것을 암묵적으로 확인하는 것을 알고 있다. 만약 `obj.first`가 `null` 또는 `undefined`이라면, 그 표현식은 자동으로 단락되어 `undefined`가 반환된다.

이는 임시 변수가 실제로 생성되지 않는다는 점을 제외하고 다음과 동일하다.

```js
let temp = obj.first;
let nestedProp = temp === null || temp === undefined ? undefined : temp.second;
```

### 함수의 호출과 Optional chaining

존재하지 않을 수 있는 매서드를 호출할 때, optional chaining을 사용할 수 있다. 예를 들어, 구현 기간이나 사용자 장치에서 사용할 수 없는 기능 때문에 메서드를 사용할 수 없는 API를 사용할 경우, 유용할 수 있다.

함수 호출과 optional chaining을 사용함으로써 메서드를 찾을 수 없는 경우에 예외를 발생시키는 것 대신에 그 표현식은 자동으로 `undefined`를 반환한다:

```js
let result = someInterface.customMethod?.();
```

<div class="blockIndicator note"><p><strong>메모:</strong> 만약 속성에 해당 이름이 있지만 함수가 아니라면, <code>?.</code>의 사용은 여전히 예외를 발생시킨다. {{JSxRef("TypeError")}} exception (<code>x.y</code><code> is not a function</code>).</p></div>

<div class="blockIndicator note"><p><strong>메모:</strong> 만약 <code>someInterface</code> 자체가 <code>null</code>이나 <code>undefined</code>이면, <code>TypeError</code> 예외가 여전히 발생 할 것이다. <code>someInterface</code> 자체가 <code>null</code>이나 <code>undefined</code>으로 예상된다면, <code>?.</code>을 사용해야한다: <code>someInterface?.customMethod?.()</code></p></div>

#### optional callbacks과 event handlers 다루기

만약 객체에서 [destructuring assignment](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring)로 callbacks 또는 fetch 메서드를 사용한다면, 그 존재 여부를 테스트하지 않으면 함수로 호출할 수 없는 존재 하지 않는 값을 가질 수 있다. `?.`을 사용하면, 다음 추가 테스트를 피할 수 있다:

```js
// Written as of ES2019
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  } catch (err) {
    if (onError) {
      // Testing if onError really exists
      onError(err.message);
    }
  }
}
```

```js
// Using optional chaining with function calls
function doSomething(onContent, onError) {
  try {
    // ... do something with the data
  } catch (err) {
    onError?.(err.message); // no exception if onError is undefined
  }
}
```

### 표현식에서 Optional chaining

optional chaining 연산자를 속성에 표현식으로 접근할 때 대괄호 표기법([the bracket notation of the property accessor](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors#bracket_notation))을 사용할 수 있다:

```js
let nestedProp = obj?.["prop" + "Name"];
```

### Optional chaining은 할당자 왼쪽에서 유효하지 않습니다

```js
let object = {};
object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
```

### Optional chaining으로 배열 항목에 접근하기

```js
let arrayItem = arr?.[42];
```

## 예제

### 기본 예제

이 예제는 해당 멤버가 없을 때, map에서 멤버 bar의 `name`의 속성 값을 찾는다. 그러므로 결과는 `undefined`이다.

```js
let myMap = new Map();
myMap.set("foo", { name: "baz", desc: "inga" });

let nameBar = myMap.get("bar")?.name;
```

### 단락 평가

표현식에서 optional chaining을 사용할 때, 만약 왼쪽에 있는 피연산자가 `null` or `undefined`인 경우, 그 표현식은 평가되지 않는다. 예들 들어:

```js
let potentiallyNullObj = null;
let x = 0;
let prop = potentiallyNullObj?.[x++];

console.log(x); // 0  x는 증가하지 않음
```

### optional chaining 연산자 쌓기

중첩된 구조에서는 optional chaining을 여러 번 사용할 수 있다:

```js
let customer = {
  name: "Carl",
  details: {
    age: 82,
    location: "Paradise Falls", // detailed address is unknown
  },
};
let customerCity = customer.details?.address?.city;

// … this also works with optional chaining function call
let duration = vacations.trip?.getTime?.();
```

### 널 병합 연산자와 같이 사용하기

널 병합 연산자는 optional chaining를 사용한 후에 아무 값도 찾을 수 없을 때 기본 값을 주기 위해 사용될 수 있다:

```js
let customer = {
  name: "Carl",
  details: { age: 82 },
};
const customerCity = customer?.city ?? "Unknown city";
console.log(customerCity); // Unknown city
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- The {{JSxRef("Operators/Nullish_Coalescing_Operator", "Nullish Coalescing Operator", '', 1)}}
- [TC39 proposals](https://github.com/tc39/proposals)
