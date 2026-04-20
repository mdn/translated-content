---
title: Plantilla de página de aterrizaje de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

> [!NOTE]
> _Elimina esta nota explicativa completa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la interfaz en particular.
>
> ```md
> ---
> title: NombreDeLaAPI API
> slug: Web/API/NombreDeLaAPI_API
> page-type: web-api-overview
> status:
>   - deprecated
>   - experimental
>   - non-standard
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Este es el nombre de la API seguido del texto "API": _NombreDeLaAPI_ **API**.
>     Por ejemplo, [WebXR Device](/es/docs/Web/API/WebXR_Device_API) tiene un título de _WebXR Device API_, [Fetch](/es/docs/Web/API/Fetch_API) tiene un título de _Fetch API_.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`).
>     Se formateará como `Web/API/NombreDeLaAPI_API`.
>     Por ejemplo, el slug de la [WebXR Device API](/es/docs/Web/API/WebVR_API) es `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : La clave `page-type` para páginas de aterrizaje de Web/API siempre es `web-api-overview`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas a macros en la parte superior de la sección de contenido (inmediatamente debajo del front matter de la página).
>
> Estas macros se agregan automáticamente mediante la cadena de herramientas (no hay necesidad de agregar/eliminar):
>
> - `\{{SeeCompatTable}}` — esto genera un banner **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debes llenar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros según el consejo a continuación:
>
> - `\{{SecureContext_Header}}` — esto genera un banner **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts).
>   Si no lo está, puedes eliminar la llamada a la macro.
>   Si lo está, también debes llenar una entrada para ella en la página [Características restringidas a contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — esto genera una nota **Disponible en workers** que indica que la tecnología está disponible en el [contexto de worker](/es/docs/Web/API/Web_Workers_API).
>   Si solo está disponible en el contexto de ventana, puedes eliminar la llamada a la macro.
>   Si también está disponible o solo está disponible en el contexto de worker, es posible que también debas pasarle un parámetro debido a su disponibilidad (consulta el [código fuente de las macros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) para todos los valores disponibles), también puede que necesites llenar una entrada para ella en la página [API web disponibles en workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
> - `\{{APIRef("NombreDeGrupoDeDatos")}}` — esto genera la barra lateral de referencia izquierda que muestra enlaces de referencia rápida relacionados con la página actual.
>   Por ejemplo, cada página en la [WebVR API](/es/docs/Web/API/WebVR_API) tiene la misma barra lateral, que apunta a las otras páginas de la API.
>   Para generar la barra lateral correcta para tu API, necesitas agregar una entrada `GroupData` a nuestro repositorio de GitHub, e incluir el nombre de la entrada dentro de la llamada a la macro en lugar de _NombreDeGrupoDeDatos_.
>   Consulta nuestra guía de [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacer esto.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Muestras de los banners **Contexto seguro**, **Disponible en workers**, **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> ---
>
> **Compatibilidad con navegadores**
>
> Las páginas de aterrizaje de API opcionalmente tienen una sección de compatibilidad con navegadores que muestra tablas de compatibilidad para una o más de las interfaces más importantes en la API. Si la compatibilidad es similar para la mayoría de las interfaces en la API, entonces a menudo solo se necesita una tabla de compatibilidad. Si la compatibilidad en toda la API es complicada/imposible de capturar en unas pocas tablas, esta sección debe omitirse.
>
> Para llenar la sección de compatibilidad con navegadores, es posible que primero necesites crear/actualizar entradas para las interfaces de la API en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) — consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Usa la macro `\{{Compat}}` para agregar tablas para la información de compatibilidad con navegadores.
>
> ---
>
> **Especificaciones**
>
> Las páginas de aterrizaje de API opcionalmente tienen una sección de especificaciones que enumera las especificaciones relevantes para cada interfaz. A menudo hay solo una especificación que cubre todas las interfaces en la API.
>
> Para llenar la sección de especificaciones, es posible que primero necesites crear/actualizar entradas para interfaces en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data) para incluir datos de especificación — consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Usa la macro `\{{Specifications}}` para agregar tablas para las especificaciones principales.
>
> ---
>
> _Recuerda eliminar esta nota explicativa completa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio — comienza nombrando la API y diciendo qué hace. Idealmente, esto debe ser una o dos oraciones cortas.

## Conceptos y uso

En esta sección, describe el propósito y los casos de uso de la API con un poco más de detalle — ¿por qué se reconoció una necesidad para ella?
¿Qué problemas resuelve? ¿Qué conceptos involucra? ¿Cómo se usa, desde una perspectiva de alto nivel?

No entres en muchos detalles en esta sección, y no incluyas ejemplos de código.
Si hay muchos conceptos que explicar alrededor de esta API, debes explicarlos en un artículo separado de "Fundamentos" o "Conceptos" (por ejemplo, [Fundamentos de WebXR](/es/docs/Web/API/WebXR_Device_API/Fundamentals)).
Para una guía de uso práctica con ejemplos de código, debes incluir un artículo "Uso..." en tus documentos de la API (por ejemplo, [Usar la API WebVR](/es/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Guías

Incluye una lista de páginas de guía bajo esta página de aterrizaje. Cada DT debe enlazar a la página de guía. Esta sección es opcional; si solo hay una única guía "Uso", junto con algunas otras guías conceptuales, puedes encontrar más conveniente enlazar a ellas como un párrafo al final de la sección "Conceptos y uso" en su lugar. Esta sección puede ser más útil si hay tantas guías que la prosa se vuelve difícil de escanear.

- Usar la API ...
  - : Párrafo introductorio de esta página de guía
- Guía 2
  - : Párrafo introductorio de esta página de guía

## Interfaces

_Para usar la [macro domxref](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages), elimina los backticks y la barra invertida en el archivo markdown._

- `\{{domxref("NombreDeLaInterfaz")}}`
  - : Incluye una breve descripción de la interfaz y qué hace aquí.
    Incluye un término y definición para cada interfaz o diccionario.

### Extensiones a otras interfaces

El _nombre de la interfaz_ extiende las siguientes API, agregando las características listadas.

#### Interfaz 1

- `\{{domxref("adición1")}}`
  - : Descripción de la característica de la Interfaz #1 que se agrega a esa API por la API que estás documentando actualmente.
    Un \*término y definición para cada característica. Si esta API no extiende ninguna otra interfaz, puedes eliminar estas secciones.

#### Interfaz 2

- `\{{domxref("adición1")}}`
  - : Descripción de la característica de la Interfaz #2 que se agrega a esa API por la API que estás documentando actualmente, etc.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
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

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina los backticks y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
