---
title: Class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
original_slug: Web/JavaScript/Reference/Classes/Class_fields
---

{{JsSidebar("Classes")}}

> **note: This page describes experimental features.** Both Public and private field declarations are an [experimental feature (stage 3)](https://github.com/tc39/proposal-class-fields) proposed at [TC39](https://tc39.github.io/beta/), the JavaScript standards committee. Support in browsers is limited, but the feature can be used through a build step with systems like [Babel](https://babeljs.io/). See the [compat information](#Browser_compatibility) below.

## Public fields

static fields와 instance의 public fields 는 둘 다 writable, enumerable, configurable 한 프로퍼티들이다. 예를들면, 정 반대인 private 과는 다르게, unlike their private counterparts, static fields는 프로토타입 상속에 관여한다.

### Public static fields

Public static fields 는 클래스에서 생성하는 모든 인스턴스에 대한 필드가 아닌, 클래스마다 단 한개의 필드가 존재하기를 원할 때 유용하게 사용할 수 있다. Public fields는 캐시, 고정된 설정값, 또는 인스턴스 간 복제할 필요가 없는 어떤 데이터 등에 유용하게 쓰일 수 있다.

Public static fields are declared using the `static` keyword. They are added to the class constructor at the time of class evaluation using {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. They are accessed again from the class constructor.

```js
class ClassWithStaticField {
  static staticField = 'static field'
}

console.log(ClassWithStaticField.staticField)
// expected output: "static field"
```

Fields without initializers are initialized to `undefined`.

```js
class ClassWithStaticField {
  static staticField
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'))
console.log(ClassWithStaticField.staticField)
// expected output: "undefined"
```

Public static fields are not reinitialized on subclasses, but can be accessed via the prototype chain.

```js
class ClassWithStaticField {
  static baseStaticField = 'base field'
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = 'sub class field'
}

console.log(SubClassWithStaticField.subStaticField)
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField)
// expected output: "base field"
```

When initializing fields, `this` refers to the class constructor. You can also reference it by name, and use `super` to get the superclass constructor (if one exists).

```js
class ClassWithStaticField {
  static baseStaticField = 'base static field'
  static anotherBaseStaticField = this.baseStaticField

  static baseStaticMethod() { return 'base static method output' }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod()
}

console.log(ClassWithStaticField.anotherBaseStaticField)
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField)
// expected output: "base static method output"
```

### Public instance fields

Public instance fields exist on every created instance of a class. By declaring a public field, you can ensure the field is always present, and the class definition is more self-documenting.

Public instance fields are added with {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} either at construction time in the base class (before the constructor body runs), or just after `super()` returns in a subclass.

```js
class ClassWithInstanceField {
  instanceField = 'instance field'
}

const instance = new ClassWithInstanceField()
console.log(instance.instanceField)
// expected output: "instance field"
```

Fields without initializers are initialized to `undefined`.

```js
class ClassWithInstanceField {
  instanceField
}

const instance = new ClassWithInstanceField()
console.assert(instance.hasOwnProperty('instanceField'))
console.log(instance.instanceField)
// expected output: "undefined"
```

Like properties, field names may be computed.

```js
const PREFIX = 'prefix'

class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'prefixed field'
}

const instance = new ClassWithComputedFieldName()
console.log(instance.prefixField)
// expected output: "prefixed field"
```

When initializing fields `this` refers to the class instance under construction. Just as in public instance methods, if you're in a subclass you can access the superclass prototype using `super`.

```js
class ClassWithInstanceField {
  baseInstanceField = 'base field'
  anotherBaseInstanceField = this.baseInstanceField
  baseInstanceMethod() { return 'base method output' }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod()
}

const base = new ClassWithInstanceField()
const sub = new SubClassWithInstanceField()

console.log(base.anotherBaseInstanceField)
// expected output: "base field"

console.log(sub.subInstanceField)
// expected output: "base method output"
```

## Public methods

### Public static methods

The **`static`** keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

{{EmbedInteractiveExample("pages/js/classes-static.html")}}

The static methods are added to the class constructor with {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} at class evaluation time. These methods are writable, non-enumerable, and configurable.

### Public instance methods

As the name implies, public instance methods are methods available on class instances.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}

const instance = new ClassWithPublicInstanceMethod()
console.log(instance.publicMethod())
// expected output: "hello world"
```

Public instance methods are added to the class prototype at the time of class evaluation using {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. They are writable, non-enumerable, and configurable.

You may make use of generator, async, and async generator functions.

```js
class ClassWithFancyMethods {
  *generatorMethod() { }
  async asyncMethod() { }
  async *asyncGeneratorMethod() { }
}
```

Inside instance methods, `this` refers to the instance itself. In subclasses, `super` lets you access the superclass prototype, allowing you to call methods from the superclass.

```js
class BaseClass {
  msg = 'hello world'
  basePublicMethod() {
    return this.msg
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod()
  }
}

const instance = new SubClass()
console.log(instance.subPublicMethod())
// expected output: "hello world"
```

Getters and setters are special methods that bind to a class property and are called when that property is accessed or set. Use the [get](/en-US/docs/Web/JavaScript/Reference/Functions/get) and [set](/en-US/docs/Web/JavaScript/Reference/Functions/set) syntax to declare a public instance getter or setter.

```js
class ClassWithGetSet {
  #msg = 'hello world'
  get msg() {
    return this.#msg
  }
  set msg(x) {
    this.#msg = `hello ${x}`
  }
}

const instance = new ClassWithGetSet()
console.log(instance.msg)
// expected output: "hello world"

instance.msg = 'cake'
console.log(instance.msg)
// expected output: "hello cake"
```

## Private fields

### Private static fields

Private fields are accessible on the class constructor from inside the class declaration itself.

The limitation of static variables being called by only static methods still holds.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}

assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)
```

Private static fields are added to the class constructor at class evaluation time.

There is a provenance restriction on private static fields. Only the class which defines the private static field can access the field.

This can lead to unexpected behaviour when using **`this`**.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42
    return this.#PRIVATE_STATIC_FIELD
  }
}

