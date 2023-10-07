---
title: Git y GitHub
slug: Learn/Tools_and_testing/GitHub
---

{{LearnSidebar}}

Todos los desarrolladores utilizarán algún tipo de **sistema de control de versiones** (**VCS**), una herramienta que les permita colaborar con otros desarrolladores en un proyecto sin peligro de que sobrescriban el trabajo de los demás, y volver a las versiones anteriores de la base de código si existe un problema descubierto más tarde. El VCS más popular (al menos entre los desarrolladores web) es **Git**, junto con **GitHub**, un sitio que proporciona alojamiento para tus repositorios y varias herramientas para trabajar con ellos. Este módulo tiene como objetivo enseñarte lo que necesitas saber sobre ambos.

## Introducción

Los VCS son esenciales para el desarrollo de software:

- Es raro que trabajes en un proyecto completamente por tu cuenta, y tan pronto como comiences a trabajar con otras personas, comenzarás a correr el riesgo de entrar en conflicto con el trabajo del otro, es decir, cuando ambos intentan actualizar simultáneamente la misma pieza de código. Debes tener algún tipo de mecanismo para administrar las ocurrencias y, como resultado, evitar la pérdida de trabajo.
- Cuando trabajes en un proyecto por tu cuenta o con otros, querrás poder hacer una copia de seguridad del código en un lugar central, para que no se pierda si tu computadora se daña.
- También querrás poder volver a versiones anteriores si más tarde descubres un problema. Es posible que hayas empezado a hacer esto en tu propio trabajo mediante la creación de diferentes versiones de un mismo archivo, por ejemplo `myCode.js`, `myCode_v2.js`, `myCode_v3.js`, `myCode_final.js`, `myCode_really_really_final.js`, etc, pero esto es muy propenso a errores y poco fiable.
- Los diferentes miembros del equipo generalmente querrán crear sus propias versiones separadas del código (llamadas **ramas** en Git), trabajar en una nueva característica en esa versión y luego fusionarla de manera controlada (en GitHub usamos **solicitudes de extracción**) con la versión maestra cuando hayan terminado con ella.

