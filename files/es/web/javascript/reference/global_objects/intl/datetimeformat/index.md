---
title: Intl.DateTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
l10n:
  sourceCommit: c420b9b3126451f53d112afe33e007d6efdb605d
---

{{JSRef}}

El objeto **`Intl.DateTimeFormat`** permite el formateo de fechas y horas teniendo en cuenta las peculiaridades de cada idioma.

{{InteractiveExample("JavaScript Demo: Intl.DateTimeFormat", "taller")}}

```js interactive-example
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));
// Results below assume UTC timezone - your results may vary

// Specify default date formatting for language (locale)
console.log(new Intl.DateTimeFormat("en-US").format(date));
// Expected output: "12/20/2020"

// Specify default date formatting for language with a fallback language (in this case Indonesian)
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// Expected output: "20/12/2020"

// Specify date and time format using "style" options (i.e. full, long, medium, short)
console.log(
  new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Australia/Sydney",
  }).format(date),
);
// Expected output: "Sunday, 20 December 2020 at 14:23:16 GMT+11"
```

## Constructor

- {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}}
  - : Crea un nuevo objeto `Intl.DateTimeFormat`.

## Métodos estáticos

- {{jsxref("Intl/DateTimeFormat/supportedLocalesOf", "Intl.DateTimeFormat.supportedLocalesOf()")}}
  - : Devuelve un array que contiene aquellos locales proporcionados que son compatibles sin tener que recurrir al local predeterminado del entorno de ejecución.

## Propiedades de instancia

Estas propiedades están definidas en `Intl.DateTimeFormat.prototype` y son compartidas por todas las instancias de `Intl.DateTimeFormat`.

- {{jsxref("Object/constructor", "Intl.DateTimeFormat.prototype.constructor")}}
  - : La función constructora que creó el objeto de instancia. Para instancias de `Intl.DateTimeFormat`, el valor inicial es el constructor {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat")}}.
- `Intl.DateTimeFormat.prototype[Symbol.toStringTag]`
  - : El valor inicial de la propiedad [`[Symbol.toStringTag]`](/es/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) es la cadena `"Intl.DateTimeFormat"`. Esta propiedad se usa en {{jsxref("Object.prototype.toString()")}}.

## Métodos de instancia

- {{jsxref("Intl/DateTimeFormat/format", "Intl.DateTimeFormat.prototype.format()")}}
  - : Función getter que formatea una fecha según el idioma y las opciones de formato de este objeto `DateTimeFormat`.
- {{jsxref("Intl/DateTimeFormat/formatRange", "Intl.DateTimeFormat.prototype.formatRange()")}}
  - : Este método recibe dos [Fechas](/es/docs/Web/JavaScript/Reference/Global_Objects/Date) y formatea el rango de fechas de la manera más concisa posible según el idioma y las opciones proporcionadas al instanciar `DateTimeFormat`.
- {{jsxref("Intl/DateTimeFormat/formatRangeToParts", "Intl.DateTimeFormat.prototype.formatRangeToParts()")}}
  - : Este método recibe dos [Fechas](/es/docs/Web/JavaScript/Reference/Global_Objects/Date) y devuelve un Array de objetos que contienen los tokens específicos del idioma que representan cada parte del rango de fechas formateado.
- {{jsxref("Intl/DateTimeFormat/formatToParts", "Intl.DateTimeFormat.prototype.formatToParts()")}}
  - : Devuelve un {{jsxref("Array")}} de objetos que representan la cadena de fecha en partes, que se pueden usar para un formato personalizado sensible al idioma.
- {{jsxref("Intl/DateTimeFormat/resolvedOptions", "Intl.DateTimeFormat.prototype.resolvedOptions()")}}
  - : Devuelve un nuevo objeto con propiedades que reflejan el idioma y las opciones de formato calculadas durante la inicialización del objeto.

## Ejemplos

### Uso de DateTimeFormat

En un uso básico sin especificar un idioma, `DateTimeFormat` utiliza el idioma predeterminado y las opciones predeterminadas.

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// toLocaleString sin argumentos depende de la implementación,
// el idioma predeterminado y la zona horaria predeterminada
console.log(new Intl.DateTimeFormat().format(date));
// "20/12/2012" si se ejecuta con el idioma es-ES (español) y en la zona horaria Europe/Madrid (UTC+0100)
```

### Uso de idiomas

Este ejemplo muestra algunas de las variaciones en los formatos de fecha y hora localizados. Para obtener el formato del idioma utilizado en la interfaz de usuario de tu aplicación, asegúrate de especificar ese idioma (y posiblemente algunos idiomas de respaldo) usando el argumento `locales`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Los resultados a continuación usan la zona horaria de Europe/Madrid (UTC+0100)

// El inglés de EE. UU. usa el orden mes-día-año
console.log(new Intl.DateTimeFormat("en-US").format(date));
// "12/20/2012"

// El inglés británico usa el orden día-mes-año
console.log(new Intl.DateTimeFormat("en-GB").format(date));
// "20/12/2012"

// El coreano usa el orden año-mes-día
console.log(new Intl.DateTimeFormat("ko-KR").format(date));
// "2012. 12. 20."

// El árabe en la mayoría de los países de habla árabe usa dígitos árabes reales
console.log(new Intl.DateTimeFormat("ar-EG").format(date));
// "٢٠‏/١٢‏/٢٠١٢"

// Para el japonés, las aplicaciones pueden querer usar el calendario japonés,
// donde 2012 fue el año 24 de la era Heisei
console.log(new Intl.DateTimeFormat("ja-JP-u-ca-japanese").format(date));
// "H24/12/20"

// Cuando se solicita un idioma que puede no ser compatible, como
// Balinés, incluye un idioma de respaldo, en este caso indonesio
console.log(new Intl.DateTimeFormat(["ban", "id"]).format(date));
// "20/12/2012"
```

### Uso de opciones

Los formatos de fecha y hora se pueden personalizar utilizando el argumento `options`:

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0, 200));

