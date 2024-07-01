---
title: Class fields
slug: Web/JavaScript/Reference/Classes/Public_class_fields
---

{{JsSidebar("Classes")}}

> **Nota:** Las declaraciones de campos públicos y privados son una [característica experimental (en estado 3)](https://github.com/tc39/proposal-class-fields) propuesta por el [TC39](https://tc39.github.io/beta/), el comite de estandares de JavaScript. El soporte y funcionamiento en navegadores es limitado, pero la funcionalidad puede ser usada a través de un paso durante el proceso del build por medio de sistemas como [Babel](https://babeljs.io/). Revise [compat information](#Browser_compatibility) mas abajo.

Los campos públicos y estáticos son propieades editables, enumerables, y configurables. A diferencia de su contraparte privada, estos participan en la herencia de prototipo.

## Sintaxis

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

class ClassWithStaticField {
  static staticField = "static field";
}

class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}
```

## Ejemplos

### Campos públicos estáticos

Los campos estáticos públicos son útiles cuando desea que exista un campo solo una vez por clase, no en cada instancia de clase que cree. Esto es útil para cachés, configuración fija o cualquier otro dato que no necesite replicarse en todas las instancias.

Los campos estáticos públicos se declaran utilizando la palabra clave `static`. Se agregan al constructor de la clase en el momento de la evaluación de la clase utilizando {{jsxref("Global_Objects/Object/defineProperty", "Object.defineProperty()")}}. Se accede nuevamente desde el constructor de la clase.

```js
class ClassWithStaticField {
  static staticField = "static field";
}

console.log(ClassWithStaticField.staticField);
// expected output: "static field"
```

Campos sin inicializadores son inicializados como `undefined`.

```js
class ClassWithStaticField {
  static staticField;
}

console.assert(ClassWithStaticField.hasOwnProperty("staticField"));
console.log(ClassWithStaticField.staticField);
// expected output: "undefined"
```

Los campos estáticos públicos no se reinicializan en las subclases, pero se puede acceder a ellos a través de la cadena de prototipo.

```js
class ClassWithStaticField {
  static baseStaticField = "base field";
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = "sub class field";
}

console.log(SubClassWithStaticField.subStaticField);
// expected output: "sub class field"

console.log(SubClassWithStaticField.baseStaticField);
// expected output: "base field"
```

Cuando se inicializasn campos `this` se refiere al constuctor de clase. Tambien puede ser referenciado por nombre, y se puede usar `super` para obtener el constructor de la superclase si lo tiene.

```js
class ClassWithStaticField {
  static baseStaticField = "base static field";
  static anotherBaseStaticField = this.baseStaticField;

  static baseStaticMethod() {
    return "base static method output";
  }
}

class SubClassWithStaticField extends ClassWithStaticField {
  static subStaticField = super.baseStaticMethod();
}

console.log(ClassWithStaticField.anotherBaseStaticField);
// expected output: "base static field"

console.log(SubClassWithStaticField.subStaticField);
// expected output: "base static method output"
```

### Campos de instancia públicos

Los campos de instancia públicos existen en cada instancia de la clase que se ha creado. Al declarar un campo publico podemos asegurarnos que dicho campo siempre esta presente, y la definicion de la clase esta auto-documentada.

Los campos de instancia públicos son agregados with [Object.defineProperty](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) ya sea a la hora de ser construido en la clase base (antes que el metodo constructor corra), o justo despues que `super()` returne en una subclase.

```js
class ClassWithInstanceField {
  instanceField = "instance field";
}

const instance = new ClassWithInstanceField();
console.log(instance.instanceField);
// expected output: "instance field"
```

Campos sin inicializadores son inicilizados en `undefined`.

```js
class ClassWithInstanceField {
  instanceField;
}

const instance = new ClassWithInstanceField();
console.assert(instance.hasOwnProperty("instanceField"));
console.log(instance.instanceField);
// expected output: "undefined"
```

Al igual que las propiedades, los nombres de campos pueden ser calculados (computed)

```js
const PREFIX = "prefix";

class ClassWithComputedFieldName {
  [`${PREFIX}Field`] = "prefixed field";
}

const instance = new ClassWithComputedFieldName();
console.log(instance.prefixField);
// expected output: "prefixed field"
```

Cuando se inicializan campos `this` se refiere a la instancia de clase que esta siendo construida. Al igual que con los metodos publicos de instancia, si usted esta en una subclase puede acceder a al prototypo de la superclase usando `super`.

```js
class ClassWithInstanceField {
  baseInstanceField = "base field";
  anotherBaseInstanceField = this.baseInstanceField;
  baseInstanceMethod() {
    return "base method output";
  }
}

class SubClassWithInstanceField extends ClassWithInstanceField {
  subInstanceField = super.baseInstanceMethod();
}

const base = new ClassWithInstanceField();
const sub = new SubClassWithInstanceField();

console.log(base.anotherBaseInstanceField);
// expected output: "base field"

