---
title: Plantilla de página de función CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

> **Front matter de la página:**
>
> El front matter en la parte superior de la página se utiliza para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la función en particular. Ten en cuenta la presencia (o ausencia) de paréntesis.
>
> ```md
> ---
> title: nombreDeLaFuncion()
> slug: Web/CSS/Reference/Values/nombreDeLaFuncion
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.nombreDeLaFuncion
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : El valor de `title` se muestra en la parte superior de la página. El formato del título es _NombreDeLaFuncion()_.
>     Por ejemplo, la función [`pow()`](/es/docs/Web/CSS/Reference/Values/pow) tiene un título de _pow()_.
> - **slug**
>   - : El valor de `slug` es el final de la ruta URL después de `https://developer.mozilla.org/es/docs/`. Se formateará como `Web/CSS/Reference/Values/nombreDeLaFuncion`. Nota la ausencia de paréntesis en el slug.
>     Por ejemplo, el slug para la función [`pow()`](/es/docs/Web/CSS/Reference/Values/pow) es `Web/CSS/Reference/Values/pow`.
> - **page-type**
>   - : El valor de `page-type` para funciones CSS es `css-function`.
> - **status**
>   - : Etiquetas que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe configurarse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador (BCD). Consulta ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `css.types.NombreDeLaFuncion` con la cadena de consulta para la función en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data/tree/main/css/types). Consulta la sección _Otras macros en la página_ de este bloque de notas para ver cómo se utiliza esta clave-valor para generar contenido para las secciones de _Especificaciones_ y _Compatibilidad con navegadores_.
> - **sidebar**
>   - : Es `cssref` para todas las páginas de guía y referencia de CSS.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más detalles.
>
> ---
>
> **Macros de la parte superior de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (inmediatamente debajo del front matter).
> Estas macros son añadidas automáticamente por la cadena de herramientas (no es necesario añadirlas/eliminarlas):
>
> - `\{{SeeCompatTable}}`: Esta macro genera un banner de **Experimental**, que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología es experimental y está oculta tras una preferencia en Firefox, también debes completar una entrada para ella en la página de [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}`: Esta macro genera un banner de **Obsoleto (Deprecated)**, que indica que se desaconseja el uso de la tecnología.
> - `\{{Non-standard_Header}}`: genera un banner de **No estándar** que indica que la característica no forma parte de ninguna especificación.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para añadir estos estados a la página.
>
> Se muestran muestras de los banners **Experimental**, **Obsoleto** y **No estándar** justo después de este bloque de notas.
>
> ---
>
> **Otras macros en la página**
>
> - Sección de Sintaxis formal: El contenido para la sección _Sintaxis formal_ se genera utilizando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones utilizando el [paquete npm @webref/css](https://www.npmjs.com/package/@webref/css).
> - Secciones de Especificaciones y Compatibilidad con navegadores: La herramienta de compilación utiliza automáticamente el par clave-valor `browser-compat` del front matter para insertar datos en las secciones de _Especificaciones_ y _Compatibilidad con navegadores_ (reemplazando las macros `\{{Specifications}}` y `\{{Compat}}` en esas secciones, respectivamente).
>
>   Ten en cuenta que primero podrías necesitar crear/actualizar una entrada para la función y su especificación en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>   Consulta nuestra [guía de tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener información sobre cómo añadir o editar entradas.
>
> _Recuerda eliminar este bloque de nota antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio que nombre la función y explique qué hace. Idealmente, debería ser una o dos frases cortas.

## Pruébalo (Try it)

Esta sección es generada por la macro `InteractiveExample`. Incluye el título de la sección "Try it" y el editor de código. Consulta la sección de [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Directrices de escritura_ para más información.

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

/* Con un fallback vacío */
/* var( <nombre-de-propiedad-personalizada> , ) */
var(--custom-prop,)

/* Con un valor fallback */
/* var( <nombre-de-propiedad-personalizada> , <valor-de-declaracion> ) */
var(--custom-prop, initial)
var(--custom-prop, red)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
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

## Ver también

Incluye enlaces a páginas de referencia y guías relacionadas con la función actual. Para más pautas, consulta la [sección Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
