---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
---

{{jsSidebar("Operadores")}}

La palabra clave `yield` se usa para pausar y reanudar una función generadora ({{jsxref("Statements/function*", "function*")}} o {{jsxref("Statements/Legacy_generator_function", "función generadora heredada")}}).

{{EmbedInteractiveExample("pages/js/expressions-yield.html", "taller")}}La fuente de este ejemplo interactivo se almacena en un repositorio de GitHub. Si deseas contribuir al proyecto de ejemplos interactivos, clona <https://github.com/mdn/interactive-examples> y envíanos una solicitud de extracción.

## Sintaxis

```
[rv] = yield [expression]
```

- `expression` {{optional_inline}}
  - : Define el valor que se devolverá desde la función generadora a través del {{jsxref("Iteration_protocols", "protocolo iterador", "#El_protocolo_iterador")}}. Si se omite, devuelve `undefined` en su lugar.
- `rv` {{optional_inline}}
  - : Recupera el valor opcional pasado al método `next()` del generador para reanudar su ejecución.

## Descripción

La palabra clave `yield` detiene la ejecución de la función del generador y el valor de la expresión que sigue a la palabra clave `yield` se devuelve al llamador del generador. Se puede considerar como una versión basada en un generador de la palabra clave `return`.

`yield` solo se puede llamar directamente desde la función generadora que la contiene. No se puede llamar desde funciones anidadas o retrollamadas.

La palabra clave `yield` hace que la llamada al método `next()` del generador devuelva un objeto `IteratorResult` con dos propiedades: `value` y `done`. La propiedad `value` es el resultado de evaluar la expresión `yield`, y `done` es `false`, lo cual indica que la función generadora no se ha completado completamente.

Una vez en pausa en una expresión `yield`, la ejecución del código del generador permanece en pausa hasta que se llama al método `next()` del generador. Cada vez que se llama al método `next()` del generador, el generador reanuda la ejecución y se ejecuta hasta que alcanza uno de los siguientes:

- Un `yield`, el cual hace que el generador vuelva a pausar y devuelva el nuevo valor del generador. La próxima vez que se llame a `next()`, la ejecución se reanudará con la instrucción inmediatamente después de `yield`.
- {{jsxref("Statements/throw", "throw")}} se usa para lanzar una excepción desde el generador. Esta detiene la ejecución del generador por completo y la ejecución se reanuda en el llamador (como suele ser el caso cuando se lanza una excepción).
- Se alcanza el final de la función generadora. En este caso, la ejecución del generador finaliza y se devuelve un `IteratorResult` al llamador en el que el `value` es {{jsxref("undefined")}} y `done` es `true`.
- Se alcanza una instrucción {{jsxref("Statements/return", "return")}}. En este caso, la ejecución del generador finaliza y se devuelve un `IteratorResult` al llamador en el que el `value` es el valor especificado por la instrucción `return` y `done` es `true`.

Si se pasa un valor opcional al método `next()` del generador, ese valor se convierte en el valor devuelto por la operación `yield` actual del generador.

Entre la ruta del código del generador, sus operadores `yield` y la capacidad de especificar un nuevo valor inicial pasándolo a {{jsxref("Generator.prototype.next()")}}, los generadores ofrecen enorme poder y control.

> **Advertencia:** Desafortunadamente, `next()` es asimétrico, pero eso no se puede evitar: siempre envía un valor al `yield` actualmente suspendido, pero devuelve el operando del siguiente `yield`.

## Ejemplos

### Usar `yield`

El siguiente código es la declaración de una función generadora de ejemplo.

```js
function* countAppleSales() {
  let saleList = [3, 7, 5];
  for (let i = 0; i < saleList.length; i++) {
    yield saleList[i];
  }
}
```

Una vez que se define una función generadora, se puede usar construyendo un iterador como el siguiente.

```js
let appleStore = countAppleSales(); // Generator { }
console.log(appleStore.next()); // { value: 3, done: false }
console.log(appleStore.next()); // { value: 7, done: false }
console.log(appleStore.next()); // { value: 5, done: false }
console.log(appleStore.next()); // { value: undefined, done: true }
```

También puedes enviar un valor con `next(value)` al generador. '`step`' se evalúa como un valor de retorno en esta sintaxis \[_rv_] = **yield** \[_expression_]

```js
function* counter(value) {
  let step;

  while (true) {
    step = yield ++value;

    if (step) {
      value += step;
    }
  }
}

const generatorFunc = counter(0);
console.log(generatorFunc.next().value); // 1
console.log(generatorFunc.next().value); // 2
console.log(generatorFunc.next().value); // 3
console.log(generatorFunc.next(10).value); // 14
console.log(generatorFunc.next().value); // 15
console.log(generatorFunc.next(10).value); // 26
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ve también

- [El protocolo `Iterator`](/es/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("Operators/yield*", "yield*")}}
