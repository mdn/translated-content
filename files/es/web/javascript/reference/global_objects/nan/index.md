---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
---

{{jsSidebar("Objects")}}

La propiedad global `NaN` es un valor que representa Not-A-Number.

## Sumario

Un valor representando un Not-A-Number (No es Un Número).

{{js_property_attributes(0,0,0)}}

## Sintaxis

`NaN`

## Descripción

`NaN` es una propiedad del _global object (objeto global)_, por ejemplo, es una variable de alcance global.

El valor inicial de `NaN` es Not-A-Number (No es Un Número) - lo mismo que el valor de {{jsxref("Number.NaN")}}.

Keep text below in sync with Number.NaN page `NaN` nunca es equivalente con cualquier otro número, incluido el mismo `NaN`; no puedes chequear el valor de un not-a-number comparándolo con `Number.NaN`. Usar la función {{jsxref("isNaN()")}} para aquello.

Muchos métodos de JavaScript (como son el {{jsxref("Number")}} constructor, {{jsxref("parseFloat")}} y {{jsxref("parseInt")}}) retornan `NaN` si el valor especificado en el parámetro no puede ser parseado como un número.

Puedes utilizar la propiedad `NaN` para indicar una condición de error para tu función que devuelva un número en caso de éxito.

JavaScript imprime el valor `Number.NaN` como `NaN`.

## Ver también

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("Objetos_globales/isNaN", "isNaN()")}}
