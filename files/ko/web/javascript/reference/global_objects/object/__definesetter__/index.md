---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
l10n:
  sourceCommit: fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{JSRef}}{{Deprecated_Header}}

> [!NOTE]
> 이 기능은 [객체 초기자 구문](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) 또는 {{jsxref("Object.defineProperty()")}} API를 사용하여 [설정자](/ko/docs/Web/JavaScript/Reference/Functions/set) 정의하는 것을 권장하기 때문에 이 기능은 더 이상 사용되지 않습니다. 이 메서드의 동작은 웹 호환성을 위해서만 명시되며 모든 플랫폼에서 구현할 필요는 없습니다.모든 환경에서 작동하지 않을 수도 있습니다.

{{jsxref("Object")}} 인스턴스의 **`__defineSetter__()`** 메서드는 해당 속성을 설정하려고 시도할 때 호출될 함수에 객체의 속성을 바인딩합니다.

## 구문

```js-nolint
__defineSetter__(prop, func)
```

### 매개변수

- `prop`
  - : 설정자 `func`가 바인딩된 속성의 이름이 포함된 문자열입니다.
- `func`
  - : 지정된 속성을 설정하려고 할 때 호출되는 함수입니다. 이 함수는 다음 매개변수를 받습니다.
    - `val`
      - : `prop`에 할당하려고 한 값입니다.

### 반환 값

없음 ({{jsxref("undefined")}}).

### 예외

- {{jsxref("TypeError")}}
  - : `func`가 함수가 아닐 경우 발생합니다.

## 설명

`Object.prototype`에서 상속하는 모든 객체(즉, [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)를 제외한 모든 객체)는 `__defineSetter__()` 메서드를 상속합니다. 이 메서드를 사용하면 기존 객체에 [설정자](/ko/docs/Web/JavaScript/Reference/Functions/set)를 정의할 수 있습니다. 이는 [`Object.defineProperty(obj, prop, { set: func, configurable: true, enumerable: true })`]와 동일하며, 이는 속성이 열거 가능하고 구성 가능하며 기존 접근자가 있는 경우 보존됨을 의미합니다.

`__defineSetter__()`는 명세서에서 "권장 선택 사항"으로 정의되어 있으므로 반드시 구현할 필요가 없습니다. 그러나 모든 주요 브라우저에서 구현하고 있으며 계속 사용되고 있기 때문에 제거될 가능성은 낮습니다. 브라우저가 `__defineSetter__()`를 구현했다면, [`__lookupGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__lookupSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), [`__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) 구현이 필요합니다.

## 예제

### \_\_defineSetter\_\_() 사용하기

```js
const o = {};
o.__defineSetter__("value", function (val) {
  this.anotherValue = val;
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

### 표준 방식으로 설정자 속성 정의하기

객체가 처음 초기화될 때 `set` 구문을 사용하여 설정자를 정의할 수 있습니다.

```js
const o = {
  set value(val) {
    this.anotherValue = val;
  },
};
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

객체가 생성된 후 {{jsxref("Object.defineProperty()")}}를 사용하여 객체에 설정자를 정의할 수도 있습니다. 이 메서드는 `__defineSetter__()`와 비교하여 설정자의 열거 가능성과 구성 가능성을 제어할 수 있을 뿐만 아니라 [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 속성을 정의할 수 있습니다. `Object.defineProperty()` 메서드는 `Object.prototype`에서 상속되지 않으므로 `__defineSetter__()` 메서드가 없는 [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)에서도 작동합니다.

```js
const o = {};
Object.defineProperty(o, "value", {
  set(val) {
    this.anotherValue = val;
  },
  configurable: true,
  enumerable: true,
});
o.value = 5;
console.log(o.value); // undefined
console.log(o.anotherValue); // 5
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Object.prototype.__defineSetter__` 폴리필](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [JS 안내서: 접근자와 설정자 정의하기](/ko/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
- [Firefox bug 647423](https://bugzil.la/647423)