class SubClass extends BaseClassWithPrivateStaticField { }

assertThrows(() => SubClass.basePublicStaticMethod(), TypeError)
```

### Private instance fields

Private instance fields are declared with **# names** (pronounced "_hash names_"), which are identifiers prefixed with `#`. The `#` is a part of the name itself. It is used for declaration and accessing as well.

The encapsulation is enforced by the language. It is a syntax error to refer to `#` names from out of scope.

```js
class ClassWithPrivateField {
  #privateField

  constructor() {
    this.#privateField = 42
    this.#randomField = 666 // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42 // Syntax error
```

## Private Methods

### Private static methods

Like their public equivalent, private static methods are called on the class itself, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.

Private static methods may be generator, async, and async generator functions.

```js
class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 42
    }

    static publicStaticMethod1() {
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }

    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

assert(ClassWithPrivateStaticField.publicStaticMethod1() === 42);
assert(ClassWithPrivateStaticField.publicStaticMethod2() === 42);
```

This can lead to unexpected behaviour when using **`this`**(because `this` binding rule applies).

```js
class Base {
    static #privateStaticMethod() {
        return 42;
    }
    static publicStaticMethod1() {
        return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1()); // 42
console.log(Derived.publicStaticMethod2()); // TypeError
```

### Private instance methods

Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }

  getPrivateMessage() {
      return this.#privateMethod()
  }
}

const instance = new ClassWithPrivateMethod()
console.log(instance.getPrivateMessage())
// expected output: "hello world"
```

Private instance methods may be generator, async, or async generator functions. Private getters and setters are also possible:

```js
class ClassWithPrivateAccessor {
  #message

  get #decoratedMessage() {
    return `✨${this.#message}✨`
  }
  set #decoratedMessage(msg) {
    this.#message = msg
  }

  constructor() {
    this.#decoratedMessage = 'hello world'
    console.log(this.#decoratedMessage)
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello world✨"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
