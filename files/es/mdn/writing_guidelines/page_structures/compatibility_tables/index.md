---
title: Tablas de compatibilidad y repositorio de datos de compatibilidad con navegadores (BCD)
slug: MDN/Writing_guidelines/Page_structures/Compatibility_tables
l10n:
  sourceCommit: b8f5e2a73b0a410fe5508fc674f1ad463deeffb1
---

{{MDNSidebar}}

MDN tiene un formato estándar para tablas que ilustran la compatibilidad de tecnologías compartidas en todos los navegadores, como DOM, HTML, CSS, JavaScript, SVG, etc.
Para que estos datos estén disponibles en varios proyectos mediante programación, se crea un paquete de Node.js desde el [repositorio `browser-compat-data`](https://github.com/mdn/browser-compat-data) y se publica en npm.

Para modificar los datos dentro de estas tablas, la documentación completa junto con los detalles más recientes de las convenciones y los esquemas JSON utilizados para representar los datos se pueden encontrar en la [guía de contribución](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) del repositorio, así como la [guía de pautas de datos](https://github.com/mdn/browser-compat-data/blob/main/docs/data-guidelines/index.md).
Si tienes dudas o descubres problemas, te invitamos a [pedir ayuda](/es/docs/MDN/Community/Communication_channels).

## Uso de los datos de BCD en páginas MDN

Una vez que se han incluido los datos en el repositorio [`browser-compat-data`](https://github.com/mdn/browser-compat-data), puede comenzar a incluir dinámicamente las tablas de especificación y compatibilidad con los navegadores basadas en esos datos dentro de páginas MDN.

Para comenzar con los datos de BCD en páginas MDN, use la cadena de consulta especificada en el archivo fuente de BCD para los datos relevantes que desea incluir.
Por ejemplo:

- {{domxref("AbortController")}} los datos de compatibilidad se definen en [api/AbortController.json](https://github.com/mdn/browser-compat-data/blob/main/api/AbortController.json) y se puede consultar usando `api.AbortController`.
- {{HTTPHeader("Content-Type")}} Los datos de compatibilidad de la cabecera HTTP se definen en [http/headers/content-type.json](https://github.com/mdn/browser-compat-data/blob/main/http/headers/content-type.json) y se puede consultar usando `http.headers.Content-Type`.
- {{domxref("VRDisplay.capabilities")}} los datos de compatibilidad de propiedades se definen en [api/VRDisplay.json](https://github.com/mdn/browser-compat-data/blob/main/api/VRDisplay.json) y se puede consultar usando `api.VRDisplay.capabilities`.

La consulta de datos de compatibilidad debe especificarse en los metadatos de la página en la clave `browser-compat`.
Por ejemplo, {{domxref("AbortController")}} se agregaría como se muestra a continuación:

```md
---
title: AbortController
slug: Web/API/AbortController
page-type: web-api-interface
browser-compat: api.AbortController
---
```

Las tablas de compatibilidad y especificación correspondientes a la clave se representan automáticamente en lugar de las macros `\{{Compat}}` y `\{{Specifications}}` en el código fuente.

Si se requieren varias tablas de compatibilidad/especificaciones en la misma página, puede especificar el valor de `browser-compat` como una matriz. Por ejemplo, para la [API de mensajería de canal](/es/docs/Web/API/Channel_Messaging_API) esto se agregaría como se muestra a continuación:

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

Las llamadas a las macros generan las siguientes tablas (y el correspondiente conjunto de notas):

### Ejemplo de tabla de compatibilidad

{{Compat}}

### Ejemplos de tablas de especificaciones

{{Specifications}}

> **Nota:** El metadato `browser-compat` solo es utilizado en el contenido en Inglés.