// solicita un día de la semana junto con una fecha larga
let options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("de-DE", options).format(date));
// "Donnerstag, 20. Dezember 2012"

// una aplicación puede querer usar UTC y hacer que eso sea visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "Thursday, December 20, 2012 at UTC"

// a veces quieres ser más preciso
options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "Australia/Sydney",
  timeZoneName: "short",
};
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00 pm AEDT"

// a veces quieres ser muy preciso
options.fractionalSecondDigits = 3; // número de dígitos para la fracción de segundos
console.log(new Intl.DateTimeFormat("en-AU", options).format(date));
// "2:00:00.200 pm AEDT"

// a veces incluso EE. UU. necesita un formato de 24 horas
options = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: "America/Los_Angeles",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// "12/19/2012, 19:00:00"

// para especificar opciones pero usar el idioma predeterminado del navegador, usa undefined
console.log(new Intl.DateTimeFormat(undefined, options).format(date));
// "19/12/2012, 19:00:00"

// a veces es útil incluir el período del día
options = { hour: "numeric", dayPeriod: "short" };
console.log(new Intl.DateTimeFormat("en-US", options).format(date));
// 3 at night
```

El calendario y los formatos de numeración usados también se pueden establecer independientemente a través de argumentos de `options`:

```js
const options = { calendar: "chinese", numberingSystem: "arab" };
const dateFormat = new Intl.DateTimeFormat(undefined, options);
const usedOptions = dateFormat.resolvedOptions();

console.log(usedOptions.calendar);
// "chinese"

console.log(usedOptions.numberingSystem);
// "arab"

console.log(usedOptions.timeZone);
// "Europe/Madrid" (la zona horaria predeterminada del usuario)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con los navegadores

{{Compat}}

## Véase también

- [Polyfill de `Intl.DateTimeFormat` en FormatJS](https://formatjs.github.io/docs/polyfills/intl-datetimeformat/)
- {{jsxref("Intl")}}
