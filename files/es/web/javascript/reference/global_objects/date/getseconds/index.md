---
title: Date.prototype.getSeconds()
slug: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
tags:
  - Fecha
  - JavaScript
  - Prototipo
  - Referencia
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getSeconds
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getSeconds
---
{{JSRef}}

El método **`getSeconds()`** devuelve los segundos en la fecha especificada de acuerdo a la hora local.

{{EmbedInteractiveExample("pages/js/date-getseconds.html")}}

## Sintaxis

```
dateObj.getSeconds()
```

### Valor devuelto

Un número entero, entro 0 y 59, representando los segundos en la fecha dada de acuerdo a la hora local.

## Ejemplos

### Utilizando `getSeconds()`

La segunda sentencia asigna el valor 30 a la variable `seconds`, en base al valor del objeto {{jsxref("Global_Objects/Date", "Date")}} `Xmas95`.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var seconds = Xmas95.getSeconds();

console.log(seconds); // 30
```

## Especificaciones

| Especificación                                                                                                       | Estado                       | Comentario                                          |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.22', 'Date.prototype.getSeconds')}}                         | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}}         | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-date.prototype.getseconds', 'Date.prototype.getSeconds')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Date.getSeconds")}}

## See also

- {{jsxref("Date.prototype.getUTCSeconds()")}}
- {{jsxref("Date.prototype.setSeconds()")}}
