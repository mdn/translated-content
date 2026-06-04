---
title: Plantilla de página de módulo CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

> [!NOTE]
> _Recuerda eliminar este bloque de notas antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página define los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el módulo en particular.
>
> ```md
> ---
> title: CSS NombreDelModulo
> slug: Web/CSS/Guides/NameOfTheModule
> page-type: css-module
> spec-urls:
>  - url1
>  - url2
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : El valor de `title` se muestra en la parte superior de la página.
>     Es el texto "CSS" seguido del nombre del módulo.
>     Por ejemplo, el título para la página del módulo [grid layout](/es/docs/Web/CSS/Guides/Grid_layout) es _CSS grid layout_.
> - **slug**
>   - : El valor de `slug` es el final de la ruta URL después de `https://developer.mozilla.org/es/docs/`.
>     Tendrá el formato `Web/CSS/Guides/NombreDelModulo`.
>     Por ejemplo, el slug para la página del módulo [grid layout](/es/docs/Web/CSS/Guides/Grid_layout) es `Web/CSS/Guides/Grid_layout`.
> - **page-type**
>   - : El valor de `page-type` para las páginas de módulos CSS es siempre `css-module`.
> - **spec-urls**
>   - : El valor de `spec-urls` es una URL de la especificación o una lista con viñetas de las URLs de múltiples niveles de la misma especificación en casos donde hay múltiples versiones, tales como niveles 1, 2 y 3. Incluye solo los módulos que son revisiones de una única especificación, en orden descendente. Por ejemplo, la clave `spec-urls` para la página del módulo [filter effects](/es/docs/Web/CSS/Guides/Filter_effects) es la siguiente:
>
> ```plain
> spec-urls:
>     - https://drafts.csswg.org/filter-effects-2/
>     - https://drafts.csswg.org/filter-effects-1/
> ```
>
> - **sidebar**
>   - : Es `cssref` para todas las páginas de guía y referencia de CSS.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más detalles.
>
> ---
>
> _Recuerda eliminar este bloque de notas antes de publicar._

Comienza el contenido de la página con un párrafo introductorio que nombre el módulo y explique qué hace. Proporciona brevemente una visión general de las características definidas en la especificación y, si es relevante, describe cómo interactúan con características de especificaciones relacionadas. Esta descripción es una visión rápida, NO un tutorial o guía, así que mantenla breve.

## NombreDelModulo en acción

En esta sección, incluye un ejemplo utilizando `\{{EmbedLiveSample}}` (consulta [Ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para más información) que ayude a demostrar la utilidad y el poder de las diversas propiedades proporcionadas por este módulo.
El propósito de esta sección es demostrar casos de uso y despertar el interés y la curiosidad de los lectores que están aprendiendo sobre este módulo. Mantén el código oculto a menos que sea esencial para comprender los casos de uso (por ejemplo, espacios de nombres o anidamiento).

Si es relevante, proporciona una breve descripción de cómo los lectores pueden interactuar con el ejemplo.

## Referencia

Crea las subsecciones pertinentes para enumerar las propiedades, funciones, tipos de datos relacionados, etc. La sección de referencia debe incluir únicamente las características introducidas en esa especificación concreta. Si una característica está en la especificación pero no está soportada, menciónala en un párrafo bajo el encabezado correspondiente. Las características relacionadas definidas en otras especificaciones van en "conceptos relacionados", y NO en esta sección.

### Propiedades

Una lista de todas las propiedades (abreviadas y completas) proporcionadas por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando las propiedades introducidas por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna propiedad.

### Reglas-at (@rules)

Una lista de las reglas-at de CSS proporcionadas por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando las reglas-at introducidas por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna regla-at.

### Funciones

Una lista de las funciones CSS proporcionadas por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando las funciones introducidas por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna función CSS.

### Tipos de datos

Una lista de los tipos de datos CSS proporcionados por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando los tipos de datos introducidos por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ningún tipo de datos.

### Eventos

Una lista de los eventos de API proporcionados por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando los eventos introducidos por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ningún evento.

### Interfaces

Una lista de las interfaces de API relacionadas proporcionadas por el módulo que estén soportados en al menos un navegador principal.

Añade un párrafo indicando las interfaces introducidas por el módulo que aún no están soportados por ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna interfaz de API.

### Términos del glosario y definiciones

Enumera los términos del glosario relacionados y otros términos definidos dentro de las páginas de referencia enumeradas anteriormente. Omite esta sección si no hay nada relevante que incluir.

## Guías

Una lista de definiciones de las guías relacionadas dentro de la estructura del módulo, en orden de complejidad creciente, seguida de guías relacionadas de otros módulos. Solo incluye guías de MDN.

- EnlaceAGuia1
  - : Descripción de una frase de la guía.
- EnlaceAGuia2
  - : Descripción de una frase de la guía.

## Conceptos relacionados

Enumera todas las demás propiedades, tipos de datos, términos del glosario, etc., que estén relacionados con este módulo.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Vease también

Incluye enlaces a cualquier otra página de referencia y otro contenido que sea relevante pero que no encaje en las otras secciones. Si hay guías externas relevantes que valga la pena enlazar, colócalas al final de la lista (no bajo la sección "Guías", que está limitada a guías de MDN). Consulta la sección [Vease también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en nuestra _Guía de estilo de escritura_ para más consejos e instrucciones.

- enlace1
- enlace2
- enlace_externo (año)
