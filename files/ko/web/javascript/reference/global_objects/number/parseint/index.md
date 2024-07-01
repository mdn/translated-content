---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
---

{{JSRef}}

**`Number.parseInt()`** 메서드는 문자열 인자를 파싱하여 특정 진수(수의 진법 체계에서 기준이 되는 값)의 정수를 반환합니다.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## 구문

```js
Number.parseInt(string);
Number.parseInt(string, radix);
```

### 매개변수

- `string`
  - : 파싱할 값입니다. 문자열이 아닐 경우 [`ToString`](https://tc39.es/ecma262/#sec-tostring) 추상 연산을 사용해 문자열로 변환합니다. 문자열의 선행 공백은 무시합니다.
- `radix` {{optional_inline}}

  - : `string`의 진수를 나타내는 `2`부터 `36`까지의 정수입니다.

    `radix`를 생략하거나 `0`을 지정한 경우, `string`이 `0x` 또는 `0X`로 시작하는 경우 `16`을 지정한 것으로 취급하고, 그 외의 경우 `10`으로 취급합니다.

### 반환 값

주어진 `string`에서 파싱한 정수입니다.

다음과 같은 경우에는 {{jsxref("NaN")}}을 반환합니다.

- `radix`가 2보다 작거나 36보다 큰 경우.
- 공백이 아닌 첫 문자를 숫자로 변환할 수 없는 경우.

## 설명

### Number.parseInt vs parseInt

`Number.parseInt()`는 전역 {{jsxref("parseInt", "parseInt()")}} 함수와 같은 기능을 가지고 있습니다.

```js
Number.parseInt === parseInt; // true
```

`Number.parseInt()`는 ECMAScript 2015에서 전역 객체의 모듈화를 위해 추가됐습니다. 상세한 정보와 예제는 {{jsxref("parseInt", "parseInt()")}}를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [`Number.parseInt` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- 이 메서드가 속한 {{jsxref("Number")}} 객체
- 전역 {{jsxref("parseInt", "parseInt()")}} 메서드
