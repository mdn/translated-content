---
title: Repositorios de documentación web de MDN
slug: MDN/Community/Contributing/Our_repositories
---

{{MDNSidebar}}

La [documentación web de MDN](/) (MDN Web Docs) es un proyecto complejo con muchas partes móviles. Es una buena idea familiarizarse con los diferentes repositorios de los proyectos. Este documento tiene la intención de ayudarlo a encontrar los diferentes repositorios (repos) que puede necesitar al contribuir a diferentes partes del proyecto de MDN Web Docs.

## Niveles de repositorio

### Nivel 1

El código de estos repositorios es fundamental para el proyecto MDN Web Docs y se ejecuta en dominios propiedad de Mozilla.

- [mdn/content](https://github.com/mdn/content)
- [Yari](https://github.com/mdn/yari)
- [rumba](https://github.com/mdn/rumba)
- [browser-compat-data](https://github.com/mdn/browser-compat-data)
- [interactive-examples](https://github.com/mdn/interactive-examples)
- [bob](https://github.com/mdn/bob)

Un proyecto de Nivel 1 debe tener al menos 3 miembros, incluidos al menos dos con permisos de administrador.

### Nivel 2

Estos repositorios se concentran principalmente en contenido de soporte, como ejemplos de código, el área de aprendizaje de MDN Web Docs, localización y ejemplos de proyectos. Ejemplos:

- [dom-examples](https://github.com/mdn/dom-examples)
- [translated-content](https://github.com/mdn/translated-content)
- [learning-area](https://github.com/mdn/learning-area)

Un proyecto de Nivel 2 debe tener al menos 2 miembros, incluido al menos uno con permisos de administrador.

### Nivel 3

Estos son repositorios utilizados para la planificación de proyectos, la documentación del proyecto en sí y la participación de la comunidad. Ejemplos:

- [mdn-community](https://github.com/mdn/mdn-community)
- [mdn/mdn](https://github.com/mdn/mdn)
- [content-team-projects](https://github.com/mdn/content-team-projects).

Un proyecto de nivel 3 necesita al menos 1 administrador.

## Repositorios principales

- **Contenido principal**: <https://github.com/mdn/content>. El repositorio más importante para el contenido de MDN Web Docs: Aquí es donde se almacena todo el contenido principal en inglés del sitio y donde realizará todos los cambios estándar en el contenido de la página.
- **Plataforma de MDN Web Docs**: <https://github.com/mdn/yari>. Aquí es donde se almacena la plataforma de MDN Web Docs y a donde irá si desea realizar cambios en nuestra estructura base de la página o sistema de renderizado.
- **Datos de compatibilidad del navegador**: <https://github.com/mdn/browser-compat-data>. Aquí es donde se almacenan los datos utilizados para generar las tablas de compatibilidad del navegador que se encuentran en nuestras páginas de referencia ([ejemplo](/es/docs/Web/HTML/Element/progress#browser_compatibility)). Si tiene información sobre la compatibilidad del navegador con las funciones web, o está dispuesto y es capaz de investigar y/o experimentar, puede ayudar a actualizar los datos de [compatibilidad del navegador](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md) de MDN.
- **Ejemplos interactivos**: <https://github.com/mdn/interactive-examples>. Este repositorio almacena los bloques de código de ejemplo que se encuentran en la parte superior de muchas de nuestras páginas de referencia ([ejemplo](/es/docs/Web/JavaScript/Reference/Global_Objects/globalThis)). Edite esos ejemplos aquí.
- **Bob**, también conocido como _Builder of Bits_: <https://github.com/mdn/bob> Este repositorio almacena el código de representación que produce los agradables ejemplos editables y copiables que se encuentran en la parte superior de muchas de nuestras páginas de referencia ([ejemplo](/es/docs/Web/JavaScript/Reference/Global_Objects/globalThis)).
- **Contenido traducido/localizado**: <https://github.com/mdn/translated-content>. Aquí es donde se almacena el contenido localizado. Vaya aquí si desea ayudar a traducir páginas a cualquiera de nuestros [idiomas mantenidos activamente](https://github.com/mdn/translated-content#locales).
- **Flujos de trabajo**: <https://github.com/mdn/workflows> Una colección creciente de GitHub Actions reutilizables para usar en los repositorios de MDN Web Docs.

## Ejemplos de código

### Ejemplos de código y demostraciones

[//]: # "TODO: UPDATE WITH REPO TRIAGE"

La organización MDN Web Docs en GitHub contiene una gran cantidad de repositorios de ejemplo. Por lo general, contienen ejemplos de código independientes que a menudo están vinculados desde nuestras páginas, pero ocasionalmente encontrará uno de estos ejemplos incrustado en una página mediante una llamada de macro como esta: `\{{EmbedGHLiveSample("css-examples/learn/tasks/grid/grid1.html", '100%', 700)}}`.

Recuerde siempre que si está actualizando el código en una página determinada, también deberá actualizar el repositorio de ejemplo correspondiente.

- [**dom-examples**](https://github.com/mdn/dom-examples)
- [**css-examples**](https://github.com/mdn/css-examples)
- [**webaudio-examples**](https://github.com/mdn/webaudio-examples)
- [**webassembly-examples**](https://github.com/mdn/webassembly-examples)
- [**indexeddb-examples**](https://github.com/mdn/indexeddb-examples)
- [**js-examples**](https://github.com/mdn/js-examples)
- [**html-examples**](https://github.com/mdn/html-examples)
- [**web-components-examples**](https://github.com/mdn/web-components-examples)
- [**webextension-examples**](https://github.com/mdn/webextensions-examples)
- [**pwa-examples**](https://github.com/mdn/pwa-examples)
- [**houdini-examples**](https://github.com/mdn/houdini-examples)
- [**headless-examples**](https://github.com/mdn/headless-examples)
- [**perf-examples**](https://github.com/mdn/perf-examples)
- [**devtools-examples**](https://github.com/mdn/devtools-examples)
