---
title: Array.of()
slug: Web/JavaScript/Reference/Global_Objects/Array/of
---

{{JSRef}}

**`Array.of()`** 메서드는 인자의 수나 유형에 관계없이 가변 인자를 갖는 새 `Array` 인스턴스를 만듭니다.

`Array.of()`와 `Array` 생성자의 차이는 정수형 인자의 처리 방법에 있습니다. `Array.of(7)`은 하나의 요소 `7`을 가진 배열을 생성하지만 `Array(7)`은 `length` 속성이 7인 빈 배열을 생성합니다.

```js
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]

Array(7); // [ , , , , , , ]
Array(1, 2, 3); // [1, 2, 3]
```

## 구문

```js
    Array.of(element0[, element1[, ...[, elementN]]])
```

### 매개변수

- `elementN`
  - : 배열을 생성할 때 사용할 요소.

### 반환 값

새로운 {{jsxref("Array")}} 객체.

## 설명

이 함수는 ECMAScript 2015 표준 일부입니다. 자세한 정보는 [`Array.of`, `Array.from` 제안 사항](https://gist.github.com/rwaldron/1074126)과 [`Array.of` 폴리필](https://gist.github.com/rwaldron/3186576)에서 확인하실 수 있습니다.

## 예제

```js
Array.of(1); // [1]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]
```

## 폴리필

아래 코드를 다른 코드 이전에 포함하면 `Array.of`를 지원하지 않는 환경에서도 사용할 수 있습니다.

```js
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Array")}}
- {{jsxref("Array.from()")}}
- {{jsxref("TypedArray.of()")}}
