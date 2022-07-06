---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
tags:
  - Class
  - JavaScript
  - Object
translation_of: Web/JavaScript/Reference/Global_Objects/Object
---

{{JSRef}}

**`Object`** 클래스는 [JavaScript의 데이터 유형](/ko/docs/Web/JavaScript/Data_structures) 중 하나를 나타냅니다. 다양한 키 모음 및 더 복잡한 엔티티들을 저장하는 데 사용됩니다. 객체는 {{jsxref("Object/Object", "Object()")}} 생성자 또는 [객체 초기자 / 리터럴 구문](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)를 통해 생성할 수 있습니다.

## 설명

JavaScript의 거의 모든 객체는 {{jsxref("Object")}}의 인스턴스입니다. 일반적인 객체는 `Object.prototype`에서 속성(메서드 포함)을 상속하지만, 이러한 속성들은 가려질(재정의될) 수 있습니다. 그러나 `Object`는 의도적으로 가려지지 않게 생성되거나(예: {{jsxref("Object.create", "Object.create(null)")}}), 더이상 가려지지 않도록 변경될 수 있습니다(예: {{jsxref("Object.setPrototypeOf")}}).

`Object` 프로토타입 객체에 대한 변경 사항은 해당 변경 사항의 대상이 되는 프로토타입 체인상의 속성 및 메서드가 추가로 재정의되지 않는 한 프로토타입 체인을 통해 **모든** 객체에서 볼 수 있습니다. 이것은 객체 동작을 재정의하거나 확장하는 매우 강력하지만 잠재적으로 위험한 메커니즘을 제공합니다.

`Object` 생성자는 주어진 값에 대한 객체 래퍼를 생성합니다.

- 값이 {{jsxref("null")}} 또는 {{jsxref("undefined")}}이면 빈 객체를 생성하여 반환합니다.
- 그렇지 않으면 주어진 값에 해당하는 타입의 객체를 반환합니다.
- 값이 이미 객체인 경우 그 값을 반환합니다.

생성자가 아닌 맥락에서 호출될 때 `Object`는 `new Object()`와 동일하게 작동합니다.

[객체 초기자 / 리터럴 구문](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)도 참조하세요.

### 객체의 속성 삭제하기

객체 자체에는 속성을 삭제하는 메서드가 없습니다(예: {{jsxref("Map.prototype.delete", "Map.prototype.delete()")}}). 삭제하기 위해서는 [delete 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)를 사용해야 합니다.

## 생성자

- {{jsxref("Object/Object", "Object()")}}
  - : 새 `Object` 객체를 만듭니다. 이 때 생성된 객체는 주어진 값에 대한 래퍼입니다.

## 정적 메서드

- {{jsxref("Object.assign","Object.assign()")}}
  - : 하나 이상의 원본 객체들로부터 모든 열거 가능한 속성들을 대상 객체로 복사합니다.
- {{jsxref("Object.create","Object.create()")}}
  - : 지정한 프로토타입(prototype)의 객체 및 속성을 갖고 있는 새 객체를 생성합니다.
- {{jsxref("Object.defineProperty","Object.defineProperty()")}}
  - : 지정한 서술자(descriptor)에서 서술한 속성을 객체에 추가합니다.
- {{jsxref("Object.defineProperties","Object.defineProperties()")}}
  - : 지정한 서술자들에서 서술한 속성들을 객체에 추가합니다.
- {{jsxref("Object.entries","Object.entries()")}}
  - : 지정한 객체 **자신의** 모든 열거 가능한 문자열 속성들의 `[key, value]` 쌍으로 구성된 배열을 반환합니다.
- {{jsxref("Object.freeze","Object.freeze()")}}
  - : 객체를 고정(freeze)합니다. 다른 곳의 코드에서 해당 속성을 삭제하거나 변경할 수 없게 됩니다.
- {{jsxref("Object.fromEntries","Object.fromEntries()")}}
  - : `[key, value]` 쌍의 iterable로부터 새 객체를 반환합니다. ({{jsxref("Object.entries")}}의 반대입니다.)
- {{jsxref("Object.getOwnPropertyDescriptor","Object.getOwnPropertyDescriptor()")}}
  - : 객체의 지정한 속성에 대한 속성 서술자를 반환합니다.
