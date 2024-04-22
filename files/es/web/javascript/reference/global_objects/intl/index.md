---
title: Intl
slug: Web/JavaScript/Reference/Global_Objects/Intl
---

{{JSRef}}

El objeto de ámbito global **`Intl`** es el espacio de nombres para el API de Internacionalización de ECMAScript, éste provee comparación de cadenas y formato de números, fechas y tiempos con sensibilidad al lenguaje. Los constructores para los objetos {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, y {{jsxref("DateTimeFormat")}} son propiedades del objeto `Intl`. En ésta página se documentan tales propiedades, así como la funcionalidad común a los constructores de internacionalización y otras funciones sensibles al lenguaje.

## Propiedades

- {{jsxref("Global_Objects/Collator", "Intl.Collator")}}
  - : Constructor para collators, objetos que permiten la comparación de cadenas con sensibilidad al lenguaje.
- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
  - : Constructor para objetos que permiten el formato de fecha y tiempos con sensibilidad al lenguaje.
- {{jsxref("Global_Objects/NumberFormat", "Intl.NumberFormat")}}
  - : Constructor para objetos que permiten el formato de números con sensibilidad al lenguaje.
- {{jsxref("Global_Objects/PluralRules", "Intl.PluralRules")}}
  - : _Por definir_

## Métodos

- {{jsxref("Intl.getCanonicalLocales()")}}
  - : Método que retorna los nombres canónicos de las diferentes variantes de lenguaje.

## Identificación de variantes de lenguaje y negociación

Los constructores de internacionalización, así como otros metodos de constructores sensibles al lenguaje (listados bajo [Ver más](#see_also)) siguen un mismo patrón para identificar variantes de lenguaje y determinar aquella a utilizar: todos aceptan los argumentos `locales` y `options`, y negocian las variantes requeridas contra aquellas que soportan utilizando un algoritmo especificado en la propiedad `options.localeMatcher`.

### `locales`

`El argumento locales` debe ser tanto una cadena que contenga una [Etiqueta de Idioma BCP 47](http://tools.ietf.org/html/rfc5646), o una matriz de etiquetas de dicho idioma. Si el argumento `locales` no es provisto o es indefinido, será usado la localicacion predeterminada.

Una etiqueta de idioma BCP 47 define un idioma y minimamente contiene un código primario de idioma. En estos la forma mas comun puede contener, : un código de idioma, un código del sistema de escritura, y un código de país o región, todo separado por guiones. Mientras la etiqueta no es case sensitive, es recomendable usar un titulo para el código del sistema de escritura, mayúsculas para el país y región y minúsculas para todo lo demás.

Ejemplos:

- `"hi"`: Hindi (idioma principal).
- `"de-AT"`: Alemán usado en Austria (idioma principal con código del país).
- `"zh-Hans-CN"`: Escritura China en caracteres simplificados como se usa en China (idioma principal con código de escritura y código del país).

Las subetiquetas que identifican idiomas, scripts, países (regiones), y (raramente utilizadas) variantes en las etiquetas de idiomas BCP 47 pueden ser encontradas en el [Registro de subetiquetas de idioma de la IANA](http://www.iana.org/assignments/language-subtag-registry).

BCP 47 permite también extensiones. Las funciones de internacionalización de JavaScript utilizan la extensión `"u"` (Unicode), misma que puede emplearse para requerir personalizacioón de los objetos {{jsxref("Collator")}}, {{jsxref("NumberFormat")}}, o {{jsxref("DateTimeFormat")}}. A continuación algunos ejemplos:

- `"de-DE-u-co-phonebk"`: Utiliza la variante de guía telefónica del orden de clasificación alemán, que expande las vocales con umlaut a pares de caracteres: ä → ae, ö → oe, ü → ue.
- `"th-TH-u-nu-thai"`: Utiliza dígitos tailandeses (๐, ๑, ๒, ๓, ๔, ๕, ๖, ๗, ๘, ๙) para formatear números.
- `"ja-JP-u-ca-japanese"`: Use the Japanese calendar in date and time formatting, so that 2013 is expressed as the year 25 of the Heisei period, or 平成 25.
- `"en-GB-u-ca-islamic"`: use British English with the Islamic (Hijri) calendar, where the Gregorian date 14 October, 2017 is the Hijri date 24 Muharram, 1439.

### Locale negotiation

The `locales` argument, after stripping off all Unicode extensions, is interpreted as a prioritized request from the application. The runtime compares it against the locales it has available and picks the best one available. Two matching algorithms exist: the `"lookup"` matcher follows the Lookup algorithm specified in [BCP 47](http://tools.ietf.org/html/rfc4647#section-3.4); the `"best fit"` matcher lets the runtime provide a locale that's at least, but possibly more, suited for the request than the result of the Lookup algorithm. If the application doesn't provide a `locales` argument, or the runtime doesn't have a locale that matches the request, then the runtime's default locale is used. The matcher can be selected using a property of the `options` argument (see below).

If the selected language tag had a Unicode extension substring, that extension is now used to customize the constructed object or the behavior of the function. Each constructor or function supports only a subset of the keys defined for the Unicode extension, and the supported values often depend on the language tag. For example, the `"co"` key (collation) is only supported by {{jsxref("Collator")}}, and its `"phonebk"` value is only supported for German.

### `options` argument

The `options` argument must be an object with properties that vary between constructors and functions. If the `options` argument is not provided or is undefined, default values are used for all properties.

One property is supported by all language sensitive constructors and functions: The `localeMatcher` property, whose value must be a string `"lookup"` or `"best fit"` and which selects one of the locale matching algorithms described above.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- Introduction: [The ECMAScript Internationalization API](http://norbertlindenberg.com/2012/12/ecmascript-internationalization-api/index.html)
- Constructors

  - {{jsxref("Collator", "Intl.Collator")}}
  - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
  - {{jsxref("NumberFormat", "Intl.NumberFormat")}}

- Methods

  - {{jsxref("String.prototype.localeCompare()")}}
  - {{jsxref("Number.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleString()")}}
  - {{jsxref("Date.prototype.toLocaleDateString()")}}
  - {{jsxref("Date.prototype.toLocaleTimeString()")}}
