---
title: arguments[@@iterator]()
slug: Web/JavaScript/Reference/Functions/arguments/@@iterator
---

{{jsSidebar("Functions")}}

**`@@iterator`** 속성의 초기값은 {{jsxref("Array.prototype.values")}} 속성의 초기값과 같은 함수 객체입니다.

## 구문

```
arguments[Symbol.iterator]()
```

## 예제

### `for...of` 반복문을 사용한 반복

```js
function f() {
  // 브라우저가 for...of 반복문과
  // for 반복문 안의 let 범위의 변수를 지원해야 합니다.
  for (let letter of arguments) {
    console.log(letter);
  }
}
f("w", "y", "k", "o", "p");
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array.prototype.values()")}}
