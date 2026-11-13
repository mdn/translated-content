---
title: Object.hasOwn()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwn
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{JSRef}}

명시된 객체에 자체 속성으로 지정된 속성이 있는 경우 **`Object.hasOwn()`** 정적 메서드는 `true`를 반환합니다. 속성이 상속되었거나 존재하지 않으면 이 메서드는 `false`를 반환합니다.

> [!NOTE]
> `Object.hasOwn()`은 {{jsxref("Object.prototype.hasOwnProperty()")}}를 대체하기 위한 것입니다.

{{InteractiveExample("JavaScript Demo: Object.hasOwn()")}}

```js interactive-example
const object1 = {
  prop: "exists",
};

console.log(Object.hasOwn(object1, "prop"));
// 예상 출력 값: true

console.log(Object.hasOwn(object1, "toString"));
// 예상 출력 값: false

console.log(Object.hasOwn(object1, "undeclaredPropertyValue"));
// 예상 출력 값: false
```

## 구문

```js-nolint
Object.hasOwn(obj, prop)
```

### 매개변수

- `obj`
  - : 평가할 JavaScript 객체 인스턴스
- `prop`
  - : {{jsxref("String")}} 이름 혹은 테스트할 속성의 [Symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol).

### 반환 값

지정된 객체가 직접 명시된 속성을 정의했다면 `true`. 그렇지 않으면 `false`

## 설명

명시된 속성이 값이 `null` 혹은 `undefined`일 경우일지라도 객체의 직접적인 속성인 경우 **`Object.hasOwn()`** 메서드는 `true`를 반환합니다. 속성이 상속되었거나 전혀 선언되지 않은 경우 이 메서드는 `false`를 반환합니다. {{jsxref("Operators/in", "in")}} 연산자와는 달리, 이 메서드는 객체의 프로토타입 체인에서 지정된 속성을 확인하지 않습니다.

이 메서드는 [`null` 프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) 및 상속된 `hasOwnProperty()` 메서드를 재정의한 객체에 대해 작동하므로 {{jsxref("Object.prototype.hasOwnProperty()")}}보다 권장됩니다. `Object.prototype.hasOwnProperty.call(obj, prop)`와 같은 외부 객체에서 `Object.prototype.hasOwnProperty()`를 호출하여 이러한 문제를 해결할 수 있지만, `Object.hasOwn()`을 사용하는 것이 더 직관적입니다.

## 예제

### 속성의 존재를 시험하기 위한 Object.hasOwn() 사용하기

다음 코드는 `example` 객체에 `prop`이라는 속성의 포함 여부를 확인하는 방법을 보여줍니다.

```js
const example = {};
Object.hasOwn(example, "prop"); // false - 'prop'이 정의되지 않았습니다

example.prop = "exists";
Object.hasOwn(example, "prop"); // true - 'prop' 이 정의되었습니다

example.prop = null;
Object.hasOwn(example, "prop"); // true - 자체 속성이 null 값으로 존재합니다

example.prop = undefined;
Object.hasOwn(example, "prop"); // true - 자체 속성이 undefined 값으로 존재합니다
```

### 직접 vs 상속된 속성

다음 예제에서는 직접적인 속성과 프로토타입 체인을 통해 상속된 속성을 구분합니다.

```js
const example = {};
example.prop = "exists";

// `hasOwn` 은 오직 직접적인 속성만 true를 반환합니다.
Object.hasOwn(example, "prop"); // true
Object.hasOwn(example, "toString"); // false
Object.hasOwn(example, "hasOwnProperty"); // false

// `in` 연산자는 직접적인 속성 혹은 상속된 속성이 있을 경우 true를 반환합니다.
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### 객체의 속성을 순회하기

객체의 열거 가능한 속성을 순회하기 위해서는 반드시 아래와 같이 사용해야 합니다.

```js
const example = { foo: true, bar: true };
for (const name of Object.keys(example)) {
  // …
}
```

그러나 `for...in`을 사용해야 하는 경우 `Object.hasOwn()`을 사용하여 상속된 속성을 건너뛸 수 있습니다.

```js
const example = { foo: true, bar: true };
for (const name in example) {
  if (Object.hasOwn(example, name)) {
    // …
  }
}
```

### 배열 인덱스의 존재여부 확인하기

{{jsxref("Array")}}의 요소는 직접적인 속성으로 정의되기 때문에 `hasOwn()` 메서드를 사용하여 특정 인덱스의 존재 여부를 확인할 수 있습니다.

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
Object.hasOwn(fruits, 3); // true ('Orange')
Object.hasOwn(fruits, 4); // false - 정의되지 않았습니다
```

### hasOwnProperty의 문제 사례

이 섹션에서는 `hasOwn()`이 `hasOwnProperty`에 영향을 미치는 문제에 영향을 받지 않는다는 것을 보여줍니다. 첫 번째로, `hasOwnProperty()`를 재구현한 객체와 함께 사용할 수 있습니다. 아래 예제에서 재구현된 `hasOwnProperty()` 메서드는 모든 속성에 대해 거짓을 반환하지만 `Object.hasOwn()` 동작은 변함없이 유지됩니다.

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "The dragons be out of office",
};

console.log(foo.hasOwnProperty("bar")); // false

console.log(Object.hasOwn(foo, "bar")); // true
```

또한 [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)와 함께 사용할 수도 있습니다. 이는 `Object.prototype`에서 상속되지 않으므로 `hasOwnProperty()`에 접근할 수 없습니다.

```js
const foo = Object.create(null);
foo.prop = "exists";

console.log(foo.hasOwnProperty("prop"));
// Uncaught TypeError: foo.hasOwnProperty is not a function

console.log(Object.hasOwn(foo, "prop")); // true
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Object.hasOwn` 폴리필](https://github.com/zloirock/core-js#ecmascript-object)
- [`Object.hasOwn`의 es-shims 폴리필](https://www.npmjs.com/package/object.hasown)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- [열거성과 속성의 소유권](/ko/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
