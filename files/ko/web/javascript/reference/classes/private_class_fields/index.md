---
title: Private class fields
slug: Web/JavaScript/Reference/Classes/Private_class_fields
---

{{JsSidebar("Classes")}}

class 의 속성(property)들은 기본적으로 public 하며 class 외부에서 읽히고 수정될 수 있다. 하지만, ES2019 에서는 해쉬 `#` prefix 를 추가해 private class 필드를 선언할 수 있게 되었다.

## Syntax

```js
class ClassWithPrivateField {
  #privateField;
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;
}
```

## Examples

### Private static fields

private 필드는 class 선언문 내부의 class 생성자(class constructor)에서 접근이 가능하다.

static 메소드에서만 static 변수들을 호출할 수 있다는 제약은 그대로 유지된다.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

Private static 필드는 class evaluation 시 class 생성자(class constructor)에 추가된다.

Private static 필드는 해당 필드를 선언한 class 에서만 접근할 수 있다.

이는 `this` 를 사용함에 있어 예상치 못한 동작을 야기할 수 있다.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

let error = null;

try {
  SubClass.basePublicStaticMethod();
} catch (e) {
  error = e;
}

console.assert(error instanceof TypeError);
```

### Private instance fields

private 인스턴스 필드는 **# 이름 ('해쉬 이름' 으로 발음)**, 즉 `#` prefix 를 가진 식별자로 선언된다. `#` 은 그 이름 자체의 일부이며 선언과 접근 시에 모두 사용된다.

캡슐화(encapsulation) 는 언어로부터 강제된다(enforced by the language). 즉, scope 밖에서 `#` 이름에 접근하는 것은 syntax error 이다.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    this.#randomField = 444; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField === 42; // Syntax error
```

### Private Methods

#### Private static methods

**private static 메소드**는 public static 메소드처럼 인스턴스가 아닌 class 로부터 호출된다. 그리고 private static 필드처럼 class 선언문 내부에서만 접근 가능하다.

```js
private static 메소드는 generator, async 그리고 async generator 함수가 될 수 있다.

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

    console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
    console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
```

이는 `this` 를 사용할 때 예상치 못한 동작을 발생시킬 수 있다. (이는 `this` binding rule 이 적용되기 때문이다.) 다음 예시에서 `Derived.publicStaticMethod2()` 를 호출할 때, `this` 는 class `Derived` (`Base` 가 아니라) 를 가리킨다.

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

#### Private instance methods

private 인스턴스 메소드는 private 인스턴스 필드와는 다르게 class 인스턴스로부터 접근 가능하다.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return "hello world";
  }

  getPrivateMessage() {
    return this.#privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// expected output: "hello world"
```

private 인스턴스 메소드는 generator, async 그리고 async generator 함수가 될 수 있다. private getter 와 setter 또한 가능하다:

```js
class ClassWithPrivateAccessor {
  #message;

  get #decoratedMessage() {
    return `✨${this.#message}✨`;
  }
  set #decoratedMessage(msg) {
    this.#message = msg;
  }

  constructor() {
    this.#decoratedMessage = "hello world";
    console.log(this.#decoratedMessage);
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello world✨"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Public class fields](/ko/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
