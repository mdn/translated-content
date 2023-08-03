---
title: Private class fields
slug: Web/JavaScript/Reference/Classes/Private_class_fields
---

Las propiedades de la clase son públicas de forma predeterminada y se pueden examinar o modificar fuera de la clase. Sin embargo, existe [una propuesta experimental](https://github.com/tc39/proposal-class-fields) para permitir la definición de campos de clase privados utilizando un `#` prefijo hash .

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

### Campos estáticos privados

Los campos privados son accesibles en el constructor de clases desde dentro de la propia declaración de clases.

La limitación de las variables estáticas que se llaman solo por métodos estáticos aún se mantiene

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

Los campos estáticos privados se agregan al constructor de la clase en el momento de la evaluación de la clase.

Existe una restricción de procedencia en los campos estáticos privados. Solo la clase que define el campo estático privado puede acceder al campo.

Esto puede conducir a un comportamiento inesperado al usar **`this`**.

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

### Campos de instancia privados

Los campos de instancia privados se declaran con **# nombres** (pronunciados " _nombres hash_ "), que son identificadores con el prefijo `#`. El `#` es una parte del nombre propio. También se utiliza para la declaración y el acceso.

La encapsulación es impuesta por el lenguaje. Es un error de sintaxis referirse a `#` nombres que están fuera del alcance.

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

### Métodos privados

#### Métodos estáticos privados

Al igual que su equivalente público, los métodos estáticos privados se invocan en la propia clase, no en instancias de la clase. Al igual que los campos estáticos privados, solo se puede acceder a ellos desde dentro de la declaración de clase.

Los métodos estáticos privados pueden ser funciones generadoras, asíncronas y asíncronas.

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

Esto puede conducir a un comportamiento inesperado al usar **`this`**. En el siguiente ejemplo se `this` hace referencia a la `Derived` clase (no a la `Base` clase) cuando intentamos llamar `Derived.publicStaticMethod2()`, y por lo tanto exhibe la misma "restricción de procedencia" que se mencionó anteriormente:

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

#### Métodos de instancia privada

Los métodos de instancia privada son métodos disponibles en instancias de clase cuyo acceso está restringido de la misma manera que los campos de instancia privada.

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

Los métodos de instancia privada pueden ser funciones generadoras, asíncronas o asíncronas. Los getters y setters privados también son posibles:

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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [Public class fields](/es/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
