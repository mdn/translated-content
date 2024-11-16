---
title: Plantilla de página de elemento SVG
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: dad6b0e057cd37b4408cdede8b9f568c56df9a82
---

{{MDNSidebar}}

> **Nota:** _Elimina toda esta nota explicativa antes de publicar_
>
> ---
>
> **Metadatos de la página:**
>
> Los metadatos en la parte superior de la página se utilizan para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el elemento en particular.
>
> ```md
> ---
> title: <NombreDelElemento>
> slug: Web/SVG/Element/NombreDelElemento
> page-type: svg-element
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: svg.elements.NombreDelElemento
> ---
> ```
>
> - **title**
>   - : El título que se muestra en la parte superior de la página.
>     Debe tener el formato **<**_NombreDelElemento_**>**.
>     Por ejemplo, el elemento "[g](/es/docs/Web/SVG/Element/g)" tiene un _título_ de `<g>`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Esto se formateará como `Web/SVG/Element/NombreDelElemento`.
> - **page-type**
>   - : Siempre `svg-element`.
> - **status**
>   - : Incluye claves de estado de tecnología (apropiadas): [**experimental**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**desaprobada**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), **no estándar** (si no está en una pista de estándares).
> - **browser-compat**
>
>   - : Reemplaza el valor de marcador de posición `svg.elements.NombreDelElemento` con la cadena de consulta para el elemento en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La herramienta utiliza automáticamente la clave para completar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el elemento en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada debe incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas a macros en la parte superior de la sección de contenido (inmediatamente debajo de los metadatos de la página).
> Debes actualizarlos o eliminarlos según el consejo siguiente:
>
> - `\{{SeeCompatTable}}` — esto genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología que estás documentando no es experimental, debes eliminar esto.
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes completar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner de **Obsoleto** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   Si no lo está, puedes eliminar la llamada a la macro.
> - `\{{SecureContext_Header}}` — esto genera un banner de **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Secure_Contexts).
>   Si no lo está, puedes eliminar la llamada a la macro.
>   Si lo está, también debes completar una entrada para ella en la página [Características restringidas a contextos seguros](/es/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{SVGRef}}` — esto genera el menú lateral izquierdo de referencia para el elemento.
>   El contenido del menú lateral depende de las etiquetas en los metadatos de la página.
> - Recuerda eliminar la macro `\{{MDNSidebar}}` cuando copies esta página.
>
> Se muestran muestras de los banners **Experimental** y **Obsoleto** justo después de este bloque de nota.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar_

{{SeeCompatTable}}{{deprecated_header}}{{SVGRef}}

Comienza el contenido en la página con un párrafo introductorio — comienza nombrando el elemento y diciendo qué hace.
Idealmente, esto debería ser una o dos oraciones cortas.

## Contexto de uso

`\{{svginfo}}`

Para que aparezca la información correcta aquí, completa una entrada para el elemento en la macro `\{{svginfo}}` si aún no está.

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo Markdown._

## Atributos

### Atributos globales

- [Atributos de procesamiento condicional](/es/docs/Web/SVG/Attribute#conditional_processing_attributes)
- [Atributos principales](/es/docs/Web/SVG/Attribute#core_attributes)
- [Atributos de eventos gráficos](/es/docs/Web/SVG/Attribute#graphical_event_attributes)
- [Atributos de presentación](/es/docs/Web/SVG/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Atributos específicos

- Incluye una lista con viñetas
- de todos los atributos SVG
- que puede tomar

## Interfaz DOM

Este elemento implementa la interfaz `\{{domxref("NameOfSVGDOMElement")}}`.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página contiene solo un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás vincular a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y algunos más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes vincular a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Usando la API fetch
>
> Ejemplo de Fetch
>
> ### Más ejemplos
>
> Enlaces a más ejemplos en otras páginas
> ```
>
> **Escenario 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta página:
>
> No agregues ningún encabezado H3; simplemente agrega los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de esta API, consulta [la página sobre fetch()](https://example.org).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo Markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo Markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el elemento actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
