---
title: Math.exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
translation_of: Web/JavaScript/Reference/Global_Objects/Math/exp
---
{{JSRef}}

**`Math.exp()`**함수는 `x`를 인수로 하는 `e^x` 값을 반환합니다. 그리고 `e`는 {{jsxref("Math.E", "오일러 상수(또는 네이피어 상수)", "", 1)}}는 자연 로그의 밑입니다.

{{EmbedInteractiveExample("pages/js/math-exp.html")}}

## 구문

```js
    Math.exp(x)
```

### 매개변수

- `x`
  - : 숫자

### 반환 값

`e`는 {{jsxref("Math.E", "오일러 상수", "", 1)}}이고 `x`는 인수인 `e^x`값

## Description

`exp()`는 `Math`의 정적 메소드이기 때문에 새로 작성한 `Math` 오브젝트 대신에 항상 `Math.exp()`의 형태로 써야 합니다. (`Math`는 생성자가 아닙니다.)

## 예시

### `Math.exp()` 사용 예

```js
Math.exp(-1); // 0.36787944117144233
Math.exp(0);  // 1
Math.exp(1);  // 2.718281828459045
```

## 설명

| 설명                                                                 | 상태                         | 비고                                      |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | 최초의 정의. JavaScript 1.0.에서 첫 시행. |
| {{SpecName('ES5.1', '#sec-15.8.2.8', 'Math.exp')}} | {{Spec2('ES5.1')}}     |                                           |
| {{SpecName('ES6', '#sec-math.exp', 'Math.exp')}}     | {{Spec2('ES6')}}         |                                           |
| {{SpecName('ESDraft', '#sec-math.exp', 'Math.exp')}} | {{Spec2('ESDraft')}} |                                           |

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Math.E")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log1p()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
