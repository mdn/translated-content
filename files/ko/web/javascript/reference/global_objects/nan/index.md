---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
tags:
  - JavaScript
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/NaN
---
{{jsSidebar("Objects")}}

전역 **`NaN`** 속성은 Not-A-Number(숫자가 아님)를 나타냅니다.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## 설명

`NaN`은 전역 객체의 속성입니다. 즉 전역 스코프의 변수입니다.

`NaN`의 초기값은 Not-A-Number(숫자가 아님)로, {{jsxref("Number.NaN")}}의 값과 같습니다. 최신 브라우저에서 `NaN`은 설정 불가, 쓰기 불가 속성입니다. 그렇지 않다고 하더라도 덮어쓰는건 피하는게 좋습니다.

`NaN`을 반환하는 연산에는 다섯 가지 종류가 있습니다.

- 숫자로서 읽을 수 없음 (`parseInt("어쩌구")`, `Number(undefined)`)
- 결과가 허수인 수학 계산식 (`Math.sqrt(-1)`)
- 피연산자가 `NaN` (`7 ** NaN`)
- 정의할 수 없는 계산식 (`0 * Infinity`)
- 문자열을 포함하면서 덧셈이 아닌 계산식 (`"가" / 3`)

## 예제

### `NaN` 판별

`NaN`은 다른 모든 값과 비교(`==`, `!=`, `===`, `!==`)했을 때 같지 않으며, 다른 NaN과도 같지 않습니다. NaN의 판별은 {{jsxref("Number.isNaN()")}} 또는 {{jsxref("Global_Objects/isNaN", "isNaN()")}}을 사용하면 제일 분명하게 수행할 수 있습니다. 아니면, 오로지 NaN만이 자기자신과 비교했을 때 같지 않음을 이용할 수도 있습니다.

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

그러나 `isNaN()`과 `Number.isNaN()`의 차이를 주의해야 합니다. `isNaN`은 현재 값이 `NaN`이거나, 숫자로 변환했을 때 `NaN`이 되면 참을 반환하지만, `Number.isNaN`은 현재 값이 `NaN`이어야만 참을 반환합니다.

```js
isNaN('hello world'); // true
Number.isNaN('hello world'); // false
```

덧붙여서, 일부 배열 메서드는 NaN을 찾을 수 없습니다.

```js
let arr = [2, 4, NaN, 12];
arr.indexOf(NaN);                      // -1 (false)
arr.includes(NaN);                     // true
arr.findIndex(n => Number.isNaN(n));   // 2
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
