---
title: Constructor Date()
slug: Web/JavaScript/Reference/Global_Objects/Date/Date
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{JSRef}}

El constructor **`Date()`** crea objetos de tipo {{jsxref("Date")}}. Cuando se llama como una función, devuelve una cadena que representa la hora actual.

{{InteractiveExample("JavaScript Demo: Date Constructor")}}

```js interactive-example
const date1 = new Date("December 17, 1995 03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

const date2 = new Date("1995-12-17T03:24:00");
// Sun Dec 17 1995 03:24:00 GMT...

console.log(date1 === date2);
// Expected output: false

console.log(date1 - date2);
// Expected output: 0
```

## Sintaxis

```js-nolint
new Date()
new Date(value)
new Date(dateString)
new Date(dateObject)

new Date(year, monthIndex)
new Date(year, monthIndex, day)
new Date(year, monthIndex, day, hours)
new Date(year, monthIndex, day, hours, minutes)
new Date(year, monthIndex, day, hours, minutes, seconds)
new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)

Date()
```

> [!NOTE] > `Date()` se puede llamar con o sin [`new`](/es/docs/Web/JavaScript/Reference/Operators/new), pero con efectos diferentes. Ver el [valor de retorno](#valor_de_retorno).

### Parámetros

Hay cinco formas básicas para el constructor `Date()`:

#### Sin parámetros

Cuando no se proporcionan parámetros, el objeto `Date` recién creado representa la fecha y hora actuales al momento de la instanciación. La marca de tiempo ([timestamp](/es/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)) de la fecha devuelta es la misma que el número devuelto por {{jsxref("Date.now()")}}.

#### Valor de tiempo o número de marca de tiempo

- `value`
  - : Un valor entero que representa la [marca de tiempo](/es/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (el número de milisegundos desde la medianoche al comienzo del 1 de enero de 1970, UTC — también conocido como el [epoch](/es/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date)).

#### Cadena de fecha

- `dateString`
  - : Un valor de cadena que representa una fecha, analizado e interpretado usando el mismo algoritmo implementado por {{jsxref("Date.parse()")}}. Ver el [formato de cadena de fecha y hora](/es/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format) para advertencias sobre el uso de diferentes formatos.

#### Objeto fecha

- `dateObject`
  - : Un objeto `Date` existente. Esto efectivamente hace una copia del objeto `Date` existente con la misma fecha y hora. Esto es equivalente a `new Date(dateObject.valueOf())`, excepto que no se llama al método `valueOf()`.

Cuando se pasa un parámetro al constructor `Date()`, las instancias de `Date` se tratan de manera especial. Todos los demás valores se [convierten a datos primitivos](/es/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion). Si el resultado es una cadena, se analizará como una cadena de fecha. De lo contrario, el valor primitivo resultante se convierte en un número y se trata como una marca de tiempo.

#### Valores individuales de componentes de fecha y hora

Dado al menos un año y un mes, esta forma de `Date()` devuelve un objeto `Date` cuyos valores de componentes (año, mes, día, hora, minuto, segundo y milisegundo) provienen de los siguientes parámetros. Cualquier campo faltante se le da el valor más bajo posible (`1` para el día y `0` para todos los demás componentes). Los valores de los parámetros se evalúan en la zona horaria local, en lugar de UTC. {{jsxref("Date.UTC()")}} acepta parámetros similares pero interpreta los componentes como UTC y devuelve una marca de tiempo.

Si algún parámetro excede sus límites definidos, se "arrastra". Por ejemplo, si se pasa un `monthIndex` mayor que `11`, esos meses harán que el año incremente; si se pasa un `minutes` mayor que `59`, `hours` se incrementará en consecuencia, etc. Por lo tanto, `new Date(1990, 12, 1)` devolverá el 1 de enero de 1991; `new Date(2020, 5, 19, 25, 65)` devolverá las 2:05 AM del 20 de junio de 2020.

De manera similar, si algún parámetro esta por debajo, "toma prestado" de las posiciones superiores. Por ejemplo, `new Date(2020, 5, 0)` devolverá el 31 de mayo de 2020.

- `year`
  - : Valor entero que representa el año. Los valores de `0` a `99` se mapean a los años `1900` a `1999`. Todos los demás valores son el año real. Ver el [ejemplo](/es/docs/Web/JavaScript/Reference/Global_Objects/Date#interpretation_of_two-digit_years).
- `monthIndex`
  - : Valor entero que representa el mes, comenzando con `0` para enero hasta `11` para diciembre.
- `day` {{optional_inline}}
  - : Valor entero que representa el día del mes. Por defecto es `1`.
- `hours` {{optional_inline}}
  - : Valor entero entre `0` y `23` que representa la hora del día. Por defecto es `0`.
- `minutes` {{optional_inline}}
  - : Valor entero que representa el segmento de minutos de una hora. Por defecto es `0`.
- `seconds` {{optional_inline}}
  - : Valor entero que representa el segmento de segundos de una hora. Por defecto es `0`.
- `milliseconds` {{optional_inline}}
  - : Valor entero que representa el segmento de milisegundos de una hora. Por defecto es `0`.

### Valor de retorno

Llamar a `new Date()` (el constructor `Date()`) devuelve un objeto [`Date`](/es/docs/Web/JavaScript/Reference/Global_Objects/Date). Si se llama con una cadena de fecha no válida, o si la fecha que se va a construir tendrá una marca de tiempo menor a `-8,640,000,000,000,000` o mayor a `8,640,000,000,000,000` milisegundos, devuelve una [fecha no válida](/es/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) (un objeto `Date` cuyo método {{jsxref("Date/toString", "toString()")}} devuelve `"Invalid Date"` y cuyo método {{jsxref("Date/valueOf", "valueOf()")}} devuelve `NaN`).

Llamar a la función `Date()` (sin la palabra clave `new`) devuelve una representación en cadena de la fecha y hora actuales, exactamente como `new Date().toString()`. Cualquier argumento dado en una llamada a la función `Date()` (sin la palabra clave `new`) se ignora; independientemente de si se llama con una cadena de fecha no válida, o incluso se llama con cualquier objeto arbitrario u otro dato primitivo como argumento, siempre devuelve una representación en cadena de la fecha y hora actuales.

## Descripción

### Precisión de tiempo reducida

Para ofrecer protección contra ataques de sincronización y [huellas digitales](/es/docs/Glossary/Fingerprinting), la precisión de `new Date()` puede redondearse según la configuración del navegador. En Firefox, la preferencia `privacy.reduceTimerPrecision` está habilitada de forma predeterminada y el valor predeterminado es 2ms. También puedes habilitar `privacy.resistFingerprinting`, en cuyo caso la precisión será de 100ms o el valor de `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, el que sea mayor.

Por ejemplo, con precisión de tiempo reducida, el resultado de `new Date().getTime()` siempre será un múltiplo de 2, o un múltiplo de 100 (o `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) con `privacy.resistFingerprinting` habilitado.

```js
// Precisión de tiempo reducida (2 ms) en Firefox 60
new Date().getTime();
// Podría ser:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// Precisión de tiempo reducida con `privacy.resistFingerprinting` habilitado
new Date().getTime();
// Podría ser:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Ejemplos

### Varias maneras de crear un objeto Date

Los siguientes ejemplos muestran varias maneras de crear fechas en JavaScript:

```js
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DESACONSEJADO: puede no funcionar en todos los entornos
const birthday = new Date("1995-12-17T03:24:00"); // Esto está estandarizado y funcionará de manera confiable
const birthday = new Date(1995, 11, 17); // el mes es indexado desde 0
const birthday = new Date(1995, 11, 17, 3, 24, 0);
const birthday = new Date(628021800000); // pasando marca de tiempo epoch
```

### Pasando un valor que no es Date, ni cadena, ni número

Si el constructor `Date()` se llama con un parámetro que no es una instancia de `Date`, se convertirá a un dato primitivo y luego se verificará si es una cadena. Por ejemplo, `new Date(undefined)` es diferente de `new Date()`:

```js
console.log(new Date(undefined)); // Fecha no válida
```

Esto se debe a que `undefined` ya es un dato primitivo pero no una cadena, por lo que se convertirá a un número, que es [`NaN`](/es/docs/Web/JavaScript/Reference/Global_Objects/NaN) y, por lo tanto, no es una marca de tiempo válida. Por otro lado, `null` se convertirá a 0.

```js
console.log(new Date(null)); // 1970-01-01T00:00:00.000Z
```

Los [Arrays](/es/docs/Web/JavaScript/Reference/Global_Objects/Array) se convertirán en una cadena a través de [`Array.prototype.toString()`](/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toString), que une los elementos con comas. Sin embargo, la cadena resultante para cualquier arreglo con más de un elemento no es una cadena de fecha ISO 8601 válida, por lo que su comportamiento de análisis será definido por la implementación. **No pases arreglos al constructor `Date()`**.

```js
console.log(new Date(["2020-06-19", "17:13"]));
// 2020-06-19T17:13:00.000Z en Chrome, ya que reconoce  "2020-06-19,17:13"
// "Fecha no válida" en Firefox
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Date")}}
