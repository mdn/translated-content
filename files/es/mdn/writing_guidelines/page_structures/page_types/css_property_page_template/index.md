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
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la propiedad en particular.
>
> ```md
> ---
> title: nombre-de-la-propiedad
> slug: Web/CSS/Reference/Properties/nombre-de-la-propiedad
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.nombre-de-la-propiedad
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : El valor `title` se muestra en la parte superior de la página. El formato del título es _nombre-de-la-propiedad_.
>     Por ejemplo, la propiedad {{cssxref("background-color")}} tiene un título de _background-color_.
> - **slug**
>   - : El valor `slug` es el final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`. Se formateará como `Web/CSS/Reference/Properties/nombre-de-la-propiedad`.
>     Por ejemplo, el slug para la propiedad {{cssxref("background-color")}} es `Web/CSS/Reference/Properties/background-color`. Para un componente de varias palabras como `Getting_started` en un slug, el slug debe usar un guión bajo como en `/es/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type**
>   - : El valor `page-type` para las propiedades CSS es `css-property`. Para una propiedad CSS abreviada, el valor es `css-shorthand-property`. Por ejemplo, el valor `page-type` para la propiedad [animation](/es/docs/Web/CSS/Reference/Properties/animation) es `css-shorthand-property` porque es una propiedad abreviada, mientras que el valor `page-type` para la propiedad [animation-delay](/es/docs/Web/CSS/Reference/Properties/animation-delay) es `css-property`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición <code>css.properties.NombreDeLaPropiedad</code> con la cadena de consulta para la propiedad en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Consulta la sección _Otras macros en la página_ de este bloque de notas para ver cómo se usa este par clave-valor para generar contenido para las secciones _Especificaciones_ y _Compatibilidad con navegadores_.
> - **sidebar**
>   - : Es `cssref` para todas las páginas de guía y referencia de CSS.
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
> Debes actualizar o eliminar las siguientes macros según el consejo a continuación:
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Los ejemplos de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> ---
>
> **Otras macros en la página**
>
> - Sección de sintaxis formal: El contenido de la sección _Sintaxis formal_ se genera usando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones usando el [paquete npm @webref/css](https://www.npmjs.com/package/@webref/css).
> - Sección de definición formal: El contenido de la sección _Definición formal_ se genera usando la macro `\{{CSSInfo}}`. Para que esta sección tenga datos, debes asegurarte de que se haya llenado una entrada apropiada para la propiedad correspondiente en el archivo de datos [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) en el repositorio `mdn/data`. Consulta la página [Properties](https://github.com/mdn/data/blob/main/css/properties.md) para obtener más información.
> - Secciones de Especificaciones y Compatibilidad con navegadores: La herramienta de compilación usa automáticamente el par clave-valor `browser-compat` del front matter de la página para insertar datos en las secciones _Especificaciones_ y _Compatibilidad con navegadores_ (reemplazando las macros `\{{Specifications}}` y `\{{Compat}}` en esas secciones, respectivamente).
>
>   Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para la propiedad y su especificación en nuestro <a href="https://github.com/mdn/browser-compat-data">repositorio de datos de compatibilidad del navegador</a>.
>   Consulta nuestra [guía de tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener información sobre cómo agregar o editar entradas.
>
> _Recuerda eliminar este bloque de notas antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio, que nombre la propiedad y diga qué hace.
Idealmente, esto debe ser una o dos oraciones cortas.

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`.
Esto incluye el título de sección "Pruébalo" y el editor de código.
Consulta la sección [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Guías de escritura_ para obtener más información.

## Propiedades constituyentes

Agrega esta sección solo para propiedades abreviadas, como [animation](/es/docs/Web/CSS/Reference/Properties/animation), para listar todas las propiedades con descripción completa relacionadas.

## Sintaxis

Incluye los casos de uso comunes como un bloque de código y describe los subvalores del componente que forman un valor completo.

```css
/* Insertar bloque de código mostrando casos de uso comunes */
/* o categorías de valores */
```

### Valores

Incluye un término y una definición para cada subvalor.

- `subvalor1`
  - : Incluye una descripción del subvalor, su tipo de dato y lo que representa.
- `subvalor2`
  - : Incluye una descripción del subvalor, su tipo de dato y lo que representa.

> [!WARNING]
> No agregues [macros de estado en línea](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#feature_status_icons_in_definition_lists) en páginas CSS.

## Descripción

Esta es una sección opcional para incluir una descripción de la propiedad y explicar cómo funciona. Usa esta sección para explicar términos relacionados y agregar casos de uso para la propiedad.

## Definición formal

`\{{CSSInfo}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Sintaxis formal

`\{{CSSSyntax}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Accesibilidad

Esta es una sección opcional. Incluye pautas de accesibilidad, mejores prácticas y preocupaciones potenciales que los desarrolladores deben tener en cuenta al usar esta propiedad. También puedes incluir soluciones alternativas donde corresponda.

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

Incluye enlaces a páginas de referencia y guías relacionadas con la propiedad actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
