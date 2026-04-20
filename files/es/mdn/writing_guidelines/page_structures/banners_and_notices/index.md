---
title: Banners y avisos
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{MDNSidebar}}

Los banners y avisos se muestran en algunas páginas, en particular en la referencia de API, para resaltar factores importantes que afectarán la forma en que se usa el contenido descrito.
Por ejemplo, los banners se usan para resaltar cuándo una interfaz, método o propiedad en particular está obsoleto y no debe usarse en código de producción, o solo se puede usar en un contexto seguro.

Los banners se representan usando macros en el contenido de la página.
Algunas macros de banner se agregan automáticamente a la página, mientras que otras se agregan manualmente.

Este artículo describe los banners más importantes y cómo se agregan.

## Dónde se agregan las macros de banner

Los banners se agregan usando macros que generalmente se insertan debajo de los metadatos de la página, junto con la macro de la barra lateral de la página. Por ejemplo, en el bloque a continuación, se ha usado la macro `\{{SecureContext_Header}}` para indicar que la interfaz {{domxref("AudioDecoder")}} solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts), se ha usado la macro `\{{AvailableInWorkers}}` para indicar que la interfaz {{domxref("AudioDecoder")}} solo está disponible en el [contexto de ventana](/es/docs/Web/API/Window) y el [contexto de worker dedicado](/es/docs/Web/API/DedicatedWorkerGlobalScope), y se ha agregado `\{{SeeCompatTable}}` para indicar que la interfaz es experimental.

```md
---
title: AudioDecoder
slug: Web/API/AudioDecoder
page-type: web-api-interface
status:
  - experimental
browser-compat: api.AudioDecoder
---

\{{APIRef("WebCodecs API")}} \{{SeeCompatTable}} \{{SecureContext_Header}} \{{AvailableInWorkers("window_and_dedicated")}}
```

## Banners que se deben agregar manualmente

Necesita agregar las siguientes macros manualmente:

- `\{{SecureContext_Header}}` — esto genera un banner **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts).
- `\{{AvailableInWorkers}}` — esto genera una nota **Disponible en workers** que indica que la tecnología está disponible en el [contexto de worker](/es/docs/Web/API/Web_Workers_API).

## Banners que se agregan automáticamente

Las siguientes macros se agregan automáticamente al contenido para que coincidan con los estados almacenados en el repositorio [browser compat data](https://github.com/mdn/browser-compat-data):

- `\{{SeeCompatTable}}` — genera un banner **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
- `\{{Deprecated_Header}}` — genera un banner **Obsoleto** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
- `\{{Non-standard_Header}}` — genera un banner **No estándar** que indica que el uso de la tecnología no forma parte de una especificación formal, incluso si se implementa en varios navegadores.

[Actualice el estado de la característica en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para cambiar estos valores.

> [!NOTE]
> Aunque puede actualizar manualmente estas macros en el contenido, los valores que no coinciden con los datos de compatibilidad del navegador se reemplazarán/eliminarán.

> [!NOTE]
> Las páginas que tienen los banners `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` o `\{{Non-standard_Header}}` también tendrán los valores de estado `experimental`, `deprecated` y `non-standard` en los metadatos de la página.
> Los metadatos se actualizan automáticamente al mismo tiempo que los encabezados.
> Las macros de banner no dependen de estos metadatos de estado (pero algún día podrían generarse a partir de ellos).

## Experimental: banner de "Posiciones de estándares"

Ocasionalmente, los proveedores de navegadores no están de acuerdo en cómo se está desarrollando una característica, y algunos pueden oponerse a ella en su forma actual. En casos excepcionales, MDN documenta tecnologías en este estado para alentar a la comunidad web a experimentar con ellas, proporcionar comentarios y ayudar a los proveedores de navegadores a llegar a un consenso.

Es importante aclarar el estado de estandarización actual de dichas características a los lectores. Mientras no se finaliza una solución a largo plazo para representar esta información, estamos haciendo lo siguiente para tecnologías específicas de alto perfil para evitar confusión:

- Agregar este banner a la página de aterrizaje para esa característica (no a cada subpágina de la característica):

  ```md
  > [!WARNING]
  > Esta característica actualmente se opone por <number> proveedor(es) de navegador. Consulte la sección [Posiciones de estándares](#posiciones_de_estándares) a continuación para obtener detalles sobre la oposición.
  ```

  - Reemplace `<number>` con el número de proveedores de navegadores que se oponen a la característica.
  - Use `proveedor` o `proveedores` según corresponda.

- Agregar una sección "Posiciones de estándares" a la misma página que el banner anterior, como subsección de la sección estándar "Especificaciones".

> [!NOTE]
> Consulte [Conjuntos de sitios web relacionados](/es/docs/Web/API/Storage_Access_API/Related_website_sets) para ver un ejemplo de la sección "Posiciones de estándares" y lo que debe contener, así como el banner de la página de aterrizaje.
