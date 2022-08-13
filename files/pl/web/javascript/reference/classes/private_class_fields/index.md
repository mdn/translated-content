---
title: Private class fields
slug: Web/JavaScript/Reference/Classes/Private_class_fields
tags:
  - Classes
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/Private_class_fields
---
{{JsSidebar("Classes")}}

Właściwości klas są domyślnie publiczne i mogą być wywoływane i modyfikowane poza klasą. Istnieje jednak [funkcjonalność eksperymentalna](https://github.com/tc39/proposal-class-fields) pozwalająca na zdefiniowanie pól prywatnych klasy przy użyciu `#` przed nazwą pola.

## Składnia

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

## Przykłady

### Prywatne pola statyczne

Pola prywatne są dostępne z poziomu konstruktora klasy ze środka ciała klasy.

Prywatne pola statyczne są tylko dostępne z poziomu statycznych metod.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)
```

Prywatne pola statyczne są dodawane do konstruktora klasy podczas wykonywania klasy.

Tylko klasa, która definiuje prywatne pola statyczne, może mieć do nich dostęp.

Może to prowadzić to nieoczekiwanego zachowania podczas używania **`this`**.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42
    return this.#PRIVATE_STATIC_FIELD
  }
}

class SubClass extends BaseClassWithPrivateStaticField { }

let error = null

try {
  SubClass.basePublicStaticMethod()
} catch(e) { error = e}

console.assert(error instanceof TypeError)
```

### Prywatne pola instancji

Prywatne pola instancji są deklarowane przy użyciu **# names** ("_hash names_"), czyli nazw poprzedzonych `#`. Znak `#` jest częścią nazwy. Jest używany do deklaracji i dostępu do właściwości.

Enkapsulacja jest wymuszona przez język. Próba dostępu do prywatnego pola poza klasą wygeneruje błąd `Syntax Error`.

```js
class ClassWithPrivateField {
  #privateField

  constructor() {
    this.#privateField = 42
    this.#randomField = 444 // Syntax error
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42 // Syntax error
```

### Prywatne metody

#### Prywatne metody statyczne

Podobnie jak ich publiczne odpowiedniki, prywatne metody statyczne są wywoływane przez samą klasę, a nie jej instancje. Podobnie jak pola prywatne, są dostępne tylko z poziomu ciała klasy.

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

console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
```

Może to prowadzić do nieoczekiwanego zachowania przy używaniu **`this`**. W poniższym przykładzie `this` odnosi się do klasy `Derived` (a nie klasy `Base`) podczas wywołania metody `Derived.publicStaticMethod2()`, co powoduje błąd.

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

#### Prywatne metody instancji

Prywatne metody instancji to metody dostępne dla instancji klasy, które mają podobne ograniczenia co prywatne pola instancji.

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
// expected output: "hello worl​d"
```

Prywatne metody mogą używać async lub być generatorami. Możliwe jest również tworzenie prywatnych getter'ów i setter'ów:

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
// expected output: "✨hello worl​d✨"
```

## Specyfikacje

| Specyfikacja                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Public and private instance fields', '#prod-FieldDefinition', 'FieldDefinition')}} |

## Kompatybilność

{{Compat("javascript.classes.private_class_fields")}}

## Zobacz też

- [Public class fields](/pl/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
