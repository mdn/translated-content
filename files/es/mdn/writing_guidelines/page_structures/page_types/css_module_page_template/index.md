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
> El front matter en la parte superior de la página define "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el módulo en particular.
>
> ```md
> ---
> title: CSS NombreDelMódulo
> slug: Web/CSS/Guides/NombreDelMódulo
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : El valor `title` se muestra en la parte superior de la página.
>     Este es el texto "CSS" seguido del nombre del módulo.
>     Por ejemplo, el título para la página del módulo [grid layout](/es/docs/Web/CSS/Guides/Grid_layout) es _CSS grid layout_.
> - **slug**
>   - : El valor `slug` es el final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formateará como `Web/CSS/Guides/NombreDelMódulo`.
>     Por ejemplo, el slug para la página del módulo [grid layout](/es/docs/Web/CSS/Guides/Grid_layout) es `Web/CSS/Guides/Grid_layout`.
> - **page-type**
>   - : El valor `page-type` para las páginas de módulo CSS es siempre `css-module`.
> - **spec-urls**
>   - : El valor `spec-urls` es una URL de la especificación o una lista con viñetas de las URL de múltiples niveles de la misma especificación en casos donde hay múltiples versiones de una especificación, como los niveles 1, 2 y 3. Incluye solo los módulos que son revisiones de una sola especificación, en orden descendente. Por ejemplo, la clave `spec-urls` para la página del módulo [filter effects](/es/docs/Web/CSS/Guides/Filter_effects) es la siguiente:
>
> ```plain
> spec-urls:
>     - https://drafts.csswg.org/filter-effects-2/
>     - https://drafts.csswg.org/filter-effects-1/
> ```
>
> - **sidebar**
>   - : Es `cssref` para todas las páginas de guía y referencia de CSS.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> _Recuerda eliminar este bloque de notas antes de publicar._

Comienza el contenido de la página con un párrafo introductorio que nombre el módulo y explique qué hace. Proporciona brevemente una descripción general de las características definidas en la especificación y, si es relevante, describe cómo interactúan con las características de especificaciones relacionadas. Esta descripción es una descripción general rápida, NO un tutorial o guía, así que manténla breve.

## NombreDelMódulo en acción

En esta sección, incluye un ejemplo usando `\{{EmbedLiveSample}}` (consulta [Ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples) para obtener más información) que ayude a demostrar la utilidad y el poder de varias propiedades proporcionadas por este módulo.
El propósito de esta sección es demostrar casos de uso y crear interés y curiosidad en la mente de los lectores que aprenden sobre este módulo. Mantén el código oculto a menos que sea esencial para entender los casos de uso (por ejemplo, espacios de nombres o anidamiento).

Si es relevante, proporciona una breve descripción de cómo los lectores pueden interactuar con el ejemplo.

## Referencia

Crea las subsecciones relevantes para listar las propiedades, funciones, tipos de datos, etc. relacionados. La sección de referencia debe incluir solo las características introducidas en la especificación única. Si una característica está en la especificación pero no es compatible, menciónala en un párrafo bajo el encabezado apropiado. Las características relacionadas definidas en otras especificaciones van en "conceptos relacionados", y NO en esta sección.

### Propiedades

Una lista de todas las propiedades abreviadas y completas proporcionadas por el módulo que son compatibles con al menos un navegador principal.

Agrega un párrafo que indique las propiedades introducidas por el módulo que aún no son compatibles con ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna propiedad.

### Reglas-arroba

Una lista de reglas-arroba CSS proporcionadas por el módulo que son compatibles con al menos un navegador principal.

Agrega un párrafo que indique las reglas-arroba introducidas por el módulo que aún no son compatibles con ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna regla-arroba.

### Funciones

Una lista de funciones CSS proporcionadas por el módulo que son compatibles con al menos un navegador principal.

Agrega un párrafo que indique las funciones introducidas por el módulo que aún no son compatibles con ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna función CSS.

### Tipos de datos

Una lista de tipos de datos CSS proporcionados por el módulo que son compatibles con al menos un navegador principal.

Agrega un párrafo que indique los tipos de datos introducidos por el módulo que aún no son compatibles con ningún navegador, si los hay.

Omite esta sección si el módulo no define ningún tipo de datos.

### Eventos

Una lista de eventos de API proporcionados por el módulo que son compatibles con al menos un navegador principal.

Agrega un párrafo que indique los eventos introducidos por el módulo que aún no son compatibles con ningún navegador, si los hay.

Omite esta sección si el módulo no define ningún evento.

### Interfaces

Una lista de las interfaces de API relacionadas proporcionadas por el módulo que son compatibles con al menos un navegador principal.

Agrega un párrafo que indique las interfaces introducidas por el módulo que aún no son compatibles con ningún navegador, si las hay.

Omite esta sección si el módulo no define ninguna interfaz de API.

### Términos y definiciones del glosario

Enumera los términos del glosario relacionados y otros términos definidos dentro de las páginas de referencia enumeradas anteriormente. Omite esta sección si no hay nada relevante que incluir.

## Guías

Una lista de definiciones de las guías relacionadas dentro de la estructura del módulo, en orden de complejidad creciente, seguida de guías relacionadas de otros módulos. Incluye solo guías de MDN.

- EnlaceAGuía1
  - : Descripción de una frase de la guía.
- EnlaceAGuía2
  - : Descripción de una frase de la guía.

## Conceptos relacionados

Enumera todas las demás propiedades, tipos de datos, términos del glosario, etc. que estén relacionados con este módulo.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a cualquier otra página de referencia y otro contenido que sea relevante pero no encaje en las otras secciones. Si hay guías externas relevantes que valgan la pena vincular, colócalas al final de la lista (no en la sección "Guías", que se limita a guías de MDN). Consulta la sección [Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en nuestra _Guía de estilo de escritura_ para obtener más sugerencias y direcciones.

- enlace1
- enlace2
- enlace_externo (año)
