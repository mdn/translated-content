---
title: Plantilla de página de selector CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el selector en particular.
>
> ```md
> ---
> title: :nombre-del-selector
> slug: Web/CSS/Reference/Selectors/:nombre-del-selector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.nombre-del-selector
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página. Formato como _:NombreDelSelector_.
>     Por ejemplo, el selector {{cssxref(":hover")}} tiene un título de _:hover_.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`). Se formateará como `Web/CSS/Reference/Selectors/:nombre-del-selector`.
>     Por ejemplo, el slug del selector {{cssxref(":hover")}} es `Web/CSS/Reference/Selectors/:hover`.
> - **page-type**
>   - : La clave `page-type` para las propiedades CSS es una de `css-selector`, `css-pseudo-class` o `css-pseudo-element`, dependiendo de si el selector es una [pseudo-clase](/es/docs/Web/CSS/Reference/Selectors/Pseudo-classes), un [pseudo-elemento](/es/docs/Web/CSS/Reference/Selectors/Pseudo-elements), un [combinador](/es/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators) o un [selector simple](/es/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector).
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición <code>css.selectors.NombreDelSelector</code> con la cadena de consulta para el selector en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}` en esas secciones, respectivamente).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el selector y su especificación en nuestro <a href="https://github.com/mdn/browser-compat-data">repositorio de datos de compatibilidad del navegador</a>.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Es `cssref` para todas las páginas de guía y referencia de CSS.
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
> Debes actualizar o eliminar las siguientes macros según el consejo a continuación:
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Los ejemplos de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> ---
>
> **Sección de sintaxis (`\{{CSSSyntax}}`)**
>
> El contenido de la sección de Sintaxis se genera usando la macro `\{{CSSSyntax}}`.
> Para que se llenen, debes asegurarte de que se haya llenado una entrada apropiada para el selector en nuestro archivo de datos [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json).
> Consulta [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) para obtener más información.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

El párrafo de resumen — comienza nombrando el selector y diciendo qué hace. Idealmente, esto debe ser una o dos oraciones cortas.

```css
/* Insertar bloque de código mostrando casos de uso comunes */
```

## Sintaxis

`\{{CSSSyntax}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Accesibilidad

Esta es una sección opcional. Incluye pautas de accesibilidad, mejores prácticas y preocupaciones potenciales que los desarrolladores deben tener en cuenta al usar esta propiedad. También puedes incluir soluciones alternativas donde corresponda.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces, querrás enlazar a ejemplos dados en otra página.
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

Incluye enlaces a páginas de referencia y guías relacionadas con el selector actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
