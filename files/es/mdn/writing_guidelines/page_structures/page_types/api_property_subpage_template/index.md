---
title: Plantilla de subpágina de propiedad de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
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
> title: "NombreDeLaInterfazPadre: propiedad NombreDeLaPropiedad"
> short-title: NombreDeLaPropiedad
> slug: Web/API/NombreDeLaInterfazPadre/NombreDeLaPropiedad
> page-type: web-api-instance-property OR web-api-static-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NombreDeLaPropiedad
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página.
>     Formato como `"NombreDeLaInterfazPadre: propiedad NombreDeLaPropiedad"`.
>     Por ejemplo, la propiedad [`capabilities`](/es/docs/Web/API/VRDisplay/capabilities) de la interfaz [`VRDisplay`](/es/docs/Web/API/VRDisplay) tiene un _title_ de `VRDisplay: capabilities property`.
> - **short-title**
>   - : El nombre de la propiedad (usado en la barra lateral).
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formateará como `Web/API/NombreDeLaInterfazPadre/NombreDeLaPropiedad`.
>
>     Si la propiedad es estática, entonces el slug debe tener un sufijo `_static`, como: `Web/API/NombreDeLaInterfazPadre/NombreDeLaPropiedad_static`. Esto nos permite admitir propiedades de instancia y estáticas que tienen el mismo nombre.
>
> - **page-type**
>   - : La clave `page-type` para propiedades de Web/API es `web-api-instance-property` (para propiedades de instancia) o `web-api-static-property` (para propiedades estáticas).
> - **status**
>   - : Indicadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente según los valores en los datos de compatibilidad del navegador para la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NombreDeLaPropiedad` con la cadena de consulta para la propiedad en el [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas usa automáticamente la clave para poblar las secciones de compatibilidad y especificaciones (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero necesites crear/actualizar una entrada para la propiedad de la API en nuestro [repositorio de datos de compatibilidad del navegador](https://github.com/mdn/browser-compat-data), y la entrada para la API deberá incluir información de especificación.
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
>   Para generar la barra lateral correcta para tu API, necesitas agregar una entrada `GroupData` a nuestro repositorio de GitHub e incluir el nombre de la entrada dentro de la llamada a la macro en lugar de _NombreDeGrupoDeDatos_.
>   Consulta nuestra guía de [Barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacer esto.
>
> No proporciones macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para agregar estos estados a la página.
>
> Muestras de los banners **Contexto seguro**, **Disponible en workers**, **Experimental**, **Desaprobado** y **No estándar** se muestran justo después de este bloque de notas.
>
> _Recuerda eliminar esta nota explicativa completa antes de publicar._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

La propiedad **`NombreDeLaPropiedad`** [read-only] de la interfaz \{{domxref("NombreDeLaInterfazPadre")}} _\<proporciona un resumen conciso del comportamiento\>_.

_Comienza nombrando la propiedad (indicando si es o no de solo lectura) y la interfaz de la que forma parte, y luego di qué hace._

_Idealmente, esto debe ser una o dos oraciones cortas._
_Si necesitas más de un par de párrafos, esto debe agregarse en una sección "Descripción" colocada antes de la sección "Ejemplos"._

## Valor

Un \{{domxref("AlgúnTipoDeDato")}}.

_Normalmente solo el tipo de dato y valores permitidos para ese tipo de dato si es relevante._
_Si la propiedad tiene un comportamiento diferente de establecedor (setter) y obtenedor (getter), estos normalmente deben cubrirse en oraciones separadas._

_En algunos casos es posible que quieras decir más sobre lo que representa el tipo de dato._
_Esto es aceptable, pero no debe duplicar información de la sección "Descripción" (debes incluir información sobre lo que significa el valor allí)._

_Ten en cuenta que algunas páginas de propiedades se escriben en la forma "Devuelve un [nombre del tipo de propiedad] que representa..." pero esta no es la forma recomendada.
Además, algunos atributos extendidos de WebIDL con significados específicos pueden asociarse con el tipo. Hay formas estándar de documentarlos; consulta [Información contenida en un archivo WebIDL](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_of_the_property) para obtener más información._

<!--
## Descripción

Descripción adicional, si es necesaria.
-->

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
> Incluye un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", debajo del cual puedes enlazar a los ejemplos en otras páginas. Por ejemplo:
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

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
- enlace_externo (año)
