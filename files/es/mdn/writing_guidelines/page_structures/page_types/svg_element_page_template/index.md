---
title: Plantilla de página de elemento SVG
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
l10n:
  sourceCommit: 39d45a2e71cee2c107a026a59ba0d9229a511592
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el elemento en particular.
>
> ```md
> ---
> title: <NombreDelElemento>
> slug: Web/SVG/Reference/Element/NombreDelElemento
> page-type: svg-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: svg.elements.NombreDelElemento
> sidebar: svgref
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página.
>     Formato como **<**_NombreDelElemento_**>**.
>     Por ejemplo, el elemento "[g](/es/docs/Web/SVG/Reference/Element/g)" tiene un _title_ de `<g>`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formateará como `Web/SVG/Reference/Element/NombreDelElemento`.
> - **page-type**
>   - : Siempre `svg-element`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `svg.elements.NombreDelElemento` con la cadena de consulta para el elemento en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el elemento en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Es `svgref` para todas las páginas de guía y referencia de SVG.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias macros en la parte superior de la sección de contenido inmediatamente después del front matter de la página.
> Estas macros se agregan automáticamente mediante la cadena de herramientas, así que evita agregarlas o eliminarlas:
>
> - `\{{SeeCompatTable}}` — esto genera un banner **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes llenar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para obtener más información.
>
> Los ejemplos de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran después de este bloque de notas.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio — comienza nombrando el elemento y diciendo qué hace.
Idealmente, esto debe ser una o dos oraciones cortas.

## Contexto de uso

`\{{svginfo}}`

Para que aparezca la información correcta aquí, llena una entrada para el elemento en la macro `\{{svginfo}}` si aún no está allí.

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Atributos

### Atributos globales

- [Atributos principales](/es/docs/Web/SVG/Reference/Attribute#core_attributes)
- [Atributos de evento](/es/docs/Web/SVG/Reference/Attribute#event_attributes)
- [Atributos de presentación](/es/docs/Web/SVG/Reference/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Atributos específicos

- Incluye lista con viñetas
- de todos los
- atributos SVG que puede tomar

## Interfaz DOM

Este elemento implementa la interfaz `\{{domxref("NombreDelElementoSVG")}}`.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", debajo del cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Usar la API fetch
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
> No agregues ningún encabezado H3; solo agrega los enlaces directamente bajo el encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de esta API, consulta [la página sobre fetch()](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el elemento actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
