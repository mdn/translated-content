---
title: super
slug: Web/JavaScript/Reference/Operators/super
---

{{jsSidebar("Operators")}}

La palabra clave **super** es usada para acceder y llamar funciones del padre de un objeto.

Las expresiones `super.prop` y `super[expr]` son válidas en cualquier [definición de método](/es/docs/Web/JavaScript/Reference/Functions/Method_definitions) tanto para [clases](/es/docs/Web/JavaScript/Reference/Classes) como para [objetos literales](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Sintaxis

```
// llama al método constructor del objeto padre.
super([arguments]);

// llama cualquier otro método del objeto padre.
super.functionOnParent([arguments]);
```

## Descripción

Cuando es usado en un constructor, la palabra clave `super` aparece sola lo cual invoca el constructor del objeto padre. En este caso debe usarse antes de que la palabra clave `this` sea usada. La palabra clave `super` también puede utilizarse para llamar otras funciones del objeto padre.

## Ejemplo

### Usando `super` en clases

Este fragmento de código se toma del [ejemplo de clases](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) ([demo en vivo](https://googlechrome.github.io/samples/classes-es6/index.html)). Aquí se llama a `super()` para evitar la duplicación de las partes del constructor que son comunes entre `Rectangle` y `Square`.

```js
class Rectangle {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this.height = this.width = Math.sqrt(value);
  }
}

class Square extends Rectangle {
  constructor(length) {
    this.height; // ReferenceError, super necesita ser llamado primero!

    // Aquí, llama al constructor de la clase padre con las longitudes
    // previstas para el ancho y la altura de Rectangle
    super(length, length);

    // Nota: En las clases derivadas, se debe llamar a super() antes de
    // poder usar 'this'. Salir de esto provocará un error de referencia.
    this.name = "Square";
  }
}
```

### Super-llamando a métodos estáticos

También puede llamar a super en métodos estáticos.

```js
class Rectangle {
  constructor() {}
  static logNbSides() {
    return "Tengo 4 lados";
  }
}

class Square extends Rectangle {
  constructor() {}
  static logDescription() {
    return super.logNbSides() + " que son todos iguales";
  }
}
Square.logDescription(); // 'Tengo 4 lados que son todos iguales'
```

### Eliminar propiedades `super` generará un error

No puede usar el [operador de eliminación](/es/docs/Web/JavaScript/Reference/Operators/delete) y `super.prop` o `super[expr]` para eliminar la propiedad de una clase principal, lanzará {{jsxref("ReferenceError")}}.

```js
class Base {
  constructor() {}
  foo() {}
}
class Derived extends Base {
  constructor() {}
  delete() {
    delete super.foo; // esto es malo
  }
}

new Derived().delete(); // ReferenceError: eliminación no válida que implica 'super'.
```

### `super.prop` no puede sobrescribir las propiedades no modificables

Al definir propiedades que no se pueden escribir, p. Ej. {{jsxref("Object.defineProperty")}}, `super` no puede sobrescribir el valor de la propiedad.

```js
class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1,
    });
  }
  f() {
    super.prop = 2;
  }
}

var x = new X();
x.f(); // TypeError: "prop" es de solo lectura
console.log(x.prop); // 1
```

### Usando `super.prop` en objetos literales

Super también se puede usar en el [inicializador de objetos / notación literal](/es/docs/Web/JavaScript/Reference/Operators/Object_initializer). En este ejemplo, dos objetos definen un método. En el segundo objeto, `super` llama al primer método del objeto. Esto funciona con la ayuda de {{jsxref("Object.setPrototypeOf()")}} con el que podemos establecer el prototipo de `obj2` en `obj1`, de modo que `super` pueda encontrar el `method1` en `obj1`.

```js
var obj1 = {
  method1() {
    console.log("method 1");
  },
};

var obj2 = {
  method2() {
    super.method1();
  },
};

Object.setPrototypeOf(obj2, obj1);
obj2.method2(); // logs "method 1"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Clases](/es/docs/Web/JavaScript/Reference/Classes)
