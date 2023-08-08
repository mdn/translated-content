---
title: Date.parse()
slug: Web/JavaScript/Reference/Global_Objects/Date/parse
---

{{JSRef("Objetos_globales", "Date")}}

## Resumen

Transforma una cadena con la representación de una fecha y hora, y devuelve el número de milisegundos desde las 00:00:00 del 1 de enero de 1970, hora local.

## Sintaxis

```
Date.parse(cadenaFecha)
```

### Parámetros

- `cadenaFecha`
  - : Una cadena con la representación de una fecha y hora.

## Descripción

El método `parse` toma una cadena con una fecha en inglés (como por ejemplo "`Dec 25, 1995`") y devuelve el número de milisegundos desde las 00:00:00 del 1 de enero de 1970 (hora local). Esta función es útil para establecer valores de fecha basados en cadenas con fechas, por ejemplo junto con el método {{jsxref("Date.prototype.setTime()")}} y el objeto {{jsxref("Date")}}.

Dada una cadena con una hora, `parse` devuelve el valor de la hora. Acepta la sintaxis del estándar IETF (en inglés): "`Mon, 25 Dec 1995 13:30:00 GMT`". Comprende las abreviaciones de la zona horaria continental de Estados Unidos, pero para su uso general, use la diferencia de zona horaria, como por ejemplo, "`Mon, 25 Dec 1995 13:30:00 GMT+0430`" (4 horas, 30 minutos al oeste del meridiano de Greenwich). Si no se especifica una zona horaria, se asumirá la zona de la hora local. GMT y UTC se consideran equivalentes.

Debido a que `parse` es un método estático de `Date`, úselo siempre como `Date.parse()`, en vez de como un método del objeto `Date` que usted cree.

## Ejemplos

### Ejemplo: Usando `parse`

Si `IPOfecha` es un objeto existente `Date`, entonces usted puede asignarlo a 9 de agosto de 1995 de la manera siguiente:

```js
IPOfecha.setTime(Date.parse("Aug 9, 1995"));
```

## Vea también

- {{jsxref("Date.UTC()")}}
