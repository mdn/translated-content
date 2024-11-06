---
title: super
slug: Web/JavaScript/Reference/Operators/super
l10n:
  sourceCommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jsSidebar("Operators")}}

**`super`** 키워드는 객체 리터럴 또는 클래스의 [[Prototype]] 속성에 접근하거나 슈퍼클래스의 생성자를 호출하는 데 사용됩니다.

`super.prop`와 `super[expr]` 표현식은 [클래스](/ko/docs/Web/JavaScript/Reference/Classes)와 [객체 리터럴](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)의 [메서드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)에서 모두 사용할 수 있습니다. `super(...args)` 표현식은 클래스 생성자에서 유효합니다.

{{EmbedInteractiveExample("pages/js/expressions-super.html", "taller")}}

## 구문

```js-nolint
super([arguments]) // 부모 생성자 호출.
super.propertyOnParent
super[expression]
```

## 설명

`super` 키워드는 "함수 호출"(`super(...args)`) 또는 "속성 조회"(`super.prop`와 `super[expr]`)의 두 가지 방법으로 사용할 수 있습니다.

> **참고:** `super`는 키워드이며 특수한 구문 구조입니다. `super`는 프로토타입 객체를 가리키는 변수가 아닙니다. `super` 자체를 읽으려는 시도는 {{jsxref("SyntaxError")}}입니다.
>
> ```js example-bad
> const child = {
>   myParent() {
>     console.log(super); // SyntaxError: 'super' keyword unexpected here
>   },
> };
> ```

파생 클래스(`extends`를 사용)의 [생성자](/ko/docs/Web/JavaScript/Reference/Classes/constructor) 본문에서 `super` 키워드는 "함수 호출"(`super(...args)`)로 나타날 수 있으며 `this` 키워드가 사용되기 전과 생성자가 반환되기 전에 호출되어야 합니다. 부모 클래스의 생성자를 호출하고 부모 클래스의 퍼블릭 필드를 바인딩한 후 파생 클래스의 생성자는 `this`를 추가로 접근하고 수정할 수 있습니다.

"속성 조회" 형식은 객체 리터럴 또는 클래스의 [[Prototype]] 메서드와 속성에 접근하는 데 사용할 수 있습니다. 클래스 본문 내에서 `super`의 참조는 실행 맥락이 인스턴스 생성인지 클래스 초기화인지에 따라 슈퍼클래스의 생성자 자체 이거나 생성자의 `prototype`이 될 수 있습니다. 자세한 내용은 예제 구획을 참조하세요.

`super`의 참조는 메서드가 호출된 객체가 아니라 `super`가 선언된 클래스 또는 객체 리터럴에 의해 결정됩니다. 따라서 메서드를 바인딩 해제하거나 다시 바인딩해도 메서드의 `super` 참조는 변경되지 않습니다.([`this`](/ko/docs/Web/JavaScript/Reference/Operators/this)의 참조는 변경되지만요.) 메서드가 클로저를 생성하는 클래스 또는 객체 리터럴 범위의 변수로 `super`를 볼 수 있습니다. (그러나 위에서 설명한 것처럼 실제로는 변수가 아니라는 점에 유의하세요.)

`super`를 통해 속성을 설정할 때, 속성은 `this`에 대신 설정됩니다.

## 예제

### 클래스에서 super 사용하기

