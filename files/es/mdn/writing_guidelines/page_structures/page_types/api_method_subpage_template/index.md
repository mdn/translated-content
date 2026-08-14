---
title: Plantilla de subpágina de método de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir los "metadatos de la página".
> Actualiza los valores de forma adecuada para el método en cuestión.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheMethod()
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : El título que se muestra en la parte superior de la página.
>     Debe tener el formato `"NameOfTheParentInterface: NameOfTheMethod() method"`.
>     Por ejemplo, el método [count()](/es/docs/Web/API/IDBIndex/count) de la interfaz [IDBIndex](/es/docs/Web/API/IDBIndex) tiene como _title_ `IDBIndex: count() method`.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/es/docs/`.
>     Tendrá un formato como `Web/API/NameOfTheParentInterface/NameOfTheMethod`.
>
>     Si el método es estático, el slug debe llevar el sufijo `_static`, por ejemplo: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Esto nos permite admitir métodos de instancia y estáticos que tengan el mismo nombre.
>
>     Ten en cuenta que el nombre del método en el slug omite los paréntesis (termina en `NameOfTheMethod`, no en `NameOfTheMethod()`).
> - **page-type**
>   - : La clave `page-type` para métodos de Web/API es `web-api-instance-method` (para métodos de instancia) o `web-api-static-method` (para métodos estáticos).
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad del navegador para dicha característica. Consulta ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el marcador de posición `path.to.feature.NameOfTheMethod` con la cadena de consulta del método en el [Repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente esta clave para completar las secciones de compatibilidad y especificaciones (sustituyendo las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que primero puede que debas crear o actualizar una entrada para el método de la API en nuestro [Repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada para la API deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
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
> - `\{{APIRef("GroupDataName")}}`: esto genera la barra lateral de referencia a la izquierda que muestra enlaces de referencia rápida relacionados con la página actual.
>   Por ejemplo, todas las páginas de la [WebVR API](/es/docs/Web/API/WebVR_API) tienen la misma barra lateral, que apunta a las demás páginas de la API.
>   Para generar la barra lateral correcta para tu API, debes añadir una entrada `GroupData` a nuestro repositorio de GitHub e incluir el nombre de esa entrada dentro de la llamada a la macro en lugar de _GroupDataName_.
>   Consulta nuestra guía [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacerlo.
>
> No añadas manualmente las macros de encabezado de estado. Consulta la sección ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características) para añadir estos estados a la página.
>
> Justo después de este bloque de nota se muestran ejemplos de los avisos de **Contexto seguro**, **Disponible en workers**, **Experimental**, **Obsoleto** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio: empieza nombrando el método, indicando a qué interfaz pertenece y explicando qué hace.
Lo ideal es que sean una o dos frases breves. Puedes copiar la mayor parte de este texto del resumen del método en la página de referencia de la API correspondiente.

## Sintaxis

Completa un cuadro de sintaxis según las indicaciones de nuestro artículo sobre [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parámetros

- `parameter1` {{Optional_Inline}}
  - : Incluye aquí una breve descripción del parámetro y de lo que hace. Incluye un término y una definición para cada parámetro. Si el parámetro no es opcional, elimina la llamada a la macro \\{{optional_inline}}.
- `parameter2`
  - : etc.

> [!NOTE]
> Esta sección es obligatoria. Si no hay parámetros, escribe `Ninguno.` en lugar de la lista de definiciones.

### Valor de retorno

Incluye una descripción del valor de retorno del método, incluyendo el tipo de dato y qué representa.

Si el método no devuelve nada, simplemente escribe "Ninguno ({{jsxref('undefined')}})".

### Excepciones

Incluye una lista de todas las excepciones que el método puede generar. Incluye un término y una definición para cada excepción.

- `Exception1`
  - : Incluye una descripción de cómo se genera la excepción.
- `Exception2`
  - : Incluye una descripción de cómo se genera la excepción.

Ten en cuenta que hay dos tipos de excepciones: objetos {{domxref("DOMException")}} y excepciones normales de JavaScript, como {{jsxref("TypeError")}} y {{jsxref("RangeError")}}. Un desarrollador web necesita saber:

- qué objeto se lanza
- para las excepciones que son objetos `DOMException`, el `name` de la excepción.

Aquí hay un ejemplo donde un método puede generar una `DOMException` con el nombre `IndexSizeError`, una segunda `DOMException` con el nombre `InvalidNodeTypeError` y una excepción de JavaScript de tipo `TypeError`:

- `IndexSizeError` {{domxref("DOMException")}}
  - : Lanzada…
- `InvalidNodeTypeError` {{domxref("DOMException")}}
  - : Lanzada…
- {{jsxref("TypeError")}}
  - : Lanzada…

## Descripción

_Descripción detallada de cómo se comporta el método_
_Sección omitida si un párrafo introductorio (o dos) en la parte superior de la página es suficiente._

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" aunque la página contenga un único ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que lo identifique. El encabezado debe describir qué hace el ejemplo. Por ejemplo, "Un ejemplo sencillo" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo que sigue al encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para más información.

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

_Para usar esta macro, elimina las comillas invertidas y la barra invertida del archivo Markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida del archivo Markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para más pautas, consulta la sección [Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- enlace1
- enlace2
- enlace_externo (año)
