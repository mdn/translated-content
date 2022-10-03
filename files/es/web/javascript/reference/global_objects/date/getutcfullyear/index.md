---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getUTCFullYear
---
{{JSRef}}

El método **`getUTCFullYear()`** devuelve el año en la fecha especificada en tiempo universal.

## Sintaxis

```
objectoFecha.getUTCFullYear()
```

### Valor devuelto

Un número que representa el año en la fecha representada por el `objectoFecha` en tiempo universal.

## Descripción

El valor devuelto por `getUTCFullYear()` es un número que no está afectado por el efecto año 2000, por ejemplo, 1995.

## Ejemplos

### Empleo de `getUTCFullYear()`

El siguiente ejemplo asigna el valor de cuatro digitos del año actual a la variable `year`.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Especificaciones

| Especificación                                                                                                               | Estado                       | Comentario                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Definición inicial. Implementada en JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.11', 'Date.prototype.getUTCFullYear')}}                             | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad en navegadores

{{Compat("javascript.builtins.Date.getUTCFullYear")}}

## Ver también

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
