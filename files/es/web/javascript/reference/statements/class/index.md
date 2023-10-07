---
title: class
slug: Web/JavaScript/Reference/Statements/class
---

{{jsSidebar("Statements")}}

La **declaración class** crea una nueva clase con el nombre proporcionado utilizando la herencia basada en prototipos

También se puede definir una clase usando una {{jsxref("Operators/class", "expresión de clase", "", 1)}}. Pero a diferencia de las expresiones de clases, la declaración de clases no permite que una clase existente sea declarada de nuevo y en caso de hacerse, lanzará un error de tipo.

## Sintaxis

```js
class name [extends] {
  // Contenido de la clase
}
```

## Descripción

De la misma manera que con las expresiones de clase, el contenido de una clase se ejecuta en [modo estricto](/es/docs/Web/JavaScript/Reference/Strict_mode).

Las declaraciones de clases no están {{Glossary("Hoisting", "izadas")}} (al contrario que las [declaraciones de funciones](/es/docs/Web/JavaScript/Reference/Statements/function)).

## Ejemplos

### Declaración sencilla de una clase

En el siguiente ejemplo, primero definimos la clase `Polygon`, luego extendemos de ella para crear la clase `Square`. Notar que `super()`, utilizado en el constructor, sólo puede ser llamado dentro del constructor y debe ser llamado antes de que la palabra clave `this` pueda ser usada.

```js
class Polygon {
  constructor(height, width) {
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(length) {
    super(length, length);
    this.name = "Square";
  }
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [`declaración de funciones`](/es/docs/Web/JavaScript/Reference/Statements/function)
- [`expresión de clases`](/es/docs/Web/JavaScript/Reference/Operators/class)
- [Clases](/es/docs/Web/JavaScript/Reference/Classes)
