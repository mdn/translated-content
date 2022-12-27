---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Infinity
original_slug: Web/JavaScript/Referencia/Objetos_globales/Infinity
---
{{jsSidebar("Objects")}}

## Resumen

La propiedad global **`Infinity`** es un valor numérico que representa el infinito.

{{js_property_attributes(0,0,0)}}

## Sintaxis

```js
Infinity
```

## Description

`Infinity` es una del objeto global, es decir, esta es una variable de alcance global.

El valor inicial de `Infinity` es {{jsxref("Number.POSITIVE_INFINITY")}}. El valor de `Infinity` (infinito positivo) es mayor que cualquier otro numero incluido el mismo. Este valor se comporta matematicamente como el infinito matemático; por ejemplo, cualquier numero multiplicado por `Infinity` da como resultado `Infinity`, y cualquier numero divido por `Infinity` da como resultado cero.

Para la especificación ECMAScript 5, `Infinity` es de solo lectura (implementado en JavaScript 1.8.5 / Firefox 4).

## Especificaciones

| Especificación                                                                                                       | Estado                   | Comentario                                         |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------- |
| ECMAScript 1ra edición.                                                                                              | Estándar                 | Definición inicial. Implementada en JavaScript 1.3 |
| {{SpecName('ES5.1', '#sec-15.1.1.2', 'Infinity')}}                                                 | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-value-properties-of-the-global-object-infinity', 'Infinity')}} | {{Spec2('ES6')}}     |                                                    |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Infinity")}}

## Ver también

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
