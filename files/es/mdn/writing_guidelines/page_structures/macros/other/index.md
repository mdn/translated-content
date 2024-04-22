---
title: Otras macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

A diferencia de las macros enumeradas en [Macros de uso común](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), las macros documentadas en este artículo se usan con poca frecuencia o solo en contextos específicos, o están obsoletas.

## Contextos especiales

Estas macros se usan solo con contextos particulares, como una referencia de API específica.

- [`RFC`](https://github.com/mdn/yari/blob/main/kumascript/macros/RFC.ejs) crea un enlace al RFC especificado, dado su número. La sintaxis es: `\{\{RFC(número)\}\}`. Por ejemplo, `\{\{RFC(2616)\}\}` se convierte en {{ RFC(2616) }}.

### Componentes de la página destino

Tenemos una variedad de macros que se pueden usar para generar automáticamente los contenidos de las páginas de destino. Aquí están.

#### Listas de subpáginas

- [`ListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/ListSubpages.ejs) genera una lista desordenada de enlaces a todos los elementos secundarios inmediatos de la página actual; útil para generar automáticamente tablas de contenido para conjuntos de documentación.
- [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs) genera una lista de definición de dos columnas de todas las subpáginas inmediatas de la página actual, con sus títulos como {{HTMLElement("dt")}} y su resumen de SEO como {{HTMLElement("dd")}}. Esto facilita la generación automática de páginas de destino razonablemente atractivas.
- [`APIListAlpha`](https://github.com/mdn/yari/blob/main/kumascript/macros/APIListAlpha.ejs) crea una lista de las subpáginas de la página actual, formateada como una lista de términos de la API, dividida por la primera letra. Hay tres parámetros. El primero es 0 si desea incluir todas las subpáginas de nivel superior o 1 para omitir las subpáginas con "." en sus nombres. El segundo y el tercero le permiten agregar texto para mostrar como parte del nombre en cada enlace. Esto se puede usar para agregar "<" y ">" para enlaces de elementos, o para agregar "()" al final de las listas de nombres de métodos.
- [`SubpagesWithSummaries`](https://github.com/mdn/yari/blob/main/kumascript/macros/SubpagesWithSummaries.ejs) construye una lista de definiciones de todos los elementos secundarios inmediatos de la página actual. No se ha hecho ningún otro formateo. Puede obtener una lista de dos columnas preparada para usar como una página destino de varias columnas usando [`LandingPageListSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/LandingPageListSubpages.ejs).

### Enlaces rápidos

Tenemos una macro diseñada específicamente para crear [enlaces rápidos](/es/docs/MDN/Structures/Quicklinks):

- [`QuickLinksWithSubpages`](https://github.com/mdn/yari/blob/main/kumascript/macros/QuickLinksWithSubpages.ejs) crea un conjunto de enlaces rápidos compuestos por las páginas debajo de la página actual (o la página especificada, si se proporciona una). Se generan hasta dos niveles totales de profundidad.
