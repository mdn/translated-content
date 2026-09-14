---
title: Polyfills
slug: MDN/Writing_guidelines/Page_structures/Polyfills
l10n:
  sourceCommit: 15be229ea1379b99a02f0c8b102f2acb5c3d6633
---

Esta página describe la política de MDN para incluir polyfills en la documentación de referencia de [JavaScript](/es/docs/Web/JavaScript) y de las [API web](/es/docs/Web/API).

Un {{glossary("Polyfill", "polyfill")}} es una implementación de una característica de la plataforma web que los sitios pueden usar en navegadores que no admiten la característica de forma nativa. Los polyfills permiten a las personas que desarrollan para la web escribir una única base de código dirigida a varios navegadores y versiones de navegadores, incluso cuando algunos de esos navegadores no admiten algunas de las características utilizadas.

Los polyfills son importantes para quienes desarrollan para la web, pero también son un riesgo: los polyfills con errores pueden romper sitios web o crear vulnerabilidades de seguridad. Por esta razón, MDN recomienda fuentes específicas para los polyfills y es muy conservadora a la hora de añadir fuentes adicionales.

## Polyfills en la referencia de JavaScript

### Polyfills seleccionados

La [documentación de referencia de JavaScript](/es/docs/Web/JavaScript) puede enlazar a polyfills de dos fuentes:

- La biblioteca [core-js](https://github.com/zloirock/core-js/tree/master).
- La organización [es-shims](https://github.com/es-shims).

Las fuentes son seleccionadas por las personas que mantienen MDN según los siguientes criterios:

- Conformidad con la especificación de la característica para la que proporcionan una implementación.
- Adopción por parte de la comunidad de desarrollo web, según métricas como el número de descargas en [npm](https://www.npmjs.com/).

### Proponer una fuente adicional de polyfills

Cualquiera puede proponer que MDN reconozca una fuente adicional de polyfills [iniciando una discusión en el foro de discusión de MDN](https://github.com/orgs/mdn/discussions). Sin embargo, las personas que mantienen MDN esperan que el número de polyfills reconocidos enlazados desde MDN siga siendo muy reducido, para disminuir el riesgo de recomendar polyfills que causen problemas a quienes desarrollan para la web.

### Integración de polyfills en las páginas

Cuando una página de la documentación de referencia de JavaScript enlaza a un polyfill, añade el enlace en la sección "Véase también" al final de la página.

El enlace se coloca al principio de la lista "Véase también", con el siguiente formato:

```md
- [Polyfill for `featureName` in `project-name`](link)
```

## Polyfills en la referencia de la API web

### Polyfills seleccionados

La [documentación de referencia de la API web](/es/docs/Web/API) puede enlazar a polyfills que se mantienen junto con la especificación de la propia característica.

Por ejemplo, la [API Trusted Types](/es/docs/Web/API/Trusted_Types_API) tiene un polyfill que se [mantiene en el mismo repositorio que la especificación](https://github.com/w3c/trusted-types?tab=readme-ov-file#polyfill). En consecuencia, la documentación de referencia de la API Trusted Types en MDN puede enlazar a ese polyfill.

### Integración de polyfills en las páginas

Los polyfills suelen integrarse en la [página de descripción general de la API](/es/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#web_api_page_types).
