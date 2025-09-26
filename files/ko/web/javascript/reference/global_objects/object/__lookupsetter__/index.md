---
title: Object.prototype.__lookupSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__
l10n:
  sourceCommit: fd326b574aadcd78924a5a223f15e289e45a7f1d
---

{{JSRef}} {{Deprecated_Header}}

> [!NOTE]
> 이 기능은 {{jsxref("Object.getOwnPropertyDescriptor()")}} API 사용을 선호하기 때문에 더 이상 사용되지 않습니다. 이 메서드의 동작은 웹 호환성을 위해서만 명시되며 모든 플랫폼에서 구현할 필요는 없습니다. 모든 곳에서 작동하지 않을 수도 있습니다.

{{jsxref("Object")}} 인스턴스의 **`__lookupSetter__()`** 메서드는 지정된 속성에 설정자로 바인딩된 함수를 반환합니다.

## 구문

```js-nolint
__lookupSetter__(prop)
```

### 매개변수

- `prop`
  - : 반환되어야 할 설정자 속성의 이름이 포함된 문자열.

### 반환 값

지정된 속성에 설정자로 바인딩된 함수를 반환합니다. 해당 속성을 찾을 수 없거나 해당 속성이 [데이터 속성](/ko/docs/Web/JavaScript/Guide/Data_structures#data_property)이면 `undefined`를 반환합니다.

## 설명

`Object.prototype`을 상속받는 모든 객체들(즉, [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)를 제외한 모든 객체)은 `__lookupSetter__()` 메서드를 상속받습니다. 객체의 속성에 대해 [설정자](/ko/docs/Web/JavaScript/Reference/Functions/get)가 정의되어 있다면, 해당 속성을 통해 설정자 함수를 직접 참조하는 것은 불가능합니다. 왜냐하면 그 속성은 값이 설정될 때만 함수를 호출하기 때문입니다. `__lookupSetter__()`는 설정자 함수에 대한 참조를 얻는 데 사용될 수 있습니다.

`__lookupSetter__()` 메서드는 [프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)을 따라 올라가며 지정된 속성을 찾습니다. 프로토타입 체인 상의 어떤 객체가 지정된 [고유 속성](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn)을 가지고 있다면, 해당 속성의 [속성 설명자](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor) 의 `set` 속성이 반환됩니다. 만약 그 속성이 데이터 속성이라면, `undefined`가 반환됩니다. 전체 프로토타입 체인을 따라 속성을 찾지 못한 경우에도 `undefined`가 반환됩니다.

`__lookupSetter__()` 메서드는 명세서에서 "규범적 선택사항(normative optional)"으로 정의되어 있습니다. 이는 모든 구현체가 이 메서드를 반드시 구현할 필요는 없다는 의미입니다. 그러나 모든 주요 브라우저들이 이를 구현하고 있으며, 지속적인 사용으로 인해 앞으로 제거될 가능성은 낮습니다. 만약 브라우저가 `__lookupSetter__()`를 구현한다면, [`__lookupGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), [`__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), 그리고 [`__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) 메서드도 함께 구현해야 합니다.

## 예제

### \_\_lookupSetter\_\_() 사용하기

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

obj.__lookupSetter__("foo");
// [Function: set foo]
```

### 표준 방법으로 속성의 설정자 검색하기

속성의 설정자를 찾을 때는 {{jsxref("Object.getOwnPropertyDescriptor()")}} API를 사용해야 합니다. `__lookupSetter__()`와 비교하자면, 이 메서드는 [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 속성도 찾을 수 있습니다. `Object.getOwnPropertyDescriptor()` 메서드는 또한 [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)에서도 작동합니다. 이러한 객체들은 `Object.prototype`을 상속받지 않아 `__lookupSetter__()` 메서드를 가지고 있지 않습니다. 만약 `__lookupSetter__()`의 프로토타입 체인을 따라 올라가는 동작이 중요하다면, {{jsxref("Object.getPrototypeOf()")}}를 사용하여 직접 구현할 수 있습니다.

```js
const obj = {
  set foo(value) {
    this.bar = value;
  },
};

Object.getOwnPropertyDescriptor(obj, "foo").set;
// [Function: set foo]
```

```js
const obj2 = {
  __proto__: {
    set foo(value) {
      this.bar = value;
    },
  },
};

function findSetter(obj, prop) {
  while (obj) {
    const desc = Object.getOwnPropertyDescriptor(obj, prop);
    if (desc) {
      return desc.set;
    }
    obj = Object.getPrototypeOf(obj);
  }
}

console.log(findSetter(obj2, "foo")); // [Function: set foo]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서의 `Object.prototype.__lookupSetter__` 폴리필](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.prototype.__lookupGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- {{jsxref("Functions/set", "set")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- [`Object.prototype.__defineGetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS 안내서: 접근자와 설정자 정의하기](/ko/docs/Web/JavaScript/Guide/Working_with_objects#접근자와_설정자_정의하기)
