---
title: Intl.NumberFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
---

{{JSRef}}

El objecto **`Intl.NumberFormat`** habilita el formato numérico de acuerdo al lenguaje.

{{EmbedInteractiveExample("pages/js/intl-numberformat.html")}}

<!-- The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone https://github.com/mdn/interactive-examples and send us a pull request. -->

## Constructor

- {{jsxref("Intl/NumberFormat/NumberFormat", "Intl.NumberFormat()")}}
  - : Crea un nuevo objecto `NumberFormat`.

## Métodos estaticos

- {{jsxref("Intl/NumberFormat/supportedLocalesOf", "Intl.NumberFormat.supportedLocalesOf()")}}
  - : Regresa un arreglo con idiomas soportados sin necesidad de recurrir a la configuración por defecto en el entorno de ejecución.

## Métodos de instancia

- {{jsxref("Intl/NumberFormat/format", "Intl.NumberFormat.prototype.format()")}}
  - : Función de acceso que formatea un número de acuerdo al lenguaje y a las opciones de formato de este objeto {{jsxref("Intl.NumberFormat")}}.
- {{jsxref("Intl/NumberFormat/formatToParts", "Intl.NumberFormat.prototype.formatToParts()")}}
  - : Devuelve un {{jsxref("Array")}} de objetos que representan la cadena de números en partes que se pueden usar para el formato personalizado que reconoce la configuración regional.
- {{jsxref("Intl/NumberFormat/formatRange", "Intl.NumberFormat.prototype.formatRange()")}}
  - : Función de acceso que formatea un rango de números de acuerdo a la configuración region y a las opciones de formato del objeto {{jsxref("Intl.NumberFormat")}} desde el que se llama al método.
- {{jsxref("Intl/NumberFormat/formatRangeToParts", "Intl.NumberFormat.prototype.formatRangeToParts()")}}
  - : Devuelve un {{jsxref("Array")}} de objetos que representan el rango de cadenas de números en partes que se pueden usar para el formato personalizado que reconoce la configuración regional.
- {{jsxref("Intl/NumberFormat/resolvedOptions", "Intl.NumberFormat.prototype.resolvedOptions()")}}
  - : Devuelve un nuevo objeto con propiedades que reflejan la configuración regional y las opciones de intercalación calculadas durante la inicialización del objeto.

## Ejemplo

### Uso básico

En el uso básico sin especificar una configuración regional, se devuelve una cadena formateada en la configuración regional predeterminada y con opciones predeterminadas.

```js
var number = 3500;

console.log(new Intl.NumberFormat().format(number));
// → '3,500' si está en la region de Estados Unidos
```

### Utilizando la configuración regional

Este ejemplo muestra algunas de las variaciones en los formatos de números por región.
Para obtener el formato del idioma usado en la interfaz de usuario de tu aplicación, asegúrate de especificar dicho idioma (y de ser posible alternativas) utilizando el argumento `locales`:

```js
var number = 123456.789;

// En el alemán la coma se utiliza como separador decimal y el punto para los millares
console.log(new Intl.NumberFormat("de-DE").format(number));
// → 123.456,789

// En la mayoría de los países de lengua arábiga se utilizan también símbolos arábigos
console.log(new Intl.NumberFormat("ar-EG").format(number));
// → ١٢٣٤٥٦٫٧٨٩

// En la India se utilizan separadores millares/lakh/crore
console.log(new Intl.NumberFormat("en-IN").format(number));
// → 1,23,456.789

// La clave de extensión nu requiere un sistema de numeración, p.ej. el decimal chino
console.log(new Intl.NumberFormat("zh-Hans-CN-u-nu-hanidec").format(number));
// → 一二三,四五六.七八九

// Cuando se requiera un lenguaje que pudiera no ser soportado, como es el caso del Balinés
// se recomienda incluir un lenguaje alternativo, en éste caso Indonesio
console.log(new Intl.NumberFormat(["ban", "id"]).format(number));
// → 123.456,789
```

### Usando opciones

Los resultados se pueden personalizar usando el argumento `opciones`:

```js
var number = 123456.789;

// Se establece un formato de divisa
console.log(
  new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
    number,
  ),
);
// → 123.456,79 €

// El yen japonés no tiene ninguna unidad menor
console.log(
  new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(
    number,
  ),
);
// → ￥123,457

// Limitamos a tres los dígitos significativos
console.log(
  new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
    number,
  ),
);
// → 1,23,000
```

### Usando estilos y unidades

```js
console.log(
  new Intl.NumberFormat("pt-PT", {
    style: "unit",
    unit: "kilometer-per-hour",
  }).format(50),
);
// → 50 km/h

console.log(
  (16).toLocaleString("en-GB", {
    style: "unit",
    unit: "liter",
    unitDisplay: "long",
  }),
);
// → 16 litros
```

## [Polyfill](/es/docs/Glossary/Polyfill)

[formatjs Intl.NumberFormat polyfill](https://formatjs.io/docs/polyfills/intl-numberformat)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Intl")}}
