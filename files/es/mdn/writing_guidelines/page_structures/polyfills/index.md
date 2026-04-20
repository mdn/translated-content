---
title: Polyfills
slug: MDN/Writing_guidelines/Page_structures/Polyfills
l10n:
  sourceCommit: 15be229ea1379b99a02f0c8b102f2acb5c3d6633
---

Esta página describe la política de MDN para incluir polyfills en la documentación de referencia de [JavaScript](/es/docs/Web/JavaScript) y [Web APIs](/es/docs/Web/API).

Un {{glossary("Polyfill", "polyfill")}} es una implementación de una característica de la plataforma web que los sitios web pueden usar en navegadores que no admiten de forma nativa la característica. Los polyfills permiten a las desarrolladoras web escribir una sola base de código dirigida a múltiples navegadores y versiones de navegador, incluso cuando algunos de esos navegadores no admiten algunas de las características utilizadas.

Los polyfills son importantes para las desarrolladoras web, pero también son un riesgo: los polyfills con errores pueden romper sitios web o crear vulnerabilidades de seguridad. Por esta razón, MDN recomienda fuentes específicas para polyfills y es muy conservadora al agregar fuentes adicionales.

## Polyfills en la referencia de JavaScript

### Polyfills seleccionados

La [documentación de referencia de JavaScript](/es/docs/Web/JavaScript) puede vincular a polyfills de dos fuentes:

- La biblioteca [core-js](https://github.com/zloirock/core-js/tree/master).
- La organización [es-shims](https://github.com/es-shims).

Las fuentes son seleccionadas por las mantenedoras de MDN según los siguientes criterios:

- Conformidad con la especificación para la característica para la cual están proporcionando una implementación.
- Adopción por la comunidad de desarrollo web, como se ve en métricas como el número de descargas de [npm](https://www.npmjs.com/).

### Proponer una fuente de polyfill adicional

Cualquiera puede proponer que MDN reconozca una fuente adicional de polyfills [iniciando una discusión en el foro de discusión de MDN](https://github.com/orgs/mdn/discussions). Sin embargo, las mantenedoras de MDN esperan que el número de polyfills reconocidos vinculados desde MDN permanezca muy pequeño, para reducir el riesgo de recomendar polyfills que causen problemas a las desarrolladoras web.

### Integración de polyfills en las páginas

Cuando una página en la documentación de referencia de JavaScript vincula a un polyfill, agrega el enlace en la sección "Véase también" al final de la página.

El enlace se coloca al comienzo de la lista "Véase también", en el siguiente formato:

```md
- [Polyfill for `featureName` in `project-name`](link)
```

## Polyfills en la referencia de Web API

### Polyfills seleccionados

La [documentación de referencia de Web API](/es/docs/Web/API) puede vincular a polyfills que se mantienen junto con la especificación para la característica en sí.

Por ejemplo, la [Trusted Types API](/es/docs/Web/API/Trusted_Types_API) tiene un polyfill que se [mantiene en el mismo repositorio que la especificación](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill). En consecuencia, la documentación de referencia de Trusted Types API en MDN puede vincular a ese polyfill.

### Integración de polyfills en las páginas

Los polyfills se integran típicamente en la [página de descripción general para la API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#tipos_de_páginas_de_web_api).
