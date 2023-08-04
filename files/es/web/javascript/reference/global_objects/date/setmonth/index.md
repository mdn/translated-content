---
title: Date.prototype.setMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setMonth
---

{{JSRef}}El método **`setMonth()`** establece el mes para una fecha específica de acuerdo con el año establecido actualmente.{{EmbedInteractiveExample("pages/js/date-setmonth.html")}}

## Sintaxis

```
dateObj.setMonth(monthValue[,dayValue])
```

### Versiones anteriores a JavaScript 1.3

```
dateObj.setMonth(monthValue)
```

### Parámetros

- `monthValue`
  - : Un entero entre 0 y 11, representando los meses de Enero a Diciembre.
- `dayValue`
  - : Opcional. Un entero de 1 a 31, representando el dia del mes.

### Resultado

El valor retornado es el número de milisegundos entre el 1 de Enero de 1970 00:00:00 UTC y la fecha actualizada.

## Descripción

Si no especificas el parámetro `dayValue`, el valor retornado del metodo {{jsxref("Date.prototype.getDate()", "getDate()")}} es usado.

Si un parámetro especificado esta fuera del rango esperado, `setMonth()` intenta actualizar la información de la fecha en el objeto {{jsxref("Date")}} en consecuencia. Por ejemplo, si usted usa 15 para `monthValue`, usa 12 para incrementar el año en 1, y los 3 restantes para calcular el mes.

El día actual del mes tendrá un impacto en el comportamiento de este método. Conceptualmente agregará el número de días dados por el día actual del mes al primer día del nuevo mes especificado como parámetro, para devolver la nueva fecha. Por ejemplo, si el valor actual es el 31 de agosto de 2016, llamar a setMonth con un valor de 1 devolverá el 2 de marzo de 2016. Esto se debe a que en febrero de 2016 tuvo 29 días.

## Ejemplos

### Usando `setMonth()`

```js
var theBigDay = new Date();
theBigDay.setMonth(6);

//Cuidado con las transiciones de fin de mes
var endOfMonth = new Date(2016, 7, 31);
endOfMonth.setMonth(1);
console.log(endOfMonth); //Wed Mar 02 2016 00:00:00
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Date.prototype.getMonth()")}}
- {{jsxref("Date.prototype.setUTCMonth()")}}