Los VCS proporcionan herramientas para satisfacer las necesidades anteriores. [Git](https://git-scm.com/) es un ejemplo de VCS, y [GitHub](https://github.com/) es un sitio web + infraestructura que proporciona un servidor Git más una serie de herramientas realmente útiles para trabajar con repositorios git individuales o en equipo, como informar problemas con el código, herramientas de revisión, características de administración de proyectos tal como asignación de tareas, estados de tareas, y más.

> **Nota:** Git en realidad es un sistema de control de versiones _distribuido_, lo cual significa que se realiza una copia completa del repositorio que contiene la base de código en tu computadora (y en la de todos los demás). Realizas cambios en tu propia copia, y luego empujas esos cambios nuevamente al servidor, donde un administrador decidirá si fusiona tus cambios con la copia maestra.

### ¿Quieres convertirte en un desarrollador web front-end?

Hemos preparado un curso que incluye toda la información esencial que necesitas para alcanzar tu objetivo.

> **Observación:** [Comenzar](/docs/Learn/Front-end_web_developer)

## Prerequisitos

Para usar Git y GitHub, necesitas:

- Una computadora de escritorio con Git instalado (consulta la [página de descargas de Git](https://git-scm.com/downloads)).
- Una herramienta para usar Git. Dependiendo de cómo te guste trabajar, puedes usar un [cliente Git con GUI](https://git-scm.com/downloads/guis/) (te recomendamos GitHub Desktop, SourceTree o Git Kraken) o simplemente usar una ventana de la terminal. De hecho, probablemente sea útil que conozcas al menos los conceptos básicos de los comandos de la terminal git, incluso si tienes la intención de usar una GUI.
- Una [cuenta de GitHub](https://github.com/join). Si aún no tienes una, regístrate ahora usando el enlace provisto.

En términos de conocimiento previo, no necesitas saber nada sobre desarrollo web, Git/GitHub o VCS para iniciar este módulo. Sin embargo, se recomienda que conozcas algo de codificación para que tengas conocimientos informáticos razonables y algún código para almacenar en tus repositorios.

También es preferible que tengas algunos conocimientos básicos de la terminal, por ejemplo, moverte entre directorios, crear archivos y modificar la variable del sistema `PATH`.

> **Nota:** Github no es el único sitio/conjunto de herramientas que puedes usar con Git. Hay otras alternativas, como [GitLab,](https://about.gitlab.com/) que podrías probar, y también podrías intentar configurar tu propio servidor Git y usarlo en lugar de GitHub. Solo nos hemos quedado con GitHub en este curso para proporcionar una forma única que funciona.

## Guías

Ten en cuenta que los enlaces a continuación te llevan a recursos en sitios externos. Eventualmente intentaremos tener nuestro propio curso Git/GitHub dedicado, pero por ahora, esto te ayudará a familiarizarte con el tema en cuestión.

- [Hola mundo (de GitHub)](https://guides.github.com/activities/hello-world/)
  - : Este es un buen lugar para comenzar: esta guía práctica te permite comenzar a usar GitHub, aprender los conceptos básicos de Git, como crear repositorios y ramas, realizar confirmaciones, abrir y fusionar solicitudes de extracción.
- [Manual de Git (en GitHub)](https://guides.github.com/introduction/git-handbook/)
  - : Este Manual de Git profundiza un poco más, explicando qué es un VCS, qué es un repositorio, cómo funciona el modelo básico de GitHub, comandos y ejemplos de Git, y más.
- [Bifurcación de proyectos (de GitHub)](https://guides.github.com/activities/forking/)
  - : Bifurcar proyectos es esencial cuando deseas contribuir al código de otra persona. Esta guía explica cómo.
- [Acerca de las solicitudes de extracción (de GitHub)](https://help.github.com/en/articles/about-pull-requests)
  - : Una útil guía para administrar las solicitudes de extracción, la forma en que los cambios de código sugeridos se entregan a los repositorios de las personas para su consideración.
- [Dominando las incidencias (de GitHub)](https://guides.github.com/features/issues/)
  - : Las incidencias son como un foro para tu proyecto GitHub, donde las personas pueden hacer preguntas e informar problemas, y tú puede administrar las actualizaciones (por ejemplo, asignar personas para solucionar problemas, aclarar el problema, informar a las personas que las cosas están solucionadas). Este artículo te brinda lo que necesitas saber sobre las incidencias.

> **Nota:** Hay **mucho más** que puedes hacer con Git y GitHub, pero creemos que lo anterior representa lo mínimo que necesitas saber para comenzar a usar Git de manera efectiva. A medida que profundices en Git, comenzarás a darte cuenta de que es fácil equivocarse cuando comienzas a usar comandos más complicados. No te preocupes, incluso los desarrolladores web profesionales encuentran a Git confuso a veces, y a menudo resuelven problemas buscando soluciones en la web, o consultando sitios como [Reglas de vuelo para Git](https://github.com/k88hudson/git-flight-rules/blob/master/README_es.md) y [Dangit, ¡git!](https://dangitgit.com/es)

## Ve también

- [Comprender el flujo de GitHub](https://guides.github.com/introduction/flow/)
- [Lista de comandos de Git](https://git-scm.com/docs)
- [Reducción de dominio](https://guides.github.com/features/mastering-markdown/) (el formato de texto en el que escribe en relaciones públicas, comentarios de insidencias y archivos `.md`).
- [Introducción a las páginas de GitHub](https://guides.github.com/features/pages/) (cómo publicar demostraciones y sitios web en GitHub).
- [Aprende la ramificación de Git](https://learngitbranching.js.org/)
- [Reglas de vuelo para Git](https://github.com/k88hudson/git-flight-rules) (un compendio muy útil de formas de lograr cosas específicas en Git, incluida la forma de corregir las cosas cuando te equivocaste).
- [Dangit, git!](https://dangitgit.com/) (otro compendio útil, específicamente de formas de corregir las cosas cuando te equivocaste).
