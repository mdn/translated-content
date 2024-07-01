---
title: "null"
slug: Web/JavaScript/Reference/Operators/null
---

{{jsSidebar("Objects")}}

## Resumen

El valor `null` es un literal de Javascript que representa intencionalmente un valor nulo o "vacío". Es uno de los {{Glossary("Primitive", "valores primitivos")}} de Javascript.

{{EmbedInteractiveExample("pages/js/globalprops-null.html")}}

## Sintaxis

```
null
```

## Descripción

El valor `null` es un literal (no una propiedad del objeto global como podría ser {{jsxref("undefined", "undefined")}}). En APIs, se devuelve `null` normalmente dónde se espera un objeto pero éste no es relevante. Al comparar con `null` o {{jsxref("undefined", "undefined")}} hay que tener en cuenta las [diferencias entre los operadores de igualdad (==) e identidad (===)](/es/docs/Web/JavaScript/Referencia/Operadores/Comparison_Operators) (con el primero se realiza una conversión de tipo).

```js
// foo no existe, no está definido y nunca ha sido inicializado:
> foo
"ReferenceError: foo is not defined"

// foo existe, pero no tiene tipo ni valor:
> var foo = null; foo
"null"
```

### Diferencias entre `null` y `undefined`

```js
typeof null; // object (bug en ECMAScript, debería ser null)
typeof undefined; // undefined
null === undefined; // false
null == undefined; // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("undefined", "undefined")}}
- {{jsxref("NaN", "NaN")}}