이 코드 스니펫은 [클래스 샘플](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([라이브 데모](<(https://googlechrome.github.io/samples/classes-es6/index.html)>))에서 가져왔습니다. 여기서 `super()`는 `Rectangle`과 `Square` 사이에 공통적인 생성자 부분의 중복을 피하기 위해 호출됩니다.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super가 먼저 호출되어야 합니다!

    // 여기서 Rectangle의 너비와 높이에 대해 제공된
    // length를 사용하여 부모 클래스의 생성자를 호출합니다.
    super(length, length);

    // 참고: 파생 클래스에서 'this'를 사용하려면
    // 먼저 super()를 호출해야 합니다. 이를 생략하면 참조 오류가 발생합니다.
    this.name = "Square";
  }
}
```

### super를 호출하는 정적 메서드

[정적](/ko/docs/Web/JavaScript/Reference/Classes/static) 메서드에서도 super를 호출할 수 있습니다.

```js
class Rectangle {
  static logNbSides() {
    return "I have 4 sides";
  }
}

class Square extends Rectangle {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}
Square.logDescription(); // 'I have 4 sides which are all equal'
```

### 클래스 필드 선언에서 super 접근

`super`는 클래스 필드 초기화 중에도 접근할 수 있습니다. `super`의 참조는 현재 필드가 인스턴스 필드인지 정적 필드인지에 따라 다릅니다.

```js
class Base {
  static baseStaticField = 90;
  baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField; // 90
}
```

인스턴스 필드는 생성자의 `prototype` 대신 인스턴스에 설정되므로 `super`를 사용하여 슈퍼클래스의 인스턴스 필드에 접근할 수 없습니다.

```js example-bad
class Base {
  baseField = 10;
}

class Extended extends Base {
  extendedField = super.baseField; // undefined
}
```

여기서 `baseField`는 `Base.prototype`이 아니라 `Base` 인스턴스의 자체 속성으로 정의되기 때문에 10이 아닌 `undefined`입니다. 이 맥락에서 `super`는 `Extended.prototype`의 [[Prototype]]이므로 `Base.prototype`의 속성만 조회할 수 있습니다.

### super 속성을 삭제하면 오류가 발생합니다

[`delete` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/delete)와 `super.prop` 또는 `super[expr]`를 사용하여 부모 클래스의 속성을 삭제할 수 없습니다. 삭제하면 {{jsxref("ReferenceError")}}가 발생합니다.

```js
class Base {
  foo() {}
}
class Derived extends Base {
  delete() {
    delete super.foo; // 이렇게 하면 안됩니다.
  }
}

new Derived().delete(); // ReferenceError: invalid delete involving 'super'.
```

### 객체 리터럴에서 super.prop 사용

super는 [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer) 표기법에서도 사용할 수 있습니다. 이 예제는 두 객체가 메서드 하나를 정의합니다. 두 번째 객체에서 `super`는 첫 번째 객체의 메서드를 호출합니다. 이는 `obj2`의 프로토타입을 `obj1`로 설정할 수 있는 {{jsxref("Object.setPrototypeOf()")}}의 도움으로 작동하므로 `super`는 `obj1`에서 `method1`을 찾을 수 있습니다.

```js
const obj1 = {
  method1() {
    console.log("method 1");
  },
};

const obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // "method 1"이 로그됩니다.
```

### super.prop을 읽는 메서드는 다른 객체에 바인딩될 때 다르게 동작하지 않습니다

`super.x`에 접근하는 것은 `Reflect.get(Object.getPrototypeOf(objectLiteral), "x", this)`와 같이 동작합니다. 즉, 속성은 항상 객체 리터럴/클래스 선언의 프로토타입에서 검색되고 메서드를 바인딩 해제하고 다시 바인딩해도 `super`의 참조는 변경되지 않습니다.

```js
class Base {
  baseGetX() {
    return 1;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
}

const e = new Extended();
console.log(e.getX()); // 1
const { getX } = e;
console.log(getX()); // 1
```

객체 리터럴에서도 동일하게 동작합니다.

```js
const parent1 = { prop: 1 };
const parent2 = { prop: 2 };

const child = {
  myParent() {
    console.log(super.prop);
  },
};

Object.setPrototypeOf(child, parent1);
child.myParent(); // "1"이 로그됩니다.

const myParent = child.myParent;
myParent(); // 여전히 "1"이 로그됩니다.

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // 여전히 "1"이 로그됩니다.
```

전체 상속 체인을 재설정해야만 `super`의 참조가 변경됩니다.

```js
class Base {
  baseGetX() {
    return 1;
  }
  static staticBaseGetX() {
    return 3;
  }
}
class AnotherBase {
  baseGetX() {
    return 2;
  }
  static staticBaseGetX() {
    return 4;
  }
}
class Extended extends Base {
  getX() {
    return super.baseGetX();
  }
  static staticGetX() {
    return super.staticBaseGetX();
  }
}

const e = new Extended();
// 인스턴스 상속 재설정
Object.setPrototypeOf(Extended.prototype, AnotherBase.prototype);
console.log(e.getX()); // 프로토타입 체인이 변경되었기 때문에 "1" 대신 "2"가 로그됩니다.
console.log(Extended.staticGetX()); // 정적 부분을 아직 수정하지 않았기 때문에, 여전히 "3"이 로그됩니다.
// 정적 상속 재설정
Object.setPrototypeOf(Extended, AnotherBase);
console.log(Extended.staticGetX()); // 이제 "4"가 로그됩니다.
```

### super에서 메서드 호출

`super.prop`을 함수로 호출할 때 `prop` 함수 내부의 `this` 값은 `super`가 가리키는 객체가 아니라 현재 `this`입니다. 예를 들어, `super.getName()` 호출은 코드가 `Base.getName()`과 동일한 것처럼 보이지만 `"Extended"`를 로그합니다.

```js
class Base {
  static getName() {
    console.log(this.name);
  }
}

class Extended extends Base {
  static getName() {
    super.getName();
  }
}

Extended.getName(); // "Extended" 로그
```

이는 [정적 프라이빗 속성](/ko/docs/Web/JavaScript/Reference/Classes/Private_class_fields#private_static_fields)과 상호 작용할 때 특히 중요합니다.

### super.prop을 설정하면 this 속성이 대신 설정됩니다

`super.x = 1`과 같은 `super`의 속성을 설정하는 것은 `Reflect.set(Object.getPrototypeOf(objectLiteral), "x", 1, this)`와 같이 동작합니다. 이는 `super`를 단순히 "프로토타입 객체의 참조"로 이해하는 것에 한계가 있는 이유 중 하나입니다. 실제로는 `this`에 대한 속성을 설정하기 때문이죠.

```js
class A {}
class B extends A {
  setX() {
    super.x = 1;
  }
}

const b = new B();
b.setX();
console.log(b); // B { x: 1 }
console.log(Object.hasOwn(b, "x")); // true
```

`super.x = 1`은 `A.prototype`에서 `x`의 속성 설명자를 찾습니다(그리고 거기에 정의된 setter를 호출하죠.). 하지만 `this` 값은 이 맥락에서 `b`로 설정됩니다. `target`과 `receiver`가 다른 경우에 대한 자세한 내용은 [`Reflect.set`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set)을 참조하세요.

즉, `super.prop`를 *get*하는 메서드는 일반적으로 이 맥락의 변경에 영향을 받지 않지만 `super.prop`를 *set*하는 메서드는 영향을 받을 수 있습니다.

```js example-bad
/* 위와 동일한 선언 재사용 */

const b2 = new B();
b2.setX.call(null); // TypeError: Cannot assign to read only property 'x' of object 'null'
```

그러나 `super.x = 1`은 여전히 프로토타입 객체의 속성 설명자를 참조하므로, 쓸 수 없는 속성을 다시 작성할 수 없으며 setter가 호출됩니다.

```js
class X {
  constructor() {
    // 쓸 수 없는 속성 생성
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
}

class Y extends X {
  constructor() {
    super();
  }
  foo() {
    super.prop = 2; // 값을 덮어쓸 수 없습니다.
  }
}

const y = new Y();
y.foo(); // TypeError: "prop" is read-only
console.log(y.prop); // 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [클래스](/ko/docs/Web/JavaScript/Reference/Classes)
