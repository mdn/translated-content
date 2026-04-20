---
title: Plantilla de página de referencia de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
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
> Los valores deben actualizarse adecuadamente para la propiedad en particular.
>
> ```md
> ---
> title: NombreDeLaInterfaz
> slug: Web/API/NombreDeLaInterfaz
> page-type: web-api-interface
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NombreDeLaInterfaz
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Este es solo el nombre de la interfaz. Por ejemplo, la página de la interfaz [Request](/es/docs/Web/API/Request) tiene un _title_ de _Request_.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`). Se formateará como `Web/API/NombreDeLaInterfazPadre`. Por ejemplo, el slug de [Request](/es/docs/Web/API/Request) es "Web/API/Request".
> - **page-type**
>   - : La clave `page-type` para interfaces de Web/API siempre es `web-api-interface`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NombreDelMétodo` con la cadena de consulta para el método en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data). La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
> Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el método de la API en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada para la API deberá incluir información de especificación.
>
> Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
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
> - `\{{Deprecated_Header}}` — esto genera un banner **Desaprobado** que indica que la tecnología es [desaprobada](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — esto genera un banner **No estándar** que indica que la característica no es parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros según el consejo a continuación:
>
> - `\{{SecureContext_Header}}` — esto genera un banner **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts). Si no lo está, puedes eliminar la llamada a la macro. Si lo está, también debes llenar una entrada para ella en la página [Características restringidas a contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — esto genera una nota **Disponible en workers** que indica que la tecnología está disponible en el [contexto de worker](/es/docs/Web/API/Web_Workers_API).
>   Si solo está disponible en el contexto de ventana, puedes eliminar la llamada a la macro.
>   Si también está disponible o solo está disponible en el contexto de worker, es posible que también debas pasarle un parámetro debido a su disponibilidad (consulta el [código fuente de las macros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) para todos los valores disponibles), también puede que necesites llenar una entrada para ella en la página [API web disponibles en workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
> - `\{{APIRef("NombreDeGrupoDeDatos")}}` — esto genera la barra lateral de referencia izquierda que muestra enlaces de referencia rápida relacionados con la página actual. Por ejemplo, cada página en la [WebVR API](/es/docs/Web/API/WebVR_API) tiene la misma barra lateral, que apunta a las otras páginas de la API. Para generar la barra lateral correcta para tu API, necesitas agregar una entrada GroupData e incluir el nombre de la entrada dentro de la llamada a la macro en lugar de _NombreDeGrupoDeDatos_. Consulta nuestra guía de [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacer esto.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Muestras de los banners **Contexto seguro**, **Disponible en workers**, **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> _Recuerda eliminar esta nota explicativa completa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

El párrafo de resumen — comienza nombrando la interfaz, diciendo a qué API pertenece y diciendo qué hace. Idealmente, esto debe ser una o dos oraciones cortas. Puedes copiar la mayor parte de esto del resumen de la interfaz en la página de aterrizaje de la API correspondiente.

`\{{InheritanceDiagram}}`

_Para usar la [macro domxref](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) en las secciones a continuación, elimina los backticks y la barra invertida en el archivo markdown._

## Constructor

- `\{{DOMxRef("NombreDeLaInterfaz.NombreDeLaInterfaz", "NombreDeLaInterfaz()")}}`
  - : Crea una nueva instancia del objeto `NombreDeLaInterfaz`.

## Propiedades estáticas

_También hereda propiedades de su interfaz padre, `\{{DOMxRef("NombreDeLaInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra interfaz, elimina esta línea completa).

Incluye un término y definición para cada propiedad.

- `\{{DOMxRef("NombreDeLaInterfaz.propiedadEstática1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye una breve descripción de la propiedad y qué hace aquí. Si la propiedad no es de solo lectura/experimental/desaprobada/no estándar, elimina las llamadas a macro relacionadas.
- `\{{DOMxRef("NombreDeLaInterfaz.propiedadEstática2")}}`
  - : Incluye una breve descripción de la propiedad y qué hace aquí. Si la propiedad no es de solo lectura/experimental/desaprobada/no estándar, elimina las llamadas a macro relacionadas.

## Propiedades de instancia

_También hereda propiedades de su interfaz padre, `\{{DOMxRef("NombreDeLaInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra interfaz, elimina esta línea completa).

Incluye un término y definición para cada propiedad.

- `\{{DOMxRef("NombreDeLaInterfaz.propiedad1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye una breve descripción de la propiedad y qué hace aquí. Si la propiedad no es de solo lectura/experimental/desaprobada/no estándar, elimina las llamadas a macro relacionadas.
- `\{{DOMxRef("NombreDeLaInterfaz.propiedad2")}}`
  - : Incluye una breve descripción de la propiedad y qué hace aquí. Si la propiedad no es de solo lectura/experimental/desaprobada/no estándar, elimina las llamadas a macro relacionadas.

## Métodos estáticos

_También hereda métodos de su interfaz padre, `\{{DOMxRef("NombreDeLaInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra interfaz, elimina esta línea completa).

Incluye un término y definición para cada método.

- `\{{DOMxRef("NombreDeLaInterfaz.métodoEstático1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye una breve descripción del método y qué hace aquí. Si el método no es experimental/desaprobado/no estándar, elimina las llamadas a macro relacionadas.
- `\{{DOMxRef("NombreDeLaInterfaz.métodoEstático2()")}}`
  - : Incluye una breve descripción del método y qué hace aquí. Si el método no es experimental/desaprobado/no estándar, elimina las llamadas a macro relacionadas.

## Métodos de instancia

_También hereda métodos de su interfaz padre, `\{{DOMxRef("NombreDeLaInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra interfaz, elimina esta línea completa).

Incluye un término y definición para cada método.

- `\{{DOMxRef("NombreDeLaInterfaz.método1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye una breve descripción del método y qué hace aquí. Si el método no es experimental/desaprobado/no estándar, elimina las llamadas a macro relacionadas.
- `\{{DOMxRef("NombreDeLaInterfaz.método2()")}}`
  - : Incluye una breve descripción del método y qué hace aquí. Si el método no es experimental/desaprobado/no estándar, elimina las llamadas a macro relacionadas.

## Eventos

_También hereda eventos de su interfaz padre, `\{{DOMxRef("NombreDeLaInterfazPadre")}}`._ (Nota: Si la interfaz no hereda de otra interfaz, elimina esta línea completa).

Escucha estos eventos usando {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- `\{{DOMxRef("NombreDeLaInterfaz.evento1", "evento1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se activa cuando (incluye la descripción de cuándo se activa el evento).
    También disponible a través de la propiedad `oneventname1`.
    Si el evento no es experimental/desaprobado/no estándar, elimina las llamadas a macro relacionadas.
- `\{{DOMxRef("NombreDeLaInterfaz.evento2", "evento2")}}`
  - : Se activa cuando (incluye la descripción de cuándo se activa el evento).
    También disponible a través de la propiedad `oneventname2`.
    Si el evento no es experimental/desaprobado/no estándar, elimina las llamadas a macro relacionadas.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

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
