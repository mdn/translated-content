---
title: expresión class
slug: Web/JavaScript/Reference/Operators/class
---

{{jsSidebar("Operators")}}

La **expresión class** es una forma de definir una clase en ECMAScript 2015 (ES6). Similar a las [funciones](/es/docs/Web/JavaScript/Referencia/Operadores/function), las expresiones de clase pueden ser nombradas o no. Si se nombran, el nombre de la clase es local sólo en el cuerpo de la clase. Las clases en JavaScript utilizan herencia basada en prototipos.

## Sintaxis

```
var MyClass = class [className] [extends] {
  // class body
};
```

## Descripción

Una expresión de clase tiene una sintaxis similar a la [declaración de una clase](/es/docs/Web/JavaScript/Referencia/Sentencias/class). Sin embargo, con las expresiones de clases, está permitido omitir el nombre de la clase ("identificador de enlace"), cosa que no se puede hacer con las declaraciones de clases. Además, las expresiones de clases permiten redefinir/redeclarar clases y **no lanzar** ningún tipo de error como las [declaraciones de clases](/es/docs/Web/JavaScript/Referencia/Sentencias/class). La propiedad `constructor` es opcional. Y el _typeof_ de las clases generadas con esta palabra clave siempre será "function".

Tal y como en la declaración de clases, el cuerpo de la expresión de clase se ejecuta en [modo estricto](/es/docs/Web/JavaScript/Referencia/Modo_estricto).

```js
"use strict";
var Foo = class {}; // la propiedad constructor es opcional
var Foo = class {}; // Se permite repetir declaraciones

typeof Foo; // devuelve "function"
typeof class {}; // devuelve "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {} // Lanza TypeError, no permite volver a declararla
```

## Ejemplo

### Una clase sencilla

Esta es una sencilla expresión de clase anónima a la que se puede hacer referencia utilizando la variable "Foo".

```js
var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"
```

### Expresiones de clase con nombre

Si se quiere hacer referencia a la clase actual dentro del cuerpo de la clase, se puede crear una expresión de clase con nombre. Este nombre sólo será visible en el mismo contexto de la expresión de clase.

```js
var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
};
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo no está definido
Foo.name; // "NamedFoo"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [expresión `function`](/es/docs/Web/JavaScript/Referencia/Operadores/function)
- [`declaración class`](/es/docs/Web/JavaScript/Referencia/Sentencias/class)
- [Clases](/es/docs/Web/JavaScript/Referencia/Classes)
