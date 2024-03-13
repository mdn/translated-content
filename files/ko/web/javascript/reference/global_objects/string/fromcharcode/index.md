---
title: String.fromCharCode()
slug: Web/JavaScript/Reference/Global_Objects/String/fromCharCode
---

{{JSRef}}

**`String.fromCharCode()`** 메서드는 UTF-16 코드 유닛의 시퀀스로부터 문자열을 생성해 반환합니다.

{{EmbedInteractiveExample("pages/js/string-fromcharcode.html")}}

## 구문

```js
String.fromCharCode(num1[, ...[, numN]])
```

### 매개변수

- `num1, ..., numN`
  - : UTF-16 코드 유닛인 숫자 뭉치. 가능한 값의 범위는 0부터 65535(0xFFFF)까지입니다. 0xFFFF를 초과하는 값은 잘립니다. 유효성 검사는 하지 않습니다.

### 반환 값

주어진 UTF-16 코드 유닛 N개로 이루어진 문자열.

## 설명

이 메서드는 {{jsxref("String")}} 객체가 아닌 문자열을 반환합니다.

`fromCharCode()`는 {{jsxref("String")}}의 정적 메서드이기 때문에 `String.fromCharCode()`로 사용해야 합니다.

## 예제

### `fromCharCode()` 사용하기

다음 예제는 문자열 `"ABC"`를 반환합니다..

```js
String.fromCharCode(65, 66, 67); // "ABC"
String.fromCharCode(0x2014); // "—"
String.fromCharCode(0x12014); // 숫자 '1'은 무시해서 "—"
```

## 더 큰 값과 사용하기

초기 JavaScript 표준화 과정에서 예상했던 것처럼, 대부분의 흔한 유니코드 값을 16비트 숫자로 표현할 수 있고, `fromCharCode()`가 많은 흔한 값에서 하나의 문자를 반환할 수 있지만, **모든** 유효한 유니코드 값(최대 21비트)을 처리하려면 `fromCharCode()`만으로는 부족합니다. 높은 코드 포인트의 문자는 써로게이트 값 두 개를 합쳐 하나의 문자를 표현하므로,{{jsxref("String.fromCodePoint()")}}(ES2015 표준) 메서드는 그러한 쌍을 높은 값의 문자로 변환할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
