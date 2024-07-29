---
title: Plantilla de página de destino del módulo CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_landing_page_template
l10n:
  sourceCommit: bfdfe970004b21218ef4ab6a4274d4fb29c4742b
---

{{MDNSidebar}}

> **Nota:** _Recuerde eliminar este bloque de notas antes de publicar._
>
> ---
>
> **Metadatos de la página:**
>
> La parte superior de la página se utiliza para definir "metadatos de página".
> Los valores deben actualizarse adecuadamente para el módulo en particular.
>
> ```md
> ---
> title: NombreDelModulo CSS
> slug: Web/CSS/CSS_NameOfTheModule
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> ---
> ```
>
> - **title**
>   - : El valor `title` se muestra en la parte superior de la página.
>     Este es el nombre del módulo seguido del texto "CSS".
>     Por ejemplo, el título de la página de inicio del módulo [grid layout](/es/docs/Web/CSS/CSS_grid_layout) es _Diseño de cuadrícula de CSS_.
> - **slug**
>   - : El valor `slug` es el final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`.
>     Esto se formateará como `Web/CSS/CSS_NameOfTheModule`.
>     Por ejemplo, el `slug` para la página de inicio del módulo [grid layout](/es/docs/Web/CSS/CSS_grid_layout) es `Web/CSS/CSS_grid_layout`.
> - **page-type**
>   - : El valor `page-type` para las páginas de destino del módulo CSS es `css-module` (solo para contenido en ingles).
> - **spec-urls**
>
>   - : El valor `spec-urls` es una URL de la especificación. En caso de que haya más de una versión de la especificación que sea relevante, preséntelas en una lista con viñetas. Por ejemplo, el valor de la clave `spec-urls` para la página de inicio del módulo [filter effects](/es/docs/Web/CSS/CSS_filter_effects) es (solo para contenido en ingles):
>
>     ```plain
>     - `https://drafts.fxtf.org/filter-effects-2/`
>     - `https://drafts.fxtf.org/filter-effects-1/`
>     ```
>
> ---
>
> **Macros al principio de la pagina**
>
> La macro llamada `\{{CSSRef}}` aparece en la parte superior de la sección de contenido (inmediatamente debajo de los metadatos).
> Esta macro debe estar presente en cada página de destino del módulo CSS. Genera una barra lateral CSS adecuada, dependiendo de las etiquetas incluidas en la página.
> Elimine la macro `\{{MDNSidebar}}` cuando utilice esta plantilla.
>
> ---
>
> _Recuerde eliminar este bloque de notas antes de publicar._

Comience el contenido de la página con un párrafo introductorio, que nombra el módulo y dice lo que hace.
Idealmente, esto debería ser una o dos oraciones cortas.

## NombreDelModulo en acción

En esta sección, incluya un ejemplo interactivo del módulo que ayude a demostrar la utilidad o el poder de varias propiedades proporcionadas por este módulo. El propósito de esta sección es demostrar algunos casos de uso y crear interés y curiosidad en la mente de los lectores que aprenden sobre este módulo.

Proporcione una breve descripción de cómo los lectores pueden interactuar con el ejemplo. No entres en muchos detalles para explicar el ejemplo y no incluyas fragmentos de código. Añade un enlace al código fuente del ejemplo en el repositorio [`css-examples`](https://github.com/mdn/css-examples/tree/main/modules). Por ejemplo, para el ejemplo interactivo del módulo de efectos de filtro, diría:
"Para ver el código de este ejemplo, [ver el código fuente en GitHub](https://github.com/mdn/css-examples/blob/main/modules/filters.html)."

## Referencia

Cree las subsecciones relevantes para enumerar las propiedades, funciones, tipos de datos, etc. relacionados.

### Propiedades

Lista de todas las propiedades abreviadas y completas proporcionadas por el módulo.

### Reglas arroba

Lista de reglas de arroba CSS proporcionada por el módulo. Omita esta sección si no hay reglas de arroba CSS relevantes para este módulo.

### Funciones

Lista de funciones CSS proporcionadas por el módulo. Omita esta sección si no hay funciones CSS relevantes para este módulo.

### Tipos de datos

Lista de tipos de datos CSS proporcionados por el módulo. Omita esta sección si no hay tipos de datos CSS relevantes para este módulo.

### Eventos

Lista de eventos de API proporcionados por el módulo. Omita esta sección si no hay eventos relevantes para este módulo.

### Interfaces

Enumere la API relacionada y las interfaces proporcionadas por el módulo. Omita esta sección si no hay interfaces API relevantes para este módulo.

## Guías

- EnlaceAGuia1
  - : Descripción de la guía en una o dos frases.
- EnlaceAGuia2
  - : Descripción de la guía en una o dos frases.

## Conceptos relacionados

Enumere todas las demás propiedades, tipos de datos o términos del glosario que puedan ser relevantes o estar relacionados con este módulo.

Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimine las comillas inveritdas y la barra invertida en el archivo de markdown._

Vease también

Incluya enlaces a páginas de referencia y guías relacionadas con la propiedad actual. Consulta la sección [Vease también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en nuestra _Guía de estilo de escritura_ para obtener más consejos e instrucciones.

- enlace1
- enlace2
- enlace_externo (año)
