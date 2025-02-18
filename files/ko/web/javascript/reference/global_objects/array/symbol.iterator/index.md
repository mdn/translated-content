---
title: Array.prototype[@@iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
original_slug: Web/JavaScript/Reference/Global_Objects/Array/@@iterator
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`[@@iterator]()`** 메서드는 [순회 가능 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)을 구현하며, 배열을 [전개 구문](/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax)이나 {{jsxref("Statements/for...of", "for...of")}} 루프와 같이 순회 가능을 기대하는 대부분의 구문에서 사용할 수 있도록 합니다. 이 메서드는 배열의 각 인덱스 값을 산출하는 [배열 순회자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator)를 반환합니다.

이 속성의 초기 값은 {{jsxref("Array.prototype.values")}} 속성의 초기 값과 동일한 함수 객체입니다.

{{InteractiveExample("JavaScript Demo: Array.prototype[Symbol.iterator]()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator1 = array1[Symbol.iterator]();

for (const value of iterator1) {
  console.log(value);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

## 구문

```js-nolint
array[Symbol.iterator]()
```

### 매개변수

없음.

### 반환 값

{{jsxref("Array.prototype.values()")}}와 동일한 반환 값입니다. 이는 배열의 각 인덱스의 값을 산출하는 새로운 [순회 가능 순회자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator)입니다.

## 예제

### for...of 루프를 사용한 순회

이 메서드를 직접 호출할 필요는 거의 없습니다. `@@iterator` 메서드가 있으면 배열을 [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#순회_가능_프로토콜)으로 만들 수 있으며, `for...of` 루프와 같은 순회 구문은 이 메서드를 자동으로 호출하여 반복할 순회자를 얻습니다.

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### 결과

{{EmbedLiveSample('for...of_루프를_사용한_순회', '', '')}}

### 순회자를 수동으로 부르기

반환된 순회자 객체의 `next` 메서드를 수동으로 호출하여 순회 과정을 최대한 제어할 수 있습니다.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### 동일한 함수로 문자열과 문자열 배열 처리하기

[문자열](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)과 배열은 모두 순회 가능 프로토콜을 구현하기 때문에, 범용 함수는 두 입력을 동일한 방식으로 처리하도록 설계할 수 있습니다. 이는 입력이 배열이거나 적어도 해당 메서드가 있는 객체여야 하는 {{jsxref("Array.prototype.values()")}}를 직접 호출하는 것보다 낫습니다.

```js
function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "is not iterable.");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// Array
logIterable(["a", "b", "c"]);
// a
// b
// c

// String
logIterable("abc");
// a
// b
// c

// Number
logIterable(123);
// 123은 순회 가능이 아닙니다.
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype[@@iterator]` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스된 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections)
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`TypedArray.prototype[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- [`String.prototype[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/@@iterator)
- {{jsxref("Symbol.iterator")}}
- [순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
