---
title: Classes
slug: Web/JavaScript/Reference/Classes
---

{{JsSidebar("Classes")}}

Class는 객체를 생성하기 위한 템플릿입니다. 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. 자바스크립트에서 클래스는 프로토타입을 이용해서 만들어졌지만 ES5의 클래스 의미와는 다른 문법과 의미를 가집니다.

## Class 정의

Class는 사실 "특별한 {{jsxref("Functions", "함수", "", "true")}}"입니다. 함수를 {{jsxref("Operators/function", "함수 표현식", "", "true")}}과 {{jsxref("Statements/function", "함수 선언", "", "true")}}으로 정의할 수 있듯이 class 문법도 {{jsxref("Operators/class", "class 표현식", "", "true")}} and {{jsxref("Statements/class", "class 선언", "", "true")}} 두 가지 방법을 제공합니다.

### Class 선언

Class를 정의하는 한 가지 방법은 **class 선언**을 이용하는 것입니다. class를 선언하기 위해서는 클래스의 이름(여기서 "Rectangle")과 함께 `class` 키워드를 사용해야 합니다.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

#### Hoisting

**함수 선언**과 **클래스 선언**의 중요한 차이점은 함수의 경우 정의하기 하기 전에 호출할 수 있지만, 클래스는 반드시 정의한 뒤에 사용할 수 있다는 점입니다. 다음 코드는 {{jsxref("ReferenceError")}}를 던질 것입니다.

```js
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

예외가 발생하는 이유는 클래스가 {{Glossary("Hoisting", "호이스팅")}}될 때 초기화는 되지 않기 때문입니다.

### Class 표현식

**Class 표현식**은 class를 정의하는 또 다른 방법입니다. Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있습니다. 이름을 가진 class 표현식의 이름은 클래스 body의 local scope에 한해 유효합니다. (하지만, 클래스의 (인스턴스 이름이 아닌) {{jsxref("Function.name", "name")}} 속성을 통해 찾을 수 있습니다).

```js
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 출력: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 출력: "Rectangle2"
```

> **참고:** 클래스 **표현식**에는 [Class 선언](#class_선언) 섹션에 설명된 것과 동일한 호이스팅 제한이 적용됩니다.

## Class body 와 메서드 정의

Class body는 중괄호 `{}` 로 묶여 있는 안쪽 부분입니다. 이곳은 여러분이 메서드나 constructor와 같은 class 멤버를 정의할 곳입니다.

### Strict mode

클래스의 본문(body)은 {{jsxref("Strict_mode", "strict mode", "", "true")}}에서 실행됩니다. 즉, 여기에 적힌 코드는 성능 향상을 위해 더 엄격한 문법이 적용됩니다. 그렇지 않으면, 조용히 오류가 발생할 수 있습니다. 특정 키워드는 미래의 ECMAScript 버전용으로 예약됩니다.

### Constructor (생성자)

{{jsxref("Classes/constructor", "constructor", "", "true")}} 메서드는 `class` 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드입니다. "constructor" 라는 이름을 가진 특수한 메서드는 클래스 안에 한 개만 존재할 수 있습니다. 만약 클래스에 여러 개의 `constructor` 메서드가 존재하면 {{jsxref("SyntaxError")}} 가 발생할 것입니다.

constructor는 부모 클래스의 constructor를 호출하기 위해 `super` 키워드를 사용할 수 있습니다.

### 프로토타입 메서드

{{jsxref("Functions/Method_definitions", "메서드 정의", "", "true")}}도 참조해보세요.

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // 메서드
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100
```

### 정적 메서드와 속성

