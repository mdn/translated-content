---
title: Plantilla de página de propiedad CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

> [!NOTE]
> _Elimina este bloque de notas antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se utiliza para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la propiedad en particular.
>
> ```md
> ---
> title: name-of-the-property
> slug: Web/CSS/Reference/Properties/name-of-the-property
> page-type: css-property O css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-of-the-property
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : El valor de `title` se muestra en la parte superior de la página. El formato del título es _nombre-de-la-propiedad_.
>     Por ejemplo, la propiedad {{cssxref("background-color")}} tiene el título _background-color_.
> - **slug**
>   - : El valor de `slug` es el final de la ruta de la URL después de `[https://developer.mozilla.org/en-US/docs/](https://developer.mozilla.org/en-US/docs/)`. Esto tendrá el formato `Web/CSS/Reference/Properties/nombre-de-la-propiedad`.
>     Por ejemplo, el slug para la propiedad {{cssxref("background-color")}} es `Web/CSS/Reference/Properties/background-color`. Para un componente de varias palabras como `Getting_started` en un slug, este debe usar un guion bajo, como en `/en-US/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : El valor de `page-type` para las propiedades CSS es `css-property`. Para una propiedad CSS abreviada (shorthand), el valor es `css-shorthand-property`. Por ejemplo, el valor de `page-type` para la propiedad [animation](/en-US/docs/Web/CSS/Reference/Properties/animation) es `css-shorthand-property` porque es una propiedad abreviada, mientras que el valor de `page-type` para la propiedad [animation-delay](/en-US/docs/Web/CSS/Reference/Properties/animation-delay) es `css-property`.
> - **status**
>   - : Etiquetas (flags) que describen el estado de esta característica. Es un arreglo (array) que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe configurarse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se añaden o actualizan los estados de las características"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición <code>css.properties.NameOfTheProperty</code> con la cadena de consulta (query string) para la propiedad en el [repositorio de datos de compatibilidad de navegadores (Browser compat data repo)](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Revisa la sección _Otras macros en la página_ de este bloque de notas para ver cómo se utiliza este par clave-valor para generar contenido para las secciones _Especificaciones_ y _Compatibilidad con navegadores_.
> - **sidebar**
>   - : Esto es `cssref` para todas las páginas de guía y referencia de CSS.
>     Consulta [Estructuras de página: Barras laterales](/en-US/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más detalles.
>
> ---
>
> **Macros de la parte superior de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (inmediatamente debajo del front matter de la página).
> El conjunto de herramientas (toolchain) añade automáticamente estas macros (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}`: Esta macro genera un banner de **Experimental**, que indica que la tecnología es [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología es experimental y está oculta detrás de una preferencia en Firefox, también debes completar una entrada para ella en la página [Características experimentales en Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}`: Esta macro genera un banner de **Obsoleto (Deprecated)**, que indica que el uso de la tecnología está [desaconsejado](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner de **No estándar (Non-standard)** que indica que la característica no forma parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros de acuerdo con los consejos a continuación:

> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se añaden o actualizan los estados de las características"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para añadir estos estados a la página.
> 
> Justo después de este bloque de notas se muestran ejemplos de los banners **Experimental**, **Obsoleto** y **No estándar**.
>
> ---
>
> **Otras macros en la página**
>
> - Sección de sintaxis formal: El contenido para la sección _Sintaxis formal_ se genera utilizando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones utilizando el [paquete npm @webref/css](https://www.npmjs.com/package/@webref/css).
> - Sección de definición formal: El contenido para la sección _Definición formal_ se genera utilizando la macro `\{{CSSInfo}}`. Para que esta sección tenga datos, debes asegurarte de que se haya completado una entrada adecuada para la propiedad correspondiente en el archivo de datos [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) en el repositorio `mdn/data`. Consulta la página de [Propiedades](https://github.com/mdn/data/blob/main/css/properties.md) para obtener más información.
> - Secciones de Especificaciones y Compatibilidad con navegadores: La herramienta de compilación utiliza automáticamente el par clave-valor `browser-compat` del front matter de la página para insertar datos en las secciones _Especificaciones_ y _Compatibilidad con navegadores_ (reemplazando las macros `\{{Specifications}}` y `\{{Compat}}` en esas secciones, respectivamente).
>
>   Ten en cuenta que es posible que primero debas crear o actualizar una entrada para la propiedad y su especificación en nuestro <a href="[https://github.com/mdn/browser-compat-data](https://github.com/mdn/browser-compat-data)">repositorio de datos de compatibilidad de navegadores</a>.
>   Consulta nuestra [guía de tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener información sobre cómo añadir o editar entradas.
>
> _Recuerda eliminar este bloque de notas antes de publicar._

{{SeeCompatTable}}{{deprecated_header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio que nombre la propiedad y explique qué hace. Idealmente, debería ser una o dos frases cortas.

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`. Incluye el título de la sección "Try it" y el editor de código. Consulta la sección de [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Directrices de escritura_ para más información.

## Propiedades constituyentes

Añade esta sección solo para propiedades abreviadas (shorthand), como [animation](/es/docs/Web/CSS/Reference/Properties/animation), para enumerar todas las propiedades completas (longhand) relacionadas.

## Sintaxis

Incluye los casos de uso comunes como un bloque de código y describe los subvalores de los componentes que forman un valor completo.

```css
/* Inserta el bloque de código que muestra los casos de uso comunes */
/* o categorías de valores */
```

### Valores

Incluye un término y una definición para cada subvalor.

- `subvalor1`
  - : Incluye una descripción del subvalor, su tipo de datos y qué representa.
- `subvalor2`
  - : Incluye una descripción del subvalor, su tipo de datos y qué representa.

> [!WARNING]
> No añadas [macros de estado en línea](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) en las páginas de CSS.

## Descripción

Esta es una sección opcional para incluir una descripción de la propiedad y explicar cómo funciona. Usa esta sección para explicar términos relacionados y añadir casos de uso para la propiedad.

## Definición formal

`\{{CSSInfo}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Sintaxis formal

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
> ### Uso de la API fetch
>
> Ejemplo de Fetch
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
> Para ver ejemplos de esta API, consulta [la página sobre fetch()](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la propiedad actual. Para más pautas, consulta la [sección Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
