---
title: Plantilla de subpágina de evento de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 1d08cee771feea858e4fdb594bac036b9cd210a6
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir los "metadatos de la página".
> Debes actualizar los valores adecuadamente para cada evento en particular.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheEvent event"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : El título que se muestra en la parte superior de la página.
>     Debe tener el formato "_NameOfTheParentInterface_**:** _NameOfTheEvent_ **event**".
>     Por ejemplo, el evento [animationcancel](/es/docs/Web/API/Element/animationcancel_event) de la interfaz [Window](/es/docs/Web/API/Window) tiene como _title_ `Window: animationcancel event`.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/en-US/docs/`.
>     Tendrá un formato como `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : La clave `page-type` para los eventos de Web/API es siempre `web-api-event`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Es un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad del navegador para dicha característica. Consulta ["Cómo se añaden o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el marcador de posición `path.to.feature.NameOfTheEvent_event` con la cadena de consulta del evento en el [Repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente esta clave para completar las secciones de compatibilidad y especificaciones (sustituyendo las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que primero puede que debas crear o actualizar una entrada para el evento en nuestro [Repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y esta entrada deberá incluir información de especificación.
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
> Debes actualizar o eliminar las siguientes macros según las indicaciones a continuación:
>
> - `\{{SecureContext_Header}}`: genera un aviso de **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts).
>   Si no es así, puedes eliminar la llamada a la macro.
>   Si es así, también debes completar una entrada para ella en la página [Características restringidas a contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}`: genera una nota de **Disponible en workers** que indica que la tecnología está disponible en un [contexto de worker](/es/docs/Web/API/Web_Workers_API).
>   Si solo está disponible en el contexto de ventana (`window`), puedes eliminar la llamada a la macro.
>   Si también está disponible, o solo está disponible en el contexto de worker, es posible que también debas pasarle un parámetro debido a su disponibilidad (consulta el [código fuente de la macro \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) para ver todos los valores disponibles); también es posible que debas completar una entrada para ella en la página [API web disponibles en workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
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
> **Enlace al objeto padre**
>
> Añade un enlace a esta nueva página desde la sección _Eventos_ de su objeto padre.
> Por ejemplo, [Element: wheel event](/es/docs/Web/API/Element/wheel_event) está enlazado desde [`Element` Eventos](/es/docs/Web/API/Element#eventos).
>
> Si el objeto padre no tiene una sección _Eventos_, añade una.
> Si se trata de una nueva "clase" de evento, entonces debes añadir un enlace a esta sección del padre desde la guía [Eventos del DOM](/es/docs/Web/API/Document_Object_Model/Events#event_index).
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio: empieza nombrando el evento, indicando a qué interfaz pertenece y explicando qué hace.
Lo ideal es que sean una o dos frases breves.
Puedes copiar la mayor parte de este texto del resumen de la propiedad en la página de referencia de la API correspondiente.

## Sintaxis

Usa el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establece una propiedad de manejador de eventos.

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })

onNameOfTheEvent = (event) => { }
```

## Tipo de evento

Si el evento tiene un tipo especial, menciónalo junto con su herencia. Si no, indica que se trata de un evento genérico:

_Un {{domxref("Event")}} genérico._

O, por ejemplo:

_Un {{domxref("XRSessionEvent")}}. Hereda de {{domxref("Event")}}._

{{InheritanceDiagram("XRSessionEvent")}}

## Descripción

Si quieres proporcionar texto adicional (demasiado largo para el resumen), añade una sección Descripción.
Puede contener los encabezados

### Activación

y

### Casos de uso

que pueden aportar más información.

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página contiene solo un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que lo identifique. El encabezado debe describir qué hace el ejemplo. Por ejemplo, "Un ejemplo sencillo" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo posterior al encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos que se encuentran en otra página.
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
