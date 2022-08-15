---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
tags:
  - JavaScript
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray
browser-compat: javascript.builtins.TypedArray
---
{{JSRef}}

**_TypedArray_** 객체는 밑에 깔린 [이진 데이터 버퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)의 배열 같은 뷰를 기술합니다. `TypedArray`인 전역 속성도 눈에 직접 보이는 `TypedArray` 생성자도 없습니다. 대신 다양한 전역 속성이 있습니다, 그 값이 아래 나열된 특정 요소 유형에 대한 형식화 배열 생성자인. 다음 페이지에서 각 유형 요소를 포함하는 모든 형식화 배열에 쓰일 수 있는 공통 속성 및 메서드를 찾을 수 있습니다.

## 구문

    new TypedArray(length);
    new TypedArray(typedArray);
    new TypedArray(object);
    new TypedArray(buffer [, byteOffset [, length]]);

    TypedArray()는 다음 중 하나입니다:

    Int8Array();
    Uint8Array();
    Uint8ClampedArray();
    Int16Array();
    Uint16Array();
    Int32Array();
    Uint32Array();
    Float32Array();
    Float64Array();

### 매개변수

- length
  - : `length` 인수와 함께 호출하면 메모리상에 길이에 BYTES_PER_ELEMENT bytes(바이트)를 곱한 크기만큼의, 0을 포함한 이진 데이터 버퍼를 생성합니다.
- typedArray
  - : `typedArray` 인수와 함께 호출하면, 모든 형식화 배열 객체 유형(가령 `Int32Array`)이 될 수 있는, `typedArray`는 새로운 형식화 배열로 복사됩니다. `typedArray` 내 각 값은 새로운 배열로 복사되기 전에 해당 유형의 생성자로 변환됩니다.
- object
  - : `object` 인수와 함께 호출하면, 새로운 형식화 배열이 마치 `TypedArray.from()` 메서드에 의해서처럼 생성됩니다.
- buffer, byteOffset, length
  - : `buffer`와 선택 사항으로 `byteOffset` 및 `length` 인수와 함께 호출하면, 새로운 형식화 배열 뷰는 지정된 {{jsxref("ArrayBuffer")}} 뷰로 생성됩니다. `byteOffset` 및 `length` 매개변수는 형식화 배열 뷰에 의해 노출되는 메모리 범위를 지정합니다. 둘 다 생략된 경우, `buffer`가 모두 보입니다; `length`만 생략된 경우, `buffer`의 나머지가 보입니다.

## 설명

ECMAScript 6는 모든 _TypedArray_ 생성자의 `[[Prototype]]` 역할을 하는 _TypedArray_ 생성자를 정의합니다. 이 생성자는 직접 노출되지 않습니다: 전역 `%TypedArray%` 또는 `TypedArray` 속성은 없습니다. `Object.getPrototypeOf(Int8Array.prototype)` 및 비슷한 방식을 통해서만 직접 접근할 수 있습니다. 모든 _TypedArray_ 생성자는 `%TypedArray%` 생성자 함수로부터 공통 속성을 상속합니다. 게다가, 모든 형식화 배열 프로토타입(_TypedArray_`.prototype`)은 자기 `[[Prototype]]`으로서 `%TypedArray%.prototype`이 있습니다.

`%TypedArray%` 생성자 자체로는 특별히 유용한 것은 아닙니다. 호출하거나 `new` 식으로 사용하면 `TypeError`가 발생합니다, 서브클래싱을 지원하는 JS 엔진에서 객체 생성 도중 사용될 때 빼고는. 현재로서는 그러한 엔진이 없기에 `%TypedArray%`는 모든 _TypedArray_ 생성자에 함수 또는 속성을 폴리필할 때만 유용합니다.

### 속성 접근

표준 배열 인덱스 구문(즉, 각괄호 표기법)을 써서 배열의 요소를 참조할 수 있습니다. 그러나, 형식화 배열에 인덱스 있는 속성의 읽기(getting) 또는 쓰기(setting)는 이 속성에 대한 프로토타입 체인에서 찾을 수 없습니다, 심지어 인덱스가 범위 밖인 경우라도. 인덱스 있는 속성은 {{jsxref("ArrayBuffer")}}를 조사하고 객체 속성을 조사하지는 않습니다. 여전히 유명 속성을 사용할 수 있습니다, 모든 객체와 마찬가지로.

