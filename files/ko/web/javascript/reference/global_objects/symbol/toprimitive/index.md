---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{JSRef}}

**`Symbol.toPrimitive`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol#잘_알려진_심볼) `@@toPrimitive`를 나타냅니다.
모든 [타입 강제 변환](/ko/docs/Web/JavaScript/Data_structures#type_coercion) 알고리즘은 객체에서 이 심볼을 찾아서 선호하는 유형을 허용하고 객체의 원시 표현을 반환하는 메서드를 찾은 다음 객체의 `valueOf()` 및 `toString()` 메서드를 다시 사용합니다.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## 값

잘 알려진 심볼 `@@toPrimitive`.

{{js_property_attributes(0, 0, 0)}}

## 설명

함수 값으로 사용되는 `Symbol.toPrimitive` 속성의 도움으로 객체를 원시 값으로 변환할 수 있습니다.
함수는 결과로 나온 원시 값의 선호 유형을 지정하는 문자열 인수 `hint`와 함께 호출됩니다. `hint` 인수는 `"number"` `"string"`, `"default"`중 하나일 수 있습니다.

`"number"` 힌트는 [숫자 강제](/ko/docs/Web/JavaScript/Data_structures#numeric_coercion) 알고리즘에서 사용됩니다. `"string"` 힌트는 [문자열 강제](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) 알고리즘에서 사용됩니다. `"default"` 힌트는 [원시형 강제](/ko/docs/Web/JavaScript/Data_structures#primitive_coercion) 알고리즘에서 사용됩니다. `hint`는 [`Symbol.prototype[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)와 같이 선호 사항정도로만 작용하며, 구현은 이를 무시할 수 있습니다. 언어에서는 `hint`와 결과 유형 간의 정렬을 강제하지 않지만, `[@@toPrimitive]()`는 원시형을 반환해야 하며, 그렇지 않으면 {{jsxref("TypeError")}}가 발생합니다.

`@@toPrimitive` 속성이 없는 객체는 `valueOf()` 및 `toString()` 메서드를 다른 순서로 호출하여 원시형으로 변환되며, 이에 대한 자세한 설명은 [타입 강제](/ko/docs/Web/JavaScript/Data_structures#type_coercion) 섹션에서 확인할 수 있습니다.
`@@toPrimitive`를 사용하면 윈시형 변환 절차를 완전히 제어할 수 있습니다. 예를 들어, [`Date.prototype[@@toPrimitive]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive)는 `"default"`를 `"string"`으로 취급하여 `valueOf()` 대신 `toString()`을 호출합니다.
[`Symbol.prototype[@@toPrimitive]`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)는 힌트를 무시하고 항상 심볼을 반환하므로 문자열 컨텍스트에서도 {{jsxref("Symbol.prototype.toString()")}}이 호출되지 않으며, `Symbol` 객체는 항상 [`String()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/String)을 통해 명시적으로 문자열로 변환해야 합니다.

## 예제

### 객체에서 변환된 원시값 수정하기

다음 예제에서는 `Symbol.toPrimitive` 속성이 객체에서 변환된 원시값을 수정하는 방법을 설명합니다.

```js
// Symbol.toPrimitive 속성이 없는 객체.
const obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Symbol.toPrimitive 속성이 있는 객체.
const obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint === "number") {
      return 10;
    }
    if (hint === "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        — hint is "number"
console.log(`${obj2}`); // "hello"   — hint is "string"
console.log(obj2 + ""); // "true"    — hint is "default"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [Polyfill of `Symbol.toPrimitive` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- [`Date.prototype[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive)
- [`Symbol.prototype[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive)
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
