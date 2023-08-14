---
title: TypedArray
slug: Web/JavaScript/Reference/Global_Objects/TypedArray
---

{{JSRef}}

**_TypedArray_** 객체는 [이진 데이터 버퍼](/ko/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)에 기초하여 배열과 같은 보기를 만들어냅니다.
하지만 `TypedArray`라는 전역 속성은 존재하지 않으며, 직접 볼 수 있는 `TypedArray` 생성자도 존재하지 않습니다. 대신 아래에 있는 특정 요소 유형에 대한 형식화 배열 생성자를 가지는 다양한 전역 속성을 사용할 수 있습니다. 다음 페이지에서는 모든 유형의 요소를 포함하는 모든 유형의 배열에서 사용할 수 있는 공통 속성과 메서드를 살펴보겠습니다.

{{EmbedInteractiveExample("pages/js/typedarray-constructor.html")}}

## 설명

`TypedArray` 생성자는 모든 `TypedArray` 생성자의 `[[Prototype]]` 역할을 하는 숨겨진 전역입니다.
이 생성자는 직접 노출되지 않아 전역 `%TypedArray%` 또는 `TypedArray` 속성이 없습니다. 그래서 `Object.getPrototypeOf(Int8Array)` 등을 통해서만 직접 액세스할 수 있습니다. 모든 `TypedArrays` 생성자는 `%TypedArray%` 생성자 함수에서 공통 속성을 상속받고, 모든 형식화 배열의 프로토타입(`TypedArray.prototype`)은 `%TypedArray%.prototype`을 `[[Prototype]]`으로 가지고 있습니다.

`TypedArray`(예: `Int8Array`)의 인스턴스를 생성하거나 배열 버퍼가 내부적으로 메모리에 생성되거나 `ArrayBuffer` 객체가 생성자 인수로 주어지면 이들이 대신 사용됩니다. 버퍼 주소는 인스턴스의 내부 속성으로 저장되며 `%TypedArray%.prototype`의 모든 메서드(예: 값 설정 및 값 가져오기 등)는 해당 배열 버퍼 주소에서 작동합니다.

## TypedArray 객체

| 형식                            | 값 범위                                        | 바이트 크기 | 설명                                                                      | Web IDL 형식          | 동일한 C 형식                   |
| ------------------------------- | ---------------------------------------------- | ----------- | ------------------------------------------------------------------------- | --------------------- | ------------------------------- |
| {{jsxref("Int8Array")}}         | -128 to 127                                    | 1           | 부호 있는 8비트 2의 보수 정수                                             | `byte`                | `int8_t`                        |
| {{jsxref("Uint8Array")}}        | 0 to 255                                       | 1           | 부호 없는 8비트 정수                                                      | `octet`               | `uint8_t`                       |
| {{jsxref("Uint8ClampedArray")}} | 0 to 255                                       | 1           | 부호 없는 8비트 정수 (고정)                                               | `octet`               | `uint8_t`                       |
| {{jsxref("Int16Array")}}        | -32768 to 32767                                | 2           | 부호 있는 16비트 2의 보수 정수                                            | `short`               | `int16_t`                       |
| {{jsxref("Uint16Array")}}       | 0 to 65535                                     | 2           | 부호 없는 16비트 정수                                                     | `unsigned short`      | `uint16_t`                      |
| {{jsxref("Int32Array")}}        | -2147483648 to 2147483647                      | 4           | 부호 있는 32비트 2의 보수 정수                                            | `long`                | `int32_t`                       |
| {{jsxref("Uint32Array")}}       | 0 to 4294967295                                | 4           | 부호 없는 32비트 정수                                                     | `unsigned long`       | `uint32_t`                      |
| {{jsxref("Float32Array")}}      | `-3.4E38`에서 `3.4E38`. `1.2E-38`은 최초 양수  | 4           | 32비트 IEEE 부동 소수점 숫자 (유효한 7자리 숫자, 예: `1.234567`)          | `unrestricted float`  | `float`                         |
| {{jsxref("Float64Array")}}      | `-1.8E308`에서 `1.8E308`. `5E-324`는 최소 양수 | 8           | 64비트 IEEE 부동 소수점 숫자 (유효한 16자리 숫자, 예: `1.23456789012345`) | `unrestricted double` | `double`                        |
| {{jsxref("BigInt64Array")}}     | -2<sup>63</sup>에서 2<sup>63</sup> - 1         | 8           | 부호 있는 64비트 2의 보수 정수                                            | `bigint`              | `int64_t (signed long long)`    |
| {{jsxref("BigUint64Array")}}    | 0 에서 2<sup>64</sup> - 1                      | 8           | 부호 없는 64비트 정수                                                     | `bigint`              | `uint64_t (unsigned long long)` |

