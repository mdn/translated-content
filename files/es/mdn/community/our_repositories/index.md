---
title: Repositorios de GitHub de MDN
short-title: Repositorios de GitHub
slug: MDN/Community/Our_repositories
l10n:
  sourceCommit: 405633ae1911
---

La [documentación web de MDN](/) (MDN Web Docs) es un proyecto complejo con muchas partes en movimiento.
Es una buena idea familiarizarse con los diferentes repositorios de código.
Este documento describe los repositorios (repos) que puede necesitar al contribuir a MDN Web Docs.

## Repositorios principales

- [content](https://github.com/mdn/content)
  - : Aquí se mantiene todo el contenido en inglés del sitio, y aquí realizará todos los cambios en el contenido de las páginas, el texto y los ejemplos de código incluidos en las páginas.

- [rari](https://github.com/mdn/rari)
  - : El **backend** de la plataforma MDN Web Docs, donde deberá acudir si desea realizar cambios en las estructuras de las páginas, las plantillas y la maquinaria de renderizado.

- [fred](https://github.com/mdn/fred)
  - : El **frontend** de MDN Web Docs, donde encontrará las funcionalidades relacionadas con los estilos, el diseño y la maquetación.

- [browser-compat-data](https://github.com/mdn/browser-compat-data)
  - : Datos utilizados para generar las tablas de compatibilidad de los navegadores que aparecen en nuestras páginas de referencia.
    Si dispone de información sobre la compatibilidad de los navegadores con las funcionalidades web, o está dispuesto y capacitado para investigar y experimentar, puede ayudar a actualizar los [datos de compatibilidad de los navegadores](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) de MDN.

- [translated-content](https://github.com/mdn/translated-content)
  - : Aquí se encuentra el contenido localizado.
    Acuda aquí si desea ayudar a traducir páginas a cualquiera de nuestros [idiomas mantenidos activamente](https://github.com/mdn/translated-content#locales).

### Infraestructura

- [rumba](https://github.com/mdn/rumba)
  - : Un sistema de backend que proporciona la infraestructura de MDN Plus.

- [workflows](https://github.com/mdn/workflows)
  - : Una colección de GitHub Actions reutilizables para los repositorios de MDN Web Docs.

### Planificación y coordinación

Estos son repositorios utilizados para la planificación de proyectos, la documentación del propio proyecto y los proyectos de la comunidad.

- https://github.com/mdn/mdn
  - : Aquí se mantienen las propuestas de proyectos y los issues de planificación.

- [mdn-community](https://github.com/mdn/mdn-community)
  - : Este repositorio aloja las GitHub Discussions que utilizan escritores y colaboradores cuando necesitan decidir cómo proceder con decisiones de redacción o técnicas.

## Ejemplos de código

Estos repositorios contienen, por lo general, ejemplos de código independientes que son demasiado grandes o que no se pueden representar mediante la macro [`EmbedLiveSample`](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples#live_sample_macros).

> [!NOTE]
> Si está actualizando el código de una página determinada, compruebe si está referenciado en un repositorio de ejemplos correspondiente y, en ese caso, asegúrese de actualizar también dicho repositorio.

- [learning-area](https://github.com/mdn/learning-area)
- [dom-examples](https://github.com/mdn/dom-examples)
- [css-examples](https://github.com/mdn/css-examples)
- [webaudio-examples](https://github.com/mdn/webaudio-examples)
- [webassembly-examples](https://github.com/mdn/webassembly-examples)
- [indexeddb-examples](https://github.com/mdn/indexeddb-examples)
- [js-examples](https://github.com/mdn/js-examples)
- [html-examples](https://github.com/mdn/html-examples)
- [web-components-examples](https://github.com/mdn/web-components-examples)
- [webextension-examples](https://github.com/mdn/webextensions-examples)
- [pwa-examples](https://github.com/mdn/pwa-examples)
- [houdini-examples](https://github.com/mdn/houdini-examples)
- [headless-examples](https://github.com/mdn/headless-examples)
- [perf-examples](https://github.com/mdn/perf-examples)
