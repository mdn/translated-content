---
title: Array.isArray()
short-title: isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
l10n:
  sourceCommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{JSRef}}

**`Array.isArray()`** 정적 메서드는 전달된 값이 {{jsxref("Array")}}인지 판단합니다.

{{InteractiveExample("JavaScript Demo: Array.isArray()")}}

```js interactive-example
console.log(Array.isArray([1, 3, 5]));
// Expected output: true

console.log(Array.isArray("[]"));
// Expected output: false

console.log(Array.isArray(new Array(5)));
// Expected output: true

console.log(Array.isArray(new Int16Array([15, 33])));
// Expected output: false
```

## 구문

```js-nolint
Array.isArray(value)
```

### 매개변수

- `value`
  - : 확인할 값입니다.

### 반환 값

`value`가 {{jsxref("Array")}} 이면 `true`, 그렇지 않으면 `false`를 반환합니다. `value`가 {{jsxref("TypedArray")}} 인스턴스라면 항상 `false`가 반환됩니다.

## 설명

`Array.isArray()`는 전달된 값이 {{jsxref("Array")}}인지 확인합니다. 값의 프로토타입 체인을 확인하지 않으며, 값이 연결된 `Array` 생성자에도 의존하지 않습니다. 배열 리터럴 구문이나 `Array` 생성자를 사용하여 생성된 모든 값에 대해 `true`를 반환합니다. 따라서 `Array` 생성자의 신원이 달라 [`instanceof Array`](/ko/docs/Web/JavaScript/Reference/Operators/instanceof)가 실패할 수 있는 교차 영역 객체와 함께 사용하는 것이 안전합니다.

자세한 내용은 ["Determining with absolute accuracy whether or not a JavaScript object is an array"(JavaScript 객체가 배열인지 여부를 절대적인 정확도로 확인하기)](https://web.mit.edu/jwalden/www/isArray.html) 글을 참조하세요.

또한 `Array.isArray()`는 프로토타입 체인에 `Array.prototype`이 있지만 실제 배열이 아닌 객체를 거부합니다. `instanceof Array`는 이를 허용합니다.

## 예제

### Array.isArray() 사용하기

```js
// 아래 모든 호출은 true를 반환합니다.
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c", "d"));
Array.isArray(new Array(3));
// 거의 알려지지 않은 사실: Array.prototype 자체도 배열입니다.
Array.isArray(Array.prototype);

// 아래 모든 호출은 false를 반환합니다.
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
// 배열 리터럴 구문이나 Array 생성자로 만들어지지 않았기 때문에 배열이 아닙니다.
Array.isArray({ __proto__: Array.prototype });
```

### instanceof 대 Array.isArray()

`Array` 인스턴스를 확인할 때 `Array.isArray()`는 교차 영역에서 작동하기 때문에 `instanceof`보다 선호됩니다.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xArray = window.frames[window.frames.length - 1].Array;
const arr = new xArray(1, 2, 3); // [1, 2, 3]

// 올바른 Array 확인 방법
Array.isArray(arr); // true
// arr의 프로토타입은 Array.prototype와 다른 객체인 xArray.prototype입니다.
arr instanceof Array; // false
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.isArray` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
