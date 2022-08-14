---
title: Int8Array
slug: Web/JavaScript/Reference/Global_Objects/Int8Array
tags:
  - Class
  - Int8Array
  - JavaScript
  - TypedArray
  - TypedArrays
  - Polyfill
browser-compat: javascript.builtins.Int8Array
---
{{JSRef}}

**`Int8Array`** 타입 배열은 2의 보수 8비트 부호있는 정수의 배열을 나타냅니다. 내용은 `0`으로 초기화됩니다.
설정된 후에는 객체의 메서드 또는 표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.

## 생성자

- {{jsxref("Global_Objects/Int8Array/Int8Array", "Int8Array()")}}
  - : 세로운 `Int8Array` 객체를 만듭니다.

## 정적 속성

- {{jsxref("TypedArray.BYTES_PER_ELEMENT", "Int8Array.BYTES_PER_ELEMENT")}}
  - : 요소 크기의 숫자 값을 반환합니다. `Int8Array`의 경우 `1` 입니다.
- {{jsxref("TypedArray.name", "Int8Array.name")}}
  - : 생성자 이름의 문자열 값을 반환합니다. `Int8Array` 타입의 경우 "`Int8Array`"입니다.

## 정적 메서드

- {{jsxref("TypedArray.from", "Int8Array.from()")}}
  - : 배열과 유사하거나 순회가능한 객체로부터 새로운 `Int8Array`을 생성합니다. {{jsxref("Array.from()")}}을 참고하세요.
- {{jsxref("TypedArray.of", "Int8Array.of()")}}
  - : 가변 인자를 사용하여 `Int8Array`를 생성합니다. {{jsxref("Array.of()")}}를 참고하세요.

## 인스턴스 속성

- {{jsxref("TypedArray.prototype.buffer", "Int8Array.prototype.buffer")}}
  - : `Int8Array`에서 참조하는 {{jsxref("ArrayBuffer")}}를 반환합니다. 생성 시 고정되기 때문에 **읽기 전용**입니다.
- {{jsxref("TypedArray.prototype.byteLength", "Int8Array.prototype.byteLength")}}
  - : {{jsxref("ArrayBuffer")}}의 시작부터 `Int8Array`의 길이(바이트)를 반환합니다.. 생성 시 고정되기 때문에 **읽기 전용**입니다.
