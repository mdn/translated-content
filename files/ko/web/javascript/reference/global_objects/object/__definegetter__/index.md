---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
---

{{JSRef}}

> **경고:** 이 기능은 object initializer 문법 혹은 {{jsxref("Object.defineProperty()")}} API를 사용한 getter 정의가 표준화됨으로써 비표준화되었습니다.
> 이 기능은 이제까지의 ECMAScript 사양에서만 사용되고 있습니다.
> 보다 좋은 방법이 있으므로, 이 메소드는 사용하지 말아야합니다.

**`__defineGetter__`** 메소드는 오브젝트의 프로퍼티와 함수를 바인드합니다.
프로퍼티의 값이 조회될 때 바인드된 함수가 호출됩니다.

## 문법

```js
obj.__defineGetter__(prop, func);
```

### 인자

- `prop`
  - : 함수와 바인드된 프로퍼티의 이름을 나타내는 문자열
- `func`
  - : 프로퍼티 값이 조회되었을 때 호출되는 함수

### 리턴 값

{{jsxref("undefined")}}.

## Description

`__defineGetter__` 를 사용하여 기존 오브젝트의 {{jsxref("Operators/get", "getter", "", 1)}}를 사용할 수 있습니다.

## Examples

```js
// Non-standard and deprecated way

var o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5

// Standard-compliant ways

// Using the get operator
var o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5

// Using Object.defineProperty
var o = {};
Object.defineProperty(o, "gimmeFive", {
  get: function () {
    return 5;
  },
});
console.log(o.gimmeFive); // 5
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Operators/get", "get")}} operator
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS Guide: Defining Getters and Setters](/ko/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [\[Blog Post\] Deprecation of \_\_defineGetter\_\_ and \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- [Firefox bug 647423](https://bugzil.la/647423)
