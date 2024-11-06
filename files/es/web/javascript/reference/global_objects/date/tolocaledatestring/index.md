---
title: Date.prototype.toLocaleDateString()
slug: Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
---

{{JSRef}}

El método **`toLocaleDateString()`** devuelve una cadena con una representación sensible al idioma de la parte de la fecha especificada en la zona horaria del agente de usuario.

Los argumentos `locales` y `options` permiten a las aplicaciones especificar el idioma cuyas convenciones de formato deben utilizarse y permiten personalizar el comportamiento de la función.
En las implementaciones más antiguas, que ignoran los argumentos `locales` y `options`, la configuración regional utilizada y la forma de la cadena devuelta dependen totalmente de la implementación.

{{EmbedInteractiveExample("pages/js/date-tolocaledatestring.html")}}

## Sintaxis

```js
toLocaleDateString();
toLocaleDateString(locales);
toLocaleDateString(locales, options);
```

### Parámetros

Los argumentos `locales` y `options` personalizan el comportamiento de la función y permiten a las aplicaciones especificar el idioma cuyas convenciones de formato deben utilizarse.
En las implementaciones que ignoran los argumentos `locales` y `options`, la configuración regional utilizada y la forma de la cadena devuelta dependen totalmente de la implementación.

Véase el constructor {{jsxref("Intl/DateTimeFormat/DateTimeFormat", "Intl.DateTimeFormat()")}} para obtener detalles sobre estos parámetros y cómo utilizarlos.

El valor por defecto para cada propiedad del componente fecha-hora es {{jsxref("undefined")}}, pero si las propiedades `weekday`, `year`, `month`, `day` son todas {{jsxref("undefined")}}, entonces se asume que `year`, `month`, y `day` son `"numeric"`.

### Valor de retorno

Una cadena que representa la parte de la fecha de la instancia {{jsxref("Global_Objects/Date", "Date")}} dada según las convenciones específicas del idioma.

## Rendimiento

Cuando se formatea un gran número de fechas, es mejor crear un objeto {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}} y utilizar la función proporcionada por su propiedad {{jsxref("DateTimeFormat.prototype.format", "format")}}.

## Ejemplos

### Usando toLocaleDateString()

En el uso básico sin especificar una configuración regional, se devuelve una cadena formateada en la configuración regional por defecto y con las opciones por defecto.

```js
var date = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

// toLocaleDateString() sin argumentos depende de la implementación,
// la configuración regional por defecto y la zona horaria por defecto
console.log(date.toLocaleDateString());
// → "12/11/2012" si se ejecuta en la configuración regional en-US
// con la zona horaria America/Los_Angeles
```

### Comprobación de la compatibilidad con los argumentos locales y options

Los argumentos `locales` y `options` aún no están soportados en todos los navegadores.
Para comprobar si una implementación ya los soporta, puede utilizar el requisito de que las etiquetas de idioma ilegales sean rechazadas con una excepción {{jsxref("RangeError")}}:

```js
function toLocaleDateStringSupportsLocales() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }
  return false;
}
```

### Usando locales

Este ejemplo muestra algunas de las variaciones en los formatos de fecha localizados.
Para obtener el formato del idioma utilizado en la interfaz de usuario de su aplicación, asegúrese de especificar ese idioma (y posiblemente algunos idiomas de reserva) utilizando el argumento `locales`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Los formatos que aparecen a continuación asumen la zona horaria local de la localidad;
// América/Los_Angeles para los Estados Unidos

// El inglés estadounidense utiliza el orden mes-día-año
console.log(date.toLocaleDateString("en-US"));
// → "12/20/2012"

// El inglés británico utiliza el orden día-mes-año
console.log(date.toLocaleDateString("en-GB"));
// → "20/12/2012"

// El coreano utiliza el orden año-mes-día
console.log(date.toLocaleDateString("ko-KR"));
// → "2012. 12. 20."

// Evento para persas, es difícil convertir manualmente la fecha a Solar Hijri
console.log(date.toLocaleDateString("fa-IR"));
// → "۱۳۹۱/۹/۳۰"

// En la mayoría de los países de habla árabe se utilizan dígitos árabes reales
console.log(date.toLocaleDateString("ar-EG"));
// → "٢٠‏/١٢‏/٢٠١٢"

// para los japoneses, las aplicaciones pueden querer utilizar el calendario
// japonés, donde 2012 fue el año 24 de la era Heisei
console.log(date.toLocaleDateString("ja-JP-u-ca-japanese"));
// → "24/12/20"

// cuando se solicita un idioma que puede no estar soportado
// como el balinés, incluir un idioma de reserva, en este caso el indonesio
console.log(date.toLocaleDateString(["ban", "id"]));
// → "20/12/2012"
```

### Usando options

Los resultados proporcionados por `toLocaleDateString()` pueden personalizarse utilizando el argumento `options`:

```js
var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// solicitar un día de la semana junto con una fecha larga
var options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("de-DE", options));
// → "Donnerstag, 20. Dezember 2012"

// una aplicación puede querer utilizar el UTC y hacerlo visible
options.timeZone = "UTC";
options.timeZoneName = "short";
console.log(date.toLocaleDateString("en-US", options));
// → "Thursday, December 20, 2012, UTC"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{jsxref("Global_Objects/DateTimeFormat", "Intl.DateTimeFormat")}}
- {{jsxref("Date.prototype.toLocaleString()")}}
- {{jsxref("Date.prototype.toLocaleTimeString()")}}
- {{jsxref("Date.prototype.toString()")}}
