---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: 619eb04efb7c6171fd4385fd4ba926805ee08a35
---

{{JSRef}}

{{jsxref("Object")}} 인스턴스의 **`hasOwnProperty()`** 메서드는 이 객체가 지정된 속성을 자체 속성으로 가지고 있는지(상속하는 것과는 반대로)를 나타내는 불리언을 반환합니다.

> **참고:** 지원되는 브라우저에서는 `hasOwnProperty()` 보다
> {{jsxref("Object.hasOwn()")}} 사용을 권장합니다.

{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}

## 구문

```js-nolint
hasOwnProperty(prop)
```

### 매개변수

- `prop`
  - : 시험할 속성의 [Symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol) 혹은 {{jsxref("String")}} 이름입니다.

### 반환 값

주어진 속성이 자체 속성으로 가지고 있다면 `true`를 반환하며 그렇지 않으면 `false`를 반환합니다.

## 설명

지정된 속성이 객체의 직접 속성인 경우, 값이 `null`이거나 `undefined`이더라도
**`hasOwnProperty()`** 메서드는 `true`를 반환합니다. 속성이 상속되었거나 전혀 선언되지 않은 경우
이 메서드는 `false`를 반환합니다. {{jsxref("Operators/in", "in")}} 연산자와 달리,
이 메서드는 객체의 프로토타입 체인에서 지정된 속성을 확인하지 않습니다.

이 메서드는 대부분 JavaScript 객체에서 호출할 수 있는데, 대부분의 객체는
{{jsxref("Object")}}에서 파생되므로서 그 메서드를 상속하기 때문입니다.
예를 들어 {{jsxref("Array")}}는 {{jsxref("Object")}}이므로
`hasOwnProperty()` 메서드를 사용하여 인덱스의 존재 여부를 확인할 수 있습니다.

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - 정의되지 않음
```

메서드가 재구현된 객체나 [`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)에서는
사용할 수 없습니다(`Object.prototype`에서 상속되지 않으므로).
이러한 경우의 예는 다음과 같습니다.

## 예제

### hasOwnProperty를 사용하여 자체 속성의 존재 여부 시험하기

다음 코드는 `example` 객체에 `prop`이라는 속성이 포함되어 있는지 확인하는 방법을 보여줍니다.

```js
const example = {};
example.hasOwnProperty("prop"); // false

example.prop = "exists";
example.hasOwnProperty("prop"); // true - 'prop' 이 지정되었습니다

example.prop = null;
example.hasOwnProperty("prop"); // true - 자체 속성이 null 값으로 존재합니다

example.prop = undefined;
example.hasOwnProperty("prop"); // true - 자체 속성이 undefined 값으로 존재합니다
```

### 직접 vs. 상속된 속성

다음 예제에서는 직접 속성과 프로토타입 체인을 통해 상속된 속성을 구분합니다.

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty`는 직접 속성에 대해서는 오직 true를 반환합니다
example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false
example.hasOwnProperty("hasOwnProperty"); // false

// `in` 연산자는 직접 혹은 상속된 속성에 대해서 true를 반환합니다.
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### 객체의 속성 순회하기

다음 예제는 상속된 속성을 실행하지 않고 객체의 열거 가능한 속성을
순회하는 방법을 보여줍니다.

```js
const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
  } else {
    console.log(name); // toString 혹은 다른 어떤 것
  }
}
```

{{jsxref("Statements/for...in", "for...in")}} 반복은 열거 가능한 항목만 반복할 수 있다는 점을 명심하시기 바랍니다. 반복에서 나오는 비열거 가능 속성이 없다고 해서 `hasOwnProperty` 자체가 열거 가능 항목으로 엄격히 제한된다는 의미는 아닙니다. 열거할 수 없는 속성은 {{jsxref("Object.getOwnPropertyNames()")}}를 사용하여 반복할 수 있습니다.

### 속성 이름으로서 hasOwnProperty 사용하기

JavaScript는 `hasOwnProperty`라는 속성 이름을 보호하지 않습니다.
이 이름을 가진 속성을 가진 객체는 잘못된 결과를 반환할 수 있습니다.

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // 재구현은 언제나 false를 반환합니다
```

이 문제를 해결할 수 있는 권장 방법으로는
{{jsxref("Object.hasOwn()")}}(이를 지원하는 브라우저에서)를 대신 사용하는 것입니다.
다른 대안으로는 외부의 `hasOwnProperty`를 사용하는 방법이 있습니다.

```js
const foo = { bar: "Here be dragons" };

// Object.hasOwn() 메서드를 사용하세요 - 추천 방법
Object.hasOwn(foo, "bar"); // true

// Object 프로토타입의 hasOwnProperty 속성 사용
Object.prototype.hasOwnProperty.call(foo, "bar"); // true

// 다른 객체의 hasOwnProperty를 사용하고
// 'this'를 foo로 설정하여 호출합니다
({}).hasOwnProperty.call(foo, "bar"); // true
```

처음 두 경우는 새로 생성된 객체가 없다는 점에 유의하시기 바랍니다.

### Object.create(null)로 생성된 객체

[`null`-프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)는
`Object.prototype`을 상속하지 않고, `hasOwnProperty()`를 접근 불가로 만듭니다.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

이 경우의 해결책은 이전 섹션과 동일합니다.
설정에 따라 {{jsxref("Object.hasOwn()")}}을 사용하고, 그렇지 않으면
외부 객체의 `hasOwnProperty()`를 사용합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.hasOwn()")}}
- [열거성과 속성의 소유권](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
