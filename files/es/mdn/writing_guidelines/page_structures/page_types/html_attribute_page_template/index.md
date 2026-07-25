---
title: Plantilla de página de atributo HTML
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

Los atributos HTML se dividen en dos categorías: **atributos específicos de elementos**, que se aplican solo a ciertos elementos (p. ej., el atributo `accept` en `<input type="file">`), y **atributos globales**, que pueden usarse en cualquier elemento HTML (p. ej., `class`, `id`). Los primeros deben ubicarse en `HTML/Reference/Attributes`, mientras que los segundos deben ir en `HTML/Reference/Global_attributes`.

Ten en cuenta que la mayoría de los atributos específicos no necesitan artículos independientes si la lista de atributos en la referencia del elemento es suficiente para describir su comportamiento. Solo crea un artículo si el atributo tiene suficientes matices como para merecer sus propios ejemplos, o si es un atributo global.

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter al principio de la página se usa para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el atributo en cuestión.
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
>     Formato: `nombre-del-atributo` (solo el nombre del atributo).
>     Por ejemplo, el atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes/class) tiene un _title_ de `class`.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/es/docs/`.
>     Tendrá el formato `Web/HTML/Reference/Global_attributes/nombre-del-atributo` o `Web/HTML/Reference/Attributes/nombre-del-atributo`, donde el nombre del atributo está en _minúsculas_.
>     Por ejemplo, el atributo [`class`](/es/docs/Web/HTML/Reference/Global_attributes/class) tiene un _slug_ de `Web/HTML/Reference/Global_attributes/class`.
> - **page-type**
>   - : Siempre `html-attribute`.
> - **status**
>   - : Indicadores que describen el estado de esta funcionalidad. Es un arreglo que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe configurarse manualmente: se establece automáticamente según los valores en los datos de compatibilidad de navegadores. Consulta ["Cómo se añaden o actualizan los estados de las funcionalidades"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `html.global_attributes.nombre-del-atributo` con la cadena de consulta para el atributo global en el [repositorio de datos de compatibilidad de navegadores](https://github.com/mdn/browser-compat-data).
>     Para atributos específicos de elementos, usa el formato `html.elements.nombre-del-elemento.nombre-del-atributo`.
>     La cadena de herramientas usa automáticamente esta clave para rellenar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
> - **sidebar**
>   - : Mantener como `htmlsidebar` (todas las páginas bajo `/web/html/` usan esta barra lateral).
>     Consulta [Estructuras de página: barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más detalles.
>
> ---
>
> **Macros de la parte superior de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (inmediatamente después del front matter).
> Estas macros se añaden automáticamente mediante la cadena de herramientas (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}` — genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental y está oculta detrás de una preferencia en Firefox, también debes completar una entrada en la página [Funcionalidades experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — genera un banner de **Obsoleto** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — genera un banner de **No estándar** que indica que la funcionalidad no forma parte de ninguna especificación.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se añaden o actualizan los estados de las funcionalidades"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para añadir estos estados a la página.
>
> Justo después de este bloque de notas se muestran ejemplos de los banners **Experimental**, **Obsoleto** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._
>
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}
>
> Comienza presentando al lector el atributo y su uso.
> Por ejemplo: El **`nombre-del-atributo`** [atributo global](/es/docs/Web/HTML/Reference/Global_attributes) describe o manipula [insertar descripción de uso].

## Pruébalo

Esta sección es generada por la macro `InteractiveExample`. Incluye el título de la sección "Try it" y el editor de código. Consulta la sección de [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#interactive_examples) en nuestras _Directrices de escritura_ para más información.
Si se incluye, síguelo con 1 o 2 párrafos breves que expliquen el comportamiento implementado y, opcionalmente, destaca cualquier interacción con JavaScript, CSS u otros atributos. Mantenlo conciso y evita duplicar la documentación completa; enlaza lo que sea necesario. Nuevamente, consulta la página del atributo `class`.

## Valores

Proporciona una lista de los valores posibles para el atributo, si los hay (elimina si no aplica). Incluye el valor predeterminado si existe, y una breve descripción para cada valor.

- `"valor1"`
  - : Descripción del valor 1. Este es el valor predeterminado.
- `"valor2"`
  - : Descripción del valor 2.
- `"valor3"`
  - : Descripción del valor 3.

## Accesibilidad

Advierte sobre cualquier posible problema de accesibilidad que pueda existir al usar este atributo y cómo solucionarlo. Elimina esta sección si no hay nada que enumerar.

## Ejemplos

Muestra ejemplos relevantes para este atributo y cómo usarlo en contextos prácticos de HTML.
Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que destaque el ejemplo. El encabezado debe ser descriptivo de lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.
Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Caso 1:** Si tienes algunos ejemplos en esta página y algunos más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Uso del atributo `for`
>
> Ejemplo del atributo `for`
>
> ### Más ejemplos
>
> Enlaces a más ejemplos en otras páginas
> ```
>
> **Caso 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta:
>
> No añadas encabezados H3; simplemente añade los enlaces directamente bajo el encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de este atributo, consulta [la página sobre el atributo `for`](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`
_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`
_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el atributo actual. Para más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#seccion_vease_tambien) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
