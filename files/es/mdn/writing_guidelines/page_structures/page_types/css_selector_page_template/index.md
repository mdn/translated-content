---
title: Plantilla de página de selectores CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
l10n:
  sourceCommit: 88088f2473cb93b489b1a4650b9840ac078c7ff3
---

{{MDNSidebar}}

> [!NOTE]
> _Elimine toda esta nota explicativa antes de publicar_
>
> ---
>
> **Metadatos de la página:**
>
> Los campos en la parte superior de la página se utiliza para definir "metadatos de página".
> Los valores deben actualizarse adecuadamente para el selector en particular.
>
> ```md
> ---
> title: :NameOfTheSelector
> slug: Web/CSS/:NameOfTheSelector
> page-type: css-selector Ó css-pseudo-class Ó css-pseudo-element Ó css-combinator
> status:
>   - experimental
>   - deprecated
>   - no-estandar
> browser-compat: css.selectors.NameOfTheSelector
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página. Formatear como _:NameOfTheSelector_.
>     Por ejemplo, el selector [`:hover`](/es/docs/Web/CSS/:hover) tiene el título de _:hover_.
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`). Se formateará como `Web/CSS/:NameOfTheSelector`.
>     Por ejemplo, el slug del selector [`:hover`](/es/docs/Web/CSS/:hover) es `Web/CSS/:hover`.
> - **page-type**
>   - : El valor de `page-type` para las propiedades CSS puede ser `css-selector`, `css-pseudo-class` o `css-pseudo-element`, dependiendo de si el selector es un [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes), un [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements), un [combinador](/es/docs/Web/CSS/CSS_selectors/Selectors_and_combinators#combinators), o un [selector básico](/es/docs/Web/CSS/CSS_selectors/Selector_structure#basic_selectors).
> - **status**
>   - : Incluye claves de estado de tecnología (apropiadas): [**experimental**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**obsoleto**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), **no estándar** (si no está en una pista de estándares).
> - **browser-compat**
>   - : Reemplace el valor del marcador de posición `css.selectors.NameOfTheSelector` con la cadena de consulta para el selector en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente la clave para rellenar las secciones de compatibilidad con los navegadores y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}` en esas secciones, respectivamente).
>
>     Tenga en cuenta que es posible que primero necesite crear/actualizar una entrada para el selector y su especificación en nuestro [repositorio de datos compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros al principio de la página**
>
> Varias llamadas de macro aparecen en la parte superior de la sección de contenido (inmediatamente debajo de los metadatos).
> Debes actualizarlos o eliminarlos de acuerdo con los siguientes consejos:
>
> - `\{{SeeCompatTable}}` — esto genera un **banner de tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología que está documentando no es experimental, puede eliminarla.
>   Si es experimental y la tecnología está oculta detrás de alguna preferencia en Firefox, también debes completar una entrada para ello en la página [Funciones experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner de **Desaprobado** que indica que el uso de la tecnología está [desaprobada](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   Si no lo es, puede eliminar la llamada de macro.
> - `\{{CSSRef}}` — esto debe estar presente en cada página del selector de CSS. Genera una barra lateral CSS adecuada, dependiendo de qué etiquetas se incluyan en la página.
>   Recuerde eliminar la macro `\{{MDNSidebar}}` cuando copie esta página.
>
> ---
>
> **Sección de sintaxis (`\{{CSSSyntax}}`)**
>
> El contenido de la sección Sintaxis se genera utilizando la macro `\{{CSSSyntax}}`.
> Para que estos se rellenen, debe asegurarse de que se haya completado una entrada adecuada para el selector en nuestro archivo de datos [selectors.json](https://github.com/mdn/data/blob/main/css/selectors.json).
> Consulta [selectors.md](https://github.com/mdn/data/blob/main/css/selectors.md) para obtener más información.
>
> _Recuerde eliminar toda esta nota explicativa antes de publicar_

{{SeeCompatTable}}{{Deprecated_Header}}

El párrafo de resumen: comience nombrando el selector y diciendo lo que hace. Idealmente, esto debería consistir en 1 o 2 oraciones cortas.

```css
/* Insertar bloque de código que muestre casos de uso comunes */
```

## Sintaxis

`\{{CSSSyntax}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo de markdown._

## Ejemplos

Tenga en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, use el párrafo después del encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces, querrás vincular a ejemplos dados en otra página.
>
> **Escenario 1:** Si tiene algunos ejemplos en esta página y algunos ejemplos más en otra página:
>
> Incluya un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puede vincular los ejemplos en otras páginas. Por ejemplo:
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
> **Escenario 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta página:
>
> No añada ningún encabezado H3; solo añada los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta API, consulte [la página en fetch()](https://example.org).
> ```

## Problemas de accesibilidad

Opcionalmente, advierte sobre cualquier posible problema de accesibilidad con el uso de este selector y cómo solucionarlo.
Elimine esta sección si no hay una lista.

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con los navegadores

`\{{Compat}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo de markdown._

## Veáse también

Incluya enlaces a páginas de referencia y guías relacionadas con el selector actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo_.

- enlace1
- enlace2
