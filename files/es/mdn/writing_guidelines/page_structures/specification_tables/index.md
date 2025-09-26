---
title: Tablas de especificaciones
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{MDNSidebar}}

Cada página de referencia en MDN debe proporcionar información sobre la especificación o especificaciones en las que se definió esa API o tecnología. Este artículo muestra el aspecto de estas tablas y explica cómo agregarlas.

La definición de la sección de especificaciones es similar a la definición de [tabla de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), se genera comúnmente a partir de la misma fuente de datos y, por lo general, aparece inmediatamente antes de esta en una página.

## Tablas de especificaciones estándar

La sección de especificaciones estándar debería verse así:

```md
## Especificaciones

\{{Specifications}}
```

La macro `\{{Specifications}}` genera la tabla de especificaciones en función de los valores en los metadatos de la página.

De forma predeterminada, se utilizan los valores del metadato `browser-compat`.
Cada valor hace referencia a una característica en particular y su información de compatibilidad y especificación asociada en el repositorio [browser-compat-data](https://github.com/mdn/browser-compat-data).
Por ejemplo, la página {{cssxref("text-align")}} tiene el siguiente metadato, que utiliza para obtener la información de especificación asociada.

```yaml
browser-compat: css.property.text-align
```

Algunas características no se mantienen en el repositorio anterior.
En estos casos, la información de especificación se puede agregar a los metadatos de la página usando la clave `spec-urls`.
Por ejemplo, el atributo [`aria-atomic`](/es/docs/Web/Accessibility/ARIA/Attributes/aria-atomic) tiene el metadato:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

La tabla de especificaciones para el metadato `css.property.text-align` anterior se representa en una tabla como se muestra:

### Especificaciones

{{Specifications}}

## Características no estándar

Al documentar una función no estándar, en particular una que se eliminó de un canal de estandarización, no llame a la macro `\{{Specifications}}`.

En su lugar, trate de proporcionar información sobre el estado de estandarización y las posibles alternativas. Ejemplos:

- Este método ya no está en un camino de estandarización. Se conserva por motivos de compatibilidad. Utilice _este otro método_ en su lugar.
- Este método originalmente formaba parte de [Rango y recorrido de nivel 2 del DOM](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), pero está ausente en la especificación DOM actual. Esta característica ya no está en camino de convertirse en un estándar.
- Este manejador de eventos era parte de la antigua [API de WebVR](https://immersive-web.github.io/webvr/spec/1.1/) que ha sido reemplazada por la [API de dispositivo WebXR](https://immersive-web.github.io/webxr/). Ya no está en camino de convertirse en un estándar.
