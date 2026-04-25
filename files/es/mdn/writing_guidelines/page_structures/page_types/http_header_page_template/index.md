---
title: Plantilla de página de encabezado HTTP
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

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
        {{Glossary("Encabezado de solicitud")}},
        {{Glossary("Encabezado de respuesta")}},
        <a href="/es/docs/Web/HTTP/Guides/Client_hints">Client hint (Indicio del cliente)</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Encabezado de solicitud prohibido")}}</th>
      <td>"Sí" o "No"</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Encabezado de respuesta en lista blanca de CORS")}}
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

## Ver también

Incluye enlaces a páginas de referencia y guías relacionadas con el encabezado HTTP actual. Para más pautas, consulta la [sección Ver también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_. 
Puedes enlazar a estados de respuesta relevantes como `\{{HTTPStatus("123", "123 Motivo")}}` y encabezados como `\{{HTTPHeader("Nombre-Del-Encabezado")}}`. Puedes agrupar estados y encabezados relacionados en un solo elemento de la lista para mayor brevedad.

- enlace1
- enlace2
- enlace_externo (año)