- {{jsxref("TypedArray.prototype.byteOffset", "Int8Array.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}}의 시작부터 `Int8Array`의 오프셋(바이트)를 반환합니다. 생성 시 고정되기 때문에 **읽기 전용**입니다.
- {{jsxref("TypedArray.prototype.length", "Int8Array.prototype.length")}}
  - : `Int8Array`내에 있는 요소 수를 반환합니다. 생성 시 고정되기 때문에 **읽기 전용**입니다.

## 인스턴스 메서드

- {{jsxref("TypedArray.copyWithin", "Int8Array.prototype.copyWithin()")}}
  - : 배열 내의 지정된 요소들을 동일한 배열 내에서 복사합니다. {{jsxref("Array.prototype.copyWithin()")}}를 참고하세요.
- {{jsxref("TypedArray.entries", "Int8Array.prototype.entries()")}}
  - : 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새로운 _배열 반복자_ 객체를 반환합니다. {{jsxref("Array.prototype.entries()")}}를 참고하세요.
- {{jsxref("TypedArray.every", "Int8Array.prototype.every()")}}
  - : 배열의 모든 요소가 주어진 판별 콜백을 만족할 경우 true를 반환합니다. {{jsxref("Array.prototype.every()")}}를 참고하세요.
- {{jsxref("TypedArray.fill", "Int8Array.prototype.fill()")}}
  - : 배열 안의 시작 인덱스부터 끝 인덱스까지의 요소값을 지정된 정적 값으로 채웁니다. {{jsxref("Array.prototype.fill()")}}를 참고하세요.
- {{jsxref("TypedArray.filter", "Int8Array.prototype.filter()")}}
  - : 지정한 필터링 콜백의 반환 결과가 `true`인 요소만 모은 새로운 배열을 반환합니다. {{jsxref("Array.prototype.filter()")}}를 참고하세요.
- {{jsxref("TypedArray.find", "Int8Array.prototype.find()")}}
  - : 주어진 판별 콜백을 만족하는 첫 번째 요소를 반환합니다. 만족하는 요소가 없으면 `undefined`를 반환합니다. {{jsxref("Array.prototype.find()")}}를 참고하세요.
- {{jsxref("TypedArray.findIndex", "Int8Array.prototype.findIndex()")}}
  - : 주어진 판별 콜백을 만족하는 첫 번째 요소의 인덱스를 반환합니다. 만족하는 요소가 없으면 `-1`을 반환합니다. {{jsxref("Array.prototype.findIndex()")}}를 참고하세요.
- {{jsxref("TypedArray.forEach", "Int8Array.prototype.forEach()")}}
  - : 배열의 각각의 요소에 대해 콜백을 호출합니다. {{jsxref("Array.prototype.forEach()")}}를 참고하세요.
- {{jsxref("TypedArray.includes", "Int8Array.prototype.includes()")}}
  - : 배열이 주어진 값을 포함하는지 판별해 `true` 또는 `false`를 반환합니다. {{jsxref("Array.prototype.includes()")}}를 참고하세요.
- {{jsxref("TypedArray.indexOf", "Int8Array.prototype.indexOf()")}}
  - : 배열에서 주어진 값과 일치하는 제일 앞의 인덱스를 반환합니다. 없으면 `-1`을 반환합니다. {{jsxref("Array.prototype.indexOf()")}}를 참고하세요.
- {{jsxref("TypedArray.join", "Int8Array.prototype.join()")}}
  - : 배열의 모든 요소를 문자열로 합칩니다. {{jsxref("Array.prototype.join()")}}을 참고하세요.
- {{jsxref("TypedArray.keys", "Int8Array.prototype.keys()")}}
  - : 배열의 각 인덱스에 대한 키를 가지는 새로운 _배열 반복자_ 객체를 반환합니다. {{jsxref("Array.prototype.keys()")}}를 참고하세요.
- {{jsxref("TypedArray.lastIndexOf", "Int8Array.prototype.lastIndexOf()")}}
  - : 배열에서 주어진 값과 일치하는 제일 뒤의 인덱스를 반환합니다. 없으면 `-1`을 반환합니다. {{jsxref("Array.prototype.lastIndexOf()")}}를 참고하세요.
- {{jsxref("TypedArray.map", "Int8Array.prototype.map()")}}
  - : 배열의 모든 요소 각각에 대하여 주어진 콜백 함수를 호출하고, 그 반환값을 모은 새로운 배열을 반환합니다. {{jsxref("Array.prototype.map()")}}을 참고하세요.
- {{jsxref("TypedArray.reduce", "Int8Array.prototype.reduce()")}}
  - : 주어진 콜백 함수를 가산기와 요소 각각에 대해 왼쪽에서 오른쪽으로 호출하여 하나의 값으로 줄인(reduce) 결과를 반환합니다. {{jsxref("Array.prototype.reduce()")}}를 참고하세요.
- {{jsxref("TypedArray.reduceRight", "Int8Array.prototype.reduceRight()")}}
  - : 주어진 콜백 함수를 가산기와 요소 각각에 대해 오른쪽에서 왼쪽으로 호출하여 하나의 값으로 줄인(reduce) 결과를 반환합니다. {{jsxref("Array.prototype.reduceRight()")}}를 참고하세요.
- {{jsxref("TypedArray.reverse", "Int8Array.prototype.reverse()")}}
  - : 배열의 요소 순서를 반전시킵니다. 첫 번째가 마지막이 되고 마지막이 첫 번째가 됩니다. {{jsxref("Array.prototype.reverse()")}}를 참고하세요.
- {{jsxref("TypedArray.set", "Int8Array.prototype.set()")}}
  - : 주어진 배열의 여러 값을 읽어서 배열의 여러 값을 저장합니다.
- {{jsxref("TypedArray.slice", "Int8Array.prototype.slice()")}}
  - : 배열의 일부를 추출한 새 배열을 반환합니다. {{jsxref("Array.prototype.slice()")}}를 참고하세요.
- {{jsxref("TypedArray.some", "Int8Array.prototype.some()")}}
  - : 배열의 어떤 요소가 주어진 판별 콜백을 만족할 경우 `true`를 반환합니다. {{jsxref("Array.prototype.some()")}}을 참고하세요.
- {{jsxref("TypedArray.sort", "Int8Array.prototype.sort()")}}
  - : 배열의 요소를 정렬하고 그 배열을 반환합니다. {{jsxref("Array.prototype.sort()")}}를 참고하세요.
- {{jsxref("TypedArray.subarray", "Int8Array.prototype.subarray()")}}
  - : 주어진 시작 요소와 끝 요소의 인덱스로부터 새로운 `Int8Array` 객체를 생성합니다.
- {{jsxref("TypedArray.values", "Int8Array.prototype.values()")}}
  - : 배열의 각 인덱스에 대한 값을 가지는 새로운 _배열 반복자_ 객체를 반환합니다.{{jsxref("Array.prototype.values()")}}를 참고하세요.
- {{jsxref("TypedArray.toLocaleString", "Int8Array.prototype.toLocaleString()")}}
  - : 배열과 그 요소를 나타내는 지역화된 문자열을 반환합니다. {{jsxref("Array.prototype.toLocaleString()")}}을 참고하세요.
- {{jsxref("TypedArray.toString", "Int8Array.prototype.toString()")}}
  - : 배열과 그 요소를 나타내는 문자열을 반환합니다. {{jsxref("Array.prototype.toString()")}}을 참고하세요.
- {{jsxref("TypedArray.@@iterator", "Int8Array.prototype[@@iterator]()")}}
  - : 배열의 각 인덱스에 대한 값을 가지는 새로운 _배열 반복자_ 객체를 반환합니다.

## 예제

### Int8Array를 생성하는 여러 방법

```js
// 숫자로부터
var int8 = new Int8Array(2);
int8[0] = 42;
console.log(int8[0]); // 42
console.log(int8.length); // 2
console.log(int8.BYTES_PER_ELEMENT); // 1

// 배열로부터
var arr = new Int8Array([21,31]);
console.log(arr[1]); // 31

// 다른 TypedArray로부터
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);
console.log(y[0]); // 21

// ArrayBuffer로부터
var buffer = new ArrayBuffer(8);
var z = new Int8Array(buffer, 1, 4);

// 순회로부터
var iterable = function*(){ yield* [1,2,3]; }();
var int8 = new Int8Array(iterable);
// Int8Array[1, 2, 3]
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `Int8Array`의 폴리필은 [`core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays) 여기서 참조할 수 있습니다.
- [JavaScript typed arrays](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