```js
// 표준 배열 구문을 사용해 쓰기 및 읽기
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// 프로토타입의 인덱스 있는 속성은 조사되지 않음 (Fx 25)
Int8Array.prototype[20] = "foo";
(new Int8Array(32))[20]; // 0
// 비록 범위 밖 또는
Int8Array.prototype[20] = "foo";
(new Int8Array(8))[20]; // undefined
// 음의 정수인 경우에도
Int8Array.prototype[-1] = "foo";
(new Int8Array(8))[-1]; // undefined

// 유명(named) 속성은 허용됨, 다만 (Fx 30) 에서지만
Int8Array.prototype.foo = "bar";
(new Int8Array(32)).foo; // "bar"
```

## TypedArray 객체

| 유형                                     | 크기 (바이트) | 설명                                | Web IDL 형            | 해당 C 형  |
| ---------------------------------------- | ------------- | ----------------------------------- | --------------------- | ---------- |
| {{jsxref("Int8Array")}}         | 1             | 8비트 2의 보수 형식 부호 있는 정수  | `byte`                | `int8_t`   |
| {{jsxref("Uint8Array")}}         | 1             | 8비트 부호 없는 정수                | `octet`               | `uint8_t`  |
| {{jsxref("Uint8ClampedArray")}} | 1             | 8비트 부호 없는 정수 (단속됨)       | `octet`               | `uint8_t`  |
| {{jsxref("Int16Array")}}         | 2             | 16비트 2의 보수 형식 부호 있는 정수 | `short`               | `int16_t`  |
| {{jsxref("Uint16Array")}}         | 2             | 16비트 부호 없는 정수               | `unsigned short`      | `uint16_t` |
| {{jsxref("Int32Array")}}         | 4             | 32비트 2의 보수 형식 부호 있는 정수 | `long`                | `int32_t`  |
| {{jsxref("Uint32Array")}}         | 4             | 32비트 부호 없는 정수               | `unsigned long`       | `uint32_t` |
| {{jsxref("Float32Array")}}     | 4             | 32비트 IEEE 부동 소수점 수          | `unrestricted float`  | `float`    |
| {{jsxref("Float64Array")}}     | 8             | 64비트 IEEE 부동 소수점 수          | `unrestricted double` | `double`   |

## 정적 속성

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : 서로 다른 형식화 배열 객체에 대해 요소 크기의 숫자값을 반환합니다.
- _TypedArray_.length
  - : 값이 3인 길이 속성.
- {{jsxref("TypedArray.name")}}
  - : 생성자 이름의 문자열 값을 반환합니다. 가령 "Int8Array".
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : 파생된 객체를 생성하는데 쓰이는 생성자 함수.
- {{jsxref("TypedArray.prototype")}}
  - : _TypedArray_ 객체에 대한 프로토타입.

## 정적 메서드

- {{jsxref("TypedArray.from()")}}
  - : 배열 같은 또는 반복가능(iterable) 객체로부터 새로운 형식화 배열을 생성합니다. {{jsxref("Array.from()")}}도 참조.
- {{jsxref("TypedArray.of()")}}
  - : 가변(variable) 인수로 새로운 형식화 배열을 생성합니다. {{jsxref("Array.of()")}}도 참조.

## 인스턴스 속성

- {{jsxref("TypedArray.prototype.buffer")}}
  - : Returns the {{jsxref("ArrayBuffer")}} referenced by the typed array. Fixed at
    construction time and thus **read only**.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : Returns the length (in bytes) of the typed array. Fixed at construction time and
    thus **read only.**
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : Returns the offset (in bytes) of the typed array from the start of its
    {{jsxref("ArrayBuffer")}}. Fixed at construction time and thus **read
    only.**
- {{jsxref("TypedArray.prototype.length")}}
  - : Returns the number of elements held in the typed array. Fixed at construction time
    and thus **read only.**

