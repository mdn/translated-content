---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
---

{{jsSidebar("Classes")}}

La palabra clave **extends** es usada en la [declaración](/es/docs/Web/JavaScript/Reference/Statements/class) o [expresión](/es/docs/Web/JavaScript/Reference/Operators/class) de clases, para crear una clase hija de otra.

## Sintaxis

```
class ChildClass extends ParentClass { ... }
```

## Descripción

La palabra clave `extends` se puede usar para crear una subclase a partir de clases personalizadas, así como sus objetos incorporados.

La propiedad `.prototype` de la nueva subclase debe ser un {{jsxref("Object")}} o {{jsxref("null")}}.

## Ejemplos

### Como usar `extends`

El primer ejemplo crea una clase con el nombre `Square` a partir de una clase llamada `Polygon`. Este ejemplo ha sido extraido del siguiente [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(código fuente)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class Square extends Polygon {
  constructor(length) {
    // Aquí se invoca el constructor de la clase padre con longitud
    // proporcionada por el ancho y alto de Polygon
    super(length, length);
    // Nota: En las clases extendidas, se debe llamar a super()
    // antes de poder usar 'this'. El no hacerlo provocará un reference error.
    this.name = "Square";
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.area = value;
  }
}
```

### Como usar `extends` con objetos incorporados

Este ejemplo extiende el objeto incorporado {{jsxref("Date")}}. Este ejemplo ha sido extraido del siguiente [live demo](https://googlechrome.github.io/samples/classes-es6/index.html) [(código fuente)](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

```js
class myDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      this.getDate() + "-" + months[this.getMonth()] + "-" + this.getFullYear()
    );
  }
}
```

### Extendiendo de `null`

Extender de {{jsxref("null")}} es como hacerlo de una clase normal, excepto que el objeto prototype no hereda de {{jsxref("Object.prototype")}}.

```js
class nullExtends extends null {
  constructor() {}
}

Object.getPrototypeOf(nullExtends); // Function.prototype
Object.getPrototypeOf(nullExtends.prototype); // null
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Clases](/es/docs/Web/JavaScript/Reference/Classes)
- [super](/es/docs/Web/JavaScript/Reference/Operators/super)