- {{jsxref("Object.getOwnPropertyDescriptors","Object.getOwnPropertyDescriptors()")}}
  - : 객체 자신의 모든 속성 서술자들로 구성된 객체를 반환합니다.
- {{jsxref("Object.getOwnPropertyNames","Object.getOwnPropertyNames()")}}
  - : 지정한 객체 **자신의** 모든 열거 가능하거나 불가능한 속성들의 이름으로 구성된 배열을 반환합니다.
- {{jsxref("Object.getOwnPropertySymbols","Object.getOwnPropertySymbols()")}}
  - : 지정한 객체 자신의 모든 심볼 속성들로 구성된 배열을 반환합니다.
- {{jsxref("Object.getPrototypeOf","Object.getPrototypeOf()")}}
  - : 지정한 객체의 프로토타입(내부 `[[Prototype]]` 속성)을 반환합니다.
- {{jsxref("Object.is","Object.is()")}}
  - : 두 값이 같은지를 비교합니다. 모든 `NaN` 값을 같다고 처리합니다. (추상 동등 비교 및 ​​엄격한 동등 비교와 다른 점입니다.)
- {{jsxref("Object.isExtensible","Object.isExtensible()")}}
  - : 객체의 확장이 가능한지 여부를 확인합니다.
- {{jsxref("Object.isFrozen","Object.isFrozen()")}}
  - : 객체가 고정(freeze)되었는지 여부를 확인합니다.
- {{jsxref("Object.isSealed","Object.isSealed()")}}
  - : 객체가 봉인(seal)되었는지 여부를 확인합니다.
- {{jsxref("Object.keys","Object.keys()")}}
  - : 지정한 객체 **자신의** 모든 열거 가능한 문자열 속성들의 이름으로 구성된 배열을 반환합니다.
- {{jsxref("Object.preventExtensions","Object.preventExtensions()")}}
  - : 객체가 확장되지 못하도록 합니다.
- {{jsxref("Object.seal","Object.seal()")}}
  - : 다른 코드가 객체의 속성을 삭제하지 못하도록 합니다.
- {{jsxref("Object.setPrototypeOf","Object.setPrototypeOf()")}}
  - : 객체의 프로토타입(내부 `[[Prototype]]` 속성)을 설정합니다.
- {{jsxref("Object.values","Object.values()")}}
  - : 지정한 객체 **자신의** 모든 열거 가능한 문자열 속성에 해당하는 값들로 구성된 배열을 반환합니다.

## 인스턴스 속성

- {{jsxref("Object.prototype.constructor")}}
  - : 객체의 프로토타입을 생성하는 함수를 지정합니다.
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
  - : 객체가 인스턴스화될 때 프로토타입으로 사용된 객체를 가리킵니다.

## 인스턴스 메서드

- {{jsxref("Object.prototype.__defineGetter__()")}}
  - : 액세스(get)할 때 실행되어 값을 반환하는 함수와 지정한 속성을 연결합니다.
- {{jsxref("Object.prototype.__defineSetter__()")}}
  - : 설정(set)할 때 실행되어 해당 속성을 수정하는 함수와 지정한 속성을 연결합니다.
- {{jsxref("Object.prototype.__lookupGetter__()")}}
  - : {{jsxref("Object.prototype.__defineGetter__()", "__defineGetter__()")}} 메서드에 의해 지정된 속성과 연결된 함수를 반환합니다.
- {{jsxref("Object.prototype.__lookupSetter__()")}}
  - : {{jsxref("Object.prototype.__defineSetter__()", "__defineSetter__()")}} 메서드에 의해 지정된 속성과 연결된 함수를 반환합니다.
- {{jsxref("Object.prototype.hasOwnProperty()")}}
  - : 객체에 지정한 속성이 해당 객체에 직접 포함되어 있고 프로토타입 체인을 통해 상속되지 않는지 여부를 나타내는 불리언 값을 반환합니다.
