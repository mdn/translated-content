---
title: Nullish coalescing operator
slug: Web/JavaScript/Reference/Operators/Nullish_coalescing
---

{{JSSidebar("Operators")}}

**널 병합 연산자 (`??`)** 는 왼쪽 피연산자가 [null](/ko/docs/Web/JavaScript/Reference/Global_Objects/null) 또는 [undefined](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

이는 왼쪽 피연산자가 `null` 또는 `undefined` 뿐만 아니라 _[falsy](/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Description)_ 값에 해당할 경우 오른쪽 피연산자를 반환하는 [논리 연산자 OR (`||`)](/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_2)와는 대조된다. 다시 말해 만약 어떤 변수 foo에게 _[falsy](/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Description)_ 값( `''` 또는 `0`)을 포함한 값을 제공하기 위해 `||`을 사용하는 것을 고려했다면 예기치 않는 동작이 발생할 수 있다. 하단에 더 많은 예제가 있다.

널 병합 연산자는 [연산자 우선 순위](/ko/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)가 다섯번째로 낮은데, `||` 의 바로 아래이며 [조건부 (삼항) 연산자](/ko/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)의 바로 위이다.

{{EmbedInteractiveExample("pages/js/expressions-nullishcoalescingoperator.html")}}

## 문법

```js
leftExpr ?? rightExpr;
```

## 설명

널 병합 연산자는 만약 왼쪽 표현식이 {{jsxref("null")}} 또는 {{jsxref("undefined")}}인 경우, 오른쪽 표현식의 결과를 반환한다.

### 변수에 기본값 할당

이전에는 변수에 기본값을 할당하고 싶을 때, 논리 연산자 OR ([`||`](/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_2))을 사용하는 것이 일반적인 패턴이다:

```js
let foo;
...
//  foo is never assigned any value so it is still undefined
let someDummyText = foo || 'Hello!';
```

그러나 `||` boolean 논리 연산자 때문에, 왼쪽 피연산자는 boolean으로 강제로 변환되었고 _falsy_ 한 값(`0`, `''`, `NaN`, `null`, `undefined`)은 반환되지 않았다. 이 동작은 만약 `0`, `''` or `NaN`을 유효한 값으로 생각한 경우 예기치 않는 결과를 초래할 수 있다.

```js
let count;
let text;
...
count = 0;
text = "";
...
let qty = count || 42;
let message = text || "hi!";
console.log(qty);     // 42 and not 0
console.log(message); // "hi!" and not ""
```

널 병합 연산자는 첫 번째 연산자가 `null` 또는 `undefined`로 평가될 때만, 두 번째 피연산자를 반환함으로써 이러한 위험을 피한다:

```js
let myText = ""; // An empty string (which is also a falsy value)

let notFalsyText = myText || "Hello world";
console.log(notFalsyText); // Hello world

let preservingFalsy = myText ?? "Hi neighborhood";
console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
```

### 단락

OR과 AND 같은 논리 연산자들과 마찬가지로, 만약 왼쪽이 `null` 또는 `undefined`가 아님이 판명되면 오른쪽 표현식은 평가되지 않는다.

```js
function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return "foo";
}

console.log(A() ?? C());
// logs "A was called" then "C was called" and then "foo"
// as A() returned undefined so both expressions are evaluated

console.log(B() ?? C());
// logs "B was called" then "false"
// as B() returned false (and not null or undefined), the right
// hand side expression was not evaluated
```

### No chaining with AND or OR operators

AND (`&&`) 와 OR 연산자 (`||`)를 `??`와 직접적으로 결합하여 사용하는 것은 불가능하다. 이 경우 [`SyntaxError`](/ko/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)가 발생된다.

```js
null || undefined ?? "foo"; // raises a SyntaxError
true || undefined ?? "foo"; // raises a SyntaxError
```

그러나 우선 순위를 명시적으로 나타내기 위해 괄호를 사용하면 가능하다:

```js
(null || undefined) ?? "foo"; // returns "foo"
```

### Optional chaining 연산자(`?.`)와의 관계

널 병합 연산자는 명확한 값으로 `undefined`과 `null`을 처리하고, [optional chaining 연산자 (`?.`)](/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)는 `null` or `undefined`일 수 있는 객체의 속성에 접근할 때 유용하다.

```js
let foo = { someFooProp: "hi" };

console.log(foo.someFooProp?.toUpperCase()); // "HI"
console.log(foo.someBarProp?.toUpperCase()); // undefined
```

## 예제

이 예제는 기본 값을 제공하지만 `null` or `undefined` 이외의 값을 를 유지한다.

```js
function getMiscObj() {
  return {
    aNullProperty: null,
    emptyText: "", // this is not falsy
    someNumber: 42,
  };
}

const miscObj = getMiscObj();

const newObj = {};
newObj.propA = miscObj.aNullProperty ?? "default for A";
newObj.propB = miscObj.emptyText ?? "default for B";
newObj.propC = miscObj.someNumber ?? 0;

console.log(newObj.propA); // "default for A"
console.log(newObj.propB); // "" (as the empty string is not null or undefined)
console.log(newObj.propC); // 42
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- [The optional chaining operator](/ko/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
- [The logical OR (`||`) operator](/ko/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR_2)
- [Default paramaters in functions](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters)
