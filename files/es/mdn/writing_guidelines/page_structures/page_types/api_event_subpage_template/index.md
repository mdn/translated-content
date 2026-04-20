---
title: Plantilla de subpágina de evento de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

> [!NOTE]
> _Elimina esta nota explicativa completa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el evento en particular.
>
> ```md
> ---
> title: "NombreDeLaInterfazPadre: evento NombreDelEvento"
> slug: Web/API/NombreDeLaInterfazPadre/NombreDelEvento_event
> page-type: web-api-event
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NombreDelEvento_event
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Formato como "_NombreDeLaInterfazPadre_**:** _NombreDelEvento_ **event**".
>     Por ejemplo, el evento [animationcancel](/es/docs/Web/API/Element/animationcancel_event) de la interfaz [Window](/es/docs/Web/API/Window) tiene un _title_ de `Window: animationcancel event`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formateará como `Web/API/NombreDeLaInterfazPadre/NombreDelEvento_event`.
> - **page-type**
>   - : La clave `page-type` para eventos de Web/API siempre es `web-api-event`.
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta [Cómo se agregan o actualizan los estados de las características](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NombreDelEvento_event` con la cadena de consulta para el evento en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para el evento en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y esta entrada deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacer esto](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
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
> **Enlace al objeto padre**
>
> Agrega un enlace a esta nueva página desde la sección _Eventos_ de su objeto padre.
> Por ejemplo, [Element: wheel event](/es/docs/Web/API/Element/wheel_event) está enlazado desde [`Element` Eventos](/es/docs/Web/API/Element#events).
>
> Si el objeto padre no tiene una sección _Eventos_, entonces agrega una.
> Si esta es una nueva "clase" de evento, entonces debes agregar un enlace a esta sección del padre desde la guía [Eventos DOM](/es/docs/Web/API/Document_Object_Model/Events#event_index).
>
> _Recuerda eliminar esta nota explicativa completa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Comienza el contenido de la página con un párrafo introductorio — comienza nombrando el evento, diciendo a qué interfaz pertenece y diciendo qué hace.
Idealmente, esto debe ser una o dos oraciones cortas.
Puedes copiar la mayor parte de esto del resumen de la propiedad en la página de referencia de API correspondiente.

## Sintaxis

Usa el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establece una propiedad de manejador de eventos.

```js-nolint
addEventListener("NombreDelEvento", (event) => { })

onNombreDelEvento = (event) => { }
```

## Tipo de evento

Si el evento tiene un tipo especial, menciónalo junto con su herencia. Si no, indica que es un evento genérico:

_Un evento genérico {{domxref("Event")}}._

O, por ejemplo:

_Un {{domxref("XRSessionEvent")}}. Hereda de {{domxref("Event")}}._

{{InheritanceDiagram("XRSessionEvent")}}

## Propiedades del evento

Si el evento no es solo un {{domxref("Event")}} genérico, enumera las propiedades adicionales que tiene el evento.

_Además de las propiedades enumeradas a continuación, están disponibles las propiedades de la interfaz padre, {{domxref("Event")}}._

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : El {{domxref("XRSession")}} al que se refiere el evento.

## Descripción

Si deseas proporcionar texto adicional (demasiado largo para el resumen), agrega una sección Descripción.
Puede contener los encabezados

### Activación

y

### Casos de uso

que pueden proporcionar más información.

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
