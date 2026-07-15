---
title: Otras macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

A diferencia de las macros enumeradas en [Macros de uso común](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), las macros documentadas en este artículo se usan con poca frecuencia, en contextos específicos, o están obsoletas.

## Contextos especiales

Esta macro se utiliza solo en contextos particulares, como una referencia de API específica.

- [`RFC`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/rfc.rs) crea un enlace al RFC especificado, dado su número. La sintaxis es `\{{RFC(número)}}`. Por ejemplo, `\{{RFC(2616)}}` se convierte en {{ RFC(2616) }}.

### Componentes de la página de inicio

Tenemos una variedad de macros que se pueden usar para generar automáticamente el contenido de las páginas de inicio. Aquí están.

#### Listas de subpáginas

- [`ListSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/listsubpages.rs) genera una lista no ordenada de enlaces a todas las páginas hijas directas de la página actual; resulta útil para generar automáticamente tablas de contenido para conjuntos de documentación.
- [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) construye una lista de definiciones de todas las páginas hijas directas de la página actual, con sus títulos como {{HTMLElement("dt")}} y su resumen SEO como {{HTMLElement("dd")}}. Esto facilita la generación automática de páginas de inicio razonablemente atractivas.
- [`APIListAlpha`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_alpha.rs) crea una lista de las subpáginas de la página actual, formateada como una lista de términos de API, dividida por la primera letra. Tiene tres parámetros. El primero es 0 si quieres incluir todas las subpáginas de nivel superior, o 1 para omitir las subpáginas que tengan "." en su nombre. El segundo y el tercero te permiten añadir texto para mostrar como parte del nombre en cada enlace. Esto se puede usar para añadir "<" y ">" a los enlaces de elementos, o para agregar "()" al final de las listas de nombres de métodos.

### Listas de enlaces

Tenemos una macro diseñada específicamente para crear [listas de enlaces](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) dentro del contenido:

- [`QuickLinksWithSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs) crea una lista de enlaces formada por las subpáginas de la página actual (o de la página especificada, si se indica una). Se generan hasta dos niveles de profundidad en total.
