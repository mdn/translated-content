---
title: Plantilla de página de referencia de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
]10n:
    sourceCommit: https://github.com/mdn/content/blob/main/files/en-us/mdn/writing_guidelines/page_structures/page_types/api_reference_page_template/index.md
---

> [!NOTE]
> _Elimina esta nota explicativa completa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse apropiadamente según la propiedad correspondiente.
>
> ```md
> ---
> titulo: NombreDeLaInterfaz
> slug: Web/API/NombreDeLaInterfaz
> tipo-página: web-api-interface
> estado:
>   - depracated (obsoleto)
>   - experimental (experimental)
>   - non-standard (no-estándar)
> compat-navegador: ruta.a.agregar.NombreDeLaInterfaz
> ---
> ```
>
> - **título**
>   - : Encabezado del título que se muestra en la parte superior de la página. Es solo el nombre de la interfaz. Por ejemplo, la página de la interfaz [Request](/en-us/docs/Web/API/Request) tiene un _título_ de _Request_.
> - **slug**
>   - : La parte final de la ruta del URL después de `https://developer.mozilla.org/en-US/docs/`. Se formatea como `Web/API/NameOfTheParentInterface`. Por ejemplo, el *slug* de [Request](/en-US/docs/Web/API/Request) es `"Web/API/Request"`.
> - **tipo-página**
>   - : La clave `page-type` para interfaces Web/API siempre es `web-api-interface`.
> - **estado**
>   - : Indicadores que describen el estado de esta característica. Es un arreglo que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad de navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **compat-navegador**
>   - : Reemplaza el valor temporal `path.to.feature.NameOfTheMethod` con la cadena de consulta para el método en el [Repositorio de datos de compatibilidad de navegadores](https://github.com/mdn/browser-compat-data). La cadena de herramientas utiliza esta clave automáticamente para llenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
> Ten en cuenta que primero podría ser necesario crear o actualizar una entrada para el método del API en nuestro [Repositorio de datos de compatibilidad](https://github.com/mdn/browser-compat-data), e incluir información de especificación para la API.
>
> Consulta nuestra [guía sobre cómo hacerlo](/en-US/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros del inicio de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (justo debajo del front matter).
>
> Estas macros son agregadas automáticamente por la cadena de herramientas (no es necesario añadir o eliminar nada):
>
> - `\{{SeeCompatTable}}` — genera un banner **This is an experimental technology** que indica que la tecnología es [experimental](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Si es experimental y está oculta tras un pref en Firefox, también debes llenar una entrada para ella en la página [Experimental features in Firefox](/en-US/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — genera un banner **Deprecated** que indica que la tecnología está [obsoleta](/en-US/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — genera un banner **Non-standard** que indica que la característica no forma parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros según la guía indicada:
>
> - `\{{SecureContext_Header}}` — genera un banner **Secure context**, indicando que la tecnología solo está disponible en un [contexto seguro](/en-US/docs/Web/Security/Defenses/Secure_Contexts). Si no lo está, puedes eliminar la llamada. Si sí lo está, también debes añadir una entrada en la página [Características restringidas a contextos seguros](/en-US/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — genera una nota **Available In Workers** que indica disponibilidad en el [contexto de workers](/en-US/docs/Web/API/Web_Workers_API).  
>   Si solo está disponible en contexto window, elimina la macro.  
>   Si también o únicamente está disponible en worker, podría ser necesario pasar un parámetro adicional (ver el [código fuente del macro \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)) y añadir una entrada en [Web APIs available in workers](/en-US/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
> - `\{{APIRef("GroupDataName")}}` — genera la barra lateral izquierda que muestra enlaces de referencia relacionados con la página actual.  Por ejemplo, todas las páginas de la [WebVR API](/en-US/docs/Web/API/WebVR_API) comparten la misma barra lateral, con enlaces al resto de la API. Para generar la barra correcta, debes añadir una entrada GroupData y usar su nombre dentro de esta macro. Consulta nuestra guía sobre [barras laterales de referencia de API](/en-US/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars).
>
> No añadas manualmente macros de estado. Consulta ["Cómo se agregan o actualizan los estados de las características"](/en-US/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para añadir estos estados a la página.
>
> Ejemplos de los banners **Secure context**, **Available in workers**, **Experimental**, **Deprecated** y **Non-standard** aparecen justo después de este bloque.
>
> _Recuerda eliminar esta nota completa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

El párrafo de resumen — empieza nombrando la interfaz, indicando qué API forma parte y qué hace. Idealmente debe ser una o dos frases cortas. Puedes copiar la mayor parte desde el resumen de la interfaz en la página principal correspondiente.

`\{{InheritanceDiagram}}`

_Para usar el [macro domxref](/en-US/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) en las secciones siguientes, elimina las comillas invertidas y el backslash en el archivo markdown._

## Constructor

- `\{{DOMxRef("NombreDeLaInterfaz.NombreDeLaInterfaz", "NombreDeLaInterfaz()")}}`
  - : Crea una nueva instancia del objeto `NombreDeLaInterfaz`.

## Propiedades estáticas

_También hereda propiedades de su interfaz padre, `\{{DOMxRef("NombreDeInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra, elimina esta línea completa.)

Incluye un término y definición por cada propiedad.

- `\{{DOMxRef("NombreDeLaInterfaz.propiedadEstática1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si no es readonly/experimental/deprecated/non-standard, elimina las macros correspondientes.
- `\{{DOMxRef("NombreDeLaInterfaz.propiedadEstática2")}}`
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si no es readonly/experimental/deprecated/non-standard, elimina las macros correspondientes.

## Propiedades de instancia

_También hereda propiedades de su interfaz padre, `\{{DOMxRef("NombreDeInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra, elimina esta línea completa.)

Incluye un término y definición por cada propiedad.

- `\{{DOMxRef("NombreDeLaInterfaz.propiedadEstática1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si no es readonly/experimental/deprecated/non-standard, elimina las macros correspondientes.
- `\{{DOMxRef("NombreDeLaInterfaz.propiedadEstática2")}}`
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si no es readonly/experimental/deprecated/non-standard, elimina las macros correspondientes.

## Métodos estáticos

_También hereda métodos de su interfaz padre, `\{{DOMxRef("NombreDeInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra, elimina esta línea completa.)

Incluye un término y definición por cada método.

- `\{{DOMxRef("NombreDeLaInterfaz.métodoEstático1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción del método y lo que hace. Si no es experimental/deprecated/non-standard, elimina las macros correspondientes.
- `\{{DOMxRef("NombreDeLaInterfaz.métodoEstático2()")}}`
  - : Incluye aquí una breve descripción del método y lo que hace. Si no es experimental/deprecated/non-standard, elimina las macros correspondientes.

## Métodos de instancia

_También hereda métodos de su interfaz padre, `\{{DOMxRef("NombreDeInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra, elimina esta línea completa.)

Incluye un término y definición por cada método.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción del método y lo que hace. Si no es experimental/deprecated/non-standard, elimina las macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Incluye aquí una breve descripción del método y lo que hace. Si no es experimental/deprecated/non-standard, elimina las macros correspondientes.

## Eventos

_También hereda eventos de su interfaz padre, `\{{DOMxRef("NameOfParentInterface")}}`._ (Nota: Si la interfaz no hereda de otra, elimina esta línea completa.)

Escucha estos eventos usando {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando (incluye la descripción de cuándo se dispara el evento).
    También está disponible a través de la propiedad `oneventname1`.
    Si el evento no es experimental/deprecated/non-standard, elimina las macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Se dispara cuando (incluye la descripción de cuándo se dispara el evento).
    También está disponible a través de la propiedad `oneventname2`.
    Si el evento no es experimental/deprecated/non-standard, elimina las macros correspondientes.

## Ejemplos

Ten en cuenta que usamos el plural «Ejemplos» incluso si la página contiene un solo ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe describir lo que hace el ejemplo. Por ejemplo, «Un ejemplo simple» no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Si necesitas una descripción más extensa, utilízala en el párrafo posterior al encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/en-US/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> En ocasiones querrás enlazar ejemplos que se encuentran en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y más ejemplos en otra:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo de esta página y luego un encabezado H3 final (`###`) con el texto «Más ejemplos», debajo del cual puedes enlazar los ejemplos ubicados en otras páginas. Por ejemplo:
>
> ```md
> ## Ejemplos
>
> ### Uso de la API Fetch
>
> Ejemplo de Fetch
>
> ### Más ejemplos
>
> Enlaces a más ejemplos en otras páginas
> ```
>
> **Escenario 2:** Si *solo* tienes ejemplos en otra página y ninguno en esta:
>
> No añadas encabezados H3; simplemente agrega los enlaces directamente debajo del encabezado H2 «Ejemplos». Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta API, consulta [la página de fetch()](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para utilizar esta macro, elimina las comillas invertidas y la barra invertida del archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para utilizar esta macro, elimina las comillas invertidas y la barra invertida del archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para más recomendaciones, consulta la sección [Véase también](/en-US/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) de la *Guía de estilo de redacción*.

- enlace1
- enlace2
- enlace_externo (año)