---
title: "RangeError: invalid array length"
slug: Web/JavaScript/Reference/Errors/Invalid_array_length
---

{{jsSidebar("Errors")}}

## 메세지

```
    RangeError: invalid array length (Firefox)
    RangeError: Invalid array length (Chrome)
    RangeError: Invalid array buffer length (Chrome)
```

## 에러 형식

{{jsxref("RangeError")}}

## 무엇이 잘못 된 것일까?

다음과 같은 원인 때문이다:

- 2^32와 같거나 이보다 긴, 혹은 음수의 길이를 가진 {{jsxref("Array")}}나 {{jsxref("ArrayBuffer")}}를 생성했기 때문에, 혹은
- {{jsxref("Array")}} 속성을 2^32와 같거나 이보다 긴 값으로 설정했기 때문이다.

`Array` 와 `ArrayBuffer` 의 길이에 제한을 둔 이유는, `Array` 나 `ArrayBuffer` 의 length 속성은 사인되지 않은(unsigned) 32 비트 정수로 반영되기 때문이다. 즉 `Array`나 `ArrayBuffer` 는 오직 0 ~`2^32-1` 사이의 값만을 저장할 수 있다.

Array의 length로 해석되는 첫번째 argument로서 문자열 표기를 통해 contructor를 사용하여 Array를 생성할 수 있다.

다른 방법으로는, length 속성을 설정하기 전에 length의 길이에 제한을 두거나, constructor의 aurgment로서 사용할 수 있다.

## 예제

### 잘못된 예제

```js example-bad
new Array(Math.pow(2, 40));
new Array(-1);
new ArrayBuffer(Math.pow(2, 32));
new ArrayBuffer(-1);

let a = [];
a.length = a.length - 1; // set -1 to the length property

let b = new Array(Math.pow(2, 32) - 1);
b.length = b.length + 1; // set 2^32 to the length property
```

### 올바른 예제

```js example-good
[Math.pow(2, 40)]; // [ 1099511627776 ]
[-1]; // [ -1 ]
new ArrayBuffer(Math.pow(2, 32) - 1);
new ArrayBuffer(0);

let a = [];
a.length = Math.max(0, a.length - 1);

let b = new Array(Math.pow(2, 32) - 1);
b.length = Math.min(0xffffffff, b.length + 1);

// 0xffffffff is the hexadecimal notation for 2^32 - 1
// which can also be written as (-1 >>> 0)
```

## 참조

- {{jsxref("Array")}}
- {{jsxref("Array.length")}}
- {{jsxref("ArrayBuffer")}}