{{jsxref("Classes/static", "static", "", "true")}} 키워드는 클래스를 위한 정적(static) 메서드를 정의합니다. 정적 메서드는 클래스의 인스턴스화([instantiating](<https://developer.mozilla.org/ko/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#The_object_(class_instance)> 'An example of class instance is "var john = new Person();"')) 없이 호출되며, 클래스의 인스턴스에서는 호출할 수 없습니다. 정적 메서드는 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는 데 주로 사용됩니다. 반면, 정적 속성은 캐시, 고정 환경설정 또는 인스턴스 간에 복제할 필요가 없는 기타 데이터에 유용합니다.

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static displayName = "Point";
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### 프로토타입 및 정적 메서드를 사용한 `this` 바인딩

메서드를 변수에 할당 한 다음 호출하는 것과 같이, 정적 메서드나 프로토타입 메서드가 {{jsxref("Operators/this", "this")}} 값 없이 호출될 때, `this` 값은 메서드 안에서 `undefined`가 됩니다. 이 동작은 {{jsxref("Strict_mode", "\"use strict\"")}} 명령어 없이도 같은 방식으로 동작하는데, `class` 문법 안에 있는 코드는 항상 strict mode 로 실행되기 때문입니다.

```js
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // the Animal object
let speak = obj.speak;
speak(); // undefined

Animal.eat(); // class Animal
let eat = Animal.eat;
eat(); // undefined
```

위에 작성된 코드를 전통적 방식의 함수기반의 non–strict mode 구문으로 재작성하면, `this` 메서드 호출은 기본적으로 {{Glossary("Global_object", "전역 객체")}}인 초기 `this` 값에 자동으로 바인딩 됩니다. Strict mode에서는 자동 바인딩이 발생하지 않습니다; `this` 값은 전달된 대로 유지됩니다.

```js
function Animal() {}

Animal.prototype.speak = function () {
  return this;
};

Animal.eat = function () {
  return this;
};

let obj = new Animal();
let speak = obj.speak;
speak(); // global object (in non–strict mode)

let eat = Animal.eat;
eat(); // global object (in non-strict mode)
```

### 인스턴스 속성

인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 합니다:

```js
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

정적 (클래스사이드) 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 합니다.

```js
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

### Field 선언

> **Warning:** public과 private 필드 선언은 자바스크립트 표준화 위원회에 [실험적 기능 (stage 3)](https://github.com/tc39/proposal-class-fields) [TC39](https://tc39.es/) 로 제안되어있습니다. 현재 이를 지원하는 브라우져는 제한적인 상태입니다만, [Babel](https://babeljs.io/) 과 같은 build 시스템을 사용한다면 이 기능을 사용해볼 수 있습니다.

#### Public 필드 선언

자바스크립트의 필드 선언 문법을 사용해서 위의 예제는 아래와 같이 다시 쓰여질 수 있습니다.

```js
class Rectangle {
  height = 0;
  width;
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

필드를 먼저 선언함으로서 클래스 정의는 self-documenting에 가까워졌고 필드는 언제나 존재하는 상태가 됩니다.

위의 예에서 봤듯이 필드 선언은 기본 값과 같이 선언될 수도 있습니다.

자세한 내용은 {{jsxref("Classes/Public_class_fields", "public class fields", "", "true")}}를 참조하세요.

#### Private 필드 선언

private 필드를 사용하면 아래와 같이 예제를 개선할 수 있습니다.

```js
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
}
```

클래스의 바깥에서 private 필드를 접근하려고 하면 에러가 발생합니다. private필드는 클래스 내부에서만 읽고 쓰기가 가능합니다. 클래스 외부에서 보이지 않도록 정의하였으므로 클래스가 버젼업 되면서 내부 구현이 바뀌더라도 클래스 사용자 입장에서는 이에 아무런 영항을 받지 않도록 할 수 있습니다.

> **Note:** Private 필드는 사용전에 선언되어야 합니다.

일반적인 프로퍼티와는 다르게 private 필드는 값을 할당하면서 만들어질 수 없습니다.

자세한 내용은 {{jsxref("Classes/Private_class_fields", "private class fields", "", "true")}}를 참조하세요.

## `extends`를 통한 클래스 상속(sub classing)

{{jsxref("Classes/extends", "extends")}} 키워드는 *클래스 선언*이나 *클래스 표현식*에서 다른 클래스의 자식 클래스를 생성하기 위해 사용됩니다.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // super class 생성자를 호출하여 name 매개변수 전달
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.
```

subclass에 constructor가 있다면, "this"를 사용하기 전에 가장 먼저 super()를 호출해야 합니다.

또한 es5에서 사용되던 전통적인 함수 기반의 클래스를 통하여 확장할 수도 있습니다.

```js
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

class Dog extends Animal {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.

// 유사한 메서드의 경우, 자식의 메서드가 부모의 메서드보다 우선합니다
```

클래스는 생성자가 없는 객체(non-constructible)을 확장할 수 없습니다. 만약 기존의 생성자가 없는 객체을 확장하고 싶다면, 이 메서드를 사용하세요. {{jsxref("Object.setPrototypeOf()")}}:

```js
const Animal = {
  speak() {
    console.log(`${this.name} makes a noise.`);
  },
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// 이 작업을 수행하지 않으면 speak를 호출할 때 TypeError가 발생합니다
Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog("Mitzie");
d.speak(); // Mitzie makes a noise.
```

## Species

배열을 상속 받은 MyArray 클래스에서 {{jsxref("Array")}} Object를 반환하고 싶을 수도 있을 것입니다. 그럴때 Species 패턴은 기본 생성자를 덮어쓰도록 해줍니다.

예를 들어, {{jsxref("Array.map", "map()")}}과 같은 기본 생성자를 반환하는 메서드를 사용할 때 이 메서드가 MyArray 객체 대신 `Array` 객체가 반환하도록 하고 싶을 것입니다. {{jsxref("Symbol.species")}} 심볼은 이러한 것을 가능하게 해줍니다:

```js
class MyArray extends Array {
  // 부모 Array 생성자로 species 덮어쓰기
  static get [Symbol.species]() {
    return Array;
  }
}
var a = new MyArray(1, 2, 3);
var mapped = a.map((x) => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

## `super` 를 통한 상위 클래스 호출

{{jsxref("Operators/super", "super")}} 키워드는 객체의 부모가 가지고 있는 메서드를 호출하기 위해 사용됩니다. 이는 프로토타입 기반 상속보다 좋은 점 중 하나입니다.

```js
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} roars.`);
  }
}

let l = new Lion("Fuzzy");
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```

## Mix-ins

추상 서브 클래스 또는 믹스-인은 클래스를 위한 템플릿입니다. ECMAScript 클래스는 하나의 단일 슈퍼클래스만을 가질 수 있으며, 예를 들어 툴링 클래스로부터의 다중 상속은 불가능합니다. 기능은 반드시 슈퍼클래스에서 제공되어야 합니다.

슈퍼클래스를 인자로 받고 이 슈퍼클래스를 확장하는 서브클래스를 생성하여 반환하는 함수를 사용하여 ECMAScript에서 믹스-인을 구현할 수 있습니다:

```js
var calculatorMixin = (Base) =>
  class extends Base {
    calc() {}
  };

var randomizerMixin = (Base) =>
  class extends Base {
    randomize() {}
  };
```

위 믹스-인을 사용하는 클래스는 다음과 같이 작성할 수 있습니다:

```js
class Foo {}
class Bar extends calculatorMixin(randomizerMixin(Foo)) {}
```

## 클래스 재정의

클래스는 재정의될 수 없습니다. 재정의를 시도하면 `SyntaxError` 가 발생합니다.

이를 실험해보고 싶으면 FireFox Web Console (**Tools** > **Web Developer** > **Web Console**) 에서 같은 이름으로 클래스를 두번 정의하려고 해보세요. 다음과 같은 오류를 보게 될 겁니다. `SyntaxError: redeclaration of let ClassName;`. (See further discussion of this issue in [Firefox bug 1428672](https://bugzil.la/1428672).) Doing something similar in Chrome Developer Tools gives you a message like `Uncaught SyntaxError: Identifier 'ClassName' has already been declared at <anonymous>:1:1`.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참조

- {{jsxref("Functions", "함수", "", "true")}}
- {{jsxref("Statements/class", "class 선언", "", "true")}}
- {{jsxref("Operators/class", "class 식", "", "true")}}
- {{jsxref("Classes/Public_class_fields", "Public class fields", "", "true")}}
- {{jsxref("Classes/Private_class_fields", "Private class fields", "", "true")}}
- {{jsxref("Operators/super", "super")}}
- [블로그 게시물: "ES6 In Depth: Classes"](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [Fields and public/private class properties proposal (stage 3)](https://github.com/tc39/proposal-class-fields)
