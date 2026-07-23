---
title: Plantilla de subpágina de propiedades de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicarla._
>
> ---
>
> **Front matter de la página:**
>
> El front matter que aparece en la parte superior de la página se usa para definir los "metadatos de la página".
> Debes actualizar los valores según corresponda para la propiedad en cuestión.
>
> ```md
> ---
> title: "NameOfTheParentInterface: NameOfTheProperty property"
> short-title: NameOfTheProperty
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> page-type: web-api-instance-property OR web-api-static-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Formatéalo como "NameOfTheParentInterface: NameOfTheProperty property".
>     Por ejemplo, la propiedad [`capabilities`](/es/docs/Web/API/VRDisplay/capabilities) de la interfaz [`VRDisplay`](/es/docs/Web/API/VRDisplay) tiene un `title` de `VRDisplay: capabilities property`.
> - **short-title**
>   - : El nombre de la propiedad (se usa en la barra lateral).
> - **slug**
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`.
>     Esto se formateará como `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Si la propiedad es estática, entonces el slug debe tener un sufijo `_static`, como: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Esto nos permite admitir propiedades de instancia y estáticas que tienen el mismo nombre.
> - **page-type**
>   - : La clave `page-type` para las propiedades Web/API es `web-api-instance-property` (para propiedades de instancia) o `web-api-static-property` (para propiedades estáticas).
> - **status**
>   - : Marcadores que describen el estado de esta característica. Un array que puede contener uno o más de los siguientes valores: `experimental`, `deprecated`, `non-standard`. Esta clave no debe establecerse manualmente: se establece automáticamente en función de los valores de los datos de compatibilidad con navegadores de la característica. Consulta ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características).
> - **browser-compat**
>   - : Reemplaza el valor de marcador de posición `path.to.feature.NameOfTheProperty` con la cadena de consulta de la propiedad en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente esta clave para rellenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Ten en cuenta que es posible que primero debas crear o actualizar una entrada para la propiedad de la API en nuestro [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data), y que esa entrada deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros al inicio de la página**
>
> Varias llamadas a macros aparecen en la parte superior de la sección de contenido (justo debajo del front matter de la página).
>
> Estas macros las añade automáticamente la cadena de herramientas (no es necesario añadirlas ni eliminarlas):
>
> - `\{{SeeCompatTable}}` — esto genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si es experimental y la tecnología está oculta tras una preferencia en Firefox, también debes completar una entrada para ella en la página [Funciones experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner de **Obsoleto** que indica que se [desaconseja](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsoleto) el uso de la tecnología.
> - `\{{Non-standard_Header}}` — esto genera un banner de **No estándar** que indica que la característica no forma parte de ninguna especificación.
>
> Debes actualizar o eliminar las siguientes macros según las indicaciones a continuación:
>
> - `\{{SecureContext_Header}}` — esto genera un banner de **contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts).
>   Si no es así, puedes eliminar la llamada a la macro.
>   Si es así, también debes completar una entrada para ella en la página [Funciones restringidas a contextos seguros](/es/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — esto genera una nota de **Disponible en workers** que indica que la tecnología está disponible en un [contexto de worker](/es/docs/Web/API/Web_Workers_API).
>   Si solo está disponible en el contexto de ventana, puedes eliminar la llamada a la macro.
>   Si también está disponible, o solo está disponible, en el contexto de worker, es posible que además debas pasarle un parámetro según su disponibilidad (consulta el [código fuente de la macro \{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) para ver todos los valores disponibles); también podrías necesitar completar una entrada para ella en la página [Web APIs disponibles en workers](/es/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#web_apis_available_in_workers).
> - `\{{APIRef("GroupDataName")}}` — esto genera la barra lateral de referencia de la izquierda, que muestra enlaces de referencia rápida relacionados con la página actual.
>   Por ejemplo, todas las páginas de la [WebVR API](/es/docs/Web/API/WebVR_API) tienen la misma barra lateral, que enlaza con las demás páginas de la API.
>   Para generar la barra lateral correcta para tu API, debes añadir una entrada `GroupData` a nuestro repositorio de GitHub e incluir el nombre de la entrada dentro de la llamada a la macro en lugar de _GroupDataName_.
>   Consulta nuestra guía de [barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacerlo.
>
> No proporciones las macros de encabezado de estado manualmente. Consulta la sección ["Cómo se agregan o actualizan los estados de las características"](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#¿cómo_se_agregan_o_actualizan_los_estados_de_las_características) para añadir estos estados a la página.
>
> A continuación de este bloque de notas se muestran ejemplos de los banners **Contexto seguro**, **Disponible en workers**, **Experimental**, **Obsoleto** y **No estándar**.
>
> _Recuerda eliminar toda esta nota explicativa antes de publicarla._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

La propiedad **`NameOfTheProperty`** [de solo lectura] de la interfaz \{{domxref("NameOfTheParentInterface")}} _\<proporciona un resumen conciso del comportamiento\>_.

_Empieza nombrando la propiedad (indicando si es de solo lectura o no) y la interfaz de la que forma parte, y luego indica qué hace._

_Idealmente, esto debería ser una o dos oraciones cortas._
_Si necesitas más de un par de párrafos, deberías añadirlos en una sección "Descripción" ubicada antes de la sección "Ejemplos"._

## Valor

Un \{{domxref("SomeDataType" }}.

_Normalmente, solo el tipo de dato y los valores permitidos para ese tipo de dato si es relevante._
_Si la propiedad tiene un comportamiento diferente para los métodos setter y getter, esto normalmente debería explicarse en oraciones separadas._

_En algunos casos, puede que quieras explicar con más detalle qué representa el tipo de dato._
_Esto es aceptable, pero no debería duplicar información de la sección "Descripción" (ahí es donde debes incluir información sobre qué significa el valor)._

_Ten en cuenta que algunas páginas de propiedades están escritas en la forma "Devuelve un [nombre del tipo de propiedad] que representa..." pero este no es el formato recomendado.
Además, algunos atributos extendidos de WebIDL con significados específicos pueden estar asociados al tipo. Existen formas estándares de documentarlos; consulta [Información contenida en un archivo WebIDL](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#tipo_de_la_propiedad) para obtener más información._

<!--
## Descripción

Descripción adicional, si es necesario.
-->

## Ejemplos

Ten en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que lo identifique. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, usa el párrafo después del encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos que estén en otra página.
>
> **Escenario 1:** Si tienes algunos ejemplos en esta página y algunos más en otra página:
>
> Incluye un encabezado H3 (`###`) para cada ejemplo de esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puedes enlazar los ejemplos de otras páginas. Por ejemplo:
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
> **Escenario 2:** Si _solo_ tienes ejemplos en otra página y ninguno en esta página:
>
> No añadas ningún encabezado H3; añade los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta API, consulta [la página de fetch()](https://example.org/).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con navegadores

`\{{Compat}}`

_Para usar esta macro, elimina las comillas invertidas y la barra invertida en el archivo de markdown._

## Véase también

Incluye enlaces a páginas de referencia y guías relacionadas con la API actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#sección_véase_también) en la _Guía de estilo de redacción_.

- enlace1
- enlace2
- enlace_externo (año)
