---
title: Intl.RelativeTimeFormat
slug: Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
---

{{JSRef}}

El objeto **`Intl.RelativeTimeFormat`** te proporciona una manera de formatear tiempos relativos con traducciones.

{{EmbedInteractiveExample("pages/js/intl-relativetimeformat.html")}}

El código de este ejemplo interactivo está disponible en un repositorio GitHub. Si quieres contribuir a los ejemplos interactivos del proyecto, por favor, clona <https://github.com/mdn/interactive-examples> y manda una Pull Request.

## Constructor

- {{jsxref("RelativeTimeFormat.RelativeTimeFormat()", "Intl.RelativeTimeFormat.RelativeTimeFormat()")}}
  - : Crea una nueva instancia de `Intl.RelativeTimeFormat`.

## Métodos estáticos

- {{jsxref("RelativeTimeFormat.supportedLocalesOf", "Intl.RelativeTimeFormat.supportedLocalesOf()")}}
  - : Devuelve un {{jsxref("Array")}} con todos los idiomas disponibles sin necesidad de usar el que hay por defecto.

## Métodos de instancia

- {{jsxref("RelativeTimeFormat.format", "Intl.RelativeTimeFormat.prototype.format()")}}
  - : Formatea `value` y `unit` conforme al idioma y las opciones de formateo al crear la instancia con [`Intl.RelativeTimeFormat`](/es/docs/Web/JavaScript/Reference/Global_Objects/Intl.RelativeTimeFormat).
- {{jsxref("RelativeTimeFormat.formatToParts", "Intl.RelativeTimeFormat.prototype.formatToParts()")}}
  - : Devuelve un {{jsxref("Array")}} de objetos representando el tiempo relativo en partes que pueden ser usadas en traducciones.
- {{jsxref("RelativeTimeFormat.resolvedOptions", "Intl.RelativeTimeFormat.prototype.resolvedOptions()")}}
  - : Devuelve un nuevo objeto con las propiedades que reflejan las opciones de localización y formato usadas durante la inicialización del objeto.

## Ejemplos

### Ejemplo básico

El siguiente ejemplo muestra cómo conseguir el tiempo relativo para el mejor idioma según el usuario.

```js
// Crea un formateador de tiempo relativo en tu lenguaje
// con los valores por defectos pasados expresamente.
const rtf = new Intl.RelativeTimeFormat("en", {
  localeMatcher: "best fit", // otros valores: "lookup"
  numeric: "always", // otros valores: "auto"
  style: "long", // otros valores: "short" or "narrow"
});

// Formatea el tiempo relativo con valores negativos (-1).
rtf.format(-1, "day");
// > "Hace 1 día"

// Formatea el tiempo relativo con valores positivos (1).
rtf.format(1, "day");
// > "Dentro de 1 día"
```

### Usando `formatToParts`

El siguiente ejemplo muestra cómo crear un formateador de tiempo relativo que devuelve las partes separadas:

```js
const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

// Formatea el tiempo relativo usando día como unidad.
rtf.formatToParts(-1, "day");
// > [{ type: "literal", value: "ayer"}]

rtf.formatToParts(100, "day");
// > [{ type: "literal", value: "Dentro de " },
// >  { type: "integer", value: "100", unit: "day" },
// >  { type: "literal", value: " días" }]
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [The Intl.RelativeTimeFormat API](https://developers.google.com/web/updates/2018/10/intl-relativetimeformat)
