---
title: Array.prototype.values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
---

{{JSRef}}

**`values()`** 메서드는 배열에서 각 인덱스에 대한 값을 순회하는 _array [iterator](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterator_protocol)_ 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-values.html")}}

## 구문

```js-nolint
values()
```

## 반환 값

순회 가능한 새로운 반복자

## 설명

`Array.prototype.values()`는 [`Array.prototype[@@iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator)의 기본 구현체입니다.

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; // true
```

`values()` 메소드는 [희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#sparse_arrays)에서도 유별나게 동작하지 않습니다. 빈 슬롯은 값이 `undefined`인 것처럼 방문합니다.

## 예제

### for...of 루프를 통한 반복

`values()`는 순회 가능한 반복자를 반환하므로, [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프를 사용하여 순회할 수 있습니다.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### next()를 사용한 순회

반환 값도 반복자이므로 `next()` 메서드를 직접 호출할 수 있습니다.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined
```

### 반복자 재사용하기

> **Warning:** 배열 반복자 객체는 일회용 객체입니다. 재사용하지 마세요.

`values()`에서 반환되는 반복자는 재사용할 수 없습니다. `next().done = true` 또는 `currentIndex > length`, [the `for...of` loop ends](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#interactions_between_the_language_and_iteration_protocols) 그리고 추가적인 순회는 아무 효과가 없습니다.

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined
```

[`break`](/ko/docs/Web/JavaScript/Reference/Statements/break)문을 사용하여 순회를 조기에 종료하면, 나중에 순회를 다시 이어나가고자 할 때 현재 위치에서 반복자를 다시 사용할 수 있습니다.

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"
```

### 순환 중 가변

`values()`에서 반환되는 배열 반복자 객체에는 저장되어 있는 값이 없습니다. 대신 생성에 사용된 배열의 주소를 저장하고 각 순회에서 현재 방문 중인 인덱스를 읽습니다. 따라서 순회 시 출력은 순회할 때의 인덱스에 담겨있는 값에 따라 달라집니다. 배열의 값이 변경되면 배열 반복자 객체의 값도 변경됩니다.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

### 희소 배열 순회하기

`values()`은 빈 슬롯을 마치 `undefined`인 것처럼 방문합니다.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Array.prototype.values` in `core-js`](https://github.com/zloirock/core-js#ecmascript-array)
- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [A polyfill](https://github.com/behnammodi/polyfill/blob/master/array.polyfill.js)
