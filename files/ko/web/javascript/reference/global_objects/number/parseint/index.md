---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

**`Number.parseInt()`** 정적 메서드는 문자열 인자를 구문 분석하여 지정된 진법 또는 기수의 정수를 반환합니다.

{{InteractiveExample("JavaScript Demo: Number.parseInt()", "taller")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500

console.log(roughScale("321", 2));
// Expected output: 0
```

## 구문

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### 매개변수

- `string`
  - : 파싱할 값으로, [문자열로 강제 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion)됩니다. 이 인자의 앞 부분 공백은 무시됩니다.
- `radix` {{optional_inline}}
  - : `2`에서 `36` 사이의 정수로,
    `string`의 진법(수학적 숫자 체계의 기수)을
    나타냅니다.

    `radix`가 정의되지 않았거나 `0`이면 `10`으로 가정됩니다. 단, 숫자가 `0x` 또는 `0X` 코드 단위 쌍으로 시작하는 경우 16진법으로 가정합니다.

### 반환 값

주어진 `string`에서 구문 분석된 정수를 반환합니다.

`radix`가 `2`보다 작거나 `36`보다 크거나,
첫 번째 비공백 문자를 숫자로 변환할 수 없는 경우
{{jsxref("NaN")}}이 반환됩니다.

## 예제

### Number.parseInt vs. parseInt

이 메서드는 전역 {{jsxref("parseInt()")}} 함수와 동일한 기능을 가집니다.

```js
Number.parseInt === parseInt; // true
```

이 메서드의 목적은 전역 함수의 모듈화입니다.
더 자세한 설명과 예제는 {{jsxref("parseInt()")}}를 참고하세요.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Number.parseInt` 폴리필](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
