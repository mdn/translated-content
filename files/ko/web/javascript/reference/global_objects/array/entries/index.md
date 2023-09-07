---
title: Array.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/Array/entries
---

{{JSRef}}

**`entries()`** 메서드는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 **`Array Iterator`** 객체를 반환합니다.

{{EmbedInteractiveExample("pages/js/array-entries.html")}}

## 구문

```js
entries();
```

### 반환 값

{{jsxref("Array")}} 반복자 인스턴스 객체.

## 설명

sparse arrays와 사용하면 **`entries()`** 메서드가 빈 슬롯을 **`undefined`** 가 있는 것처럼 순회합니다.

## 예시

### 인덱스와 요소 순회하기

```js
const a = ["a", "b", "c"];

for (const [index, element] of a.entries()) {
  console.log(index, element);
}

// 0 'a'
// 1 'b'
// 2 'c'
```

### [for…of](/ko/docs/Web/JavaScript/Reference/Statements/for...of) 루프 사용

```js
const array = ["a", "b", "c"];
const arrayEntries = array.entries();

for (const element of arrayEntries) {
  console.log(element);
}

// [0, 'a']
// [1, 'b']
// [2, 'c']
```

### sparse arrays 순회하기

**`entires()`** 는 빈 슬롯을 `undefined`인 것처럼 접근합니다.

```js
for (const element of [, "a"].entries()) {
  console.log(element);
}
// [0, undefined]
// [1, 'a']
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.keys()")}}
- {{jsxref("Array.prototype.values()")}}
- {{jsxref("Array.prototype.forEach()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- [for...of](/ko/docs/Web/JavaScript/Reference/Statements/for...of)
- [Iteration protocols](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
