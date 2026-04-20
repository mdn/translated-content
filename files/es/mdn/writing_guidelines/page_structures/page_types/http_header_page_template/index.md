---
title: Plantilla de página de cabecera HTTP
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la cabecera en particular.
>
> ```md
> ---
> title: NombreDeLaCabecera header
> short-title: NombreDeLaCabecera
> slug: Web/HTTP/Reference/Headers/NombreDeLaCabecera
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NombreDeLaCabecera
> sidebar: http
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página. Formato como _NombreDeLaCabecera header_. Por ejemplo, la cabecera [Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control) tiene un _title_ de `Cache-Control header`.
> - **short-title**
>   - : Un título corto usado en breadcrumbs y barras laterales. Formato como _NombreDeLaCabecera_. Por ejemplo, la cabecera [Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control) tiene un _short-title_ de `Cache-Control`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`. Se formateará como `Web/HTTP/Reference/Headers/NombreDeLaCabecera`. Por ejemplo, el slug de [Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control) es `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Para cabeceras HTTP, debe ser `http-header`. Para otros valores `page-type` de HTTP, consulta la [sección HTTP](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) de la documentación para la clave front matter `page-type`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NombreDeLaCabecera` con la cadena de consulta para la cabecera en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente la clave para poblar la sección de compatibilidad (reemplazando la macro `\{{Compat}}`).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para la cabecera HTTP en nuestro <a href="https://github.com/mdn/browser-compat-data">repositorio de datos de compatibilidad del navegador</a>, y la entrada para la cabecera deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     La compatibilidad con navegadores no se aplica a cabeceras HTTP donde no se proporciona una implementación específica (como agregar automáticamente una cabecera de solicitud a algunas solicitudes o cambiar el comportamiento según los datos en una cabecera de respuesta).
>     Para estos casos, elimina la clave y el valor browser-compat.
>
> - **sidebar**
>   - : Siempre es `http`.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias macros en la parte superior de la sección de contenido inmediatamente después del front matter de la página.
> Estas macros se agregan automáticamente mediante la cadena de herramientas, así que evita agregarlas o eliminarlas:
>
> - `\{{SeeCompatTable}}` — esto genera un banner **Esta es una tecnología experimental** que indica que la cabecera es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes llenar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que el uso de la cabecera está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Los ejemplos de los banners **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

La primera oración de la página debe seguir este formato:

> La **`nombre-de-la-cabecera`** HTTP (tipo de cabecera) se usa para X en circunstancias Y.

El 'tipo de cabecera' debe indicar si es una {{Glossary("request header", "cabecera de solicitud")}}, una {{Glossary("response header", "cabecera de respuesta")}}, o si puede ser cualquiera.
El párrafo de resumen debe ser idealmente una o dos oraciones cortas.

Puedes mencionar problemas notables o errores comunes en esta sección, enlazando a ejemplos o documentación más detallada (guías, etc.) en esta sección.
De dos a tres párrafos en esta sección es apropiado, y si hay notas de uso sustanciales para incluir, usa una sección "Descripción" después de "Directivas" a continuación.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabecera</th>
      <td>
        Incluye la categoría de cabecera (o categorías), p. ej.
        {{Glossary("Request header", "Cabecera de solicitud")}},
        {{Glossary("Response header", "Cabecera de respuesta")}},
        <a href="/es/docs/Web/HTTP/Guides/Client_hints">Client hint</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "Cabecera de solicitud prohibida")}}</th>
      <td>"Yes" o "No"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "Cabecera de respuesta segura para CORS")}}
      </th>
      <td>"Yes" o "No"</td>
    </tr>
  </tbody>
</table>

## Sintaxis

Llena un cuadro de sintaxis, como el siguiente, según la guía en nuestro artículo [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```http
NombreDeLaCabecera: <directiva1>
NombreDeLaCabecera: <directiva1>, <directiva2>, …
```

Si la cabecera tiene muchas directivas disponibles, siéntete libre de incluir múltiples cuadros de sintaxis, subsecciones y explicaciones según corresponda:

```http
NombreDeLaCabecera: <directiva3>, …, <directivaN>
```

Las directivas no distinguen mayúsculas de minúsculas y tienen un argumento opcional, que puede usar tanto sintaxis de token como sintaxis de cadena entre comillas.
Múltiples directivas están separadas por comas (elimina la información según corresponda).

## Directivas

- `directiva1`
  - : Incluye una breve descripción de la directiva y qué hace aquí.
    Incluye un término y definición para cada directiva.
- `directiva2`
  - : etc.

Si la cabecera tiene muchas directivas disponibles,
siéntete libre de incluir múltiples listas de definiciones, subsecciones y explicaciones según corresponda.

## Descripción

Si hay demasiado contenido para incluir en los párrafos de apertura, proporciona tantos detalles como sean necesarios aquí, como información de fondo, sugerencias de uso y enlaces a la documentación.
Este es un buen lugar para señalar si los patrones del mundo real difieren de lo especificado si las implementaciones ampliamente desplegadas se desvían de lo descrito en las especificaciones.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo **debe** tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", debajo del cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
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

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

_Si el navegador no tiene un manejo específico para la cabecera, elimina la macro a continuación._
_De lo contrario, para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

`\{{Compat}}`

_Si el navegador tiene un manejo específico para la cabecera, elimina el texto a continuación:_

Esta cabecera no tiene integración de agente de usuario definida por especificaciones ("compatibilidad con navegadores" no se aplica).
Los desarrolladores pueden establecer y obtener cabeceras HTTP usando `fetch()` para proporcionar un comportamiento de implementación específico de la aplicación.

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la cabecera HTTP actual.
Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.
Puedes enlazar a estados de respuesta relevantes como `\{{HTTPStatus("123", "123 Razón")}}` y cabeceras como `\{{HTTPHeader("Nombre-De-La-Cabecera")}}`.
Puedes agrupar estados y cabeceras relacionados en un solo elemento de lista para mayor brevedad.

- enlace1
- enlace2
- enlace_externo (año)
