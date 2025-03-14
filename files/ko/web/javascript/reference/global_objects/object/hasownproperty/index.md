---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
l10n:
  sourceCommit: 619eb04efb7c6171fd4385fd4ba926805ee08a35
---

{{JSRef}}

{{jsxref("Object")}} 인스턴스의 **`hasOwnProperty()`** 메서드는
해당 객체 자체의 고유한 속성인지 (상속 받은 속성이 아닌지) 나타내는 불리언 값을 반환합니다.

> **Note:** {{jsxref("Object.hasOwn()")}} 가 권장됩니다.
> `hasOwnProperty()` 는 이를 지원하는 브라우저에서만 사용됩니다.

{{InteractiveExample("JavaScript Demo: Object.prototype.hasOwnProperty()")}}

```js interactive-example
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty("property1"));
// Expected output: true

console.log(object1.hasOwnProperty("toString"));
// Expected output: false

console.log(object1.hasOwnProperty("hasOwnProperty"));
// Expected output: false
```

## 구문

```js-nolint
hasOwnProperty(prop)
```

### 파라미터

- `prop`
  - : 테스트를 위한 속성의 {{jsxref("String")}} 이름 혹은 [심볼](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)입니다.

### 반환 값

객체가 특정 속성을 고유한 속성으로 가지고 있다면 `true` 를 반환하고 그렇지 않으면 `false` 를 반환합니다.

## 설명

**`hasOwnProperty()`** 메서드는 특정 속성이 해당 객체의 고유한 속성이라면 이 값이 `null` 혹은 `undefined` 일지라도 `true` 를 반환합니다. 이 속성이 상속 받은 속성이거나 어디에서도 정의되지 않았다면 `false` 를 반환합니다. {{jsxref("Operators/in", "in")}} 연산자와는 별개로, 이 메서드는 특정 속성이 해당 객체의 프로토타입 체인에서 지정된 것인지 검증하지 않습니다.

이 메서드는 대다수의 JavaScript 객체에서 호출될 수 있습니다. 많은 객체가 {{jsxref("Object")}} 에서 파생되었고, 이 메서드를 상속받기 때문입니다. 예를 들어 {{jsxref("Array")}}도 {{jsxref("Object")}}이기 때문에 `hasOwnProperty()` 메서드를 사용하여 인덱스가 존재하는지 확인할 수 있습니다.

```js
const fruits = ["Apple", "Banana", "Watermelon", "Orange"];
fruits.hasOwnProperty(3); // true ('Orange')
fruits.hasOwnProperty(4); // false - not defined
```

이 메서드는 재구성된 객체 혹은 `Object.prototype` 에서 상속되지 않은 [`null` 프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)에서는 유효하지 않습니다.

## 예제

### hasOwnProperty를 활용하여 고유 속성 존재 여부를 테스트하기

아래 코드는 `example` 객체가 `prop` 이라는 이름의 속성을 포함하고 있는지 확인하는 방법을 보여줍니다.

```js
const example = {};
example.hasOwnProperty("prop"); // false

example.prop = "exists";
example.hasOwnProperty("prop"); // true - 'prop' 이 정의되어 있습니다.

example.prop = null;
example.hasOwnProperty("prop"); // true - 고유 속성이 null 값으로 존재합니다.

example.prop = undefined;
example.hasOwnProperty("prop"); // true - 고유 속성이 undefined 값으로 존재합니다.
```

### 직접 속성 vs. 상속된 속성

아래 예제는 직접적인 속성과 프로토타입 체인을 통해 상속된 속성 사이의 차이점을 보여줍니다.

```js
const example = {};
example.prop = "exists";

// `hasOwnProperty` 직접 속성에서는 true만 반환합니다.
example.hasOwnProperty("prop"); // true
example.hasOwnProperty("toString"); // false
example.hasOwnProperty("hasOwnProperty"); // false

// `in` 연산자는 직접 속성이나 상속된 속성에서 모두 true를 반환합니다.
"prop" in example; // true
"toString" in example; // true
"hasOwnProperty" in example; // true
```

### 객체의 속성 반복 처리하기

이 예제는 상속된 속성을 실행하지 않고 객체의 열거 가능한 속성을 반복하여 처리하는 방법을 보여줍니다.

```js
const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
  } else {
    console.log(name); // toString 혹은 다른 것들
  }
}
```

{{jsxref("Statements/for...in", "for...in")}} 루프는 열거 가능한 아이템만을 반복한다는 점을 유의하세요. 열거 가능하지 않은 속성들이 나오지 않는다고 해서 `hasOwnProperty` 가 열거 가능한 항목에만 적용된다는 것을 의미하지는 않습니다. {{jsxref("Object.getOwnPropertyNames()")}} 를 사용한다면 열거 가능하지 않은 속성들도 반복 처리할 수 있습니다.

### hasOwnProperty를 속성 이름으로 사용하기

JavaScript는 속성 이름 `hasOwnProperty` 을 보호하지 않습니다. 이 이름의 속성을 가지고 있는 객체는 부적합한 결과를 반환할 수도 있습니다.

```js
const foo = {
  hasOwnProperty() {
    return false;
  },
  bar: "Here be dragons",
};

foo.hasOwnProperty("bar"); // 재구성된 객체는 항상 false를 반환합니다.
```

이 문제를 해결하기 위한 가장 권장되는 방법은 {{jsxref("Object.hasOwn()")}} 를 지원하는 브라우저에서 이를 사용하는 방법입니다. 혹은 외부 `hasOwnProperty` 를 사용하는 대안도 있습니다.

```js
const foo = { bar: "Here be dragons" };

// Object.hasOwn() 메서드를 사용합니다. - 권장
Object.hasOwn(foo, "bar"); // true

// Object 프로토타입에서 hasOwnProperty 속성을 사용하기
Object.prototype.hasOwnProperty.call(foo, "bar"); // true

// 다른 Object의 hasOwnProperty를 사용하고
// 'this'의 call을 호출하여 foo에 할당합니다.
({}).hasOwnProperty.call(foo, "bar"); // true
```

처음 두 가지 경우에는 새로 생성된 객체가 있다는 점을 유의해야 합니다.

### Object.create(null)로 생성된 객체

[`null` 프로토타입 객체](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects)는 `Object.prototype` 로부터 상속된 것이 아니기 때문에 `hasOwnProperty()` 에 접근할 수 없습니다.

```js
const foo = Object.create(null);
foo.prop = "exists";
foo.hasOwnProperty("prop"); // Uncaught TypeError: foo.hasOwnProperty is not a function
```

이 경우의 해결책은 이 섹션에서 확인했던 것과 동일합니다. 참조를 위해 {{jsxref("Object.hasOwn()")}} 를 사용하거나 외부 객체에서 `hasOwnProperty()` 를 사용할 수도 있습니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object.hasOwn()")}}
- [속성의 열거 가능성과 소유권](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Statements/for...in", "for...in")}}
- {{jsxref("Operators/in", "in")}}
- [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
