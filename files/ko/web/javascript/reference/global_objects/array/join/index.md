---
title: Array.prototype.join()
slug: Web/JavaScript/Reference/Global_Objects/Array/join
---

{{JSRef}}

**`join()`** 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

{{EmbedInteractiveExample("pages/js/array-join.html")}}

## 구문

```js
arr.join([separator]);
```

### 매개변수

- `separator` {{optional_inline}}
  - : 배열의 각 요소를 구분할 문자열을 지정합니다. 이 구분자는 필요한 경우 문자열로 변환됩니다. 생략하면 배열의 요소들이 쉼표로 구분됩니다. `separator`가 빈 문자열이면 모든 요소들이 사이에 아무 문자도 없이 연결됩니다.

### 반환 값

배열의 모든 요소들을 연결한 하나의 문자열을 반환합니다. 만약 `arr.length` 가 `0`이라면, 빈 문자열을 반환합니다.

## 설명

모든 배열 요소가 문자열로 변환된 다음 하나의 문자열로 연결됩니다.

> **경고:** 요소가 `undefined` 또는 `null`이면 빈 문자열로 변환합니다.

## 예제

### 네 가지 다른 방법으로 배열 연결하기

다음 예제에서는 3개의 요소를 가진 배열 `a`를 만들고, 기본 구분자, 쉼표와 공백, 더하기 기호, 빈 문자열의 네 가지 구분자를 사용해 배열을 연결합니다.

```js
var a = ["바람", "비", "불"];
var myVar1 = a.join(); // myVar1에 '바람,비,불'을 대입
var myVar2 = a.join(", "); // myVar2에 '바람, 비, 불'을 대입
var myVar3 = a.join(" + "); // myVar3에 '바람 + 비 + 불'을 대입
var myVar4 = a.join(""); // myVar4에 '바람비불'을 대입
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.prototype.split()")}}
- {{jsxref("Array.prototype.toString()")}}
- {{jsxref("TypedArray.prototype.join()")}}
