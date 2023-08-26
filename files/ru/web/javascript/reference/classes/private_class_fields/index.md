---
title: Приватные поля класса
slug: Web/JavaScript/Reference/Classes/Private_class_fields
---

{{JsSidebar("Classes")}}

Свойства класса по умолчанию являются общедоступными и могут быть рассмотрены или изменены вне класса. Тем не менее, есть [экспериментальное предложение](https://github.com/tc39/proposal-class-fields), позволяющее определить приватные поля класса, используя префикс хэша `#`.

## Синтаксис

```
class ClassWithPrivateField {
  #privateField
}

class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
 }
}

class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD
}
```

## Примеры

### Приватные статические поля

Приватные поля доступны в конструкторе класса изнутри самой декларации класса.

Ограничение статических переменных, вызываемых только статическими методами, все ещё сохраняется.

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

Приватные статические поля добавляются в конструктор класса во время обработки класса.

Существует ограничение по происхождению частных статических полей. Только класс, который определяет приватное статическое поле, может получить доступ к этому полю.

Это может привести к неожиданному поведению при использовании this.

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

### Приватные поля экземпляров

Приватные поля экземпляров объявляются **#имя** (произносится как "хэш нэймс"), которые идентифицируются префиксом **`#`**. `#` является частью имени, а также используется для объявления и доступа.

Инкапсуляция обеспечивается языком. Обращение к `#` именам вне области видимости является синтаксической ошибкой.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    this.#randomField = 666; // Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField === 42; // Syntax error
```

### Приватные методы

#### Приватные статические методы

Приватные статические методы

Как и их публичный эквивалент, приватные статические методы вызываются на самом классе, а не на экземплярах класса. Как и приватные статические поля, они доступны только изнутри объявления класса.

Приватные статические методы могут быть генераторами, асинхронными функциями и асинхронными функциями-генераторами.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
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

Это может привести к неожиданному поведению при его использовании **`this`**. В следующем примере `this` относится к классу `Derived` (а не к классу `Base`), когда мы пытаемся вызвать `Derived.publicStaticMethod2()`, и, таким образом, имеет такое же "ограничение по происхождению", как упоминалось выше:

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

#### Приватные методы экземпляров(instance)

Приватные методы экземпляров это методы, доступные у экземпляров класса, доступ к которым запрещён также, как у приватных полей класса.

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

Приватные методы экземпляров могут быть генератором, async, или функциями async генератора. Приватные геттеры и сеттеры также возможны:

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

## Спецификации

{{Specifications("javascript.classes")}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Public class fields](/ru/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
