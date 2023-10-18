---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

**`for...of` 명령문**은 [반복가능한 객체](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) ({{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, [arguments](/ko/docs/Web/JavaScript/Reference/Functions/arguments) 객체 등을 포함)에 대해서 반복하고 각 개별 속성값에 대해 실행되는 문이 있는 사용자 정의 반복 후크를 호출하는 루프를 생성합니다.

{{EmbedInteractiveExample("pages/js/statement-forof.html")}}

## 구문

```js
for (variable of iterable) {
  statement;
}
```

- `variable`
  - : 각 반복에 서로 다른 속성값이 *variable*에 할당됩니다.
- `iterable`
  - : 반복되는 열거가능(enumerable)한 속성이 있는 객체.

## 예제

### {{jsxref("Array")}}에 대해 반복

```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

[`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 대신 [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const)도 사용할 수 있습니다, 블록 내부 변수를 수정하지 않는 경우.

```js
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### {{jsxref("String")}}에 대해 반복

```js
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### {{jsxref("TypedArray")}}에 대해 반복

```js
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```

### {{jsxref("Map")}}에 대해 반복

```js
let iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### {{jsxref("Set")}}에 대해 반복

```js
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### DOM 컬렉션에 대해 반복

{{domxref("NodeList")}} 같은 DOM 컬렉션에 대해 반복: 다음 예는 article의 직계 자손인 paragraph에 `read` 클래스를 추가합니다:

```js
// 주의: 이는 NodeList.prototype[Symbol.iterator]가
// 구현된 플랫폼에서만 작동합니다
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### 생성기에 대해 반복

[생성기](/ko/docs/Web/JavaScript/Reference/Statements/function*)에 대해서도 반복할 수 있습니다:

```js
function* fibonacci() {
  // 생성기 함수
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // 1000에서 수열을 자름
  if (n >= 1000) {
    break;
  }
}
```

### 다른 반복가능 객체에 대해 반복

[iterable](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) 프로토콜을 명시해서 구현하는 객체에 대해서도 반복할 수 있습니다:

```js
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  },
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### `for...of`와 `for...in`의 차이

[`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 루프는 객체의 모든 열거가능한 속성에 대해 반복합니다.

`for...of` 구문은 **컬렉션** 전용입니다. 모든 객체보다는, `[Symbol.iterator]` 속성이 있는 모든 컬렉션 요소에 대해 이 방식으로 반복합니다.

다음 예는 `for...of` 루프와 `for...in` 루프의 차이를 보입니다.

```js
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // logs 3, 5, 7
}
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [for each...in](/ko/docs/Web/JavaScript/Reference/Statements/for_each...in) - 비슷한 문이지만, 속성 이름 자체보다는 객체의 속성값을 반복합니다 (사라짐).
- {{jsxref("Array.prototype.forEach()")}}
- [Map.prototype.forEach()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
