---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
---

{{jsSidebar("Objects")}}

**`Infinity`** 전역 속성은 무한대를 나타내는 숫자 값입니다.

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## 값

{{jsxref("Number.POSITIVE_INFINITY")}}와 동일한 숫자 값입니다.

{{js_property_attributes(0, 0, 0)}}

## 설명

`Infinity`는 전역 객체의 속성입니다. 즉, 전역 범위의 변수입니다.

`Infinity`(양의 무한대)는 다른 어떤 수보다 더 큽니다. 수학적인 무한대와는 일부 차이점이 있습니다. {{jsxref("Number.POSITIVE_INFINITY")}} 문서에서 더 알아보세요.

## 예제

### Infinity 사용하기

```js
console.log(Infinity); /* Infinity */
console.log(Infinity + 1); /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0)); /* -Infinity */
console.log(1 / Infinity); /* 0 */
console.log(1 / 0); /* Infinity */
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
