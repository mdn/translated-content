---
title: Date.prototype.getTime()
slug: Web/JavaScript/Reference/Global_Objects/Date/getTime
tags:
  - Date
  - Metodo getTime()
  - Referencia
  - getTime
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getTime
original_slug: Web/JavaScript/Referencia/Objetos_globales/Date/getTime
---
{{JSRef("Global_Objects", "Date")}}

## Resumen

El método **`getTime()`** devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.

Puede utilizar este método para ayudar a asignar una fecha y hora a otro objeto {{jsxref("Global_Objects/Date", "Date")}}. Este método es funcionalmente equivalente al metodo {{jsxref("Date.valueof", "valueOf()")}}.

## Sintaxis

```
dateObj.getTime()
```

### Valor devuelto

El valor devuelto por el método `getTime()` es un número de milisegundos desde el 1 de enero de 1970 00:00:00 UTC.

## Ejemplos

### Ejemplo: Uso de `getTime()` para copiar fechas.

Construir un objeto de fecha con el mismo valor de tiempo.

```js
var birthday = new Date(1994, 12, 10);
var copy = new Date();
copy.setTime(birthday.getTime());
```

### Ejemplo: Medir el tiempo de ejecución

Restando dos llamadas `getTime()` subsiguientes en objetos {{jsxref("Global_Objects/Date", "Date")}} recién generados, dé el intervalo de tiempo entre estas dos llamadas. Esto se puede utilizar para calcular el tiempo de ejecución de algunas operaciones.

```js
var end, start;

start = new Date();
for (var i = 0; i < 1000; i++) {
  Math.sqrt(i);
}
end = new Date();

console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
```

## Especificaciones

| Especificación                                                                                       | Estatus                  | Comentario                                         |
| ---------------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------- |
| ECMAScript 1st Edition.                                                                              | Standard                 | Initial definition. Implemented in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.9.5.9', 'Date.prototype.getTime')}}                 | {{Spec2('ES5.1')}} |                                                    |
| {{SpecName('ES6', '#sec-date.prototype.gettime', 'Date.prototype.getTime')}} | {{Spec2('ES6')}}     |                                                    |

## Compatibilidad del navegador

{{Compat("javascript.builtins.Date.getTime")}}

## Ver también

- {{jsxref("Date.prototype.setTime()")}}
- {{jsxref("Date.prototype.valueOf()")}}
