---
title: Tablas de especificaciones
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Cada página de referencia en MDN debe proporcionar información sobre la especificación o especificaciones en las que se definió esa API o tecnología. Este artículo muestra el aspecto de estas tablas y explica cómo agregarlas.

La definición de la sección de especificaciones es similar a la definición de la [tabla de compatibilidad](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), comúnmente se genera a partir de la misma fuente de datos y, por lo general, aparece inmediatamente antes de esta en una página.

## Tablas de especificaciones estándar

La sección de especificaciones estándar debería verse así:

```md
## Especificaciones

\{{Specifications}}
```

La macro `\{{Specifications}}` genera la tabla de especificaciones basándose en los valores del front-matter de la página.

Por defecto, se utilizan los valores de la clave `browser-compat`.
Cada valor hace referencia a una característica particular y a su información de compatibilidad y especificación asociada en el repositorio [browser-compat-data](https://github.com/mdn/browser-compat-data).
Por ejemplo, la página {{cssxref("text-align")}} tiene la siguiente clave, que utiliza para obtener la información de especificación asociada.

```yaml
browser-compat: css.property.text-align
```

Algunas características no se mantienen en el repositorio anterior.
En estos casos, la información de especificación se puede agregar al front-matter de la página usando la clave `spec-urls`.
Por ejemplo, el atributo [`aria-atomic`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) tiene la clave en el front-matter:

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

La tabla de especificaciones para la clave `css.property.text-align` anterior se representa en una tabla como se muestra:

### Especificaciones

{{Specifications}}

## Características no estándar

Al documentar una característica no estándar, en particular una que se haya eliminado de un proceso de estandarización, no llames a la macro `\{{Specifications}}`.

En su lugar, intenta proporcionar información sobre el estado de la característica y las posibles alternativas. Ejemplos:

- Este método ya no está en proceso de estandarización. Se conserva por motivos de compatibilidad. Utilice _este otro método_ en su lugar.
- Este método originalmente formaba parte de [DOM Level 2 Traversal and Range](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), pero está ausente en la especificación DOM actual. Esta característica ya no está en camino de convertirse en un estándar.
- Este manejador de eventos era parte de la antigua [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/) que ha sido reemplazada por la [WebXR Device API](https://immersive-web.github.io/webxr/). Ya no está en camino de convertirse en un estándar.
