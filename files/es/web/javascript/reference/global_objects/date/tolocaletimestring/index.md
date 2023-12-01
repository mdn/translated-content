---
title: Date.prototype.toLocaleTimeString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
---

{{JSRef}}

El método **`toLocaleTimeString()`** devuelve una cadena con una representación de la parte del tiempo de esta fecha sensible al idioma. Los nuevos argumentos `locales` y `options` le permiten a la aplicación especificar el idioma cuyas convenciones de formato deben usarse y personalizan el comportamiento de esta función. En implementaciones antiguas que ignoran los argumentos `locales` y `options` la localidad usada y la forma de la cadena devuelta son completamente dependientes de la implementación.

{{EmbedInteractiveExample("pages/js/date-tolocaletimestring.html")}}

## Sintaxis

```
dateObj.toLocaleTimeString([locales[, options]])
```

### Parámetros

Los argumentos `locales` y `options` personalizan el comportamiento de la función y le permiten a la aplicación especificar el idioma cuyas convenciones de formato deben usarse. En las implementaciones que ignoran los argumentos `locales` y `options`, la localidad y la forma de la cadena devuelta son dependientes por completo de la implementación.

Vea el [constructor `Intl.DateTimeFormat()`](/es/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/DateTimeFormat) para los detalles de estos parámetros y sobre cómo usarlos.

El valor predeterminado de cada componente de fecha-hora es {{jsxref("undefined")}}, pero si las propiedades `weekday`, `year`, `month` y `day` son todas {{jsxref("undefined")}}, entonces `year`, `month` y `day` se asumen como `"numeric"`.

### Valor devuelto

Una cadena representando la porción de tiempo de la instancia {{jsxref("Global_Objects/Date", "Date")}} dada, conforme a las convenciones específicas del idioma.

## Ejemplos

### Usando `toLocaleTimeString()`

En el uso básico sin especificar una localidad, una cadena con formato en la localidad y opciones predeterminadas es devuelta.

```js
var fecha = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleTimeString() sin argumentos depende de la implementación,
// la localidad y la zona horaria predeterminadas
console.log(date.toLocaleTimeString());
// → "21:00:00" si se ejecuta en la localidad es-MX con la zona horaria America/Mexico_City
```

### Verificando el soporte de argumentos `locales` y `options`

Los argumentos `locales` y `options` aún no están soportados en todos los navegadores. Para verificar si alguna implementación ya los soporta, puede usar el requerimiento de que etiquetas inválidas son rechazadas con una excepción {{jsxref("RangeError")}}:

```js
function toLocaleTimeStringSoportaLocales() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Usando `locales`

Este ejemplo muestra una de las variaciones en formatos de tiempo localizados. Para obtener el formato del idioma usado en la interfaz de su aplicación, asegúrese de especificar ese idioma (y posiblemente algunos de _fallback_) usando el argumento `locales`:

```js
var fecha = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// los siguientes formatos asumen la zona horaria de la localidad;
// America/Los_Angeles para los EEUU

// El inglés americano usa formato de 12 horas con AM/PM
console.log(fecha.toLocaleTimeString("en-US"));
// → "7:00:00 PM"

// El inglés británico usa formato de 24 horas sin AM/PM
console.log(date.toLocaleTimeString("en-GB"));
// → "03:00:00"

// El koreano usa formato de 12 horas con AM/PM
console.log(date.toLocaleTimeString("ko-KR"));
// → "오후 12:00:00"

// En muchos países donde hablan árabe se usan dígitos árabes
console.log(date.toLocaleTimeString("ar-EG"));
// → "٧:٠٠:٠٠ م"

// cuando se pide un idioma que puede no estar disponible, como
// balinés, incluya un idioma de respaldo, como en este caso, indonesio
console.log(date.toLocaleTimeString(["ban", "id"]));
// → "11.00.00"
```

### Usando `options`

Los resultados provistos por `toLocaleTimeString()` pueden ser personalizados usando el argumento `options`:

```js
var fecha = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// una aplicación puede querer usar UTC y visibilizarlo:
var options = { timeZone: "UTC", timeZoneName: "short" };
console.log(date.toLocaleTimeString("en-US", options));
// → "3:00:00 AM GMT"

// algunas veces incluso en EEUU necesitan el tiempo en 24 horas
console.log(date.toLocaleTimeString("en-US", { hour12: false }));
// → "19:00:00"

// mostrar únicamente horas y minutos, use options con la localidad predeterminada - usar un arreglo vacío
console.log(
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
);
// → "20:01"
```

## Rendimiento

Cuando se da formato a un gran número de fechas, es mejor crear un objeto {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} y usar su método {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleDateString()")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
