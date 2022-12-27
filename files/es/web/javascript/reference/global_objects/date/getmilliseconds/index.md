---
title: Date.prototype.getMilliseconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
tags:
  - Fecha
  - Milisegundos
  - Prototipo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getMilliseconds
browser-compat: javascript.builtins.Date.getMilliseconds
---
{{JSRef}}

El método **`getMilliseconds()`** devuelve la cantidad de milisegundos en el objeto fecha especificado de acuerdo a la hora local.

## Sintaxis

```
dateObj.getMilliseconds()
```

### Valor de Retorno

Un número, entre 0 y 999, que representa la cantidad de milisegundos en la fecha dada, de acuerdo a la hora local.

## Ejemplos

### Usando `getMilliseconds()`

El siguiente ejemplo asigna la cantidad de milisegundos de la hora actual a la variable `milisegundos`:

```js
var ahora = new Date();
var milisegundos = ahora.getMilliseconds();
```

## Especificaciones

| Especificación                                                                                                                   | Estado                       | Comentario                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                         | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.24', 'Date.prototype.getMilliseconds')}}                                 | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-date.prototype.getmilliseconds', 'Date.prototype.getMilliseconds')}} | {{Spec2('ESDraft')}} |                                                     |

## Especificaciones

{{Specifications}}

## Compatibilidad en Navegadores

{{Compat}}

## Vea también

- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
- {{jsxref("Date.prototype.setMilliseconds()")}}
