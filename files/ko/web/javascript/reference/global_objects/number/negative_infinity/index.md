---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---

{{JSRef}}

**`Number.NEGATIVE_INFINITY`** 속성은 음의 무한대를 나타냅니다.

{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}{{js_property_attributes(0, 0, 0)}}

## 설명

`Number.NEGATIVE_INFINITY`의 값은 전역 객체 {{jsxref("Infinity")}} 속성의 부호를 바꾼 값과 동일합니다.

`NEGATIVE_INFINITY`는 수학에서의 무한대와 약간 다릅니다.

- {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}를 포함한 아무 양의 수와 `NEGATIVE_INFINITY`를 곱한 결과는 `NEGATIVE_INFINITY`입니다.
- `NEGATIVE_INFINITY`를 포함한 아무 음의 수와 `NEGATIVE_INFINITY`를 곱한 결과는 {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}입니다.
- 아무 양의 수를 `NEGATIVE_INFINITY`로 나눈 결과는 음의 부호를 가진 0입니다.
- 아무 음의 수를 `NEGATIVE_INFINITY`로 나눈 결과는 0입니다.
- 0을 `NEGATIVE_INFINITY`로 나눈 결과는 {{jsxref("NaN")}}입니다.
- {{jsxref("NaN")}}에 `NEGATIVE_INFINITY`를 곱한 결과는 {{jsxref("NaN")}}입니다.
- `NEGATIVE_INFINITY`를, `NEGATIVE_INFINITY`를 제외한 아무 음의 수로 나눈 결과는 {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}입니다.
- `NEGATIVE_INFINITY`를, {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}를 제외한 아무 양의 수로 나눈 결과는 `NEGATIVE_INFINITY`입니다.
- `NEGATIVE_INFINITY`를 `NEGATIVE_INFINITY` 또는 {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}로 나눈 결과는 {{jsxref("NaN")}}입니다.

`Number.NEGATIVE_INFINITY`를 사용해 성공 시 유한수를 반환하는 식의 결과를 판별할 수 있습니다. 그러나 이런 경우 {{jsxref("isFinite", "isFinite()")}}를 사용하는 편이 더 적합합니다.

`NEGATIVE_INFINITY`는 {{jsxref("Number")}}의 정적 속성이기 때문에, 직접 생성한 {{jsxref("Number")}} 객체의 속성이 아니라 `Number.NEGATIVE_INFINITY`의 형식으로 사용해야 합니다.

## 예제

### `NEGATIVE_INFINITY` 사용하기

다음 코드에서 `smallNumber`는 JavaScript의 최솟값보다 작은 값을 할당받습니다. {{jsxref("Statements/if...else", "if")}} 문이 실행되면, `smallNumber`의 값이 `-Infinity`이므로 `smallNumber`는 계산에 좀 더 적합한 값을 다시 할당합니다.

```js
var smallNumber = -Number.MAX_VALUE * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
