---
title: Date
slug: Web/JavaScript/Reference/Global_Objects/Date
---

{{JSRef}}

Los objetos **`Date`** representan en JavaScript un momento fijo en el tiempo en un formato independiente. El objeto `Date` contiene un `Number` que representa los milisegundos transcurridos desde el 1 de Enero de 1970 UTC.

> **Nota:** TC39 está trabajando en [Temporal](https://tc39.es/proposal-temporal/docs/index.html), una nueva API de Date/Time. Lee más acerca de ello en el [blog Igalia](https://blogs.igalia.com/compilers/2020/06/23/dates-and-times-in-javascript/). Aún no está lista para su uso en producción.

## Descripción

### La época ECMAScript y la marca temporal

Una fecha en JavaScript es fundamentalmente especificada como el número de milisegundos que han pasado desde la [Época ECMAScript](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-time-values-and-time-range) la cuál está definida como el 1 de Enero de 1970, UTC. Esta fecha y hora no son los mismos que en la **Época Unix** (el número de segundos que han pasado desde la media noche del 1 de Enero de 1970, UTC), el cual es el valor predominante base para representar los valores de fecha y hora en los ordenadores.

> **Nota:** Es importante tener en cuenta que mientras el valor de la hora en el núcleo del objeto `Date` está en UTC, los métodos básicos para recibir la fecha y la hora o sus derivados trabajan todos en la zona horaria local (por ejemplo: máquina huesped).

Se debe tener en cuenta que el valor máximo de `Date` no es el mismo que el valor del máximo entero seguro (`Number.MAX_SAFE_INTEGER` es 9,007,199,254,740,991). En su lugar, fue definido en ECMA-262 que un máximo de ±100,000,000 (cien millones) días relativos al 1 de Enero de 1970, UTC (que es, 20 de Abril de 271821 a. e. c. \~ 13 de Septiembre de 275760 a. e. c.) pueden ser representados por el objeto estandar `Date` (equivalente a ±8,640,000,000,000,000 milisegundos).

### Formato de fecha y conversiones de zona horaria

Hay muchos métodos disponibles para obtener una fecha en distintos formatos, también para representar conversiones de zona horaria. Son particularmente útiles las funciones que retornan la fecha y la hora en Tiempo Universal Coordinado (UTC), la hora estandar global definida por la Hora Mundial Estandar. (Esta hora tambien es conocida como _Hora media de Greenwich_, ) así como UTC depende del meridiano que incluye London y zonas de Reino Unido cercanas a Greenwich. El dispositivo del usuario provee la hora local.

Sumado a los métodos para leer y manipular los componentes individuales de la fecha y la hora local (tales como {{jsxref("Date.getDay", "getDay()")}} y {{jsxref("Date.setHours", "setHours()")}}), hay también versiones de los mismos métodos que leen y manipulan la fecha y la hora usando UTC (tales como {{jsxref("Date.getUTCDay()", "getUTCDay()")}} y {{jsxref("Date.setUTCHours", "setUTCHours()")}}).

## Constructor

- {{jsxref("Date/Date", "Date()")}}
  - : Cuando es llamado como una función, retorna una cadena que representa la fecha y hora actual, exactamente como lo hace `new Date().toString()`.
- {{jsxref("Date/Date", "new Date()")}}
  - : Cuando es llamado como un constructor, retorna un nuevo objeto `Date`.

## Métodos estáticos

- {{jsxref("Date.now()")}}
  - : Devuelve el valor númerico correspondiente al actual número de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC, ignorando los segundos intercalares.
- {{jsxref("Date.parse()")}}

  - : Transforma la cadena que representa una fecha y retorna el número de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC, ignorando los segundos intercalares.

    > **Nota:** Transforma las cadenas con `Date.parse` es muy poco recomendado debido a diferencias e inconsistencias entre navegadores.

- {{jsxref("Date.UTC()")}}
  - : Acepta los mismos parámetros de la forma extendida del constructor (por ejemplo: del 2 al 7 ) y retorna el número de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC, ignorando los segundos intercalares.

## Métodos de instanciación

- {{jsxref("Date.prototype.getDate()")}}
  - : Retorna el día del mes (`1`–`31`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getDay()")}}
  - : Retorna el día de la semana (`0`–`6`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getFullYear()")}}
  - : Retorna el año (4 dígitos para años de 4 dígitos) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getHours()")}}
  - : Retorna la hora (`0`–`23`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getMilliseconds()")}}
  - : Retorna los milisegundos (`0`–`999`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getMinutes()")}}
  - : Retorna los minutos (`0`–`59`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getMonth()")}}
  - : Retorna el mes (`0`–`11`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getSeconds()")}}
  - : Retorna los segundos (`0`–`59`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getTime()")}}
  - : Retorna el valor númerico de la fecha especificada como el número de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC. (Retona valores negativos para fechas previas.)
- {{jsxref("Date.prototype.getTimezoneOffset()")}}
  - : Retona la diferencia horaria en minutos para la hora local.
- {{jsxref("Date.prototype.getUTCDate()")}}
  - : Retorna el día (fecha) del mes (`1`–`31`) para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.getUTCDay()")}}
  - : Retona el día de la semana (`0`–`6`) para la fecha especificada en hora universal.
- {{jsxref("Date.prototype.getUTCFullYear()")}}
  - : Retona el año (4 dígitos para años de 4 dígitos) para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.getUTCHours()")}}
  - : Retona la hora (`0`–`23`) para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.getUTCMilliseconds()")}}
  - : Retona los milisegundos (`0`–`999`) para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.getUTCMinutes()")}}
  - : Retorna los minutos (`0`–`59`) para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.getUTCMonth()")}}
  - : Retonar el mes (`0`–`11`) para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.getUTCSeconds()")}}
  - : Retorna los segundos (`0`–`59`) para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.getYear()")}}
  - : Retorna el año (usualmente de 2 a 3 dígitos) para la fecha especificada acorde a la hora local. Usa {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}} en su lugar.
- {{jsxref("Date.prototype.setDate()")}}
  - : Establece el día del mes para la fecha especificada acorde a la hora local.
- {{jsxref("Date.prototype.setFullYear()")}}
  - : Establece el año completo (ej. 4 dígitos para años de 4 dígitos) para una fecha espefica acorde a la hora local.
- {{jsxref("Date.prototype.setHours()")}}
  - : Establece la hora para una fecha especifica acorde a la hora local.
- {{jsxref("Date.prototype.setMilliseconds()")}}
  - : Establece los milisegundos para una fecha especifica acorde a la hora local.
- {{jsxref("Date.prototype.setMinutes()")}}
  - : Establece los minutos para una fecha especifica acorde a la hora local.
- {{jsxref("Date.prototype.setMonth()")}}
  - : Establece el mes para una fecha especifica acorde a la hora local.
- {{jsxref("Date.prototype.setSeconds()")}}
  - : Establece los segundos para una fecha especifica acorde a la hora local.
- {{jsxref("Date.prototype.setTime()")}}
  - : Establece el objeto {{jsxref("Date")}} al tiempo representado por un número de milisegundos desde el 1 de Enero de 1970, 00:00:00 UTC. Usa números negativos para fechas previas.
- {{jsxref("Date.prototype.setUTCDate()")}}
  - : Establece el día del mes para la fecha especificada acorde a la hora universal.
- {{jsxref("Date.prototype.setUTCFullYear()")}}
  - : Establece el año completo (ej. 4 dígitos para años de 4 dígitos) para una fecha espefica acorde a la hora universal.
- {{jsxref("Date.prototype.setUTCHours()")}}
  - : Establece la hora para una fecha especifica acorde a la hora universal.
- {{jsxref("Date.prototype.setUTCMilliseconds()")}}
  - : Establece los milisegundos para una fecha especifica acorde a la hora universal.
- {{jsxref("Date.prototype.setUTCMinutes()")}}
  - : Establece los minutos para una fecha especifica acorde a la hora universal.
- {{jsxref("Date.prototype.setUTCMonth()")}}
  - : Establece el mes para una fecha especifica acorde a la hora universal.
- {{jsxref("Date.prototype.setUTCSeconds()")}}
  - : Establece los segundos para una fecha especifica acorde a la hora universal.
- {{jsxref("Date.prototype.setYear()")}}
  - : Establece el año (usualmente de 2 a 3 dígitos) para una fecha especifica acorde a la hora local. Usa {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} en su lugar.
- {{jsxref("Date.prototype.toDateString()")}}
  - : Retona la "fecha" del objeto {{jsxref("Date")}} como una cadena facil de leer por humanos `'Thu Apr 12 2018'`.
- {{jsxref("Date.prototype.toISOString()")}}
  - : Convierte una fecha a una cadena siguiendo el ISO 8601 de Formato Extendido.
- {{jsxref("Date.prototype.toJSON()")}}
  - : Retorna una cadena representando el objeto {{jsxref("Date")}} usando {{jsxref("Date.prototype.toISOString()", "toISOString()")}}. Destinado a ser usado por {{jsxref("JSON.stringify()")}}.
- {{jsxref("Date.prototype.toGMTString()")}}
  - : Retona una cadena representando el objeto {{jsxref("Date")}} basado en la zona horaria GMT (UTC). Usa {{jsxref("Date.prototype.toUTCString()", "toUTCString()")}} en su lugar.
- {{jsxref("Date.prototype.toLocaleDateString()")}}
  - : Retorna una cadena con una representación sensible a la localización de la fecha basada en la configuración del sistema.
- {{jsxref("Date.prototype.toLocaleString()")}}
  - : Retorna una cadena con una representación sensible a la localización de esta fecha. Sobrescribe el método {{jsxref("Object.prototype.toLocaleString()")}}.
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
  - : Retorna una cadena con una representación sensible a la localización de la fecha basada en la configuración del sistema.
- {{jsxref("Date.prototype.toString()")}}
  - : Retorna una cadena representando el objeto especificado {{jsxref("Date")}}. Sobrescribe el método {{jsxref("Object.prototype.toString()")}}.
- {{jsxref("Date.prototype.toTimeString()")}}
  - : Retona la porción de "tiempo" del objeto {{jsxref("Date")}} a una cadena legible para humanos.
- {{jsxref("Date.prototype.toUTCString()")}}
  - : Convierte una fecha a una cadena usando la zona horaria UTC.
- {{jsxref("Date.prototype.valueOf()")}}
  - : Retona el valor primitivo de un objeto {{jsxref("Date")}}. Sobrescribe el método {{jsxref("Object.prototype.valueOf()")}}.

## Ejemplos

### Distintas maneras de crear un objeto Date

Los siguientes ejemplos muestran distintas maneras de crear fechas en JavaScript:

> **Nota:** Transformar las cadenas de fechas con el constructor `Date` (y `Date.parse`, son equivalentes) es escasamente recomendado debido las diferencias e inconsistencias entre navegadores.

```js
let today = new Date();
let birthday = new Date("December 17, 1995 03:24:00");
let birthday = new Date("1995-12-17T03:24:00");
let birthday = new Date(1995, 11, 17); // el mes es indexado como 0
let birthday = new Date(1995, 11, 17, 3, 24, 0);
let birthday = new Date(628021800000); // pasando la marca temporal de la época
```

### Obtener fecha, mes y año u hora

```js
const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
```

### Interpretación de los años de dos dígitos

`new Date()` hereda de forma no deseada, comportamiento inconsistente con años expresados en dos dígitos, cuando una llamada `new Date()` es dada a un año expresado en dos dígitos, ese valor del año no es tratado como un año literal y usado como tal si no que es interpretado como una diferencia desde el año `1900`, pero en otros casos, como una diferencia desde el año `2000`.

```js
let date = new Date(98, 1); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
let date = new Date(22, 1); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
let date = new Date("2/1/22"); // Tue Feb 01 2022 00:00:00 GMT+0000 (GMT)

// Método heredado; siempre interpreta los años en dos digitos como relativos al 1900
date.setYear(98);
date.toString(); // Sun Feb 01 1998 00:00:00 GMT+0000 (GMT)
date.setYear(22);
date.toString(); // Wed Feb 01 1922 00:00:00 GMT+0000 (GMT)
```

Por lo tanto, crear y obtener fechas entre los años `0` y `99`, preferiblemente usa los métodos {{jsxref("Date.prototype.setFullYear()", "setFullYear()")}} y {{jsxref("Date.prototype.getFullYear()", "getFullYear()")}}.

```js
// Método preferido; nunca interpreta ningun valor como una diferencia relativa,
// pero en su lugar valor del año tal y como está
date.setFullYear(98);
date.getFullYear(); // 98 (no 1998)
date.setFullYear(22);
date.getFullYear(); // 22 (no 1922, no 2022)
```

### Calculando el tiempo transcurrido

Los siguientes ejemplos muestran como determinar el tiempo transcurrido entre dos fechas JavaScript en milisegundos.

Debido a las diferentes duraciones de los días (debido a los cambios horarios para aprovechar la luz del sol), meses, y años, expresar el tiempo transcurrido en unidades mayores a horas, minutos y segundos requiere abordar un número de inconvenientes, y deberia ser revisado minuciosamente antes de intentarse.

```js
// Usando objetos Date
let start = Date.now();

// El tiempo a expresar va aquí:
doSomethingForALongTime();
let end = Date.now();
let elapsed = end - start; // tiempo transcurrido en milisegundos
```

```js
// Usando métodos internos
let start = new Date();

// El tiempo a expresar va aquí:
doSomethingForALongTime();
let end = new Date();
let elapsed = end.getTime() - start.getTime(); // tiempo transcurrido en milisegundos
```

```js
// Probar una función y regresar su valor
function printElapsedTime(fTest) {
  let nStartTime = Date.now(),
    vReturn = fTest(),
    nEndTime = Date.now();

  console.log(
    `Tiempo transcurrido: ${String(nEndTime - nStartTime)} milisegundos`,
  );
  return vReturn;
}

let yourFunctionReturn = printElapsedTime(yourFunction);
```

> **Nota:** En los navegadores que soportan la funcionalidad de alta resolución temporal de {{domxref("performance_property", "Web Performance API", "", 1)}}, {{domxref("Performance.now()")}} puede proveer una medida más precisa y confiable del tiempo transcurrido que {{jsxref("Date.now()")}}.

### Obtener el número de segundos desde la Época ECMAScript

```js
let seconds = Math.floor(Date.now() / 1000);
```

En este caso, es más importante retornar únicamente un entero que una simple división no hará. Es también importante sólo retornar realmente el tiempo transcurrido. (Esa es la razón por la que este código usa {{jsxref("Math.floor()")}}, y no {{jsxref("Math.round()")}}.)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Date/Date", "Date()")}} constructor
