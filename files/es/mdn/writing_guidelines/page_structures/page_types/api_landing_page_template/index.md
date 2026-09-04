---
title: Plantilla de página de inicio de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar_
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir los "metadatos de la página".
> Actualiza los valores según corresponda para la interfaz en particular.
>
> ```md
> ---
> title: NameOfTheAPI API
> slug: Web/API/NameOfTheAPI_API
> page-type: web-api-overview
> status:
>   - deprecated
>   - experimental
>   - non-standard
> ---
> ```
>
> - **title**
>   - : El título que se muestra en la parte superior de la página.
>     Es el nombre de la API seguido del texto "API": _NameOfTheAPI_ **API**.
>     Por ejemplo, [WebXR Device](/es/docs/Web/API/WebXR_Device_API) tiene el título _WebXR Device API_, y [Fetch](/es/docs/Web/API/Fetch_API) tiene el título _Fetch API_.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/es/docs/`).
>     Tendrá un formato como `Web/API/NameOfTheAPI_API`.
>     Por ejemplo, el slug de [WebXR Device API](/es/docs/Web/API/WebVR_API) es `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : La clave `page-type` para las páginas de inicio Web/API siempre es `web-api-overview`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Es un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad del navegador para dicha característica. Consulta ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características).
>
> ---
>
> **Macros de la parte superior de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (justo debajo del front matter de la página).
>
> La cadena de herramientas añade estas macros automáticamente (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}`: genera un aviso de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental y la tecnología está oculta tras una preferencia (`pref`) en Firefox, también debes completar una entrada para ella en la página [Funciones experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}`: genera un aviso de **Obsoleto** que indica que se [desaconseja](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsoleto) el uso de la tecnología.
> - `\{{Non-standard_Header}}`: genera un aviso de **No estándar** que indica que la característica no forma parte de ninguna especificación.
>
> Actualiza o eliminar las siguientes macros según las indicaciones a continuación:
>
> - `\{{SecureContext_Header}}`: genera un aviso de **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts).
>   Si no es así, puedes eliminar la llamada a la macro.
>   Si es así, también debes completar una entrada para ella en la página [Características restringidas a contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}`: genera una nota de **Disponible en workers** que indica que la tecnología está disponible en un [contexto de worker](/es/docs/Web/API/Web_Workers_API).
>   Si solo está disponible en el contexto de ventana (`window`), puedes eliminar la llamada a la macro.
>   Si también está disponible, o solo está disponible en el contexto de worker, es posible que también debas pasarle un parámetro debido a su disponibilidad (consulta el [código fuente de la macro \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) para ver todos los valores disponibles); también es posible que debas completar una entrada para ella en la página [Web API disponibles en workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
> - `\{{APIRef("GroupDataName")}}`: esto genera la barra lateral de referencia de la izquierda que muestra enlaces de referencia rápida relacionados con la página actual.
>   Por ejemplo, todas las páginas de la [WebVR API](/es/docs/Web/API/WebVR_API) tienen la misma barra lateral, que apunta a las demás páginas de la API.
>   Para generar la barra lateral correcta para tu API, debes añadir una entrada `GroupData` a nuestro repositorio de GitHub e incluir el nombre de esa entrada dentro de la llamada a la macro en lugar de _GroupDataName_.
>   Consulta nuestra guía [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacerlo.
>
> No añadas manualmente las macros de encabezado de estado. Consulta la sección ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características) para añadir estos estados a la página.
>
> Justo después de este bloque de nota se muestran ejemplos de los avisos de **Contexto seguro**, **Disponible en workers**, **Experimental**, **Obsoleto** y **No estándar**.
>
> ---
>
> **Compatibilidad con navegadores**
>
> Las páginas de inicio de la API pueden incluir, opcionalmente, una sección de compatibilidad con navegadores que muestra tablas de compatibilidad para una o más de las interfaces más importantes de la API. Si la compatibilidad es similar para la mayoría de las interfaces, generalmente basta con una sola tabla. Si la compatibilidad de toda la API es compleja o imposible de abarcar en unas pocas tablas, omite esta sección.
>
> Para completar la sección de compatibilidad con navegadores, es posible que primero debas crear o actualizar entradas para las interfaces de API en nuestro [repositorio de datos de compatibilidad con navegadores](https://github.com/mdn/browser-compat-data); consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Usa la macro `\{{Compat}}` para añadir las tablas con la información de compatibilidad con navegadores.
>
> ---
>
> **Especificaciones**
>
> Las páginas de inicio de la API pueden incluir opcionalmente una sección de especificaciones que enumera las especificaciones relevantes para cada interfaz. A menudo, solo hay una especificación que abarca todas las interfaces de la API.
>
> Para completar la sección de especificaciones, es posible que primero debas crear o actualizar entradas para las interfaces en el [repositorio de datos de compatibilidad con navegadores](https://github.com/mdn/browser-compat-data) para incluir los datos de especificación; consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Usa la macro `\{{Specifications}}` para añadir las tablas con las especificaciones principales.
>
> ---
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio: comienza nombrando la API y explicando qué hace. Idealmente, debería ser de una o dos oraciones breves.

## Conceptos y uso

En esta sección, describe con un poco más de detalle el propósito y los casos de uso de la API: ¿por qué surgió la necesidad de crearla?
¿Qué problemas resuelve? ¿Qué conceptos involucra? ¿Cómo se usa, desde una perspectiva general?

No entres en muchos detalles en esta sección ni incluyas ejemplos de código.
Si hay muchos conceptos que explicar sobre esta API, hazlo en un artículo aparte de "Fundamentos" o "Conceptos" (por ejemplo, [Fundamentos de WebXR](/es/docs/Web/API/WebXR_Device_API/Fundamentals)).
Para una guía práctica de uso con ejemplos de código, incluye un artículo de "Uso…" en la documentación de tu API (por ejemplo, [Uso de la API WebVR](/es/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Guías

Incluye una lista de páginas de guías bajo esta página de inicio. Cada elemento de la lista debe enlazar a la página de la guía correspondiente. Esta sección es opcional; si solo hay una guía de "Uso", junto con algunas otras guías conceptuales, puede resultar más conveniente enlazarlas como un párrafo al final de la sección "Conceptos y uso". Esta sección puede ser más útil si hay tantas guías que la lectura se vuelve confusa.

- Uso de la API ...
  - : Párrafo introductorio de esta página de guía
- Guía 2
  - : Párrafo introductorio de esta página de guía

## Interfaces

_Para usar la [macro domxref](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#enlaces_a_páginas_de_referencia), elimina las comillas invertidas y la barra invertida en el archivo Markdown._

- `\{{domxref("NameOfTheInterface")}}`
  - : Incluye una breve descripción de la interfaz y lo que hace.
    Incluye un término y una definición por cada interfaz o diccionario.

### Extensiones a otras interfaces

_Nombre de la interfaz_ extiende las siguientes API, añadiendo las características indicadas.

#### Interfaz 1

- `\{{domxref("addition1")}}`
  - : Descripción de la característica de la Interfaz n.º 1 que se añade a esa API mediante la API que estás documentando actualmente.
    Un \*término y definición por cada característica. Si esta API no extiende ninguna otra interfaz, puedes eliminar estas secciones.

#### Interfaz 2

- `\{{domxref("addition1")}}`
  - : Descripción de la característica de la Interfaz n.º 2 que añade la API que estás documentando actualmente, etc.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página contiene solo un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que lo identifique. El encabezado debe describir qué hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo que sigue al encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos que están en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y otros más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo de esta página y, al final, un último encabezado H3 (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar a los ejemplos de otras páginas. Por ejemplo:
>
> ```md
> ## Examples
>
> ### Using the fetch API
>
> Example of Fetch
>
> ### More examples
>
> Links to more examples on other pages
> ```
>
> **Escenario 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta:
>
> No añadas ningún encabezado H3; simplemente añade los enlaces directamente debajo del encabezado H2 "Examples". Por ejemplo:
>
> ```md
> ## Examples
>
> For examples of this API, see [the page on fetch()](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo Markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo Markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para más pautas, consulta la sección [Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- enlace1
- enlace2
- enlace_externo (año)
