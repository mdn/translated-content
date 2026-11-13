---
title: Array.prototype.toString()
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toString
l10n:
  sourceCommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`toString()`** 메서드는
지정된 배열 및 그 요소를 나타내는 문자열을 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.toString()", "shorter")}}

```js interactive-example
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString());
// Expected output: "1,2,a,1a"
```

## 구문

```js-nolint
toString()
```

### 매개변수

없음.

### 반환 값

배열을 표현하는 문자열을 반환합니다.

## 설명

{{jsxref("Array")}} 객체는 {{jsxref("Object")}}의 `toString` 메서드를 재정의합니다. 배열의 `toString` 메서드는 내부적으로 [`join()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join)을 호출하여 배열을 조인하고 쉼표로 구분된 각 배열 요소를 포함하는 하나의 문자열을 반환합니다. `join` 메서드를 사용할 수 없거나 함수가 아닌 경우, [`Object.prototype.toString`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)이 대신 사용되며 `[object Array]`를 반환합니다.

```js
const arr = [];
arr.join = 1; // `join`에 비함수 재할당
console.log(arr.toString()); // [object Array]

console.log(Array.prototype.toString.call({ join: () => 1 })); // 1
```

배열이 텍스트 값으로 표현되거나 문자열 연결에서 배열을 참고할 때, JavaScript는 `toString` 메서드를 자동으로 호출합니다.

`Array.prototype.toString`은 다른 배열을 포함한 각 요소를 재귀적으로 문자열로 변환합니다. `Array.prototype.toString`이 반환하는 문자열에는 구분 기호가 없으므로 중첩 배열은 중첩이 풀려서 보입니다.

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix.toString()); // 1,2,3,4,5,6,7,8,9
```

배열이 그 자신이 요소의 하나가 되는 순환이 발생할 경우 브라우저는 순환 참조를 무시하여 무한 재귀 참조를 방지합니다.

```js
const arr = [];
arr.push(1, [3, arr, 4], 2);
console.log(arr.toString()); // 1,3,,4,2
```

## 예제

### toString() 사용하기

```js
const array1 = [1, 2, "a", "1a"];

console.log(array1.toString()); // "1,2,a,1a"
```

### 희소 배열에서 toString() 사용하기

아래 `join()`의 행위처럼 `toString()`은 빈 슬롯을 `undefined`와 동일하게 취급하며, 추가적인 분리자를 만듭니다.

```js
console.log([1, , 3].toString()); // '1,,3'
```

### 배열이 아닌 객체에서 toString() 호출하기

`toString()`은 [범용적](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. 이 메서드는 `this`가 `join()` 메서드를 가지기를 기대합니다. 그렇지 않다면, `Object.prototype.toString()`을 대신 사용합니다.

```js
console.log(Array.prototype.toString.call({ join: () => 1 }));
// 1; 숫자 타입
console.log(Array.prototype.toString.call({ join: () => undefined }));
// undefined
console.log(Array.prototype.toString.call({ join: "not function" }));
// "[object Object]"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 가이드
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.join()")}}
- {{jsxref("Array.prototype.toLocaleString()")}}
- {{jsxref("TypedArray.prototype.toString()")}}
- {{jsxref("String.prototype.toString()")}}
