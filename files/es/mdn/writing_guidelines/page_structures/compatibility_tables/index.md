---
title: Tablas de compatibilidad con navegadores y Browser Compatibility Data (BCD)
short-title: Tablas de compat y BCD
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

MDN tiene un formato estándar para tablas que ilustran la compatibilidad de tecnologías compartidas en todos los navegadores, como DOM, HTML, CSS, JavaScript, SVG, etc.
Para que estos datos estén disponibles en múltiples proyectos mediante programación, se crea un paquete de Node.js desde el [repositorio browser-compat-data](https://github.com/mdn/browser-compat-data) y se publica en npm.

Para modificar los datos dentro de estas tablas, la documentación completa junto con los detalles más recientes de las convenciones y los esquemas JSON utilizados para representar los datos se pueden encontrar en la [guía de contribución](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) del repositorio, así como la [guía de pautas de datos](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines).
Si tiene preguntas o descubre problemas, es bienvenido a [pedir ayuda](/es/docs/MDN/Community/Communication_channels).

## Uso de datos BCD en páginas MDN

Una vez que se han incluido los datos en el repositorio [browser-compat-data](https://github.com/mdn/browser-compat-data), puede comenzar a incluir dinámicamente las tablas de especificación y compatibilidad con los navegadores basadas en esos datos dentro de las páginas MDN.

Para comenzar con los datos de BCD en páginas MDN, use la cadena de consulta especificada en el archivo fuente de BCD para los datos relevantes que desea incluir.
Por ejemplo:

- Los datos de compatibilidad de {{domxref("AbortController")}} se definen en [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) y se pueden consultar usando `api.AbortController`.
- Los datos de compatibilidad de la cabecera HTTP {{HTTPHeader("Content-Type")}} se definen en [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/Content-Type.json) y la consulta es `http.headers.Content-Type`.
- Los datos de compatibilidad de la propiedad {{domxref("VRDisplay.capabilities")}} se definen en [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) y su consulta es `api.VRDisplay.capabilities`.

La consulta de datos de compatibilidad debe especificarse en el front matter de la página en la clave `browser-compat`.
Por ejemplo, {{domxref("AbortController")}} se agregaría como se muestra a continuación:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Las tablas de compatibilidad y especificación correspondientes a la clave se representan automáticamente en lugar de las macros `\{{Compat}}` y `\{{Specifications}}` en el fuente.

Si se requieren varias tablas de compatibilidad/especificaciones en la misma página, puede especificar el valor de `browser-compat` como una matriz. Por ejemplo, para la [Channel Messaging API](/es/docs/Web/API/Channel_Messaging_API) esto se agregaría como se muestra a continuación:

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
