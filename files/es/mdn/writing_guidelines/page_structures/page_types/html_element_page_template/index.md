---
title: Plantilla de página de elemento HTML
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE]
> _Elimina esta nota explicativa completa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el elemento en particular.
>
> ```md
> ---
> title: "<NombreDelElemento>: El elemento NombreDelElemento"
> slug: Web/HTML/Reference/Elements/NombreDelElemento
> page-type: html-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.elements.NombreDelElemento
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Formato como `'<NombreDelElemento>: Descripción del propósito del elemento'`.
>     Por ejemplo, el elemento [`<video>`](/es/docs/Web/HTML/Reference/Elements/video) tiene un _title_ de: **'\<video>: El elemento de incrustación de video'**.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formateará como `Web/HTML/Reference/Elements/NombreDelElemento`, donde el nombre del elemento está en _minúsculas_.
>     Por ejemplo, el elemento [`<video>`](/es/docs/Web/HTML/Reference/Elements/video) tiene un _slug_ de `Web/HTML/Reference/Elements/video`.
> - **page-type**
>   - : Siempre `html-element`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `html.elements.NombreDelElemento` con la cadena de consulta para el elemento en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el elemento en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Este es `htmlsidebar` para todas las páginas de guía y referencia de HTML.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias macros en la parte superior de la sección de contenido inmediatamente después del front matter de la página.
> Estas macros se agregan automáticamente mediante las herramientas, así que evita agregar o eliminarlas:
>
> - `\{{SeeCompatTable}}` — esto genera un banner **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes llenar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para obtener más información.
>
> Ejemplos de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran después de este bloque de notas.
>
> _Recuerda eliminar esta nota explicativa completa antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

El **`<inserta_el_nombre_del_elemento>`** [elemento HTML](/es/docs/Web/HTML) hace _(inserta un párrafo de resumen nombrando el elemento y diciendo qué hace, idealmente una o dos oraciones cortas)_.

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`.
Esto incluye el título de la sección "Pruébalo" y el editor de código.
Consulta la sección [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Pautas de escritura_ para obtener más información.

Información adicional: en este punto, incluye algunos párrafos más explicando las cosas más importantes que necesitas saber sobre el uso del elemento y sus características principales. Es bueno explicar brevemente qué está sucediendo en el ejemplo interactivo si no es inmediatamente obvio. También puedes explicar puntos clave sobre cómo este elemento interactúa con características importantes de JavaScript o CSS relacionadas. No demasiado detalle — no quieres repetir la documentación en varias páginas — pero un punto clave más un enlace a la página de esa característica sería útil. Nuevamente, consulta la página `<video>` para ver un ejemplo.

## Atributos

Este elemento incluye los [atributos globales](/es/docs/Web/HTML/Reference/Global_attributes).

- `atributo1` {{Deprecated_inline}} {{experimental_inline}}
  - : Incluye aquí la descripción de qué hace el atributo. Incluye un término y definición para cada atributo. Si el atributo no es experimental/desaprobado, elimina las llamadas a macro relevantes.
- `atributo2`
  - : etc.

## Eventos

Incluye una tabla de los eventos activados en este tipo de elemento, si los hay.

| Nombre del evento | Se activa cuando                    |
| ----------------- | ----------------------------------- |
| evento 1          | Explica brevemente cuándo se activa |
| evento 2          | Explica brevemente cuándo se activa |
| etc.              |                                     |

## Accesibilidad

Advierte sobre cualquier posible preocupación de accesibilidad que exista al usar este elemento, y cómo solucionarlas. Elimina esta sección si no hay nada que listar.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

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
        Llena una lista de las categorías de contenido a las que pertenece el elemento HTML.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenido permitido</th>
      <td>¿Qué contenido se permite que contenga el elemento?</td>
    </tr>
    <tr>
      <th scope="row">Omisión de etiqueta</th>
      <td>
        ¿Se puede omitir la etiqueta de cierre, o debe estar presente? ¿Debe omitirse?
      </td>
    </tr>
    <tr>
      <th scope="row">Padres permitidos</th>
      <td>
        ¿Qué elementos padres pueden tener este elemento como hijo? Por ejemplo "Cualquier
        elemento que acepte
        <a href="/es/docs/Web/HTML/Guides/Content_categories#flow_content"
          >contenido de flujo</a
        >."
      </td>
    </tr>
    <tr>
      <th scope="row">Roles ARIA permitidos</th>
      <td>
        Llena una lista de roles ARIA que se pueden establecer en el elemento; por ejemplo
        <a href="/es/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Interfaz DOM</th>
      <td>
        ¿Qué interfaz DOM representa el elemento en JavaScript? Por ejemplo
        {{domxref("HTMLOListElement")}} en el caso de ol.
      </td>
    </tr>
  </tbody>
</table>

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el elemento actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
