---
title: Plantilla de página de referencia de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter al principio de la página se usa para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para la propiedad en cuestión.
>
> ```md
> ---
> title: NameOfTheInterface
> slug: Web/API/NameOfTheInterface
> page-type: web-api-interface
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheInterface
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página. Es solo el nombre de la interfaz. Por ejemplo, la página de la interfaz [Request](/es/docs/Web/API/Request) tiene un _title_ de _Request_.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/es/docs/`. Tendrá el formato `Web/API/NameOfTheParentInterface`. Por ejemplo, el _slug_ de [Request](/es/docs/Web/API/Request) es `Web/API/Request`.
> - **page-type**
>   - : La clave `page-type` para interfaces Web/API siempre es `web-api-interface`.
> - **status**
>   - : Indicadores que describen el estado de esta funcionalidad. Es un arreglo que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe configurarse manualmente: se establece automáticamente según los valores en los datos de compatibilidad de navegadores para la funcionalidad. Consulta ["Cómo se añaden o actualizan los estados de las funcionalidades"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NameOfTheMethod` con la cadena de consulta para el método en el [repositorio de datos de compatibilidad de navegadores](https://github.com/mdn/browser-compat-data). La cadena de herramientas usa automáticamente esta clave para rellenar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
> Ten en cuenta que es posible que primero necesites crear o actualizar una entrada para el método de API en nuestro [repositorio de datos de compatibilidad de navegadores](https://github.com/mdn/browser-compat-data), y dicha entrada debe incluir información de especificación.
>
> Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros de la parte superior de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (inmediatamente después del front matter de la página).
>
> Estas macros se añaden automáticamente mediante la cadena de herramientas (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}` — genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental). Si es experimental y está oculta detrás de una preferencia en Firefox, también debes completar una entrada en la página [Funcionalidades experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — genera un banner de **Obsoleto** que indica que la tecnología está [obsoleta](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
> - `\{{Non-standard_Header}}` — genera un banner de **No estándar** que indica que la funcionalidad no forma parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros según las indicaciones a continuación:
>
> - `\{{SecureContext_Header}}` — genera un banner de **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts). Si no lo está, puedes eliminar la llamada a la macro. Si lo está, también debes completar una entrada en la página [Funcionalidades restringidas a contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — genera una nota de **Disponible en workers** que indica que la tecnología está disponible en el [contexto de workers](/es/docs/Web/API/Web_Workers_API). Si solo está disponible en el contexto de window, puedes eliminar la llamada a la macro.
> - `\{{APIRef("GroupDataName")}}` — genera la barra lateral de referencia a la izquierda con enlaces de referencia rápida relacionados con la página actual. Consulta nuestra guía de [barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para saber cómo hacerlo.
>
> No añadas manualmente macros de encabezado de estado. Consulta ["Cómo se añaden o actualizan los estados de las funcionalidades"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para añadir estos estados a la página.
>
> Justo después de este bloque de notas se muestran ejemplos de los banners de **Contexto seguro**, **Disponible en workers**, **Experimental**, **Obsoleto** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

El párrafo de resumen: comienza nombrando la interfaz, indicando a qué API pertenece y qué hace. Idealmente debería ser una o dos frases cortas. Puedes copiar gran parte de esto desde el resumen de la interfaz en la página de aterrizaje de la API correspondiente.

`\{{InheritanceDiagram}}`

_Para usar el [macro domxref](/es/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#linking_to_reference_pages) en las secciones siguientes, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Constructor

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Crea una nueva instancia del objeto `NameOfTheInterface`.

## Propiedades estáticas

_También hereda propiedades de su interfaz padre, `\{{DOMxRef("NameOfParentInterface")}}`._ (Nota: si la interfaz no hereda de otra interfaz, elimina toda esta línea.)

Incluye un término y una definición para cada propiedad.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si la propiedad no es de solo lectura/experimental/obsoleta/no estándar, elimina las llamadas a macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si la propiedad no es de solo lectura/experimental/obsoleta/no estándar, elimina las llamadas a macros correspondientes.

## Propiedades de instancia

_También hereda propiedades de su interfaz padre, `\{{DOMxRef("NameOfParentInterface")}}`._ (Nota: si la interfaz no hereda de otra interfaz, elimina toda esta línea.)

Incluye un término y una definición para cada propiedad.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si la propiedad no es de solo lectura/experimental/obsoleta/no estándar, elimina las llamadas a macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Incluye aquí una breve descripción de la propiedad y lo que hace. Si la propiedad no es de solo lectura/experimental/obsoleta/no estándar, elimina las llamadas a macros correspondientes.

## Métodos estáticos

_También hereda métodos de su interfaz padre, `\{{DOMxRef("NameOfParentInterface")}}`._ (Nota: si la interfaz no hereda de otra interfaz, elimina toda esta línea.)

Incluye un término y una definición para cada método.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción del método y lo que hace. Si el método no es experimental/obsoleto/no estándar, elimina las llamadas a macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Incluye aquí una breve descripción del método y lo que hace. Si el método no es experimental/obsoleto/no estándar, elimina las llamadas a macros correspondientes.

## Métodos de instancia

_También hereda métodos de su interfaz padre, `\{{DOMxRef("NameOfParentInterface")}}`._ (Nota: si la interfaz no hereda de otra interfaz, elimina toda esta línea.)

Incluye un término y una definición para cada método.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluye aquí una breve descripción del método y lo que hace. Si el método no es experimental/obsoleto/no estándar, elimina las llamadas a macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Incluye aquí una breve descripción del método y lo que hace. Si el método no es experimental/obsoleto/no estándar, elimina las llamadas a macros correspondientes.

## Eventos

_También hereda eventos de su interfaz padre, `\{{DOMxRef("NameOfParentInterface")}}`._ (Nota: si la interfaz no hereda de otra interfaz, elimina toda esta línea.)

Escucha estos eventos usando {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Se dispara cuando (incluye la descripción de cuándo se dispara el evento).
    También disponible a través de la propiedad `oneventname1`.
    Si el evento no es experimental/obsoleto/no estándar, elimina las llamadas a macros correspondientes.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Se dispara cuando (incluye la descripción de cuándo se dispara el evento).
    También disponible a través de la propiedad `oneventname2`.
    Si el evento no es experimental/obsoleto/no estándar, elimina las llamadas a macros correspondientes.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que hace el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

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

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#seccion_vease_tambien) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
