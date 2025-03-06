---
title: Plantilla de subpágina de propiedades de API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: dad6b0e057cd37b4408cdede8b9f568c56df9a82
---

{{MDNSidebar}}

> **Nota:** _Elimina toda esta nota explicativa antes de publicarla._
>
> ---
>
> **Metadatos de la página:**
>
> Los campos en la parte superior de la página se utiliza para definir "metadatos de página".
> Los valores deben actualizarse adecuadamente para la propiedad en particular.
>
> ```md
> ---
> title: NameOfTheParentInterface.NameOfTheProperty
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> page-type: web-api-instance-property O web-api-static-property
> status:
>   - experimental
>   - deprecated
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página.
>     Formatear como _NameOfTheParentInterface_**.**_NameOfTheProperty_.
>     Por ejemplo, la propiedad [`capabilities`](/es/docs/Web/API/VRDisplay/capabilities) de la interfaz [`VRDisplay`](/es/docs/Web/API/VRDisplay) su `title` es `VRDisplay.capabilities`.
> - **slug**
>
>   - : El final de la ruta de la URL después de `https://developer.mozilla.org/es/docs/`.
>     Esto se formateará como `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Si la propiedad es estática, entonces el slug debe tener un sufijo `_static`, como: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Esto nos permite admitir propiedades de instancia y estáticas que tienen el mismo nombre.
>
> - **page-type**
>   - : La clave `page-type` para las propiedades Web/API es `web-api-instance-property` (por ejemplo, propiedades) o `web-api-static-property` (para propiedades estáticas).
> - **status**
>   - : Incluye claves de estado de tecnología (apropiadas): [**experimental**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental), [**obsoleto**](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated), **no estándar** (si no está en una pista de estándares).
> - **browser-compat**
>
>   - : Reemplace el valor de marcador de posición `path.to.feature.NameOfTheProperty` con la cadena de consulta para la propiedad en el [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data).
>     La cadena de herramientas utiliza automáticamente la clave para rellenar las secciones de compatibilidad y especificación (reemplazando las macros `\{{Compat}}` y `\{{Specifications}}`).
>
>     Tenga en cuenta que es posible que primero deba crear/actualizar una entrada para la propiedad de la API en nuestro [repositorio de datos de compatibilidad con los navegadores](https://github.com/mdn/browser-compat-data), y la entrada para la API deberá incluir información de especificación.
>     Consulta nuestra [guía sobre cómo hacerlo](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros al inicio de la página**
>
> Varias llamadas de macro aparecen en la parte superior de la sección de contenido (inmediatamente debajo de los metadatos).
> Debes actualizarlos o eliminarlos de acuerdo con los siguientes consejos:
>
> - `\{{SeeCompatTable}}` — esto genera un **banner de tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
>   Si la tecnología que está documentando no es experimental, debe eliminarla.
>   Si es experimental y la tecnología está oculta detrás de un pref en Firefox, también debes completar una entrada para ello en la página [Funciones experimentales en Firefox](/es/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — esto genera un banner de **Desaprobado** que indica que el uso de la tecnología está [desaprobada](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
>   Si no lo es, puede eliminar la llamada de macro.
> - `\{{SecureContext_Header}}` — esto genera un banner de **contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Secure_Contexts).
>   Si no lo es, puede eliminar la llamada de macro.
>   Si es así, también debe completar una entrada para ello en la página [Funciones restringidas a contextos seguros](/es/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{APIRef ("GroupDataName")}}` — esto genera la barra lateral de referencia de la izquierda que muestra enlaces de referencia rápida relacionados con la página actual.
>   Por ejemplo, todas las páginas de la [API de WebVR](/es/docs/Web/API/WebVR_API) tienen la misma barra lateral, que apunta a las otras páginas de la API.
>   Para generar la barra lateral correcta para tu API, debes añadir una entrada `GroupData` a nuestro repositorio de GitHub e incluir el nombre de la entrada dentro de la llamada a la macro en lugar de _GroupDataName_.
>   Consulta nuestra guía de [barras laterales de referencia de API](/es/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) para obtener información sobre cómo hacerlo. Recuerde eliminar la macro `\{{MDNSidebar}}` cuando copie esta página.
>
> Las muestras de los banners **Experimental**, **Contexto seguro** y **Desaprobado** se muestran justo después de este bloque de notas.
>
> _Recuerde eliminar toda esta nota explicativa antes de publicarla._

{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}

Comience el contenido de la página con un párrafo introductorio: comience por nombrar la propiedad, decir de qué interfaz forma parte y qué hace.
Idealmente, esto debería ser una o dos oraciones cortas.
Podrías copiar la mayor parte de esto del resumen de la propiedad en la página de referencia de la API correspondiente. Incluya si es de solo lectura o no.

## Valor

Incluya una descripción del valor de la propiedad, incluido el tipo de datos y lo que representa.

## Ejemplos

Tenga en cuenta que usamos el plural "Ejemplos" incluso si la página solo contiene un ejemplo.

### Un encabezado descriptivo

Cada ejemplo debe tener un encabezado H3 (`###`) que nombre el ejemplo. El encabezado debe ser descriptivo de lo que está haciendo el ejemplo. Por ejemplo, "Un ejemplo simple" no dice nada sobre el ejemplo y, por lo tanto, no es un buen encabezado. El encabezado debe ser conciso. Para una descripción más larga, use el párrafo después del encabezado.

Consulta nuestra guía sobre cómo añadir [ejemplos de código](/es/docs/MDN/Writing_guidelines/Page_structures/Code_examples) para obtener más información.

> [!NOTE]
> A veces querrás enlazar a ejemplos dados en otra página.
>
> **Escenario 1:** Si tiene algunos ejemplos en esta página y algunos ejemplos más en otra página:
>
> Incluya un encabezado H3 (`###`) para cada ejemplo en esta página y luego un encabezado H3 final (`###`) con el texto "Más ejemplos", bajo el cual puede vincular los ejemplos en otras páginas. Por ejemplo:
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
> No añada ningún encabezado H3; solo añada los enlaces directamente debajo del encabezado H2 "Ejemplos". Por ejemplo:
>
> ```md
> ## Ejemplos
>
> Para ver ejemplos de esta API, consulte [la página en fetch()](https://example.org).
> ```

## Especificaciones

`\{{Specifications}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo de markdown._

## Compatibilidad con los navegadores

`\{{Compat}}`

_Para usar esta macro, elimine las comillas invertidas y la barra invertida en el archivo de markdown._

## Veáse también

Incluya enlaces a páginas de referencia y guías relacionadas con la API actual. Para obtener más pautas, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo_.

- enlace1
- enlace2
- enlace_externo (año)
