---
title: Array.prototype.keys()
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

{{jsxref("Array")}} 인스턴스의 **`keys()`** 메서드는 배열의 각 인덱스에 대한 키를 포함하는 새로운 [배열 반복자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator) 객체를 반환합니다.

{{InteractiveExample("JavaScript Demo: Array.prototype.keys()")}}

```js interactive-example
const array1 = ["a", "b", "c"];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}

// Expected output: 0
// Expected output: 1
// Expected output: 2
```

## 구문

```js-nolint
keys()
```

### 매개변수

없음.

### 반환 값

새로운 [순회 가능 반복자 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Iterator)

## 설명

[희소 배열](/ko/docs/Web/JavaScript/Guide/Indexed_collections#희소_배열)에 사용되는 경우, `keys()` 메서드는 빈 슬롯의 값이 `undefined`인 것처럼 반복합니다.

`key()` 메서드는 [범용 메서드](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array#범용_배열_메서드)입니다. 본 메서드는 `this` 값에 `length` 속성과 정수 키 속성만을 기대합니다.

## 예제

### 희소 배열에 keys() 사용하기

배열에 실제로 존재하는 키만 포함하는 {{jsxref("Object.keys()")}}와 달리, `keys()` 반복자는 누락된 속성을 나타내는 빈 공간을 무시하지 않습니다.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### 배열이 아닌 객체에 keys() 호출하기

`keys()` 메서드는 `this`의 `length` 속성을 읽은 다음, 0과 `length - 1` 사이의 모든 정수 인덱스를 산출합니다. 실제 인덱스 접근은 발생하지 않습니다.

```js
const arrayLike = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(arrayLike)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Array.prototype.keys` 폴리필](https://github.com/zloirock/core-js#ecmascript-array)
- [인덱스 기반 컬렉션](/ko/docs/Web/JavaScript/Guide/Indexed_collections) 안내서
- {{jsxref("Array")}}
- {{jsxref("Array.prototype.entries()")}}
- {{jsxref("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- {{jsxref("TypedArray.prototype.keys()")}}
- [순회 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
