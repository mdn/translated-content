---
title: Plantilla de página de función CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

> [!NOTE]
> _Remove this note block before publishing._
>
> ---
>
> **Page front matter:**
>
> The front matter at the top of the page is used to define "page metadata".
> The values should be updated appropriately for the particular function. Note the presence (or absence) of parenthesis.
>
> ```md
> ---
> title: nameOfTheFunction()
> slug: Web/CSS/Reference/Values/nameOfTheFunction
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.nameOfTheFunction
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : The `title` value is displayed at the top of the page. The title format is _NameOfTheFunction()_.
>     For example, the [`pow()`](/es/docs/Web/CSS/Reference/Values/pow) function has a title of _pow()_.
> - **slug**
>   - : The `slug` value is the end of the URL path after `https://developer.mozilla.org/en-US/docs/`. This will be formatted as `Web/CSS/Reference/Values/nameOfTheFunction`. Note the absence of parentheses in the slug.
>     For example, the slug for the [`pow()`](/es/docs/Web/CSS/Reference/Values/pow) function is `Web/CSS/Reference/Values/pow`.
> - **page-type**
>   - : The `page-type` value for CSS functions is `css-function`.
> - **status**
>   - : Flags describing the status of this feature. An array which may contain one or more of the following: `experimental`, `deprecated`, `non-standard`. This key should not be set manually: it is set automatically based on values in the browser compatibility data for the feature. See ["How feature statuses are added or updated"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Replace the placeholder value `css.types.NameOfTheFunction` with the query string for the function in the [Browser compat data repo](https://github.com/mdn/browser-compat-data/tree/main/css/types). Check the _Other macros in the page_ section of this note block to see how this key-value is used to generate content for the _Specifications_ and _Browser compatibility_ sections.
> - **sidebar**
>   - : This is `cssref` for all CSS guide and reference pages.
>     See [Page structures: Sidebars](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) for details.
>
> ---
>
> **Top-of-the-page macros**
>
> A number of macro calls appear at the top of the content section (immediately below the page front matter).
> These macros are automatically added by the toolchain (there is no need to add/remove):
>
> - `\{{SeeCompatTable}}`: This macro generates an **Experimental** banner, which indicates that the technology is [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   If the technology is experimental and is hidden behind a preference in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/es/docs/Mozilla/Firefox/Experimental_features) page.
> - `\{{Deprecated_Header}}`: This macro generates a **Deprecated** banner, which indicates that the use of the technology is [discouraged](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — this generates a **Non-standard** banner that indicates that the feature is not part of any specification.
>
> Do not provide status header macros manually. Refer to the section ["How feature statuses are added or updated"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) to add these statuses to the page.
>
> Samples of the **Experimental**, **Deprecated**, and **Non-standard** banners are shown right after this note block.
>
> ---
>
> **Other macros in the page**
>
> - Formal syntax section: The content for the _Formal syntax_ section is generated using the `\{{CSSSyntax}}` macro. This macro fetches data from the specifications using the [@webref/css npm package](https://www.npmjs.com/package/@webref/css).
> - Specifications and Browser compatibility sections: The build tool automatically uses the `browser-compat` key-value pair from the page front matter to insert data into the _Specifications_ and _Browser compatibility_ sections (replacing the `\{{Specifications}}` and `\{{Compat}}` macros in those sections, respectively).
>
>   Note that you may first need to create/update an entry for the function and its specification in our <a href="https://github.com/mdn/browser-compat-data">Browser compat data repo</a>.
>   See our [compatibility tables guide](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) for information on adding or editing entries.
>
> _Remember to remove this note block before publishing._
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio que nombre la función y explique qué hace. Idealmente, debería ser una o dos frases cortas.

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`. Incluye el título de la sección "Pruébalo" y el editor de código. Consulta la sección de [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Guías de escritura_ para más información.

## Sintaxis

Incluye un bloque de código CSS para mostrar los principales casos de uso de la sintaxis, incluyendo ejemplos de parámetros que la función puede aceptar. Solo incluye la función en sí, no una declaración completa en la que ocurra. Por ejemplo, usa `minmax(200px, 1fr)`, no `grid-template-columns: minmax(min-content, 300px)`.

No termines las líneas de sintaxis con puntos y coma: esto debe enfatizar que no estamos mostrando código CSS válido completo, solo el uso de la sintaxis.

Muestra todos los patrones de invocación que puede tomar la función. Antes de cada caso, añade un comentario para describir el caso de uso y otro comentario para nombrar los parámetros y resaltar la puntuación de la sintaxis y el orden de los parámetros. Los nombres de los parámetros en el comentario deben coincidir con los parámetros enumerados en la sección "Parámetros".

El comentario que muestra cada patrón de invocación debe ir seguido de exactamente una línea vacía.

Por ejemplo:

```css
/* Sin un valor alternativo (fallback) */
/* var( <nombre-de-propiedad-personalizada> ) */
var(--custom-prop)

/* Con un valor alternativo vacío */
/* var( <nombre-de-propiedad-personalizada> , ) */
var(--custom-prop,)

/* Con un valor alternativo*/
/* var( <nombre-de-propiedad-personalizada> , <valor-de-declaracion> ) */
var(--custom-prop, initial)
var(--custom-prop, red)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
```

### Parámetros

Enumera los parámetros que la función puede aceptar como una lista de definiciones {{htmlelement("dl")}}. Enumérelos en el orden en que aparecen en la sección _Sintaxis formal_. Indica si un parámetro es opcional utilizando la etiqueta `optional_inline`.
Incluye un término y una definición para cada parámetro.

- `<nombre-de-propiedad-personalizada>`
  - : Incluye una descripción del parámetro, su tipo de datos y su valor predeterminado si lo hubiera.
- `<valor-de-declaracion>` {{optional_inline}}
  - : Incluye una descripción del parámetro, su tipo de datos y su valor predeterminado si lo hubiera.

> [!WARNING]
> No añadas [macros de estado en línea](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) en las páginas de CSS.

### Valor de retorno

Describe el valor devuelto por la función. Comienza la descripción con la palabra "Devuelve"; por ejemplo, "Devuelve un `<number>` o `<dimension>`."

## Descripción

Esta sección es opcional pero recomendada. Contiene una descripción de la función y explica cómo funciona. Usa esta sección para explicar términos relacionados y añadir casos de uso para la función.

## Sintaxis formal

No todas las funciones tienen sintaxis formal: si una función no la tiene, omite toda esta sección.

`\{{CSSSyntax}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Accesibilidad

Esta es una sección opcional. Incluye pautas de accesibilidad, mejores prácticas y posibles preocupaciones que los desarrolladores deben tener en cuenta al usar esta propiedad. También puedes incluir alternativas o soluciones cuando corresponda.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Añade un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y algunos más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Uso de la función polygon()
>
> Ejemplo de polygon()
>
> ### Más ejemplos
>
> Enlaces a más ejemplos en otras páginas
> ```
>
> **Escenario 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta:
>
> No añadas encabezados H3; simplemente añade los enlaces directamente bajo el encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta función, consulta [la página sobre basic-shape](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la función actual. Para más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#véase_también) en la _Guía de estilo de redacción_.

- enlace1
- enlace2
- enlace_externo (año)
