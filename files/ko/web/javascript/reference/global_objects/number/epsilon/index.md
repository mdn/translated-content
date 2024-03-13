---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---

{{JSRef}}

**`Number.EPSILON`** 속성(property)은 {{jsxref("Number")}} 형으로 표현될 수 있는 1과 1보다 큰 값 중에서 가장 작은 값의, 차입니다.

당신은 이 정적 속성에 접근하기 위하여 {{jsxref("Number")}} 객체를 생성할 필요가 없습니다. `Number.EPSILON`을 쓰면 됩니다.

{{js_property_attributes(0, 0, 0)}}

## 설명

이 `EPSILON` 속성은 대략 `2.2204460492503130808472633361816E-16` 또는 `2^-52`의 값을 갖습니다.

## 예제

### 동일성 확인하기

```js
const x = 0.2,
  y = 0.3,
  z = 0.1;
let equal = Math.abs(x - y + z) < Number.EPSILON;
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 관련된 문서

- 이 속성을 가지고 있는 {{jsxref("Number")}} 객체
