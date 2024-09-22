---
title: Plantilla de página de cabecera HTTP
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: cb1c745168764c4646631e7c4289319d782cc83b
---

{{MDNSidebar}}

> **Nota:** _Elimina toda esta nota explicativa antes de publicar_
>
> ---
>
> **Metadatos de la página:**
>
> Los metadatos en la parte superior de la página se utilizan para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el elemento en particular.
>
> ```md
> ---
> title: NombreDeLaCabecera
> slug: Web/HTTP/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> ---
> ```
>
> - **title**
>   - : El título que se muestra en la parte superior de la página. Debe tener el formato _NombreDeLaCabecera_. Por ejemplo, la cabecera [Cache-Control](/es/docs/Web/HTTP/Headers/Cache-Control) tiene un _título_ de `Cache-Control`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Esto se formateará como `Web/HTTP/Headers/NameOfTheHeader`. Por ejemplo, el de [Cache-Control](/es/docs/Web/HTTP/Headers/Cache-Control) es Web/HTTP/Headers/Cache-Control.
> - **page-type**
>   - : Para cabeceras HTTP, debe ser `http-header`. Para otros valores HTTP de `page-type`, consulte la [sección HTTP](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) de la documentación para el metadato `page-type`.
> - **status**
>   - : Banderas que describen el estado de esta característica. Puede contener uno o más de los siguiente valores: `experimental`, `deprecated`, `non-standard` Este valor no debe configurarse manualmente: se configura automáticamente en función de los valores de los datos de compatibilidad del navegador para la característica. Consulte ["Cómo agregar o actualizar estados de funciones"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses).
> - **browser-compat**
>
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NameOfTheHeader` con la cadena de consulta para el elemento en el [repositorio de datos de compatibilidad con navegadores](https://github.com/mdn/browser-compat-data).
>     La herramienta utiliza automáticamente la clave para completar la sección de compatibilidad (reemplazando la macro `\{{Compat}}`).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para la cabecera HTTP en nuestro [repositorio de datos de compatibilidad con navegadores](https://github.com/mdn/browser-compat-data), y la entrada debe incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas a macros en la parte superior de la sección de contenido (inmediatamente debajo de los metadatos de la página).
> Debes actualizarlos o eliminarlos según el consejo siguiente:
>
> - `\{{SeeCompatTable}}` — esto genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología que estás documentando no es experimental, debes eliminar esto.
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes completar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner de **Obsoleto** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   Si no lo está, puedes eliminar la llamada a la macro.
> - `\{{Non-standard_Header}}` — esto genera un banner de no estándar que indica que la función no forma parte de ninguna especificación.
>
>   Debe actualizar o eliminar las siguientes macros de acuerdo con los siguientes consejos:
>
> - `\{{httpsidebar}}` — esto genera el menú lateral de HTTP que debe aparecer en cada página de referencia HTTP. Recuerde eliminar la macro {{MDNSidebar}} cuando copie esta página.
>
>   No proporcione macros de encabezado de estado manualmente. Consulte ["Cómo agregar o actualizar estados de funciones"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_to_add_or_update_feature_statuses). para agregar estos estados a la página.
>
> Se muestran muestras de los banners **Experimental** y **Obsoleto** justo después de este bloque de nota.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar_

{{httpsidebar}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido en la página con un párrafo introductorio — comienza nombrando la cabecera http y diciendo qué hace.
Idealmente, esto debería ser una o dos oraciones cortas.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cebera</th>
      <td>
        Incluye la categoría de la cabecera (o categorías), por ejemplo,
        {{Glossary("Request header", "Cabecera de solicitud")}},
        {{Glossary("Response header", "Cabecera de respuesta")}},
        <a href="/es/docs/Web/HTTP/Headers">Cabecera de pista del cliente</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Nombre de cabecera prohibido")}}</th>
      <td>sí o no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "Cabecera de respuesta permitida por CORS")}}
      </th>
      <td>sí o no</td>
    </tr>
  </tbody>
</table>

## Sintaxis

Rellena un cuadro de sintaxis, como el siguiente, de acuerdo con la guía en nuestro artículo [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).
Si el encabezado tiene muchas directivas disponibles, siéntete libre de incluir múltiples cuadros de sintaxis, subsecciones y explicaciones según corresponda.

```http
NombreDeLaCabecera: <directiva1>
NombreDeLaCabecera: <directiva1>, <directiva2>, …
```

Las directivas no distinguen mayúsculas de minúsculas y tienen un argumento opcional, que puede usar tanto la sintaxis de token como la de cadena entre comillas.
Las múltiples directivas están separadas por comas (elimina la información según corresponda).

## Directivas

- `directiva1`
  - : Incluye una breve descripción de la directiva y lo que hace aquí.
    Incluye un término y una definición para cada directiva.
- `directiva2`
  - : etc.

Si el encabezado tiene muchas directivas disponibles, siéntete libre de incluir múltiples listas de definiciones, subsecciones y explicaciones según corresponda.

## Ejemplos

Nota que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (###) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y algunos más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 (`###`) final con el texto "Más ejemplos", debajo del cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
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
> **Escenario 2:** Si solo tienes ejemplos en otra página y ninguno en esta página:
>
> No agregues ningún encabezado H3; simplemente agrega los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de esta API, consulta [la página sobre fetch()](https://example.org).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el encabezado HTTP actual. Para obtener más pautas, consulta la [sección Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
