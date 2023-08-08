---
title: Generator.prototype.next()
slug: Web/JavaScript/Reference/Global_Objects/Generator/next
---

{{JSRef}}

El método **`next()`** regresa un objeto con las propiedades `done` y `value`. También puedes pasar un parámetro al método `next` para enviar un valor al generador.

## Sintaxis

```
gen.next(valor)
```

### Parámetros

- `valor`
  - : El valor a enviar al generador.

### Valor de retorno

Un {{jsxref("Object")}} con dos propiedades:

- `done` (booleano)

  - Es `verdadero` si el iterador ya llegó al final de la secuencia. En este caso `valor` define opcionalmente el _valor de retorno_ del iterador.
  - Es `falso` si el iterador puede dar un siguiente valor en la secuencia. Es equivalente a no definir la propiedad `done`.

- `value` - cualquier valor Javascript regresado por el iterador. Éste puede ser omitido si `done` is `verdadero`.

## Examples

### Using `next()`

The following example shows a simple generator and the object that the `next` method returns:

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
g.next(); // "Object { value: 1, done: false }"
g.next(); // "Object { value: 2, done: false }"
g.next(); // "Object { value: 3, done: false }"
g.next(); // "Object { value: undefined, done: true }"
```

### Sending values to the generator

In this example, `next` is called with a value. Note that the first call did not log anything, because the generator was not yielding anything initially.

```js
function* gen() {
  while (true) {
    var value = yield null;
    console.log(value);
  }
}

var g = gen();
g.next(1);
// "{ value: null, done: false }"
g.next(2);
// 2
// "{ value: null, done: false }"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [`function*`](/es/docs/Web/JavaScript/Reference/Statements/function*)
- [Iterators and generators](/es/docs/Web/JavaScript/Guide/Iterators_and_Generators)
