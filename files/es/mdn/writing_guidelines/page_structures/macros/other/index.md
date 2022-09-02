---
title: Otras macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
translation_of: MDN/Structures/Macros/Other
original_slug: MDN/Structures/Macros/Other
---
{{MDNSidebar}}

A diferencia de las macros enumeradas en [Macros de uso común](/es/docs/MDN/Structures/Macros/Commonly-used_macros), las macros documentadas en este artículo se usan con poca frecuencia o solo en contextos específicos, o están obsoletas.

## Contextos especiales

Estas macros se usan solo con contextos particulares, como una referencia de API específica.

- [`Interwiki`](https://github.com/mdn/yari/blob/main/kumascript/macros/Interwiki.ejs) facilita la creación de enlaces _interwiki_. Actualmente admite enlaces a Wikipedia y Wikimo. El primer parámetro es el nombre de la wiki ("wikipedia" o "wikimo"), y el segundo es la ruta del artículo. Por ejemplo, `\{\{interwiki("wikipedia", "Firefox")\}\}` aparece como {{ interwiki("wikipedia", "Firefox") }}. Esta plantilla detecta automáticamente el idioma de la página y dirige al mismo idioma en Wikipedia, por ejemplo.
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

## Obsoletas

Estas macros han sido reemplazadas por otras formas de hacer lo mismo y ya no deberían usarse. Si los encuentra en artículos existentes, reemplácelos.

### Enlaces

- La macro [`SectionOnPage`](https://github.com/mdn/yari/blob/main/kumascript/macros/SectionOnPage.ejs) crea una frase que enlaza con el nombre de una sección y el artículo que contiene esa sección. Por ejemplo, `\{{SectionOnPage("/es/docs/Mozilla/Firefox/Releases/21", "Cambios para desarrolladores web")}}` genera lo siguiente: _{{SectionOnPage("/es/docs/ Mozilla/Firefox/Releases/21", "Cambios para desarrolladores web")}}_.
- La macro [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) inserta un enlace a la página especificada en MDN, utilizando el título de la página como la cadena visible para hacer clic y la información sobre herramientas extraída del resumen de SEO de la página.
- La macro [`LinkItem`](https://github.com/mdn/yari/tree/main/kumascript/macros/LinkItem.ejs) inserta un enlace a una URL específica, con el texto indicado como la cadena visible para hacer clic. El enlace recoge automáticamente como información sobre herramientas el resumen de la página de destino. Esto difiere de [`Link`](https://github.com/mdn/yari/blob/main/kumascript/macros/Link.ejs) en que debe especificar el título.
- La macro [`LinkItemDL`](https://github.com/mdn/yari/tree/main/kumascript/macros/LinkItemDL.ejs) inserta un enlace a una URL específica, con el texto indicado como {{HTMLElement("dt")}} que también es el enlace. El elemento {{HTMLElement("dd")}} contiene el resumen de la página especificada.
- [`funcref`](https://github.com/mdn/yari/tree/main/kumascript/macros/funcref.ejs) crea enlaces a funciones globales (normalmente C++) documentadas en páginas de nivel superior. Sin embargo, dichas páginas ya no se crean en el nivel superior de MDN.
- [`source`](https://github.com/mdn/yari/blob/main/kumascript/macros/source.ejs) le permite vincular a un archivo de código fuente de Mozilla sin tener que escribir una URL MXR larga usando esta sintaxis: `\{\{Source("browser/Makefile.in")\}\}`. Esto le da: {{ Source("browser/Makefile.in") }}. El texto del enlace es la ruta proporcionada; si desea un texto diferente, simplemente proporcione un segundo parámetro, así: `\{\{Source("browser/Makefile.in", "el archivo browser/Makefile.in")\}\}`, que produce {{ Source( "browser/Makefile.in", "el archivo browser/Makefile.in") }}. Tenga en cuenta que el enlace será a la última versión del archivo en código de su última generación.
- [`Source_cvs`](https://github.com/mdn/yari/tree/main/kumascript/macros/Source_cvs.ejs) funciona igual que [`source`](https://github.com/mdn/yari/blob/main/kumascript/macros/source.ejs), excepto que se vincula con el repositorio de [CVS](/es/docs/Mozilla/Developer_guide/Source_Code/CVS) en lugar del más nuevo de [mozilla-central](/es/docs/Mozilla/Developer_guide/mozilla-central).
- [`LXRSearch`](https://github.com/mdn/yari/blob/main/kumascript/macros/LXRSearch.ejs) se puede utilizar para crear una URL de búsqueda LXR.
