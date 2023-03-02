---
title: undefined
slug: Web/JavaScript/Reference/Global_Objects/undefined
original_slug: Web/JavaScript/Referencia/Objetos_globales/undefined
---

{{jsSidebar("Objects")}}

## Resumen

La propiedad global **undefined** representa el valor primitivo `{{Glossary("Undefined", "undefined")}}`. Es uno de los {{Glossary("Primitive", "valores primitivos")}} de JavaScript.

{{js_property_attributes(0,0,0)}}

## Sintaxis

```
undefined
```

## Descripción

`undefined` es una propiedad del _objeto global_, es decir, una variable de alcance global. El valor inicial de `undefined` es el valor primitivo `{{Glossary("Undefined", "undefined")}}`.this needs clarification, but that would require explaining primitive values

En navegadores modernos (JavaScript 1.8.5 / Firefox 4+), `undefined` es una propiedad _no-configurable_, _no-grabable_ según la especificación ECMAScript 5. Aún cuando este no sea el caso, evite sobreescribirlo.

Una variable a la que no se le ha asignado valor, o no se ha declarado en absoluto (no se declara, no existe) son de tipo `undefined`. Un método o sentencia también devuelve `undefined` si la variable que se está evaluando no tiene asignado un valor. Una función devuelve `undefined` si no se ha {{jsxref("Sentencias/return", "devuelto")}} un valor.

> **Nota:** Ten en cuenta que si no se ha declarado una variable ni explícita ni implícitamente, no puedes compararla con **undefined** ya que obtendrías un **[ReferenceError](/es/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError),** pero puedes comparar su tipo con la cadena ([String](/es/docs/Web/JavaScript/Referencia/Objetos_globales/String)) "undefined". En el ejemplo más abajo se podrá ver cómo conseguir esto usando el operador [typeof](/es/docs/Web/JavaScript/Referencia/Operadores/typeof).

> **Advertencia:** Aunque es posible usarlo como un {{Glossary("Identifier", "identificador")}} (nombre de variable) en cualquier otro ámbito que no sea el ámbito global (porque `undefined` no es una {{jsxref("Reserved_Words", "palabra reservada")}}), hacerlo es una mala idea que provocará que tú código sea difícil de mantener y depurar.
>
> ```js
> //NO HAGAS ESTO
>
> // registra "foo string"
> (function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })()
>
> // registra "foo string"
> (function(undefined){ console.log(undefined, typeof undefined); })('foo');
> ```

## Ejemplos

### Igualdad estricta y `undefined`

Puedes usar `undefined` y los operadores de igualdad y desigualdad estricta para determinar si una variable tiene un valor asignado. En el siguiente ejemplo la variable `x` no está inicializada, y la sentencia `if` se evalúa como verdadera.

```js
var x;
if (x === undefined) {
   // se ejecutan estas instrucciones
}
else {
   // estas instrucciones no se ejecutan
}
```

> **Nota:** Aquí se debe usar el operador de igualdad estricta en lugar del operador de igualdad estándar, ya que `x == undefined` también verifica si `x` es `null`, mientras que el de igualdad estricta no. `null` no es equivalente a `undefined`. Vea {{jsxref("Operadores/Comparison_Operators", "operadores de comparación")}} para más detalles.

### Typeof operador y `undefined`

Alternativamente se puede usar {{jsxref("Operadores/typeof","typeof")}}. Recuerda que este siempre devolverá una cadena de texto con el tipo:

```js
var x;
if (typeof x === 'undefined') {
   // se ejecutan estas instrucciones
}
```

Una razón para usar {{jsxref("Operadores/typeof","typeof")}} es que no devuelve un error si la variable no fue declarada.

```js
// x no fue declarada antes
if (typeof x === 'undefined') { // devuelve true
   //se ejecutan estas instrucciones
}

if (x === undefined) { // lanza un ReferenceError

}
```

Sin embargo, este tipo de técnica debe evitarse. JavaScript es un lenguaje de ámbito estático, por lo que determinar si una variable se encuentra declarada puede ser definido al ver si está declarada en un contexto de inclusión. La única excepción es el ámbito global, pero el ámbito global está vinculado al objeto global, por lo que comprobar la existencia de una variable en el contexto global puede realizarse comprobando la existencia de una propiedad del _objeto global_ (utilizando el operador {{jsxref("Operators/in", "in")}}, por ejemplo).

### Operador void y `undefined`

El operador {{jsxref("Operadores/void", "void")}} es una tercer alternativa.

```js
var x;
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
