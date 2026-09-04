---
title: Macros de uso común
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

Esta página enumera muchas de las macros de propósito general que el sistema de compilación de MDN, [rari](https://github.com/mdn/rari), proporciona para su uso en MDN.
Para obtener información general sobre cómo usarlas en el contenido de MDN, consulta [Uso de macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Enlaces

MDN ofrece una serie de macros de enlace para facilitar la creación de vínculos a entradas del glosario, páginas de referencia y otros temas.

Se recomiendan las macros de enlace en lugar de los enlaces normales de Markdown porque son concisas y fáciles de traducir.
Por ejemplo, un enlace de glosario o de referencia creado con una macro no necesita ser traducido: en otros idiomas se vinculará automáticamente a la versión correcta del archivo.

Estas macros también se describen con más detalle en la página de [Macros de enlace](/es/docs/MDN/Writing_guidelines/Page_structures/Links).

### Enlaces a términos del glosario

La macro [`Glossary`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) crea un enlace a la página del término indicado en el [Glosario de MDN](/es/docs/Glossary).
Esta macro acepta un parámetro obligatorio y uno opcional.

- El término es un parámetro obligatorio. Por ejemplo, para enlazar a la página del glosario de "HTML", la macro será `\{{Glossary("HTML")}}`, y esto generará el enlace {{Glossary("HTML")}}.
- El texto a mostrar es un parámetro opcional. Por ejemplo, puedes escribir el enlace del ejemplo anterior como `\{{Glossary("HTML", "HyperText Markup Language")}}`, lo que generará el enlace {{Glossary("HTML", "HyperText Markup Language")}}.

### Enlaces a páginas de referencia

Existen macros para enlazar de forma independiente del idioma a páginas en áreas de referencia específicas de MDN, como HTML, CSS, JavaScript, SVG y HTTP.

Las macros son fáciles de usar.
Lo único que tienes que hacer es especificar el nombre del elemento al que quieres enlazar en el primer parámetro.
Al igual que la macro del glosario, la mayoría de las macros de referencia también aceptan un segundo parámetro para cambiar el texto que se muestra.

Consulta los archivos fuente enlazados en la primera columna de la siguiente tabla para obtener más detalles.

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Enlaza a páginas bajo</th>
      <th>Ejemplo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef</a>
      </td>
      <td>
        <a href="/es/docs/Web/CSS/Reference">Referencia CSS</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> da como resultado {{CSSxRef("cursor")}}.<br />
        <code>\{{CSSxRef(":hover")}}</code> da como resultado {{CSSxRef(":hover")}}.<br />
        <code>\{{CSSxRef("@media")}}</code> da como resultado {{CSSxRef("@media")}}.<br />
        <code>\{{CSSxRef("pow")}}</code> da como resultado {{CSSxRef("pow")}}.<br /><br />
        Consulta los detalles en <a href="/es/docs/MDN/Writing_guidelines/Page_structures/Links#using_cssxref_with_the_css_reference">Uso de <code>cssxref</code> con la referencia CSS</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef</a>
      </td>
      <td><a href="/es/docs/Web/API">Referencia DOM</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("document")}}</code> da como resultado {{DOMxRef("Document")}}.<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> da como resultado {{DOMxRef("document.getElementsByName()")}}.<br />
        <code>\{{DOMxRef("Node")}}</code> da como resultado {{DOMxRef("Node")}}.<br />
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement</a>
      </td>
      <td>
        <a href="/es/docs/Web/HTML/Reference/Elements">Referencia de elementos HTML</a> (/Web/HTML/Reference/Elements)
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> da como resultado {{HTMLElement("select")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef</a>
      </td>
      <td>
        <a href="/es/docs/Web/JavaScript/Reference">Referencia JavaScript</a> (/Web/JavaScript/Reference)
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> da como resultado {{JSxRef("Promise")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr</a>
      </td>
      <td>
        <a href="/es/docs/Web/SVG/Reference/Attribute">Referencia de atributos SVG</a> (/Web/SVG/Reference/Attribute)
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> da como resultado {{SVGAttr("d")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement</a>
      </td>
      <td>
        <a href="/es/docs/Web/SVG/Reference/Element">Referencia de elementos SVG</a> (/Web/SVG/Reference/Element)
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> da como resultado {{SVGElement("view")}}.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader</a></code>
      </td>
      <td>
        <a href="/es/docs/Web/HTTP/Reference/Headers">Cabeceras HTTP</a> (/Web/HTTP/Reference/Headers)
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> da como resultado {{HTTPHeader("ACCEPT")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod</a>
      </td>
      <td>
        <a href="/es/docs/Web/HTTP/Reference/Methods">Métodos de petición HTTP</a> (/Web/HTTP/Reference/Methods)
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> da como resultado {{HTTPMethod("HEAD")}}.
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus</a>
      </td>
      <td>
        <a href="/es/docs/Web/HTTP/Reference/Status">Códigos de estado de respuesta HTTP</a> (/Web/HTTP/Reference/Status)
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> da como resultado {{HTTPStatus("404")}}.
      </td>
    </tr>
  </tbody>
</table>

### Añadir ayudas de navegación para guías multipágina

Las macros [`Previous`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) y [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) ofrecen controles de navegación para artículos que forman parte de una secuencia.
Para las plantillas unidireccionales, el único parámetro necesario es el slug del artículo anterior o siguiente en la secuencia.
La macro [`PreviousNext`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) requiere dos parámetros: el primero es el slug del artículo anterior y el segundo es el slug del artículo siguiente.

## Generar ejemplos de código

### Ejemplos en vivo

- [`EmbedLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) te permite incrustar el resultado de un ejemplo de código en una página, como se describe en [Ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`LiveSampleLink`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) crea un enlace a una página que contiene el resultado de un ejemplo de código, tal como se describe en [Ejemplos en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`EmbedGHLiveSample`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) permite incrustar ejemplos en vivo desde páginas de GitHub.
  Puedes obtener más información en [Ejemplos en vivo de GitHub](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Añadir formato de propósito general

### Añadir indicadores en línea para la documentación de la API

[`Optional_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) y [`ReadOnlyInline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) se usan en la documentación de la API, generalmente al describir la lista de propiedades de un objeto o los parámetros de una función.

Uso: `\{{Optional_Inline}}` o `\{{ReadOnlyInline}}`.
Ejemplo:

- `isCustomObject` {{ReadOnlyInline}}
  - : Indica, si es `true`, que el objeto es personalizado.
- `parameterX` {{optional_inline}}
  - : Indica…

## Añadir indicadores de estado y compatibilidad

### Añadir indicadores en línea sin parámetros adicionales

#### No estándar

[`Non-standard_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) inserta una marca en línea que indica que la API no ha sido estandarizada y no está en vías de estandarización.

##### Sintaxis

`\{{Non-standard_Inline}}`

##### Ejemplos

- Icono: {{Non-standard_Inline}}

#### Experimental

[`Experimental_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) inserta una marca en línea que indica que la API no está ampliamente implementada y puede cambiar en el futuro.
Para obtener más información sobre la definición de **experimental**, consulta la documentación sobre [Experimental, obsoleto y en desuso](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Sintaxis

`\{{Experimental_Inline}}`

##### Ejemplos

- Icono: {{Experimental_Inline}}

### Añadir indicadores en línea que permiten especificar la tecnología

#### Obsoleto

[`Deprecated_Inline`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) inserta una marca de obsoleto en línea ({{Deprecated_Inline}}) para desalentar el uso de una API que está oficialmente obsoleta (o que ha sido eliminada).
Para obtener más información sobre la definición de **obsoleto**, consulta la documentación sobre [Experimental, obsoleto y en desuso](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Sintaxis

`\{{Deprecated_Inline}}`

##### Ejemplos

- Icono: {{Deprecated_Inline}}

### Indicadores de encabezado de página o sección

Estas plantillas tienen la misma semántica que sus equivalentes en línea descritas anteriormente.
Debes colocar las plantillas directamente debajo del título principal de la página (o de la ruta de navegación, si está disponible) en la página de referencia.
También puedes usarlas para marcar una sección en una página.

- [`Non-standard_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) se usa en páginas que documentan [características experimentales](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
  Ejemplo: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs): `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  Debe usarse en páginas principales, como páginas de interfaz, páginas de descripción general de la API y puntos de entrada de la API (por ejemplo, `navigator.xyz`), pero normalmente no en subpáginas como páginas de métodos y propiedades.
  Ejemplo: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Indicar que una característica está disponible en web workers

La macro [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) inserta un cuadro de nota localizado que indica que una característica está disponible en un [contexto de worker](/es/docs/Web/API/Web_Workers_API).
También puedes pasar algunos argumentos para indicar que la característica funciona en un contexto de worker específico.

##### Sintaxis

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Ejemplos

{{AvailableInWorkers}}
{{AvailableInWorkers("window_and_worker_except_service")}}

## Enlaces a la compatibilidad con navegadores y especificaciones

Las siguientes macros se incluyen en todas las páginas de referencia, pero también son compatibles con todos los tipos de página:

- `\{{Compat}}`
  - : Genera una [tabla de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) para las características definidas por `browser-compat` en el frontmatter.
- `\{{Specifications}}`
  - : Incluye una [tabla de especificaciones](/es/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) para las características definidas por `spec-urls` en el frontmatter, si está presente, o a partir de la especificación incluida en los datos de compatibilidad con navegadores definidos por `browser-compat` en el frontmatter.

## Véase también

- [Macros de enlace](/es/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de barra lateral](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de estado de características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Otras macros](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (macros poco usadas u obsoletas)
- [Plantillas de página](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Componentes de página](/es/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