## 생성자

이 객체는 직접 인스턴스화할 수 없습니다. 대신 {{jsxref("Int8Array")}} 또는 {{jsxref("BigInt64Array")}}와 같은 특정 유형의 배열 인스턴스를 만들 수 있습니다. 이러한 객체에는 모두 생성자에 대한 공통적인 구문이 있습니다.

```js
new TypedArray();
new TypedArray(length);
new TypedArray(typedArray);
new TypedArray(object);

new TypedArray(buffer);
new TypedArray(buffer, byteOffset);
new TypedArray(buffer, byteOffset, length);
```

여기서 _TypedArray_ 는 구체적인 유형 중 하나의 생성자입니다.

> **참고:** 모든 `TypedArray` 생성자는 [`new`](/ko/docs/Web/JavaScript/Reference/Operators/new)로만 생성할 수 있습니다. `new` 없이 호출하려고 하면 {{jsxref("TypeError")}}가 발생합니다.

## 매개변수

- `length`
  - : `length` 인수와 함께 호출되면, `length`에 _`BYTES_PER_ELEMENT`_ 바이트를 **곱한** 크기의 0으로 채워진 내부 배열 버퍼가 메모리에 생성됩니다.
- `typedArray`
  - : `typedArray` 인수를 사용하여 호출하면, `typedArray`가 새 형식화 배열에 복사됩니다. **non-{{glossary("bigint")}}** `TypedArray`의 경우, `typedArray` 매개변수는 오직 **non**-{{glossary("bigint")}} 종류의 형식화 배열 객체만(예: {{JSxRef("Int32Array")}}) 될 수 있습니다. 마찬가지로 **{{glossary("bigint")}}** `TypedArray`의 경우, `typedArray` 매개변수는 {{glossary("bigint")}} 형식화 배열 종류의 객체(예: {{JSxRef("BigInt64Array")}})만 될 수 있습니다. `typedArray`의 각 값은 새 배열에 복사되기 전에 해당 생성자의 형식으로 변환됩니다. 새로운 형식화 배열의 길이는 `typedArray` 인수의 길이와 동일합니다.
- `object`
  - : `object` 인수를 사용하여 호출하면, `TypedArray.from()` 메서드에서와 같이 새로운 형식화 배열이 생성됩니다.
- `buffer`, `byteOffset`,
  `length`
  - : `buffer`와 선택적으로 전달할 수 있는 `byteOffset` 및 `length` 인수가 함께 호출되면, 지정된 {{jsxref("ArrayBuffer")}}를 보는 새로운 형식화 배열 뷰가 생성됩니다. `byteOffset` 및 `length` 매개변수는 형식화 배열 보기에 의해 노출될 메모리 범위를 지정합니다. 둘 다 생략하면 모든 버퍼가 표시되고, `length`만 생략하면 `buffer`의 나머지 부분이 표시됩니다.

## 정적 속성

- {{jsxref("TypedArray.BYTES_PER_ELEMENT")}}
  - : `TypedArray` 객체 요소의 크기를 숫자 값으로 반환합니다.
- {{jsxref("TypedArray.name")}}
  - : 생성자 이름을 문자열로 반환합니다(예: `"Int8Array"`).
- {{jsxref("TypedArray.@@species", "get TypedArray[@@species]")}}
  - : 파생된 객체를 만드는 데 사용되는 생성자 함수입니다.
- {{jsxref("TypedArray")}}
  - : `TypedArray` 객체의 프로토타입.

## 정적 메서드

- {{jsxref("TypedArray.from()")}}
  - : 배열과 유사하거나 반복 가능한 객체에서 새 `TypedArray`를 만듭니다. {{jsxref("Array.from()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.of()")}}
  - : 가변 개수의 인수를 사용하여 새 `TypedArray`를 만듭니다. {{jsxref("Array.of()")}}도 참조하시기 바랍니다.

## 인스턴스 속성

- {{jsxref("TypedArray.prototype.buffer")}}
  - : 형식화 배열이 참조하는 {{jsxref("ArrayBuffer")}} 반환합니다. 생성 시 고정되는 값으로 **읽기 전용**입니다.
- {{jsxref("TypedArray.prototype.byteLength")}}
  - : 형식화 배열의 길이(바이트)를 반환합니다. 생성 시 고정되는 값으로 **읽기 전용**입니다.
- {{jsxref("TypedArray.prototype.byteOffset")}}
  - : {{jsxref("ArrayBuffer")}}의 시작 부터 형식화 배열의 지정된 오프셋(바이트)을 반환합니다. 생성시 시 고정되는 값으로 **읽기 전용**입니다.
