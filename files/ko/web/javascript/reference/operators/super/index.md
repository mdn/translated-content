---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

**super** 키워드는 부모 오브젝트의 함수를 호출할 때 사용됩니다.

`super.prop` 와 `super[expr]` 표현식은 [클래스](/ko/docs/Web/JavaScript/Reference/Classes) 와 [객체리터럴](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)의 어떠한 [메서드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions) 방법에서도 유효합니다.

## 문법

```js
    super([arguments]); // 부모 생성자 호출
    super.functionOnParent([arguments]);
```

## 설명

생성자에서는 `super` 키워드 하나만 사용되거나 `this` 키워드가 사용되기 전에 호출되어야 합니다. 또한 `super` 키워드는 부모 객체의 함수를 호출하는데 사용될 수 있습니다.

## 예제

### 클래스에서 `super` 사용하기

이 예제는 옆의 링크에서 발췌하였습니다. [classes sample](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([live demo](https://googlechrome.github.io/samples/classes-es6/index.html)).

```js
class Polygon {
  constructor(height, width) {
    this.name = 'Polygon';
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log('Hi, I am a ', this.name + '.');
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // 참조오류가 발생합니다. super가 먼저 호출되어야 합니다.

    // 여기서, 부모클래스의 생성자함수를 호출하여 높이값을 넘겨줍니다.
    // Polygon의 길이와 높이를 넘겨줍니다.
    super(length, length);

    // 참고: 파생 클래스에서 super() 함수가 먼저 호출되어야
    // 'this' 키워드를 사용할 수 있습니다. 그렇지 않을 경우 참조오류가 발생합니다.
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### 정적 메서드에서 Super 호출

[static](/ko/docs/Web/JavaScript/Reference/Classes/static) 메서드에서도 super를 호출할 수 있습니다.

```js
class Human {
  constructor() {}
  static ping() {
    return 'ping';
  }
}

class Computer extends Human {
  constructor() {}
  static pingpong() {
    return super.ping() + ' pong';
  }
}
Computer.pingpong(); // 'ping pong'
```

### super의 속성 삭제

[delete 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)를 사용할 수 없으며 `super.prop` 또는 `super[expr]` 표현식을 사용하여 부모 클래스의 속성을 삭제할 경우 {{jsxref("ReferenceError")}} 오류가 발생합니다.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived {
  constructor() {}
  delete() {
    delete super.foo;
  }
}

new Derived().delete(); // 참조오류: 'super'완 관련된 삭제가 유효하지 않습니다.
```

### `Super.prop`은 non-writable 속성을 덮어 쓸 수 없습니다

예를 들어 {{jsxref("Object.defineProperty")}}로 속성을 정의할 때, `super`의 속성 값을 덮어 쓸 수 없습니다.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1
    });
  }
  f() {
    super.prop = 2;
  }
}

var x = new X();
x.f();
console.log(x.prop); // 1
```

### 객체 리터럴에서 `super.prop` 사용하기

Super는 [object initializer / literal](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) 표기법에서 사용할 수 있습니다. 아래의 예제에서, 두개의 객체는 메서드를 정의합니다. 두번째 객체에서, `super`는 첫번째 객체의 메서드를 호출합니다. 이 예제는 {{jsxref("Object.setPrototypeOf()")}}를 이용하여 obj2 prototype에 obj1을 세팅하여, `super`가 obj1의 method1을 찾을 수 있도록 합니다.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  }
}

var obj2 = {
  method2() {
   super.method1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- [Classes](/ko/docs/Web/JavaScript/Reference/Classes)
