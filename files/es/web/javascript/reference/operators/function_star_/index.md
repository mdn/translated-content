---
title: expresión function*
slug: Web/JavaScript/Reference/Operators/function*
---

{{jsSidebar("Operators")}}

La palabra clave **`function*`** puede ser utilizada para definir una función generadora en una expresión.

{{EmbedInteractiveExample("pages/js/expressions-functionasteriskexpression.html")}}

El código fuente de este ejemplo interactivo se encuentra almacenado en un repositorio GitHub. Si le gustaría contribuir al proyecto de ejemplos interactivos, por favor clone <https://github.com/mdn/interactive-examples> y envíenos un pull request.

## Sintaxis

```
function* [nombre]([param1[, param2[, ..., paramN]]]) {
   sentencias
}
```

### Parámetros

- `nombre`
  - : Nombre de la función. Puede ser omitido, en cuyo caso la función es _anínima_. El nombre sólo es local al cuerpo de la función.
- `paramN`
  - : Nombre de un parámetro a ser pasado a la función. Una función puede tener hasta 255 argumentos.
- `sentencias`
  - : Sentencias que componen el cuerpo de la función.

## Descripción

Una expresión `function*` es muy similar y tiene casi la misma sintaxis que una {{jsxref('Statements/function*', 'function* statement')}}. La principal diferencia entre una expresión `function*` y una sentencia `function*` es el _nombre de la función_, que en expresiones `function*` puede ser omitido para creaar funciones generadoras _anónimas_. Para más información vea también el capítulo acerca de [funciones](/es/docs/Web/JavaScript/Reference/Functions).

## Ejemplos

El siguiente ejemplo define una función generadora sin nombre y la asigna a `x`. La función produce el cuadrado de su argumento:

```js
var x = function* (y) {
  yield y * y;
};
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- {{jsxref("Statements/function*", "Sentencia function*")}}
- Objeto {{jsxref("GeneratorFunction")}}
- [El protocolo iterable](/es/docs/Web/JavaScript/Referencia/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- Objeto {{jsxref("Function")}}
- {{jsxref("Statements/function", "Sentencia function")}}
- {{jsxref("Operators/function", "Expresión function")}}
- {{jsxref("Functions_and_function_scope", "Funciones y alcance de funciones")}}