- {{jsxref("TypedArray.prototype.length")}}
  - : 형식화 배열에 포함된 요소의 수를 반환합니다. 생성 시 고정되는 값으로 **읽기 전용**입니다.

## 인스턴스 메서드

- {{jsxref("TypedArray.prototype.at()")}}
  - : 정수 값으로 해당 인덱스의 항목을 반환합니다. 이 메서드는 마지막 항목부터 접근하는 음의 정수를 허용합니다.
- {{jsxref("TypedArray.prototype.copyWithin()")}}
  - : 배열 내의 배열 요소 시퀀스를 복사합니다. {{jsxref("Array.prototype.copyWithin()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.entries()")}}
  - : 배열의 각 인덱스에 대한 키/값 쌍을 포함하는 새 **배열 반복기** 객체를 반환합니다. {{jsxref("Array.prototype.entries()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.every()")}}
  - : 배열의 모든 요소가 함수에서 제공하는 테스트를 통과하는지 확인합니다. {{jsxref("Array.prototype.every()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.fill()")}}
  - : 시작 인덱스에서 끝 인덱스까지 배열의 모든 요소를 정적 값으로 채웁니다. {{jsxref("Array.prototype.fill()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.filter()")}}
  - : 제공된 필터링 함수가 `true`를 반환하는 이 배열의 모든 요소를 사용하여 새 배열을 만듭니다. {{jsxref("Array.prototype.filter()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.find()")}}
  - : 제공된 테스트 함수를 충족하는 첫번 째 `element`를 반환하고, 찾지 못하면 `undefined`를 반환합니다. {{jsxref("Array.prototype.find()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.findIndex()")}}
  - : 제공된 테스트 함수를 충족하는 첫 번째 요소의 인덱스 값을 반환하고, 찾지 못한 경우는 `-1`을 반환합니다. {{jsxref("Array.prototype.findIndex()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.findLast()")}}
  - : 제공된 테스트 함수를 충족하는 배열의 마지막 요소 값을 반환하고, 요소가 없으면 `undefined`를 반환합니다. {{jsxref("Array.prototype.findLast()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.findLastIndex()")}}
  - : 제공된 테스트 함수를 충족하는 배열의 마지막 요소의 인덱스를 반환하고, 요소를 찾지 못한 경우는 `-1`을 반환합니다. {{jsxref("Array.prototype.findLastIndex()")}}도 참조하시기 바랍니다..
- {{jsxref("TypedArray.prototype.forEach()")}}
  - : 배열의 각 요소에 대해 함수를 호출합니다. {{jsxref("Array.prototype.forEach()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.includes()")}}
  - : 형식화 배열에 특정 요소가 포함되어 있는지 여부를 결정하여 `true` 또는 `false`를 반환합니다 {{jsxref("Array.prototype.includes()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.indexOf()")}}
  - : 지정된 값과 동일한 배열 내 요소의 첫 번째(최소) 인덱스를 반환하고, 아무 것도 발견되지 않으면 `-1`을 반환합니다. {{jsxref("Array.prototype.indexOf()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.join()")}}
  - : 배열의 모든 요소를 문자열로 결합합니다. {{jsxref("Array.prototype.join()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.keys()")}}
  - : 배열의 각 인덱스에 대한 키를 포함하는 새 배열 반복자를 반환합니다. {{jsxref("Array.prototype.keys()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.lastIndexOf()")}}
  - : 지정된 값과 동일한 배열 내 요소의 마지막(가장 큰) 인덱스를 반환고, 찾지 못한 경우엔 `-1`을 반환합니다. {{jsxref("Array.prototype.lastIndexOf()")}}도 참조하시기 바랍니다..
- {{jsxref("TypedArray.prototype.map()")}}
  - : 배열의 모든 요소에 대해 제공된 함수를 호출한 결과로 새 배열을 만듭니다. {{jsxref("Array.prototype.map()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.reduce()")}}
  - : 누산기와 배열의 각 값(왼쪽에서 오른쪽으로)에 대해 함수를 적용하여 단일 값으로 줄입니다. {{jsxref("Array.prototype.reduce()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.reduceRight()")}}
  - : 누산기와 배열의 각 값(오른쪽에서 왼쪽으로)에 대해 함수를 적용하여 단일 값으로 줄입니다. {{jsxref("Array.prototype.reduceRight()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.reverse()")}}
  - : 배열 요소의 순서를 뒤집습니다. 첫 번째 요소가 마지막 요소가 되고 마지막 요소가 첫 번째 요소가 됩니다. {{jsxref("Array.prototype.reverse()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.set()")}}
  - : 형식화 배열에 여러 값을 저장하고 지정된 배열에서 입력 값을 읽습니다.
