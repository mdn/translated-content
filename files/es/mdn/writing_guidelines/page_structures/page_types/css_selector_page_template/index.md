---
title: Plantilla de página de selector CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
---

> **Nota:**
> _Elimina toda esta nota explicativa antes de publicar_
>
> ---
>
> **Metadatos de la página (front matter):**
>
> El frontmatter en la parte superior de la página se utiliza para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el selector específico.
>
> ```md
> ---
> title: :name-of-the-selector
> slug: Web/CSS/Reference/Selectors/:name-of-the-selector
> page-type: css-selector OR css-pseudo-class OR css-pseudo-element OR css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.name-of-the-selector
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Encabezado del título mostrado en la parte superior de la página. Formato como _:NameOfTheSelector_.
>     Por ejemplo, el selector {{cssxref(":hover")}} tiene un título _:hover_.
>
>   * : Encabezado del título mostrado en la parte superior de la página. Formato como *:NameOfTheSelector*.
>     Por ejemplo, el selector {{cssxref(":hover")}} tiene un título *:hover*.
> * **slug**
>
>   * : El final de la ruta de la URL después de `https://developer.mozilla.org/en-US/docs/`. Se formatea como `Web/CSS/Reference/Selectors/:name-of-the-selector`.
>     Por ejemplo, el slug del selector {{cssxref(":hover")}} es `Web/CSS/Reference/Selectors/:hover`.
> * **page-type**
>
>   * : La clave `page-type` para propiedades CSS es una de `css-selector`, `css-pseudo-class` o `css-pseudo-element`, dependiendo de si el selector es una pseudo-clase, un pseudo-elemento, un combinador o un selector simple.
> * **status**
>
>   * : Indicadores que describen el estado de esta funcionalidad. Es un arreglo que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se define automáticamente según los valores en los datos de compatibilidad de navegadores para la funcionalidad. Consulta ["Cómo se agregan o actualizan los estados de funcionalidades"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> * **browser-compat**
>
>   * : Reemplaza el valor de marcador de posición <code>css.selectors.NameOfTheSelector</code> con la cadena de consulta del selector en el repositorio de datos de compatibilidad de navegadores.
>     La cadena de herramientas utiliza automáticamente esta clave para completar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}` en dichas secciones, respectivamente).
>
>     Ten en cuenta que puede que primero necesites crear o actualizar una entrada para el selector y su especificación en nuestro repositorio de datos de compatibilidad de navegadores.
>     Consulta nuestra guía sobre cómo hacerlo.
> * **sidebar**
>
>   * : Esto es `cssref` para todas las páginas de guía y referencia de CSS.
>     Consulta "Estructuras de página: Barras laterales" para más detalles.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Varias macros aparecen en la parte superior de la sección de contenido inmediatamente después del front matter de la página.
> Estas macros se agregan automáticamente mediante herramientas, por lo que debes evitar agregarlas o eliminarlas:
>
> * `\{{SeeCompatTable}}` — genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es experimental.
>   Si es experimental y la tecnología está oculta detrás de una preferencia en Firefox, también debes completar una entrada para ella en la página de funcionalidades experimentales de Firefox.
> * `\{{Deprecated_Header}}` — genera un banner de **Obsoleto** que indica que el uso de la tecnología está desaconsejado.
> * `\{{Non-standard_Header}}` — genera un banner de **No estándar** que indica que la funcionalidad no forma parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros de acuerdo con las recomendaciones a continuación:
>
> No proporciones manualmente macros de encabezado de estado. Consulta la sección "Cómo se agregan o actualizan los estados de funcionalidades" para añadir estos estados a la página.
>
> Ejemplos de los banners de **Experimental**, **Obsoleto** y **No estándar** se muestran justo después de este bloque de nota.
>
> ---
>
> **Sección de Sintaxis (`\{{CSSSyntax}}`)**
>
> El contenido de la sección de Sintaxis se genera utilizando la macro `\{{CSSSyntax}}`.
> Para que se complete, debes asegurarte de que exista una entrada adecuada para el selector en el archivo de datos `selectors.json`.
> Consulta `selectors.md` para más información.
>
> *Recuerda eliminar toda esta nota explicativa antes de publicar*

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Párrafo de resumen: comienza nombrando el selector y explicando qué hace. Lo ideal es que sea una o dos frases cortas.

```css
/* Inserta un bloque de código que muestre casos de uso comunes */
```

## Sintaxis

`\{{CSSSyntax}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Accesibilidad

Esta es una sección opcional. Incluye pautas de accesibilidad, mejores prácticas y posibles preocupaciones que los desarrolladores deben tener en cuenta al usar este selector. También puedes incluir soluciones alternativas cuando corresponda.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para más información.

> [!NOTE]
> A veces, querrás enlazar a ejemplos dados en otra página.
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

Incluye enlaces a páginas de referencia y guías relacionadas con el selector actual. Para más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
