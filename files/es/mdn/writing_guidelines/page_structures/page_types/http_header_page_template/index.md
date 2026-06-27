---
title: Plantilla de página de encabezado HTTP
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
> El front matter al principio de la página se usa para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el encabezado en cuestión.
>
> ```md
> ---
> title: Encabezado NombreDelEncabezado
> short-title: NombreDelEncabezado
> slug: Web/HTTP/Reference/Headers/NombreDelEncabezado
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NombreDelEncabezado
> sidebar: http
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Formato: _Encabezado NombreDelEncabezado_. Por ejemplo, el encabezado [Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control) tiene un _title_ de `Cache-Control header`.
> - **short-title**
>   - : Título abreviado que se usa en migas de pan y barras laterales. Formato: _NombreDelEncabezado_. Por ejemplo, el encabezado [Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control) tiene un _short-title_ de `Cache-Control`.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/es/docs/`. Tendrá el formato `Web/HTTP/Reference/Headers/NombreDelEncabezado`. Por ejemplo, el slug de [Cache-Control](/es/docs/Web/HTTP/Reference/Headers/Cache-Control) es `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type**
>   - : Para encabezados HTTP, debe ser `http-header`.
> - **status**
>   - : Indicadores que describen el estado de esta funcionalidad. Es un arreglo que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe configurarse manualmente: se establece automáticamente según los valores en los datos de compatibilidad de navegadores. Consulta ["Cómo se añaden o actualizan los estados de las funcionalidades"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NombreDelEncabezado` con la cadena de consulta para el encabezado en el <a href="https://github.com/mdn/browser-compat-data">repositorio de datos de compatibilidad de navegadores</a>.
>     La cadena de herramientas usa automáticamente esta clave para rellenar la sección de compatibilidad (reemplazando la macro `\{{Compat}}`).
>
>     La compatibilidad con navegadores no aplica para encabezados HTTP sin implementación específica definida.
>     En esos casos, elimina la clave `browser-compat` y su valor.
>
> - **sidebar**
>   - : Siempre es `http`.
>     Consulta [Estructuras de página: barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más detalles.
>
> ---
>
> **Macros de la parte superior de la página**
>
> Varias macros aparecen en la parte superior de la sección de contenido inmediatamente después del front matter.
> Estas macros se añaden automáticamente mediante la cadena de herramientas (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}` — genera un banner de **Esta es una tecnología experimental** que indica que el encabezado es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental y está oculto detrás de una preferencia en Firefox, también debes completar una entrada en la página [Funcionalidades experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{deprecated_header}}` — genera un banner de **Obsoleto** que indica que el uso del encabezado está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — genera un banner de **No estándar** que indica que la funcionalidad no forma parte de ninguna especificación.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se añaden o actualizan los estados de las funcionalidades"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para añadir estos estados a la página.
>
> Justo después de este bloque de notas se muestran ejemplos de los banners **Experimental**, **Obsoleto** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

La primera frase de la página debe seguir este formato:

> El encabezado HTTP **`nombre-del-encabezado`** (tipo de encabezado) se utiliza para X en circunstancias Y.

El "tipo de encabezado" debe indicar si es un {{Glossary("request header", "encabezado de solicitud")}}, un {{Glossary("response header", "encabezado de respuesta")}}, o si puede ser ambos.
El párrafo de resumen debería ser idealmente una o dos frases cortas.

Puedes mencionar advertencias notables o errores comunes en esta sección, enlazando a ejemplos o documentación más detallada (guías, etc.).
Dos o tres párrafos son apropiados para esta sección; si hay notas de uso sustanciales que incluir, usa una sección de "Descripción" después de "Directivas".

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de encabezado</th>
      <td>
        Incluye la categoría (o categorías) del encabezado, p. ej.
        {{Glossary("Request header", "Encabezado de solicitud")}},
        {{Glossary("Response header", "Encabezado de respuesta")}},
        <a href="/es/docs/Web/HTTP/Guides/Client_hints">Client hint (Indicio del cliente)</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "Encabezado de solicitud prohibido")}}</th>
      <td>"Sí" o "No"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "Encabezado de respuesta en lista blanca de CORS")}}
      </th>
      <td>"Sí" o "No"</td>
    </tr>
  </tbody>
</table>

## Sintaxis

Completa un bloque de sintaxis, como el de abajo, de acuerdo con la guía en nuestro artículo de [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```http
NombreDelEncabezado: <directiva1>
NombreDelEncabezado: <directiva1>, <directiva2>, …
```

Si el encabezado tiene muchas directivas disponibles, no dudes en incluir múltiples bloques de sintaxis, subsecciones y explicaciones según sea necesario:

```http
NombreDelEncabezado: <directiva3>, …, <directivaN>
```

Las directivas no distinguen entre mayúsculas y minúsculas y tienen un argumento opcional que puede usar tanto la sintaxis de _token_ como la de cadena entrecomillada (_quoted-string_). Las múltiples directivas se separan por comas (elimina la información según corresponda).

## Directivas

- `directiva1`
  - : Incluye aquí una breve descripción de la directiva y lo que hace.
    Incluye un término y una definición para cada directiva.
- `directiva2`
  - : etc.

Si el encabezado tiene muchas directivas disponibles, puedes incluir múltiples listas de definiciones, subsecciones y explicaciones según sea necesario.

## Descripción

Si hay demasiado contenido para incluirlo en los párrafos iniciales, proporciona aquí todo el detalle necesario, como información de trasfondo, consejos de uso y enlaces a la documentación. Este es un buen lugar para señalar si los patrones del mundo real difieren de lo especificado, en caso de que las implementaciones ampliamente desplegadas se desvíen de lo descrito en las especificaciones.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo **debe** tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

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

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

_Si el navegador no tiene un manejo específico para el encabezado, elimina la macro de abajo._
_De lo contrario, para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

`\{{Compat}}`

_Si el navegador tiene un manejo específico para el encabezado, elimina el texto de abajo:_

Este encabezado no tiene una integración con el agente de usuario definida por la especificación (la "compatibilidad con navegadores" no se aplica).
Los desarrolladores pueden establecer y obtener encabezados HTTP usando `fetch()` para proporcionar un comportamiento de implementación específico de la aplicación.

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con el encabezado HTTP actual. Para más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#seccion_vease_tambien) en la _Guía de estilo de escritura_.
Puedes enlazar a estados de respuesta relevantes como `\{{HTTPStatus("123", "123 Motivo")}}` y encabezados como `\{{HTTPHeader("Nombre-Del-Encabezado")}}`. Puedes agrupar estados y encabezados relacionados en un solo elemento de la lista para mayor brevedad.

- enlace1
- enlace2
- enlace_externo (año)
