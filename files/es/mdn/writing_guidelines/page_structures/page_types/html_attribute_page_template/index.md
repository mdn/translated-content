---
title: Plantilla de página de atributo HTML
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Los atributos HTML caen en dos categorías: **atributos específicos del elemento**, que solo se aplican a ciertos elementos (por ejemplo, el atributo `accept` en `<input type="file">`), y **atributos globales** que se pueden usar para cualquier elemento HTML (por ejemplo, `class`, `id`). Los primeros deben colocarse bajo `HTML/Reference/Attributes`, mientras que los segundos deben colocarse bajo `HTML/Reference/Global_attributes`.

Ten en cuenta que la mayoría de los atributos específicos del elemento no necesitan artículos independientes si la lista de atributos en la referencia del elemento es suficiente para describir su comportamiento.
Solo agrega un artículo si el atributo tiene suficiente sutileza para merecer sus propios ejemplos, o si es un atributo global.

> [!NOTE]
> _Elimina esta nota explicativa completa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el atributo en particular.
>
> ```md
> ---
> title: nombre-del-atributo
> slug: Web/HTML/Reference/Global_attributes/nombre-del-atributo
> page-type: html-attribute
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.global_attributes.nombre-del-atributo
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Formato como `nombre-del-atributo` (solo el nombre del atributo en sí).
>     Por ejemplo, el atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes/class) tiene un _title_ de `class`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formateará como `Web/HTML/Reference/Global_attributes/nombre-del-atributo` o `Web/HTML/Reference/Attributes/nombre-del-atributo`, donde el nombre del atributo está en _minúsculas_.
>     Por ejemplo, el atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes/class) tiene un _slug_ de `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Siempre `html-attribute`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `html.global_attributes.nombre-del-atributo` con la cadena de consulta para el atributo global en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     Para atributos específicos del elemento, usa el formato `html.elements.nombre-del-elemento.nombre-del-atributo`, con cada cadena de consulta en su propia línea, precedida por un guion. Por ejemplo:
>
>     ```yaml
>     browser-compat:
>       - html.elements.form.autocomplete
>       - html.elements.input.autocomplete
>       - html.elements.select.autocomplete
>       - html.elements.textarea.autocomplete
>     ```
>
>     La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el atributo en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar**
>   - : Mantén como `htmlsidebar` (todas las páginas bajo `/web/html/` usan esta barra lateral).
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas a macros en la parte superior de la sección de contenido (inmediatamente debajo del front matter de la página).
> Estas macros se agregan automáticamente mediante la cadena de herramientas (no hay necesidad de agregar/eliminar):
>
> - `\{{SeeCompatTable}}` — esto genera un banner **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes llenar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Muestras de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> _Recuerda eliminar esta nota explicativa completa antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza introduciendo al lector el atributo y su uso.
Por ejemplo: El **`nombre-del-atributo`** [atributo global](/es/docs/Web/HTML/Reference/Global_attributes) describe o manipula [inserta descripción del uso].

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`.
Esto incluye el título de la sección "Pruébalo" y el editor de código.
Consulta la sección [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Pautas de escritura_ para obtener más información.
Si se incluye, sígelo con 1-2 párrafos breves que expliquen el comportamiento implementado, y opcionalmente resalta cualquier interacción con JavaScript, CSS u otros atributos. Mantenlo conciso y evita duplicar la documentación completa — enlaza lo que sea necesario. Nuevamente, consulta la página del atributo `class`.

## Valores

Proporciona una lista de posibles valores para el atributo si los hay (elimina si no es aplicable). Incluye el valor predeterminado si lo hay, y una breve descripción para cada valor.

- `"valor1"`
  - : Descripción del valor 1. Este es el valor predeterminado.
- `"valor2"`
  - : Descripción del valor 2.
- `"valor3"`
  - : Descripción del valor 3.

## Accesibilidad

Advierte sobre cualquier posible preocupación de accesibilidad que pueda existir al usar este atributo, y cómo solucionarlas. Elimina esta sección si no hay nada que listar.

## Ejemplos

Muestra ejemplos relevantes para este atributo, y cómo usar este atributo en contextos HTML prácticos.
Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que resalte el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.
Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Caso 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Usar el atributo `for`
>
> Ejemplo del atributo `for`
>
> ### Más ejemplos
>
> Enlaces a más ejemplos en otras páginas
> ```
>
> **Caso 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta página:
>
> No agregues ningún encabezado H3; solo agrega los enlaces directamente bajo el encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de este atributo, consulta [la página sobre el atributo `for`](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el atributo actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
