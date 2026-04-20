---
title: Otras macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

{{MDNSidebar}}

A diferencia de las macros enumeradas en [Macros usadas comúnmente](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), las macros documentadas en este artículo se usan con poca frecuencia o solo en contextos específicos, o están obsoletas.

## Contextos especiales

Esta macro se usa solo con contextos particulares, como una referencia de API específica.

- [`RFC`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/rfc.rs) crea un enlace al RFC especificado, dado su número. La sintaxis es `\{{RFC(número)}}`. Por ejemplo, `\{{RFC(2616)}}` se convierte en {{ RFC(2616) }}.

### Componentes de página de aterrizaje

Tenemos una variedad de macros que se pueden usar para generar automáticamente el contenido de las páginas de aterrizaje. Aquí están.

#### Listas de subpáginas

- [`ListSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/listsubpages.rs) genera una lista desordenada de enlaces a todos los elementos secundarios inmediatos de la página actual; útil para generar automáticamente tablas de contenido para conjuntos de documentación.
- [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) construye una lista de definición de todos los elementos secundarios inmediatos de la página actual, con sus títulos como el {{HTMLElement("dt")}} y su resumen de SEO como el {{HTMLElement("dd")}}. Esto facilita la generación automática de páginas de aterrizaje razonablemente atractivas.
- [`APIListAlpha`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_alpha.rs) construye una lista de las subpáginas de la página actual, formateada como una lista de términos de API, dividida por la primera letra. Hay tres parámetros. El primero es 0 si deseas incluir todas las subpáginas de nivel superior o 1 para omitir las subpáginas con "." en sus nombres. El segundo y el tercero te permiten agregar texto para mostrar como parte del nombre en cada enlace. Esto se puede usar para agregar "<" y ">" para enlaces de elementos, o para agregar "()" al final de las listas de nombres de métodos.

### Listas de enlaces

Tenemos una macro diseñada específicamente para crear [listas de enlaces](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) dentro del contenido:

- [`QuickLinksWithSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs) crea una lista de enlaces compuesta por las páginas debajo de la página actual (o la página especificada, si se proporciona una). Se generan hasta dos niveles totales de profundidad.