- {{jsxref("TypedArray.prototype.slice()")}}
  - : 배열의 부분을 추출하여 새 배열을 반환합니다. {{jsxref("Array.prototype.slice()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.some()")}}
  - : 이 배열의 하나 이상의 요소가 제공된 테스트 함수를 충족하는 경우, `true`를 반환합니다. {{jsxref("Array.prototype.some()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.sort()")}}
  - : 배열의 요소를 정렬하고 배열을 반환합니다. {{jsxref("Array.prototype.sort()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.subarray()")}}
  - : 주어진 시작 인덱스에서 끝 인덱스 까지의 요소로 만든 새로운 `TypedArray`를 반환합니다.
- {{jsxref("TypedArray.prototype.values()")}}
  - : 배열의 각 인덱스에 대한 값을 포함하는 새 **배열 반복기** 객체를 반환합니다.{{jsxref("Array.prototype.values()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.toLocaleString()")}}
  - : 배열 및 해당 요소를 나타내는 지역화된 문자열을 반환합니다. {{jsxref("Array.prototype.toLocaleString()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.toString()")}}
  - : 배열과 해당 요소를 나타내는 문자열을 반환합니다. {{jsxref("Array.prototype.toString()")}}도 참조하시기 바랍니다.
- {{jsxref("TypedArray.prototype.@@iterator()",
    "TypedArray.prototype[@@iterator]()")}}
  - : 배열의 각 인덱스에 대한 값을 포함하는 새 **배열 반복기** 객체를 반환합니다.

## 예제

## 속성 접근

표준 배열 인덱스 구문(즉, 대괄호 표기법 사용)을 사용하여 배열의 요소를 참조할 수 있습니다.
그러나 형식화 배열에서는 인덱스된 속성을 가져오거나 설정하면 인덱스가 범위를 벗어난 경우에도 프로토타입 체인에서 이 속성을 검색하지 않습니다.
인덱싱된 속성은 {{jsxref("ArrayBuffer")}} 참조하고 객체 속성을 절대 확인하지 않습니다.
모든 객체와 마찬가지로 이름을 지정한 속성은 계속 사용할 수 있습니다.

```js
// 표준 배열 구문을 사용하여 설정 및 가져오기
const int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// 프로토타입의 인덱싱된 속성이 참조되지 않음 (Fx 25)
Int8Array.prototype[20] = "foo";
new Int8Array(32)[20]; // 0
// 범위를 벗어나더라도
Int8Array.prototype[20] = "foo";
new Int8Array(8)[20]; // undefined
// 또는 음수를 사용하더라도
Int8Array.prototype[-1] = "foo";
new Int8Array(8)[-1]; // undefined

// 그래도 이름을 지정한 속성은 허용됨 (Fx 30)
Int8Array.prototype.foo = "bar";
new Int8Array(32).foo; // "bar"
```

### 고정될 수 없음

비어 있지 않은 `TypedArray`는 고정될 수 없습니다. 기본 `ArrayBuffer`가 버퍼의 다른 `TypedArray` 보기를 통해 변경될 수 있기 때문입니다. 이것은 객체가 고정되지 않을것 임을 의미합니다.

```js example-bad
const i8 = Int8Array.of(1, 2, 3);
Object.freeze(i8);
// TypeError: Cannot freeze array buffer views with elements
```

### ByteOffset는 반드시 정렬되어야 합니다

`TypedArray`를 `ArrayBuffer`에 대한 보기로 구성할 때 `byteOffset` 인수는 요소 크기에 맞춰 정렬되어야 합니다. 즉, 오프셋은 B`YTES_PER_ELEMENT`의 배수여야 합니다.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(4), 1);
// RangeError: start offset of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4), 0);
```

### ByteLength는 반드시 정렬되어야 합니다

`byteOffset` 매개변수와 마찬가지로 `TypedArray`의 생성자에 전달된 `ArrayBuffer`의 `byteLength` 속성은 생성자의 `BYTES_PER_ELEMENT`의 배수여야 합니다.

```js example-bad
const i32 = new Int32Array(new ArrayBuffer(3));
// RangeError: byte length of Int32Array should be a multiple of 4
```

```js example-good
const i32 = new Int32Array(new ArrayBuffer(4));
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of typed arrays in `core-js`](https://github.com/zloirock/core-js#ecmascript-typed-arrays)
- [JavaScript 형식화 배열](/ko/docs/Web/JavaScript/Typed_arrays)
- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [TextDecoder](/ko/docs/Web/API/TextDecoder) — 숫자 데이터에서 문자열을 디코딩하는 헬퍼
