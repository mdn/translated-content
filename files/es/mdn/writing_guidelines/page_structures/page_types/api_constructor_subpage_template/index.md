---
title: Plantilla de subpágina del constructor de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_constructor_subpage_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{MDNSidebar}}

> [!NOTE]
> _Eliminar toda esta nota explicativa antes de publicar_
>
> ---
>
> **Metadatos de la página:**
>
> Los metadatos de la parte superior de la página se utilizan para definir "metadatos de página".
> Los valores deben actualizarse adecuadamente para el constructor.
>
> ```md
> ---
> title: NombreDeLaInterfazPadre: NombreDelConstructor() constructor
> slug: Web/API/NombreDeLaInterfazPadre/NombreDelConstructor
> page-type: web-api-constructor
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: ruta.hacia.caracteristica.NombreDelConstructor
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página.
>     Formato como `NombreDeLaInterfazPadre: NombreDelConstructor() constructor`.
>     Por ejemplo, el constructor [Request()](/es/docs/Web/API/Request/Request) tiene un _título_ de `Request: Request() constructor`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Esto se formateará como `Web/API/NombreDeLaInterfazPadre/NombreDelConstructor`.
>     Tenga en cuenta que el nombre de la función del constructor en el slug omite los paréntesis (termina en `NombreDelConstructor` no `NombreDelConstructor()`).
> - **page-type**
>   - : La clave `page-type` para los constructores Web/API es siempre `web-api-constructor`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un arreglo que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se asigna automáticamente según los valores en los datos de compatibilidad del navegador. Vea ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplace el valor de marcador de posición `ruta.hacia.caracteristica.NombreDelConstructor` con la cadena de consulta para el constructor en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena se utiliza automáticamente para rellenar las secciones de compatibilidad y especificaciones (reemplazando los macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Tenga en cuenta que es posible que primero necesite crear/actualizar una entrada para el constructor de la API en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada para la API deberá incluir información de especificación.
>     Vea nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros en la parte superior de la página**
>
> Aparecen varias llamadas de macro en la parte superior de la sección de contenido (inmediatamente debajo de los metadatos de la página).
> Debería actualizarlos o eliminarlos según el consejo a continuación:
>
> - `\{{SeeCompatTable}}` — esto genera un banner **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología que está documentando no es experimental, debería eliminar esto.
>   Si es experimental, y la tecnología está oculta detrás de una preferencia en Firefox, también debería completar una entrada para ella en la página [Características experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que se desaconseja el uso de la tecnología [desaprobada](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   Si no lo es, entonces puede eliminar la llamada al macro.
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no forma parte de ninguna especificación.
> - `\{{AvailableInWorkers}}` — esto genera una nota **Disponible en workers** que indica que la tecnología está disponible en un [contexto de worker](/es/docs/Web/API/Web_Workers_API).
>   Si solo está disponible en el contexto de ventana, entonces puede eliminar la llamada al macro.
>   Si también está disponible o solo está disponible en el contexto de worker, es posible que también deba pasarle un parámetro debido a su disponibilidad (consulte el código fuente de la macro `\{{AvailableInWorkers}}` para ver todos los valores disponibles), y también puede que deba completar una entrada para ella en la página [APIs web disponibles en workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
> - `\{{SecureContext_Header}}` — esto genera un banner **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Secure_Contexts).
>   Si no lo es, entonces puede eliminar la llamada al macro.
>   Si lo es, entonces también debería completar una entrada para ella en la página [Funciones restringidas a contextos seguros](/es/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{APIRef("GroupDataName")}}` — esto genera un menú lateral de referencia del lado izquierdo que muestra enlaces de referencia rápida relacionados con la página actual.
>   Por ejemplo, cada página en la [WebVR API](/es/docs/Web/API/WebVR_API) tiene el mismo menú lateral, que apunta a las otras páginas en la API.
>   Para generar el menú lateral correcto para su API, debe agregar una entrada `GroupData` a nuestro repositorio de GitHub e incluir el nombre de la entrada dentro de la llamada a la macro en lugar de _GroupDataName_.
>   Vea nuestra [guía de menús laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacerlo. Recuerde eliminar el macro `\{{MDNSidebar}}` cuando copie esta página.
>
> No proporcione las macros de encabezado de estado manualmente. Consulte la sección [Cómo se agregan o actualizan los estados de las características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Se muestran ejemplos de los banners **Contexto seguro**, **Disponible en workers**, **Experimental**, **Desaprobado** y **No estándar** justo después de este bloque de notas.
>
> _Recuerde eliminar toda esta nota explicativa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comience el contenido en la página con un párrafo introductorio — comience nombrando el constructor y diciendo qué hace.
Idealmente, esto debería ser una o dos frases cortas.
Podría copiar la mayor parte de esto del resumen del constructor en la página de referencia de la API correspondiente.

## Sintaxis

Complete un cuadro de sintaxis, según la guía en nuestro artículo [secciones de sintaxis](/es/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Parámetros

- `parámetro1` {{optional_inline}}
  - : Incluya una breve descripción del parámetro y lo que hace aquí. Incluya un término y definición para cada parámetro.
    Si el parámetro no es opcional, elimine la llamada a la macro \\{{optional_inline}}.
- `parámetro2`
  - : etc.

### Valor de retorno

Incluya una descripción del valor de retorno del constructor, incluido el tipo de dato y lo que representa.
Normalmente, esto es simplemente "Una instancia del objeto `\{{domxref("NombreDeLaInterfazPadre")}}`".

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo markdown._

### Excepciones

Incluya una lista de todas las excepciones que puede generar el constructor. Incluya un término y definición para cada excepción.

- `Excepción1`
  - : Incluya descripciones de cómo se genera la excepción.
- `Excepción2`
  - : Incluya descripciones de cómo se genera la excepción.

## Ejemplos

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 que nombre el ejemplo. El encabezado debe ser descriptivo de lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debería ser conciso. Para una descripción más larga, use el párrafo después del encabezado.

Consulte nuestra guía sobre cómo agregar [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrá enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tiene algunos ejemplos en esta página y algunos más en otra página:
>
> Incluya un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", debajo del cual puede enlazar a los ejemplos en otras páginas. Por ejemplo:
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
> **Escenario 2:** Si _solo_ tiene ejemplos en otra página y ninguno en esta página:
>
> No agregue ningún encabezado H3; simplemente agregue los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ejemplos de esta API, consulte [la página sobre fetch()](https://example.org).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluya enlaces a páginas de referencia y guías relacionadas con la API actual. Para obtener más pautas, consulte la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
