---
title: Plantilla de página de elemento HTML
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

El elemento [HTML](/es/docs/Web/HTML) **`<insertar_el_nombre_del_elemento>`** hace _(insertar un párrafo de resumen nombrando el elemento y diciendo qué hace, idealmente una o dos frases cortas)_.

## Pruébalo (Try it)

Esta sección es generada por la macro `InteractiveExample`. Incluye el título de la sección "Try it" y el editor de código. Consulta la sección de [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Directrices de escritura_ para más información.

Más información — en este punto, incluye algunos párrafos más explicando las cosas más importantes que se deben saber sobre el uso del elemento y sus características principales. Es bueno explicar brevemente qué sucede en el ejemplo interactivo si no es obvio de inmediato. También podrías explicar puntos clave sobre cómo este elemento interactúa con características importantes relacionadas de JavaScript o CSS. No entres en demasiados detalles (no conviene repetir la documentación en varias páginas), pero un punto clave más un enlace a la página de esa característica sería útil. De nuevo, consulta la página de `<video>` para ver un ejemplo.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `atributo1` {{Deprecated_inline}} {{experimental_inline}}
  - : Incluye aquí la descripción de lo que hace el atributo. Incluye un término y una definición para cada atributo. Si el atributo no es experimental ni está obsoleto, elimina las llamadas a macros correspondientes.
- `atributo2`
  - : etc.

## Eventos

Incluye una tabla de los eventos que se disparan en este tipo de elemento, si los hay.

| Nombre del evento | Se dispara cuando                       |
| ----------------- | --------------------------------------- |
| evento 1          | Explica brevemente cuándo se dispara    |
| evento 2          | Explica brevemente cuándo se dispara    |
| etc.              |                                         |

## Accesibilidad

Advierte sobre cualquier posible problema de accesibilidad que exista al usar este elemento y cómo solucionarlo. Elimina esta sección si no hay nada que enumerar.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

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

## Resumen técnico

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/es/docs/Web/HTML/Guides/Content_categories"
          >Categorías de contenido</a
        >
      </th>
      <td>
        Completa una lista de las categorías de contenido a las que pertenece el elemento HTML.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>¿Qué contenido se permite que contenga el elemento?</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>
        ¿Se puede omitir la etiqueta de cierre o debe estar presente? ¿Debe omitirse?
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        ¿De qué elementos padre puede ser hijo este elemento? Por ejemplo, "Cualquier
        elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
          >contenido de flujo (flow content)</a
        >."
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        Completa una lista de los roles ARIA que se pueden establecer en el elemento; por ejemplo,
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        ¿Qué interfaz DOM representa al elemento en JavaScript? Por ejemplo,
        {{domxref("HTMLOListElement")}} en el caso de ol.
      </td>
    </tr>
  </tbody>
</table>

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Ver también

Incluye enlaces a páginas de referencia y guías relacionadas con el elemento actual. Para más pautas, consulta la [sección Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
