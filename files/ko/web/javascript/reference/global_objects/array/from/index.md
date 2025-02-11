---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`Array.from()`** 정적 메서드는 [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#순회_가능_프로토콜) 또는 [유사 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections##유사_배열_객체_다루기) 객체에서 얕게 복사된 새로운 `Array` 인스턴스를 생성합니다.

{{InteractiveExample("JavaScript Demo: Array.from()", "shorter")}}

```js interactive-example
console.log(Array.from("foo"));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]
```

## 구문

```js-nolint
Array.from(arrayLike)
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)
```

### 매개변수

- `arrayLike`
  - : 배열로 변환할 순회 가능 또는 유사 배열 객체입니다.
- `mapFn`{{optional_inline}}
  - : 배열의 모든 요소에 대해 호출할 함수입니다. 이 함수를 제공하면 배열에 추가할 모든 값이 이 함수를 통해 먼저 전달되고, `mapFn`의 반환 값이 대신 배열에 추가됩니다. 이 함수는 다음 인수를 사용하여 호출됩니다.
    - `element`
      - : 배열에서 처리 중인 현재 요소.
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스.
- `thisArg`{{optional_inline}}
  - : `mapFn` 실행 시에 `this`로 사용할 값입니다.

### 반환 값

새로운 {{jsxref("Array")}} 인스턴스입니다.

## 설명

다음과 같은 경우에 `Array.from()`을 사용하면 `Array`를 만들 수 있습니다.

- [순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#순회_가능_프로토콜) 객체({{jsxref("Map")}}, {{jsxref("Set")}}과 같은 객체)인 경우. 또는 객체가 순회 가능이 아니라면,
- 유사 배열 객체(`length` 속성과 인덱싱된 요소가 있는 객체).

순회 가능이 아니거나 유사 배열이 아닌 일반 객체를 배열로 변환하려면(속성 키, 값 또는 둘을 모두 열거하여) {{jsxref("Object.keys()")}}, {{jsxref("Object.values()")}}, 또는 {{jsxref("Object.entries()")}}를 사용해야 합니다. [비동기 순회 가능](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#비동기_순회자와_비동기_순회_가능_프로토콜)을 배열로 변환하려면 {{jsxref("Array.fromAsync()")}}를 사용합니다.

`Array.from()`은 희소 배열을 생성하지 않습니다. `arrayLike` 객체에 일부 인덱스 속성이 누락된 경우, 새 배열에서 해당 속성은 `undefined`가 됩니다.

`Array.from()`에는 생성되는 배열의 각 요소에 대해 함수를 실행할 수 있는 {{jsxref("Array/map", "map()")}}과 비슷한 선택적 매개변수 `mapFn`이 있습니다. 좀 더 명확하게 설명하자면, `Array.from(obj, mapFn, thisArg)`는 중간 배열을 생성하지 않는다는 점과 배열이 아직 생성 중이기 때문에 전체 배열 없이 두 개의 인수(`element`, `index`)만 받는다는 점을 제외하면 `Array.from(obj).map(mapFn, thisArg)`과 동일한 결과를 가져옵니다.

> [!NOTE]
> 이 동작은 [형식화 배열](/ko/docs/Web/JavaScript/Guide/Typed_arrays)에서 더 중요한데, 중간 배열에는 적절한 형식에 맞게 잘린 값이 있어야 하기 때문입니다. `Array.from()`은 {{jsxref("TypedArray.from()")}}과 동일한 동작을 하도록 구현되었습니다.

`Array.from()` 메서드는 범용 팩토리 메서드입니다. 예를 들어, `Array`의 하위 클래스가 `from()` 메서드를 상속하는 경우, 상속된 `from()` 메서드는 `Array` 인스턴스 대신 하위 클래스의 새 인스턴스를 반환합니다. 실제로 `this` 값은 새 배열의 길이를 나타내는 단일 인수를 받는 모든 생성자 함수가 될 수 있습니다. 순회 가능이 `arrayLike`로 전달되면 인수 없이 생성자가 호출되고, 배열형 객체가 전달되면 배열형 객체의 [정규화된 length](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#length_속성_일반화)를 사용하여 생성자가 호출됩니다. 최종 `length`는 순회가 완료되면 다시 설정됩니다. `this` 값이 생성자 함수가 아닌 경우, 일반 `Array` 생성자가 대신 사용됩니다.

## 예제

### String으로 배열 만들기

```js
Array.from("foo");
// [ "f", "o", "o" ]
```

### Set으로 배열 만들기

```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Map으로 배열 만들기

```js
const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];
```

### NodeList로 배열 만들기

```js
// DOM 요소의 속성을 기반으로 배열 만들기
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
```

### 유사 배열 객체로 배열 만들기 (arguments)

```js
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);

// [ 1, 2, 3 ]
```

### 화살표 함수와 Array.from() 사용하기

```js
// 화살표 함수를 map 함수로 사용하여 요소 조작
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// 숫자 시퀀스 생성하기
// 배열의 각 위치가 `undefined`로 초기화되므로
// 아래 'v'의 값은 `undefined`가 됩니다.
Array.from({ length: 5 }, (v, i) => i);
// [0, 1, 2, 3, 4]
```

### 시퀀스 생성기 (range)

```js
// 시퀀스 생성기 함수 (Clojure, PHP 등에선 "range"라고도 함)
const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

// 0..4 범위의 숫자 생성하기
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// 두 단계씩 1...10 범위의 숫자 생성
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// 시퀀스로 정렬되는 것을 활용하여 `Array.from`으로 알파벳을 생성하기
range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
  String.fromCharCode(x),
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
```

### 배열이 아닌 생성자에 from() 호출하기

`from()` 메서드는 새 배열의 `length`를 나타내는 단일 인수를 받아들이는 모든 생성자 함수에서 호출할 수 있습니다.

```js
function NotArray(len) {
  console.log("NotArray called with length", len);
}

// 순회 가능
console.log(Array.from.call(NotArray, new Set(["foo", "bar", "baz"])));
// NotArray는 length가 undefined인 상태로 호출됩니다.
// NotArray { '0': 'foo', '1': 'bar', '2': 'baz', length: 3 }

// 유사 배열
console.log(Array.from.call(NotArray, { length: 1, 0: "foo" }));
// NotArray는 length가 1인 상태로 호출됩니다.
// NotArray { '0': 'foo', length: 1 }
```

`this` 값이 생성자가 아닌 경우, 일반 `Array` 객체가 반환됩니다.

```js
console.log(Array.from.call({}, { length: 1, 0: "foo" })); // [ 'foo' ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.from` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array/Array", "Array()")}}
- {{jsxref("Array.of()")}}
- {{jsxref("Array.fromAsync()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
