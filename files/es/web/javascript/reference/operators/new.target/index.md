---
title: new.target
slug: Web/JavaScript/Reference/Operators/new.target
---

{{JSSidebar("Operators")}}

La propiedad **`new.target`** te permite detectar si una función o constructor fue llamado usando el operador [new](/es/docs/Web/JavaScript/Referencia/Operadores/new). En constructores y funciones instanciadas con el operador [new](/es/docs/Web/JavaScript/Referencia/Operadores/new), `new.target` devuelve una referencia al constructor o función. En llamadas a funciones normales, `new.target` es {{jsxref("undefined")}}.

## Sintaxis

```
new.target
```

## Descripción

La sintaxis `new.target` consiste en el keyword `"new`", un punto, y el nombre de propiedad `"target"`. Normalmente "`new."` sirve como contexto para el acceso a la propiedad, pero aquí, `"new."` no es realmente un objeto. En llamadas a constructores, sin embargo, `new.target` hace referencia al constructor invocado por new por lo que "`new.`" se convierte en un contexto virtual.

La propiedad `new.target` es una meta propiedad que está disponible para todas las funciones. En [funciones flecha](/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions), `new.target` se refiere al `new.target` de la función que la contiene.

## Ejemplos

### new\.target en llamadas a funciones

En llamadas a funciones normales (en contraposición a llamadas a constructores), `new.target` es {{jsxref("undefined")}}. Esto te permite detectar si la función fue llamada con [new](/es/docs/Web/JavaScript/Referencia/Operadores/new) como constructor.

```js
function Foo() {
  if (!new.target) throw "Foo() debe ser llamado con new";
  console.log("Foo instanciado con new");
}

Foo(); // Lanza "Foo() debe ser llamado con new"
new Foo(); // escribe en el log "Foo instanciado con new"
```

### new\.target en constructores

En constructores de clase, `new.target` hace referencia al constructor que fue directamente invocado por `new`. Este también es el caso si el constructor está en una clase padre y fue delegado desdes el constructor hijo.

```js
class A {
  constructor() {
    console.log(new.target.name);
  }
}

class B extends A {
  constructor() {
    super();
  }
}

var a = new A(); // escribe en el log "A"
var b = new B(); // escribe en el log "B"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Funciones](/es/docs/Web/JavaScript/Guide/Funciones)
- [Clases](/es/docs/Web/JavaScript/Referencia/Classes)
- [`new`](/es/docs/Web/JavaScript/Referencia/Operadores/new)
- [`this`](/es/docs/Web/JavaScript/Reference/Operators/this)