## 인스턴스 메서드

- {{jsxref("TypedArray.prototype.at()")}}
  - : Takes an integer value and returns the item at that index. This method allows for negative integers, which count back from the last item.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : Copies a sequence of array elements within the array. See also
    {{jsxref("Array.prototype.copyWithin()")}}.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : Returns a new _array iterator_ object that contains the key/value pairs for each index
    in the array. See also {{jsxref("Array.prototype.entries()")}}.
- {{jsxref("TypedArray.prototype.every()")}}
  - : Tests whether all elements in the array pass the test provided by a function. See
    also {{jsxref("Array.prototype.every()")}}.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : Fills all the elements of an array from a start index to an end index with a static
    value. See also {{jsxref("Array.prototype.fill()")}}.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : Creates a new array with all of the elements of this array for which the provided
    filtering function returns `true`. See also
    {{jsxref("Array.prototype.filter()")}}.
- {{jsxref("TypedArray.prototype.find()")}}
  - : Returns the found value in the array, if an element in the array satisfies the
    provided testing function, or `undefined` if not found. See also
    {{jsxref("Array.prototype.find()")}}.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : Returns the found index in the array, if an element in the array satisfies the
    provided testing function or `-1` if not found. See also
    {{jsxref("Array.prototype.findIndex()")}}.
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : Calls a function for each element in the array. See also
    {{jsxref("Array.prototype.forEach()")}}.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : Determines whether a typed array includes a certain element, returning
    `true` or `false` as appropriate. See also
    {{jsxref("Array.prototype.includes()")}}.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : Returns the first (least) index of an element within the array equal to the
    specified value, or `-1` if none is found. See also
    {{jsxref("Array.prototype.indexOf()")}}.
- {{jsxref("TypedArray.prototype.join()")}}
  - : Joins all elements of an array into a string. See also
    {{jsxref("Array.prototype.join()")}}.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : Returns a new array iterator that contains the keys for each index in the array. See
    also {{jsxref("Array.prototype.keys()")}}.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : Returns the last (greatest) index of an element within the array equal to the
    specified value, or `-1` if none is found. See also
    {{jsxref("Array.prototype.lastIndexOf()")}}.
- {{jsxref("TypedArray.prototype.map()")}}
  - : Creates a new array with the results of calling a provided function on every element
    in this array. See also {{jsxref("Array.prototype.map()")}}.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : Apply a function against an accumulator and each value of the array (from
    left-to-right) as to reduce it to a single value. See also
    {{jsxref("Array.prototype.reduce()")}}.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : Apply a function against an accumulator and each value of the array (from
    right-to-left) as to reduce it to a single value. See also
    {{jsxref("Array.prototype.reduceRight()")}}.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : Reverses the order of the elements of an array — the first becomes the last, and the
    last becomes the first. See also {{jsxref("Array.prototype.reverse()")}}.
- {{jsxref("TypedArray.prototype.set()")}}
  - : Stores multiple values in the typed array, reading input values from a specified
    array.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : Extracts a section of an array and returns a new array. See also
    {{jsxref("Array.prototype.slice()")}}.
- {{jsxref("TypedArray.prototype.some()")}}
  - : Returns `true` if at least one element in this array satisfies the
    provided testing function. See also {{jsxref("Array.prototype.some()")}}.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : Sorts the elements of an array in place and returns the array. See also
    {{jsxref("Array.prototype.sort()")}}.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : Returns a new `TypedArray` from the given start and end
    element index.
- {{jsxref("TypedArray.prototype.values()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the
    array. See also {{jsxref("Array.prototype.values()")}}.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : Returns a localized string representing the array and its elements. See also
    {{jsxref("Array.prototype.toLocaleString()")}}.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : Returns a string representing the array and its elements. See also
    {{jsxref("Array.prototype.toString()")}}.
- {{jsxref("TypedArray.prototype.@@iterator()",
    "TypedArray.prototype[@@iterator]()")}}
  - : Returns a new _array iterator_ object that contains the values for each index in the
    array.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
