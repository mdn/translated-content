---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
l10n:
  sourceCommit: fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> 이 기능은 {{jsxref("Object.getOwnPropertyDescriptor()")}} API 사용을 선호하기 때문에 더 이상 사용되지 않습니다. 이 메서드의 동작은 웹 호환성을 위해서만 명시되며 모든 플랫폼에서 구현할 필요는 없습니다. 모든 곳에서 작동하지 않을 수도 있습니다.

{{jsxref("Object")}} 인스턴스의 **`__lookupGetter__()`** 메서드는 지정된 속성에 접근자로 바인딩된 함수를 반환합니다.

## 구문

```js-nolint
__lookupGetter__(prop)
```

### 매개변수

- `prop`
  - : 접근자가 반환해야 하는 속성의 이름이 담긴 문자열

### 반환 값

지정된 속성에 접근자로 바인딩된 함수입니다. 해당 속성을 찾을 수 없거나 속성이 [데이터 속성](/ko/docs/Web/JavaScript/Data_structures#data_property)인 경우 `undefined`를 반환합니다.

## 설명

`Object.prototype`을 상속한 모든 객체(즉, [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)를 제외한 모든 객체)는 `__lookupGetter__()`를 상속합니다. 만약 [접근자](/ko/docs/Web/JavaScript/Reference/Functions/get)가 객체의 속성으로 정의되었다면 해당 속성은 해당 함수의 반환값을 참조하므로 해당 속성을 통해 접근자 함수를 참조할 수 없습니다. `__lookupGetter__()`를 사용하여 접근자 함수에 대한 참조를 얻을 수 있습니다.

`__lookupGetter__()`는 [프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)을 따라 올라가서 지정된 속성을 찾습니다. 프로토타입 체인에 있는 객체에 지정된 [자체 속성](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)이 있는 경우 해당 속성에 대한 [속성 설명자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)의 `get` 속성이 반환됩니다. 해당 속성이 데이터 속성인 경우 `undefined`이 반환됩니다. 전체 프로토타입 체인에서 해당 속성을 찾을 수 없는 경우 역시 `undefined`이 반환됩니다.

`lookupGetter__()`는 명세에서 "권장 선택 사항"으로 정의되어 있으므로 구현체는 이를 구현할 필요는 없습니다. 그러나 모든 주요 브라우저에서 구현하고 있으며, 계속 사용되고 있기 때문에 제거될 가능성은 낮습니다. 브라우저가 `__lookupGetter__()`를 구현하는 경우 [`__lookupSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__), [`__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), 그리고 [`__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) 메서드도 구현해야 합니다.

## 예제

### \_\_lookupGetter\_\_() 사용하기

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

obj.__lookupGetter__("foo");
// [Function: get foo]
```

### 표준 방식으로 속성의 접근자 조회하기

{{jsxref("Object.getOwnPropertyDescriptor()")}} API를 사용하여 속성의 접근자를 조회해야 합니다. 이 메서드는 `__lookupGetter__()`와 비교하여 [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 속성을 조회할 수 있습니다. `Object.getOwnPropertyDescriptor()` 메서드는 `Object.prototype`에서 상속하지 않으므로 `__lookupGetter__()` 메서드가 없는 [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)에도 작동합니다. `__lookupGetter__()`가 프로토타입 체인을 거슬러 올라가는 동작이 중요한 경우 {{jsxref("Object.getPrototypeOf()")}}를 사용하여 직접 구현할 수 있습니다.

```js
const obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").get;
// [Function: get foo]
```

```js
const obj2 = {
  __proto__: {
    get foo() {
      return Math.random() > 0.5 ? "foo" : "bar";
    },
  },
};

function findGetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.get;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findGetter(obj2, "foo")); // [Function: get foo]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Object.prototype.__lookupGetter__` 폴리필](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS 가이드: 접근자와 설정자 정의하기](/ko/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters)