- {{jsxref("Object.prototype.isPrototypeOf()")}}
  - : 이 메서드를 호출한 객체가 지정한 객체의 프로토타입 체인에 있는지 여부를 나타내는 불리언 값을 반환합니다.
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
  - : 내부 [ECMAScript \[\[Enumerable\]\] 속성](/ko/docs/Web/JavaScript/Data_structures##%ec%86%8d%ec%84%b1_properties)이 설정되었는지 여부를 나타내는 불리언 값을 반환합니다.
- {{jsxref("Object.prototype.toLocaleString()")}}
  - : {{jsxref("Object.toString", "toString()")}}를 호출합니다.
- {{jsxref("Object.prototype.toString()")}}
  - : 객체의 문자열 표현을 반환합니다.
- {{jsxref("Object.prototype.valueOf()")}}
  - : 지정한 객체의 원시 값을 반환합니다.

## 예제

### `undefined` 및 `null` 타입을 지정한 `Object` 사용

다음 예제는 변수 `o`에 빈 `Object` 객체를 저장합니다.

```js
let o = new Object()
```

```js
let o = new Object(undefined)
```

```js
let o = new Object(null)
```

### `Object`로 `Boolean` 객체 생성하기

다음 예제는 변수 `o`에 {{jsxref("Boolean")}} 객체를 저장합니다.

```js
// o = new Boolean(true) 와 같음
let o = new Object(true)
```

```js
// o = new Boolean(false) 와 같음
let o = new Object(Boolean())
```

### 객체 프로토타입

기존 `Object.prototype` 메서드의 동작을 변경하고자 할 때에는 기존 내용의 앞이나 뒤에 확장할 내용을 래핑하여 코드를 주입하는 것을 고려하세요. 예를 들어, 이 (테스트되지 않은) 코드는 기본 제공 코드 또는 다른 사람의 확장 실행되기 전에 사전 조건부로 사용자 정의 코드를 실행합니다.

함수가 호출되면 호출에 대한 매개변수가 유사배열 "변수" [arguments 객체](/ko/docs/Web/JavaScript/Reference/Functions/arguments)에 보관됩니다. 예를 들어, `myFn(a, b, c)`를 호출하면 `myFn` 본문 내의 arguments 객체에는 `(a, b, c)`에 해당하는 3개의 유사배열요소가 포함됩니다.

hook을 통해 프로토타입을 수정하고자 할 때엔 해당 함수에서 `apply()`를 호출하면서 `this`와 arguments 객체를 현재 동작에 전달합니다. 이 패턴은 `Node.prototype`, `Function.prototype` 등 모든 프로토타입에 적용할 수 있습니다.

```js
var current = Object.prototype.valueOf;

// 내가 지정한 속성 "-prop-value"은 범분야에 걸쳐 사용되고 있고
// 항상 동일한 프로토타입 체인에 있지 않기 때문에, Object.prototype을 수정하고 싶습니다.
Object.prototype.valueOf = function () {
  if (this.hasOwnProperty('-prop-value')) {
    return this['-prop-value'];
  } else {
    // 내가 만든 객체가 아닌 것 같으므로,
    // 가능한 최선을 다해 원래의 동작을 재현하여 기본 동작으로 돌아가겠습니다.
    // 'apply' 메서드는 다른 언어에서의 'super'처럼 작동합니다.
    // valueOf()가 arguments를 취하지 않더라도, 다른 hook이 있으리라 생각합니다.
    return current.apply(this, arguments);
  }
}
```

JavaScript에는 명확한 하위 클래스 객체가 없기 때문에, 프로토타입은 특정 기능의 "기본 클래스" 객체를 만드는 데 유용한 해결 방법입니다. 예를 들어:

```js
var Person = function (name) {
  this.name = name;
  this.canTalk = true;
}
Person.prototype.greet = function () {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function (name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Object.prototype.constructor를 Employee로 설정하지 않으면
                                           // Person (parent)의 prototype.constructor를 사용합니다.
                                           // 이를 피하기 위해 prototype.constructor를 Employee (child)로 설정합니다.
Employee.prototype.greet = function () {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function (name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
Customer.prototype.constructor = Customer; // Object.prototype.constructor를 Customer로 설정하지 않으면
                                           // Person (parent)의 prototype.constructor를 사용합니다.
                                           // 이를 피하기 위해 prototype.constructor를 Customer (child)로 설정합니다.

var Mime = function (name) {
  Person.call(this, name);
  this.canTalk = false;
};

Mime.prototype = Object.create(Person.prototype);
Mime.prototype.constructor = Mime; // Object.prototype.constructor를 Mime로 설정하지 않으면
                                   // Person (parent)의 prototype.constructor를 사용합니다.
                                   // 이를 피하기 위해 prototype.constructor를 Mime (child)로 설정합니다.

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');
var mime = new Mime('Mime');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike

mime.greet();
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)