console.log(sub.subInstanceField);
// expected output: "base method output"
```

### Métodos públicos

#### Métodos públicos estáticos

La palabra reservada **`static`** define un metodo estático para una clase. Los métodos estáticos no son llamads usando una instancia de la clase. En lugar de eso son llamados sobre la clase como tal. Estos metodos estáticos son frecuentemente funciones utilitarias que permiten por ejemplo la creación y clonacion de objetos.

```js
class ClassWithStaticMethod {
  static staticMethod() {
    return "static method has been called.";
  }
}

console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
```

Los métodos estáticos son agregados al constructor de la clase usando [Object.defineProperty](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) duranten el evaluación de la clase. Estos metodos son "escribibles" (writable), no-enumerables y configurables.

#### Métodos públicos de instancia

Como su nombre lo indica, los métodos publicos de instancia son metodos que estan disponibles para cualquier instancia de una clase.

```js
class ClassWithPublicInstanceMethod {
  publicMethod() {
    return "hello world";
  }
}

const instance = new ClassWithPublicInstanceMethod();
console.log(instance.publicMethod());
// expected output: "hello world"
```

Los métodos públicos de instancia son agregeados al prototipo de clase durante la evaluacón de la clase usando [Object.defineProperty](/es/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Estos metodos son "escribibles" (writable), no-enumerables y configurables.

Usted puede usar un generador, async y funciones generadoras asincronas

```js
class ClassWithFancyMethods {
  *generatorMethod() {}
  async asyncMethod() {}
  async *asyncGeneratorMethod() {}
}
```

Dentro de un metodo de instancia, `this` se referie a la instancia como tal. En las subclases, `super` le permite acceder el prototipo de la superclase, permitiendo así llamar métodos de la superclase.

```js
class BaseClass {
  msg = "hello world";
  basePublicMethod() {
    return this.msg;
  }
}

class SubClass extends BaseClass {
  subPublicMethod() {
    return super.basePublicMethod();
  }
}

const instance = new SubClass();
console.log(instance.subPublicMethod());
// expected output: "hello world"
```

Existen metodos especiales llamados "Getters" y "Setters" que se vinculan a una propiedad de una clase, y que son ejecutados o llamados cuando esa propiedad es consultada o moditficada. Puede usar las palabras reservaddas [get](/es/docs/Web/JavaScript/Reference/Functions/get) y [set](/es/docs/Web/JavaScript/Reference/Functions/set) para declarar una instancia pública de "getter" or "setter". [N.T. preferí decir Getter/Setter que decir Consultadores/Mofificadores]

```js
class ClassWithGetSet {
  #msg = "hello world";
  get msg() {
    return this.#msg;
  }
  set msg(x) {
    this.#msg = `hello ${x}`;
  }
}

const instance = new ClassWithGetSet();
console.log(instance.msg);
// expected output: "hello world"

instance.msg = "cake";
console.log(instance.msg);
// expected output: "hello cake"
```

## Campos privados

### Campos privados estáticos

Private fields are accessible on the class constructor from inside the class declaration itself.

The limitation of static variables being called by only static methods still holds.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42;
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD;
  }
}

assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

Private static fields are added to the class constructor at class evaluation time.

There is a provenance restriction on private static fields. Only the class which defines the private static field can access the field. This can lead to unexpected behaviour when using **`this`**

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD;

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42;
    return this.#PRIVATE_STATIC_FIELD;
  }
}

class SubClass extends BaseClassWithPrivateStaticField {}

assertThrows(() => SubClass.basePublicStaticMethod(), TypeError);
```

### Campos privados de instancia

Private instance fields are declared with **# names** ( pronounced "hash names"), which are identifiers prefixed with #. The # is a part of the name itself and is used for declaration and accessing as well.

The encapsulation is enforced by the language. It is a syntax error to refer to # names not in scope.

```js
class ClassWithPrivateField {
  #privateField;

  constructor() {
    this.#privateField = 42;
    this.#randomField = 666; # Syntax error
  }
}

const instance = new ClassWithPrivateField();
instance.#privateField === 42; // Syntax error
```

## Métodos privados

### Métodos privados estáticos

Like their public equivalent, private static methods are called on the class, not instances of the class. Like private static fields, they are only accessible from inside the class declaration.

Private static methods may be generator, async and async generator functions.

```js
class ClassWithPrivateStaticMethod {
  static #privateStaticMethod() {
    return 42;
  }

  static publicStaticMethod() {
    return ClassWithPrivateStaticMethod.#privateStaticMethod();
  }
}

assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);
```

### Métodos privados de instancia

Private instance methods are methods available on class instances whose access is restricted in the same manner as private instance fields.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
      return #privateMethod();
  }
}

const instance = new ClassWithPrivateMethod();
console.log(instance.getPrivateMessage());
// expected output: "hello world"
```

Private instance methods may be generator, async or async generator functions. Private getters and setters are also possible:

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

## Ver también

- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
