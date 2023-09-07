---
title: Trailing commas
slug: Web/JavaScript/Reference/Trailing_commas
---

{{JsSidebar("More")}}

**Trailing commas** ("final commas"라고도 불립니다)는 새로운 엘리먼트나 매개변수, 속성을 JavaScript 코드에 추가할 때 유용합니다. 새로운 속성을 추가할 때, 마지막 줄에 trailing comma가 있다면 그 줄을 수정 없이 그대로 복사해 쓸 수 있습니다. 이외에도 버전 관리 이력이 간단해지고 코드 편집이 더 편해진다는 장점이 있습니다.

JavaScript는 초기부터 배열 리터럴에 trailing comma를 허용했으며, ECMAScript 5부터는 객체 리터럴, ECMAScript 2017부터는 함수의 매개변수에도 허용하기 시작했습니다.

그러나 {{Glossary("JSON")}}에서는 trailing comma를 허용하지 않습니다.

## 리터럴에서의 trailing comma

### 배열

JavaScript는 배열에 나타나는 trailing comma를 무시합니다.

```js
var arr = [1, 2, 3];

arr; // [1, 2, 3]
arr.length; // 3
```

trailing comma가 여러 개 있을 경우 빈 슬롯("구멍")이 생깁니다. 구멍이 있는 배열을 성기다(sparse)고 합니다(조밀한(dense) 배열에는 구멍이 없습니다). {{jsxref("Array.prototype.forEach()")}}나 {{jsxref("Array.prototype.map()")}}을 이용해 배열을 순회할 때는 빈 슬롯을 무시합니다.

```js
var arr = [1, 2, 3, , ,];
arr.length; // 5
```

### 객체

ECMAScript 5부터는 객체 리터럴에도 trailing comma를 사용할 수 있습니다.

```js
var object = {
  foo: "bar",
  baz: "qwerty",
  age: 42,
};
```

## 함수에서의 trailing comma

ECMAScript 2017에서는 함수의 매개변수 목록에 trailing comma를 허용합니다.

### 매개변수 정의

아래의 두 함수 정의는 모두 유효하며, 서로 같습니다. Trailing comma는 함수 정의의 `length` 속성이나 `arguments` 객체에 영향을 주지 않습니다.

```js-nolint
function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

Trailing comma는 클래스나 객체의 [메소드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)에도 사용할 수 있습니다.

```js
class C {
  one(a,) {},
  two(a, b,) {},
}

var obj = {
  one(a,) {},
  two(a, b,) {},
};
```

### 함수 호출

아래의 두 함수 호출은 모두 유효하며, 서로 같습니다.

```js-nolint
f(p);
f(p,);

Math.max(10, 20);
Math.max(10, 20,);
```

### 잘못된 trailing comma

함수의 매개변수 정의나 호출에 쉼표만 있을 경우 {{Jsxref("SyntaxError")}}가 발생합니다. 또한, [rest 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters)를 사용할 때는 trailing comma를 사용할 수 없습니다.

```js example-bad
function f(,) {} // SyntaxError: missing formal parameter
(,) => {};       // SyntaxError: expected expression, got ','
f(,)             // SyntaxError: expected expression, got ','

function f(...p,) {} // SyntaxError: parameter after rest parameter
(...p,) => {}        // SyntaxError: expected closing parenthesis, got ','
```

## 구조 분해 할당에서의 trailing comma

[구조 분해 할당](/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)의 좌변에도 trailing comma를 사용할 수 있습니다.

```js-nolint
// Trailing comma가 있는 배열 구조 분해
[a, b,] = [1, 2];

// Trailing comma가 있는 객체 구조 분해
var o = {
  p: 42,
  q: true,
};
var {p, q,} = o;
```

Rest 원소가 있을 경우 역시 {{jsxref("SyntaxError")}}가 발생합니다.

```js-nolint example-bad
var [a, ...b,] = [1, 2, 3];
// SyntaxError: rest element may not have a trailing comma
```

## JSON에서의 trailing comma

객체 안에서의 trailing comma는 ECMAScript 5에 와서야 추가되었습니다. JSON은 ES5 이전의 JavaScript 문법을 기초로 하므로 **JSON에서는 trailing comma를 사용할 수 없습니다**.

아래의 두 줄 모두 `SyntaxError`를 발생합니다.

```js example-bad
JSON.parse("[1, 2, 3, 4, ]");
JSON.parse('{"foo" : 1, }');
// SyntaxError JSON.parse: unexpected character
// at line 1 column 14 of the JSON data
```

JSON을 올바르게 파싱하려면 trailing comma를 제거해야 합니다.

```js example-good
JSON.parse("[1, 2, 3, 4 ]");
JSON.parse('{"foo" : 1 }');
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- Initial ECMAScript proposal: [trailing function commas](https://github.com/tc39/proposal-trailing-function-commas) by Jeff Morrison
