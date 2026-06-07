---
title: Banners y avisos
slug: MDN/Writing_guidelines/Page_structures/Banners_and_notices
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Los banners y avisos se muestran en algunas páginas, en particular en la referencia de la API, para destacar factores importantes que afectarán el uso del contenido descrito.
Por ejemplo, los banners se usan para indicar cuándo una interfaz, un método o una propiedad en particular están obsoletos y no deben usarse en código de producción, o cuándo solo pueden usarse en un contexto seguro.

Los banners se representan mediante macros en el contenido de la página.
Algunas macros de banner se añaden automáticamente a la página, mientras que otras se añaden de forma manual.

Este artículo describe los banners más importantes y cómo se añaden.

## Dónde se añaden las macros de banner

Los banners se añaden mediante macros que, por lo general, se insertan debajo de los metadatos de la página, junto con la macro de la barra lateral. Por ejemplo, en el siguiente bloque se ha utilizado la macro `\{{SecureContext_Header}}` para indicar que la interfaz {{domxref("AudioDecoder")}} solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts); la macro `\{{AvailableInWorkers}}` para indicar que la interfaz {{domxref("AudioDecoder")}} solo está disponible en el [contexto de window](/es/docs/Web/API/Window) y en el [contexto de worker dedicado](/es/docs/Web/API/DedicatedWorkerGlobalScope); y `\{{SeeCompatTable}}` para indicar que la interfaz es experimental.

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

## Banners que deben añadirse manualmente

Debes añadir las siguientes macros de forma manual:

- `\{{SecureContext_Header}}` — genera un banner de **Contexto seguro** que indica que la tecnología solo está disponible en un [contexto seguro](/es/docs/Web/Security/Defenses/Secure_Contexts).
- `\{{AvailableInWorkers}}` — genera una nota de **Disponible en workers** que indica que la tecnología está disponible en el [contexto de worker](/es/docs/Web/API/Web_Workers_API).

## Banners que se añaden automáticamente

Las siguientes macros se añaden automáticamente al contenido para que coincidan con los estados almacenados en el repositorio [browser compat data](https://github.com/mdn/browser-compat-data):

- `\{{SeeCompatTable}}` — genera un banner de **Esta es una tecnología experimental** que indica que la tecnología es [experimental](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#experimental).
- `\{{Deprecated_Header}}` — genera un banner de **Obsoleto** que indica que el uso de la tecnología está [desaconsejado](/es/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#deprecated).
- `\{{Non-standard_Header}}` — genera un banner de **No estándar** que indica que el uso de la tecnología no forma parte de una especificación formal, incluso si está implementada en varios navegadores.

[Actualiza el estado de la característica en el repositorio browser-compat-data](/es/docs/MDN/Writing_guidelines/Page_structures/Feature_status#how_feature_statuses_are_added_or_updated) para modificar estos valores.

> [!NOTE]
> Aunque puedes actualizar manualmente estas macros en el contenido, los valores que no coincidan con los datos de compatibilidad de navegadores serán reemplazados o eliminados.

> [!NOTE]
> Las páginas que tengan los banners `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` o `\{{Non-standard_Header}}` también tendrán los valores de estado `experimental`, `deprecated` y `non-standard` correspondientes en los metadatos de la página.
> Los metadatos se actualizan automáticamente al mismo tiempo que los encabezados.
> Las macros de banner no dependen de estos metadatos de estado (aunque en el futuro podrían generarse a partir de ellos).

## Experimental: banner de "Posiciones sobre estándares"

En ocasiones, los proveedores de navegadores no están de acuerdo sobre cómo evoluciona una característica, y algunos pueden oponerse a ella en su forma actual. En casos excepcionales, MDN documenta estas tecnologías para animar a la comunidad web a experimentar con ellas, dar su opinión y ayudar a los proveedores a alcanzar un consenso.

Es importante aclarar a los lectores el estado de estandarización actual de este tipo de características. Mientras no existe una solución definitiva a largo plazo para representar esta información, se hace lo siguiente para ciertas tecnologías de gran relevancia, con el fin de evitar confusiones:

- Añadir este banner a la página de inicio de esa característica (no a cada subpágina):

  ```md
  > [!WARNING]
  > Esta característica está actualmente rechazada por <número> proveedor(es) de navegadores. Consulta la sección [Posiciones sobre estándares](#standards_positions) a continuación para obtener más detalles sobre la oposición.
  ```

  - Reemplaza `<número>` con el número de proveedores de navegadores que se oponen a la característica.
  - Usa `proveedor` o `proveedores` según corresponda.

- Añadir una sección "Posiciones sobre estándares" en la misma página que el banner anterior, como subsección de la sección estándar "Especificaciones".

> [!NOTE]
> Consulta [Related Website Sets](/es/docs/Web/API/Storage_Access_API/Related_website_sets) para ver un ejemplo de la sección "Posiciones sobre estándares", lo que debería contener y el banner de la página de inicio.
