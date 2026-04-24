---
title: Plantilla de página de propiedad CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio que nombre la propiedad y explique qué hace. Idealmente, debería ser una o dos frases cortas.

## Pruébalo (Try it)

Esta sección es generada por la macro `InteractiveExample`. Incluye el título de la sección "Try it" y el editor de código.  Consulta la sección de [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Directrices de escritura_ para más información.

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

## Ver también

Incluye enlaces a páginas de referencia y guías relacionadas con la propiedad actual. Para más pautas, consulta la [sección Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)