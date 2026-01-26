---
title: Plantilla de página de propiedad CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: fcf868352a45840521813dbfea87fe2120f9c015
---

{{MDNSidebar}}

> [!NOTE]
> _Elimina este bloque de nota antes de publicar._
>
> ---
>
> **Metadatos de la página:**
>
> La información al inicio de la página se utiliza para definir "metadatos de la página".
> Los valores deben actualizarse apropiadamente para la propiedad particular.
>
> ```md
> ---
> title: NombreDeLaPropiedad
> slug: Web/CSS/NombreDeLaPropiedad
> page-type: css-property O css-shorthand-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: css.properties.NombreDeLaPropiedad
> ---
> ```
>
> - **title**
>   - : El valor de `title` se muestra en la parte superior de la página. El formato del título es _NombreDeLaPropiedad_.
>     Por ejemplo, la propiedad [`background-color`](/es/docs/Web/CSS/background-color) tiene un título de _background-color_.
> - **slug**
>   - : El valor de `slug` es el final de la ruta URL después de `https://developer.mozilla.org/es/docs/`. Esto se formateará como `Web/CSS/NombreDeLaPropiedad`.
>     Por ejemplo, el slug para la propiedad [`background-color`](/es/docs/Web/CSS/background-color) es `Web/CSS/background-color`. Para un componente de varias palabras como `Getting_started` en un slug, el slug debería usar un guión bajo como en `/es/docs/Learn/HTML/Getting_started`.
> - **page-type**
>   - : El valor de `page-type` para las propiedades CSS es `css-property`. Para una propiedad CSS abreviada, el valor es `css-shorthand-property`. Por ejemplo, el valor de `page-type` para la propiedad [animation](/es/docs/Web/CSS/animation) es `css-shorthand-property` porque es una propiedad abreviada, mientras que el valor de `page-type` para la propiedad [animation-delay](/es/docs/Web/CSS/animation-delay) es `css-property`.
> - **status**
>   - : Si corresponde, el valor de la clave de tecnología `status` puede ser [**experimental**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**deprecated**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated) y/o **non-standard** (si no está en una pista de estándares).
> - **browser-compat**
>   - : Reemplace el valor de marcador de posición <code>css.properties.NombreDeLaPropiedad</code> con la cadena de consulta para la propiedad en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Consulte la sección _Otros macros en la página_ de este bloque de nota para ver cómo se utiliza esta clave-valor para generar contenido para las secciones _Especificaciones_ y _Compatibilidad con el navegador_.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas de macros en la sección de contenido (inmediatamente debajo de los metadatos de la página).
> Debe actualizarlos o eliminarlos según el consejo a continuación:
>
> - `\{{SeeCompatTable}}`: Esta macro genera un banner **Experimental**, que indica que la tecnología está [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología que está documentando no es experimental, puede eliminar esta macro.
>   Si la tecnología es experimental y está oculta detrás de una preferencia en Firefox, también debe completar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}`: Esta macro genera un banner **Deprecated**, que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   Si no lo está, entonces puede eliminar la llamada a la macro.
> - `\{{CSSRef}}`: Esta macro debe estar presente en cada página de propiedad de CSS. Genera una barra lateral de CSS adecuada, dependiendo de las etiquetas incluidas en la página.
>   Recuerde eliminar la macro `\{{MDNSidebar}}` cuando use esta plantilla.
>
> Se muestran ejemplos de los banners **Experimental** y **Deprecated** justo después de este bloque de nota.
>
> ---
>
> **Otras macros en la página**
>
> - Sección de sintaxis formal: El contenido de la sección _Sintaxis formal_ se genera utilizando la macro `\{{CSSSyntax}}`. Esta macro obtiene datos de las especificaciones utilizando el paquete npm [@webref/css](https://www.npmjs.com/package/@webref/css).
> - Sección de definición formal: El contenido de la sección _Definición formal_ se genera utilizando la macro `\{{CSSInfo}}`. Para que esta sección tenga datos, debe asegurarse de que se haya completado una entrada adecuada para la propiedad correspondiente en el archivo de datos [properties.json](https://github.com/mdn/data/blob/main/css/properties.json) en el repositorio `mdn/data`. Consulte la página [Properties](https://github.com/mdn/data/blob/main/css/properties.md) para obtener más información.
> - Secciones de Especificaciones y Compatibilidad con el navegador: La herramienta de compilación utiliza automáticamente el par clave-valor `browser-compat` de los metadatos de la página para insertar datos en las secciones _Especificaciones_ y _Compatibilidad con el navegador_ (reemplazando las macros `\{{Specifications}}` y `\{{Compat}}` en esas secciones, respectivamente).
>
>   Tenga en cuenta que puede que primero necesite crear/actualizar una entrada para la propiedad y su especificación en nuestro <a href="https://github.com/mdn/browser-compat-data">repositorio de datos de compatibilidad con navegadores</a>.
>   Consulte nuestra [guía de tablas de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para obtener información sobre cómo agregar o editar entradas.
>
> _Recuerde eliminar este bloque de nota antes de publicar._

{{SeeCompatTable}}{{deprecated_header}}

Comienza el contenido de la página con un párrafo introductorio que nombre la propiedad y diga qué hace. Idealmente, esto debería ser una o dos frases cortas.

## Pruébalo

_Este título es generado automáticamente por la macro `\{{EmbedInteractiveExample}}`._

Esta sección es para ejemplos interactivos agregados usando la macro `\{{EmbedInteractiveExample}}`. Puedes crear estos ejemplos en el [repositorio mdn/interactive-examples](https://github.com/mdn/interactive-examples/blob/main/CONTRIBUTING.md). Consulta la sección [Ejemplos interactivos](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#ejemplos_interactivos) en nuestras _Guías de escritura_ para obtener más información.

## Propiedades constituyentes

Agrega esta sección solo para propiedades abreviadas, como [animation](/es/docs/Web/CSS/animation), para listar todas las propiedades con descripción completa relacionadas.

## Sintaxis

Incluye los casos de uso comunes como un bloque de código y describe los subvalores del componente que forman un valor completo.

```css
/* Insertar bloque de código mostrando casos de uso comunes */
/* o categorías de valores */
```

### Valores

Incluye un término y una definición para cada subvalor.

- `subvalor1`
  - : Incluye una descripción del subvalor, su tipo de datos y lo que representa.
- `subvalor2`
  - : Incluye una descripción del subvalor, su tipo de datos y lo que representa.

## Descripción

Esta es una sección opcional para incluir una descripción de la propiedad y explicar cómo funciona. Usa esta sección para explicar términos relacionados y agregar casos de uso para la propiedad.

## Definición formal

`\{{CSSInfo}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Sintaxis formal

`\{CSSSyntax}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Ejemplos

Nota que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Agregar un título descriptivo

Cada ejemplo debe tener un título H3 (`###`) que nombre el ejemplo. El título debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y por lo tanto, no es un buen título. El título debe ser conciso. Para una descripción más larga, usa el párrafo después del título.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y algunos más en otra página:
>
> Incluye un título H3 (`###`) para cada ejemplo en esta página y luego un título H3 (`###`) final con el texto "Más ejemplos", debajo del cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Usando la API fetch
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
> No agregues ningún título H3; simplemente agrega los enlaces directamente debajo del título H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de esta API, consulta [la página sobre fetch()](https://example.org).
> ```

## Preocupaciones de accesibilidad

Esta es una sección opcional. Puedes incluir cualquier advertencia aquí para las preocupaciones de accesibilidad que los desarrolladores deben tener en cuenta al usar esta propiedad. También puedes incluir soluciones alternativas para estas preocupaciones de accesibilidad si las hay.

## Especificaciones

`\{{Especificaciones}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con el navegador

`\{{Compatibilidad}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Veáse también

Incluye enlaces a páginas de referencia y guías relacionadas con la propiedad actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- external_link (año)
