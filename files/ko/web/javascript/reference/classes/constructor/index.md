---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
---

{{jsSidebar("Classes")}}

**`constructor`** 메서드는 {{jsxref("Statements/class", "클래스", "", 1)}}의 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.

{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}

## 구문

```js
constructor() { ... }
constructor(argument0) { ... }
constructor(argument0, argument1) { ... }
constructor(argument0, argument1, ... , argumentN) { ... }
```

## 설명

`constructor`를 사용하면 다른 모든 메서드 호출보다 앞선 시점인, 인스턴스 객체를 초기화할 때 수행할 초기화 코드를 정의할 수 있습니다.

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person("Otto");

otto.introduce();
```

클래스에 생성자를 정의하지 않으면 기본 생성자를 사용합니다. 아무것도 상속하지 않는 기본 클래스일 때의 기본 생성자는 빈 메서드입니다.

```js
constructor() {}
```

다른 클래스를 상속하는 경우, 기본 생성자는 자신의 매개변수를 부모 클래스의 생성자로 전달합니다.

```js
constructor(...args) {
  super(...args);
}
```

따라서 다음과 같은 코드를 작성할 수 있습니다.

```js
class ValidationError extends Error {
  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // ValidationError가 아니라 Error!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

`ValidationError` 클래스는 아무런 초기화 동작도 필요하지 않으므로 생성자를 별도로 명시하지 않았으며, 대신 기본 생성자가 매개변수로 부모 `Error` 클래스의 초기화를 처리하고 있습니다.

그러나, 파생 클래스에 직접 생성자를 정의할 경우, 부모 클래스의 생성자를 호출하려면 직접 `super()`를 호출해야 합니다.

```js
class ValidationError extends Error {
  constructor(message) {
    super(message); // 부모 클래스의 생성자 호출
    this.name = "ValidationError";
    this.code = "42";
  }

  printCustomerMessage() {
    return `Validation failed :-( (details: ${this.message}, code: ${this.code})`;
  }
}

try {
  throw new ValidationError("Not a valid phone number");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.name); // 이제 ValidationError!
    console.log(error.printCustomerMessage());
  } else {
    console.log("Unknown error", error);
    throw error;
  }
}
```

"`constructor`"라는 이름의 메서드는 하나의 클래스에 오직 하나만 존재할 수 있습니다. 두 개 이상의 `constructor` 메서드를 정의하면 {{jsxref("SyntaxError")}}가 발생합니다.

## 예제

### `constructor` 메서드 사용하기

```js
class Square extends Polygon {
  constructor(length) {
    // length로 다각형의 넓이와 높이를 정의하기 위해 부모 클래스의 생성자를 호출합니다.
    super(length, length);
    // 참고: 파생 클래스에서, this를 사용하기 전에는 반드시 super()를 먼저 호출해야 합니다.
    // 그렇지 않으면 ReferenceError가 발생합니다.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value ** 0.5;
    this.width = value ** 0.5;
  }
}
```

### 다른 예제

아래 예제에서, `Square` 클래스의 프로토타입을 `Rectangle`의 프로토타입으로 바꾼 후에도, `Square`의 인스턴스를 생성할 때 부모 클래스인 `Polygon` 생성자를 호출하는 것을 확인할 수 있습니다.

```js
class Polygon {
  constructor() {
    this.name = "Polygon";
  }
}

class Square extends Polygon {
  constructor() {
    super();
  }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); //Polygon
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Operators/super", "super()")}}
- {{jsxref("Statements/class", "클래스 선언문", "", 1)}}
- {{jsxref("Operators/class", "클래스 표현식", "", 1)}}
- {{jsxref("Classes", "클래스", "", 1)}}
- {{jsxref("Object.prototype.constructor")}}
