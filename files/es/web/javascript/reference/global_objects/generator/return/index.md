---
title: Generator.prototype.return()
slug: Web/JavaScript/Reference/Global_Objects/Generator/return
---

{{JSRef}}

El método **`return()`** regresa el valor dado y finaliza al generador.

## Sintaxis

```
gen.return(valor)
```

### Parámetros

- `valor`
  - : El valor a regresar.

### Valor de retorno

El valor dado como argumento.

## Ejemplos

### Utilizando `return()`

El siguiente ejemplo muestra un generador simple y su método `return`.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next(); // { value: 1, done: false }
g.return("foo"); // { value: "foo", done: true }
g.next(); // { value: undefined, done: true }
```

Si `return(valor)` es invocado en un generador que ya está en su estado "completado", el generador permanecerá en estado "completado". Si no se da ningún argumento, el objeto regresado es el mismo a que si se invocara `.next()`. Si se da un argumento, éste se asignará como valor en la propiedad `value` del objeto regresado.

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: false }
g.next(); // { value: undefined, done: true }
g.return(); // { value: undefined, done: true }
g.return(1); // { value: 1, done: true }
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Sentencias/function*","function*")}}
