---
title: Date.prototype.getDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/getDate
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getDate
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getDate
---
{{JSRef}}

El método **`getDate()`** devuelve el día del mes para la fecha especificada de acuerdo con la hora local.

## Sintaxis

```
dateObj.getDate()
```

### Parámetros

Ninguno.

### Valor de retorno

El valor devuelto por `getDate() es u`n número entero, entre 1 y 31, que representa el día del mes para la fecha dada según la hora local.

## Ejemplos

### Uso de `getDate()`

La segunda instrucción asigna el valor 25 a la variable `day`, en función del valor del objeto {{jsxref("Date")}} `Xmas95`.

```js
var Xmas95 = new Date('December 25, 1995 23:15:30');
var day = Xmas95.getDate();

console.log(day); // 25
```

## Especificaciones

| Especificación                                                                                       | Estado                   | Comentario                                        |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------- |
| {{SpecName('ES6', '#sec-date.prototype.getdate', 'Date.prototype.getDate')}} | {{Spec2('ES6')}}     |                                                   |
| {{SpecName('ES5.1', '#sec-15.9.5.14', 'Date.prototype.getDate')}}             | {{Spec2('ES5.1')}} |                                                   |
| {{SpecName('ES1')}}                                                                             | {{Spec2('ES1')}}     | Definición inicial. Implantado en JavaScript 1.1. |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Date.getDate")}}

## Véase también

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.getUTCDay()")}}
- {{jsxref("Date.prototype.setDate()")}}
