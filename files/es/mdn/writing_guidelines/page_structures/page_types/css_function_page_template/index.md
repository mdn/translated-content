---
title: Plantilla de página de función CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
---

> [!NOTE]
> _Elimina este bloque de notas antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la función en particular. Ten en cuenta la presencia (o ausencia) de paréntesis.
>
> ```md
> ---
> title: nombreDeLaFunción()
> slug: Web/CSS/Reference/Values/nombreDeLaFunción
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.nombreDeLaFunción
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : El valor `title` se muestra en la parte superior de la página. El formato del título es _nombreDeLaFunción()_.
>     Por ejemplo, la función [`pow()`](/es/docs/Web/CSS/Reference/Values/pow) tiene un título de _pow()_.
> - **slug**
>   - : El valor `slug` es el final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`. Se formateará como `Web/CSS/Reference/Values/nombreDeLaFunción`. Ten en cuenta la ausencia de paréntesis en el slug.
>     Por ejemplo, el slug para la función [`pow()`](/es/docs/Web/CSS/Reference/Values/pow) es `Web/CSS/Reference/Values/pow`.
> - **page-type**
>   - : El valor `page-type` para funciones CSS es `css-function`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `css.types.nombreDeLaFunción` con la cadena de consulta para la función en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data/tree/main/css/types). Consulta la sección _Otras macros en la página_ de este bloque de notas para ver cómo este par clave-valor se usa para generar contenido para las secciones _Especificaciones_ y _Compatibilidad con navegadores_.
> - **sidebar**
>   - : Este es `cssref` para todas las páginas de guía y referencia de CSS.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas a macros en la parte superior de la sección de contenido (inmediatamente debajo del front matter de la página).
> Estas macros se agregan automáticamente mediante la cadena de herramientas (no hay necesidad de agregar/eliminar):
>
> - `\{{SeeCompatTable}}`: Esta macro genera un banner **Experimental**, que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología es experimental y está oculta detrás de una preferencia en Firefox, también debes llenar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}`: Esta macro genera un banner **Desaprobado**, que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Muestras de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> ---
>
> **Otras macros en la página**
>
> - Sección de sintaxis formal: El contenido de la sección _Sintaxis formal_ se genera usando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones usando el [paquete npm @webref/css](https://www.npmjs.com/package/@webref/css).
> - Secciones de Especificaciones y Compatibilidad con navegadores: La herramienta de compilación usa automáticamente el par clave-valor `browser-compat` del front matter de la página para insertar datos en las secciones _Especificaciones_ y _Compatibilidad con navegadores_ (reemplazando las macros `\{{Specifications}}` y `\{{Compat}}` en esas secciones, respectivamente).
>
>   Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para la función y su especificación en nuestro <a href="https://github.com/mdn/browser-compat-data">repositorio de datos de compatibilidad del navegador</a>.
>   Consulta nuestra [guía de tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener información sobre cómo agregar o editar entradas.
>
> _Recuerda eliminar este bloque de notas antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio, que nombra la función y dice qué hace.
Idealmente, esto debe ser una o dos oraciones cortas.

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`.
Esto incluye el título de la sección "Pruébalo" y el editor de código.
Consulta la sección [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Pautas de escritura_ para obtener más información.

## Sintaxis

Incluye un bloque de código CSS para mostrar los principales casos de uso de la sintaxis, incluidos ejemplos de parámetros que la función puede aceptar. Incluye solo la función en sí, no una declaración completa en la que ocurra. Por ejemplo, usa `minmax(200px, 1fr)`, no `grid-template-columns: minmax(min-content, 300px)`.

No termines las líneas de sintaxis con punto y coma: esto debe enfatizar que no estamos mostrando código CSS completo y válido aquí, solo el uso de la sintaxis.

Muestra todos los patrones de invocación que la función puede tomar. Precediendo a todos estos casos, agrega un comentario para describir el caso de uso y otro comentario para nombrar los parámetros y resaltar la puntuación de la sintaxis y el orden de los parámetros. Los nombres de los parámetros en el comentario deben coincidir con los parámetros listados en la sección "Parámetros".

El comentario que muestra cada patrón de invocación debe ir seguido de exactamente una línea vacía.

Por ejemplo:

```css
/* Sin respaldo */
/* var( <custom-property-name> ) */
var(--custom-prop)

/* Con un respaldo vacío */
/* var( <custom-property-name> , ) */
var(--custom-prop,)

/* Con un valor de respaldo */
/* var( <custom-property-name> , <declaration-value> ) */
var(--custom-prop, initial)
var(--custom-prop, red)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Parámetros

Enumera los parámetros que la función puede aceptar como un {{htmlelement("dl")}}. Enuméralos en el orden en que aparecen en la sección _Sintaxis formal_. Indica si un parámetro es opcional usando la insignia `optional_inline`.
Incluye un término y definición para cada parámetro.

- `<custom-property-name>`
  - : Incluye una descripción del parámetro, su tipo de dato y su valor predeterminado si lo hay.
- `<declaration-value>` {{optional_inline}}
  - : Incluye una descripción del parámetro, su tipo de dato y su valor predeterminado si lo hay.

> [!WARNING]
> No agregues [macros de estado en línea](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) en páginas CSS.

### Valor de retorno

Describe el valor devuelto por la función. Comienza la descripción con la palabra "Returns"; por ejemplo, "Returns a `<number>` or `<dimension>`."

## Descripción

Esta sección es opcional pero recomendada. Contiene una descripción de la función y explica cómo funciona. Usa esta sección para explicar términos relacionados y agregar casos de uso para la función.

## Sintaxis formal

No todas las funciones tienen sintaxis formal: si una función no la tiene, omite toda esta sección.

`\{{CSSSyntax}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Accesibilidad

Esta es una sección opcional. Incluye pautas de accesibilidad, mejores prácticas y posibles preocupaciones de las que los desarrolladores deben estar al tanto al usar esta propiedad. También puedes incluir soluciones alternativas donde sea aplicable.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Agrega un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Usar la función polygon()
>
> Ejemplo de polygon()
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
> Para ejemplos de esta función, consulta [la página sobre basic-shape](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la función actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
