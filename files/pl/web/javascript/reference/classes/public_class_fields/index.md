---
title: Public class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
tags:
  - Classes
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/Public_class_fields
---
{{JsSidebar("Classes")}}

> **Note:** **Ta strona opisuje funkcjonalności eksperymentalne**Deklaracje pól publicznych i prywatnych są [funkcjonalnościami eksperymentalnymi (stage 3)](https://github.com/tc39/proposal-class-fields) zaproponowanymi na [TC39](https://tc39.github.io/beta/).Wsparcie przeglądarek jest ograniczone, ale ta funkcjonalność może być używana przy użyciu systemów takich jak [Babel](https://babeljs.io/). Zobacz [tabelę kompatybilności](#Kompatybilność) poniżej.

Zarówno statyczne, jak i instancyjne pola publiczne są właściwościami zapisywalnymi, wyliczalnymi i konfigurowalnymi. W przeciwieństwie do ich prywatnych odpowiedników uczestniczą w dziedziczeniu prototypów.

## Składnia

    class ClassWithInstanceField {
      instanceField = 'instance field'
    }

    class ClassWithStaticField {
      static staticField = 'static field'
    }

    class ClassWithPublicInstanceMethod {
      publicMethod() {
        return 'hello world'
      }
    }

## Przykłady

### Publiczne pola statyczne

Publiczne pola statyczne są użyteczne, gdy chcesz, aby pole istniało tylko raz dla danej klasy, a nie dla każdej tworzonej instancji klasy. Jest to użyteczne w przypadku cache'ów, stałej konfiguracji lub innych danych, które nie muszą być replikowane na wszystkich instancjach.

Publiczne pola statyczne są deklarowane z użyciem słowa kluczowego `static`. Są dodawane do konstruktora klasy podczas jej wykonywania z użyciem {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. Są one dostępne z poziomu konstruktora klasy.

```js
class ClassWithStaticField {
  static staticField = 'static field'
}

console.log(ClassWithStaticField.staticField)
// expected output: "static field"​
```

Pola bez inicjalizatorów są ustawiane na `undefined`.

```js
class ClassWithStaticField {
  static staticField
}

console.assert(ClassWithStaticField.hasOwnProperty('staticField'))
console.log(ClassWithStaticField.staticField)
// expected output: "undefined"
```

Publiczne pola statyczne nie są inicjalizowane ponownie w podklasach, ale można uzyskać do nich dostęp przez łańcuch prototypów.

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

Przy inicjalizacji pól, `this` odnosi się do konstruktora klasy. Można się również odwołać przez nazwę i użyć `super` do otrzymania konstruktora klasy nadrzędnej (jeżeli istnieje).

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

### Publiczne pola instancyjne

Publiczne pola instancyjne istnieją na każdej utworzonej instancji danej klasy. Poprzez zadeklarowanie pola publicznego, można zapewnić, że pole jest zawsze obecne, a definicja klasy jest bardziej samodokumentująca.

Publiczne pola instancyjne są dodawane przy użyciu {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} podczas wykonywania konstruktora klasy, lub po wywołaniu metody `super()`.

```js
class ClassWithInstanceField {
  instanceField = 'instance field'
}

const instance = new ClassWithInstanceField()
console.log(instance.instanceField)
// expected output: "instance field"
```

Pola bez inicjalizatorów są ustawiane na `undefined`.

```js
class ClassWithInstanceField {
  instanceField
}

const instance = new ClassWithInstanceField()
console.assert(instance.hasOwnProperty('instanceField'))
console.log(instance.instanceField)
// expected output: "undefined"
```

Podobnie jak właściwości, nazwy pól mogą być obliczane.

```js
const PREFIX = 'prefix'

class ClassWithComputedFieldName {
    [`${PREFIX}Field`] = 'prefixed field'
}

const instance = new ClassWithComputedFieldName()
console.log(instance.prefixField)
// expected output: "prefixed field"
```

Przy inicjalizacji pól `this` odnosi się do instancji klasy. Tak jak w publicznych metodach instancji, można odnieść się do klasy nadrzędnej, używając `super`.

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

### Publiczne metody

#### Publiczne metody statyczne

Słowo kluczowe **`static`** definiuje metodę statyczną dla klasy. Metody statyczne nie są wywoływane na instancjach klasy, ale na samej klasie. Są to często funkcje użytkowe, takie jak funkcje tworzenia lub klonowania obiektów.

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return 'static method has been called.';
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

Metody statyczne są dodawane do konstruktora klasy z użyciem {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} podczas wykonania klasy. Te metody są zapisywalne, niewyliczalne i konfigurowalne.

#### Publiczne metody instancyjne

Jak nazwa wskazuje, publiczne metody instancji to metody dostępne na instancjach klasy.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return 'hello world'
  }
}

const instance = new ClassWithPublicInstanceMethod()
console.log(instance.publicMethod())
// expected output: "hello worl​d"
```

Publiczne metody instancji są dodawane do prototypu klasy z użyciem {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}} podczas wykonania klasy. Te metody są zapisywalne, niewyliczalne i konfigurowalne.

Publiczne metody mogą używać async lub być generatorami.

```js
class ClassWithFancyMethods {
  *generatorMethod() { }
  async asyncMethod() { }
  async *asyncGeneratorMethod() { }
}
```

Wewnątrz metod instancji, `this` odnosi się do samej instancji. W podklasach można użyć `super` do dostępu do prototypu klasy nadrzędnej, umożliwiając wywoływanie metod tej klasy.

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
// expected output: "hello worl​d"
```

Getter'y i setter'y to specjalne metody, które wiążą się z właściwością danej klasy i są wywoływane, gdy właściwość jest odczytywana lub modyfikowana. Do tworzenia getter'ów i setter'ów należy użyć [get](/pl/docs/Web/JavaScript/Reference/Functions/get) and [set](/pl/docs/Web/JavaScript/Reference/Functions/set).

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
// expected output: "hello worl​d"

instance.msg = 'cake'
console.log(instance.msg)
// expected output: "hello cake"
```

## Specyfikacje

| Specyfikacja                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Public and private instance fields', '#prod-FieldDefinition', 'FieldDefinition')}} |

## Kompatybilność

{{Compat("javascript.classes.public_class_fields")}}

## Zobacz też

- [Private class fields](/pl/docs/Web/JavaScript/Reference/Classes/Private_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
