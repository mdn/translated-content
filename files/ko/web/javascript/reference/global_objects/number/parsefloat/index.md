---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
---

{{JSRef}}

**`Number.parseFloat()`** 메서드는 주어진 값을 필요한 경우 문자열로 변환한 후 부동소수점 실수로 파싱해 반환합니다. 숫자를 파싱할 수 없는 경우 {{jsxref("NaN")}}을 반환합니다.

{{EmbedInteractiveExample("pages/js/number-parsefloat.html")}}

## 구문

```js
Number.parseFloat(string);
```

### 매개변수

- `string`
  - : 파싱할 값입니다. 문자열이 아닐 경우 [`ToString`](https://tc39.es/ecma262/#sec-tostring) 추상 연산을 사용해 문자열로 변환합니다. 문자열의 선행 {{glossary("whitespace", "공백")}}은 무시합니다.

### 반환 값

주어진 문자열에서 파싱한 부동소수점 실수입니다.

공백이 아닌 첫 글자를 숫자로 변환할 수 없는 경우 {{jsxref("NaN")}}을 반환합니다.

## 설명

### Number.parseFloat vs parseFloat

`Number.parseFloat()`은 전역 {{jsxref("parseFloat", "parseFloat()")}} 함수와 같은 기능을 가지고 있습니다.

```js
Number.parseFloat === parseFloat; // true
```

`Number.parseFloat()`은 ECMAScript 2015에서 전역 객체의 모듈화를 위해 추가됐습니다. 상세한 정보와 예제는 {{jsxref("parseFloat", "parseFloat()")}}를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- `core-js`의 [`Number.parseFloat` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- 이 메서드가 속한 {{jsxref("Number")}} 객체
- 전역 {{jsxref("parseFloat", "parseFloat()")}} 메서드
