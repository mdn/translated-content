---
title: Tablas y datos de compatibilidad de navegadores (BCD)
short-title: Tablas de compatibilidad y BCD
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

MDN tiene un formato estándar para las tablas que ilustran la compatibilidad de tecnologías web compartidas en todos los navegadores: DOM, HTML, CSS, JavaScript, SVG, etc.
Para que estos datos estén disponibles en múltiples proyectos de forma programática, se crea un paquete de Node.js a partir del [repositorio `browser-compat-data`](https://github.com/mdn/browser-compat-data) y se publica en npm.

Para modificar los datos dentro de estas tablas, puedes encontrar documentación completa junto con los detalles más recientes de las convenciones y esquemas JSON utilizados para representar los datos en la [guía de contribución](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) del repositorio, así como en la [guía de pautas de datos](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).
Si tienes dudas o encuentras algún problema, puedes [pedir ayuda](/es/docs/MDN/Community/Communication_channels).

## Uso de datos de BCD en las páginas de MDN

Una vez que los datos se hayan incluido en el repositorio [`browser-compat-data`](https://github.com/mdn/browser-compat-data), puedes comenzar a incluir dinámicamente las tablas de compatibilidad y especificaciones de navegadores basadas en esos datos dentro de las páginas de MDN.

Para comenzar a usar datos de BCD en las páginas de MDN, utiliza la cadena de consulta especificada en el archivo fuente de BCD para los datos relevantes que deseas incluir.
Por ejemplo:

- Los datos de compatibilidad de {{domxref("AbortController")}} están definidos en [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) y la consulta es `api.AbortController`.
- Los datos de compatibilidad de la cabecera HTTP {{HTTPHeader("Content-Type")}} están definidos en [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) y la consulta es `http.headers.Content-Type`.
- Los datos de compatibilidad de la propiedad {{domxref("VRDisplay.capabilities")}} están definidos en [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) y la consulta es `api.VRDisplay.capabilities`.

La consulta de datos de compatibilidad debe especificarse en el _front-matter_ de la página, en la clave `browser-compat`.
Por ejemplo, {{domxref("AbortController")}} se añadiría como se muestra a continuación:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Las tablas de compatibilidad y especificaciones correspondientes a la clave se renderizan automáticamente en lugar de las macros `\{{Compat}}` y `\{{Specifications}}` en el código fuente.

Si se requieren múltiples tablas de compatibilidad o especificaciones en la misma página, puedes especificar el valor de `browser-compat` como un arreglo. Por ejemplo, para la [Channel Messaging API](/es/docs/Web/API/Channel_Messaging_API) se añadiría así:

```md
---
title: Channel Messaging API
slug: Web/API/Channel_Messaging_API
page-type: web-api-overview
browser-compat:
  - api.MessageChannel
  - api.MessagePort
---
```

Las llamadas a las macros generan las siguientes tablas (y el conjunto correspondiente de notas):

### Ejemplo de tabla de compatibilidad

{{Compat}}

### Ejemplos de tablas de especificaciones

{{Specifications}}
