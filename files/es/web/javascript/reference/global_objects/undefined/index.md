---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
---

{{jsSidebar("Objects")}}

## Resumen

La propiedad global **undefined** representa el valor primitivo `{{Glossary("Undefined", "undefined")}}`. Es uno de los {{Glossary("Primitive", "valores primitivos")}} de JavaScript.

{{EmbedInteractiveExample("pages/js/globalprops-undefined.html")}}

## Valor

El valor primitivo `{{Glossary("Undefined", "undefined")}}`.

{{js_property_attributes(0,0,0)}}

## Descripción

`undefined` es una propiedad del _objeto global_, es decir, una variable de alcance global.

En navegadores modernos (JavaScript 1.8.5 / Firefox 4+), `undefined` es una propiedad _no-configurable_, _no-grabable_ según la especificación ECMAScript 5. Aún cuando este no sea el caso, evite sobreescribirlo.

Una variable a la que no se le ha asignado valor es de tipo `undefined`. Un método o sentencia también devuelve `undefined` si la variable que se está evaluando no tiene asignado un valor. Una función devuelve `undefined` si no se ha {{jsxref("Sentencias/return", "devuelto")}} un valor.

> **Nota:** Aunque es posible usarlo como un {{Glossary("Identifier", "identificador")}} (nombre de variable) en cualquier otro ámbito que no sea el ámbito global (porque `undefined` no es una {{jsxref("Reserved_Words", "palabra reservada")}}), hacerlo es una mala idea que provocará que tú código sea difícil de mantener y depurar.
>
> ```js example-bad
> //NO HAGAS ESTO
>
> (() => {
>   const undefined = "foo";
>   console.log(undefined, typeof undefined);
> })()(
>   // foo string
>
>   // registra "foo string"
>   (undefined) => {
>     console.log(undefined, typeof undefined); // foo string
>   },
> )("foo");
> ```

## Ejemplos

### Igualdad estricta y `undefined`

Puedes usar `undefined` y los operadores de igualdad y desigualdad estricta para determinar si una variable tiene un valor asignado. En el siguiente ejemplo la variable `x` no está inicializada, y la sentencia `if` se evalúa como verdadera.

```js
let x;
if (x === undefined) {
  // se ejecutan estas instrucciones
} else {
  // estas instrucciones no se ejecutan
}
```

> **Nota:** Aquí se debe usar el operador de igualdad estricta en lugar del operador de igualdad estándar, ya que `x == undefined` también verifica si `x` es `null`, mientras que el de igualdad estricta no. `null` no es equivalente a `undefined`. Vea {{jsxref("Operadores/Comparison_Operators", "operadores de comparación")}} para más detalles.

### Typeof operador y `undefined`

Alternativamente se puede usar {{jsxref("Operadores/typeof","typeof")}}. Recuerda que este siempre devolverá una cadena de texto con el tipo:

```js
let x;
if (typeof x === "undefined") {
  // se ejecutan estas instrucciones
}
```

Una razón para usar {{jsxref("Operadores/typeof","typeof")}} es que no devuelve un error si la variable no fue declarada.

```js
// x no fue declarada antes
if (typeof x === "undefined") {
  // devuelve true
  //se ejecutan estas instrucciones
}

if (x === undefined) {
  // lanza un ReferenceError
}
```

Sin embargo, existe otra alternativa. JavaScript es un lenguaje de ámbito estático, por lo que determinar si una variable se encuentra declarada puede ser definido al ver si está declarada en el contexto que la contiene.

El alcance global está vinculado al {{jsxref("globalThis", "objeto global", "", 1)}}, por lo que se puede comprobar la existencia de una variable en el contexto global comprobando la existencia de una propiedad en el objeto global, utilizando el operador {{jsxref("Operators/in", "in")}}, por ejemplo:

```js
if ("x" in window) {
  // estas instrucciones se ejecutan sólo si x está definido globalmente.
}
```

### Operador void y `undefined`

El operador {{jsxref("Operadores/void", "void")}} es una tercer alternativa.

```js
let x;
if (x === void 0) {
  // se ejecutan estas instrucciones
}

// y no fue declarada antes
if (y === void 0) {
  // lanza un ReferenceError (a diferencia de  `typeof`)
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
